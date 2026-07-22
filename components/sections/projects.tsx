"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Heart, 
  Instagram, 
  Layout, 
  MessageCircle, 
  MoreHorizontal, 
  Play, 
  Plus, 
  Search, 
  Share2, 
  TrendingUp, 
  Users 
} from "lucide-react";

const carouselImages = [
  "/images/cariusel1.jpg",
  "/images/cariusel2.jpg",
  "/images/cariusel3.jpg",
  "/images/cariusel4.jpg",
  "/images/cariusel5.jpg",
];

const staticImages = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
];

// Reusable premium card wrapper
function GlassCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`bg-white rounded-[24px] border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] ${className}`}>
      {children}
    </div>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] min-h-screen relative font-sans text-gray-900 selection:bg-blue-100">
      
      {/* Subtle background gradients */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* ── 1. Hero & Navigation ── */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Layout className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Creative Workspace</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Engine.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search campaigns..." 
                className="pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm transition-all w-64"
              />
            </div>
            <button className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg shadow-gray-900/20 transition-all hover:-translate-y-0.5">
              <Plus className="w-4 h-4" />
              New Brief
            </button>
          </div>
        </header>

        {/* ── 2. Quick Stats ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Reach", value: "2.4M", trend: "+12.5%", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Engagement", value: "8.2%", trend: "+2.1%", icon: Heart, color: "text-pink-600", bg: "bg-pink-50" },
            { label: "Posts Delivered", value: "142", trend: "On track", icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Profile Visits", value: "84k", trend: "+18.2%", icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-50" },
          ].map((stat, i) => (
            <GlassCard key={i} className="p-6">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} strokeWidth={2} />
                </div>
                <button className="text-gray-400 hover:text-gray-900 transition-colors">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                <div className="flex items-end gap-3">
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <span className={`text-sm font-semibold mb-1 ${stat.trend.includes('+') ? 'text-emerald-600' : 'text-gray-500'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* ── 3. Tabs ── */}
        <div className="flex items-center gap-2 mb-10 border-b border-gray-200 pb-px">
          {["All Content", "Carousels", "Static Posts", "Reels", "Stories"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-4 text-sm font-semibold transition-all relative ${
                activeTab === tab.toLowerCase() ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
              )}
            </button>
          ))}
        </div>

        {/* ── 4. Content Gallery (Masonry) ── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 pb-20">
          
          {/* Carousel Type (Stacked Cards) */}
          <div className="break-inside-avoid">
            <GlassCard className="group cursor-pointer p-3 pb-6 relative">
              {/* Status Badge */}
              <div className="absolute top-6 left-6 z-20 flex gap-2">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-pink-500" />
                  Carousel
                </span>
                <span className="bg-emerald-500/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-sm">
                  Approved
                </span>
              </div>

              {/* Stacked Images container */}
              <div 
                className="relative w-full aspect-square mb-6 perspective-1000"
                onClick={() => setLightbox(carouselImages[0])}
              >
                {carouselImages.slice(0, 3).map((src, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-out group-hover:shadow-2xl bg-gray-100"
                    style={{
                      transform: `translateY(${i * 8}px) scale(${1 - i * 0.05})`,
                      zIndex: 10 - i,
                      transformOrigin: 'top center',
                      opacity: 1 - i * 0.15
                    }}
                  >
                    <Image src={src} alt="Carousel slide" fill className="object-cover" />
                    {i === 0 && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    )}
                  </div>
                ))}
                
                {/* Page indicator on hover */}
                <div className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 shadow-lg">
                  1 / {carouselImages.length}
                </div>
              </div>

              {/* Card Meta */}
              <div className="px-3">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Brand Story Series</h4>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed">Educational carousel explaining the core pillars of brand strategy.</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-1.5"><Heart className="w-4 h-4" /> 1.2k</span>
                    <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 84</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-bold flex items-center gap-1">
                    Review <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Static Post Types */}
          {staticImages.map((src, idx) => (
            <div key={idx} className="break-inside-avoid">
              <GlassCard className="group cursor-pointer relative overflow-hidden">
                <div className="relative w-full aspect-[4/5] bg-gray-100" onClick={() => setLightbox(src)}>
                  <Image src={src} alt={`Post ${idx}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 shadow-sm flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5 text-blue-500" />
                      Post
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-white font-bold text-lg">Product Launch</h4>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}

          {/* Reels Empty State / Placeholder */}
          <div className="break-inside-avoid">
            <GlassCard className="p-8 flex flex-col items-center justify-center text-center aspect-[4/5] bg-gradient-to-b from-white to-gray-50 border-dashed border-2 border-gray-200">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Upload Reel</h4>
              <p className="text-sm text-gray-500 mb-8 max-w-[200px]">Drag and drop your 9:16 video content here.</p>
              <button className="bg-white border border-gray-200 shadow-sm text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:shadow-md transition-shadow">
                Browse Files
              </button>
            </GlassCard>
          </div>
        </div>

        {/* ── 5. Content Calendar (Minimal List View) ── */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Upcoming Schedule</h3>
            <button className="text-gray-500 hover:text-gray-900 text-sm font-semibold flex items-center gap-2">
              View Calendar <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <GlassCard className="p-2">
            {[
              { date: "Today, 10:00 AM", title: "Brand Strategy Carousel", platform: "Instagram", status: "Ready to Post", color: "text-emerald-600", bg: "bg-emerald-50" },
              { date: "Tomorrow, 2:30 PM", title: "Client Testimonial Reel", platform: "Instagram", status: "In Review", color: "text-amber-600", bg: "bg-amber-50" },
              { date: "Thu, 11:00 AM", title: "Weekly Tips Graphic", platform: "LinkedIn", status: "Draft", color: "text-gray-500", bg: "bg-gray-100" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 md:p-6 hover:bg-gray-50 rounded-2xl transition-colors border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-gray-50 text-gray-400">
                    <Calendar className="w-5 h-5 mb-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {item.date}</span>
                      <span className="hidden sm:flex items-center gap-1.5 text-gray-300">•</span>
                      <span className="hidden sm:flex items-center gap-1.5">{item.platform}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${item.color} ${item.bg}`}>
                    {item.status}
                  </span>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-white hover:shadow-md hover:text-gray-900 transition-all">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </GlassCard>
        </div>

      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative max-w-5xl w-full flex justify-center shadow-2xl rounded-2xl overflow-hidden bg-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Preview"
                className="max-w-full h-auto object-contain max-h-[90vh] rounded-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-gray-900 hover:scale-110 transition-transform shadow-lg"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
