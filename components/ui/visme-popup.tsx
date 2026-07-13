"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Palette, Share2, Star } from "lucide-react";

export function VismePopup() {
  const [visible, setVisible]   = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const already = sessionStorage.getItem("sathwika_popup_dismissed");
    if (already) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("sathwika_popup_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(handleClose, 2500);
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <>
          {/* Soft backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(12,10,20,0.6)", backdropFilter: "blur(4px)" }}
          />

          {/* Centered modal */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full flex overflow-hidden"
              style={{
                maxWidth: "820px",
                maxHeight: "90vh",
                borderRadius: "10px",
                border: "1px solid rgba(192,132,252,0.3)",
                boxShadow: "0 30px 80px rgba(12,10,20,0.85), 0 0 60px rgba(192,132,252,0.1)",
              }}
            >
              {/* ── LEFT PANEL ── */}
              <div
                className="hidden sm:flex flex-col justify-between p-8 w-[42%] flex-shrink-0"
                style={{
                  background: "linear-gradient(145deg, #1e1530 0%, #120f1e 100%)",
                  borderRight: "1px solid rgba(192,132,252,0.15)",
                }}
              >
                {/* Badge */}
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full"
                    style={{ background: "rgba(192,132,252,0.15)", border: "1px solid rgba(192,132,252,0.3)" }}
                  >
                    <Sparkles className="w-3 h-3" style={{ color: "#c084fc" }} />
                    <span className="text-[10px] font-bold font-display uppercase tracking-widest" style={{ color: "#c084fc" }}>
                      Creative Studio
                    </span>
                  </div>

                  <h2 className="font-display font-black text-white uppercase leading-tight mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}>
                    Get Beautiful<br />
                    <span style={{ WebkitTextStroke: "1.5px #c084fc", color: "transparent" }}>
                      Designs
                    </span>{" "}
                    That<br />Convert.
                  </h2>

                  <p className="text-white/50 text-xs font-sans leading-relaxed mb-6">
                    Stay updated with design tips, brand strategies, and exclusive offers — crafted just for you.
                  </p>

                  {/* Feature chips */}
                  <div className="flex flex-col gap-2.5">
                    {[
                      { icon: Palette,  text: "Brand Identity Design" },
                      { icon: Share2,   text: "Social Media Creatives" },
                      { icon: Star,     text: "Exclusive Offers" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-2">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(192,132,252,0.2)" }}
                        >
                          <Icon className="w-2.5 h-2.5" style={{ color: "#c084fc" }} />
                        </div>
                        <span className="text-xs font-sans text-white/60">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative bottom element */}
                <div
                  className="mt-6 p-3 rounded-md font-mono text-[10px] leading-relaxed"
                  style={{ background: "rgba(12,10,20,0.6)", border: "1px solid rgba(192,132,252,0.12)", color: "rgba(192,132,252,0.7)" }}
                >
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-white/30">// design that speaks</span><br />
                  <span style={{ color: "#c084fc" }}>const</span> brand = <span className="text-green-400/70">✦</span> Sathwika<br />
                  <span style={{ color: "#c084fc" }}>return</span> brand.<span className="text-white/50">createMagic()</span>
                </div>
              </div>

              {/* ── RIGHT PANEL ── */}
              <div
                className="flex flex-col flex-1 min-w-0"
                style={{ background: "#0c0a14" }}
              >
                {/* Right header */}
                <div
                  className="flex items-start justify-between px-6 pt-6 pb-4"
                  style={{ borderBottom: "1px solid rgba(192,132,252,0.1)" }}
                >
                  <div>
                    <p className="text-[10px] font-bold font-display uppercase tracking-widest mb-1" style={{ color: "#c084fc" }}>
                      Stay Connected
                    </p>
                    <h3 className="font-display font-black text-white uppercase text-xl leading-tight">
                      Let&apos;s Keep<br />in Touch.
                    </h3>
                    <p className="text-white/40 text-xs font-sans mt-1">
                      A few details and I&apos;ll reach out to you.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 ml-4 transition-all hover:scale-110 active:scale-95"
                    style={{ background: "rgba(192,132,252,0.12)", color: "#c084fc", borderRadius: "4px", border: "1px solid rgba(192,132,252,0.2)" }}
                    aria-label="Close"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Form / Success */}
                <div className="flex-1 px-6 py-5 overflow-y-auto">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-8 gap-3"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                        style={{ background: "rgba(192,132,252,0.2)", border: "1px solid rgba(192,132,252,0.4)" }}
                      >
                        <Sparkles className="w-5 h-5" style={{ color: "#c084fc" }} />
                      </div>
                      <p className="font-display font-black text-white uppercase text-lg">You&apos;re In!</p>
                      <p className="text-white/40 text-xs font-sans max-w-[180px]">
                        Thanks! I&apos;ll be in touch soon with something exciting.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold font-display uppercase tracking-widest text-white/40 mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all"
                          style={{ background: "#18132a", border: "1px solid rgba(192,132,252,0.15)", borderRadius: "4px" }}
                          onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-[10px] font-bold font-display uppercase tracking-widest text-white/40 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all"
                          style={{ background: "#18132a", border: "1px solid rgba(192,132,252,0.15)", borderRadius: "4px" }}
                          onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-[10px] font-bold font-display uppercase tracking-widest text-white/40 mb-1.5">
                          Message <span className="normal-case text-white/20">(optional)</span>
                        </label>
                        <textarea
                          rows={3}
                          placeholder="What are you working on?"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm font-sans text-white placeholder:text-white/20 focus:outline-none transition-all resize-none leading-relaxed"
                          style={{ background: "#18132a", border: "1px solid rgba(192,132,252,0.15)", borderRadius: "4px" }}
                          onFocus={(e) => (e.target.style.borderColor = "#c084fc")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.15)")}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full py-3 flex items-center justify-center gap-2 font-bold font-display uppercase tracking-wider text-sm transition-all hover:scale-[1.02] active:scale-95 mt-1"
                        style={{ background: "#c084fc", color: "#0c0a14", borderRadius: "4px" }}
                      >
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </button>

                      <button
                        type="button"
                        onClick={handleClose}
                        className="text-center text-[11px] font-sans underline underline-offset-2 transition-colors"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
                      >
                        No thanks, close
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
