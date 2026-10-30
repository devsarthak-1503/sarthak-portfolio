"use client";

import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import {
  Code2,
  Server,
  Database,
  Brain,
  Wrench,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      subtitle: "Dynamic, responsive & accessible digital interfaces",
      icon: Code2,
      skills: [
        "React.js",
        "Next.js 15",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Redux Toolkit",
        "Framer Motion",
        "HTML5 / CSS3",
      ],
    },
    {
      title: "Backend & Systems",
      subtitle: "Scalable REST APIs, microservices & real-time events",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Socket.io",
        "JWT Authentication",
        "RBAC Security",
        "Sequelize ORM",
        "MVC Architecture",
      ],
    },
    {
      title: "Database & Storage",
      subtitle: "Schema design, relational indexing & aggregation",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Mongoose ODM",
        "Aggregation Pipelines",
        "Database Indexing",
        "Data Modeling",
      ],
    },
    {
      title: "AI & Intelligent Integrations",
      subtitle: "Modern LLMs, emotion inference & audio synthesis",
      icon: Brain,
      skills: [
        "Groq AI (LLaMA)",
        "OpenAI API",
        "ElevenLabs Voice API",
        "Face-api.js",
        "Prompt Engineering",
        "AI Agent Workflows",
      ],
    },
    {
      title: "DevOps, Tooling & Cloud Platforms",
      subtitle: "CI/CD pipelines, version control, edge deployments & monitoring",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Vercel Edge",
        "Postman",
        "VS Code",
        "Render",
        "Netlify",
        "ImageKit CDN",
        "npm / npx",
        "ESLint & TypeScript Config",
      ],
      fullWidth: true,
    },
  ];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Capabilities"
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
            <Cpu size={13} className="text-cyan-400" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Skills &amp; Architecture Toolbelt
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            A curated, production-proven stack engineered for high concurrency, rock-solid security, and scalable software delivery.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <SpotlightCard
                key={category.title}
                initialY={25 + idx * 10}
                className={`p-8 lg:p-10 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30 ${
                  category.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  {/* Category Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {/* LIGHT-CONTROLLED ICON POD */}
                      <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-200 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                        <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                        <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-200">
                          {category.title}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clean Minimalist Skills Pills - No visual clutter */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          inline-flex
                          items-center
                          rounded-lg
                          border
                          border-white/[0.07]
                          bg-white/[0.03]
                          px-3.5
                          py-1.5
                          text-xs
                          font-medium
                          text-zinc-300
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:border-cyan-400/40
                          hover:bg-cyan-400/10
                          hover:text-white
                          hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
