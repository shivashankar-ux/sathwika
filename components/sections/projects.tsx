"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HandwrittenArrow } from "@/components/ui/handdrawn-decorations";

type Project = {
  src: string;
  aspect: "square" | "landscape" | "portrait";
};

type Category = {
  num: string;
  label: string;
  scriptLabel: string;    // handwritten script overlay
  clientLabel: string;    // lavender highlighted niche label
  hashTag: string;
  description: string;
  projects: Project[];
  phone: string;          // image shown inside phone mockup
};

const categories: Category[] = [
  {
    num: "01",
    label: "Social Media",
    scriptLabel: "Creatives",
    clientLabel: "Educational Institutes",
    hashTag: "#socialmediadesigns",
    description:
      "Your social media creative posts beautifully combine professionalism with relatability — making learning feel modern and engaging. Each design delivers key messages through bold visuals, smart typography, and culturally relevant content perfect for connecting with students and parents alike.",
    phone: "/images/project-3.jpg",
    projects: [
      { src: "/images/project-1.jpg",  aspect: "landscape" },
      { src: "/images/project-2.jpg",  aspect: "landscape" },
      { src: "/images/project-3.jpg",  aspect: "landscape" },
      { src: "/images/project-4.jpg",  aspect: "landscape" },
      { src: "/images/project-5.jpg",  aspect: "landscape" },
    ],
  },
  {
    num: "02",
    label: "Instagram",
    scriptLabel: "Carousels",
    clientLabel: "Brand Storytelling",
    hashTag: "#instagramcreatives",
    description:
      "Instagram carousel post designs that drive engagement and tell your brand's story across multiple slides. Each carousel is crafted to keep followers swiping, learning, and sharing — building lasting audience relationships through vivid, consistent visual storytelling.",
    phone: "/images/project-7.jpg",
    projects: [
      { src: "/images/project-6.jpg",  aspect: "landscape" },
      { src: "/images/project-7.jpg",  aspect: "landscape" },
      { src: "/images/project-8.jpg",  aspect: "landscape" },
      { src: "/images/project-9.jpg",  aspect: "landscape" },
    ],
  },
  {
    num: "03",
    label: "Social Media",
    scriptLabel: "Graphics",
    clientLabel: "Creative for Gym & Fitness",
    hashTag: "#brandstrategy",
    description:
      "Strategic brand planning visual campaigns emphasising bold design, impactful typography, and messaging that build recognition. These bold and energetic graphics help fitness brands stand out in a competitive space and motivate their audience.",
    phone: "/images/project-10.jpg",
    projects: [
      { src: "/images/project-10.jpg", aspect: "landscape" },
      { src: "/images/project-2.jpg",  aspect: "landscape" },
      { src: "/images/project-5.jpg",  aspect: "landscape" },
    ],
  },
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
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Project preview"
                className="w-full h-auto object-contain max-h-[88vh]"
                style={{ border: "2px solid #c084fc" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center font-bold text-[#0c0a14] text-sm"
                style={{ background: "#c084fc" }}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="projects" className="py-20 md:py-28" style={{ background: "#18132a" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* ── Section heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-6 bg-[#c084fc]" />
              <span className="text-xs font-bold font-display uppercase tracking-[0.2em] text-[#c084fc]/60">
                Portfolio
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
              What I{" "}
              <span
                className="px-2"
                style={{ background: "#c084fc", color: "#0c0a14" }}
              >
                Provide
              </span>
            </h2>
          </motion.div>

          {/* ── Category blocks ── */}
          <div className="space-y-28">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65 }}
              >
                {/* ── Row 1: Number + Section title ── */}
                <div className="flex flex-wrap items-start gap-x-4 gap-y-1 mb-6 pb-4 border-b border-white/10">
                  {/* Number */}
                  <span
                    className="font-display text-5xl font-black leading-none"
                    style={{ color: "#c084fc" }}
                  >
                    {cat.num}
                  </span>

                  {/* Title + script */}
                  <div className="flex flex-col">
                    <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white leading-none">
                      {cat.label}
                    </h3>
                    <span className="font-script text-2xl" style={{ color: "#c084fc", marginTop: "-4px" }}>
                      {cat.scriptLabel}
                    </span>
                  </div>

                  {/* Client lavender label */}
                  <div className="ml-0 sm:ml-auto flex items-center self-center mt-2 sm:mt-0">
                    <h4
                      className="font-display text-lg sm:text-xl font-black uppercase px-4 py-1.5"
                      style={{ background: "#c084fc", color: "#0c0a14" }}
                    >
                      {cat.clientLabel}
                    </h4>
                  </div>
                </div>

                {/* ── Row 2: Phone mockup + images row ── */}
                <div className="flex flex-col md:flex-row gap-5 items-start mb-6">

                  {/* Phone mockup — left */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div
                      className="relative w-[110px] sm:w-[130px] rounded-[18px] overflow-hidden shadow-xl"
                      style={{
                        border: "3px solid #2a1f42",
                        aspectRatio: "9/19",
                        background: "#000",
                      }}
                    >
                      {/* Status bar */}
                      <div className="absolute top-0 inset-x-0 h-5 bg-[#0c0a14] z-10 flex items-center justify-center gap-1">
                        <div className="w-5 h-0.5 rounded-full bg-white/20" />
                      </div>
                      {/* Screen content */}
                      <div className="absolute top-5 inset-0 overflow-hidden">
                        {/* Fake Instagram header */}
                        <div className="flex items-center gap-1 px-1.5 py-1 bg-white border-b border-gray-100">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-pink-500 to-orange-400" />
                          <span className="text-[5px] font-bold text-gray-700">Instagram</span>
                        </div>
                        {/* Image */}
                        <div className="relative w-full" style={{ height: "calc(100% - 20px)" }}>
                          <Image
                            src={cat.phone}
                            alt={`${cat.label} phone mockup`}
                            fill
                            sizes="130px"
                            loading="lazy"
                            className="object-cover object-top"
                          />
                        </div>
                      </div>
                      {/* Home bar */}
                      <div className="absolute bottom-0 inset-x-0 h-4 bg-[#0c0a14]/90 z-10 flex items-center justify-center">
                        <div className="w-8 h-0.5 rounded-full bg-white/30" />
                      </div>
                    </div>
                    {/* Label under phone */}
                    <p className="text-[10px] font-display font-bold uppercase tracking-wider text-[#c084fc]/50 mt-2 text-center">
                      {cat.label}<br />Designs
                    </p>
                  </div>

                  {/* Images strip — right, horizontal scroll on mobile */}
                  <div className="flex-1 w-full">
                    <div className="flex gap-2.5 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none"
                      style={{ scrollbarWidth: "none" }}
                    >
                      {cat.projects.map((proj, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.03, boxShadow: "0 0 0 3px #c084fc" }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setLightbox(proj.src)}
                          className="relative flex-shrink-0 overflow-hidden snap-start group"
                          style={{
                            width: "clamp(140px, 22vw, 200px)",
                            aspectRatio: "4/3",
                            border: "1px solid rgba(192,132,252,0.15)",
                          }}
                        >
                          <Image
                            src={proj.src}
                            alt={`${cat.label} project ${idx + 1}`}
                            fill
                            loading={catIdx === 0 && idx < 2 ? "eager" : "lazy"}
                            sizes="200px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Hover overlay */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                            style={{ background: "rgba(12,10,20,0.6)" }}
                          >
                            <span
                              className="text-[10px] font-bold font-display uppercase tracking-widest px-2.5 py-1"
                              style={{ background: "#c084fc", color: "#0c0a14" }}
                            >
                              View
                            </span>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Row 3: Description + handwritten hashtag ── */}
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <p className="text-white/50 text-sm font-sans leading-relaxed max-w-2xl">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <HandwrittenArrow direction="left" className="w-8 h-5" color="#c084fc" />
                    <span className="font-script text-base" style={{ color: "#c084fc" }}>
                      {cat.hashTag}
                    </span>
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
            className="mt-24 text-center"
          >
            <p className="text-white/30 text-sm font-sans mb-6">
              Want to see more? Let&apos;s talk about your project.
            </p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 font-bold font-display uppercase tracking-wider text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background: "#c084fc", color: "#0c0a14" }}
            >
              Start a Project →
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
