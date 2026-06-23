import aiAvatar from "../assets/ai-sarthak-avatar.png";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { askAISarthak } from "../services/groqService";
import { speakText, stopSpeaking } from "../services/elevenLabsService";
import {
    Sparkles,
    MessageSquare,
    Send,
    Terminal,
    CircleDot,
    Mic,
    Brain,
    Briefcase,
    Database,
    ArrowRight,
    Download,
    Mail,
    Code2,
    FolderGit2,
    GraduationCap,
    FileText,
    MicOff,
    UserCheck,
    Zap,
    User,
} from "lucide-react";

// Formatting utility for timestamps
const formatTime = (date) => {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(date);
};

function AISarthak() {
    // Voice Mode States
    const [voiceModeEnabled, setVoiceModeEnabled] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    // Chat States
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Refs for persistent instances and scrolling
    const chatContainerRef = useRef(null);
    const inputRef = useRef(null);
    const recognitionRef = useRef(null);
    const voiceModeEnabledRef = useRef(voiceModeEnabled); // Ref for async access
    const isInitialMount = useRef(true);

    // Sync state to ref for access inside async fetch
    useEffect(() => {
        voiceModeEnabledRef.current = voiceModeEnabled;
    }, [voiceModeEnabled]);

    // 1. Chat State with Timestamps
    const [messages, setMessages] = useState([
        {
            role: "ai",
            text: "Hello, I'm AI Sarthak.\n\nI can explain projects, technical decisions, backend architecture, AI integrations, career journey and professional experience.\n\nTry asking a recruiter-style question below.",
            timestamp: new Date(),
        },
    ]);

    const suggestedQuestions = [
        "Tell me about yourself",
        "Why should we hire you?",
        "Explain Farmer One Stop Solution",
        "How was Moody Player built?",
        "Describe your backend expertise",
        "What AI integrations have you implemented?",
        "Explain your MERN experience",
        "What makes you different?",
    ];

    const whyUseCards = [
        {
            title: "Context Aware",
            description: "Knows projects, skills and experience.",
            icon: <Brain size={22} />,
        },
        {
            title: "Instant Answers",
            description: "Fast recruiter-focused responses.",
            icon: <Zap size={22} />,
        },
        {
            title: "Interview Ready",
            description: "Prepared for technical and HR discussions.",
            icon: <UserCheck size={22} />,
        },
        {
            title: "Voice Support",
            description: "Optional voice interaction experience.",
            icon: <Mic size={22} />,
        },
    ];

    const knowledgeBase = [
        { name: "Projects", icon: <FolderGit2 size={16} /> },
        { name: "Skills", icon: <Code2 size={16} /> },
        { name: "Backend", icon: <Database size={16} /> },
        { name: "AI Integrations", icon: <Brain size={16} /> },
        { name: "Career Journey", icon: <Briefcase size={16} /> },
        { name: "Education", icon: <GraduationCap size={16} /> },
        { name: "Resume", icon: <FileText size={16} /> },
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

    // 2. INITIALIZE SPEECH RECOGNITION (FIXED FOR SINGLE-LOOP BEHAVIOR)
    useEffect(() => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false; // Strictly false for one-question flow
            recognition.interimResults = false;
            recognition.lang = "en-US";

            recognition.onstart = () => setIsListening(true);

            recognition.onend = () => setIsListening(false);

            recognition.onerror = (event) => {
                setIsListening(false);
                setVoiceModeEnabled(false); // Gracefully terminate session on any error

                // Handle specific errors gracefully without console spam or crashes
                if (event.error === "not-allowed") {
                    alert(
                        "Microphone access denied. Please enable it in your browser settings to use Voice Mode.",
                    );
                } else if (event.error === "no-speech") {
                    setMessages((prev) => [
                        ...prev,
                        {
                            role: "ai",
                            text: "I didn't catch that. Please try clicking the microphone again.",
                            timestamp: new Date(),
                        },
                    ]);
                } else if (event.error === "network") {
                    setMessages((prev) => [
                        ...prev,
                        {
                            role: "ai",
                            text: "A network error occurred with speech recognition. Please try typing your question.",
                            timestamp: new Date(),
                        },
                    ]);
                }
            };

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                if (transcript.trim()) {
                    // Immediately process the spoken question
                    handleAskAI(transcript);
                } else {
                    setVoiceModeEnabled(false);
                }
            };

            recognitionRef.current = recognition;
        }

        // Cleanup on unmount
        return () => {
            if (recognitionRef.current) {
                try {
                    recognitionRef.current.stop();
                } catch (e) {
                    /* ignore */
                }
            }
            stopSpeaking();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 3. TOGGLE VOICE MODE (START/STOP)
    const toggleVoiceMode = () => {
        if (!recognitionRef.current) {
            alert(
                "Voice recognition is not supported in your browser. Please type your question.",
            );
            return;
        }

        if (voiceModeEnabled) {
            // User manually disabled Voice Mode mid-session
            setVoiceModeEnabled(false);
            setIsListening(false);
            setIsSpeaking(false);
            try {
                recognitionRef.current.stop();
            } catch (e) {
                /* ignore */
            }
            stopSpeaking();
        } else {
            // User starts new Voice Mode session
            setVoiceModeEnabled(true);
            try {
                recognitionRef.current.start();
            } catch (e) {
                // Ignore if already started
            }
        }
    };

    // 4. SAFE AUTO-SCROLL
    const scrollToBottom = useCallback(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, []);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }
        scrollToBottom();
    }, [messages.length, isLoading, scrollToBottom]);

    // 5. AI SUBMISSION LOGIC
    const handleAskAI = async (questionText = null) => {
        const textToSend =
            typeof questionText === "string" ? questionText : inputValue;

        if (!textToSend.trim() || isLoading) return;

        // If typing while voice mode is actively listening, force stop listening
        if (isListening && recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) {
                /* ignore */
            }
        }

        const newUserMessage = {
            role: "user",
            text: textToSend,
            timestamp: new Date(),
        };
        const historySnapshot = [...messages];

        setMessages((prev) => [...prev, newUserMessage]);
        setInputValue("");
        setIsLoading(true);

        try {
            const response = await askAISarthak(textToSend, historySnapshot);

            setMessages((prev) => [
                ...prev,
                { role: "ai", text: response.answer, timestamp: new Date() },
            ]);

            // Trigger ElevenLabs Speech if Voice Mode is active
            if (voiceModeEnabledRef.current) {
                setIsSpeaking(true);
                let cleanText = response.answer.replace(/[*_#]/g, "");
                cleanText = cleanText.replace(
                    /```[\s\S]*?```/g,
                    "Code block omitted for audio.",
                );

                await speakText(cleanText);

                setIsSpeaking(false);
                setVoiceModeEnabled(false); // ENDS THE VOICE SESSION AFTER ONE COMPLETE LOOP
            }
        } catch (error) {
            const errorText =
                "An unexpected system error occurred. Please try again later.";
            setMessages((prev) => [
                ...prev,
                {
                    role: "ai",
                    text: errorText,
                    timestamp: new Date(),
                },
            ]);

            if (voiceModeEnabledRef.current) {
                setIsSpeaking(true);
                await speakText(errorText);
                setIsSpeaking(false);
                setVoiceModeEnabled(false);
            }
        } finally {
            setIsLoading(false);
            // Auto-focus input after AI responds (if not in voice mode)
            if (!voiceModeEnabledRef.current) {
                setTimeout(() => inputRef.current?.focus(), 100);
            }
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAskAI();
        }
    };

    // Dynamic Button Text Logic
    const getVoiceButtonText = () => {
        if (voiceModeEnabled) {
            if (isSpeaking) return "Speaking...";
            if (isLoading) return "Thinking...";
            if (isListening) return "Listening...";
            return "Voice Mode ON";
        }
        return "Talk To AI Sarthak";
    };

    return (
        <section
            id="ai-sarthak"
            className="relative overflow-hidden py-20 bg-[#050A15]"
        >
            <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[180px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
                        <Sparkles size={16} />
                        <span>AI ASSISTANT</span>
                        <Sparkles size={16} />
                    </div>

                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-5xl">
                        Meet AI Sarthak
                    </h2>

                    <p className="mt-3 text-lg font-medium text-cyan-400">
                        Your Personal AI Developer Assistant
                    </p>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 px-2 sm:px-0">
                        I can explain projects, technical decisions, backend architecture,
                        AI integrations, development journey and professional experience.
                    </p>
                </motion.div>

                {/* Top Grid: Avatar & Chat */}
                <div className="mb-16 grid gap-8 lg:grid-cols-12 items-start">
                    {/* AI Avatar Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 flex flex-col lg:sticky lg:top-24"
                    >
                        <div className="group relative flex w-full flex-col items-center justify-center rounded-[32px] border border-cyan-400/10 bg-white/5 p-6 sm:p-8 lg:p-10 text-center backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] sm:hover:scale-[1.03] hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] z-10">
                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative mx-auto mb-8 flex h-32 w-32 sm:h-40 sm:w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0A0F1A]"
                            >
                                <motion.div
                                    animate={{
                                        boxShadow: [
                                            "0 0 20px rgba(34,211,238,0.1)",
                                            "0 0 40px rgba(34,211,238,0.25)",
                                            "0 0 20px rgba(34,211,238,0.1)",
                                        ],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 rounded-full"
                                />

                                <div className="absolute inset-0 overflow-hidden rounded-full">
                                    <img
                                        src={aiAvatar}
                                        alt="AI Sarthak"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>

                                <AnimatePresence>
                                    {(isListening || isSpeaking) && (
                                        <>
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: [0.6, 0], scale: [1, 1.4] }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeOut",
                                                }}
                                                className={`absolute inset-0 rounded-full border-2 ${isSpeaking ? "border-indigo-400" : "border-cyan-400"}`}
                                            />
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: [0.4, 0], scale: [1, 1.8] }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeOut",
                                                    delay: 0.3,
                                                }}
                                                className={`absolute inset-0 rounded-full border ${isSpeaking ? "border-indigo-400" : "border-cyan-400"}`}
                                            />
                                        </>
                                    )}
                                </AnimatePresence>

                                <div
                                    className={`absolute -bottom-1 -right-1 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-4 border-[#0A0F1A] shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-colors ${voiceModeEnabled ? "bg-cyan-400" : "bg-cyan-500"}`}
                                >
                                    {voiceModeEnabled ? (
                                        <Mic
                                            size={20}
                                            className="text-black scale-90 sm:scale-100"
                                        />
                                    ) : (
                                        <Sparkles
                                            size={20}
                                            className="text-black scale-90 sm:scale-100"
                                        />
                                    )}
                                </div>
                            </motion.div>

                            <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white">
                                AI Sarthak
                            </h3>
                            <p className="mb-2 text-xs sm:text-sm font-semibold tracking-wide text-cyan-400">
                                Full Stack MERN Developer
                            </p>
                            <p className="mb-6 text-xs sm:text-sm text-slate-400">
                                AI Portfolio Assistant
                            </p>

                            <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 py-2 px-4 sm:px-5">
                                <CircleDot
                                    size={12}
                                    className={`animate-pulse ${voiceModeEnabled ? "text-cyan-400" : "text-slate-500"}`}
                                />
                                <span
                                    className={`text-xs sm:text-sm font-medium ${voiceModeEnabled ? "text-cyan-400" : "text-slate-400"}`}
                                >
                                    {voiceModeEnabled ? "Voice Active" : "Online"}
                                </span>
                            </div>

                            <div className="mb-8 rounded-2xl bg-black/20 p-4 sm:p-5 border border-white/5 w-full">
                                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                                    Trained on projects, skills and professional experience.
                                </p>
                            </div>

                            <button
                                onClick={toggleVoiceMode}
                                className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${voiceModeEnabled
                                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                                    : "border-cyan-400/20 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {voiceModeEnabled ? (
                                    <Mic
                                        size={18}
                                        className={
                                            isListening
                                                ? "animate-pulse text-cyan-400"
                                                : "text-cyan-400"
                                        }
                                    />
                                ) : (
                                    <MicOff size={18} />
                                )}
                                {getVoiceButtonText()}
                            </button>
                        </div>
                    </motion.div>

                    {/* AI Chat Interface */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex h-[600px] w-full flex-col overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                        >
                            {/* Chat Top Bar */}
                            <div className="shrink-0 flex items-center justify-between border-b border-cyan-400/10 bg-black/20 px-4 sm:px-8 py-4 sm:py-5">
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                                        <MessageSquare size={18} className="text-cyan-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm sm:text-base">
                                            AI Assistant Chat
                                        </h4>
                                        <p className="text-[10px] sm:text-xs text-cyan-400 flex items-center gap-1.5 mt-0.5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                                            Interactive Session
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Chat Rendering Area */}
                            <div
                                ref={chatContainerRef}
                                className="flex-1 min-h-0 p-4 sm:p-8 flex flex-col overflow-y-auto custom-scrollbar"
                            >
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`mb-6 flex gap-2 sm:gap-4 w-full sm:max-w-[90%] ${msg.role === "user" ? "self-end flex-row-reverse" : "max-w-[95%]"}`}
                                    >
                                        {msg.role === "ai" ? (
                                            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                                <Sparkles
                                                    size={16}
                                                    className="text-black sm:scale-110"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/20">
                                                <User
                                                    size={16}
                                                    className="text-slate-300 sm:scale-110"
                                                />
                                            </div>
                                        )}

                                        <div
                                            className={`rounded-2xl p-4 sm:p-5 backdrop-blur-md flex-1 ${msg.role === "ai"
                                                ? "rounded-tl-sm bg-white/5 border border-cyan-400/10"
                                                : "rounded-tr-sm bg-cyan-500/10 border border-cyan-400/20"
                                                }`}
                                        >
                                            {idx === 0 && msg.role === "ai" ? (
                                                <>
                                                    <p className="mb-2 sm:mb-3 font-medium text-white text-[14px] sm:text-[15px]">
                                                        Hello, I'm AI Sarthak.
                                                    </p>
                                                    <p className="mb-3 sm:mb-4 leading-relaxed text-slate-300 text-xs sm:text-sm">
                                                        I can explain projects, technical decisions, backend
                                                        architecture, AI integrations, career journey and
                                                        professional experience.
                                                    </p>
                                                    <p className="text-xs sm:text-sm font-medium text-cyan-400">
                                                        Try asking a recruiter-style question below.
                                                    </p>
                                                </>
                                            ) : (
                                                <p
                                                    className={`leading-relaxed text-xs sm:text-sm whitespace-pre-wrap ${msg.role === "ai" ? "text-slate-300" : "text-cyan-50"}`}
                                                >
                                                    {msg.text}
                                                </p>
                                            )}

                                            <span
                                                className={`block mt-2 text-[9px] sm:text-[10px] opacity-50 ${msg.role === "user" ? "text-cyan-200 text-right" : "text-slate-400 text-left"}`}
                                            >
                                                {formatTime(msg.timestamp)}
                                            </span>
                                        </div>
                                    </div>
                                ))}

                                {/* Typing Indicator */}
                                {isLoading && (
                                    <div className="mb-6 flex gap-2 sm:gap-4 max-w-[95%] sm:max-w-[90%]">
                                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                                            <Sparkles size={16} className="text-black sm:scale-110" />
                                        </div>
                                        <div className="rounded-2xl rounded-tl-sm bg-white/5 border border-cyan-400/10 p-4 sm:p-5 backdrop-blur-md flex items-center gap-3">
                                            <span className="text-xs sm:text-sm font-medium text-cyan-400">
                                                AI Sarthak is typing
                                            </span>
                                            <div className="flex gap-1 pt-1">
                                                <motion.div
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 0.6,
                                                        delay: 0,
                                                    }}
                                                    className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                                                />
                                                <motion.div
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 0.6,
                                                        delay: 0.2,
                                                    }}
                                                    className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                                                />
                                                <motion.div
                                                    animate={{ y: [0, -4, 0] }}
                                                    transition={{
                                                        repeat: Infinity,
                                                        duration: 0.6,
                                                        delay: 0.4,
                                                    }}
                                                    className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Suggested Questions */}
                                {messages.length === 1 && !isLoading && (
                                    <div className="mt-2 mb-2">
                                        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                                            <Terminal size={14} /> Suggested Questions
                                        </p>
                                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                                            {suggestedQuestions.map((question) => (
                                                <button
                                                    key={question}
                                                    onClick={() => handleAskAI(question)}
                                                    disabled={isLoading}
                                                    className="rounded-full border border-cyan-400/20 bg-[#0A0F1A] px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] text-left disabled:opacity-50 disabled:hover:scale-100"
                                                >
                                                    {question}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Chat Input Area */}
                            <div className="shrink-0 border-t border-cyan-400/10 bg-black/30 p-4 sm:p-6">
                                <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-white/10 bg-[#0A0F1A] p-1.5 pl-3 sm:p-2 sm:pl-4 focus-within:border-cyan-400/30 focus-within:shadow-[0_0_15px_rgba(34,211,238,0.05)] transition-all">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder={
                                            voiceModeEnabled
                                                ? isListening
                                                    ? "Listening..."
                                                    : "Waiting..."
                                                : "Ask a question..."
                                        }
                                        className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 outline-none w-full min-w-0"
                                        disabled={isLoading || voiceModeEnabled}
                                    />
                                    <button
                                        onClick={toggleVoiceMode}
                                        className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${voiceModeEnabled
                                            ? "bg-cyan-400/10 text-cyan-400"
                                            : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        <Mic
                                            size={16}
                                            className={
                                                isListening
                                                    ? "animate-pulse sm:scale-110"
                                                    : "sm:scale-110"
                                            }
                                        />
                                    </button>
                                    <button
                                        onClick={() => handleAskAI()}
                                        disabled={isLoading || !inputValue.trim()}
                                        className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-black transition-all hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                                    >
                                        <Send size={16} className="ml-0.5 sm:scale-110" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* AI Capabilities Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {whyUseCards.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            className="group rounded-[24px] border border-cyan-400/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                        >
                            <div className="mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-black">
                                {item.icon}
                            </div>
                            <h3 className="mb-2 text-base sm:text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-300">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* AI Knowledge Base */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-[32px] border border-cyan-400/10 bg-white/5 p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
                    >
                        <h3 className="mb-6 text-xl sm:text-2xl font-bold text-white text-center">
                            What AI Sarthak Knows
                        </h3>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {knowledgeBase.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center gap-2 rounded-xl border border-cyan-400/15 bg-black/20 px-4 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                                >
                                    <span className="text-cyan-400">{item.icon}</span>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[32px] border border-cyan-400/10 bg-white/5 p-6 sm:p-8 lg:p-12 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                >
                    <div className="mx-auto max-w-2xl">
                        <h3 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-white md:text-4xl">
                            Ready To Explore My Work?
                        </h3>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                            <a
                                href="#projects"
                                className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-cyan-500 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-black transition-all hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                            >
                                View Projects
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                            >
                                <Download size={18} />
                                Download Resume
                            </a>

                            <a
                                href="#contact"
                                className="flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-white backdrop-blur-md transition-all hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-400"
                            >
                                <Mail size={18} />
                                Contact Me
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AISarthak;
