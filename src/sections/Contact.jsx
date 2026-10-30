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

// Inline SVG Brand Icons
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

const contactDetails = [
  {
    title: "Email",
    value: "sarthakgaikwad020@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=sarthakgaikwad020@gmail.com",
    icon: Mail,
    badge: "Direct Contact",
  },
  {
    title: "LinkedIn",
    value: "Sarthak Gaikwad",
    link: "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
    icon: LinkedinIcon,
    badge: "Professional Profile",
  },
  {
    title: "GitHub",
    value: "devsarthak-1503",
    link: "https://github.com/devsarthak-1503",
    icon: GithubIcon,
    badge: "Open Source Code",
  },
  {
    title: "Location",
    value: "Pune, Maharashtra, India",
    link: null,
    icon: MapPin,
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

  const successTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "100px" }}
          transition={{ duration: 0.55 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-300">
            <MessageSquare size={13} className="text-cyan-400" />
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400">
            Available for full-stack engineering collaborations, scalable system architectures, and AI product development.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="flex flex-col gap-3.5 lg:col-span-5">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;

              const CardInner = (
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3.5">
                    {/* Controlled Light Icon Pod */}
                    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-500 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-200 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                      <Icon size={18} />
                      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.18),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                          {item.title}
                        </span>
                        <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white transition-colors duration-300 group-hover:text-cyan-200">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  {item.link && (
                    <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-cyan-300 transition-colors" />
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
                    className="p-5 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30"
                  >
                    {CardInner}
                  </SpotlightCard>
                </a>
              ) : (
                <SpotlightCard
                  key={item.title}
                  initialY={20 + idx * 8}
                  className="p-5 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl"
                >
                  {CardInner}
                </SpotlightCard>
              );
            })}
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-8 sm:p-10 border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-300">
                    Direct Channel Dispatcher
                  </span>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  EmailJS Delivery
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-400">
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
                      className={`w-full rounded-xl border bg-black/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 ${
                        errors.name
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/[0.08] focus:border-cyan-400/50 focus:bg-white/[0.02]"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-400">
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
                      className={`w-full rounded-xl border bg-black/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 ${
                        errors.email
                          ? "border-red-500/50 focus:border-red-500"
                          : "border-white/[0.08] focus:border-cyan-400/50 focus:bg-white/[0.02]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-medium text-zinc-400">
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
                    placeholder="Engineering Role / Project Architecture"
                    className={`w-full rounded-xl border bg-black/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 ${
                      errors.subject
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.08] focus:border-cyan-400/50 focus:bg-white/[0.02]"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-400">{errors.subject}</span>
                  )}
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                    Message Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-invalid={!!errors.message}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project timeline or full-stack opportunity..."
                    className={`w-full resize-none rounded-xl border bg-black/30 px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 outline-none transition-all duration-200 ${
                      errors.message
                        ? "border-red-500/50 focus:border-red-500"
                        : "border-white/[0.08] focus:border-cyan-400/50 focus:bg-white/[0.02]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`group/btn relative flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    status === "success"
                      ? "bg-emerald-400 text-zinc-950"
                      : "bg-white text-zinc-950 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {status === "loading" && (
                    <>
                      <Loader2 size={16} className="animate-spin text-zinc-950" />
                      <span>Transmitting...</span>
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CircleCheck size={16} className="text-zinc-950" />
                      <span>Message Delivered Successfully</span>
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <span>Send Message</span>
                      <Send size={14} className="transition-transform group-hover/btn:translate-x-0.5" />
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
