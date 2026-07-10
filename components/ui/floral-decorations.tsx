"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Reusable Hand-drawn Style Cute Flower / Petal / Leaf SVGs
export function CuteDaisy({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Petals */}
      <circle cx="50" cy="20" r="16" fill={color} opacity="0.85" />
      <circle cx="50" cy="80" r="16" fill={color} opacity="0.85" />
      <circle cx="20" cy="50" r="16" fill={color} opacity="0.85" />
      <circle cx="80" cy="50" r="16" fill={color} opacity="0.85" />
      <circle cx="29" cy="29" r="16" fill={color} opacity="0.85" />
      <circle cx="71" cy="71" r="16" fill={color} opacity="0.85" />
      <circle cx="71" cy="29" r="16" fill={color} opacity="0.85" />
      <circle cx="29" cy="71" r="16" fill={color} opacity="0.85" />
      {/* Pistil */}
      <circle cx="50" cy="50" r="18" fill="#ffd166" />
    </svg>
  );
}

export function TulipIcon({ className = "w-6 h-6", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 85C50 85 80 55 80 35C80 15 65 15 50 35C35 15 20 15 20 35C20 55 50 85 50 85Z"
        fill={color}
        opacity="0.9"
      />
      <path d="M50 35C55 25 45 25 50 35Z" fill="#ffb5a7" />
    </svg>
  );
}

export function CuteLeaf({ className = "w-6 h-6", color = "#c7ebd4" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 80C20 80 40 40 80 20C80 20 60 60 20 80Z"
        fill={color}
        opacity="0.8"
      />
      <path
        d="M20 80C35 65 60 45 80 20"
        stroke="#a0d6b4"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CuteSparkle({ className = "w-4 h-4", color = "#ffe3a8" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 0C50 35 65 50 100 50C65 50 50 65 50 100C50 65 35 50 0 50C35 50 50 35 50 0Z"
        fill={color}
      />
    </svg>
  );
}

export function CutePetal({ className = "w-4 h-4", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M50 15C65 15 80 40 80 60C80 75 65 85 50 85C35 85 20 75 20 60C20 40 35 15 50 15Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

// Hand-drawn botanical boundary line divider
export function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8 opacity-60">
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-primary/40" />
      <CuteLeaf className="w-5 h-5 text-primary/40 animate-pulse" />
      <CuteDaisy className="w-5 h-5 text-primary/40" />
      <CuteLeaf className="w-5 h-5 text-primary/40 scale-x-[-1] animate-pulse" />
      <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}

// Sparkle/Floral cluster for corners of headings or sections
export function HeaderDecoration() {
  return (
    <div className="absolute -top-6 -right-6 pointer-events-none hidden sm:block">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative"
      >
        <CuteDaisy className="w-8 h-8 text-primary/30" />
        <CuteSparkle className="w-4 h-4 text-amber-300 absolute -top-1 -right-1 animate-ping" />
        <CuteSparkle className="w-3 h-3 text-amber-200 absolute bottom-0 -left-2" />
      </motion.div>
    </div>
  );
}

interface PetalParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  type: "petal" | "leaf" | "flower" | "sparkle";
  rotationDirection: number;
}

export function FloralFloatingBackground() {
  const [particles, setParticles] = useState<PetalParticle[]>([]);

  useEffect(() => {
    // Generate constant particles seeded with random math on client side
    const colors = ["#ff5a79", "#ff7b5c", "#ffca3a", "#52b788", "#b388ff"];
    const types: ("petal" | "leaf" | "flower" | "sparkle")[] = ["petal", "leaf", "flower", "sparkle"];
    const items: PetalParticle[] = [];

    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        x: Math.random() * 100, // percentage x-axis
        y: Math.random() * 100, // percentage y-axis
        size: Math.random() * 20 + 12, // 12px to 32px
        delay: Math.random() * 10,
        duration: Math.random() * 20 + 20, // 20s to 40s
        color: colors[Math.floor(Math.random() * colors.length)],
        type: types[Math.floor(Math.random() * types.length)],
        rotationDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }
    setParticles(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => {
        let element = <CutePetal color={p.color} className="w-full h-full" />;
        if (p.type === "leaf") {
          element = <CuteLeaf color={p.color} className="w-full h-full" />;
        } else if (p.type === "flower") {
          element = <CuteDaisy color={p.color} className="w-full h-full" />;
        } else if (p.type === "sparkle") {
          element = <CuteSparkle color={p.color} className="w-full h-full" />;
        }

        return (
          <motion.div
            key={p.id}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: 0.15,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(p.id) * 30, 0],
              rotate: [0, p.rotationDirection * 360],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element}
          </motion.div>
        );
      })}
    </div>
  );
}
