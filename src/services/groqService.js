import Groq from "groq-sdk";
import { portfolioContext } from "../data/portfolioContext";

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

const groq = apiKey
    ? new Groq({
        apiKey,
        dangerouslyAllowBrowser: true,
    })
    : null;

export const askAISarthak = async (
    userQuestion,
    chatHistory = []
) => {
    if (!groq) {
        return {
            success: false,
            answer:
                "System configuration error: API key is missing. Please contact Sarthak directly.",
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

        const completion =
          await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.4,
            max_tokens: 700,
          });

        const answer =
          completion?.choices?.[0]?.message?.content;

        if (!answer) {
          return {
            success: false,
            answer:
              "I couldn't generate a response at the moment. Please try again.",
          };
        }

        return {
          success: true,
          answer,
        };

    } catch (error) {
        console.error("Groq Error:", error);

        return {
          success: false,
          answer:
            "Sorry, I am currently unable to process your request. Please try again later.",
        };
    }
};