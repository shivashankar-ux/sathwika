"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import { JaggedTornEdge, HandwrittenArrow } from "@/components/ui/handdrawn-decorations";

declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: Record<string, unknown>) => { destroy: () => void };
    };
    THREE?: unknown;
  }
}

export function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  const initVanta = () => {
    if (window.VANTA && vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = window.VANTA.BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0c0a14,
        color1: 0xc084fc,
        color2: 0xe9d5ff,
        colorMode: "lerp",
        birdSize: 1.2,
        wingSpan: 25,
        speedLimit: 4,
        separation: 40,
        alignment: 70,
        cohesion: 70,
        quantity: 3,
      });
    }
  };

  useEffect(() => {
    if (window.VANTA) initVanta();
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="afterInteractive"
        onLoad={initVanta}
      />

      <section
        ref={vantaRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0c0a14" }}
      >
        {/* Thin lavender vertical accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block z-10"
          style={{ background: "#c084fc" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div className="h-[2px] w-8" style={{ background: "#c084fc" }} />
              <span
                className="text-xs font-bold font-display uppercase tracking-[0.2em]"
                style={{ color: "#c084fc" }}
              >
                Graphic Designer &amp; Social Media
              </span>
              <div className="h-[2px] w-8" style={{ background: "#c084fc" }} />
            </motion.div>

            {/* SATHWIKA — single giant line */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                className="font-display font-black uppercase text-white leading-none whitespace-nowrap"
                style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)", lineHeight: 0.9 }}
              >
                Sath
                <span
                  style={{ WebkitTextStroke: "3px #c084fc", color: "transparent" }}
                >
                  wika
                </span>
              </h1>
            </motion.div>

            {/* Script label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 mb-8 flex items-center justify-center gap-3"
            >
              <div className="h-0.5 w-10" style={{ background: "#c084fc" }} />
              <span className="font-script text-3xl" style={{ color: "#c084fc" }}>
                portfolio
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/60 text-base font-sans max-w-lg leading-relaxed mb-10"
            >
              Creating visual magic through stunning brand identities, social media
              designs, and digital storytelling that helps brands connect and grow.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4 items-center justify-center"
            >
              <a
                href="#projects"
                className="px-8 py-3 font-bold font-display uppercase tracking-wider text-sm transition-all hover:scale-105 active:scale-95"
                style={{ background: "#c084fc", color: "#0c0a14" }}
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 font-bold font-display uppercase tracking-wider text-sm border-2 text-white transition-all hover:border-[#c084fc] hover:text-[#c084fc]"
                style={{ borderColor: "rgba(255,255,255,0.25)" }}
              >
                Say Hello
              </a>
            </motion.div>

            {/* Scroll label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-14 flex items-center justify-center gap-3"
            >
              <HandwrittenArrow direction="down" className="w-8 h-10" color="#c084fc" />
              <span className="text-xs font-display uppercase tracking-widest text-white/40">
                Scroll to explore
              </span>
            </motion.div>

          </div>
        </div>
      </section>

      <JaggedTornEdge fromBlack={true} />
    </>
  );
}
