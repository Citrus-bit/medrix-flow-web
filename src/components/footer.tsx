import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const links = [
  {
    title: "GitHub",
    href: "https://github.com/Citrus-bit/medrix-flow",
  },
  {
    title: "文档",
    href: "https://github.com/Citrus-bit/medrix-flow/tree/main/backend/docs",
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
              基于 LangGraph 构建的 AI 超级代理系统，具备沙箱执行、持久化记忆和可扩展工具集成能力。
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
              {["LangGraph", "LangChain", "FastAPI", "Next.js", "React", "Tailwind CSS"].map(
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
