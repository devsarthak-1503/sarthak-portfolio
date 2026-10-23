"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUp, Sparkles, Heart } from "lucide-react";

// ==========================================
// INLINE BRAND ICONS
// ==========================================
const GithubIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.3-.37 6.8-1.4 6.8-7.32a5.4 5.4 0 0 0-1.53-3.79 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-3.8 1.3a12.8 12.8 0 0 0-7 0C6.25 1.3 5 1.7 5 1.7a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 9.42c0 5.9 3.5 6.9 6.8 7.32A4.8 4.8 0 0 0 8.8 20v2" />
  </svg>
);

const LinkedinIcon = ({ size = 18, className = "" }) => (
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
      icon: <Mail size={18} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-cyan-400/15 bg-[#030712] pt-20 pb-12 overflow-hidden">
      {/* Top Gradient Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#home" className="inline-block outline-none group">
              <span className="text-3xl font-extrabold tracking-tight text-white transition-colors group-hover:text-cyan-400">
                Sarthak<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Full Stack MERN Developer &amp; AI Engineer building resilient, scalable web architectures and intelligent interactive products.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4">
            <h4 className="mb-5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              // Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-300 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top Column */}
          <div className="flex flex-col justify-between items-start lg:items-end lg:col-span-3">
            <div>
              <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                // Status
              </h4>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Next.js 15 Active Node</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-[#061224] px-5 py-2.5 text-xs font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-400 font-mono">
          <p>© {currentYear} Sarthak Gaikwad. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed &amp; Engineered with <span className="text-cyan-400 font-semibold">MERN + AI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;