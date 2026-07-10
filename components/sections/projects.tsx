"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { CuteDaisy, HeaderDecoration } from "@/components/ui/floral-decorations";

const categories = ["All", "Branding", "Print", "Digital", "Illustration"];

const projects: Project[] = [
  {
    id: "1",
    title: "Lumina Brand Identity",
    description: "Complete brand identity for a sustainable skincare & lighting brand including packaging and guidelines.",
    category: "Branding",
    image: "/images/project-1.jpg",
    tags: ["Logo Design", "Packaging", "Aesthetics"],
    link: "#",
    year: "2025",
  },
  {
    id: "2",
    title: "Urban Coffee & Co.",
    description: "Charming pastel packaging design and brand collateral for an artisan coffee roaster.",
    category: "Print",
    image: "/images/project-2.jpg",
    tags: ["Packaging", "Stationery", "Typography"],
    link: "#",
    year: "2025",
  },
  {
    id: "3",
    title: "Bloom Skincare App",
    description: "Cute, soft user interface design for a clean beauty e-commerce dashboard and mobile app.",
    category: "Digital",
    image: "/images/project-3.jpg",
    tags: ["UI/UX", "Mobile App", "Interaction"],
    link: "#",
    year: "2024",
  },
  {
    id: "4",
    title: "Botanical Series",
    description: "A gorgeous collection of hand-drawn botanical illustrations for a luxury fragrance brand.",
    category: "Illustration",
    image: "/images/project-4.jpg",
    tags: ["Illustration", "Digital Art", "Florals"],
    link: "#",
    year: "2024",
  },
  {
    id: "5",
    title: "Nova Bloom Rebrand",
    description: "Full visual redesign for a boutique floral design shop including cards, tags, and web assets.",
    category: "Branding",
    image: "/images/project-5.jpg",
    tags: ["Rebrand", "Collateral", "Visuals"],
    link: "#",
    year: "2024",
  },
  {
    id: "6",
    title: "Wanderlust Lookbook",
    description: "Editorial layout and aesthetic lookbook design for a slow fashion brand summer editorial.",
    category: "Print",
    image: "/images/project-6.jpg",
    tags: ["Lookbook", "Editorial", "Layout"],
    link: "#",
    year: "2023",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Selected <span className="gradient-text">Work</span>
            <HeaderDecoration />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            A curated showcase of branding projects, packaging solutions, and illustrations that tell visual stories.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border/40"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Soft Floral Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#fff7f5] via-[#faeae6] to-[#fdeae7] flex items-center justify-center relative overflow-hidden border-b border-border/50">
                  <div className="text-center p-6 transition-transform duration-500 group-hover:scale-110">
                    <CuteDaisy className="w-12 h-12 text-primary/30 mx-auto mb-3 animate-spin-slow" />
                    <p className="text-sm font-serif font-bold text-muted-foreground/70">
                      {project.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground/40 mt-1 font-sans">
                      Add: /public/images/project-{project.id}.jpg
                    </p>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/10 hover:scale-105 transition-transform" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs bg-secondary/85 text-secondary-foreground border-none font-semibold rounded-full px-3 py-0.5">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-semibold font-sans">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 font-sans leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground border border-border/30 font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
