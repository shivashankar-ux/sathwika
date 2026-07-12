"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Sparkles } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";
import { CuteDaisy, HeaderDecoration } from "@/components/ui/floral-decorations";

const categories = ["All", "Branding", "Print", "Digital", "Illustration"];

const projects: Project[] = [
  {
    id: "1",
    title: "Creative Tools & Design Showcase",
    description: "Personal design concept showcasing expertise in Adobe Photoshop, Illustrator, and digital graphics editing.",
    category: "Digital",
    image: "/images/project-1.jpg",
    tags: ["Photoshop", "Illustrator", "Digital Art"],
    link: "#",
    year: "2026",
  },
  {
    id: "2",
    title: "Brand Strategy & Visual Design",
    description: "A strategic brand planning visual campaign emphasizing strategy-driven branding layouts and typography.",
    category: "Branding",
    image: "/images/project-2.jpg",
    tags: ["Branding", "Layout Design", "Typography"],
    link: "#",
    year: "2026",
  },
  {
    id: "3",
    title: "Digital Marketing Campaign Dashboard",
    description: "Conceptual social media marketing design combining business statistics and custom marketing vectors.",
    category: "Digital",
    image: "/images/project-3.jpg",
    tags: ["UI Design", "Marketing", "Data Graphics"],
    link: "#",
    year: "2026",
  },
  {
    id: "4",
    title: "Social Media Platform Branding",
    description: "Cross-platform social media branding kit featuring custom layouts for Instagram, Twitter, and LinkedIn.",
    category: "Digital",
    image: "/images/project-4.jpg",
    tags: ["Social Media", "Branding", "Template"],
    link: "#",
    year: "2026",
  },
  {
    id: "5",
    title: "Modern Marketing Banner Kit",
    description: "Sleek, corporate-themed advertising banner kit with modern abstract styling and illustrations.",
    category: "Digital",
    image: "/images/project-5.jpg",
    tags: ["Ad Creatives", "Vector Design", "Layout"],
    link: "#",
    year: "2026",
  },
  {
    id: "6",
    title: "Enterprise Social Collateral",
    description: "Creative social media advertising and header banner design targeting professional audiences.",
    category: "Print",
    image: "/images/project-6.jpg",
    tags: ["Ad Design", "Layout", "Banners"],
    link: "#",
    year: "2025",
  },
  {
    id: "7",
    title: "Colorful Digital Brand Kit",
    description: "A bright, vibrant set of social media headers and branding assets to elevate online presence.",
    category: "Branding",
    image: "/images/project-7.jpg",
    tags: ["Vibrant Theme", "Social Kit", "Logo"],
    link: "#",
    year: "2025",
  },
  {
    id: "8",
    title: "Minimalist Pastel Banners",
    description: "Cozy, warm-colored advertising banners designed to connect deeply and tell a soft story.",
    category: "Illustration",
    image: "/images/project-8.jpg",
    tags: ["Pastel", "Illustration", "Banners"],
    link: "#",
    year: "2025",
  },
  {
    id: "9",
    title: "Corporate Blue Wave Graphics",
    description: "Abstract flow designs for corporate banners and print lookbooks with clean aesthetics.",
    category: "Print",
    image: "/images/project-9.jpg",
    tags: ["Print Layout", "Abstract", "Corporate"],
    link: "#",
    year: "2025",
  },
  {
    id: "10",
    title: "Creative Story Template Carousel",
    description: "Warm pink and orange instagram post template designs with playful typography and icons.",
    category: "Digital",
    image: "/images/project-10.jpg",
    tags: ["Carousel", "Template", "Instagram"],
    link: "#",
    year: "2025",
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
                {/* Soft Floral Image Container */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#fff7f5] via-[#faeae6] to-[#fdeae7] relative overflow-hidden border-b border-border/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
