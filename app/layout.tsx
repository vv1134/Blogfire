import React from "react";

export const metadata = {
  title: "Blogger Pro",
    description: "AI Blogger Dashboard",
    };

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode;
        }) {
          return (
              <html lang="en">
                    <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
                            {children}
                                  </body>
                                      </html>
                                        );
                                        }