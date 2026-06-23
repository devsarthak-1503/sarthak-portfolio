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
  ListMusic,
  Smartphone,
  Coins
} from "lucide-react";

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
        { name: "Farmer", icon: <User size={20} /> },
        { name: "Marketplace", icon: <ShoppingBag size={20} /> },
        { name: "AI Assistant", icon: <Brain size={20} /> },
        { name: "Live Bidding", icon: <Gavel size={20} /> },
        { name: "Payments", icon: <CreditCard size={20} /> },
        { name: "Admin Dashboard", icon: <LayoutDashboard size={20} /> },
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
        { name: "Camera", icon: <Camera size={20} /> },
        { name: "Face Detection", icon: <Scan size={20} /> },
        { name: "Mood Analysis", icon: <Activity size={20} /> },
        { name: "AI Recommendation", icon: <Sparkles size={20} /> },
        { name: "Deezer API", icon: <Radio size={20} /> },
        { name: "Music Player", icon: <PlayCircle size={20} /> },
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
    <section id="projects" className="relative overflow-hidden py-32">
      {/* Background Glow */}
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

        {/* Farmer One Stop Solution */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-12 rounded-[32px] border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] lg:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
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

                <p className="mb-8 leading-relaxed text-slate-400">
                  {projects[0].description}
                </p>

                {/* Premium Mini Stat Cards */}
                <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <Brain size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">AI Powered</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <Activity size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Real-Time</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <ShoppingBag size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Marketplace</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <CreditCard size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Payments</span>
                  </div>
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[0].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-cyan-400/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mb-10 grid grid-cols-2 gap-y-4 gap-x-2">
                  {projects[0].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-300"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={projects[0].demo}
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    Explore Platform
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>

                  <a
                    href={projects[0].github}
                    className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    <GitBranch size={18} />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-end rounded-2xl bg-black/20 p-6 border border-white/5">
              <div className="w-full max-w-sm">
                <div className="flex flex-col items-center">
                  {projects[0].architecture.map((step, idx) => (
                    <div key={step.name} className="flex flex-col items-center w-full">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="group relative flex w-full items-center justify-between rounded-xl border border-cyan-400/15 bg-[#0A0F1A] p-4 shadow-lg transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                            {step.icon}
                          </div>
                          <span className="font-semibold text-slate-200 group-hover:text-white">
                            {step.name}
                          </span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,1)]" />
                      </motion.div>

                      {idx !== projects[0].architecture.length - 1 && (
                        <div className="flex flex-col items-center py-2">
                          <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-400/40 to-cyan-400/10" />
                          <ArrowDown size={14} className="text-cyan-400/50 -mt-1" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Moody Player */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group mb-16 rounded-[32px] border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] lg:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="order-2 lg:order-1 flex items-center justify-center lg:justify-start rounded-2xl bg-black/20 p-6 border border-white/5">
              <div className="w-full max-w-sm">
                <div className="flex flex-col items-center">
                  {projects[1].architecture.map((step, idx) => (
                    <div key={step.name} className="flex flex-col items-center w-full">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="group relative flex w-full items-center justify-between rounded-xl border border-cyan-400/15 bg-[#0A0F1A] p-4 shadow-lg transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400 group-hover:text-black">
                            {step.icon}
                          </div>
                          <span className="font-semibold text-slate-200 group-hover:text-white">
                            {step.name}
                          </span>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,1)]" />
                      </motion.div>

                      {idx !== projects[1].architecture.length - 1 && (
                        <div className="flex flex-col items-center py-2">
                          <div className="h-6 w-0.5 bg-gradient-to-b from-cyan-400/40 to-cyan-400/10" />
                          <ArrowDown size={14} className="text-cyan-400/50 -mt-1" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-4">
              <div>
                <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  AI Music Platform
                </span>

                <h3 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
                  {projects[1].title}
                </h3>

                <p className="mb-6 text-lg font-medium text-cyan-400">
                  {projects[1].subtitle}
                </p>

                <p className="mb-8 leading-relaxed text-slate-400">
                  {projects[1].description}
                </p>

                {/* Premium Mini Stat Cards */}
                <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <Scan size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Face Detection</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <Radio size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Deezer API</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <Lock size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">JWT Auth</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                    <ListMusic size={20} className="mb-2 text-cyan-400" />
                    <span className="text-xs font-semibold text-slate-200">Playlist Engine</span>
                  </div>
                </div>

                <div className="mb-8 flex flex-wrap gap-2">
                  {projects[1].tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-cyan-400/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mb-10 grid grid-cols-2 gap-y-4 gap-x-2">
                  {projects[1].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-300"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={projects[1].demo}
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    Try Moody
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </a>

                  <a
                    href={projects[1].github}
                    className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-white/5 px-6 py-3.5 font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                  >
                    <GitBranch size={18} />
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Smart Task Manager */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-[32px] border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] lg:p-10"
          >
            <div>
              <ShieldCheck size={40} className="mb-6 text-cyan-400" />

              <h3 className="mb-2 text-2xl font-bold text-white">
                {projects[2].title}
              </h3>

              <p className="mb-8 font-medium text-cyan-400/80">
                {projects[2].subtitle}
              </p>

              {/* Stats Cards */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Lock size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">JWT Auth</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Layers size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">Full CRUD</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Shield size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">Protected APIs</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Smartphone size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">Responsive UI</span>
                </div>
              </div>

              <div className="mb-8 space-y-3">
                {projects[2].features.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              <a
                href={projects[2].demo}
                className="flex items-center gap-2 rounded-xl bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black"
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
              <a
                href={projects[2].github}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:text-white"
              >
                <GitBranch size={16} />
                GitHub Repository
              </a>
            </div>
          </motion.div>

          {/* Finance Backend System */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between rounded-[32px] border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] lg:p-10"
          >
            <div>
              <Database size={40} className="mb-6 text-cyan-400" />

              <h3 className="mb-2 text-2xl font-bold text-white">
                {projects[3].title}
              </h3>

              <p className="mb-8 font-medium text-cyan-400/80">
                {projects[3].subtitle}
              </p>

              {/* Stats Cards */}
              <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Shield size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">RBAC</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <BarChart size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">Aggregation</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Lock size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">JWT Security</span>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/5 p-3 text-center transition-colors hover:bg-cyan-400/10">
                  <Coins size={20} className="mb-2 text-cyan-400" />
                  <span className="text-xs font-semibold text-slate-200">Financial APIs</span>
                </div>
              </div>

              <div className="mb-8 space-y-3">
                {projects[3].features.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              <a
                href={projects[3].demo}
                className="flex items-center gap-2 rounded-xl bg-cyan-500/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500 hover:text-black"
              >
                Live API
                <ArrowUpRight size={16} />
              </a>
              <a
                href={projects[3].github}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/30 hover:text-white"
              >
                <GitBranch size={16} />
                GitHub Repository
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;