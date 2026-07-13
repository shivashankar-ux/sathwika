"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Free Lottie character animations (designer / creative person doing action)
// These are publicly hosted on LottieFiles CDN
const ANIMATION_URLS = [
  "https://lottie.host/4db68bbd-31f6-4cd8-84eb-189de081159a/KSguMCrFxJ.json",
  "https://assets2.lottiefiles.com/packages/lf20_jtbfg2nb.json",
  "https://assets9.lottiefiles.com/packages/lf20_qwL27m.json",
];

export function AnimatedCharacter({ className = "" }: { className?: string }) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [urlIndex, setUrlIndex] = useState(0);

  useEffect(() => {
    const tryFetch = async (idx: number) => {
      if (idx >= ANIMATION_URLS.length) return;
      try {
        const res = await fetch(ANIMATION_URLS[idx]);
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        setAnimationData(data);
      } catch {
        // Try next URL
        setUrlIndex(idx + 1);
        tryFetch(idx + 1);
      }
    };
    tryFetch(urlIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <FallbackCharacter />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Lavender glow beneath character */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "#c084fc" }}
      />

      {/* Lottie character */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <Lottie
          animationData={animationData}
          loop
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}

// ── Pure CSS/SVG fallback character (if CDN fails) ───────────────────────────
function FallbackCharacter() {
  return (
    <div className="relative w-64 h-80 flex items-end justify-center">
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl opacity-30"
        style={{ background: "#c084fc" }}
      />

      <motion.svg
        viewBox="0 0 200 280"
        className="w-56 h-72 relative z-10"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Shadow */}
        <ellipse cx="100" cy="268" rx="38" ry="7" fill="#c084fc" opacity="0.2" />

        {/* Body */}
        <motion.g
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Legs */}
          <motion.line
            x1="90" y1="190" x2="78" y2="240"
            stroke="#a855f7" strokeWidth="14" strokeLinecap="round"
            animate={{ rotate: [-6, 6, -6] }}
            style={{ transformOrigin: "90px 190px" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="110" y1="190" x2="122" y2="240"
            stroke="#7c3aed" strokeWidth="14" strokeLinecap="round"
            animate={{ rotate: [6, -6, 6] }}
            style={{ transformOrigin: "110px 190px" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Shoes */}
          <ellipse cx="75" cy="241" rx="12" ry="6" fill="#4c1d95" />
          <ellipse cx="125" cy="241" rx="12" ry="6" fill="#4c1d95" />

          {/* Torso */}
          <rect x="73" y="120" width="54" height="75" rx="14" fill="#8b5cf6" />

          {/* Collar */}
          <path d="M93 120 L100 135 L107 120" fill="#e9d5ff" />

          {/* Left arm — waving */}
          <motion.g
            animate={{ rotate: [0, -45, 0, -45, 0] }}
            style={{ transformOrigin: "73px 130px" }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            <line x1="73" y1="130" x2="42" y2="115" stroke="#a78bfa" strokeWidth="13" strokeLinecap="round" />
            {/* Hand */}
            <circle cx="38" cy="112" r="9" fill="#fde8d8" />
            {/* Waving fingers hint */}
            <motion.line x1="38" y1="104" x2="33" y2="97" stroke="#fde8d8" strokeWidth="4" strokeLinecap="round"
              animate={{ rotate: [0, 20, 0] }} style={{ transformOrigin: "38px 104px" }}
              transition={{ duration: 0.4, repeat: Infinity }}
            />
            <motion.line x1="41" y1="103" x2="38" y2="95" stroke="#fde8d8" strokeWidth="4" strokeLinecap="round"
              animate={{ rotate: [0, -20, 0] }} style={{ transformOrigin: "41px 103px" }}
              transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
            />
          </motion.g>

          {/* Right arm — holding design tablet */}
          <motion.g
            animate={{ rotate: [0, 8, 0] }}
            style={{ transformOrigin: "127px 130px" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <line x1="127" y1="130" x2="155" y2="150" stroke="#a78bfa" strokeWidth="13" strokeLinecap="round" />
            {/* Tablet */}
            <rect x="148" y="148" width="28" height="22" rx="3" fill="#1e1930" stroke="#c084fc" strokeWidth="2" />
            <rect x="151" y="151" width="22" height="13" rx="1" fill="#c084fc" opacity="0.3" />
            <line x1="153" y1="155" x2="171" y2="155" stroke="#c084fc" strokeWidth="1.5" opacity="0.7" />
            <line x1="153" y1="158" x2="168" y2="158" stroke="#c084fc" strokeWidth="1.5" opacity="0.5" />
          </motion.g>

          {/* Neck */}
          <rect x="92" y="108" width="16" height="16" rx="4" fill="#fde8d8" />

          {/* Head */}
          <circle cx="100" cy="88" r="30" fill="#fde8d8" />

          {/* Hair */}
          <path d="M72 78 Q75 55 100 58 Q125 55 128 78 Q120 65 100 66 Q80 65 72 78Z" fill="#4c1d95" />

          {/* Eyes */}
          <motion.ellipse
            cx="90" cy="88" rx="4" ry="4.5" fill="#1e1930"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
          />
          <motion.ellipse
            cx="110" cy="88" rx="4" ry="4.5" fill="#1e1930"
            animate={{ scaleY: [1, 0.1, 1] }}
            transition={{ duration: 3.5, repeat: Infinity, times: [0, 0.5, 1] }}
          />
          {/* Eye shine */}
          <circle cx="92" cy="86" r="1.5" fill="white" />
          <circle cx="112" cy="86" r="1.5" fill="white" />

          {/* Smile */}
          <motion.path
            d="M91 97 Q100 104 109 97"
            stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" fill="none"
            animate={{ d: ["M91 97 Q100 104 109 97", "M91 98 Q100 107 109 98", "M91 97 Q100 104 109 97"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Headphones */}
          <path d="M70 85 Q70 58 100 58 Q130 58 130 85" stroke="#4c1d95" strokeWidth="5" fill="none" strokeLinecap="round" />
          <rect x="65" y="82" width="10" height="14" rx="4" fill="#7c3aed" />
          <rect x="125" y="82" width="10" height="14" rx="4" fill="#7c3aed" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
