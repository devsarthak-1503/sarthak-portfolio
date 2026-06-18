function About() {
  const highlights = [
    {
      icon: "◈",
      title: "MERN Stack",
      description:
        "Building scalable full-stack applications using MongoDB, Express, React and Node.js.",
    },
    {
      icon: "◎",
      title: "AI Integration",
      description:
        "Creating intelligent user experiences with modern AI APIs, automation and LLM-powered features.",
    },
    {
      icon: "▣",
      title: "Backend Systems",
      description:
        "Designing secure authentication systems, REST APIs and efficient database architectures.",
    },
    {
      icon: "✦",
      title: "Problem Solving",
      description:
        "Focused on writing clean code, optimizing performance and solving real-world challenges.",
    },
  ];

  const stats = [
    { number: "10+", label: "Projects Built" },
    { number: "MERN", label: "Full Stack" },
    { number: "AI", label: "Integration" },
    { number: "100%", label: "Dedication" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Building Modern Web & AI Solutions
          </h2>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Content */}
          <div className="max-w-xl">

            <h3 className="mb-8 text-4xl font-bold leading-tight text-white">
              Turning Ideas Into
              <span className="text-cyan-400">
                {" "}Scalable Digital Products
              </span>
            </h3>

            <p className="mb-6 text-lg leading-relaxed text-slate-400">
              I'm Sarthak Gaikwad, a Full Stack MERN Developer focused on
              building scalable web applications, modern user experiences,
              and AI-powered digital solutions.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-slate-400">
              My passion lies in transforming ideas into impactful products
              through clean architecture, modern technologies, and
              performance-focused development. I continuously explore new
              tools and frameworks to create meaningful user experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-white/5
                  p-5
                  text-center
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
                "
                >
                  <h4 className="text-3xl font-bold text-cyan-400">
                    {stat.number}
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="
                group
                rounded-3xl
                border
                border-cyan-400/10
                bg-white/5
                p-7
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
              "
              >

                <div className="mb-4 text-2xl text-cyan-400">
                  {item.icon}
                </div>

                <h4 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {item.title}
                </h4>

                <p className="leading-relaxed text-slate-400">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;