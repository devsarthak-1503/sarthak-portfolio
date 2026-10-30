"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";

// Inline Brand Icons
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.3-.37 6.8-1.4 6.8-7.32a5.4 5.4 0 0 0-1.53-3.79 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-3.8 1.3a12.8 12.8 0 0 0-7 0C6.25 1.3 5 1.7 5 1.7a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 9.42c0 5.9 3.5 6.9 6.8 7.32A4.8 4.8 0 0 0 8.8 20v2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "AI Sarthak", href: "#ai-sarthak" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/devsarthak-1503",
      icon: <GithubIcon />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
      icon: <LinkedinIcon />,
    },
    {
      name: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sarthakgaikwad020@gmail.com",
      icon: <Mail size={16} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#03060d] pt-20 pb-12 overflow-hidden">
      {/* Top Gradient Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[220px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block outline-none group">
              <span className="text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-cyan-300">
                Sarthak<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-sm text-xs sm:text-sm leading-relaxed text-zinc-400">
              Software Developer at Bynaric Systems &amp; Full Stack MERN engineer building scalable enterprise web architectures and intelligent interactive products.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4">
            <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-cyan-300">
              // Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top & Telemetry Column */}
          <div className="flex flex-col justify-between items-start lg:items-end lg:col-span-3">
            <div>
              <h4 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-cyan-300">
                // Telemetry
              </h4>
              <div className="flex flex-col gap-2.5 items-start lg:items-end">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Next.js 15 Active Node</span>
                </div>
                <VisitorCounter variant="inline" />
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} Sarthak Gaikwad. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered with <span className="text-zinc-300 font-semibold">Next.js 15, TypeScript &amp; AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
