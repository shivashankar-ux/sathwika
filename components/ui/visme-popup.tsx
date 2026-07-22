"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Free Lottie — person/character with newsletter / form
const LOTTIE_URLS = [
  "https://lottie.host/8d379258-f6b0-4efe-9c73-f7a4d3c2f8c0/KkK3G2gGjQ.json",
  "https://assets2.lottiefiles.com/packages/lf20_tfb3estd.json",
  "https://assets9.lottiefiles.com/packages/lf20_jcikwtux.json",
];

export function VismePopup() {
  const [visible, setVisible]         = useState(false);
  const [dismissed, setDismissed]     = useState(false);
  const [lottieData, setLottieData]   = useState<object | null>(null);

  // Show after 5 seconds
  useEffect(() => {
    const already = sessionStorage.getItem("sathwika_popup_dismissed");
    if (already) return;
    const t = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(t);
  }, []);

  // Fetch Lottie animation (try each URL)
  useEffect(() => {
    let cancelled = false;
    const tryFetch = async (idx: number) => {
      if (idx >= LOTTIE_URLS.length || cancelled) return;
      try {
        const res = await fetch(LOTTIE_URLS[idx]);
        if (!res.ok) throw new Error("fail");
        const data = await res.json();
        if (!cancelled) setLottieData(data);
      } catch {
        tryFetch(idx + 1);
      }
    };
    tryFetch(0);
    return () => { cancelled = true; };
  }, []);

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

          {/* Modal */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.9, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 28 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full overflow-hidden"
              style={{
                maxWidth: "520px",
                borderRadius: "12px",
                border: "1px solid rgba(192,132,252,0.35)",
                boxShadow: "0 30px 80px rgba(12,10,20,0.9), 0 0 60px rgba(192,132,252,0.12)",
                background: "#0c0a14",
              }}
            >
              {/* ── Header ── */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ background: "#18132a", borderBottom: "1px solid rgba(192,132,252,0.15)" }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c084fc]" />
                  </span>
                  <span className="text-[10px] font-bold font-display uppercase tracking-widest" style={{ color: "#c084fc" }}>
                    Subscribe to our Newsletter
                  </span>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="flex items-center justify-center w-7 h-7 transition-all hover:scale-110 active:scale-95"
                  style={{ background: "rgba(192,132,252,0.12)", color: "#c084fc", borderRadius: "4px", border: "1px solid rgba(192,132,252,0.2)" }}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* ── Animated character ── */}
              <div className="flex justify-center pt-4 pb-1 relative" style={{ background: "#0c0a14" }}>
                {/* Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 blur-3xl opacity-20 pointer-events-none" style={{ background: "#c084fc" }} />

                {lottieData ? (
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-36 h-36 relative z-10"
                  >
                    <Lottie animationData={lottieData} loop className="w-full h-full" />
                  </motion.div>
                ) : (
                  /* Fallback SVG character if Lottie fails */
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 h-28"
                  >
                    <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      {/* Body */}
                      <circle cx="60" cy="35" r="18" fill="#fde8d8" />
                      <path d="M60 55 Q75 55 80 75 L40 75 Q45 55 60 55Z" fill="#8b5cf6" />
                      {/* Left arm waving */}
                      <motion.line x1="43" y1="62" x2="22" y2="50" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round"
                        animate={{ rotate: [0, -30, 0] }} style={{ transformOrigin: "43px 62px" }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      {/* Right arm holding envelope */}
                      <line x1="77" y1="62" x2="98" y2="72" stroke="#a78bfa" strokeWidth="8" strokeLinecap="round" />
                      {/* Envelope */}
                      <rect x="94" y="68" width="20" height="14" rx="2" fill="#c084fc" />
                      <path d="M94 68 L104 76 L114 68" stroke="#e9d5ff" strokeWidth="1.5" fill="none" />
                      {/* Legs */}
                      <line x1="52" y1="75" x2="48" y2="98" stroke="#7c3aed" strokeWidth="9" strokeLinecap="round" />
                      <line x1="68" y1="75" x2="72" y2="98" stroke="#7c3aed" strokeWidth="9" strokeLinecap="round" />
                      {/* Face */}
                      <circle cx="54" cy="32" r="3" fill="#1e1930" />
                      <circle cx="66" cy="32" r="3" fill="#1e1930" />
                      <path d="M54 40 Q60 45 66 40" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" />
                      {/* Hair */}
                      <path d="M42 30 Q45 15 60 18 Q75 15 78 30 Q70 22 60 23 Q50 22 42 30Z" fill="#4c1d95" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* ── Visme form via direct iframe (fast — no script loading) ── */}
              <div style={{ background: "#0c0a14" }}>
                <iframe
                  src="https://forms.visme.co/formsPlayer/nmn1xp84-untitled-project"
                  title="Newsletter Subscription"
                  width="100%"
                  style={{ border: "none", display: "block", minHeight: "320px" }}
                  loading="eager"
                  allow="fullscreen"
                />
              </div>

              {/* ── Dismiss ── */}
              <div
                className="flex items-center justify-center py-2.5"
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
