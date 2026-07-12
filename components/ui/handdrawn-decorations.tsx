"use client";

import { motion } from "framer-motion";

// ── MARKER HIGHLIGHT ──────────────────────────────────────────────────────────
export function MarkerHighlight({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        background: "linear-gradient(120deg, #e6ff00 0%, #d4eb00 100%)",
        padding: "0 6px 2px",
        color: "#0a0a0a",
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  );
}

// ── HANDWRITTEN ARROW (pointing left, right, or down) ────────────────────────
export function HandwrittenArrow({
  direction = "right",
  className = "w-16 h-10",
  color = "#0a0a0a",
}: {
  direction?: "right" | "left" | "down";
  className?: string;
  color?: string;
}) {
  const paths: Record<string, string> = {
    right: "M 5 20 C 20 10, 50 8, 70 20 M 60 12 L 72 22 L 58 28",
    left:  "M 70 20 C 50 10, 20 8, 5 20 M 15 12 L 3 22 L 16 28",
    down:  "M 20 5 C 10 20, 8 50, 20 70 M 12 60 L 22 72 L 28 58",
  };
  return (
    <svg viewBox="0 0 80 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={paths[direction]} stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── HANDWRITTEN STAR ──────────────────────────────────────────────────────────
export function HandwrittenStar({ className = "w-8 h-8", color = "#e6ff00" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 5 L35 25 L55 25 L40 38 L46 58 L30 46 L14 58 L20 38 L5 25 L25 25 Z"
        fill={color}
        stroke="#0a0a0a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── JAGGED TORN PAPER EDGE ────────────────────────────────────────────────────
export function JaggedTornEdge({ fromBlack = true }: { fromBlack?: boolean }) {
  return (
    <div
      className="w-full overflow-hidden pointer-events-none"
      style={{ height: "48px", marginBottom: fromBlack ? "0" : "-1px" }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 L0 30 L40 18 L80 36 L120 14 L160 40 L200 20 L240 42 L280 16 L320 38 L360 12 L400 44 L440 22 L480 38 L520 10 L560 34 L600 18 L640 42 L680 20 L720 36 L760 14 L800 40 L840 22 L880 44 L920 16 L960 38 L1000 12 L1040 42 L1080 22 L1120 40 L1160 18 L1200 44 L1240 20 L1280 36 L1320 14 L1360 42 L1400 22 L1440 38 L1440 0 Z"
          fill={fromBlack ? "#0a0a0a" : "#f5f5f0"}
        />
      </svg>
    </div>
  );
}

// ── FLOATING BACKGROUND DOTS (replaces floral background) ────────────────────
export function GridFloatingAccents() {
  const accents = [
    { x: "8%",  y: "15%",  size: 6, delay: 0 },
    { x: "92%", y: "10%",  size: 8, delay: 1.2 },
    { x: "20%", y: "80%",  size: 5, delay: 2 },
    { x: "75%", y: "70%",  size: 7, delay: 0.6 },
    { x: "50%", y: "5%",   size: 4, delay: 3 },
    { x: "35%", y: "90%",  size: 6, delay: 1.8 },
    { x: "85%", y: "45%",  size: 5, delay: 0.3 },
    { x: "12%", y: "55%",  size: 8, delay: 2.5 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {accents.map((a, i) => (
        <motion.div
          key={i}
          style={{ position: "absolute", left: a.x, top: a.y }}
          animate={{ y: [0, -14, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4 + a.delay, delay: a.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            style={{ width: a.size * 2, height: a.size * 2, borderRadius: "50%", background: "#e6ff00" }}
          />
        </motion.div>
      ))}
    </div>
  );
}

// ── NUMBER TAG (e.g. "01") ────────────────────────────────────────────────────
export function NumberTag({ num }: { num: string }) {
  return (
    <span
      className="font-display text-5xl font-black"
      style={{ color: "#e6ff00", lineHeight: 1 }}
    >
      {num}
    </span>
  );
}
