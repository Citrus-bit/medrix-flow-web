"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Download, ExternalLink, FileArchive } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const cloneCommand = "git clone https://github.com/Citrus-bit/medrix-flow.git";

const techStack = [
  { name: "LangGraph", color: "#0891b2" },
  { name: "LangChain", color: "#06b6d4" },
  { name: "FastAPI", color: "#14b8a6" },
  { name: "Next.js 16", color: "#0f2b2e" },
  { name: "React 19", color: "#22d3ee" },
  { name: "TailwindCSS 4", color: "#06b6d4" },
  { name: "Shadcn UI", color: "#0e4a5a" },
  { name: "TanStack Query", color: "#0891b2" },
  { name: "LangGraph SDK", color: "#14b8a6" },
];

function CloneCopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cloneCommand);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = cloneCommand;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer flex-shrink-0"
      aria-label="复制命令"
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-400" />
      ) : (
        <Copy className="h-4 w-4 text-[#7eb8c2]" />
      )}
    </button>
  );
}

export function DownloadSection() {
  return (
    <section id="download" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">获取 MedrixFlow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            选择你喜欢的方式获取项目源码
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto glass-card rounded-2xl p-8 medrix-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
              Git Clone
            </h3>
            <div className="terminal-block flex items-center gap-2 bg-[#0b1e21] rounded-xl px-4 py-3">
              <code className="flex-1 text-sm font-mono text-[#e0f2f4] overflow-x-auto">
                <span className="text-[#22d3ee]">$ </span>
                {cloneCommand}
              </code>
              <CloneCopyButton />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a
              href="https://github.com/Citrus-bit/medrix-flow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass-light rounded-xl px-5 py-4 hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
            >
              <GithubIcon className="h-6 w-6 text-foreground flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  GitHub 仓库
                </p>
                <p className="text-xs text-muted-foreground">
                  查看源码、Star、Fork
                </p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
            </a>

            <a
              href="https://github.com/Citrus-bit/medrix-flow/archive/refs/heads/main.zip"
              className="flex items-center gap-3 glass-light rounded-xl px-5 py-4 hover:bg-accent/50 transition-colors duration-200 cursor-pointer"
            >
              <FileArchive className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  下载 ZIP
                </p>
                <p className="text-xs text-muted-foreground">
                  直接下载源码压缩包
                </p>
              </div>
              <Download className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
            </a>
          </div>

          <div className="glass-light rounded-xl px-5 py-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-bold text-sm">🐳</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Docker 部署
                </p>
                <p className="text-xs text-muted-foreground">
                  <code className="text-primary/80 font-mono">make up</code> 一键构建并启动生产环境 Docker 容器
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
              技术栈
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium glass-light"
                >
                  <span
                    className="h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: tech.color }}
                  />
                  {tech.name}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                MIT License
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
