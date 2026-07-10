"use client";

import { motion } from "framer-motion";
import { Figma, PenTool, Layers, Image, Type, Palette, Monitor, Smartphone, Heart, Sparkle } from "lucide-react";
import { HeaderDecoration } from "@/components/ui/floral-decorations";

const skills = [
  { name: "Adobe Photoshop", level: 95, icon: Image },
  { name: "Adobe Illustrator", level: 92, icon: PenTool },
  { name: "Figma", level: 90, icon: Figma },
  { name: "Adobe InDesign", level: 85, icon: Layers },
  { name: "Typography", level: 88, icon: Type },
  { name: "Color Theory", level: 90, icon: Palette },
  { name: "Web Design", level: 82, icon: Monitor },
  { name: "Mobile Design", level: 78, icon: Smartphone },
];

const tools = [
  "Adobe Creative Suite", "Figma", "Sketch", "Canva", "Procreate",
  "Blender", "After Effects", "Premiere Pro", "Notion", "Slack"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Skills & <span className="gradient-text">Expertise</span>
            <HeaderDecoration />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            A harmonious blend of visual design craft and tools tailored to make your ideas bloom.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold font-sans text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm font-semibold font-sans text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-secondary border border-border/20 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-[#fcdbd5]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Soft Skills */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold font-serif mb-6 text-foreground">Tools I Use</h3>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground hover:border-primary/45 hover:text-primary transition-all duration-300 font-sans font-medium hover:scale-105 hover:shadow-xs hover:shadow-primary/5 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold font-serif mb-6 text-foreground">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Creative Problem Solving",
                  "Client Collaboration",
                  "Time Management",
                  "Attention to Detail",
                  "Adaptability & Empathy",
                  "Team & Brand Strategy",
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <Heart className="w-3.5 h-3.5 text-primary fill-primary/30 shrink-0" />
                    <span className="text-sm font-medium font-sans text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
