"use client";

import { motion } from "motion/react";
import { ArrowRight, Globe, Server, Cpu, Monitor } from "lucide-react";

const layers = [
  { icon: Globe, name: "Nginx", port: "1000", color: "#0891b2", desc: "统一反向代理入口" },
  { icon: Cpu, name: "LangGraph", port: "2024", color: "#06b6d4", desc: "代理编排引擎" },
  { icon: Server, name: "Gateway", port: "8001", color: "#14b8a6", desc: "FastAPI REST" },
  { icon: Monitor, name: "Frontend", port: "3000", color: "#22d3ee", desc: "Next.js 16 界面" },
];

const routes = [
  { path: "/api/langgraph/*", target: "LangGraph Server", desc: "代理交互 · 线程管理 · SSE 流式传输" },
  { path: "/api/*", target: "Gateway API", desc: "模型 · MCP · Skills · 记忆 · 配置管理" },
  { path: "/*", target: "Frontend", desc: "Next.js Web 界面" },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">系统架构</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            四层清晰分离，Nginx 统一入口，LangGraph 和 FastAPI 各司其职
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {layers.map((layer, i) => (
            <div key={layer.name} className="flex flex-col items-center gap-3">
              <div
                className="glass-card rounded-2xl px-5 py-5 text-center w-full"
                style={{ borderTopColor: layer.color, borderTopWidth: 2 }}
              >
                <layer.icon
                  className="h-6 w-6 mx-auto mb-2"
                  style={{ color: layer.color }}
                />
                <p className="font-semibold text-foreground text-sm">{layer.name}</p>
                <p className="text-xs text-muted-foreground font-mono">:{layer.port}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{layer.desc}</p>
              </div>
              {i < layers.length - 1 && (
                <ArrowRight className="h-4 w-4 text-primary/40 hidden sm:block rotate-0" />
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="glass-light rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            请求路由
          </p>
          <div className="space-y-2">
            {routes.map((route, i) => (
              <motion.div
                key={route.path}
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-accent/40 transition-colors duration-200"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.08 }}
              >
                <code className="text-sm font-mono font-medium text-primary whitespace-nowrap min-w-[140px]">
                  {route.path}
                </code>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">
                  {route.target}
                </span>
                <span className="text-sm text-muted-foreground">
                  {route.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
