"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function VismePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyDismissed = sessionStorage.getItem("visme_popup_dismissed");
    if (alreadyDismissed) return;

    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Inject Visme script AFTER the .visme_d div is mounted in the DOM
  useEffect(() => {
    if (!visible) return;

    const scriptTimer = setTimeout(() => {
      const existing = document.getElementById("visme-embed-script");
      if (existing) existing.remove();

      const script = document.createElement("script");
      script.id = "visme-embed-script";
      script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
      script.async = true;
      document.body.appendChild(script);
    }, 150);

    return () => clearTimeout(scriptTimer);
  }, [visible]);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("visme_popup_dismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <>
          {/* ── Subtle backdrop — no full black, just a soft dim ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[200]"
            style={{ background: "rgba(12,10,20,0.55)", backdropFilter: "blur(3px)" }}
          />

          {/* ── Centered popup card ── */}
          <div className="fixed inset-0 z-[201] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full"
              style={{ maxWidth: "480px" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  background: "#0c0a14",
                  border: "1px solid rgba(192,132,252,0.45)",
                  boxShadow: "0 25px 80px rgba(12,10,20,0.8), 0 0 50px rgba(192,132,252,0.12)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                {/* ── Header ── */}
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{
                    background: "#18132a",
                    borderBottom: "1px solid rgba(192,132,252,0.2)",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c084fc]" />
                    </span>
                    <span
                      className="text-xs font-bold font-display uppercase tracking-widest"
                      style={{ color: "#c084fc" }}
                    >
                      Stay in the loop
                    </span>
                  </div>

                  <button
                    onClick={handleClose}
                    aria-label="Close"
                    className="flex items-center justify-center w-7 h-7 transition-all hover:scale-110 active:scale-95"
                    style={{
                      background: "rgba(192,132,252,0.15)",
                      color: "#c084fc",
                      borderRadius: "4px",
                      border: "1px solid rgba(192,132,252,0.2)",
                    }}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* ── Visme Form (inline, no fullPage) ── */}
                <div
                  style={{
                    background: "#0c0a14",
                    minHeight: "200px",
                  }}
                >
                  <div
                    className="visme_d"
                    data-title="B2B Newsletter Subscription"
                    data-url="nmn1xp84-untitled-project"
                    data-domain="forms"
                    data-form-id="190356"
                  />
                </div>

                {/* ── Footer ── */}
                <div
                  className="flex items-center justify-center py-3"
                  style={{
                    background: "#18132a",
                    borderTop: "1px solid rgba(192,132,252,0.1)",
                  }}
                >
                  <button
                    onClick={handleClose}
                    className="text-[11px] font-sans transition-colors underline underline-offset-2"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.3)")
                    }
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
