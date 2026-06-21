import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at the top of the page
      if (currentScrollY <= 50) {
        setIsVisible(true);
      }
      // Scrolling down -> hide navbar
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // Scrolling up -> show navbar
      else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "AI Sarthak", href: "#ai-sarthak" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full px-4 py-4 transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <nav className="mx-auto max-w-6xl">

          <div className="group relative overflow-hidden rounded-full border border-cyan-400/20 bg-[#061225]/80 backdrop-blur-2xl shadow-[0_0_35px_rgba(34,211,238,0.15)]">
            {/* Moving Water Light */}
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
                  via-cyan-400/20
                  to-transparent
                  blur-3xl
                "
              />
            </div>

            <div className="relative flex h-[78px] items-center justify-between px-8">

              {/* Logo */}
              <a
                href="/"
                className="text-3xl font-bold tracking-wide text-white"
              >
                Sarthak
                <span className="text-cyan-400">.</span>
              </a>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex items-center gap-10">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="
                      text-sm
                      font-medium
                      text-slate-200
                      transition-all
                      duration-300
                      hover:text-cyan-400
                      hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]
                    "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                hidden
                lg:flex
                items-center
                justify-center
                rounded-full
                bg-cyan-400
                px-8
                py-3
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]
              "
              >
                Resume
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-white"
              >
                <Menu size={30} />
              </button>

            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-400/20 bg-[#07111f]/95 p-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.2)]">

            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 text-white"
            >
              <X size={28} />
            </button>

            <div className="mt-6 flex flex-col items-center gap-8">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                  text-lg
                  font-medium
                  text-white
                  transition-all
                  duration-300
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
                mt-4
                rounded-full
                bg-cyan-400
                px-8
                py-3
                font-semibold
                text-black
              "
              >
                Resume
              </a>

            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;