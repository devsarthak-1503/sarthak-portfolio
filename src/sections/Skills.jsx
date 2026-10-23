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
      subtitle: "Dynamic, Responsive & Accessible Interfaces",
      icon: Code2,
      skills: [
        "React",
        "Next.js 15",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Tailwind CSS",
        "HTML5",
        "CSS3 / SCSS",
        "Framer Motion",
      ],
    },
    {
      title: "Backend & Systems",
      subtitle: "Secure REST APIs, Microservices & Real-Time Events",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Socket.io",
        "JWT Auth",
        "RBAC Security",
        "Sequelize",
        "MVC Pattern",
      ],
    },
    {
      title: "Database & Storage",
      subtitle: "Schemas, Indexing & Aggregation Pipelines",
      icon: Database,
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "Aggregation Pipeline",
        "PostgreSQL",
        "MongoDB Atlas",
        "Data Modeling",
      ],
    },
    {
      title: "AI & Intelligent Integrations",
      subtitle: "Modern LLMs, Emotion Detection & Audio Synthesis",
      icon: Brain,
      skills: [
        "Groq AI (LLaMA)",
        "OpenAI API",
        "Face-api.js",
        "ElevenLabs Voice API",
        "AI Chatbot Architecture",
        "Prompt Engineering",
      ],
    },
    {
      title: "DevOps, Tools & Cloud Deployment",
      subtitle: "CI/CD, Monitoring, Version Control & Environments",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Postman",
        "VS Code",
        "Vercel",
        "Render",
        "Netlify",
        "ImageKit CDN",
        "npm / npx",
        "ESLint & Next Config",
      ],
      fullWidth: true,
    },
  ];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Expertise"
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
            <Cpu size={14} />
            <span>TECH STACK &amp; EXPERTISE</span>
          </div>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Skills Powered By Industry Standards
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            A battle-tested full stack &amp; AI toolbelt designed to build, scale, and deliver resilient digital products.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <SpotlightCard
                key={category.title}
                initialY={30 + idx * 10}
                className={`p-8 lg:p-10 ${category.fullWidth ? "md:col-span-2" : ""}`}
              >
                <div className="flex flex-col h-full justify-between">
                  {/* Category Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] font-semibold text-cyan-400">
                      {category.skills.length} Tools
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          group/pill
                          inline-flex
                          items-center
                          gap-1.5
                          rounded-xl
                          border
                          border-cyan-400/15
                          bg-white/[0.04]
                          px-4
                          py-2
                          text-xs
                          sm:text-sm
                          font-medium
                          text-slate-300
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-cyan-400/50
                          hover:bg-cyan-400/10
                          hover:text-white
                          hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 transition-colors group-hover/pill:bg-cyan-400 group-hover/pill:shadow-[0_0_6px_#22d3ee]" />
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