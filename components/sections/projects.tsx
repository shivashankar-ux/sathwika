"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HandwrittenArrow } from "@/components/ui/handdrawn-decorations";

const carouselImages = [
  "/images/cariusel1.jpg",
  "/images/cariusel2.jpg",
  "/images/cariusel3.jpg",
  "/images/cariusel4.jpg",
  "/images/cariusel5.jpg",
  "/images/cariusel6.jpg",
  "/images/cariusel7.jpg",
];

const staticImages = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
];

export function ProjectsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(12,10,20,0.96)" }}
          >
            <motion.div
              initial={{ scale: 0.88 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.88 }}
              className="relative max-w-5xl w-full flex justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Project preview"
                className="max-w-full h-auto object-contain max-h-[90vh] rounded-xl shadow-2xl"
                style={{ border: "2px solid rgba(192,132,252,0.4)" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full font-bold text-[#0c0a14] text-lg md:text-xl hover:scale-110 transition-transform z-10"
                style={{ background: "#c084fc", boxShadow: "0 0 20px rgba(192,132,252,0.5)" }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "#18132a" }}>
        
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#c084fc]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

          {/* ── Section heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-[#c084fc]" />
              <span className="text-sm font-bold font-display uppercase tracking-[0.2em] text-[#c084fc]/80">
                Selected Work
              </span>
              <div className="h-[2px] w-6 bg-[#c084fc]" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black uppercase text-white leading-tight mb-6">
              Client{" "}
              <span
                className="px-4 py-1 inline-block transform -rotate-2 shadow-lg"
                style={{ background: "#c084fc", color: "#0c0a14" }}
              >
                Masterpieces
              </span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-sans">
              High-converting designs that elevate brand identity and drive engagement.
            </p>
          </motion.div>

          {/* ── Seamless Carousels (Canva Style) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <span className="font-display text-5xl font-black text-[#c084fc]">01</span>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-white leading-none">
                    Seamless Carousels
                  </h3>
                  <span className="font-script text-xl" style={{ color: "#c084fc" }}>
                    Brand Storytelling
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <HandwrittenArrow direction="right" className="w-8 h-5" color="#c084fc" />
                <span className="text-white/40 text-sm uppercase tracking-widest font-bold hidden sm:inline-block">Swipe / Scroll</span>
              </div>
            </div>

            {/* Continuous strip container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#0c0a14]/50 backdrop-blur-sm p-2 md:p-6 lg:p-8">
              <div 
                className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-none items-stretch cursor-grab active:cursor-grabbing rounded-xl border border-[#c084fc]/30"
                style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
              >
                {carouselImages.map((src, idx) => (
                  <motion.div
                    key={idx}
                    className="relative flex-shrink-0 snap-start border-r border-white/5 last:border-r-0 group bg-[#110e1a]"
                    style={{
                      width: "clamp(260px, 40vw, 400px)",
                      aspectRatio: "1/1",
                    }}
                    whileHover={{ opacity: 0.95 }}
                    onClick={() => setLightbox(src)}
                  >
                    <Image
                      src={src}
                      alt={`Carousel slide ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0c0a14]/0 group-hover:bg-[#0c0a14]/40 transition-colors duration-300 flex items-center justify-center">
                       <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold font-display uppercase tracking-widest px-5 py-2.5 rounded-full bg-[#c084fc] text-[#0c0a14] transform scale-90 group-hover:scale-100 shadow-[0_0_20px_rgba(192,132,252,0.4)]">
                         Expand
                       </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 md:mt-6 flex justify-between items-center px-2">
                <p className="text-white/40 text-xs md:text-sm">Experience the full continuous design flow.</p>
                <div className="hidden sm:flex gap-1.5">
                   {carouselImages.map((_, i) => (
                     <div key={i} className="w-2 h-2 rounded-full bg-[#c084fc]/20" />
                   ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Static Masterpieces ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="font-display text-5xl font-black text-[#c084fc]">02</span>
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-white leading-none">
                  Static Creatives
                </h3>
                <span className="font-script text-xl" style={{ color: "#c084fc" }}>
                  High Impact Visuals
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {staticImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="relative group rounded-2xl md:rounded-3xl overflow-hidden bg-[#0c0a14] border border-white/5 shadow-xl cursor-pointer"
                  style={{ aspectRatio: "4/5" }}
                  onClick={() => setLightbox(src)}
                >
                  <Image
                    src={src}
                    alt={`Static project ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Premium overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-[#0c0a14]/20 backdrop-blur-[2px]">
                    <span className="text-xs font-bold font-display uppercase tracking-widest px-4 py-2 rounded-full bg-[#c084fc] text-[#0c0a14] mb-3 shadow-[0_0_15px_rgba(192,132,252,0.5)]">
                      View Project
                    </span>
                  </div>
                  
                  {/* Subtle border glow on hover */}
                  <div className="absolute inset-0 border-2 border-[#c084fc]/0 group-hover:border-[#c084fc]/50 transition-colors duration-300 rounded-2xl md:rounded-3xl pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Conversion CTA ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-24 md:mt-32 relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#c084fc] to-[#ff7eb3] opacity-10" />
            <div className="absolute inset-0 bg-[#0c0a14]/60 backdrop-blur-xl" />
            <div className="relative p-10 md:p-16 text-center border border-[#c084fc]/30 rounded-3xl">
              <h3 className="font-display text-3xl md:text-5xl font-black uppercase text-white mb-4">
                Ready to stand out?
              </h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 font-sans">
                Let&apos;s collaborate to build stunning, converting designs for your brand. Send me a message and let&apos;s start designing your success.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold font-display uppercase tracking-[0.15em] text-sm md:text-base transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(192,132,252,0.3)] hover:shadow-[0_0_40px_rgba(192,132,252,0.5)]"
                style={{ background: "#c084fc", color: "#0c0a14" }}
              >
                Send a Message <span className="text-xl">👋</span>
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
