"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, Terminal, Package, Settings, Play, Download } from "lucide-react";

const prerequisites = [
  { name: "Python", version: "3.12+" },
  { name: "Node.js", version: "22+" },
  { name: "pnpm", version: "10.26.2+" },
  { name: "uv", version: "最新版" },
];

const steps = [
  {
    icon: Download,
    title: "克隆项目",
    command: "git clone https://github.com/Citrus-bit/medrix-flow.git && cd medrix-flow",
  },
  {
    icon: Settings,
    title: "复制配置",
    command: "cp config.example.yaml config.yaml",
  },
  {
    icon: Package,
    title: "安装后端",
    command: "cd backend && make install",
  },
  {
    icon: Package,
    title: "安装前端",
    command: "cd frontend && pnpm install",
  },
  {
    icon: Play,
    title: "启动应用",
    command: "make dev",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-white/10 transition-colors duration-200 cursor-pointer flex-shrink-0"
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

export function Installation() {
  return (
    <section id="quickstart" className="relative py-24 sm:py-32">
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
            <span className="gradient-text">快速开始</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            五步完成安装，开始使用 MedrixFlow
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium text-muted-foreground mr-2 self-center">
            前置要求:
          </span>
          {prerequisites.map((req) => (
            <span
              key={req.name}
              className="glass-light rounded-lg px-3 py-1.5 text-sm font-mono"
            >
              <span className="text-foreground font-medium">{req.name}</span>{" "}
              <span className="text-muted-foreground">{req.version}</span>
            </span>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="h-10 w-10 rounded-xl medrix-gradient flex items-center justify-center text-white text-sm font-bold">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full min-h-[24px] bg-border mt-2" />
                )}
              </div>

              <div className="flex-1 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <step.icon className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <div className="glass-light rounded-xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30">
                    <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      terminal
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 bg-[#0b1e21] rounded-b-xl">
                    <code className="text-sm font-mono text-[#e0f2f4] overflow-x-auto">
                      <span className="text-[#22d3ee]">$ </span>
                      {step.command}
                    </code>
                    <CopyButton text={step.command} />
                  </div>
                </div>
                {i === steps.length - 1 && (
                  <p className="text-sm text-muted-foreground mt-3">
                    启动后访问{" "}
                    <code className="text-primary font-mono text-xs px-1.5 py-0.5 rounded bg-primary/10">
                      http://localhost:1000
                    </code>
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
