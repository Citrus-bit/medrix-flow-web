"use client";

import { motion } from "motion/react";
import { ArrowDown, ExternalLink } from "lucide-react";

const stats = [
  { value: "17", label: "中间件流水线" },
  { value: "3", label: "子代理并发" },
  { value: "20+", label: "工具集成" },
  { value: "277", label: "测试用例" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 animate-float"
          style={{
            background:
              "radial-gradient(circle, #0891b2 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full opacity-15 animate-float"
          style={{
            background:
              "radial-gradient(circle, #22d3ee 0%, transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 animate-float"
          style={{
            background:
              "radial-gradient(circle, #14b8a6 0%, transparent 70%)",
            animationDelay: "4s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 glass-light rounded-full px-5 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              基于 LangGraph 构建的全栈 AI 代理编排平台
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <span className="gradient-text">AI 超级代理</span>
          <br />
          <span className="text-foreground">系统</span>
        </motion.h1>

        <motion.p
          className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          沙箱执行 · 持久化记忆 · 多代理协作 · 可扩展工具生态
          <br className="hidden sm:block" />
          在隔离环境中执行代码、浏览网页、管理文件，跨对话保留上下文。
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold medrix-gradient text-white medrix-glow hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            <ArrowDown className="h-5 w-5" />
            立即下载
          </a>
          <a
            href="https://github.com/Citrus-bit/medrix-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold border border-border text-foreground hover:bg-accent transition-colors duration-200 cursor-pointer"
          >
            <ExternalLink className="h-5 w-5" />
            查看文档
          </a>
        </motion.div>

        <motion.div
          className="glass-light rounded-2xl p-1 mx-auto max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="terminal-block rounded-xl bg-[#0b1e21] p-6 font-mono text-sm text-left overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-[#7eb8c2] text-xs">terminal</span>
            </div>
            <div className="space-y-1.5 text-[#e0f2f4]">
              <p>
                <span className="text-[#22d3ee]">$</span> git clone
                https://github.com/Citrus-bit/medrix-flow.git
              </p>
              <p>
                <span className="text-[#22d3ee]">$</span> cd medrix-flow &&
                make config && make install
              </p>
              <p>
                <span className="text-[#22d3ee]">$</span> make dev
              </p>
              <p className="text-[#14b8a6]">
                ✓ LangGraph server running on :2024
              </p>
              <p className="text-[#14b8a6]">✓ Gateway API running on :8001</p>
              <p className="text-[#14b8a6]">✓ Frontend running on :3000</p>
              <p className="text-[#14b8a6]">✓ Nginx proxy running on :1000</p>
              <p className="text-[#22d3ee]">
                → Ready at http://localhost:1000
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl px-4 py-3">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
