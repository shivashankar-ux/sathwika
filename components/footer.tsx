"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Dribbble, Github, Heart } from "lucide-react";
import { CuteDaisy } from "@/components/ui/floral-decorations";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-secondary/40 relative overflow-hidden">
      {/* Tiny decorative daisy */}
      <div className="absolute -bottom-6 -left-6 opacity-5">
        <CuteDaisy className="w-24 h-24" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-serif gradient-text mb-2">Sathwika</h3>
            <p className="text-sm text-muted-foreground font-sans font-medium">
              Visual Designer & Storyteller
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2.5 rounded-full bg-background border border-border/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 shadow-xs"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-sans font-medium">
          <p>© {new Date().getFullYear()} Sathwika. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-primary fill-primary/30 animate-pulse" /> &{" "}
            <span className="text-foreground font-semibold">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
