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
  Cpu,
} from "lucide-react";

function GithubSection() {
  const repositories = [
    {
      title: "Farmer One Stop Solution",
      description:
        "AI-powered agriculture ecosystem with marketplace, equipment rental, real-time Socket bidding, payments, and Groq AI advisory.",
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

  const engineeringPillars = [
    {
      title: "Full-Stack System Design",
      desc: "Modular MVC controllers, validated middleware, and relational / document schema design.",
      icon: Layers3,
    },
    {
      title: "High-Throughput Backends",
      desc: "Optimized aggregation pipelines, indexed queries, and real-time Socket.io websockets.",
      icon: Database,
    },
    {
      title: "Intelligent AI Systems",
      desc: "Streaming inference via Groq/LLaMA, facial expression detection, and audio APIs.",
      icon: Brain,
    },
    {
      title: "Clean Production Code",
      desc: "Type safety, comprehensive error handling, modular components, and strict linting.",
      icon: Code2,
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.55 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-300">
            <FolderGit2 size={13} className="text-cyan-400" />
            <span>OPEN SOURCE ACTIVITY</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Engineering &amp; Codebase
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            A public track record of architectural discipline, continuous commits, and deployed open-source software.
          </p>
        </motion.div>

        {/* Highlight Stats Row */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "34+", label: "Public Repositories", sub: "Active Open Source" },
            { value: "4+", label: "Flagship Architectures", sub: "Production Deployed" },
            { value: "MERN", label: "Specialized Stack", sub: "Next.js / Node / Mongo / PG" },
            { value: "AI", label: "LLM & Vision Pipelines", sub: "Inference Integrations" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group rounded-2xl border border-white/[0.08] bg-[#070b14]/75 p-6 text-center backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/35 hover:bg-cyan-500/5"
            >
              <h3 className="mb-1 text-3xl font-bold text-white transition-colors group-hover:text-cyan-300">
                {stat.value}
              </h3>
              <p className="text-xs font-semibold text-zinc-300">{stat.label}</p>
              <p className="mt-1 font-mono text-[10px] text-zinc-500">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Repositories */}
        <div className="mb-14">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white sm:text-2xl tracking-tight">
              Featured Repositories
            </h3>
            <a
              href="https://github.com/devsarthak-1503"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-white transition-colors"
            >
              <span>View 34+ repos</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {repositories.map((repo, idx) => (
              <SpotlightCard
                key={repo.title}
                initialY={20 + idx * 10}
                className="flex flex-col justify-between p-8 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-300">
                      {repo.badge}
                    </span>
                    <a
                      href={repo.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${repo.title} on GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </div>

                  <h4 className="mb-2.5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-200">
                    {repo.title}
                  </h4>

                  <p className="mb-6 text-xs sm:text-sm leading-relaxed text-zinc-400">
                    {repo.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {repo.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs font-medium text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-zinc-400 transition-colors hover:text-cyan-300"
                  >
                    <GitBranch size={13} className="text-cyan-400" />
                    <span>Inspect Source Code</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Engineering Pillars Grid */}
        <div className="mb-14">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl tracking-tight">
            Engineering Principles &amp; Standards
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringPillars.map((item, idx) => {
              const Icon = item.icon;

              return (
                <SpotlightCard
                  key={item.title}
                  initialY={20 + idx * 8}
                  className="p-6 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30"
                >
                  {/* Controlled light icon pod */}
                  <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-200">
                    <Icon size={18} />
                    <span className="pointer-events-none absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <h4 className="mb-1.5 text-sm font-bold text-white transition-colors group-hover:text-cyan-200">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

        {/* GitHub Call to Action */}
        <SpotlightCard className="p-8 text-center sm:p-12 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl">
          <div className="mx-auto max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-wider text-cyan-300">
              <GitBranch size={12} />
              <span>GITHUB CODEBASE</span>
            </div>

            <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Explore 34+ Public Repositories
            </h3>

            <p className="mb-8 text-sm text-zinc-400 leading-relaxed">
              Every commit showcases full-stack architecture, clean coding practices, and continuous engineering experimentation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://github.com/devsarthak-1503"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                <GitBranch size={16} />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

export default GithubSection;
