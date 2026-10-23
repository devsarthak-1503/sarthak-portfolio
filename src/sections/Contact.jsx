"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import SpotlightCard from "@/components/SpotlightCard";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  Loader2,
  CircleCheck,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// INLINE BRAND ICONS (Replaces Removed Lucide Brand Icons)
// ==========================================
const GithubIcon = ({ size = 22, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.3-.37 6.8-1.4 6.8-7.32a5.4 5.4 0 0 0-1.53-3.79 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-3.8 1.3a12.8 12.8 0 0 0-7 0C6.25 1.3 5 1.7 5 1.7a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 9.42c0 5.9 3.5 6.9 6.8 7.32A4.8 4.8 0 0 0 8.8 20v2" />
  </svg>
);

const LinkedinIcon = ({ size = 22, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactDetails = [
  {
    title: "Email",
    value: "sarthakgaikwad020@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=sarthakgaikwad020@gmail.com",
    icon: <Mail size={22} />,
    badge: "Direct Contact",
  },
  {
    title: "LinkedIn",
    value: "Sarthak Gaikwad",
    link: "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
    icon: <LinkedinIcon size={22} />,
    badge: "Professional Network",
  },
  {
    title: "GitHub",
    value: "devsarthak-1503",
    link: "https://github.com/devsarthak-1503",
    icon: <GithubIcon size={22} />,
    badge: "Open Source",
  },
  {
    title: "Location",
    value: "India (Open to Remote / Relocation)",
    link: null,
    icon: <MapPin size={22} />,
    badge: "Timezone IST",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const networkTimeoutRef = useRef(null);
  const successTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (networkTimeoutRef.current) clearTimeout(networkTimeoutRef.current);
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        'service_s85vs5k',     // Service ID
        'template_vd0z03e',    // Template ID
        formData,              // User inputs
        'HhjoteHTYFJM5sv8h'    // Public Key
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      successTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
      }, 3500);

    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("idle");
      setErrors({ message: "Something went wrong. Please try again or email directly." });
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Sarthak Gaikwad"
      className="relative overflow-hidden py-32 scroll-mt-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[6px] text-cyan-400">
            <Sparkles size={14} />
            <span>LET&apos;S CONNECT</span>
            <Sparkles size={14} />
          </div>

          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-slate-400">
            Open to <span className="text-cyan-400 font-semibold">Full Stack MERN</span>, Backend Engineering, and AI-powered product development opportunities.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">

          {/* Left Column: Contact Cards with SpotlightCard */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {contactDetails.map((item, idx) => {
              const InnerContent = (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-black shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                          {item.title}
                        </span>
                        <span className="rounded bg-cyan-400/10 px-1.5 py-0.5 text-[10px] font-mono text-cyan-400">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300 break-all sm:break-normal">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {item.link && (
                    <ArrowUpRight size={18} className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </div>
              );

              return item.link ? (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title}`}
                  className="block w-full outline-none"
                >
                  <SpotlightCard
                    initialY={20 + idx * 8}
                    className="p-5 sm:p-6"
                  >
                    {InnerContent}
                  </SpotlightCard>
                </a>
              ) : (
                <SpotlightCard
                  key={item.title}
                  initialY={20 + idx * 8}
                  className="p-5 sm:p-6"
                >
                  {InnerContent}
                </SpotlightCard>
              );
            })}
          </div>

          {/* Right Column: High-Tech Contact Form with SpotlightCard */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10">
              <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    Direct Inquiry Dispatcher
                  </span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">
                  Powered by EmailJS
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-invalid={!!errors.name}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Hunter"
                      className={`w-full rounded-xl border bg-black/40 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                          : "border-white/10 focus:border-cyan-400/60 focus:bg-cyan-950/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 font-medium">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-invalid={!!errors.email}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full rounded-xl border bg-black/40 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                          : "border-white/10 focus:border-cyan-400/60 focus:bg-cyan-950/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 font-medium">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    aria-invalid={!!errors.subject}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full rounded-xl border bg-black/40 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        : "border-white/10 focus:border-cyan-400/60 focus:bg-cyan-950/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-400 font-medium">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Message Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    aria-invalid={!!errors.message}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or engineering opportunity..."
                    className={`w-full resize-none rounded-xl border bg-black/40 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 ${
                      errors.message
                        ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                        : "border-white/10 focus:border-cyan-400/60 focus:bg-cyan-950/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 font-medium">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-4 font-semibold text-sm transition-all duration-300 ${
                    status === "success"
                      ? "bg-emerald-500 text-black shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                      : "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                  } disabled:cursor-not-allowed`}
                >
                  {status === "loading" && (
                    <>
                      <Loader2 size={18} className="animate-spin text-black" />
                      <span>Transmitting Message...</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CircleCheck size={18} className="text-black" />
                      <span>Message Delivered Successfully!</span>
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <span>Transmit Message</span>
                      <Send size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;