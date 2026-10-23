"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  Database,
  User,
  ShoppingBag,
  Brain,
  Gavel,
  CreditCard,
  LayoutDashboard,
  Camera,
  Scan,
  Activity,
  Sparkles,
  Radio,
  PlayCircle,
  Lock,
  Layers,
  Shield,
  BarChart,
  ArrowDown,
  Smartphone,
  Coins
} from "lucide-react";

/**
 * Interactive Project Card with Cursor Spotlight & Dynamic Dotted Lights Matrix
 * Dotted lights and spotlight ONLY illuminate around the user's cursor when hovered.
 */
function ProjectCard({ children, className = "" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-[32px] border border-cyan-400/15 bg-[#070e1b]/80 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.18)] ${className}`}
    >
      {/* 1. DYNAMIC DOTTED LIGHTS: Reveals directly under cursor on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[32px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.75 : 0,
          backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: "22px 22px",
          maskImage: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
        }}
      />

      {/* 2. DYNAMIC CURSOR SPOTLIGHT: Soft cyan radial glow following the cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[32px] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.12), transparent 75%)`,
        }}
      />

      {/* 3. Card Content */}
      <div className="relative z-10 w-full">{children}</div>
    </motion.div>
  );
}

/**
 * Interactive Architecture Pipeline Visualizer
 * - Replaces static dots with dynamic pulse and hover inspection.
 * - Active step has glowing dotted light, ping pulse ring, and traveling energy beam.
 * - Inactive steps stay cleanly dimmed until hovered or activated.
 */
function ArchitecturePipelineVisualizer({ steps, title = "System Architecture" }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  // Auto-pulse through pipeline steps
  useEffect(() => {
    if (hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [hoveredStep, steps.length]);

  const currentHighlight = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <div className="flex flex-col rounded-2xl border border-cyan-400/20 bg-black/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/35 sm:p-6">
      {/* Header with live pipeline status */}
      <div className="mb-4 flex items-center justify-between border-b border-cyan-400/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            {title}
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-400">
          Node {currentHighlight + 1}/{steps.length}
        </span>
      </div>

      {/* Interactive Node Pipeline */}
      <div className="flex flex-col items-center w-full">
        {steps.map((step, idx) => {
          const isSelected = currentHighlight === idx;
          const isHovered = hoveredStep === idx;

          return (
            <div key={step.name} className="flex flex-col items-center w-full">
              <div
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`group/node flex w-full cursor-pointer items-center justify-between rounded-xl border p-3 sm:p-3.5 transition-all duration-300 ${
                  isSelected
                    ? "border-cyan-400/60 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.22)] scale-[1.02]"
                    : "border-white/10 bg-black/30 hover:border-cyan-400/30 hover:bg-black/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isSelected
                        ? "bg-cyan-400/20 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                        : "bg-white/5 text-slate-400 group-hover/node:text-cyan-400"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-left">
                    <p
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isSelected
                          ? "text-white"
                          : "text-slate-300 group-hover/node:text-white"
                      }`}
                    >
                      {step.name}
                    </p>
                    {step.subtitle && (
                      <p className="text-[11px] text-slate-400">
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* DOTTED LIGHT: Dimmed when inactive; pulses brightly with ping ring when active or hovered */}
                <div className="flex items-center gap-2">
                  {isSelected && (
                    <span className="hidden font-mono text-[10px] uppercase tracking-wider text-cyan-400 sm:inline-block">
                      {isHovered ? "INSPECT" : "FLOW"}
                    </span>
                  )}
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    {isSelected ? (
                      <>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
                      </>
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600 transition-colors duration-300 group-hover/node:bg-cyan-400/60" />
                    )}
                  </div>
                </div>
              </div>

              {/* Connector line with animated energy light beam traveling down */}
              {idx !== steps.length - 1 && (
                <div className="relative flex flex-col items-center py-1.5">
                  <div className="relative h-6 w-0.5 bg-slate-800/80 overflow-hidden">
                    <div
                      className={`absolute inset-0 transition-opacity duration-300 ${
                        isSelected
                          ? "bg-gradient-to-b from-cyan-400 via-cyan-400/50 to-transparent opacity-100"
                          : "opacity-20"
                      }`}
                    />
                    {isSelected && (
                      <motion.div
                        initial={{ y: -8 }}
                        animate={{ y: 24 }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -left-0.5 h-2 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                      />
                    )}
                  </div>
                  <ArrowDown
                    size={13}
                    className={`-mt-1 transition-all duration-300 ${
                      isSelected
                        ? "text-cyan-400 scale-110 drop-shadow-[0_0_6px_#22d3ee]"
                        : "text-slate-600"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Farmer One Stop Solution",
      subtitle: "AI-Powered Agri-Tech Platform",
      featured: true,
      description:
        "AI-powered agricultural ecosystem enabling marketplace commerce, equipment rentals, real-time bidding, intelligent assistance and secure digital transactions for modern farmers.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Groq AI"],
      features: [
        "AI Assistant",
        "Equipment Rental",
        "Live Bidding",
        "Marketplace",
        "Weather Insights",
        "Admin Dashboard",
      ],
      demo: "https://farmer-solutions-ten.vercel.app/",
      github: "https://github.com/devsarthak-1503/Farmer_One_Stop_Solution",
      architecture: [
        { name: "Farmer", subtitle: "Interface & Role Auth", icon: <User size={18} /> },
        { name: "Marketplace", subtitle: "Crop & Equipment Listings", icon: <ShoppingBag size={18} /> },
        { name: "AI Assistant", subtitle: "Groq LLaMA Agri Advisory", icon: <Brain size={18} /> },
        { name: "Live Bidding", subtitle: "Real-time Socket.io Bids", icon: <Gavel size={18} /> },
        { name: "Payments", subtitle: "Secure Digital Gateway", icon: <CreditCard size={18} /> },
        { name: "Admin Dashboard", subtitle: "Analytics & Governance", icon: <LayoutDashboard size={18} /> },
      ],
    },
    {
      title: "Moody Player",
      subtitle: "AI Mood-Based Music Platform",
      featured: true,
      description:
        "AI-powered music platform that detects emotions through facial analysis and delivers personalized music recommendations using Deezer API, playlists, favorites, listening history, AI mood insights and immersive audio experiences.",
      tech: ["React", "Node.js", "MongoDB", "Face API", "JWT", "Deezer API"],
      features: [
        "Mood Detection",
        "JWT Authentication",
        "AI Recommendations",
        "Playlists",
        "Favorites",
        "Recently Played",
        "Audio Visualizer",
        "AI Mood Summary",
        "Deezer Integration",
      ],
      demo: "https://moody-player-ai-pearl.vercel.app/",
      github: "https://github.com/devsarthak-1503/MOODY-PLAYER",
      architecture: [
        { name: "Camera Stream", subtitle: "Live WebCam Video Feed", icon: <Camera size={18} /> },
        { name: "Face Detection", subtitle: "Face-api.js Landmarks", icon: <Scan size={18} /> },
        { name: "Mood Analysis", subtitle: "Emotion Confidence Engine", icon: <Activity size={18} /> },
        { name: "AI Recommendation", subtitle: "Context Mood Curating", icon: <Sparkles size={18} /> },
        { name: "Deezer API", subtitle: "Audio Catalog & Streaming", icon: <Radio size={18} /> },
        { name: "Audio Engine", subtitle: "Interactive Visualizer", icon: <PlayCircle size={18} /> },
      ],
    },
    {
      title: "Smart Task Manager",
      subtitle: "JWT-Based Task Management Platform",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      features: [
        "JWT Authentication",
        "Protected Routes",
        "Task CRUD",
        "User Dashboard",
      ],
      demo: "https://smart-task-manager-roan.vercel.app/login",
      github: "https://github.com/devsarthak-1503/smart-task-manager",
    },
    {
      title: "Finance Backend System",
      subtitle: "Secure Role-Based Finance Backend System",
      tech: ["Node.js", "MongoDB", "JWT", "RBAC", "Aggregation"],
      features: [
        "RBAC",
        "Financial APIs",
        "Aggregation Pipeline",
        "Secure Architecture",
      ],
      demo: "https://finance-backend-engine.onrender.com/",
      github: "https://github.com/devsarthak-1503/finance-backend-engine",
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative overflow-hidden py-32 scroll-mt-24"
    >
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "150px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            Featured Projects
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Engineering Products That Solve Real Problems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Real-world applications focused on AI, full-stack development,
            scalable backend systems and solving practical problems.
          </p>
        </motion.div>

        {/* ======================================================== */}
        {/* Project 1: Farmer One Stop Solution                      */}
        {/* ======================================================== */}
        <ProjectCard className="mb-12 p-8 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-center">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  Flagship MERN Project
                </span>

                <h3 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
                  {projects[0].title}
                </h3>

                <p className="mb-6 text-lg font-medium text-cyan-400">
                  {projects[0].subtitle}
                </p>

                <p className="mb-8 leading-relaxed text-slate-300">
                  {projects[0].description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[0].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-cyan-400/20 bg-white/5 px-3 py-1 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features List with Micro Dotted Indicators */}
                <div className="mb-10 grid grid-cols-2 gap-y-3.5 gap-x-2">
                  {projects[0].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={projects[0].demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]"
                  >
                    Live Demo
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>

                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <GitBranch size={18} />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>

            {/* Architecture Node Visualizer */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <ArchitecturePipelineVisualizer
                  steps={projects[0].architecture}
                  title="Agri-Tech System Pipeline"
                />
              </div>
            </div>
          </div>
        </ProjectCard>

        {/* ======================================================== */}
        {/* Project 2: Moody Player                                  */}
        {/* ======================================================== */}
        <ProjectCard className="mb-16 p-8 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
            {/* Architecture Visualizer (Left on Desktop for alternate rhythm) */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <div className="w-full max-w-md">
                <ArchitecturePipelineVisualizer
                  steps={projects[1].architecture}
                  title="AI Emotion Detection Flow"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  AI Music Experience
                </span>

                <h3 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
                  {projects[1].title}
                </h3>

                <p className="mb-6 text-lg font-medium text-cyan-400">
                  {projects[1].subtitle}
                </p>

                <p className="mb-8 leading-relaxed text-slate-300">
                  {projects[1].description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[1].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-cyan-400/20 bg-white/5 px-3 py-1 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-10 grid grid-cols-2 gap-y-3.5 gap-x-2">
                  {projects[1].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-300"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={projects[1].demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]"
                  >
                    Try Moody
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>

                  <a
                    href={projects[1].github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    <GitBranch size={18} />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ProjectCard>

        {/* ======================================================== */}
        {/* Bottom Row: Smart Task Manager & Finance Backend System  */}
        {/* ======================================================== */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Smart Task Manager */}
          <ProjectCard className="flex flex-col justify-between p-8 lg:p-10">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <ShieldCheck size={26} />
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                  Full Stack MERN
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">
                {projects[2].title}
              </h3>

              <p className="mb-8 font-medium text-cyan-400/80">
                {projects[2].subtitle}
              </p>

              {/* Interactive Mini Stat Cards */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Lock size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">JWT Auth</span>
                </div>
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Layers size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">Full CRUD</span>
                </div>
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Shield size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">Protected APIs</span>
                </div>
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Smartphone size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">Responsive UI</span>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-8 space-y-3">
                {projects[2].features.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
              <a
                href={projects[2].demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
              <a
                href={projects[2].github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:text-white"
              >
                <GitBranch size={16} />
                GitHub Repository
              </a>
            </div>
          </ProjectCard>

          {/* Finance Backend System */}
          <ProjectCard className="flex flex-col justify-between p-8 lg:p-10">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Database size={26} />
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-cyan-400">
                  Backend Architecture
                </span>
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">
                {projects[3].title}
              </h3>

              <p className="mb-8 font-medium text-cyan-400/80">
                {projects[3].subtitle}
              </p>

              {/* Interactive Mini Stat Cards */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Shield size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">RBAC</span>
                </div>
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <BarChart size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">Aggregation</span>
                </div>
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Lock size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">JWT Security</span>
                </div>
                <div className="group/stat flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10">
                  <Coins size={18} className="mb-2 text-cyan-400 transition-transform group-hover/stat:scale-110" />
                  <span className="text-xs font-semibold text-slate-200">Financial APIs</span>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-8 space-y-3">
                {projects[3].features.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/70" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap gap-4 border-t border-white/10 pt-6">
              <a
                href={projects[3].demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              >
                Live API
                <ArrowUpRight size={16} />
              </a>
              <a
                href={projects[3].github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:text-white"
              >
                <GitBranch size={16} />
                GitHub Repository
              </a>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;