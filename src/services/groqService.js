import Groq from "groq-sdk";
import { portfolioContext } from "@/data/portfolioContext";
import { getSmartPortfolioAnswer } from "./fallbackKnowledge";

const rawApiKey =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_GROQ_API_KEY) ||
  (typeof process !== "undefined" && process.env.GROQ_API_KEY) ||
  (typeof process !== "undefined" && process.env.VITE_GROQ_API_KEY) ||
  "";

const apiKey = rawApiKey.trim();
let groqInstance = null;

function getGroqClient() {
  if (!apiKey) return null;
  if (!groqInstance) {
    try {
      groqInstance = new Groq({
        apiKey,
        dangerouslyAllowBrowser: true,
      });
    } catch (e) {
      console.warn("Groq initialization warning:", e?.message || e);
      return null;
    }
  }
  return groqInstance;
}

export const askAISarthak = async (
    userQuestion,
    chatHistory = []
) => {
    // 1. Primary Strategy: Call Next.js Server Route /api/chat
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
          history: chatHistory,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.answer) {
          return {
            success: data.success !== false,
            answer: data.answer,
          };
        }
      }
    } catch (err) {
      console.warn("Server route /api/chat fallback to client SDK / knowledge engine:", err?.message || err);
    }

    // 2. Secondary Strategy: Direct client SDK fallback if client-side key configured
    const groq = getGroqClient();

    if (!groq) {
        return {
            success: true,
            answer: getSmartPortfolioAnswer(userQuestion),
        };
    }

    try {
        const systemPrompt = `
You are AI Sarthak, the executive AI assistant representing Sarthak Gaikwad (Full Stack MERN Developer & AI Engineer).

MANDATORY RULES FOR "SMART, CONCISE & POWERFUL" RESPONSES:
1. STRICT BREVITY LIMIT: Keep answers under 60-95 words total (2 short, punchy paragraphs OR 3-4 structured bullet points). NEVER output long essays or walls of text.
2. ZERO FILLER: Start immediately with the core answer. Never use filler greetings like "Certainly!", "Sure!", "Hello!", "I would be happy to explain", or closing pleasantries.
3. HIGH TECHNICAL DENSITY: Highlight specific technologies and architecture (**React**, **Next.js 15**, **Node.js**, **Express**, **MongoDB**, **Groq AI**, **Socket.io**, **Cloudflare Turnstile**).
4. SCAN-FRIENDLY MARKDOWN: Use **bold keywords** for key technologies and architecture patterns so recruiters can scan in 5 seconds.
5. PROFESSIONAL & CONFIDENT: Answers must sound sharp, executive, and recruiter-ready.
6. GROUND TRUTH: Base all answers strictly on verified context. If an answer is unknown, say: "I don't have verified details on that topic." in one sentence.

VERIFIED CONTEXT:
${portfolioContext}
`;

        const messages = [
          {
            role: "system",
            content: systemPrompt,
          },
        ];

        const formattedHistory = chatHistory
          .slice(-6)
          .filter((msg) => msg.text && msg.role)
          .map((msg) => ({
            role: msg.role === "ai" ? "assistant" : "user",
            content: msg.text,
          }));

        messages.push(...formattedHistory);

        messages.push({
          role: "user",
          content: userQuestion,
        });

        const completion = await groq.chat.completions.create({
          model: "qwen/qwen3.8-27b",
          messages,
          temperature: 0.3,
          max_tokens: 250,
        });

        const answer = completion?.choices?.[0]?.message?.content || getSmartPortfolioAnswer(userQuestion);

        return {
          success: true,
          answer,
        };

    } catch (error) {
        console.warn("Groq API request notice, serving smart fallback:", error?.message || error);

        return {
          success: true,
          answer: getSmartPortfolioAnswer(userQuestion),
        };
    }
};
