"use client";

import { motion } from "motion/react";
import { Sparkles, Zap, Eye, Lock, RefreshCw, GitBranch } from "lucide-react";

const highlights = [
  {
    badge: "核心体验",
    title: "对话即工作台",
    subtitle: "不只是聊天，是一个完整的开发环境",
    description:
      "你发送一条消息，AI 便获得了一个完整的沙箱——能执行 bash 命令、安装 pip 包、读写文件、生成图表。完成后文件自动归档到你的线程空间，下次对话随时取用。不需要在终端和聊天窗口之间来回切换，对话本身就是你的工作台。",
    details: [
      { icon: Lock, text: "每个线程独立隔离，互不干扰" },
      { icon: RefreshCw, text: "沙箱超时自动回收，资源零泄漏" },
      { icon: GitBranch, text: "文件产物持久化，跨对话可复用" },
    ],
    visual: {
      lines: [
        { prefix: "user", text: "帮我分析这份 CSV 数据的趋势" },
        { prefix: "agent", text: "正在创建分析环境..." },
        { prefix: "sandbox", text: "pip install pandas matplotlib ✓" },
        { prefix: "sandbox", text: "python analyze.py → chart.png ✓" },
        { prefix: "agent", text: "分析完成，趋势图已生成 →" },
      ],
    },
  },
  {
    badge: "技术难点",
    title: "记忆不是缓存",
    subtitle: "真正理解用户的持久化认知系统",
    description:
      "大多数 AI 的 \"记忆\" 不过是把聊天记录塞进上下文窗口。MedrixFlow 不同——它用独立的记忆提取管线，从对话中自动识别事实、偏好和背景，存储为带置信度评分的结构化知识。高置信度的事实会被优先注入到未来的提示中，低置信度的逐渐衰减。这不是简单的 key-value 缓存，而是一个渐进式学习的认知模型。",
    details: [
      { icon: Sparkles, text: "自动提取——无需手动标记记忆点" },
      { icon: Zap, text: "置信度衰减——错误信息自然淘汰" },
      { icon: Eye, text: "透明可审计——你能看到 AI 记住了什么" },
    ],
    visual: {
      lines: [
        { prefix: "memory", text: "用户偏好: TypeScript (置信度 0.95)" },
        { prefix: "memory", text: "技术栈: React + Next.js (0.88)" },
        { prefix: "memory", text: "工作习惯: 喜欢详细注释 (0.72)" },
        { prefix: "inject", text: "→ 注入提示词，个性化响应" },
      ],
    },
  },
  {
    badge: "架构亮点",
    title: "子代理不是噱头",
    subtitle: "真正的并行任务分解与协作执行",
    description:
      "当任务足够复杂，主代理会拆分为多个子任务并行分发。每个子代理拥有独立上下文和工具集，15 分钟执行超时保护。这不是简单地多调几次 API——子代理之间有任务依赖图管理、结果聚合和冲突检测。最多 3 路并发，真实缩短复杂任务的端到端时间。",
    details: [
      { icon: GitBranch, text: "任务依赖图——自动编排执行顺序" },
      { icon: RefreshCw, text: "15 分钟超时——避免无限循环" },
      { icon: Lock, text: "结果聚合——子代理成果自动合并" },
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
    inject: "#14b8a6",
    lead: "#22d3ee",
    "sub-1": "#0891b2",
    "sub-2": "#06b6d4",
    "sub-3": "#14b8a6",
  };

  return (
    <div className="rounded-xl bg-[#0b1e21] p-5 font-mono text-sm">
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
            不是功能清单，而是真正改变你使用 AI 方式的核心设计
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
