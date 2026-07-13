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

    // Show after 5 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Inject Visme script AFTER the .visme_d div is in the DOM
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
        /* ── NO BACKDROP — just the floating card ── */
        <motion.div
          key="visme-popup"
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[200] w-full max-w-sm pointer-events-auto"
          style={{
            border: "1px solid rgba(192,132,252,0.45)",
            boxShadow: "0 20px 60px rgba(12,10,20,0.7), 0 0 40px rgba(192,132,252,0.15)",
            borderRadius: "6px",
            overflow: "hidden",
            background: "#0c0a14",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "#18132a", borderBottom: "1px solid rgba(192,132,252,0.2)" }}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c084fc] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#c084fc]" />
              </span>
              <p className="text-xs font-bold font-display uppercase tracking-widest" style={{ color: "#c084fc" }}>
                Stay in the loop
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 transition-all hover:scale-110 active:scale-95"
              style={{ background: "rgba(192,132,252,0.15)", color: "#c084fc", borderRadius: "4px" }}
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Visme form — inline (no fullPage) */}
          <div
            className="visme_d"
            data-title="B2B Newsletter Subscription"
            data-url="nmn1xp84-untitled-project"
            data-domain="forms"
            data-form-id="190356"
          />

          {/* Dismiss link */}
          <div
            className="px-4 py-2 text-center"
            style={{ background: "#18132a", borderTop: "1px solid rgba(192,132,252,0.1)" }}
          >
            <button
              onClick={handleClose}
              className="text-[11px] font-sans text-white/30 hover:text-white/60 transition-colors underline underline-offset-2"
            >
              No thanks, close
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
