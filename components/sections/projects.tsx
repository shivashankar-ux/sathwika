"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { NumberTag, MarkerHighlight, HandwrittenArrow } from "@/components/ui/handdrawn-decorations";

type Category = {
  num: string;
  label: string;
  subtitle: string;
  images: string[];
  description: string;
};

const categories: Category[] = [
  {
    num: "01",
    label: "Social Media",
    subtitle: "Creatives",
    description: "Eye-catching social media posts that combine professionalism with relatability, making learning feel modern and engaging.",
    images: [
      "/images/project-1.jpg",
      "/images/project-2.jpg",
      "/images/project-3.jpg",
      "/images/project-4.jpg",
      "/images/project-5.jpg",
    ],
  },
  {
    num: "02",
    label: "Instagram",
    subtitle: "Creatives",
    description: "Instagram carousel and story designs that drive engagement, tell your brand's story, and build lasting audience relationships.",
    images: [
      "/images/project-6.jpg",
      "/images/project-7.jpg",
      "/images/project-8.jpg",
      "/images/project-9.jpg",
    ],
  },
  {
    num: "03",
    label: "Brand Identity",
    subtitle: "& Strategy",
    description: "Complete branding systems including logos, color palettes, and visual guidelines that make brands memorable.",
    images: [
      "/images/project-10.jpg",
      "/images/project-1.jpg",
      "/images/project-3.jpg",
    ],
  },
];

export function ProjectsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="projects" className="bg-grid-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-6" style={{ background: "#0a0a0a" }} />
            <span className="text-xs font-bold font-display uppercase tracking-[0.2em] text-[#0a0a0a]/50">
              Portfolio
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-[#0a0a0a] leading-tight">
            What I{" "}
            <MarkerHighlight>Provide</MarkerHighlight>
          </h2>
        </motion.div>

        {/* Category sections */}
        <div className="space-y-24">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.1 }}
            >
              {/* Category label row */}
              <div className="flex items-end gap-4 mb-8 border-b-2 border-[#0a0a0a] pb-4">
                <NumberTag num={cat.num} />
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-black uppercase text-[#0a0a0a] leading-none">
                    {cat.label}
                  </h3>
                  <span className="font-script text-2xl text-[#0a0a0a]/60">{cat.subtitle}</span>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-2 text-[#0a0a0a]/40">
                  <HandwrittenArrow direction="right" className="w-10 h-6" color="#0a0a0a" />
                  <span className="font-script text-sm">#{cat.label.toLowerCase().replace(" ", "")}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-5 gap-6">
                {/* Phone Mockup */}
                <div className="md:col-span-1 flex items-start justify-center">
                  <div
                    className="relative w-32 md:w-full max-w-[130px] rounded-2xl overflow-hidden"
                    style={{ border: "2px solid #0a0a0a", aspectRatio: "9/19", background: "#fff" }}
                  >
                    {/* Fake phone header */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-[#0a0a0a] z-10 flex items-center justify-center">
                      <div className="w-8 h-1 rounded-full bg-white/20" />
                    </div>
                    <div className="absolute top-6 inset-0">
                      <Image
                        src={cat.images[0]}
                        alt={`${cat.label} mobile mockup`}
                        fill
                        sizes="130px"
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Fake nav bar at bottom */}
                    <div className="absolute bottom-0 inset-x-0 h-5 bg-[#0a0a0a]/80 z-10" />
                  </div>
                </div>

                {/* Image grid */}
                <div className="md:col-span-4 flex flex-col gap-4">
                  {/* Top row - 3 images */}
                  <div className="grid grid-cols-3 gap-3">
                    {cat.images.slice(0, 3).map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03, boxShadow: "0 0 0 3px #e6ff00" }}
                        className="relative aspect-square overflow-hidden cursor-pointer"
                        style={{ border: "1px solid rgba(0,0,0,0.12)" }}
                      >
                        <Image
                          src={img}
                          alt={`${cat.label} design ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 33vw, 180px"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Description + extra images row */}
                  <div className="grid grid-cols-3 gap-3 items-start">
                    {/* Description text */}
                    <div className="col-span-1 bg-[#0a0a0a] p-4 aspect-square flex items-center">
                      <p className="text-white/75 text-xs font-sans leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    {/* More images */}
                    {cat.images.slice(3, 5).map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03, boxShadow: "0 0 0 3px #e6ff00" }}
                        className="relative aspect-square overflow-hidden cursor-pointer"
                        style={{ border: "1px solid rgba(0,0,0,0.12)" }}
                      >
                        <Image
                          src={img}
                          alt={`${cat.label} extra ${idx}`}
                          fill
                          sizes="(max-width: 768px) 33vw, 180px"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </motion.div>
                    ))}
                    {/* Fill empty slots */}
                    {cat.images.length < 5 && Array.from({ length: 5 - cat.images.length - (cat.images.length < 3 ? 0 : 0) }).map((_, i) => (
                      <div
                        key={`empty-${i}`}
                        className="aspect-square bg-[#f0f0ea] border border-dashed border-[#0a0a0a]/20"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
