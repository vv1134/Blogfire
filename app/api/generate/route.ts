import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
      const { topic } = await req.json();

          const response = await fetch(
                "https://integrate.api.nvidia.com/v1/chat/completions",
                      {
                              method: "POST",
                                      headers: {
                                                "Content-Type": "application/json",
                                                          "Authorization": `Bearer ${process.env.NVIDIA_API_KEY}`,
                                                                  },
                                                                          body: JSON.stringify({
                                                                                    model: "moonshotai/kimi-k2-instruct",
                                                                                              messages: [
                                                                                                          {
                                                                                                                        role: "system",
                                                                                                                                      content:
                                                                                                                                                      "You write professional structured Blogger HTML articles with headings and FAQs.",
                                                                                                                                                                  },
                                                                                                                                                                              {
                                                                                                                                                                                            role: "user",
                                                                                                                                                                                                          content: `Write detailed SEO article on ${topic}`,
                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                ],
                                                                                                                                                                                                                                          temperature: 0.7,
                                                                                                                                                                                                                                                    max_tokens: 2000,
                                                                                                                                                                                                                                                            }),
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                      );

                                                                                                                                                                                                                                                                          const data = await response.json();

                                                                                                                                                                                                                                                                              return NextResponse.json({
                                                                                                                                                                                                                                                                                    content: data.choices?.[0]?.message?.content || "No response",
                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                          } catch (error) {
                                                                                                                                                                                                                                                                                              return NextResponse.json(
                                                                                                                                                                                                                                                                                                    { error: "AI generation failed" },
                                                                                                                                                                                                                                                                                                          { status: 500 }
                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                }