"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Search,
  Command,
  GitBranch,
  Cpu,
  Layers,
  Radio,
  Brain,
  ShieldCheck,
  Terminal,
} from "lucide-react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCommandSearch = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("ai-sarthak");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      const input = targetElement.querySelector("input");
      if (input) {
        if (searchQuery.trim()) {
          input.value = searchQuery;
          input.dispatchEvent(new Event("input", { bubbles: true }));
        }
        setTimeout(() => input.focus(), 600);
      }
    }
  };

  // Keyboard shortcut listener for CMD+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const heroInput = document.getElementById("hero-command-input");
        if (heroInput) {
          heroInput.focus();
        } else {
          const aiSection = document.getElementById("ai-sarthak");
          if (aiSection) {
            aiSection.scrollIntoView({ behavior: "smooth" });
            const input = aiSection.querySelector("input");
            if (input) setTimeout(() => input.focus(), 600);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const quickTech = [
    "Next.js 15",
    "React",
    "Node.js",
    "MongoDB",
    "Groq AI",
    "Socket.io",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 md:pt-32 lg:pt-28 pb-16 scroll-mt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 lg:flex-row lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* LEFT COLUMN: BOLD TYPOGRAPHY & COMMAND PALETTE          */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl text-center lg:text-left"
        >
          {/* Glass-Matted Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-[#090e17]/80 px-4 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.12)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-wider uppercase text-cyan-300">
              ● Available for Full-Stack &amp; AI Roles
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Sarthak Gaikwad
          </h1>

          {/* Subtitle / Engineering Role */}
          <h2 className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xl sm:text-2xl font-semibold tracking-wide text-slate-300">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-white bg-clip-text text-transparent font-bold">
              Full-Stack Engineer
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-cyan-400/90 font-bold">AI Developer</span>
          </h2>

          <p className="mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400 font-normal">
            Engineering resilient full-stack platforms, high-throughput backend architectures, and intelligent AI-powered solutions with physics-grade craftsmanship and clean code.
          </p>

          {/* Interactive Command-Palette Search Interface */}
          <form
            onSubmit={handleCommandSearch}
            className="group/cmd mb-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-[#070d18]/90 p-2 pl-4 backdrop-blur-xl transition-all duration-300 focus-within:border-cyan-400/50 focus-within:bg-[#070e1c] focus-within:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
          >
            <Search size={18} className="text-slate-400 transition-colors group-focus-within/cmd:text-cyan-400" />
            <input
              id="hero-command-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask AI Sarthak anything (e.g. 'Explain MERN projects')..."
              className="w-full min-w-0 bg-transparent text-sm text-white placeholder-slate-500 outline-none"
            />
            <div className="hidden sm:flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-400">
              <Command size={11} />
              <span>K</span>
            </div>
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-bold text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            >
              <Sparkles size={13} />
              <span>Ask AI</span>
            </button>
          </form>

          {/* Call to Actions with Physics Levitation Hover */}
          <div className="flex flex-col gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-center text-sm font-bold text-black shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]"
            >
              Explore Architecture
              <ArrowUpRight size={17} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              View Resume
            </a>

            <a
              href="#ai-sarthak"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#090f1d]/80 px-6 py-3.5 text-center text-sm font-semibold text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white"
            >
              <Terminal size={15} className="text-cyan-400" />
              AI Terminal
            </a>
          </div>

          {/* Core Tech Stack Strip */}
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-7 border-t border-white/5">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Stack:
            </span>
            {quickTech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-cyan-400/15 bg-[#061020]/70 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: ANTI-GRAVITY LEVITATING AVATAR & ORBITS   */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center lg:-translate-x-2"
        >
          {/* Ambient Lighting Cones */}
          <div className="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-cyan-500/15 blur-[90px] lg:h-[420px] lg:w-[420px]" />
          <div className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-indigo-500/10 blur-[80px]" />

          {/* Anti-Gravity Blueprint Orbital Rings */}
          <div className="pointer-events-none absolute h-[360px] w-[360px] rounded-full border border-cyan-400/[0.12] lg:h-[440px] lg:w-[440px]" />
          <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full border border-cyan-500/10 border-dashed animate-[spin_80s_linear_infinite] lg:h-[490px] lg:w-[490px]" />
          <div className="pointer-events-none absolute h-[440px] w-[440px] rounded-full border border-white/[0.04] lg:h-[540px] lg:w-[540px]" />

          {/* Zero-Gravity Floating Particles */}
          <div className="pointer-events-none absolute inset-[-30px]">
            <span className="absolute top-[12%] right-[10%] h-1.5 w-1.5 rounded-full bg-cyan-400/40 animate-ping" />
            <span className="absolute top-[28%] left-[4%] h-1 w-1 rounded-full bg-cyan-400/30" />
            <span className="absolute bottom-[18%] right-[8%] h-2 w-2 rounded-full bg-cyan-400/20" />
            <span className="absolute bottom-[28%] left-[12%] h-1.5 w-1.5 rounded-full bg-cyan-400/30 animate-pulse" />
          </div>

          {/* ====================================================== */}
          {/* 4 ANTI-GRAVITY LEVITATING ORBITAL MICRO-WIDGETS        */}
          {/* ====================================================== */}

          {/* 1. Orbit Top-Right: Next.js 15 & MERN Engine */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-[#071326]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <Cpu size={16} />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">Next.js 15 Engine</p>
              </div>
              <p className="text-xs font-bold text-white">Full Stack MERN</p>
            </div>
          </motion.div>

          {/* 2. Orbit Top-Left: Groq LLaMA & AI Vision */}
          <motion.div
            animate={{ y: [-8, 2, -8] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-12 -left-10 z-20 hidden lg:flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-[#071326]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <Brain size={16} />
            </div>
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">Groq / LLaMA 3.3</p>
              <p className="text-xs font-bold text-white">Intelligent AI</p>
            </div>
          </motion.div>

          {/* 3. Orbit Bottom-Right: Socket.io Real-Time Stream */}
          <motion.div
            animate={{ y: [6, -4, 6] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-6 -right-8 z-20 hidden lg:flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-[#071326]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <Radio size={16} />
            </div>
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">Real-Time Events</p>
              <p className="text-xs font-bold text-white">Socket.io Engine</p>
            </div>
          </motion.div>

          {/* 4. Orbit Bottom-Left: GitHub 34+ Repos Activity */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute -bottom-6 -left-6 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-cyan-400/25 bg-[#071326]/90 px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
              <GitBranch size={16} />
            </div>
            <div className="text-left">
              <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">Open Source</p>
              <p className="text-xs font-bold text-white">34+ Repositories</p>
            </div>
          </motion.div>

          {/* Main Levitating Avatar Container with Z-Depth Halo */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 overflow-hidden rounded-full bg-[#080d19] p-2 ring-1 ring-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.25)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_80px_rgba(34,211,238,0.4)]"
          >
            <div className="overflow-hidden rounded-full bg-[#0A0F1A]">
              <Image
                src="/Avatar.png"
                alt="Sarthak Gaikwad - Full Stack MERN Developer"
                width={380}
                height={380}
                priority
                className="
                  h-[290px]
                  w-[290px]
                  rounded-full
                  object-cover
                  object-[50%_20%]
                  transition-transform
                  duration-700
                  sm:h-[350px]
                  sm:w-[350px]
                  lg:h-[390px]
                  lg:w-[390px]
                "
              />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;