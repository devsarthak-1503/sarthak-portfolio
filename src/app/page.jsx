import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Github from "@/sections/Github";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import AICopilotDrawer from "@/components/AICopilotDrawer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#03050a] text-zinc-100 overflow-x-clip selection:bg-cyan-500/20 selection:text-white">
      {/* ======================================================== */}
      {/* GLOBAL BACKGROUND ATMOSPHERE - TOP 0.1% SAAS MINIMALISM  */}
      {/* ======================================================== */}
      
      {/* Crisp Ultra-Faint Engineering Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Subtle Ambient Dot Matrix */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="pointer-events-none fixed -top-48 right-[-10%] z-0 h-[650px] w-[650px] rounded-full bg-cyan-500/[0.03] blur-[180px]" />
      <div className="pointer-events-none fixed top-1/3 left-[-15%] z-0 h-[700px] w-[700px] rounded-full bg-indigo-600/[0.03] blur-[200px]" />
      <div className="pointer-events-none fixed bottom-1/4 right-[-10%] z-0 h-[600px] w-[600px] rounded-full bg-cyan-400/[0.025] blur-[180px]" />

      {/* Main Page Flow */}
      <div className="relative z-10">
        <Navbar />

        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Github />
        <Contact />

        <Footer />

        {/* Top-Tier SaaS Interactive AI Copilot (Corner Avatar + Drawer) */}
        <AICopilotDrawer />
      </div>
    </main>
  );
}
