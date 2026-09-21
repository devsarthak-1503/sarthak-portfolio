import Groq from "groq-sdk";
import { portfolioContext } from "@/data/portfolioContext";

// Support both Next.js (NEXT_PUBLIC_) and legacy Vite (VITE_) env vars
const rawApiKey =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_GROQ_API_KEY) ||
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
    const groq = getGroqClient();

    if (!groq) {
        return {
            success: false,
            answer:
                "I am currently operating in offline mode because the Groq API key is not configured. Please reach out to Sarthak directly via the contact form or email (sarthakgaikwad020@gmail.com).",
        };
    }

    try {
        const systemPrompt = `
You are AI Sarthak, a professional AI portfolio assistant representing Sarthak Gaikwad.

IMPORTANT RULES:

* Always answer in professional English.
* Represent Sarthak professionally.
* Use ONLY the information available in the portfolio context.
* Never invent information.
* Never guess personal information.
* Keep responses concise and recruiter friendly.
* Highlight technical strengths when relevant.

PORTFOLIO KNOWLEDGE BASE:

${portfolioContext}
`;

        const messages = [
          {
            role: "system",
            content: systemPrompt,
          },
        ];

        const formattedHistory = chatHistory
          .slice(-10)
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
          temperature: 0.4,
          max_tokens: 700,
        });

        const answer = completion?.choices?.[0]?.message?.content;

        if (!answer) {
          return {
            success: false,
            answer:
              "I couldn't generate a response at the moment. Please feel free to try again or reach out to Sarthak directly.",
          };
        }

        return {
          success: true,
          answer,
        };

    } catch (error) {
        console.warn("Groq API request notice:", error?.message || error);

        return {
          success: false,
          answer:
            "I'm temporarily unable to reach my AI service. Please connect with Sarthak directly via email or LinkedIn!",
        };
    }
};