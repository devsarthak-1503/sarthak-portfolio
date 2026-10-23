"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Shared SpotlightCard Component
 * Delivers top-tier interactive cursor spotlight & dynamic dotted lights matrix.
 * The dotted lights and radial aura ONLY reveal dynamically around the cursor on hover.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(34, 211, 238, 0.12)",
  dotColor = "rgba(34, 211, 238, 0.4)",
  dotSize = "22px",
  spotlightRadius = 340,
  initialY = 40,
  animate = true,
  onClick,
  ...props
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const CardWrapper = animate ? motion.div : "div";
  const motionProps = animate
    ? {
        initial: { opacity: 0, y: initialY },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "100px" },
        transition: { duration: 0.55, ease: "easeOut" },
      }
    : {};

  return (
    <CardWrapper
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[#070e1b]/80 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.16)] ${className}`}
      {...motionProps}
      {...props}
    >
      {/* 1. DYNAMIC DOTTED LIGHTS MATRIX: Only visible under cursor on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.75 : 0,
          backgroundImage: `radial-gradient(${dotColor} 1.5px, transparent 1.5px)`,
          backgroundSize: `${dotSize} ${dotSize}`,
          maskImage: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
        }}
      />

      {/* 2. DYNAMIC CURSOR SPOTLIGHT: Soft radiant cyan glow following the mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${spotlightRadius * 1.3}px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* 3. Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </CardWrapper>
  );
}
