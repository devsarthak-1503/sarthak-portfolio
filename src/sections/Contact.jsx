import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  Loader2,
  CircleCheck,
} from "lucide-react";

// ==========================================
// INLINE BRAND ICONS (Replaces Removed Lucide Brand Icons)
// ==========================================
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.3-.37 6.8-1.4 6.8-7.32a5.4 5.4 0 0 0-1.53-3.79 5.4 5.4 0 0 0-.15-3.8s-1.25-.4-3.8 1.3a12.8 12.8 0 0 0-7 0C6.25 1.3 5 1.7 5 1.7a5.4 5.4 0 0 0-.15 3.8A5.4 5.4 0 0 0 3 9.42c0 5.9 3.5 6.9 6.8 7.32A4.8 4.8 0 0 0 8.8 20v2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
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
  },
  {
    title: "LinkedIn",
    value: "Sarthak Gaikwad",
    link: "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
    icon: <LinkedinIcon size={22} />,
  },
  {
    title: "GitHub",
    value: "devsarthak-1503",
    link: "https://github.com/devsarthak-1503",
    icon: <GithubIcon size={22} />,
  },
  {
    title: "Location",
    value: "India",
    link: null,
    icon: <MapPin size={22} />,
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

  // Combined refs for strict memory leak prevention
  const networkTimeoutRef = useRef(null);
  const successTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (networkTimeoutRef.current) clearTimeout(networkTimeoutRef.current);
      if (successTimeoutRef.current) clearTimeout(successTimeoutRef.current);
    };
  }, []);

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
      // ==========================================
      // EmailJS Ready Architecture
      // Uncomment and configure when ready:
      // ==========================================
      // await emailjs.send(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   formData,
      //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      // );

      // Safe Network Simulation
      await new Promise((resolve) => {
        networkTimeoutRef.current = setTimeout(resolve, 1500);
      });

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      successTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
      }, 3000);

    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("idle");
      setErrors({ message: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 bg-[#050A15]">
      <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.div variants={itemVariants} className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            <Sparkles size={16} />
            <span>Connect</span>
            <Sparkles size={16} />
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-white md:text-5xl lg:text-5xl">
            Let's Work Together
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-2xl text-lg font-medium text-slate-400"
          >
            Open to <span className="text-cyan-400">Full Stack MERN</span>, Frontend, Backend and AI-powered development opportunities.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:col-span-5"
          >
            {contactDetails.map((item) => {
              const cardClasses = "group flex items-center gap-6 rounded-[24px] border border-cyan-400/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] cursor-pointer outline-none w-full";

              const InnerContent = (
                <>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-black shadow-[0_0_15px_rgba(34,211,238,0.05)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium text-white transition-colors duration-300 group-hover:text-cyan-300 break-all sm:break-normal">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              // Using motion directly on a tag ensures animation propagates perfectly
              return item.link ? (
                <motion.a
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${item.title}`}
                  className={cardClasses}
                >
                  {InnerContent}
                </motion.a>
              ) : (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={cardClasses}
                >
                  {InnerContent}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-[32px] border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 hover:border-cyan-400/20 transition-all duration-500 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-invalid={!!errors.name}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sarthak Gaikwad"
                      className={`w-full rounded-xl border bg-[#0A0F1A] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all ${errors.name
                        ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                        : "border-white/10 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                        }`}
                      disabled={status === "loading"}
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-xs text-red-400 ml-1"
                        >
                          {errors.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-invalid={!!errors.email}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarthak@example.com"
                      className={`w-full rounded-xl border bg-[#0A0F1A] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all ${errors.email
                        ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                        : "border-white/10 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                        }`}
                      disabled={status === "loading"}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.span
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-xs text-red-400 ml-1"
                        >
                          {errors.email}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-300 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    aria-invalid={!!errors.subject}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Interview Opportunity"
                    className={`w-full rounded-xl border bg-[#0A0F1A] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all ${errors.subject
                      ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                      : "border-white/10 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                      }`}
                    disabled={status === "loading"}
                  />
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-xs text-red-400 ml-1"
                      >
                        {errors.subject}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-invalid={!!errors.message}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Sarthak, we would like to..."
                    rows={5}
                    className={`w-full resize-none rounded-xl border bg-[#0A0F1A] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-all custom-scrollbar ${errors.message
                      ? "border-red-500/50 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]"
                      : "border-white/10 focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)]"
                      }`}
                    disabled={status === "loading"}
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-xs text-red-400 ml-1"
                      >
                        {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`mt-2 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold transition-all duration-300 ${status === "success"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/50"
                    : "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:hover:bg-cyan-500 disabled:hover:shadow-none"
                    }`}
                >
                  {status === "idle" && (
                    <>
                      Send Message <Send size={18} className="ml-1" />
                    </>
                  )}
                  {status === "loading" && (
                    <>
                      Sending... <Loader2 size={18} className="ml-1 animate-spin" />
                    </>
                  )}
                  {status === "success" && (
                    <>
                      Message Sent Successfully <CircleCheck size={18} className="ml-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;