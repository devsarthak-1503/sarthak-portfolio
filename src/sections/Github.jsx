import { motion } from "framer-motion";
import {
  GitBranch,
  ArrowUpRight,
  FolderGit2,
  Brain,
  Database,
  Layers3,
  Code2
} from "lucide-react";

function GithubSection() {
  const repositories = [
    {
      title: "Farmer One Stop Solution",
      description:
        "AI-powered agriculture ecosystem with marketplace, live bidding, payments and intelligent farming assistance.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Groq AI"],
      link: "https://github.com/devsarthak-1503/Farmer_One_Stop_Solution",
    },
    {
      title: "Moody Player",
      description:
        "AI music platform using facial emotion detection, Deezer integration, playlists and personalized recommendations.",
      tech: ["React", "Face API", "JWT", "Deezer API"],
      link: "https://github.com/devsarthak-1503/MOODY-PLAYER",
    },
    {
      title: "Smart Task Manager",
      description:
        "JWT-based task management application with authentication, CRUD operations and protected routes.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      link: "https://github.com/devsarthak-1503/smart-task-manager",
    },
    {
      title: "Finance Backend Engine",
      description:
        "Secure backend architecture with RBAC, financial APIs and aggregation-based analytics.",
      tech: ["Node.js", "MongoDB", "JWT", "RBAC"],
      link: "https://github.com/devsarthak-1503/finance-backend-engine",
    },
  ];

  const capabilities = [
    "MERN Stack",
    "AI Integration",
    "Backend Architecture",
    "REST APIs",
    "Real-Time Systems",
    "Database Design",
  ];

  const timeline = [
    {
      year: "2024",
      title: "Frontend Foundations",
      desc: "HTML, CSS, JavaScript and frontend foundations.",
    },
    {
      year: "2025",
      title: "Full Stack Development",
      desc: "React, Backend Development and Full Stack Applications.",
    },
    {
      year: "2026",
      title: "AI Powered Applications",
      desc: "AI-powered products, MERN architecture and scalable systems.",
    },
  ];

  const strengths = [
    {
      title: "Full Stack Development",
      icon: <Layers3 className="mb-4 text-cyan-400" size={28} />,
    },
    {
      title: "Backend Architecture",
      icon: <Database className="mb-4 text-cyan-400" size={28} />,
    },
    {
      title: "AI Integration",
      icon: <Brain className="mb-4 text-cyan-400" size={28} />,
    },
    {
      title: "Problem Solving",
      icon: <Code2 className="mb-4 text-cyan-400" size={28} />,
    },
  ];

  return (
    <section id="github" className="relative overflow-hidden py-32">
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            Development Journey
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Open Source & Development Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Building full-stack applications, AI-powered products and scalable
            backend systems through continuous learning and hands-on
            development.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["34+", "Repositories"],
            ["4+", "Flagship Projects"],
            ["MERN", "Primary Stack"],
            ["AI", "Integrated Apps"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <h3 className="mb-2 text-4xl font-bold text-cyan-400">{value}</h3>
              <p className="text-slate-300">{label}</p>
            </div>
          ))}
        </div>

        {/* Featured Repositories */}
        <div className="mb-24">
          <div className="mb-10 flex items-center gap-3">
            <FolderGit2 className="text-cyan-400" />
            <h3 className="text-3xl font-bold text-white">
              Featured Repositories
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {repositories.map((repo) => (
              <div
                key={repo.title}
                className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              >
                <h4 className="mb-4 text-2xl font-semibold text-white">
                  {repo.title}
                </h4>

                <p className="mb-6 leading-relaxed text-slate-400">
                  {repo.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-3">
                  {repo.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/15 bg-white/5 px-4 py-2 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={repo.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 transition-all hover:translate-x-1"
                >
                  View Repository
                  <ArrowUpRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* High-Value Capabilities Showcase */}
        <div className="mb-24 flex flex-wrap items-center justify-center gap-4">
          {capabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-6 py-3 text-sm font-semibold tracking-wide text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Timeline + Strengths */}
        <div className="mb-24 grid gap-8 lg:grid-cols-2">
          {/* Timeline */}
          <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl">
            <h3 className="mb-10 text-3xl font-bold text-white">
              Development Timeline
            </h3>

            <div className="relative ml-3 space-y-10 border-l border-cyan-400/20 pl-8">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-400 bg-cyan-400/20 ring-4 ring-[#0f172a]">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </span>
                  <p className="mb-1 text-sm font-bold tracking-wider text-cyan-400">
                    {item.year}
                  </p>
                  <h4 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="rounded-3xl border border-cyan-400/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl">
            <h3 className="mb-10 text-3xl font-bold text-white">
              Development Strengths
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-cyan-400/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]"
                >
                  {item.icon}
                  <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-300">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Explore My Development Journey
            </h3>

            <p className="mb-8 text-lg text-slate-400">
              From frontend foundations to AI-powered full stack applications,
              every repository reflects continuous learning and real-world
              problem solving.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/devsarthak-1503"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-400"
              >
                <GitBranch size={18} />
                GitHub Profile
              </a>

              <a
                href="#contact"
                className="rounded-full border border-cyan-400/20 bg-white/5 px-6 py-3 text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GithubSection;