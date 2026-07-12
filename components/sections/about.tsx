"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Palette, Sparkles, Heart, Sparkle } from "lucide-react";
import { CuteDaisy, CuteLeaf, HeaderDecoration, FloralDivider } from "@/components/ui/floral-decorations";

const stats = [
  { number: "5+", label: "Years Creating" },
  { number: "120+", label: "Designs Blossomed" },
  { number: "50+", label: "Happy Clients" },
  { number: "15+", label: "Creative Sparks" },
];

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete visual identity systems including logos, color palettes, and cozy brand guidelines.",
  },
  {
    icon: CuteLeaf,
    title: "Print & Packaging",
    description: "Elegant packaging, lookbooks, brochures, and stationery layout designs.",
  },
  {
    icon: Sparkles,
    title: "Digital Aesthetics",
    description: "Lovely social media templates, website graphics, and digital marketing banners.",
  },
  {
    icon: Heart,
    title: "Cute Illustration",
    description: "Custom digital illustrations and patterns that bring sweet personality to your brand.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative bg-background">
      {/* Background Floral Details */}
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <CuteDaisy className="w-40 h-40" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none">
        <CuteLeaf className="w-32 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-secondary/40 border border-border/50 text-center shadow-xs hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
              Designing with <span className="gradient-text">purpose</span> & passion
              <HeaderDecoration />
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed font-sans">
              <p>
                Hi, I&apos;m Sathwika — a visual designer and illustrator with a deep love for visual storytelling. 
                Over the past 5+ years, I&apos;ve had the joy of working with small business owners, boutique brands,
                and creative agencies to build visual identities that don&apos;t just catch the eye, but warm the heart.
              </p>
              <p>
                My design philosophy is simple: keep it thoughtful, make it beautiful, and inject a little bit of magic. 
                I believe every color choice should evoke an emotion, and every brand should tell a story that feels authentic and memorable.
              </p>
              <p>
                When I&apos;m not sketching or pushing pixels, you&apos;ll find me pressing flowers in old books, 
                exploring cozy coffee shops, or experimenting with watercolors in my studio.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Soft Feminine Photo Frame */}
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#fff3f0] via-[#faeae6] to-[#fdeae7] border-3 border-dashed border-primary/30 p-4 relative overflow-hidden shadow-lg shadow-primary/5 flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/40 bg-background/50">
                <Image 
                  src="/images/profile-casual.jpg" 
                  alt="Sathwika Profile" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            {/* Cute absolute elements around frame */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-[#ffd166]/10 rounded-full blur-xl" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3 -right-3 text-primary/30"
            >
              <CuteDaisy className="w-10 h-10" />
            </motion.div>
          </motion.div>
        </div>

        <FloralDivider />

        {/* Services */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2"
          >
            What I <span className="gradient-text">do best</span> <Sparkle className="w-5 h-5 text-primary" />
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 font-serif text-foreground">{service.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {service.description}
                  </p>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <CuteDaisy className="w-16 h-16 text-primary" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
