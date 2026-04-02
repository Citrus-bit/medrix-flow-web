"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Copy,
  Terminal,
  Package,
  Settings,
  Play,
  Download,
  RotateCcw,
  Zap,
} from "lucide-react";

const prerequisites = [
  { name: "Python", version: "3.12+" },
  { name: "uv", version: "最新版" },
  { name: "Node.js", version: "22+" },
  { name: "pnpm", version: "10+" },
  { name: "nginx", version: "-" },
];

const firstTimeSteps = [
  {
    icon: Download,
    title: "克隆项目",
    command:
      "git clone https://github.com/Citrus-bit/medrix-flow.git && cd medrix-flow",
  },
  {
    icon: Settings,
    title: "生成配置",
    command: "make config",
    note: "自动生成 config.yaml 和 .env（仅首次需要）",
  },
  {
    icon: Package,
    title: "安装依赖",
    command: "make install",
    note: "一键安装前后端所有依赖",
  },
  {
    icon: Play,
    title: "启动服务",
    command: "make dev",
    note: "启动 LangGraph + Gateway + Frontend + Nginx",
  },
];

const quickCommands = [
  { command: "make dev", desc: "开发模式启动（热重载）" },
  { command: "make start", desc: "生产模式启动" },
  { command: "make dev-daemon", desc: "后台守护进程启动" },
  { command: "make stop", desc: "停止所有服务" },
  { command: "make check", desc: "检查前置工具" },
  { command: "make clean", desc: "停止并清理临时文件" },
  { command: "make up", desc: "Docker 生产部署" },
  { command: "make down", desc: "停止 Docker 容器" },
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
            4 步完成安装，无需手动编辑任何配置文件
          </p>
        </motion.div>

        {/* Prerequisites */}
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

        {/* First-time install steps */}
        <div className="max-w-3xl mx-auto space-y-4 mb-20">
          {firstTimeSteps.map((step, i) => (
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
                {i < firstTimeSteps.length - 1 && (
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
                {step.note && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {step.note}
                  </p>
                )}
                {i === firstTimeSteps.length - 1 && (
                  <p className="text-sm text-muted-foreground mt-3">
                    启动后访问{" "}
                    <code className="text-primary font-mono text-xs px-1.5 py-0.5 rounded bg-primary/10">
                      http://localhost:1000
                    </code>
                    ，首次打开页面时设置面板会自动弹出引导配置模型与 API Key。
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily quick-start */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <RotateCcw className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              日常启动
            </h3>
            <span className="text-sm text-muted-foreground">
              已安装过？一条命令就够了
            </span>
          </div>
          <div className="glass-light rounded-xl overflow-hidden mb-8">
            <div className="flex items-center justify-between px-5 py-4 bg-[#0b1e21] rounded-xl">
              <code className="text-base font-mono text-[#e0f2f4]">
                <span className="text-[#22d3ee]">$ </span>make dev
              </code>
              <CopyButton text="make dev" />
            </div>
          </div>

          {/* Common commands reference */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              常用命令
            </h3>
          </div>
          <div className="glass-light rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/30">
              {quickCommands.map((cmd, i) => (
                <div
                  key={cmd.command}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i >= 2 ? "border-t border-border/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <code className="text-xs font-mono text-primary whitespace-nowrap">
                      {cmd.command}
                    </code>
                    <span className="text-xs text-muted-foreground truncate">
                      {cmd.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
