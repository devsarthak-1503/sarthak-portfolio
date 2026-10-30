"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { Layers, Brain, Database, Cpu, Terminal, ArrowUpRight } from "lucide-react";

function About() {
  const highlights = [
    {
      icon: Layers,
      title: "MERN Stack Architecture",
      description:
        "Building scalable full-stack applications using MongoDB, Express, React, and Node.js with production-ready design patterns.",
      tag: "Full Stack",
    },
    {
      icon: Brain,
      title: "AI Integration & LLMs",
      description:
        "Developing intelligent conversational features using Groq LLaMA, OpenAI APIs, facial emotion detection, and voice synthesis.",
      tag: "Intelligent Systems",
    },
    {
      icon: Database,
      title: "Backend & System Design",
      description:
        "Designing secure JWT authentication, role-based access control (RBAC), REST APIs, and high-throughput database pipelines.",
      tag: "Scalable Systems",
    },
    {
      icon: Cpu,
      title: "Performance & Reliability",
      description:
        "Dedicated to clean architecture, modern state management, responsive UI/UX, and real-time Socket.io communication.",
      tag: "High Efficiency",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Delivered", sub: "MERN & AI" },
    { number: "4+", label: "Production Modules", sub: "Enterprise Scale" },
    { number: "34+", label: "GitHub Repositories", sub: "Open Source" },
    { number: "100%", label: "Code Integrity", sub: "Type & Security Checked" },
  ];

  return (
    <section
      id="about"
      aria-label="About Sarthak Gaikwad"
      className="relative overflow-hidden py-32 scroll-mt-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.55 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-300">
            <Terminal size={13} className="text-cyan-400" />
            <span>ENGINEERING IDENTITY</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Engineering Resilient Systems
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            Full-stack software developer turning complex problems into elegant, production-grade applications with clean architecture.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Bio & Core Stats */}
          <div className="lg:col-span-5">
            <div className="rounded-[28px] border border-white/[0.08] bg-[#070b14]/75 p-8 backdrop-blur-2xl sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-cyan-400">
                // Background &amp; Focus
              </span>

              <h3 className="mb-5 text-2xl sm:text-3xl font-bold leading-tight text-white">
                Turning Ideas Into{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-white bg-clip-text text-transparent">
                  Scalable Products
                </span>
              </h3>

              <p className="mb-4 leading-relaxed text-zinc-300 text-sm sm:text-base">
                I&apos;m Sarthak Gaikwad, a Software Developer at Bynaric Systems and Full Stack MERN engineer specializing in scalable web systems, clean backend APIs, and integrated AI capabilities.
              </p>

              <p className="mb-8 leading-relaxed text-zinc-400 text-sm">
                From responsive frontends using Next.js and React to transactional backends powered by Node.js, Express, MongoDB, and PostgreSQL, I prioritize robust type-safety, clean modular design, and seamless user experiences.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 text-center transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/5"
                  >
                    <h4 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
                      {stat.number}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-zinc-300">
                      {stat.label}
                    </p>
                    <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards with Controlled Light Icons */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <SpotlightCard
                  key={item.title}
                  initialY={25 + index * 10}
                  className="p-7 sm:p-8 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30"
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      {/* Header with Controlled Light Icon Pod and Tag */}
                      <div className="mb-5 flex items-center justify-between">
                        {/* CONTROLLED LIGHT ICON POD */}
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-200 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                          <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>

                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 transition-colors group-hover:text-cyan-300 group-hover:border-cyan-400/30">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="mb-2.5 text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-200">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-400">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-2 pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                      <span>Production Verified</span>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
