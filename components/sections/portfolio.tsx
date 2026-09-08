"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  PORTFOLIO_ITEMS, 
  PortfolioItem 
} from "@/lib/portfolio-data";
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  X, 
  Sparkles,
  Maximize2
} from "lucide-react";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "single" | "carousel" | "video">("all");
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Filter items based on active tab
  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleOpenModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setCurrentSlide(0);
  };

  return (
    <section id="work" className="py-24 relative overflow-hidden" style={{ background: "#0c0a14" }}>
      
      {/* Glow Effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{ background: "#c084fc" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-[#c084fc]/30"
            style={{ background: "rgba(192,132,252,0.08)" }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#c084fc" }} />
            <span className="text-xs font-bold font-display uppercase tracking-widest" style={{ color: "#c084fc" }}>
              Portfolio &amp; Showcase
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-display uppercase text-white tracking-tight"
          >
            Featured <span style={{ color: "#c084fc" }}>Creatives</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/60 font-sans text-base"
          >
            Explore single posts, educational carousels, and engaging video reels crafted for maximum impact.
          </motion.p>
        </div>

        {/* ── Category Filters ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Works" },
            { id: "single", label: "Single Creatives" },
            { id: "carousel", label: "Carousels" },
            { id: "video", label: "Reels & Videos" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id as "all" | "single" | "carousel" | "video");
                setVisibleCount(9);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-bold font-display uppercase tracking-wider transition-all duration-300 ${
                activeCategory === tab.id
                  ? "bg-[#c084fc] text-[#0c0a14] shadow-lg shadow-[#c084fc]/25 scale-105"
                  : "bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/25"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Masonry Grid ── */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => handleOpenModal(item)}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#18132a] transition-all duration-300 hover:border-[#c084fc]/50 hover:shadow-2xl hover:shadow-[#c084fc]/10 hover:-translate-y-1"
                >
                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-bold font-display uppercase tracking-wider text-white shadow-md flex items-center gap-1.5"
                      style={{ background: "rgba(12,10,20,0.85)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                      {item.type === "carousel" && <Layers className="w-3 h-3 text-[#c084fc]" />}
                      {item.type === "video" && <Play className="w-3 h-3 text-pink-400 fill-pink-400" />}
                      {item.type === "image" && <Sparkles className="w-3 h-3 text-amber-300" />}
                      {item.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Media Content */}
                  <div className="relative w-full overflow-hidden bg-black/40">
                    {item.type === "video" ? (
                      <div className="relative aspect-video w-full">
                        <video
                          src={item.mediaUrl}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          muted
                          loop
                          playsInline
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#c084fc] flex items-center justify-center text-[#0c0a14] group-hover:scale-110 transition-transform shadow-lg">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ) : item.type === "carousel" ? (
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src={item.mediaUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-white flex items-center gap-1 border border-white/10">
                          <Layers className="w-3 h-3 text-[#c084fc]" />
                          1 / {item.slides?.length || 1}
                        </div>
                      </div>
                    ) : (
                      <div className="relative aspect-[4/5] w-full">
                        <Image
                          src={item.mediaUrl}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                    {/* Hover Info Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a14] via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <h3 className="text-white font-display font-bold text-lg leading-snug drop-shadow-md">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[9px] font-sans px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs font-bold font-display uppercase tracking-wider" style={{ color: "#c084fc" }}>
                        Click to view <Maximize2 className="w-3.5 h-3.5 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Load More Button ── */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3.5 rounded-full font-display font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-[#c084fc]/50 text-white hover:bg-[#c084fc] hover:text-[#0c0a14] shadow-lg shadow-[#c084fc]/10"
            >
              Load More Creatives ({filteredItems.length - visibleCount} remaining)
            </button>
          </div>
        )}

      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            style={{ background: "rgba(12,10,20,0.92)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#120f1e] border border-[#c084fc]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#18132a]">
                <div>
                  <h3 className="text-white font-display font-bold text-lg">{selectedItem.title}</h3>
                  <div className="flex gap-2 mt-1">
                    {selectedItem.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] text-[#c084fc] font-mono">#{tag}</span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center relative bg-black/60 min-h-[400px]">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.mediaUrl}
                    controls
                    autoPlay
                    className="max-h-[70vh] w-auto max-w-full rounded-lg shadow-xl"
                  />
                ) : selectedItem.type === "carousel" && selectedItem.slides ? (
                  <div className="relative w-full flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedItem.slides[currentSlide]}
                      alt={`Slide ${currentSlide + 1}`}
                      className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
                    />

                    {/* Carousel Navigation */}
                    {selectedItem.slides.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : selectedItem.slides!.length - 1))}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#c084fc] hover:text-[#0c0a14] transition-colors border border-white/10"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={() => setCurrentSlide((prev) => (prev < selectedItem.slides!.length - 1 ? prev + 1 : 0))}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#c084fc] hover:text-[#0c0a14] transition-colors border border-white/10"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/80 px-3 py-1 rounded-full text-xs font-mono text-white border border-white/10">
                          {currentSlide + 1} / {selectedItem.slides.length}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedItem.mediaUrl}
                    alt={selectedItem.title}
                    className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
