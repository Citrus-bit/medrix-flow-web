import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MedrixFlow - AI Super Agent System",
  description:
    "An AI super agent system built on LangGraph with sandbox execution, persistent memory, and extensible tool integration.",
  keywords: [
    "AI",
    "LangGraph",
    "Agent",
    "Sandbox",
    "MCP",
    "Next.js",
    "FastAPI",
  ],
  openGraph: {
    title: "MedrixFlow - AI Super Agent System",
    description:
      "Build intelligent AI agents with sandbox execution, persistent memory, and extensible tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}
