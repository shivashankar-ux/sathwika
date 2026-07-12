"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Script from "next/script";
import Image from "next/image";
import { JaggedTornEdge, GridFloatingAccents, HandwrittenArrow } from "@/components/ui/handdrawn-decorations";

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
        backgroundColor: 0x0a0a0a,
        color1: 0xe6ff00,
        color2: 0xffffff,
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
    // If scripts are already loaded (e.g., hot reload), try init immediately
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
      {/* ── CDN Scripts (loaded once) ── */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Vanta needs THREE first; load vanta after three is ready
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        strategy="afterInteractive"
        onLoad={initVanta}
      />

      <section
        ref={vantaRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        {/* Vanta canvas sits here via the ref — no extra overlay needed */}

        {/* Thin yellow vertical accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block z-10"
          style={{ background: "#e6ff00" }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: TEXT ── */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-[2px] w-8" style={{ background: "#e6ff00" }} />
                <span
                  className="text-xs font-bold font-display uppercase tracking-[0.2em]"
                  style={{ color: "#e6ff00" }}
                >
                  Graphic Designer &amp; Social Media
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h1
                  className="font-display font-black uppercase text-white leading-none"
                  style={{ fontSize: "clamp(4rem, 10vw, 8rem)", lineHeight: 0.9 }}
                >
                  Sath
                  <br />
                  <span
                    className="relative inline-block"
                    style={{ WebkitTextStroke: "2px #e6ff00", color: "transparent" }}
                  >
                    wika
                  </span>
                </h1>
              </motion.div>

              {/* Handwritten name overlay */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 mb-8 flex items-center gap-3"
              >
                <div className="h-0.5 w-10" style={{ background: "#e6ff00" }} />
                <span className="font-script text-3xl" style={{ color: "#e6ff00" }}>
                  portfolio
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-white/60 text-base font-sans max-w-md leading-relaxed mb-10"
              >
                Creating visual magic through stunning brand identities, social media
                designs, and digital storytelling that helps brands connect and grow.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-wrap gap-4 items-center"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 font-bold font-display uppercase tracking-wider text-sm transition-all hover:scale-105 active:scale-95"
                  style={{ background: "#e6ff00", color: "#0a0a0a" }}
                >
                  Explore My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 font-bold font-display uppercase tracking-wider text-sm border-2 text-white transition-all hover:border-[#e6ff00] hover:text-[#e6ff00]"
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
                className="mt-14 flex items-center gap-3"
              >
                <HandwrittenArrow direction="down" className="w-8 h-10" color="#e6ff00" />
                <span className="text-xs font-display uppercase tracking-widest text-white/40">
                  Scroll to explore
                </span>
              </motion.div>
            </div>

            {/* ── RIGHT: PHOTO (transparent cutout, floating) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end items-end"
            >
              {/* Subtle yellow glow behind her */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: "#e6ff00" }}
              />

              {/* Transparent cutout photo — no box, no border */}
              <div className="relative w-full max-w-[360px] lg:max-w-[420px]">
                <Image
                  src="/images/profile-nobg.png"
                  alt="Sathwika — Graphic Designer"
                  width={1080}
                  height={1350}
                  priority
                  sizes="(max-width: 768px) 80vw, 420px"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 20px 60px rgba(230,255,0,0.15))" }}
                />
              </div>

              {/* Floating yellow label card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 right-0 lg:-right-2 p-4"
                style={{ background: "#e6ff00", minWidth: "160px" }}
              >
                <p className="text-[10px] font-bold font-display uppercase tracking-widest text-[#0a0a0a]/60">
                  Graphic Designer
                </p>
                <p className="text-sm font-black font-display uppercase text-[#0a0a0a] leading-tight">
                  &amp; Visual Creator
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Torn paper transition to grid section */}
      <JaggedTornEdge fromBlack={true} />
    </>
  );
}
