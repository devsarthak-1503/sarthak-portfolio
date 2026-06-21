/**
 * ElevenLabs Text-to-Speech Service
 * Production-ready implementation for AI Sarthak Voice Mode
 */

const API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY;

// 👇 Yahan apni nayi Indian Voice ID paste karo
const VOICE_ID = "ptLlkxMDy9xKpvEf7BUA";

let currentAudio = null;

// Ye 'export' keyword hona zaroori hai, iske bina Vite error dega
export const speakText = async (text) => {
  if (!text || text.trim() === "") return Promise.resolve();

  stopSpeaking();

  try {
    if (!API_KEY) {
      console.error("ElevenLabs Configuration Error: API key is missing.");
      return Promise.resolve();
    }

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "Accept": "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": API_KEY,
        },
        body: JSON.stringify({
          text: text,
          // eleven_multilingual_v2 best hai Indian accents ke liye
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
      throw new Error(errorData.detail?.message || `HTTP ${response.status} - Failed to generate speech`);
    }

    const audioBlob = await response.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    currentAudio = new Audio(audioUrl);
    await currentAudio.play();

    return new Promise((resolve) => {
      currentAudio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        resolve();
      };

      currentAudio.onerror = (e) => {
        console.error("Audio playback error:", e);
        URL.revokeObjectURL(audioUrl);
        currentAudio = null;
        resolve();
      };
    });

  } catch (error) {
    console.error("ElevenLabs TTS Error:", error);
    return Promise.resolve();
  }
};

// Ye function bhi export hona chahiye
export const stopSpeaking = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.src = "";
    currentAudio = null;
  }
};