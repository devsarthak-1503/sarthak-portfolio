import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { portfolioContext } from "@/data/portfolioContext";
import { getSmartPortfolioAnswer } from "@/services/fallbackKnowledge";

export async function POST(req) {
  let userQuestion = "";
  try {
    const { question, history = [] } = await req.json();
    userQuestion = question || "";

    if (!userQuestion || typeof userQuestion !== "string") {
      return NextResponse.json(
        { success: false, error: "Question is required." },
        { status: 400 }
      );
    }

    const apiKey =
      (process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.trim()) ||
      (process.env.NEXT_PUBLIC_GROQ_API_KEY && process.env.NEXT_PUBLIC_GROQ_API_KEY.trim()) ||
      "";

    // If API key is not yet configured in Vercel environment variables,
    // seamlessly provide instant, accurate verified answer from Sarthak's knowledge base.
    if (!apiKey) {
      return NextResponse.json({
        success: true,
        answer: getSmartPortfolioAnswer(userQuestion),
      });
    }

    const groq = new Groq({ apiKey });

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
      { role: "system", content: systemPrompt },
    ];

    if (Array.isArray(history)) {
      const formattedHistory = history
        .slice(-6)
        .filter((msg) => msg.text && msg.role)
        .map((msg) => ({
          role: msg.role === "ai" ? "assistant" : "user",
          content: msg.text,
        }));
      messages.push(...formattedHistory);
    }

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

    const answer =
      completion?.choices?.[0]?.message?.content ||
      getSmartPortfolioAnswer(userQuestion);

    return NextResponse.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error("API /api/chat error:", error?.message || error);

    // Guaranteed graceful fallback so AI Sarthak never breaks or throws communication errors in production
    return NextResponse.json({
      success: true,
      answer: getSmartPortfolioAnswer(userQuestion),
    });
  }
}
