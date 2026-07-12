"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NumberTag, MarkerHighlight, HandwrittenArrow } from "@/components/ui/handdrawn-decorations";

type Category = {
  num: string;
  label: string;
  subtitle: string;
  images: { src: string; aspect: "square" | "portrait" | "landscape" }[];
  description: string;
};

// Map all 10 images to their actual visual types
const categories: Category[] = [
  {
    num: "01",
    label: "Social Media",
    subtitle: "Creatives",
    description:
      "Eye-catching social media posts that combine professionalism with relatability — connecting brands to audiences through scroll-stopping visuals.",
    images: [
      { src: "/images/project-1.jpg",  aspect: "landscape" },
      { src: "/images/project-2.jpg",  aspect: "square"    },
      { src: "/images/project-3.jpg",  aspect: "landscape" },
      { src: "/images/project-4.jpg",  aspect: "landscape" },
      { src: "/images/project-5.jpg",  aspect: "landscape" },
      { src: "/images/project-6.jpg",  aspect: "landscape" },
    ],
  },
  {
    num: "02",
    label: "Instagram",
    subtitle: "Carousels",
    description:
      "Instagram carousel post designs that drive engagement, tell your brand's story, and build lasting audience relationships through vivid storytelling.",
    images: [
      { src: "/images/project-7.jpg",  aspect: "square"    },
      { src: "/images/project-8.jpg",  aspect: "landscape" },
      { src: "/images/project-9.jpg",  aspect: "landscape" },
      { src: "/images/project-10.jpg", aspect: "landscape" },
    ],
  },
  {
    num: "03",
    label: "Brand Identity",
    subtitle: "& Strategy",
    description:
      "Strategic brand planning campaigns emphasising bold design, typography, and messaging that build recognition and lasting impact.",
    images: [
      { src: "/images/project-2.jpg",  aspect: "square"    },
      { src: "/images/project-5.jpg",  aspect: "landscape" },
      { src: "/images/project-6.jpg",  aspect: "landscape" },
    ],
  },
];

// Aspect-ratio map
const aspectMap = {
  square:    "aspect-square",
  portrait:  "aspect-[3/4]",
  landscape: "aspect-[4/3]",
};

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
            style={{ background: "rgba(0,0,0,0.92)" }}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-2xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Project preview"
                className="w-full h-auto object-contain max-h-[85vh]"
                style={{ border: "2px solid #e6ff00" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center font-bold text-[#0a0a0a] text-sm"
                style={{ background: "#e6ff00" }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="projects"
        className="py-20 md:py-28"
        style={{ background: "#111111" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── SECTION HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-[#e6ff00]" />
              <span className="text-xs font-bold font-display uppercase tracking-[0.2em] text-[#e6ff00]/60">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
              What I{" "}
              <MarkerHighlight>Provide</MarkerHighlight>
            </h2>
          </motion.div>

          {/* ── CATEGORY SECTIONS ── */}
          <div className="space-y-20 md:space-y-28">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
              >
                {/* ── Category label ── */}
                <div className="flex flex-wrap items-end gap-3 mb-6 border-b border-white/10 pb-4">
                  <NumberTag num={cat.num} />
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white leading-none">
                      {cat.label}
                    </h3>
                    <span className="font-script text-xl text-[#e6ff00]/70">
                      {cat.subtitle}
                    </span>
                  </div>
                  <div className="ml-auto hidden sm:flex items-center gap-2">
                    <HandwrittenArrow direction="right" className="w-8 h-5" color="#e6ff00" />
                    <span className="font-script text-sm text-[#e6ff00]/50">
                      #{cat.label.toLowerCase().replace(" ", "")}
                    </span>
                  </div>
                </div>

                {/* ── Image masonry grid ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                  {cat.images.map((img, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setLightbox(img.src)}
                      className={`relative overflow-hidden group ${aspectMap[img.aspect]} w-full`}
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <Image
                        src={img.src}
                        alt={`${cat.label} design ${idx + 1}`}
                        fill
                        loading={catIdx === 0 && idx < 3 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        style={{ background: "rgba(0,0,0,0.55)" }}
                      >
                        <span
                          className="text-xs font-bold font-display uppercase tracking-widest px-3 py-1.5"
                          style={{ background: "#e6ff00", color: "#0a0a0a" }}
                        >
                          View
                        </span>
                      </div>
                    </motion.button>
                  ))}

                  {/* Description block — fills last slot */}
                  <div
                    className="relative aspect-square flex flex-col justify-between p-4 sm:p-5"
                    style={{ background: "#e6ff00" }}
                  >
                    <span className="font-display text-xs font-black uppercase tracking-widest text-[#0a0a0a]/50">
                      {cat.num} —
                    </span>
                    <p className="text-[#0a0a0a] text-xs sm:text-sm font-sans leading-relaxed font-medium">
                      {cat.description}
                    </p>
                    <HandwrittenArrow direction="right" className="w-8 h-5" color="#0a0a0a" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-white/40 text-sm font-sans mb-6">
              Want to see more? Let&apos;s talk about your project.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 font-bold font-display uppercase tracking-wider text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background: "#e6ff00", color: "#0a0a0a" }}
            >
              Start a Project →
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
