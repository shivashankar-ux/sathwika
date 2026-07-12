"use client";

import { motion } from "framer-motion";
import { MarkerHighlight } from "@/components/ui/handdrawn-decorations";

const creativeSkills = [
  { name: "Graphic Designing", level: 95 },
  { name: "Social Media MGT",  level: 90 },
  { name: "Shooting",          level: 95 },
  { name: "Video Editing",     level: 90 },
];

const softSkillsText = `I specialize in creating visually engaging content that enhances brand visibility and audience engagement. With a strong foundation in these skills, I consistently deliver high-quality, impactful visuals that resonate with viewers.`;

const creativeTools = [
  { name: "Ai",  bg: "#FF7C00", color: "#fff",    label: "Illustrator" },
  { name: "Ae",  bg: "#1a0538", color: "#9999FF",  label: "After Effects" },
  { name: "Ps",  bg: "#001e36", color: "#31A8FF",  label: "Photoshop" },
  { name: "Pr",  bg: "#1a0032", color: "#EA77FF",  label: "Premiere Pro" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-[2px] w-6 bg-[#e6ff00]" />
            <span className="text-xs font-bold font-display uppercase tracking-[0.2em] text-[#e6ff00]">
              My Expertise
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase text-white leading-tight">
            Skills &amp;{" "}
            <MarkerHighlight className="text-[#0a0a0a]">Tools</MarkerHighlight>
          </h2>
        </motion.div>

        {/* Two-col layout: creative + personal */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">

          {/* ── Creative Skills ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="font-display text-2xl font-black uppercase mb-6"
              style={{ color: "#e6ff00" }}
            >
              Creative Skills
            </h3>
            <div className="space-y-6">
              {creativeSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold font-display uppercase tracking-wider text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold font-display text-[#e6ff00]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0"
                      style={{ background: "#e6ff00" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Personal Skills + Creative Tools ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-display text-2xl font-black uppercase mb-4" style={{ color: "#e6ff00" }}>
                Personal Skills
              </h3>
              <p className="text-white/60 text-sm font-sans leading-relaxed">
                {softSkillsText}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-black uppercase mb-5 text-white">
                Creative Tools
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {creativeTools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center font-bold text-lg font-display"
                      style={{ background: tool.bg, color: tool.color }}
                    >
                      {tool.name}
                    </div>
                    <span className="text-[10px] font-display font-bold uppercase tracking-wide text-white/50 text-center">
                      {tool.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Tools Tags Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-10"
        >
          <p className="text-xs font-bold font-display uppercase tracking-widest text-white/30 mb-5">
            Also working with
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Figma", "Canva", "Procreate", "Notion", "Capcut",
              "Lightroom", "Sketch", "Blender", "Premiere Rush", "InDesign"
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-xs font-bold font-display uppercase tracking-wider text-white/60 border border-white/10 hover:border-[#e6ff00] hover:text-[#e6ff00] transition-colors cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
