"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { X } from "lucide-react";

export function VismePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed this session
    const alreadyDismissed = sessionStorage.getItem("visme_popup_dismissed");
    if (alreadyDismissed) return;

    // Show after 10 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem("visme_popup_dismissed", "true");
  };

  return (
    <>
      {/* Visme script — load once */}
      <Script
        src="https://static-bundles.visme.co/forms/vismeforms-embed.js"
        strategy="lazyOnload"
      />

      <AnimatePresence>
        {visible && !dismissed && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className="fixed inset-0 z-[200]"
              style={{ background: "rgba(12,10,20,0.85)", backdropFilter: "blur(6px)" }}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative w-full max-w-xl pointer-events-auto rounded-sm overflow-hidden"
                style={{
                  border: "1px solid rgba(192,132,252,0.4)",
                  boxShadow: "0 0 80px rgba(192,132,252,0.2)",
                  maxHeight: "90vh",
                  overflowY: "auto",
                }}
              >
                {/* Header bar */}
                <div
                  className="flex items-center justify-between px-5 py-3"
                  style={{ background: "#18132a", borderBottom: "1px solid rgba(192,132,252,0.2)" }}
                >
                  <div className="flex items-center gap-2">
                    {/* Pulsing dot */}
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
                    className="p-1.5 rounded-sm transition-all hover:scale-110 active:scale-95"
                    style={{ background: "rgba(192,132,252,0.15)", color: "#c084fc" }}
                    aria-label="Close popup"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Visme embed — exact code from user */}
                <div style={{ background: "#0c0a14" }}>
                  <div
                    className="visme_d"
                    data-title="B2B Newsletter Subscription"
                    data-url="nmn1xp84-untitled-project?fullPage=true"
                    data-domain="forms"
                    data-full-page="true"
                    data-min-height="100vh"
                    data-form-id="190356"
                  />
                </div>

                {/* Footer hint */}
                <div
                  className="px-5 py-3 text-center"
                  style={{ background: "#18132a", borderTop: "1px solid rgba(192,132,252,0.1)" }}
                >
                  <button
                    onClick={handleClose}
                    className="text-xs font-sans text-white/30 hover:text-white/60 transition-colors underline underline-offset-2"
                  >
                    No thanks, close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
