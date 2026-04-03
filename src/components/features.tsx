"use client";

import { motion } from "motion/react";
import {
  Bot,
  ShieldCheck,
  Brain,
  MessageSquare,
  Zap,
  Shield,
  Settings,
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
    title: "LangGraph 多代理编排",
    scene: "有向图状态机驱动",
    description:
      "区别于简单的 LLM 链式调用，采用 LangGraph 有向图状态机作为核心编排引擎。Lead Agent 负责任务拆分，最多 3 个子代理并行执行，每个任务独立 15 分钟超时控制。支持同一对话内动态切换模型，Thinking 和 Vision 模式运行时启停。",
    highlights: ["Lead + Subagent 分层", "动态模型热切换", "17 层中间件链"],
  },
  {
    icon: ShieldCheck,
    title: "线程级沙箱隔离",
    scene: "每个对话都是独立环境",
    description:
      "每个对话线程拥有完全隔离的执行环境——虚拟文件系统自动映射到线程专属物理目录，杜绝跨线程数据泄露。支持本地直接执行和 Docker 容器隔离两种引擎，生产环境可切换至 K3s Pod 级别隔离。",
    highlights: ["虚拟文件系统映射", "双沙箱引擎", "Bash 安全审计"],
  },
  {
    icon: Brain,
    title: "LLM 驱动的持久化记忆",
    scene: "真正理解用户的认知系统",
    description:
      "不同于简单的对话历史拼接，由 LLM 自动提取用户背景、事实（带置信度评分）和上下文。11 条中英文正则实时检测用户纠正意图，触发记忆优先更新。防抖批处理减少 LLM 调用开销，可插拔存储后端支持 SQLite、Redis 等。",
    highlights: ["置信度评分", "纠正检测", "可插拔存储"],
  },
  {
    icon: Zap,
    title: "流式传输与断连恢复",
    scene: "生产级实时体验",
    description:
      "基于 LangGraph SDK 的 useStream 实现 SSE 流式渲染——Agent 响应、Thinking 过程、子代理进度全部实时展示。reconnectOnMount + streamResumable 机制确保页面刷新或网络断连后自动重连，后端继续运行不中断。",
    highlights: ["SSE 流式渲染", "断连自动恢复", "乐观 UI 更新"],
  },
  {
    icon: Settings,
    title: "前端配置即用",
    scene: "Zero-Config UX",
    description:
      "模型和 API Key 配置完全在前端 UI 完成，无需手动编辑任何配置文件。首次访问自动弹出配置面板，一键测试模型连通性。保存后自动写入 config.yaml + .env 并热重载生效，无需重启服务。",
    highlights: ["自动引导配置", "一键测试连通性", "配置热重载"],
  },
  {
    icon: MessageSquare,
    title: "多渠道接入",
    scene: "在你习惯的地方使用",
    description:
      "不仅仅是 Web 应用——飞书里直接对话看实时流式回复，卡片消息原地更新。Slack 通过 Socket Mode WebSocket 连接无需公网 IP。Telegram Bot 支持每用户独立会话配置。团队无需切换工具。",
    highlights: ["飞书卡片更新", "Slack Socket Mode", "Telegram Bot"],
  },
  {
    icon: Shield,
    title: "安全审计与可观测性",
    scene: "内置安全与成本监控",
    description:
      "SandboxAuditMiddleware 对每条 bash 命令三级分类（block / warn / pass），自动阻断高危命令。TokenUsageMiddleware 记录每次 LLM 调用的 token 用量，为成本监控和配额管理提供数据基础。全量审计日志输出。",
    highlights: ["命令三级审计", "Token 用量追踪", "安全等级感知"],
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
            不只是又一个 AI 框架——每个模块都解决真实的工程难题
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className={[
                "glass-card rounded-2xl p-6 flex flex-col",
                features.length % 2 === 1 && i === features.length - 1
                  ? "md:col-start-1 md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto lg:col-span-1 lg:max-w-none"
                  : "",
                features.length % 3 === 1 && i === features.length - 1
                  ? "lg:col-start-2"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
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
