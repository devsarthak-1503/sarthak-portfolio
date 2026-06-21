import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// ==========================================
// INLINE BRAND ICONS (Replaces Removed Lucide Brand Icons)
// ==========================================
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.3-.37 6.8-1.4 6.8-7.32a5.4 5.4 0 0 0-1.53-3.79 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-3.8 1.3a12.8 12.8 0 0 0-7 0C6.25 1.3 5 1.7 5 1.7a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 9.42c0 5.9 3.5 6.9 6.8 7.32A4.8 4.8 0 0 0 8.8 20v2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "GitHub", href: "#github" },
    { name: "AI Sarthak", href: "#ai-sarthak" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/devsarthak-1503",
      icon: <GithubIcon />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
      icon: <LinkedinIcon />,
    },
    {
      name: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sarthakgaikwad020@gmail.com",
      icon: <Mail size={20} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative border-t border-cyan-400/10 bg-[#02050A] pt-16 pb-8 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <a href="#home" className="inline-block outline-none">
              <span className="text-3xl font-bold tracking-tight text-white transition-colors hover:text-cyan-400">
                Sarthak<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Full Stack MERN Developer specializing in building scalable backend architectures, intelligent AI integrations, and responsive web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-400 transition-all hover:text-cyan-400 hover:translate-x-1 inline-block outline-none"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 text-slate-400 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400 hover:-translate-y-1 outline-none shadow-[0_0_15px_rgba(34,211,238,0.0)] hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 border-t border-cyan-400/10 pt-8 sm:flex-row"
        >
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Sarthak Gaikwad. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-slate-500">
            Built with <span className="text-cyan-400 font-medium">React</span>, <span className="text-cyan-400 font-medium">Tailwind CSS</span> and <span className="text-cyan-400 font-medium">AI</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;