"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import { Layers, Brain, Database, Cpu, CheckCircle2, Terminal } from "lucide-react";

function About() {
  const highlights = [
    {
      icon: <Layers size={24} className="text-cyan-400" />,
      title: "MERN Stack Architecture",
      description:
        "Building scalable full-stack applications using MongoDB, Express, React, and Node.js with production-ready patterns.",
      tag: "Full Stack",
    },
    {
      icon: <Brain size={24} className="text-cyan-400" />,
      title: "AI Integration & LLMs",
      description:
        "Creating intelligent user experiences with Groq LLaMA, OpenAI APIs, facial emotion detection, and voice synthesis.",
      tag: "Intelligent Systems",
    },
    {
      icon: <Database size={24} className="text-cyan-400" />,
      title: "Backend & System Design",
      description:
        "Designing secure JWT authentication, role-based access control, REST APIs, and high-performance MongoDB pipelines.",
      tag: "Scalable Systems",
    },
    {
      icon: <Cpu size={24} className="text-cyan-400" />,
      title: "Clean Code & Performance",
      description:
        "Dedicated to clean architecture, modern state management, responsive UI/UX, and real-time Socket.io communication.",
      tag: "High Efficiency",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Built", sub: "MERN & AI" },
    { number: "4+", label: "Flagship Apps", sub: "Full Stack" },
    { number: "100%", label: "Dedication", sub: "Clean Code" },
    { number: "24/7", label: "Passion to Learn", sub: "Continuous Growth" },
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[6px] text-cyan-400">
            <Terminal size={14} />
            <span>GET TO KNOW ME</span>
          </div>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Engineering Modern Web &amp; AI Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Passionate full-stack developer turning ambitious concepts into resilient, scalable digital products with modern code standards.
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-14">

          {/* Left Column: Bio & Live Stats */}
          <div className="lg:col-span-5">
            <div className="rounded-[32px] border border-cyan-400/15 bg-[#061020]/70 p-8 backdrop-blur-xl sm:p-10 shadow-[0_0_40px_rgba(34,211,238,0.06)]">
              <span className="mb-4 inline-block font-mono text-xs uppercase tracking-widest text-cyan-400">
                // Background &amp; Philosophy
              </span>

              <h3 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Turning Ideas Into{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent">
                  Scalable Products
                </span>
              </h3>

              <p className="mb-6 leading-relaxed text-slate-300">
                I&apos;m Sarthak Gaikwad, a Full Stack MERN Developer focused on building high-performance web applications, resilient backend architectures, and AI-powered digital products.
              </p>

              <p className="mb-8 leading-relaxed text-slate-400">
                From interactive frontends built with React and Next.js to secure REST APIs and real-time micro-services powered by Node.js and MongoDB, I strive to write maintainable code that solves tangible real-world problems.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group rounded-2xl border border-cyan-400/15 bg-white/5 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  >
                    <h4 className="text-2xl font-extrabold text-cyan-400 sm:text-3xl">
                      {stat.number}
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-white">
                      {stat.label}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards with Cursor Spotlight */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {highlights.map((item, index) => (
              <SpotlightCard
                key={item.title}
                initialY={30 + index * 10}
                className="p-7 sm:p-8"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    {/* Header with Icon and Tag */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                        {item.icon}
                      </div>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                        {item.tag}
                      </span>
                    </div>

                    <h4 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-slate-300/80">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/5 text-xs font-mono text-cyan-400/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Production Grade Standard</span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;