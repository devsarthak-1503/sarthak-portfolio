/**
 * ElevenLabs Text-to-Speech Service
 * Production-ready implementation for AI Sarthak Voice Mode
 * Next.js compatible — SSR safe, resilient error handling
 */

// Support both Next.js (NEXT_PUBLIC_) and legacy Vite (VITE_) env vars
const rawApiKey =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY) ||
  (typeof process !== "undefined" && process.env.VITE_ELEVENLABS_API_KEY) ||
  "";

const API_KEY = rawApiKey.trim();
const VOICE_ID = "ptLlkxMDy9xKpvEf7BUA";

let currentAudio = null;

export const speakText = async (text) => {
  // Guard: only run in browser environment
  if (typeof window === "undefined") return { success: false, reason: "ssr" };
  if (!text || text.trim() === "") return { success: false, reason: "empty_text" };

  stopSpeaking();

  // Validate API key presence
  if (!API_KEY) {
    console.warn("ElevenLabs: NEXT_PUBLIC_ELEVENLABS_API_KEY is not set in .env.local. Voice playback disabled.");
    return { success: false, reason: "missing_key" };
  }

  // Validate API key format (ElevenLabs secret keys start with 'sk_')
  if (!API_KEY.startsWith("sk_")) {
    console.warn(
      "ElevenLabs: API key appears to be an ID instead of a secret key. Secret keys start with 'sk_'. Please check your ElevenLabs settings at https://elevenlabs.io/app/settings/api-keys"
    );
    return { success: false, reason: "invalid_key_format" };
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
          text: text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            style: 0.0,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message = errorData.detail?.message || `HTTP ${response.status}`;
      console.warn("ElevenLabs API warning:", message);
      return { success: false, reason: message };
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    currentAudio = new Audio(audioUrl);

    return new Promise((resolve) => {
      currentAudio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        resolve({ success: true });
      };

      currentAudio.onerror = (e) => {
        console.warn("Audio playback ended with error:", e);
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        resolve({ success: false, reason: "playback_error" });
      };

      currentAudio.play().catch((playErr) => {
        console.warn("Audio play prevented (e.g. autoplay policy):", playErr);
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        resolve({ success: false, reason: "autoplay_prevented" });
      });
    });
  } catch (error) {
    console.warn("ElevenLabs TTS request could not be completed:", error?.message || error);
    return { success: false, reason: "network_or_fetch_error" };
  }
};

export const stopSpeaking = () => {
  if (currentAudio) {
    try {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio.src = "";
    } catch {
      // Ignore errors on teardown
    }
    currentAudio = null;
  }
};