import avatar from "../assets/Avatar.png";

function Hero() {
  return (
    // Added overflow-hidden to safely contain absolute grid/particles
    // Maintained exact padding and responsive alignment
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 md:pt-28 lg:pt-24">

      {/* ========================================== */}
      {/* BACKGROUND: SUBTLE GRID SYSTEM             */}
      {/* Premium, ultra-low opacity SaaS style grid */}
      {/* Masked with a radial gradient so it fades seamlessly into the dark navy */}
      {/* ========================================== */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#22d3ee05_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 lg:flex-row lg:px-8 relative z-10">

        {/* ========================================== */}
        {/* LEFT: CONTENT & TYPOGRAPHY                 */}
        {/* Refined hierarchy, tighter tracking, better readability */}
        {/* ========================================== */}
        <div className="max-w-3xl text-center lg:text-left">

          <p className="mb-4 text-base font-semibold uppercase tracking-widest text-cyan-400/90">
            Hi, I'm
          </p>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Sarthak{" "}
            <span className="text-cyan-400">
              Gaikwad
            </span>
          </h1>

          <h2 className="mb-6 text-xl font-medium tracking-wide text-slate-300 sm:text-2xl">
            Full Stack MERN Developer
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 font-normal">
            Building scalable web applications and AI-powered solutions with
            clean architecture, modern technologies, and performance-driven
            development.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            {/* BUTTON 1: Primary
              Removed flashy scale-105. Added premium subtle Y-axis lift.
              Added deep, soft, high-quality shadow instead of neon glow.
            */}
            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-8 py-3.5 text-center text-sm font-semibold text-slate-950 shadow-[0_4px_14px_0_rgba(34,211,238,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400 hover:shadow-[0_6px_20px_rgba(34,211,238,0.25)] sm:text-base"
            >
              View Projects
            </a>

            {/* BUTTON 2: Secondary
              Refined border opacity and glassmorphism.
              Elegant hover state mapping to the primary cyan tone.
            */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/20 bg-transparent px-8 py-3.5 text-center text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300 sm:text-base"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* ========================================== */}
        {/* RIGHT: PREMIUM AVATAR ARCHITECTURE         */}
        {/* No borders, no rings, pure depth and lighting */}
        {/* ========================================== */}
        <div className="relative flex items-center justify-center lg:-translate-x-6">

          {/* 1. Ambient Lighting (Balanced Size) */}
          <div className="absolute h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[75px] lg:h-[360px] lg:w-[360px]" />

          {/* 2. Geometric Blueprint Lines (Balanced Size) */}
          <div className="absolute h-[320px] w-[320px] rounded-full border border-cyan-400/[0.08] lg:h-[400px] lg:w-[400px]" />
          <div className="absolute h-[360px] w-[360px] rounded-full border border-slate-600/10 border-dashed lg:h-[440px] lg:w-[440px]" />

          {/* 3. Dot Particles */}
          <div className="absolute inset-[-40px] pointer-events-none">
            <div className="absolute top-[10%] right-[15%] h-1 w-1 rounded-full bg-cyan-400/30" />
            <div className="absolute top-[30%] left-[5%] h-0.5 w-0.5 rounded-full bg-cyan-400/20" />
            <div className="absolute bottom-[20%] right-[5%] h-1.5 w-1.5 rounded-full bg-cyan-400/10" />
            <div className="absolute bottom-[10%] left-[20%] h-1 w-1 rounded-full bg-cyan-400/20" />
          </div>

          {/* 4. Subtle Glass Backdrop */}
          <div className="absolute h-[300px] w-[300px] rounded-full bg-slate-900/20 backdrop-blur-md lg:h-[380px] lg:w-[380px]" />

          {/* 5. Clean Image Container with Premium Soft Glow */}
          <div className="relative z-10 overflow-hidden rounded-full bg-[#0A0F1A] shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.25)]">
            <img
              src={avatar}
              alt="Sarthak Avatar"
              className="
                h-[300px]
                w-[300px]
                rounded-full
                object-cover
                object-[50%_20%]
                transition-transform
                duration-700
                hover:scale-105
                lg:h-[380px]
                lg:w-[380px]
              "
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;