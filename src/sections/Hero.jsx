import avatar from "../assets/avatar.png";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-32 md:pt-28 lg:pt-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 lg:flex-row lg:px-8">

        {/* Left Content */}
        <div className="max-w-3xl text-center lg:text-left">

          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hi, I'm
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Sarthak{" "}
            <span className="text-cyan-400">
              Gaikwad
            </span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Full Stack MERN Developer
          </h2>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Building scalable web applications and AI-powered solutions with
            clean architecture, modern technologies, and performance-driven
            development.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="#projects"
              className="rounded-full bg-cyan-500 px-8 py-4 text-center font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/30 bg-white/5 px-8 py-4 text-center font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>

          </div>
        </div>

        {/* Right Avatar */}
        <div className="relative flex items-center justify-center">

          {/* Outer Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[100px] lg:h-[520px] lg:w-[520px]" />

          {/* Neon Ring */}
          <div className="relative rounded-full border-2 border-cyan-400/70 shadow-[0_0_45px_rgba(34,211,238,0.55)]">
            {/* Image */}
            <div className="overflow-hidden rounded-full">
              <img
                src={avatar}
                alt="Sarthak Avatar"
                className="
                  h-[320px]
                  w-[320px]
                  rounded-full
                  object-cover
                  object-top
                  lg:h-[420px]
                  lg:w-[420px]
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;