/**
 * Deterministic Smart Portfolio Knowledge Engine
 * Provides instant, zero-latency, high-density responses based on Sarthak's verified context.
 * Used as an ultra-reliable fallback if network, rate-limits, or API keys are unavailable.
 */

export function getSmartPortfolioAnswer(question = "") {
  const q = question.toLowerCase();

  if (
    q.includes("bynaric") ||
    q.includes("experience") ||
    q.includes("job") ||
    q.includes("company") ||
    q.includes("current role") ||
    q.includes("work") ||
    q.includes("internship") ||
    q.includes("trainee")
  ) {
    return "At **Bynaric Systems Pvt. Ltd.**, Sarthak works as a full-time **Software Developer** (previously Software Developer Trainee) on an institutional **On-Screen Evaluation Platform** for university examination assessment.\n\nKey engineering contributions:\n• **Modular Backend APIs**: Designed robust REST services for *Session Master*, *Paper Master* (soft-delete, duplicate checks), and *Session-Paper Link Master* using **Node.js**, **Express**, and **PostgreSQL**.\n• **Security & Validation**: Integrated server-side **Cloudflare Turnstile** CAPTCHA verification in login workflows and researched **RBAC**.\n• **Frontend Interfaces**: Built scalable, responsive modules using **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.";
  }

  if (
    q.includes("farmer") ||
    q.includes("agriculture") ||
    q.includes("bidding") ||
    q.includes("major project")
  ) {
    return "**Farmer One Stop Solution** is Sarthak's flagship final-year major project (research accepted in WJAETS):\n\n• **Core Tech**: **React**, **Node.js**, **Express**, **MongoDB**, **Socket.io**, and **Groq AI**.\n• **Capabilities**: Digital agricultural marketplace, equipment rental, real-time live bidding, AI crop diagnosis, and **Razorpay** payments.\n• **Sarthak's Role**: Owned and built the complete frontend architecture, real-time WebSocket state management, and co-developed backend APIs.";
  }

  if (
    q.includes("moody") ||
    q.includes("music") ||
    q.includes("face") ||
    q.includes("emotion")
  ) {
    return "**Moody Player** is an AI-powered mood-adaptive music platform:\n\n• **Tech Stack**: **React**, **Node.js**, **MongoDB**, **Face-api.js**, and **Deezer API**.\n• **Core Mechanics**: Real-time facial emotion recognition, automated mood-to-playlist mapping, JWT-secured dashboards, and dynamic audio visualizers.";
  }

  if (
    q.includes("project") ||
    q.includes("flagship") ||
    q.includes("built") ||
    q.includes("work sample")
  ) {
    return "Sarthak's top flagship engineering projects include:\n\n1. **Farmer One Stop Solution**: Full-stack agricultural ecosystem featuring real-time bidding (**Socket.io**), AI advisory (**Groq AI**), and payments (**Razorpay**). Accepted in WJAETS.\n2. **Moody Player**: Mood-adaptive streaming app utilizing **Face-api.js** computer vision and Deezer API.\n3. **DevTrack**: AI developer productivity dashboard tracking GitHub and LeetCode activity telemetry.";
  }

  if (
    q.includes("skill") ||
    q.includes("tech") ||
    q.includes("stack") ||
    q.includes("language") ||
    q.includes("framework") ||
    q.includes("tool")
  ) {
    return "Sarthak's core technical stack spans full-stack engineering & AI:\n\n• **Frontend**: **React**, **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, Redux.\n• **Backend**: **Node.js**, **Express.js**, REST APIs, **Socket.io**, JWT Auth, RBAC.\n• **Databases**: **MongoDB** (Aggregation Pipelines), **PostgreSQL**, Sequelize.\n• **AI & Cloud**: **Groq AI** (LLaMA/Qwen), **OpenAI API**, **ElevenLabs**, Cloudflare Turnstile, Vercel.";
  }

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("hire") ||
    q.includes("reach") ||
    q.includes("phone") ||
    q.includes("linkedin") ||
    q.includes("github")
  ) {
    return "You can connect directly with Sarthak Gaikwad:\n\n• **Email**: sarthakgaikwad020@gmail.com\n• **LinkedIn**: [linkedin.com/in/sarthak-gaikwad-a85727295](https://www.linkedin.com/in/sarthak-gaikwad-a85727295/)\n• **GitHub**: [github.com/devsarthak-1503](https://github.com/devsarthak-1503)\n• **Location**: India";
  }

  if (
    q.includes("resume") ||
    q.includes("cv") ||
    q.includes("education") ||
    q.includes("degree") ||
    q.includes("college")
  ) {
    return "Sarthak holds a **Bachelor of Computer Engineering** from SND College of Engineering & Research Center (SPPU). You can view and download his complete ATS-optimized resume directly from the top navigation bar or the Hero section.";
  }

  return "**Sarthak Gaikwad** is a Full Stack MERN Developer and Software Developer at **Bynaric Systems**, engineering enterprise web platforms, scalable REST APIs, and AI integrations (**React**, **Next.js 15**, **Node.js**, **PostgreSQL**, **MongoDB**, **Groq AI**).\n\nFeel free to ask about his enterprise work at Bynaric, flagship projects (*Farmer One Stop Solution*, *Moody Player*), or technical stack!";
}

