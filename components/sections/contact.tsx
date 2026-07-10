"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CuteDaisy, CuteLeaf, HeaderDecoration } from "@/components/ui/floral-decorations";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/35 relative">
      {/* Botanical Details */}
      <div className="absolute top-12 left-12 opacity-5 pointer-events-none">
        <CuteLeaf className="w-24 h-24" />
      </div>
      <div className="absolute bottom-12 right-12 opacity-5 pointer-events-none">
        <CuteDaisy className="w-28 h-28" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            Let&apos;s <span className="gradient-text">Connect</span>
            <HeaderDecoration />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-sans">
            Have a cozy project in mind or just want to chat about designs? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-sans">Email</p>
                    <a href="mailto:hello@sathwika.design" className="text-foreground hover:text-primary transition-colors font-sans font-medium text-sm">
                      hello@sathwika.design
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-sans">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors font-sans font-medium text-sm">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-background border border-border/80 flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-sans">Location</p>
                    <p className="text-foreground font-sans font-medium text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-xs relative overflow-hidden group">
              <h4 className="font-bold font-serif text-lg mb-2 text-foreground">Availability</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed font-sans">
                I am currently open for freelancing and boutique collaborations! Typical response time is within 24 hours.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-sm font-semibold text-emerald-500 font-sans">Open for work</span>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CuteDaisy className="w-20 h-20" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-card border-2 border-dashed border-primary/20 shadow-lg shadow-primary/5"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground font-sans text-sm max-w-xs leading-relaxed">
                  Thank you so much for writing! I will read your message and reply as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-10 rounded-3xl bg-card border border-border/80 shadow-md shadow-primary/5 relative overflow-hidden">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2 font-sans">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-sans text-sm"
                      placeholder="Your lovely name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2 font-sans">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-sans text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2 font-sans">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-sans text-sm"
                    placeholder="Project details or simple greeting..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2 font-sans">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none font-sans text-sm leading-relaxed"
                    placeholder="Tell me about your brand story and how I can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300">
                  <Send className="w-4 h-4 mr-2" />
                  Send Letter
                </Button>

                <p className="text-[10px] text-muted-foreground/60 text-center font-sans">
                  Your information is kept safe and beautiful. I never share details with others.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
