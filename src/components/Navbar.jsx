"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-4 py-4">
        <nav className="mx-auto max-w-6xl">
          <div className="group relative overflow-hidden rounded-full border border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            {/* Subtle Ambient Water Light Sheen */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="
                  navbar-shine
                  absolute
                  top-0
                  left-[-40%]
                  h-full
                  w-[40%]
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/10
                  to-transparent
                  blur-2xl
                "
              />
            </div>

            <div className="relative flex h-[68px] items-center justify-between px-6 sm:px-8">
              {/* Logo */}
              <a
                href="/"
                className="text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
              >
                Sarthak
                <span className="text-cyan-400">.</span>
              </a>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="
                        text-xs
                        font-medium
                        text-zinc-400
                        transition-all
                        duration-200
                        hover:text-white
                      "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Top SaaS Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  hidden
                  lg:inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-white/[0.05]
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  text-zinc-100
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-cyan-400/50
                  hover:bg-cyan-500/10
                  hover:text-cyan-300
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]
                "
              >
                <span>Resume</span>
                <ArrowUpRight size={13} className="text-cyan-400" />
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-zinc-300 hover:text-white transition-colors p-1"
                aria-label="Open mobile navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/[0.1] bg-[#080d19]/95 p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close mobile navigation menu"
            >
              <X size={24} />
            </button>

            <div className="mt-4 flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-base
                    font-medium
                    text-zinc-300
                    transition-all
                    duration-200
                    hover:text-cyan-400
                  "
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-3
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-cyan-400/40
                  bg-cyan-500/10
                  px-6
                  py-2.5
                  text-sm
                  font-semibold
                  text-cyan-300
                  transition-all
                "
              >
                <span>Resume</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
