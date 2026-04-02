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
  title: "MedrixFlow - 全栈 AI 代理编排平台",
  description:
    "基于 LangGraph 构建的全栈 AI 代理编排平台，支持沙箱执行、持久化记忆、多代理协作和可扩展工具生态。",
  keywords: [
    "AI",
    "LangGraph",
    "Agent",
    "Sandbox",
    "MCP",
    "Next.js",
    "FastAPI",
    "LangChain",
  ],
  openGraph: {
    title: "MedrixFlow - 全栈 AI 代理编排平台",
    description:
      "沙箱执行 · 持久化记忆 · 多代理协作 · 可扩展工具生态",
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
