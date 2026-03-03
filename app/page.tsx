"use client";
import { useState } from "react";

export default function AIPage() {
  const [topic, setTopic] = useState("");
    const [result, setResult] = useState("");
      const [loading, setLoading] = useState(false);

        async function generate() {
            setLoading(true);

                const res = await fetch("/api/generate", {
                      method: "POST",
                            headers: { "Content-Type": "application/json" },
                                  body: JSON.stringify({ topic }),
                                      });

                                          const data = await res.json();
                                              setResult(data.content);
                                                  setLoading(false);
                                                    }

                                                      return (
                                                          <div style={{ padding: 20 }}>
                                                                <h1>AI Article Generator</h1>

                                                                      <input
                                                                              value={topic}
                                                                                      onChange={(e) => setTopic(e.target.value)}
                                                                                              placeholder="Enter topic..."
                                                                                                      style={{
                                                                                                                width: "100%",
                                                                                                                          padding: 10,
                                                                                                                                    marginBottom: 10,
                                                                                                                                            }}
                                                                                                                                                  />

                                                                                                                                                        <button onClick={generate} disabled={loading}>
                                                                                                                                                                {loading ? "Generating..." : "Generate"}
                                                                                                                                                                      </button>

                                                                                                                                                                            <div style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
                                                                                                                                                                                    {result}
                                                                                                                                                                                          </div>
                                                                                                                                                                                              </div>
                                                                                                                                                                                                );
                                                                                                                                                                                                }