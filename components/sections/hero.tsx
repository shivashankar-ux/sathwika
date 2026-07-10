"use client";

import { motion } from "framer-motion";
import { ArrowDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloralFloatingBackground, CuteDaisy, CuteSparkle, TulipIcon } from "@/components/ui/floral-decorations";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floral Background Animation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjI3LDEzOSwxMjksMC4wNCkiLz48L3N2Zz4=')] opacity-60" />
      
      <FloralFloatingBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Soft Cute Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/80 mb-8 shadow-xs">
            <TulipIcon className="w-4 h-4 text-primary animate-bounce" />
            <span className="text-sm font-medium text-muted-foreground">Creating visual magic & storyteller</span>
          </div>
        </motion.div>

        {/* Title and Decor */}
        <div className="relative inline-block mb-6">
          {/* Sparkles around Title */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-6 -left-8 text-primary/40 hidden sm:block"
          >
            <CuteSparkle className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-8 text-[#fcdbd5] hidden sm:block"
          >
            <CuteSparkle className="w-6 h-6" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight px-4"
          >
            <span className="gradient-text">Sathwika</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-4 flex items-center justify-center gap-2"
        >
          Graphic Designer <Heart className="w-4 h-4 text-primary fill-primary/30" /> Visual Storyteller
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          I craft beautiful identities, warm illustration series, and cute brand stories 
          that help lovely brands blossom and connect deeply with their audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300 shadow-md shadow-primary/20" asChild>
            <a href="#projects">Explore My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 border-primary/30 text-foreground hover:bg-secondary hover:scale-105 transition-all duration-300" asChild>
            <a href="#contact">Say Hello</a>
          </Button>
        </motion.div>
      </div>

      {/* Cute Daisy Floating in Corner */}
      <div className="absolute bottom-16 right-16 opacity-10 animate-spin-slow hidden lg:block">
        <CuteDaisy className="w-32 h-32" />
      </div>
      <div className="absolute top-24 left-12 opacity-10 animate-pulse hidden lg:block">
        <CuteDaisy className="w-24 h-24" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-primary transition-colors">
            <span className="text-xs uppercase tracking-wider font-semibold">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
