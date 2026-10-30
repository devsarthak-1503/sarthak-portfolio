"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Search,
  Command,
  GitBranch,
  Cpu,
  Radio,
  Brain,
  Terminal,
} from "lucide-react";

function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCommandSearch = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-ai-copilot", { detail: { query: searchQuery } })
      );
      setSearchQuery("");
    }
  };

  const openCopilot = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-ai-copilot", { detail: { query: "" } })
      );
    }
  };

  const quickTech = [
    "Next.js 15",
    "React.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Groq AI",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-36 md:pt-32 lg:pt-28 pb-16 scroll-mt-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 lg:flex-row lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* LEFT COLUMN: BOLD TYPOGRAPHY & COMMAND PALETTE          */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl text-center lg:text-left"
        >
          {/* Glass-Matted Availability Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            </span>
            <span className="font-mono text-[11px] font-medium tracking-wide uppercase text-zinc-300">
              Software Developer @ Bynaric Systems
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.08]">
            Sarthak Gaikwad
          </h1>

          {/* Subtitle / Engineering Role */}
          <h2 className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-300">
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-white bg-clip-text text-transparent font-bold">
              Full-Stack Software Developer
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-300 font-semibold">AI Systems</span>
          </h2>

          <p className="mb-8 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400 font-normal">
            Building high-performance full-stack applications, scalable backend microservices, and AI-driven platforms with top-tier craft, type safety, and clean architecture.
          </p>

          {/* Interactive Command-Palette Search Interface */}
          <form
            onSubmit={handleCommandSearch}
            className="group/cmd mb-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070b14]/80 p-2 pl-4 backdrop-blur-xl transition-all duration-300 focus-within:border-cyan-400/40 focus-within:bg-[#080e1c] focus-within:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
          >
            <Search size={16} className="text-zinc-400 transition-colors group-focus-within/cmd:text-cyan-400" />
            <input
              id="hero-command-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask AI Sarthak anything (e.g. 'Explain Bynaric systems work')..."
              className="w-full min-w-0 bg-transparent text-xs sm:text-sm text-white placeholder-zinc-500 outline-none"
            />
            <div className="hidden sm:flex items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[10px] font-mono text-zinc-400">
              <Command size={10} />
              <span>K</span>
            </div>
            <button
              type="submit"
              className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-300"
            >
              <Sparkles size={12} className="text-cyan-400" />
              <span>Ask AI</span>
            </button>
          </form>

          {/* Call to Actions with Physics Levitation Hover */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-center text-xs sm:text-sm font-semibold text-zinc-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
            >
              Flagship Work
              <ArrowUpRight size={15} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#experience"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-center text-xs sm:text-sm font-medium text-zinc-200 backdrop-blur-md transition-all duration-200 hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
            >
              Experience &amp; Roles
            </a>

            <button
              type="button"
              onClick={openCopilot}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-center text-xs sm:text-sm font-medium text-zinc-400 backdrop-blur-md transition-all duration-200 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Terminal size={14} className="text-cyan-400" />
              AI Copilot
            </button>
          </div>

          {/* Core Tech Stack Strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-6 border-t border-white/[0.06]">
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mr-1">
              Stack:
            </span>
            {quickTech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm transition-all duration-200 hover:border-cyan-400/40 hover:text-white hover:bg-cyan-500/5"
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center lg:-translate-x-2"
        >
          {/* Subtle Ambient Lighting Cones */}
          <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-cyan-500/[0.08] blur-[90px] lg:h-[400px] lg:w-[400px]" />
          <div className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-indigo-500/[0.06] blur-[80px]" />

          {/* Anti-Gravity Blueprint Orbital Rings */}
          <div className="pointer-events-none absolute h-[360px] w-[360px] rounded-full border border-white/[0.05] lg:h-[440px] lg:w-[440px]" />
          <div className="pointer-events-none absolute h-[400px] w-[400px] rounded-full border border-cyan-400/[0.08] border-dashed animate-[spin_80s_linear_infinite] lg:h-[490px] lg:w-[490px]" />
          <div className="pointer-events-none absolute h-[440px] w-[440px] rounded-full border border-white/[0.03] lg:h-[540px] lg:w-[540px]" />

          {/* Zero-Gravity Floating Particles */}
          <div className="pointer-events-none absolute inset-[-30px]">
            <span className="absolute top-[12%] right-[10%] h-1 w-1 rounded-full bg-cyan-400/40 animate-ping" />
            <span className="absolute top-[28%] left-[4%] h-1 w-1 rounded-full bg-cyan-400/30" />
            <span className="absolute bottom-[18%] right-[8%] h-1.5 w-1.5 rounded-full bg-cyan-400/20" />
            <span className="absolute bottom-[28%] left-[12%] h-1 w-1 rounded-full bg-cyan-400/30 animate-pulse" />
          </div>

          {/* ====================================================== */}
          {/* 4 ANTI-GRAVITY LEVITATING ORBITAL MICRO-WIDGETS        */}
          {/* ====================================================== */}

          {/* 1. Orbit Top-Right: Next.js 15 & MERN Engine */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="group absolute -top-5 -right-5 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070b14]/85 px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
              <Cpu size={15} />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Production Node</p>
              </div>
              <p className="text-xs font-semibold text-white">Next.js 15 &amp; MERN</p>
            </div>
          </motion.div>

          {/* 2. Orbit Top-Left: Groq LLaMA & AI */}
          <motion.div
            animate={{ y: [-6, 2, -6] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="group absolute top-10 -left-8 z-20 hidden lg:flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070b14]/85 px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
              <Brain size={15} />
            </div>
            <div className="text-left">
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Groq / LLaMA 3.3</p>
              <p className="text-xs font-semibold text-white">Intelligent AI</p>
            </div>
          </motion.div>

          {/* 3. Orbit Bottom-Right: Socket.io Real-Time Stream */}
          <motion.div
            animate={{ y: [5, -3, 5] }}
            transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="group absolute bottom-4 -right-6 z-20 hidden lg:flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070b14]/85 px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
              <Radio size={15} />
            </div>
            <div className="text-left">
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Real-Time Events</p>
              <p className="text-xs font-semibold text-white">Socket.io Engine</p>
            </div>
          </motion.div>

          {/* 4. Orbit Bottom-Left: GitHub 34+ Repos Activity */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="group absolute -bottom-5 -left-5 z-20 hidden sm:flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#070b14]/85 px-3.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
              <GitBranch size={15} />
            </div>
            <div className="text-left">
              <p className="font-mono text-[9px] uppercase tracking-wider text-zinc-400">Open Source</p>
              <p className="text-xs font-semibold text-white">34+ Repositories</p>
            </div>
          </motion.div>

          {/* Main Levitating Avatar Container with Z-Depth Halo */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 overflow-hidden rounded-full bg-[#080d19] p-2 ring-1 ring-white/[0.1] shadow-[0_0_50px_rgba(0,0,0,0.7)] transition-all duration-500 hover:ring-cyan-400/40"
          >
            <div className="overflow-hidden rounded-full bg-[#0A0F1A]">
              <Image
                src="/Avatar.png"
                alt="Sarthak Gaikwad - Full Stack Software Developer"
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
