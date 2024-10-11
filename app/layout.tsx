"use client";

import { useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [background, setBackground] = useState<string>(
    // "bg-gradient-to-r from-blue-400 to-emerald-400 dark:from-blue-800 dark:to-emerald-800"
    "bg-gradient-to-r from-[#ff80b5] to-[#9089fc] dark:from-[#8b284a] dark:to-[#3839a7]"
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div
            className={`min-h-screen ${background.startsWith("bg-") ? background : ""}`}
            style={{
              backgroundImage: background.startsWith("http")
                ? `url(${background})`
                : "",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Navigation setBackground={setBackground} />
            <div className="pt-16">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
