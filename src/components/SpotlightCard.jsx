"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Top 0.00001% SaaS SpotlightCard Component
 * High-performance requestAnimationFrame cursor spotlight & dynamic dotted lights matrix.
 * Silky smooth at 120Hz/240Hz with hardware acceleration and 0 layout shifts.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(34, 211, 238, 0.08)",
  dotColor = "rgba(34, 211, 238, 0.35)",
  dotSize = "22px",
  spotlightRadius = 320,
  initialY = 30,
  animate = true,
  onClick,
  ...props
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    });
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

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
      className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#070b14]/75 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/35 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] ${className}`}
      {...motionProps}
      {...props}
    >
      {/* 1. DYNAMIC DOTTED LIGHTS MATRIX: Only visible under cursor on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.65 : 0,
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
          background: `radial-gradient(${spotlightRadius * 1.2}px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* 3. Content */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </CardWrapper>
  );
}
