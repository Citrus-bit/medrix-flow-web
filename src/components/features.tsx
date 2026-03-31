"use client";

import { motion } from "motion/react";
import {
  Bot,
  ShieldCheck,
  Brain,
  Wrench,
  MessageSquare,
  Layers,
  Sparkles,
  Eye,
  Zap,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  scene: string;
  description: string;
  highlights: string[];
}

const features: Feature[] = [
  {
    icon: Bot,
    title: "智能代理系统",
    scene: "复杂任务自动分解",
    description:
      "主代理分析任务后自动拆分为子任务，最多 3 个子代理并行工作。就像一个项目经理带领团队，各自独立完成后汇总结果。",
    highlights: ["动态模型切换", "思考链可视化", "多模态理解"],
  },
  {
    icon: ShieldCheck,
    title: "安全沙箱",
    scene: "让 AI 放心写代码",
    description:
      "每次对话自动创建独立的隔离环境——AI 可以安装依赖、运行脚本、读写文件，但不会影响你的主系统。出错了？丢掉沙箱就好。",
    highlights: ["线程级隔离", "虚拟文件系统", "超时自动回收"],
  },
  {
    icon: Brain,
    title: "持久化记忆",
    scene: "AI 真正\"记住\"你",
    description:
      "不再每次重复自我介绍。系统自动提取你的技术栈偏好、项目背景和工作习惯，下次对话直接带入上下文，越用越懂你。",
    highlights: ["置信度评分", "自动提取", "渐进式学习"],
  },
  {
    icon: Wrench,
    title: "开放工具生态",
    scene: "想用什么就接什么",
    description:
      "内置搜索、抓取、文件处理等常用工具，通过 MCP 协议一键接入任意外部服务。还能通过 Skills 注入领域专业知识，让代理成为行业专家。",
    highlights: ["MCP 协议", "Tavily · Jina · Firecrawl", "Skills 工作流"],
  },
  {
    icon: MessageSquare,
    title: "多平台即用",
    scene: "在你习惯的地方使用",
    description:
      "不仅仅是一个 Web 应用——飞书里直接对话看实时流式回复，Slack 和 Telegram 也能接入。团队无需切换工具，在工作流中直接使用 AI 能力。",
    highlights: ["飞书卡片更新", "Slack Bot", "Telegram 集成"],
  },
  {
    icon: Layers,
    title: "生产级架构",
    scene: "不是玩具，是真正能部署的",
    description:
      "9 层中间件流水线处理鉴权、上传、记忆注入等关键流程。Nginx 做统一入口，LangGraph 和 FastAPI 各司其职，水平扩展无压力。",
    highlights: ["中间件链", "双服务分离", "Docker 一键部署"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="gradient-text">为什么选择 MedrixFlow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            不只是又一个 AI 框架——每个功能都解决真实的开发痛点
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="glass-card rounded-2xl p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl medrix-gradient flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-primary font-medium">
                    {feature.scene}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {feature.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-block rounded-md bg-primary/8 px-2 py-0.5 text-xs text-primary/80 font-medium"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
