"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Dribbble, Github } from "lucide-react";
import { JaggedTornEdge } from "@/components/ui/handdrawn-decorations";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Dribbble,  href: "#", label: "Dribbble" },
  { icon: Github,    href: "#", label: "GitHub" },
];

const navLinks = [
  { href: "#about",    label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#skills",   label: "Skills" },
  { href: "#contact",  label: "Contact" },
];

export function Footer() {
  return (
    <>
      {/* Torn paper edge from grid → black */}
      <JaggedTornEdge fromBlack={false} />

      <footer className="bg-[#0a0a0a]">
        {/* Main footer body */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 md:gap-6 items-start">

            {/* Brand */}
            <div>
              <a href="#" className="font-display text-4xl font-black uppercase text-white tracking-tight">
                Sath<span style={{ color: "#e6ff00" }}>wika</span>
              </a>
              <p className="text-white/40 text-sm font-sans mt-3 leading-relaxed max-w-xs">
                Graphic Designer &amp; Visual Storyteller crafting beautiful brand experiences.
              </p>
            </div>

            {/* Nav links */}
            <div>
              <p className="text-xs font-bold font-display uppercase tracking-widest text-white/30 mb-5">
                Navigate
              </p>
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-bold font-display uppercase tracking-wider text-white/60 hover:text-[#e6ff00] transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs font-bold font-display uppercase tracking-widest text-white/30 mb-5">
                Connect
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    className="p-2.5 border border-white/10 text-white/50 hover:border-[#e6ff00] hover:text-[#e6ff00] transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/10"
          style={{ background: "#050505" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs font-sans text-white/30">
              © {new Date().getFullYear()} Sathwika. All rights reserved.
            </p>
            <p className="text-xs font-sans">
              <span className="text-white/30">Designed &amp; Built with </span>
              <span style={{ color: "#e6ff00", fontWeight: 700 }}>passion</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
