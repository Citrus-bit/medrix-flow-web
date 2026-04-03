"use client";

import { motion } from "motion/react";
import { Sparkles, Zap, Eye, Lock, RefreshCw, GitBranch, Layers, AlertTriangle } from "lucide-react";

const highlights = [
  {
    badge: "核心引擎",
    title: "17 层中间件流水线",
    subtitle: "显式有序编排，每层各司其职",
    description:
      "16+ 个中间件各自处理不同的横切关注点，但彼此存在隐式依赖——SandboxMiddleware 必须在 UploadsMiddleware 之后（需要线程目录已创建），ClarificationMiddleware 必须在最后（需要中断图执行）。MedrixFlow 采用显式有序中间件链模式，从 ThreadData 到 Clarification 按固定顺序串行执行，覆盖线程隔离、文件上传、沙箱生命周期、安全审计、上下文摘要、记忆提取、循环检测、Token 追踪等全部横切关注点。",
    details: [
      { icon: Layers, text: "ThreadData → Uploads → Sandbox → ... → TokenUsage → Clarification" },
      { icon: Lock, text: "SandboxAudit 三级分类——block / warn / pass，阻断高危命令" },
      { icon: RefreshCw, text: "Summarization 支持 token 阈值、消息数量、模型上限百分比三种触发策略" },
    ],
    visual: {
      lines: [
        { prefix: "mw-1", text: "ThreadData → 创建线程隔离目录 ✓" },
        { prefix: "mw-3", text: "Sandbox → 获取沙箱执行环境 ✓" },
        { prefix: "mw-10", text: "Memory → 排入异步记忆抽取队列 ✓" },
        { prefix: "mw-15", text: "SandboxAudit → bash 命令安全检查 ✓" },
        { prefix: "mw-17", text: "Clarification → 拦截澄清请求 ✓" },
      ],
    },
  },
  {
    badge: "技术难点",
    title: "记忆不是缓存",
    subtitle: "LLM 驱动的结构化长期记忆",
    description:
      "大多数 AI 的「记忆」不过是把聊天记录塞进上下文窗口。MedrixFlow 用独立的记忆提取管线，由 LLM 分析对话内容，自动提取用户背景（职业、偏好）、事实（带置信度评分）和上下文。11 条中英文正则模式实时检测用户纠正意图（如「不对」「其实是」「actually」），触发记忆优先更新，避免错误事实被持久化。通过可配置的 debounce 机制（默认 30s）聚合多轮对话变化，减少 LLM 调用开销。",
    details: [
      { icon: Sparkles, text: "自动知识抽取——无需手动标记，LLM 自动提取结构化知识" },
      { icon: AlertTriangle, text: "纠正检测——11 条正则实时捕获「不对」「actually」等纠正意图" },
      { icon: Eye, text: "可插拔存储——默认 JSON，可切换 SQLite、Redis 等任意后端" },
    ],
    visual: {
      lines: [
        { prefix: "memory", text: "用户偏好: TypeScript (置信度 0.95)" },
        { prefix: "memory", text: "技术栈: React + Next.js (0.88)" },
        { prefix: "correct", text: "用户: \"其实我现在用 Vue 了\"" },
        { prefix: "update", text: "→ 触发纠正检测，优先更新记忆" },
        { prefix: "inject", text: "→ 高置信度事实注入提示词" },
      ],
    },
  },
  {
    badge: "架构亮点",
    title: "子代理不是噱头",
    subtitle: "真正的并行任务分解与协作执行",
    description:
      "当任务足够复杂，Lead Agent 会拆分为多个子任务并行分发。每个子代理拥有独立上下文和工具集，15 分钟执行超时保护。子代理之间有任务依赖图管理、结果聚合和冲突检测。最多 3 路并发，真实缩短复杂任务的端到端时间。子代理进度通过 onCustomEvent 实时推送到前端 SubtaskCard。",
    details: [
      { icon: GitBranch, text: "任务依赖图——Lead Agent 自动编排执行顺序" },
      { icon: RefreshCw, text: "15 分钟超时——SubagentLimitMiddleware 控制并发上限" },
      { icon: Zap, text: "实时进度——onCustomEvent 触发 SubtaskCard 实时更新" },
    ],
    visual: {
      lines: [
        { prefix: "lead", text: "分析需求 → 拆分为 3 个子任务" },
        { prefix: "sub-1", text: "搜索相关文档 ✓ (2.1s)" },
        { prefix: "sub-2", text: "生成代码草稿 ✓ (4.3s)" },
        { prefix: "sub-3", text: "编写测试用例 ✓ (3.7s)" },
        { prefix: "lead", text: "聚合结果 → 输出完整方案" },
      ],
    },
  },
];

function TerminalVisual({
  lines,
}: {
  lines: { prefix: string; text: string }[];
}) {
  const prefixColors: Record<string, string> = {
    user: "#22d3ee",
    agent: "#14b8a6",
    sandbox: "#0891b2",
    memory: "#06b6d4",
    correct: "#f59e0b",
    update: "#14b8a6",
    inject: "#14b8a6",
    lead: "#22d3ee",
    "sub-1": "#0891b2",
    "sub-2": "#06b6d4",
    "sub-3": "#14b8a6",
    "mw-1": "#22d3ee",
    "mw-3": "#0891b2",
    "mw-10": "#06b6d4",
    "mw-15": "#f59e0b",
    "mw-17": "#14b8a6",
  };

  return (
    <div className="terminal-block rounded-xl bg-[#0b1e21] p-5 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="space-y-1.5">
        {lines.map((line, i) => (
          <p key={i} className="text-[#e0f2f4]/90 text-xs sm:text-sm">
            <span
              className="font-semibold"
              style={{ color: prefixColors[line.prefix] || "#7eb8c2" }}
            >
              [{line.prefix}]
            </span>{" "}
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export function Highlights() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="section-divider mb-24" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">深入了解</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            不是功能清单，而是解决真实工程难题的核心设计
          </p>
        </motion.div>

        <div className="space-y-24">
          {highlights.map((item, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={item.title}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-center`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex-1 min-w-0">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-base text-primary/80 font-medium mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="space-y-3">
                    {item.details.map((d) => (
                      <div key={d.text} className="flex items-start gap-3">
                        <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <d.icon className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <p className="text-sm text-foreground/80">{d.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full min-w-0">
                  <div className="glass-light rounded-2xl p-3">
                    <TerminalVisual lines={item.visual.lines} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
