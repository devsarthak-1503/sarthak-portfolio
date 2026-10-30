/**
 * Natural Indian Accent & Multilingual Text-to-Speech Engine
 * Automatically uses ElevenLabs when configured, or native Indian English Web Speech Synthesis.
 * Pre-cleans text to avoid awkward spelling of words and markdown syntax.
 */

const rawApiKey =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY) ||
  (typeof process !== "undefined" && process.env.ELEVENLABS_API_KEY) ||
  "";

const API_KEY = rawApiKey.trim();
// Natural Indian/Conversational multilingual voice ID
const VOICE_ID = "EXAVITQu4vr4xnSDxMaL"; 

let currentAudio = null;
let currentUtterance = null;

/**
 * Pre-processes text into natural spoken English (cleans markdown, technical jargon)
 * Prevents spelling out words or pronouncing formatting characters
 */
export const prepareTextForSpeech = (rawText) => {
  if (!rawText) return "";
  
  let cleaned = rawText
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, "Code block omitted.")
    .replace(/`([^`]+)`/g, "$1")
    // Remove bold and italic markers
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    // Remove header symbols
    .replace(/#{1,6}\s+/g, "")
    // Remove bullet points and numbers
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    // Remove links [text](url)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    // Natural phonetics for tech terms
    .replace(/\bMERN\b/g, "Mern")
    .replace(/\bNext\.js\b/gi, "Next J S")
    .replace(/\bReact\.js\b/gi, "React")
    .replace(/\bNode\.js\b/gi, "Node J S")
    .replace(/\bExpress\.js\b/gi, "Express")
    .replace(/\bRESTful\b/gi, "Restful")
    .replace(/\bREST\b/g, "Rest")
    .replace(/\bAPI\b/g, "A P I")
    .replace(/\bAPIs\b/g, "A P Is")
    .replace(/\bJWT\b/g, "J W T")
    .replace(/\bRBAC\b/g, "R-BAC")
    .replace(/\bPostgreSQL\b/gi, "Postgres")
    .replace(/\bSQL\b/g, "Sequel")
    .replace(/\bCRUD\b/gi, "Crud")
    .replace(/\bCI\/CD\b/gi, "C I C D")
    .replace(/\bUI\/UX\b/gi, "U I and U X")
    .replace(/\bLLM\b/g, "L L M")
    .replace(/\bLLMs\b/g, "L L Ms")
    .replace(/\bGroq\b/gi, "Grok")
    // Collapse excess whitespace
    .replace(/\s+/g, " ")
    .trim();

  return cleaned;
};

/**
 * Fallback to Native Browser Speech Synthesis with Indian English Voice
 */
const speakWithBrowserNative = (cleanText) => {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      resolve({ success: false, reason: "speech_synthesis_unsupported" });
      return;
    }

    try {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      currentUtterance = utterance;

      const voices = window.speechSynthesis.getVoices();
      
      // Look for authentic Indian English voice
      const indianVoice = voices.find(
        (v) =>
          v.lang === "en-IN" ||
          v.lang.toLowerCase().includes("in") ||
          v.name.toLowerCase().includes("india") ||
          v.name.toLowerCase().includes("heera") ||
          v.name.toLowerCase().includes("ravi") ||
          v.name.toLowerCase().includes("neerja") ||
          v.name.toLowerCase().includes("veena")
      ) || voices.find((v) => v.lang.startsWith("en"));

      if (indianVoice) {
        utterance.voice = indianVoice;
        utterance.lang = indianVoice.lang || "en-IN";
      } else {
        utterance.lang = "en-IN";
      }

      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      utterance.onend = () => {
        currentUtterance = null;
        resolve({ success: true, engine: "native_in" });
      };

      utterance.onerror = (e) => {
        console.warn("Native TTS error:", e);
        currentUtterance = null;
        resolve({ success: false, reason: e.error || "tts_error" });
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn("Speech synthesis error:", err);
      resolve({ success: false, reason: err.message });
    }
  });
};

/**
 * Main Speak Function
 * Attempts ElevenLabs TTS with natural settings; falls back gracefully to en-IN native speech.
 */
export const speakText = async (text) => {
  if (typeof window === "undefined") return { success: false, reason: "ssr" };
  if (!text || text.trim() === "") return { success: false, reason: "empty_text" };

  stopSpeaking();

  const cleanText = prepareTextForSpeech(text);

  // If no ElevenLabs API key, immediately use natural Indian English browser voice
  if (!API_KEY || !API_KEY.startsWith("sk_")) {
    return speakWithBrowserNative(cleanText);
  }

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": API_KEY,
        },
        body: JSON.stringify({
          text: cleanText,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.65,
            similarity_boost: 0.85,
            style: 0.0,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      // Graceful fallback to native Indian English voice
      return speakWithBrowserNative(cleanText);
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    currentAudio = new Audio(audioUrl);

    return new Promise((resolve) => {
      currentAudio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        resolve({ success: true, engine: "elevenlabs" });
      };

      currentAudio.onerror = () => {
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        // Fallback to browser voice on audio playback error
        speakWithBrowserNative(cleanText).then(resolve);
      };

      currentAudio.play().catch(() => {
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        speakWithBrowserNative(cleanText).then(resolve);
      });
    });
  } catch (error) {
    console.warn("ElevenLabs failed, using native Indian English voice:", error?.message);
    return speakWithBrowserNative(cleanText);
  }
};

export const stopSpeaking = () => {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.src = "";
    } catch {
      // Ignore
    }
    currentAudio = null;
  }

  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {
      // Ignore
    }
    currentUtterance = null;
  }
};
