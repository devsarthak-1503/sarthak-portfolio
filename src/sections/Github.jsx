"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import {
  GitBranch,
  ArrowUpRight,
  FolderGit2,
  Brain,
  Database,
  Layers3,
  Code2,
  Star,
  GitFork,
  Terminal,
  Calendar,
} from "lucide-react";

function GithubSection() {
  const repositories = [
    {
      title: "Farmer One Stop Solution",
      description:
        "AI-powered agriculture ecosystem with marketplace, equipment rental, real-time Socket bidding, payments and Groq AI advisory.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Groq AI"],
      link: "https://github.com/devsarthak-1503/Farmer_One_Stop_Solution",
      badge: "Flagship",
    },
    {
      title: "Moody Player",
      description:
        "AI emotion detection music player analyzing live webcam expressions with Face-API, integrating Deezer catalog for adaptive playlists.",
      tech: ["React", "Face API", "JWT", "Deezer API", "Express"],
      link: "https://github.com/devsarthak-1503/MOODY-PLAYER",
      badge: "AI Vision",
    },
    {
      title: "Smart Task Manager",
      description:
        "Production-ready JWT task management application featuring protected API routes, RBAC access, and MongoDB aggregation.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      link: "https://github.com/devsarthak-1503/smart-task-manager",
      badge: "Full Stack",
    },
    {
      title: "Finance Backend Engine",
      description:
        "High-security financial ledger backend engine with RBAC, robust schema design, financial aggregation, and audit logging.",
      tech: ["Node.js", "MongoDB", "JWT", "RBAC", "Mongoose"],
      link: "https://github.com/devsarthak-1503/finance-backend-engine",
      badge: "Security & API",
    },
  ];

  const capabilities = [
    "MERN Stack Specialist",
    "AI & LLM Integration",
    "RESTful API Design",
    "Real-Time WebSockets",
    "MongoDB Aggregation",
    "Secure JWT & RBAC",
  ];

  const timeline = [
    {
      year: "2024",
      title: "Frontend Foundations & Modern JS",
      desc: "Mastered modern JavaScript (ES6+), React component ecosystems, state patterns, and responsive UI foundations.",
    },
    {
      year: "2025",
      title: "Full Stack MERN & Backend Systems",
      desc: "Engineered scalable REST APIs, JWT authentication, MongoDB schemas, Socket.io event-driven architectures, and deployment pipelines.",
    },
    {
      year: "2026",
      title: "AI Integrations & Production Systems",
      desc: "Built AI-first platforms combining LLMs (Groq / LLaMA), computer vision emotion detection, voice agents, and high-performance Next.js 15 apps.",
    },
  ];

  const strengths = [
    {
      title: "Full Stack MERN Development",
      desc: "End-to-end web engineering with React, Next.js, Node.js, and MongoDB.",
      icon: <Layers3 className="text-cyan-400" size={26} />,
    },
    {
      title: "Backend & Systems Design",
      desc: "Modular controllers, middleware, secure authentication, and aggregation pipelines.",
      icon: <Database className="text-cyan-400" size={26} />,
    },
    {
      title: "AI & LLM Integrations",
      desc: "Connecting state-of-the-art AI inference APIs, audio synthesis, and vision models.",
      icon: <Brain className="text-cyan-400" size={26} />,
    },
    {
      title: "Problem Solving & Architecture",
      desc: "Focus on clean code, performance bottlenecks, and real-world system solutions.",
      icon: <Code2 className="text-cyan-400" size={26} />,
    },
  ];

  return (
    <section
      id="github"
      aria-label="Open Source and GitHub Activity"
      className="relative overflow-hidden py-32 scroll-mt-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[6px] text-cyan-400">
            <FolderGit2 size={14} />
            <span>OPEN SOURCE &amp; JOURNEY</span>
          </div>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Open Source &amp; Engineering Activity
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            A track record of continuous learning, architectural discipline, and publicly deployed production software.
          </p>
        </motion.div>

        {/* Highlight Stats Row */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "34+", label: "GitHub Repositories", sub: "Codebase History" },
            { value: "4+", label: "Flagship Projects", sub: "Full Stack Deployments" },
            { value: "MERN", label: "Core Stack Specialization", sub: "Production Proven" },
            { value: "AI", label: "Integrated Platforms", sub: "LLMs & Vision APIs" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-cyan-400/15 bg-[#061020]/70 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              <h3 className="mb-1 text-4xl font-extrabold text-cyan-400">{stat.value}</h3>
              <p className="text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 font-mono text-xs text-slate-400">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Repositories Header */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FolderGit2 size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Featured Repositories
              </h3>
            </div>
            <a
              href="https://github.com/devsarthak-1503"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              View all 34+ repos
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {repositories.map((repo, idx) => (
              <SpotlightCard
                key={repo.title}
                initialY={30 + idx * 10}
                className="flex flex-col justify-between p-8"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] font-semibold uppercase text-cyan-400">
                      {repo.badge}
                    </span>
                    <a
                      href={repo.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${repo.title} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <h4 className="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                    {repo.title}
                  </h4>

                  <p className="mb-6 text-sm leading-relaxed text-slate-300/80">
                    {repo.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {repo.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-cyan-400/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-cyan-400 transition-all hover:translate-x-1"
                  >
                    <GitBranch size={15} />
                    Inspect Source Code
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* High-Value Capabilities Strip */}
        <div className="mb-20 flex flex-wrap items-center justify-center gap-3">
          {capabilities.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#061224]/80 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.06)] transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {item}
            </span>
          ))}
        </div>

        {/* Timeline + Strengths */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {/* Timeline */}
          <div className="rounded-[32px] border border-cyan-400/15 bg-[#061020]/70 p-8 lg:p-10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <div className="mb-8 flex items-center gap-3">
              <Calendar size={22} className="text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                Engineering Timeline
              </h3>
            </div>

            <div className="relative ml-3 space-y-10 border-l-2 border-cyan-400/20 pl-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#061020] shadow-[0_0_10px_#22d3ee]">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </span>
                  <span className="mb-1 inline-block font-mono text-xs font-bold uppercase tracking-wider text-cyan-400">
                    {item.year}
                  </span>
                  <h4 className="mb-2 text-lg font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-300/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="rounded-[32px] border border-cyan-400/15 bg-[#061020]/70 p-8 lg:p-10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)]">
            <div className="mb-8 flex items-center gap-3">
              <Terminal size={22} className="text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">
                Technical Strengths
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item, idx) => (
                <SpotlightCard
                  key={item.title}
                  initialY={20 + idx * 10}
                  className="p-6"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-cyan-300">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-300/80">
                    {item.desc}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Call to Action */}
        <SpotlightCard className="p-10 text-center lg:p-14">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <GitBranch size={14} />
              <span>GITHUB PROFILE &amp; CODEBASE</span>
            </div>

            <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Explore 34+ Public Repositories
            </h3>

            <p className="mb-8 text-base text-slate-300">
              Every commit showcases full-stack architecture, clean coding practices, and continuous engineering experimentation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/devsarthak-1503"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
              >
                <GitBranch size={18} />
                GitHub Profile
              </a>

              <a
                href="#contact"
                className="rounded-full border border-cyan-400/25 bg-white/5 px-7 py-3.5 text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}

export default GithubSection;