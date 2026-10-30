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
  ArrowDown,
  Cpu,
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.55 }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/35 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] ${className}`}
    >
      {/* 1. DYNAMIC DOTTED LIGHTS: Reveals directly under cursor on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.65 : 0,
          backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.35) 1.5px, transparent 1.5px)`,
          backgroundSize: "22px 22px",
          maskImage: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
        }}
      />

      {/* 2. DYNAMIC CURSOR SPOTLIGHT: Soft cyan radial glow following the cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.08), transparent 75%)`,
        }}
      />

      {/* 3. Card Content */}
      <div className="relative z-10 w-full">{children}</div>
    </motion.div>
  );
}

/**
 * Interactive Architecture Pipeline Visualizer
 * - Auto-pulses through pipeline steps or inspects on hover.
 * - Active step lights up with controlled glow, ping ring, and energy beam.
 */
function ArchitecturePipelineVisualizer({ steps, title = "System Architecture" }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

  useEffect(() => {
    if (hoveredStep !== null) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [hoveredStep, steps.length]);

  const currentHighlight = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-black/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/25 sm:p-6">
      {/* Header with live pipeline status */}
      <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
          </span>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-cyan-300">
            {title}
          </span>
        </div>
        <span className="font-mono text-[11px] text-zinc-500">
          Step {currentHighlight + 1}/{steps.length}
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
                    ? "border-cyan-400/50 bg-cyan-950/30 shadow-[0_0_20px_rgba(34,211,238,0.15)] scale-[1.01]"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Controlled light icon pod */}
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ${
                      isSelected
                        ? "bg-cyan-400/20 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                        : "bg-white/[0.04] text-zinc-400 group-hover/node:text-zinc-200"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <div className="text-left">
                    <p
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        isSelected
                          ? "text-white"
                          : "text-zinc-300 group-hover/node:text-white"
                      }`}
                    >
                      {step.name}
                    </p>
                    {step.subtitle && (
                      <p className="text-[11px] text-zinc-500">
                        {step.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dotted indicator */}
                <div className="flex items-center gap-2">
                  {isSelected && (
                    <span className="hidden font-mono text-[9px] uppercase tracking-wider text-cyan-400 sm:inline-block">
                      {isHovered ? "INSPECT" : "ACTIVE"}
                    </span>
                  )}
                  <div className="relative flex h-3 w-3 items-center justify-center">
                    {isSelected ? (
                      <>
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
                      </>
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600 transition-colors duration-300 group-hover/node:bg-cyan-400/60" />
                    )}
                  </div>
                </div>
              </div>

              {/* Energy line connector */}
              {idx !== steps.length - 1 && (
                <div className="relative flex flex-col items-center py-1.5">
                  <div className="relative h-5 w-0.5 bg-zinc-800/80 overflow-hidden">
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
                        animate={{ y: 22 }}
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
                    size={12}
                    className={`-mt-1 transition-all duration-300 ${
                      isSelected
                        ? "text-cyan-400 scale-110 drop-shadow-[0_0_6px_#22d3ee]"
                        : "text-zinc-600"
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
  const flagshipProjects = [
    {
      title: "Farmer One Stop Solution",
      subtitle: "AI-Powered Agri-Tech Ecosystem",
      featured: true,
      description:
        "Comprehensive agricultural ecosystem combining marketplace commerce, equipment rentals, real-time Socket.io bidding, AI advisory, and secure digital transactions for modern agricultural workflows.",
      tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Groq AI", "Tailwind CSS"],
      features: [
        "AI Advisory Assistant",
        "Equipment Rental Hub",
        "Real-Time Bidding",
        "Crop Marketplace",
        "Weather Insights",
        "Governance Dashboard",
      ],
      demo: "https://farmer-solutions-ten.vercel.app/",
      github: "https://github.com/devsarthak-1503/Farmer_One_Stop_Solution",
      architecture: [
        { name: "Farmer Client", subtitle: "Interface & Role Auth", icon: <User size={16} /> },
        { name: "Marketplace", subtitle: "Crop & Equipment Listings", icon: <ShoppingBag size={16} /> },
        { name: "AI Assistant", subtitle: "Groq LLaMA Advisory", icon: <Brain size={16} /> },
        { name: "Live Bidding", subtitle: "Real-time Socket.io Bids", icon: <Gavel size={16} /> },
        { name: "Payments", subtitle: "Secure Digital Gateway", icon: <CreditCard size={16} /> },
        { name: "Admin Dashboard", subtitle: "Analytics & Telemetry", icon: <LayoutDashboard size={16} /> },
      ],
    },
    {
      title: "Moody Player",
      subtitle: "AI Computer Vision & Dynamic Audio Platform",
      featured: true,
      description:
        "AI-driven audio platform that infers emotional states via real-time facial expression analysis and streams curated music via Deezer API with dynamic audio visualization and personalized playlists.",
      tech: ["React.js", "Node.js", "MongoDB", "Face API", "JWT", "Deezer API"],
      features: [
        "Live Mood Detection",
        "JWT Authentication",
        "AI Playlist Recommendation",
        "Interactive Audio Visualizer",
        "Personalized Favorites",
        "Listening History Analytics",
      ],
      demo: "https://moody-player-ai-pearl.vercel.app/",
      github: "https://github.com/devsarthak-1503/MOODY-PLAYER",
      architecture: [
        { name: "Camera Stream", subtitle: "Live WebCam Video Feed", icon: <Camera size={16} /> },
        { name: "Face Detection", subtitle: "Face-api.js Landmarks", icon: <Scan size={16} /> },
        { name: "Mood Inference", subtitle: "Emotion Confidence Engine", icon: <Activity size={16} /> },
        { name: "AI Curation", subtitle: "Context Mood Mapping", icon: <Sparkles size={16} /> },
        { name: "Deezer Catalog", subtitle: "Audio Catalog & Streaming", icon: <Radio size={16} /> },
        { name: "Audio Engine", subtitle: "Interactive Visualizer", icon: <PlayCircle size={16} /> },
      ],
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Flagship Projects"
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
            <span>FLAGSHIP ARCHITECTURES</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Selected Flagship Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            Two production-grade platforms engineered with full-stack MERN, machine learning inference, and interactive real-time systems.
          </p>
        </motion.div>

        {/* Project 1: Farmer One Stop Solution */}
        <ProjectCard className="mb-10 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-cyan-300">
                  Flagship Agri-Tech System
                </span>

                <h3 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {flagshipProjects[0].title}
                </h3>

                <p className="mb-4 text-sm sm:text-base font-medium text-zinc-300">
                  {flagshipProjects[0].subtitle}
                </p>

                <p className="mb-6 leading-relaxed text-zinc-400 text-sm sm:text-base">
                  {flagshipProjects[0].description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {flagshipProjects[0].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-8 grid grid-cols-2 gap-y-3 gap-x-2">
                  {flagshipProjects[0].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-400">
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={flagshipProjects[0].demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </a>

                  <a
                    href={flagshipProjects[0].github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                  >
                    <GitBranch size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Architecture Node Visualizer */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <ArchitecturePipelineVisualizer
                  steps={flagshipProjects[0].architecture}
                  title="Agri-Tech System Pipeline"
                />
              </div>
            </div>
          </div>
        </ProjectCard>

        {/* Project 2: Moody Player */}
        <ProjectCard className="mb-12 p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Architecture Visualizer (Left on Desktop for rhythm) */}
            <div className="order-2 lg:order-1 flex items-center justify-center">
              <div className="w-full max-w-md">
                <ArchitecturePipelineVisualizer
                  steps={flagshipProjects[1].architecture}
                  title="AI Emotion Detection Flow"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div>
                <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-cyan-300">
                  AI Computer Vision &amp; Music
                </span>

                <h3 className="mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {flagshipProjects[1].title}
                </h3>

                <p className="mb-4 text-sm sm:text-base font-medium text-zinc-300">
                  {flagshipProjects[1].subtitle}
                </p>

                <p className="mb-6 leading-relaxed text-zinc-400 text-sm sm:text-base">
                  {flagshipProjects[1].description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {flagshipProjects[1].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300 transition-colors hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Features List */}
                <div className="mb-8 grid grid-cols-2 gap-y-3 gap-x-2">
                  {flagshipProjects[1].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-300"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-400">
                        <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={flagshipProjects[1].demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    <span>Launch Moody</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </a>

                  <a
                    href={flagshipProjects[1].github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-300 backdrop-blur-md transition-all hover:border-white/[0.2] hover:bg-white/[0.06] hover:text-white"
                  >
                    <GitBranch size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ProjectCard>

        {/* Minimalist SaaS GitHub Discovery Banner */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#070b14]/75 p-6 sm:p-8 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400">
              <GitBranch size={20} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Interested in additional architectures?
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                Inspect 32+ additional repositories including JWT task platforms, financial ledger engines, and microservices.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/devsarthak-1503"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-200 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
          >
            <span>Explore All on GitHub</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
