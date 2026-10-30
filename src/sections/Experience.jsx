"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "@/components/SpotlightCard";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight,
  Layers,
  Code2,
  Database,
  Cpu,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Bynaric Systems Pvt. Ltd.",
      location: "Pune Division, Maharashtra, India",
      role: "Software Developer",
      type: "Full-time",
      workMode: "On-site",
      period: "Oct 2026 – Present",
      status: "Active Role",
      isCurrent: true,
      description:
        "Architecting, developing, and optimizing high-performance web applications and backend systems at enterprise scale.",
      keyPoints: [
        "Leading the development and architectural enhancement of core production web applications.",
        "Engineering scalable backend API integrations and secure data processing workflows.",
        "Collaborating across engineering teams to uphold stringent code quality, performance audits, and release standards.",
      ],
      skills: ["Next.js", "React.js", "Node.js", "TypeScript", "PostgreSQL", "REST APIs", "Sequelize"],
    },
    {
      company: "Bynaric Systems Pvt. Ltd.",
      location: "Pune Division, Maharashtra, India",
      role: "Software Developer Trainee",
      type: "Internship",
      workMode: "Remote",
      period: "Jul 2026 – Oct 2026",
      status: "Promoted to Full-time",
      isCurrent: false,
      description:
        "Contributed to the engineering and deployment of an institutional inventory management system across full-stack modules.",
      keyPoints: [
        "Contributed to full-stack institutional inventory management system with real-time tracking.",
        "Developed high-performance responsive interfaces using Next.js, React.js, TypeScript, and Tailwind CSS.",
        "Built robust backend API integrations and business logic pipelines using Node.js, Express.js, and REST APIs.",
        "Implemented database schema operations and ORM migrations with PostgreSQL and Sequelize.",
        "Engineered key institutional modules: CDSR Write-Off, Sales Master, Equipment Allocation, and Existing Stock Verification.",
        "Conducted functional testing, debugging, code reviews, and reliability optimizations across production releases.",
      ],
      skills: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Sequelize",
        "REST APIs",
      ],
    },
  ];

  const education = {
    institution: "SND College of Engineering and Research Center",
    location: "Babulgaon, Yeola, Maharashtra",
    degree: "Bachelor of Computer Engineering",
    period: "Undergraduate Program",
    highlights: [
      "Core focus on Data Structures & Algorithms, Database Management Systems, Computer Networks, and Operating Systems.",
      "Applied computer science foundations to full-stack web applications and AI-driven platforms.",
    ],
  };

  return (
    <section
      id="experience"
      aria-label="Professional Experience & Education"
      className="relative overflow-hidden py-32 scroll-mt-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.55 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-300">
            <Briefcase size={13} className="text-cyan-400" />
            <span>CAREER TRAJECTORY</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            Battle-tested enterprise engineering experience building scalable systems, resilient APIs, and institutional digital products.
          </p>
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <SpotlightCard
              key={`${exp.role}-${exp.period}`}
              initialY={25 + index * 15}
              className="p-8 sm:p-10 lg:p-12 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-6 border-b border-white/[0.06]">
                {/* Left: Role, Company & Mode */}
                <div className="flex items-start gap-4">
                  {/* Controlled Light Icon Pod */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                    <Building2 size={24} />
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200">
                        {exp.role}
                      </h3>
                      {exp.isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {exp.status}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-xs font-medium text-zinc-300">
                          {exp.status}
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-400">
                      <span className="font-semibold text-zinc-200">{exp.company}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-zinc-500" />
                        {exp.location}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 text-xs font-mono text-zinc-300">
                        {exp.type} ({exp.workMode})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Date Badge */}
                <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs font-mono text-zinc-300">
                  <Calendar size={13} className="text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description & Impact Bullets */}
              <div className="mt-6 space-y-4">
                <p className="text-base leading-relaxed text-zinc-300">
                  {exp.description}
                </p>

                <div className="grid gap-2.5 pt-2">
                  {exp.keyPoints.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-transparent p-2 transition-all duration-300 hover:border-white/[0.05] hover:bg-white/[0.02]"
                    >
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                        <ChevronRight size={12} strokeWidth={2.5} />
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.06]">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mr-2">
                  Stack:
                </span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}

          {/* Education Card */}
          <SpotlightCard
            initialY={50}
            className="p-8 sm:p-10 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pb-6 border-b border-white/[0.06]">
              <div className="flex items-start gap-4">
                {/* Controlled Light Icon Pod */}
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]">
                  <GraduationCap size={24} />
                  <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-200">
                      {education.degree}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-0.5 text-xs font-medium text-zinc-300">
                      Engineering
                    </span>
                  </div>

                  <p className="mt-1 text-base font-semibold text-zinc-300">
                    {education.institution}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-zinc-500">
                    <MapPin size={12} />
                    {education.location}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-1.5 text-xs font-mono text-zinc-300">
                <Calendar size={13} className="text-cyan-400" />
                <span>{education.period}</span>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              {education.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    <ChevronRight size={12} strokeWidth={2.5} />
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-300">{h}</p>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
