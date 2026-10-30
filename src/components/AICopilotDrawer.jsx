"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { askAISarthak } from "@/services/groqService";
import { speakText, stopSpeaking } from "@/services/elevenLabsService";
import {
  Sparkles,
  Send,
  X,
  Mic,
  MicOff,
  User,
  Terminal,
  Volume2,
  VolumeX,
  CircleDot,
  RotateCcw,
  Command,
} from "lucide-react";

// Markdown bold & bullet formatting
function FormattedMessage({ text }) {
  if (!text) return null;
  const lines = text.split("\n");

  return (
    <div className="space-y-1.5 leading-relaxed text-xs sm:text-sm text-zinc-300">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={lineIdx} className="h-1" />;

        const isBullet = trimmed.startsWith("* ") || trimmed.startsWith("- ");
        const content = isBullet ? trimmed.slice(2) : line;

        const parts = content.split(/(\*\*.*?\*\*)/g);
        const rendered = parts.map((part, partIdx) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={partIdx} className="font-semibold text-white">
                {part.slice(2, -2)}
              </strong>
            );
          }
          return part;
        });

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 ml-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
              <div className="flex-1">{rendered}</div>
            </div>
          );
        }

        return <p key={lineIdx}>{rendered}</p>;
      })}
    </div>
  );
}

export default function AICopilotDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [voiceModeEnabled, setVoiceModeEnabled] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello! I am **AI Sarthak**, a copilot trained on Sarthak Gaikwad's full-stack architecture, enterprise work at **Bynaric Systems**, flagship projects, and technical skills.\n\nHow can I help your evaluation today?",
      timestamp: new Date(),
    },
  ]);

  const chatContainerRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);
  const voiceModeEnabledRef = useRef(voiceModeEnabled);

  useEffect(() => {
    voiceModeEnabledRef.current = voiceModeEnabled;
  }, [voiceModeEnabled]);

  const suggestedQuestions = [
    "Tell me about Sarthak's work at Bynaric Systems",
    "Explain Farmer One Stop Solution architecture",
    "How does Moody Player AI emotion detection work?",
    "What are Sarthak's core backend engineering strengths?",
    "Why should our team hire Sarthak?",
  ];

  // Auto-scroll chat
  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 250);
    } else {
      stopSpeaking();
      setIsSpeaking(false);
    }
  }, [isOpen, messages.length, scrollToBottom]);

  // Global listeners for CMD+K and custom events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = (e) => {
      setIsOpen(true);
      if (e.detail?.query) {
        setInputValue(e.detail.query);
        setTimeout(() => handleSendMessage(e.detail.query), 100);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-ai-copilot", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-ai-copilot", handleCustomOpen);
    };
  }, [isOpen]);

  // Speech Recognition initialization
  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-IN"; // Natural Indian English preference

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);

      recognition.onerror = () => {
        setIsListening(false);
        setVoiceModeEnabled(false);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0]?.[0]?.transcript;
        if (transcript) {
          handleSendMessage(transcript);
        }
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // Ignore
        }
      }
      stopSpeaking();
    };
  }, []);

  const toggleVoiceMode = () => {
    if (voiceModeEnabled) {
      setVoiceModeEnabled(false);
      setIsListening(false);
      setIsSpeaking(false);
      try {
        recognitionRef.current?.stop();
      } catch {
        // Ignore
      }
      stopSpeaking();
    } else {
      setVoiceModeEnabled(true);
      try {
        recognitionRef.current?.start();
      } catch {
        // Ignore
      }
    }
  };

  const handleSendMessage = async (textToSend = null) => {
    const query = typeof textToSend === "string" ? textToSend : inputValue;
    if (!query.trim() || isLoading) return;

    const userMsg = {
      role: "user",
      text: query,
      timestamp: new Date(),
    };

    const historySnapshot = [...messages];
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await askAISarthak(query, historySnapshot);
      const aiMsg = {
        role: "ai",
        text: response.answer,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMsg]);

      // If voice enabled, speak answer in natural tone
      if (voiceModeEnabledRef.current) {
        setIsSpeaking(true);
        await speakText(response.answer);
        setIsSpeaking(false);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "I encountered a network timeout. Sarthak specializes in full-stack MERN, enterprise apps at Bynaric Systems, and AI integrations. Please try asking again!",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    stopSpeaking();
    setIsSpeaking(false);
    setMessages([
      {
        role: "ai",
        text: "Chat cleared. What technical or interview question would you like to explore about Sarthak?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. FLOATING CORNER AVATAR TRIGGER (Always visible)       */}
      {/* ======================================================== */}
      <div className="fixed bottom-6 right-6 z-50 select-none">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open AI Sarthak Copilot"
          className="group relative flex items-center gap-3 rounded-full border border-white/[0.12] bg-[#070b14]/90 py-2 pl-2 pr-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
        >
          {/* Subtle Ambient Radar Glow */}
          <span className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Avatar Ring */}
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-white/[0.15] bg-[#0A0F1A] ring-2 ring-cyan-400/30">
            <Image
              src="/ai-sarthak-avatar.png"
              alt="AI Sarthak"
              fill
              className="object-cover object-center"
              sizes="44px"
            />
            {/* Live indicator dot */}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#070b14] bg-emerald-400 animate-pulse" />
          </div>

          {/* Trigger Text & Hotkey */}
          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-white group-hover:text-cyan-200 transition-colors">
                AI Sarthak
              </span>
              <Sparkles size={11} className="text-cyan-400" />
            </div>
            <p className="text-[10px] text-zinc-400 font-mono">Ask anything</p>
          </div>

          {/* CMD+K Hint */}
          <div className="hidden lg:flex items-center gap-0.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 ml-1">
            <Command size={10} />
            <span>K</span>
          </div>
        </motion.button>
      </div>

      {/* ======================================================== */}
      {/* 2. SLIDE-OVER COPILOT DRAWER (Opened on click or CMD+K)  */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Copilot Drawer Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative z-10 flex h-full sm:h-[94vh] w-full sm:max-w-md sm:my-auto sm:mr-6 flex-col overflow-hidden sm:rounded-[28px] border border-white/[0.1] bg-[#070b14]/95 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
            >
              {/* Drawer Top Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/[0.15] bg-[#0A0F1A]">
                    <Image
                      src="/ai-sarthak-avatar.png"
                      alt="AI Sarthak"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-white">AI Sarthak</h4>
                      <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-[9px] font-mono text-cyan-300 border border-cyan-400/20">
                        Copilot
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <CircleDot size={9} className="text-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-zinc-400">
                        {isSpeaking ? "Speaking..." : isLoading ? "Thinking..." : "Trained on Bynaric Systems & MERN"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Header Action Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleVoiceMode}
                    title={voiceModeEnabled ? "Turn off Voice Mode" : "Turn on Indian Voice Mode"}
                    className={`flex h-8 w-8 items-center justify-center rounded-xl border transition-all ${
                      voiceModeEnabled
                        ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-300"
                        : "border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white"
                    }`}
                  >
                    {voiceModeEnabled ? <Mic size={15} /> : <MicOff size={15} />}
                  </button>

                  <button
                    onClick={clearChat}
                    title="Clear Conversation"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white transition-colors"
                  >
                    <RotateCcw size={14} />
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    title="Close Copilot (Esc)"
                    className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white transition-colors ml-1"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Chat Message Scroll Window */}
              <div
                ref={chatContainerRef}
                className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scrollbar"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-3 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "ai" && (
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-cyan-500/10 text-cyan-300 mt-1">
                        <Sparkles size={13} />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed backdrop-blur-md ${
                        msg.role === "user"
                          ? "bg-white/[0.08] text-white border border-white/[0.12] rounded-tr-sm"
                          : "bg-white/[0.03] text-zinc-300 border border-white/[0.06] rounded-tl-sm"
                      }`}
                    >
                      {msg.role === "ai" ? (
                        <FormattedMessage text={msg.text} />
                      ) : (
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-cyan-500/10 text-cyan-300 mt-1">
                      <Sparkles size={13} />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm border border-white/[0.06] bg-white/[0.03] px-4 py-3 flex items-center gap-2">
                      <span className="text-xs text-zinc-400 font-mono">Thinking</span>
                      <div className="flex gap-1">
                        <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping" />
                        <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping delay-100" />
                        <span className="h-1 w-1 rounded-full bg-cyan-400 animate-ping delay-200" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Suggested Starters if conversation is fresh */}
                {messages.length === 1 && !isLoading && (
                  <div className="pt-2">
                    <p className="mb-2 text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                      <Terminal size={11} /> Suggested Inquiries
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {suggestedQuestions.map((q) => (
                        <button
                          key={q}
                          onClick={() => handleSendMessage(q)}
                          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 text-left text-xs font-medium text-zinc-300 transition-all hover:border-cyan-400/30 hover:bg-white/[0.04] hover:text-white"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="shrink-0 border-t border-white/[0.06] bg-black/40 p-3 sm:p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#090e1a] p-1.5 pl-3 focus-within:border-cyan-400/40 transition-colors"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      voiceModeEnabled && isListening
                        ? "Listening to voice input..."
                        : "Ask about projects, Bynaric, tech stack..."
                    }
                    className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-zinc-500 outline-none min-w-0"
                    disabled={isLoading}
                  />

                  <button
                    type="button"
                    onClick={toggleVoiceMode}
                    title="Toggle Speech"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      voiceModeEnabled
                        ? "bg-cyan-500/15 text-cyan-300"
                        : "bg-white/[0.03] text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Mic size={14} />
                  </button>

                  <button
                    type="submit"
                    disabled={isLoading || !inputValue.trim()}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-zinc-950 transition-all hover:bg-cyan-300 disabled:opacity-40 disabled:hover:bg-white"
                  >
                    <Send size={13} />
                  </button>
                </form>

                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 px-1">
                  <span>Press Enter to send</span>
                  <span>Esc to close</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
