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
      <section id="about" className="relative py-24 md:py-32" style={{ background: "#120f1e" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* ── INTRO HEADING ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="font-display text-5xl md:text-7xl font-black text-white leading-tight">
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
              className="relative flex flex-col items-center"
            >
              {/* Subtle lavender glow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: "#c084fc" }}
              />

              {/* Transparent cutout photo */}
              <div className="relative w-full max-w-[360px]">
                <Image
                  src="/images/profile-nobg.png"
                  alt="Sathwika — Graphic Designer"
                  width={1080}
                  height={1350}
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="w-full h-auto object-contain"
                  style={{ filter: "drop-shadow(0 20px 60px rgba(192,132,252,0.25))" }}
                />
              </div>

              {/* Floating lavender label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-4 px-5 py-3"
                style={{ background: "#c084fc" }}
              >
                <p className="text-[10px] font-bold font-display uppercase tracking-widest text-[#0c0a14]/70">Graphic Designer</p>
                <p className="text-sm font-black font-display uppercase text-[#0c0a14] leading-tight">&amp; Visual Creator</p>
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
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase mb-2">
                Sathwika
              </h2>
              <p className="font-display font-bold uppercase tracking-widest text-sm mb-6" style={{ color: "#0c0a14", background: "#c084fc", display: "inline-block", padding: "2px 10px" }}>
                Graphic Designer &amp; SMM
              </p>

              <div className="space-y-4 text-white/70 text-base font-sans leading-relaxed mb-8">
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
                <p className="text-xs font-bold font-display uppercase tracking-widest text-white/40 border-l-4 border-[#c084fc] pl-3">
                  Contact
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:+91" className="flex items-center gap-2 px-4 py-2 border border-white/20 text-sm font-semibold font-sans text-white/80 hover:bg-[#c084fc] hover:text-[#0c0a14] hover:border-[#c084fc] transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                    Call Me
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-white/20 text-sm font-semibold font-sans text-white/80 hover:bg-[#c084fc] hover:text-[#0c0a14] hover:border-[#c084fc] transition-colors">
                    <Instagram className="w-3.5 h-3.5" />
                    @sathwika
                  </a>
                  <a href="mailto:sathwika@example.com" className="flex items-center gap-2 px-4 py-2 border border-white/20 text-sm font-semibold font-sans text-white/80 hover:bg-[#c084fc] hover:text-[#0c0a14] hover:border-[#c084fc] transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </div>
              </div>

              {/* Handwritten arrow to CTA */}
              <div className="flex items-center gap-2">
                <HandwrittenArrow direction="right" className="w-10 h-6" color="#c084fc" />
                <a href="#contact" className="font-script text-xl underline underline-offset-4 text-white hover:text-[#c084fc] transition-colors" style={{ textDecorationColor: "#c084fc" }}>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 text-center border-r border-[#0c0a14] last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0 hover:bg-[#c084fc] transition-colors group"
              >
                <div className="font-display text-4xl font-black text-white group-hover:text-[#0c0a14] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs font-display font-bold uppercase tracking-wider text-white/40 group-hover:text-[#0c0a14]/70">
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
