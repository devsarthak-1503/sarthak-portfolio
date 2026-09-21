import "./globals.css";

const siteUrl = "https://sarthak-portfolio-virid.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sarthak Gaikwad | Full Stack MERN Developer & AI Engineer",
    template: "%s | Sarthak Gaikwad",
  },
  description:
    "Official portfolio of Sarthak Gaikwad, a Full Stack MERN Developer specializing in high-performance web applications, scalable backend systems, AI integrations, and real-time platforms. Explore featured projects, tech stack, and interactive AI assistant.",
  keywords: [
    "Sarthak Gaikwad",
    "Sarthak Gaikwad Portfolio",
    "Full Stack Developer",
    "Full Stack MERN Developer",
    "MERN Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Backend Developer",
    "MongoDB Engineer",
    "Express.js REST APIs",
    "AI Integration Specialist",
    "Groq AI Developer",
    "Farmer One Stop Solution",
    "Moody Player AI",
    "Smart Task Manager",
    "Finance Backend System",
    "JavaScript Developer Pune",
    "Web Development Portfolio",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Sarthak Gaikwad", url: siteUrl }],
  creator: "Sarthak Gaikwad",
  publisher: "Sarthak Gaikwad",
  category: "Technology & Software Engineering",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sarthak Gaikwad Portfolio",
    title: "Sarthak Gaikwad | Full Stack MERN Developer & AI Engineer",
    description:
      "Full Stack MERN Developer building scalable web applications, REST APIs, AI chatbots, and real-time platforms with React, Next.js, Node.js, and MongoDB.",
    images: [
      {
        url: "/Avatar.png",
        width: 1200,
        height: 630,
        alt: "Sarthak Gaikwad - Full Stack MERN Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Gaikwad | Full Stack MERN Developer & AI Engineer",
    description:
      "Full Stack MERN Developer building scalable web applications, REST APIs, AI chatbots, and real-time platforms with React, Next.js, Node.js, and MongoDB.",
    images: ["/Avatar.png"],
    creator: "@sarthakgaikwad",
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "theme-color": "#050816",
    "color-scheme": "dark",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }) {
  // Comprehensive Structured Data (JSON-LD) for Maximum Google Knowledge Graph & Rich Results
  const personJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Sarthak Gaikwad",
        jobTitle: "Full Stack MERN Developer & AI Engineer",
        url: siteUrl,
        image: `${siteUrl}/Avatar.png`,
        description:
          "Full Stack MERN Developer focused on building scalable web applications, modern architectures, and AI-powered digital products.",
        email: "mailto:sarthakgaikwad020@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "Pune, Maharashtra, India",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Savitribai Phule Pune University (SPPU)",
        },
        sameAs: [
          "https://github.com/devsarthak-1503",
          "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
        ],
        knowsAbout: [
          "Full Stack Development",
          "MERN Stack",
          "React.js",
          "Next.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Tailwind CSS",
          "JavaScript",
          "REST APIs",
          "Artificial Intelligence",
          "Groq AI",
          "ElevenLabs",
          "Socket.io",
          "Database Architecture",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Sarthak Gaikwad Portfolio",
        description:
          "Official developer portfolio showcasing MERN stack projects, GitHub activity, and AI assistant.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: "Sarthak Gaikwad - Full Stack MERN Developer",
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#050816] text-white selection:bg-cyan-500/30 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
