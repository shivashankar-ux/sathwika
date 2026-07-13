"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Palette, Share2, Star } from "lucide-react";

export function VismePopup() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const already = sessionStorage.getItem("sathwika_popup_dismissed");
    if (already) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Inject Visme script AFTER the .visme_d div is in the DOM
  useEffect(() => {
    if (!visible) return;

    const t = setTimeout(() => {
      // Remove old instance if re-mounted
      const old = document.getElementById("visme-embed-script");
      if (old) old.remove();

      const script = document.createElement("script");
      script.id    = "visme-embed-script";
      script.src   = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      document.body.appendChild(script);
    }, 200);

    return () => clearTimeout(t);
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("sathwika_popup_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <>
          {/* Backdrop */}
          <motion.div
            key="bd"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(12,10,20,0.65)", backdropFilter: "blur(4px)" }}
          />

          {/* Centered modal */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
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
                <div>
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full"
                    style={{ background: "rgba(192,132,252,0.15)", border: "1px solid rgba(192,132,252,0.3)" }}
                  >
                    <Sparkles className="w-3 h-3" style={{ color: "#c084fc" }} />
                    <span className="text-[10px] font-bold font-display uppercase tracking-widest" style={{ color: "#c084fc" }}>
                      Creative Studio
                    </span>
                  </div>

                  <h2
                    className="font-display font-black text-white uppercase leading-tight mb-3"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)" }}
                  >
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
                      { icon: Palette, text: "Brand Identity Design" },
                      { icon: Share2,  text: "Social Media Creatives" },
                      { icon: Star,    text: "Exclusive Offers" },
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

                {/* Code decoration */}
                <div
                  className="mt-6 p-3 rounded-md font-mono text-[10px] leading-relaxed"
                  style={{
                    background: "rgba(12,10,20,0.6)",
                    border: "1px solid rgba(192,132,252,0.12)",
                    color: "rgba(192,132,252,0.7)",
                  }}
                >
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-white/30">&#47;&#47; design that speaks</span><br />
                  <span style={{ color: "#c084fc" }}>const</span> brand = <span className="text-green-400/70">✦</span> Sathwika<br />
                  <span style={{ color: "#c084fc" }}>return</span> brand.<span className="text-white/50">createMagic()</span>
                </div>
              </div>

              {/* ── RIGHT PANEL — Visme embed ── */}
              <div
                className="flex flex-col flex-1 min-w-0 overflow-hidden"
                style={{ background: "#0c0a14" }}
              >
                {/* Header row */}
                <div
                  className="flex items-center justify-between px-5 py-3 flex-shrink-0"
                  style={{ background: "#18132a", borderBottom: "1px solid rgba(192,132,252,0.15)" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c084fc]" />
                    </span>
                    <span
                      className="text-[10px] font-bold font-display uppercase tracking-widest"
                      style={{ color: "#c084fc" }}
                    >
                      Subscribe to our Newsletter
                    </span>
                  </div>
                  <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="flex items-center justify-center w-7 h-7 transition-all hover:scale-110 active:scale-95"
                    style={{
                      background: "rgba(192,132,252,0.12)",
                      color: "#c084fc",
                      borderRadius: "4px",
                      border: "1px solid rgba(192,132,252,0.2)",
                    }}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Visme form — div must be in DOM before script is injected */}
                <div className="flex-1 overflow-y-auto" style={{ background: "#0c0a14" }}>
                  <div
                    className="visme_d"
                    data-title="B2B Newsletter Subscription"
                    data-url="nmn1xp84-untitled-project"
                    data-domain="forms"
                    data-form-id="190356"
                  />
                </div>

                {/* Dismiss */}
                <div
                  className="flex items-center justify-center py-2.5 flex-shrink-0"
                  style={{ background: "#18132a", borderTop: "1px solid rgba(192,132,252,0.1)" }}
                >
                  <button
                    onClick={handleClose}
                    className="text-[11px] font-sans underline underline-offset-2 transition-colors"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
                  >
                    No thanks, close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
