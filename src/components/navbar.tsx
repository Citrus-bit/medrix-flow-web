"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons";

const navLinks = [
  { label: "功能", href: "#features" },
  { label: "架构", href: "#architecture" },
  { label: "快速开始", href: "#quickstart" },
  { label: "下载", href: "#download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300",
        scrolled ? "glass-strong shadow-lg" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="h-8 w-8 rounded-lg medrix-gradient flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="gradient-text font-bold text-xl tracking-tight">
            MedrixFlow
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Citrus-bit/medrix-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium medrix-gradient text-white hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-strong rounded-b-2xl px-6 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 cursor-pointer py-1"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Citrus-bit/medrix-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium medrix-gradient text-white w-fit cursor-pointer"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
