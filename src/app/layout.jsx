import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const siteUrl = "https://sarthak-portfolio-virid.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sarthak Gaikwad | Full Stack Software Developer & AI Engineer",
    template: "%s | Sarthak Gaikwad",
  },
  description:
    "Official portfolio of Sarthak Gaikwad, Software Developer at Bynaric Systems and Full Stack MERN engineer specializing in scalable enterprise web applications, Next.js, PostgreSQL, REST APIs, and integrated AI capabilities.",
  keywords: [
    "Sarthak Gaikwad",
    "Sarthak Gaikwad Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Bynaric Systems",
    "Next.js Developer",
    "React Developer",
    "PostgreSQL Engineer",
    "Node.js Backend Developer",
    "MongoDB Engineer",
    "AI Integration Developer",
    "Farmer One Stop Solution",
    "Moody Player AI",
    "Software Engineer Pune",
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
    title: "Sarthak Gaikwad | Full Stack Software Developer & AI Engineer",
    description:
      "Software Developer at Bynaric Systems building scalable web applications, REST APIs, and AI integrations with Next.js, React, Node.js, and PostgreSQL.",
    images: [
      {
        url: "/Avatar.png",
        width: 1200,
        height: 630,
        alt: "Sarthak Gaikwad - Full Stack Software Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Gaikwad | Full Stack Software Developer & AI Engineer",
    description:
      "Software Developer at Bynaric Systems building scalable web applications, REST APIs, and AI integrations with Next.js, React, Node.js, and PostgreSQL.",
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
    "theme-color": "#03050a",
    "color-scheme": "dark",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Sarthak Gaikwad",
        jobTitle: "Software Developer & Full Stack AI Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Bynaric Systems Pvt. Ltd.",
        },
        url: siteUrl,
        image: `${siteUrl}/Avatar.png`,
        description:
          "Software Developer at Bynaric Systems focused on building scalable enterprise web applications, resilient architectures, and AI-powered digital products.",
        email: "mailto:sarthakgaikwad020@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "Pune, Maharashtra, India",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "SND College of Engineering and Research Center",
        },
        sameAs: [
          "https://github.com/devsarthak-1503",
          "https://www.linkedin.com/in/sarthak-gaikwad-a85727295/",
        ],
        knowsAbout: [
          "Full Stack Development",
          "Next.js",
          "React.js",
          "Node.js",
          "TypeScript",
          "Express.js",
          "PostgreSQL",
          "Sequelize",
          "MongoDB",
          "Tailwind CSS",
          "REST APIs",
          "Artificial Intelligence",
          "Groq AI",
          "Socket.io",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Sarthak Gaikwad Portfolio",
        description:
          "Official developer portfolio showcasing enterprise experience at Bynaric Systems, flagship AI platforms, and interactive AI copilot.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
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
      <body className="font-sans antialiased bg-[#03050a] text-zinc-100 selection:bg-cyan-500/25 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
