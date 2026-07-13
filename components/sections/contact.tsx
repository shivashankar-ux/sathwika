"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, Instagram, ExternalLink } from "lucide-react";
import { HandwrittenArrow, MarkerHighlight } from "@/components/ui/handdrawn-decorations";

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
    <section id="contact" className="py-20 md:py-28 relative" style={{ background: "#0c0a14" }}>

      {/* Big lavender watermark text */}
      <div
        className="absolute top-0 right-0 font-display font-black uppercase select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem, 20vw, 16rem)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(192,132,252,0.06)",
          letterSpacing: "-0.04em",
        }}
      >
        HELLO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-6 bg-[#c084fc]" />
            <span className="text-xs font-bold font-display uppercase tracking-[0.2em] text-[#c084fc]/60">
              Contact
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-tight">
            Let&apos;s{" "}
            <MarkerHighlight>Connect</MarkerHighlight>
          </h2>
          <p className="text-white/40 text-sm font-sans mt-4 max-w-md leading-relaxed">
            Have a project in mind or just want to chat about designs? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* ── LEFT: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Contact items */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "hello@sathwika.design",
                  href: "mailto:hello@sathwika.design",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 00000 00000",
                  href: "tel:+91",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: "@sathwika.designs",
                  href: "https://instagram.com",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "India",
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div
                    className="w-11 h-11 flex-shrink-0 flex items-center justify-center transition-colors"
                    style={{ border: "1px solid rgba(192,132,252,0.2)", background: "#18132a" }}
                  >
                    <item.icon className="w-4 h-4 text-[#c084fc]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold font-display uppercase tracking-widest text-white/30">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-sans text-white/70 hover:text-[#c084fc] transition-colors flex items-center gap-1"
                      >
                        {item.value}
                        {item.href.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                      </a>
                    ) : (
                      <p className="text-sm font-sans text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div
              className="p-5 relative overflow-hidden"
              style={{ border: "1px solid rgba(192,132,252,0.15)", background: "#18132a" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-bold font-display uppercase tracking-wider text-emerald-400">
                  Open for Work
                </span>
              </div>
              <p className="text-xs text-white/40 font-sans leading-relaxed">
                Currently open for freelancing and boutique collaborations. Typical response time is within 24 hours.
              </p>
            </div>

            {/* Handwritten call to action */}
            <div className="flex items-center gap-2 pt-2">
              <HandwrittenArrow direction="right" className="w-10 h-6" color="#c084fc" />
              <span className="font-script text-xl" style={{ color: "#c084fc" }}>
                don&apos;t be shy!
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ── */}
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
                className="h-full min-h-[360px] flex flex-col items-center justify-center text-center p-12"
                style={{ border: "2px solid #c084fc", background: "#18132a" }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-4"
                  style={{ background: "#c084fc" }}
                >
                  <CheckCircle className="w-7 h-7 text-[#0c0a14]" />
                </div>
                <h3 className="text-2xl font-black font-display uppercase text-white mb-2">Message Sent!</h3>
                <p className="text-white/40 font-sans text-sm max-w-xs leading-relaxed">
                  Thank you! I&apos;ll read your message and reply as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-6 sm:p-8"
                style={{ border: "1px solid rgba(192,132,252,0.15)", background: "#18132a" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold font-display uppercase tracking-widest text-white/40 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all"
                      style={{ background: "#0c0a14", border: "1px solid rgba(192,132,252,0.15)" }}
                      onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold font-display uppercase tracking-widest text-white/40 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all"
                      style={{ background: "#0c0a14", border: "1px solid rgba(192,132,252,0.15)" }}
                      onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold font-display uppercase tracking-widest text-white/40 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all"
                    style={{ background: "#0c0a14", border: "1px solid rgba(192,132,252,0.15)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                    placeholder="Project details or simple greeting..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold font-display uppercase tracking-widest text-white/40 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all resize-none leading-relaxed"
                    style={{ background: "#0c0a14", border: "1px solid rgba(192,132,252,0.15)" }}
                    onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                    placeholder="Tell me about your brand story and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 flex items-center justify-center gap-2 font-bold font-display uppercase tracking-wider text-sm transition-all hover:scale-[1.02] active:scale-95"
                  style={{ background: "#c084fc", color: "#0c0a14" }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-[10px] text-white/20 text-center font-sans">
                  Your information is kept safe. I never share details with others.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
