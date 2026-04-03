import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/Citrus-bit/medrix-flow",
  },
  {
    title: "配置指南",
    href: "https://github.com/Citrus-bit/medrix-flow/blob/main/backend/docs/CONFIGURATION.md",
  },
  {
    title: "架构详解",
    href: "https://github.com/Citrus-bit/medrix-flow/blob/main/backend/docs/ARCHITECTURE.md",
  },
  {
    title: "API 参考",
    href: "https://github.com/Citrus-bit/medrix-flow/blob/main/backend/docs/API.md",
  },
  {
    title: "Issues",
    href: "https://github.com/Citrus-bit/medrix-flow/issues",
  },
];

export function Footer() {
  return (
    <footer className="relative py-16 mt-8">
      <div className="section-divider mb-16" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg medrix-gradient flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="gradient-text font-bold text-xl tracking-tight">
                MedrixFlow
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              基于 LangGraph 构建的全栈 AI 代理编排平台，支持沙箱执行、持久化记忆、多代理协作和可扩展工具生态。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              链接
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.title}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              技术驱动
            </h3>
            <div className="flex flex-wrap gap-2">
              {["LangGraph", "LangChain", "FastAPI", "Next.js", "React", "TailwindCSS", "Shadcn UI"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="glass-light rounded-md px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} MedrixFlow. MIT License.
          </p>
          <a
            href="https://github.com/Citrus-bit/medrix-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <GithubIcon className="h-4 w-4" />
            Made with LangGraph
          </a>
        </div>
      </div>
    </footer>
  );
}
