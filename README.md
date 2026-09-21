# Sarthak Portfolio

Personal developer portfolio built to showcase projects, technical skills, GitHub activity, and an AI-powered portfolio assistant.

# Live Portfolio

https://sarthak-portfolio-virid.vercel.app/

## Overview

This portfolio was built as a central place to present my work as a Full Stack MERN Developer.

The application includes project showcases, technical information, GitHub integration, an AI-powered portfolio assistant, voice interaction capabilities, and direct contact options for recruiters and collaborators.

## Features

* Modern responsive portfolio
* Project showcase section
* GitHub profile highlights
* AI-powered portfolio assistant
* Voice input support
* Voice response support
* Resume access
* Contact section
* Mobile-friendly design

## Tech Stack

Frontend

* Next.js (App Router)
* React
* TypeScript-compatible JavaScript
* Tailwind CSS v4
* Framer Motion

AI & Integrations

* Groq API
* ElevenLabs

Tools

* Git
* GitHub
* Vercel

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx       # Root layout with Metadata API
│   ├── page.jsx         # Main single-page portfolio
│   ├── globals.css      # Global styles
│   ├── robots.js        # Dynamic robots.txt
│   └── sitemap.js       # Dynamic sitemap.xml
├── assets/
├── components/
├── data/
├── sections/
└── services/
```

## Local Development

Clone the repository:

```bash
git clone https://github.com/devsarthak-1503/portfolio.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Environment Variables

Create a `.env.local` file and configure the required API keys:

```env
NEXT_PUBLIC_GROQ_API_KEY=your_key
NEXT_PUBLIC_ELEVENLABS_API_KEY=your_key
```

## AI Portfolio Assistant

The portfolio includes an AI assistant trained on portfolio-specific information.

The assistant can answer questions related to:

* Technical skills
* Projects
* Development experience
* Technology choices
* Portfolio content

Voice interaction is also supported through speech recognition and text-to-speech integration.

## Contact

Email: [sarthakgaikwad020@gmail.com](mailto:sarthakgaikwad020@gmail.com)

LinkedIn:
https://www.linkedin.com/in/sarthak-gaikwad-a85727295/

GitHub:
https://github.com/devsarthak-1503

## License

This project is intended for portfolio and personal branding purposes.
