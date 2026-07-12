"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MarkerHighlight, HandwrittenArrow, JaggedTornEdge } from "@/components/ui/handdrawn-decorations";
import { Instagram, Mail, Phone } from "lucide-react";

const stats = [
  { number: "5+",   label: "Years Creating" },
  { number: "120+", label: "Designs Blossomed" },
  { number: "50+",  label: "Happy Clients" },
  { number: "15+",  label: "Creative Sparks" },
];

export function AboutSection() {
  return (
    <>
      <section id="about" className="relative bg-grid-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* ── INTRO HEADING ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-display text-5xl md:text-7xl font-black text-[#0a0a0a] leading-tight">
              Hello.
              <br />
              This is my{" "}
              <MarkerHighlight>portfolio.</MarkerHighlight>
            </p>
          </motion.div>

          {/* ── MAIN CONTENT: PHOTO + BIO ── */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Yellow shadow frame */}
              <div
                className="absolute top-4 left-4 w-full h-full"
                style={{ border: "3px solid #e6ff00", zIndex: 0 }}
              />
              <div
                className="relative aspect-[3/4] w-full max-w-sm overflow-hidden"
                style={{ zIndex: 1, border: "2px solid #0a0a0a" }}
              >
                <Image
                  src="/images/profile-formal.jpg"
                  alt="Sathwika"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
              </div>

              {/* Handwritten label */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 mt-4"
                style={{ position: "relative", zIndex: 2 }}
              >
                <HandwrittenArrow direction="right" className="w-10 h-6" color="#0a0a0a" />
                <span className="font-script text-xl text-[#0a0a0a]">About me</span>
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-display text-4xl md:text-5xl font-black text-[#0a0a0a] uppercase mb-2">
                Sathwika
              </h2>
              <p className="font-display font-bold uppercase tracking-widest text-sm mb-6" style={{ color: "#e6ff00", background: "#0a0a0a", display: "inline-block", padding: "2px 10px" }}>
                Graphic Designer &amp; SMM
              </p>

              <div className="space-y-4 text-[#333333] text-base font-sans leading-relaxed mb-8">
                <p>
                  Hi, I&apos;m Sathwika — a visual designer and illustrator with a deep love for visual storytelling.
                  Over the past 5+ years, I&apos;ve had the joy of working with small business owners, boutique brands,
                  and creative agencies to build visual identities that don&apos;t just catch the eye, but warm the heart.
                </p>
                <p>
                  I specialize in creating visually engaging content that enhances brand visibility and audience engagement.
                  With a strong foundation in design skills, I consistently deliver high-quality, impactful visuals that resonate with viewers.
                </p>
              </div>

              {/* Contact pills */}
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold font-display uppercase tracking-widest text-[#0a0a0a]/50 border-l-4 border-[#e6ff00] pl-3">
                  Contact
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+91" className="flex items-center gap-2 px-4 py-2 border border-[#0a0a0a] text-sm font-semibold font-sans text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    Call Me
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-[#0a0a0a] text-sm font-semibold font-sans text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                    @sathwika
                  </a>
                  <a href="mailto:sathwika@example.com" className="flex items-center gap-2 px-4 py-2 border border-[#0a0a0a] text-sm font-semibold font-sans text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>

              {/* Handwritten arrow to CTA */}
              <div className="flex items-center gap-2">
                <HandwrittenArrow direction="right" className="w-10 h-6" color="#0a0a0a" />
                <a href="#contact" className="font-script text-xl underline underline-offset-4 text-[#0a0a0a] hover:text-[#e6ff00] transition-colors" style={{ textDecorationColor: "#e6ff00" }}>
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── STATS ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#0a0a0a]"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 text-center border-r border-[#0a0a0a] last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0 hover:bg-[#e6ff00] transition-colors group"
              >
                <div className="font-display text-4xl font-black text-[#0a0a0a] group-hover:text-[#0a0a0a] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-display font-bold uppercase tracking-wider text-[#0a0a0a]/50 group-hover:text-[#0a0a0a]/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid → Black transition */}
      <JaggedTornEdge fromBlack={false} />
    </>
  );
}
