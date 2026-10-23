import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Github from "@/sections/Github";
import AISarthak from "@/sections/AISarthak";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050816] text-white overflow-x-clip">
      {/* ======================================================== */}
      {/* GLOBAL BACKGROUND TEXTURE & AMBIENT ATMOSPHERE          */}
      {/* Ensures seamless visual consistency across all sections */}
      {/* ======================================================== */}
      
      {/* Subtle Engineering Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,#22d3ee05_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Subtle Ambient Dot Matrix */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(#22d3ee08_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Atmospheric Ambient Glow Orbs */}
      <div className="pointer-events-none fixed -top-40 right-[-10%] z-0 h-[650px] w-[650px] rounded-full bg-cyan-500/5 blur-[160px]" />
      <div className="pointer-events-none fixed top-1/3 left-[-15%] z-0 h-[700px] w-[700px] rounded-full bg-cyan-600/5 blur-[180px]" />
      <div className="pointer-events-none fixed bottom-1/4 right-[-10%] z-0 h-[600px] w-[600px] rounded-full bg-cyan-400/5 blur-[170px]" />

      {/* Content Layers */}
      <div className="relative z-10">
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <AISarthak />
        <Contact />

        <Footer />
      </div>
    </main>
  );
}
