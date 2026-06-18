import {
  Code2,
  Server,
  Database,
  Brain,
  Wrench,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SCSS",
      ],
    },

    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT",
        "Authentication",
      ],
    },

    {
      title: "Database",
      icon: Database,
      skills: [
        "MongoDB",
        "Mongoose",
        "PostgreSQL",
      ],
    },

    {
      title: "AI",
      icon: Brain,
      skills: [
        "OpenAI API",
        "AI Integration",
        "AI Chatbots",
      ],
    },

    {
      title: "Tools & Deployment",
      icon: Wrench,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",

        "Vercel",
        "Render",
        "Netlify",

        "MongoDB Atlas",
        "ImageKit",
      ],
      fullWidth: true,
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            TECH STACK
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Tech Stack & Expertise
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Building scalable full-stack applications,
            AI-powered experiences and modern digital
            products using industry-standard technologies.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`
                  group
                  min-h-[190px]
                  rounded-3xl
                  border
                  border-cyan-400/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_45px_rgba(34,211,238,0.18)]
                  ${
                    category.fullWidth
                      ? "md:col-span-2"
                      : ""
                  }
                `}
              >
                {/* Header */}
                <div className="mb-6 flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {category.title}
                  </h3>

                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">

                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-cyan-400/15
                        bg-white/5
                        px-5
                        py-2.5
                        text-sm
                        font-medium
                        text-slate-300
                        transition-all
                        duration-300
                        hover:border-cyan-400/50
                        hover:text-cyan-300
                        hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]
                      "
                    >
                      {skill}
                    </span>
                  ))}

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Skills;