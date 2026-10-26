"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Star, Heart, ArrowRight, LayoutGrid, PanelTop, Gamepad2, Monitor, Waypoints, Store } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    { src: "/portfoliowork.jpeg", name: "3D Board", desc: "Premium 3D sign board, expertly crafted with high-grade materials.", rating: 5, category: "3D Letters" },
    { src: "/worksimage1.jpeg", name: "Neon Board", desc: "Bright neon signage for outdoor and indoor branding with long-lasting glow.", rating: 5, category: "Neon Signs" },
    { src: "/workimages2.jpeg", name: "Neon Board", desc: "Custom neon designs tailored for shop branding.", rating: 4, category: "Neon Signs" },
    { src: "/workimages3.jpeg", name: "Neon Board", desc: "Vibrant neon boards for high-impact visuals.", rating: 5, category: "Neon Signs" },
    { src: "/workimages4.jpeg", name: "Neon Board", desc: "Durable neon signage with professional installation.", rating: 5, category: "Neon Signs" },
    { src: "/workimages5.jpeg", name: "3D Board", desc: "High-quality 3D boards for offices and shops.", rating: 5, category: "3D Letters" },
    { src: "/workimages6.jpeg", name: "Neon Board", desc: "Eye-catching neon branding for events and shops.", rating: 4, category: "Neon Signs" },
    { src: "/workimages7.jpeg", name: "Neon Board", desc: "Custom neon letters and logos.", rating: 5, category: "Neon Signs" },
    { src: "/workimages8.jpeg", name: "3D Board", desc: "Modern 3D boards for premium branding.", rating: 5, category: "3D Letters" },
    { src: "/workimages9.jpg", name: "3D Board", desc: "Expertly designed 3D boards with finishing.", rating: 5, category: "3D Letters" },
    { src: "/workimages10.webp", name: "3D Board", desc: "High-end 3D boards with strong durability.", rating: 5, category: "3D Letters" },
    { src: "/workimages11.webp", name: "3D SMD Board", desc: "Premium 3D signage with professional installation.", rating: 5, category: "3D Letters" },
    { src: "/expo.jpeg", name: "Expo Center Project", desc: "Modern 3D boards for premium branding.", rating: 5, category: "3D Letters" },
    { src: "/expo1.jpeg", name: "Expo Center Project", desc: "Expertly designed 3D boards with finishing.", rating: 5, category: "3D Letters" },
    { src: "/expo4.jpeg", name: "Expo Center Project", desc: "High-end 3D boards with strong durability.", rating: 5, category: "3D Letters" },
    { src: "/expo5.jpeg", name: "Expo Center Project", desc: "Premium 3D signage with professional installation.", rating: 5, category: "3D Letters" },
    { src: "/Road Direction Sign.png", name: "Road Direction Sign Board", desc: "Road direction sign board installation.", rating: 5, category: "Outdoor Branding" },
    { src: "/Road Direction Sign2.png", name: "Road Direction Sign Board", desc: "Road direction sign board installation.", rating: 5, category: "Outdoor Branding" },
    { src: "/Road Direction SIgn3.png", name: "Road Direction Sign Board", desc: "Road direction sign board installation.", rating: 5, category: "Outdoor Branding" },
    { src: "/wall branding.png", name: "Wall Branding", desc: "Custom wall branding and interior graphics.", rating: 5, category: "Outdoor Branding" },
    { src: "/wall branding2.png", name: "Wall Branding", desc: "Custom wall branding and interior graphics.", rating: 5, category: "Outdoor Branding" },
    { src: "/wall branding3.png", name: "Wall Branding", desc: "Custom wall branding and interior graphics.", rating: 5, category: "Outdoor Branding" },
    { src: "/Hoding Sign Board.png", name: "Hoding Sign Board", desc: "Large-format outdoor holding sign board.", rating: 5, category: "Outdoor Branding" },
    { src: "/Vinyl Pasting.png", name: "Vinyl Pasting", desc: "Professional vinyl printing and pasting.", rating: 5, category: "Outdoor Branding" },
    { src: "/vinyl pasting2.png", name: "Vinyl Pasting", desc: "Professional vinyl printing and pasting.", rating: 5, category: "Outdoor Branding" },
    { src: "/vinyl pasting3.png", name: "Vinyl Pasting", desc: "Professional vinyl printing and pasting.", rating: 5, category: "Outdoor Branding" },
  ];

  const categories = [
    { name: "All Works", icon: <LayoutGrid size={16} /> },
    { name: "3D Letters", icon: <PanelTop size={16} /> },
    { name: "Neon Signs", icon: <Gamepad2 size={16} /> },
    { name: "LED Boards", icon: <Monitor size={16} /> },
    { name: "Pylon Signs", icon: <Waypoints size={16} /> },
    { name: "Outdoor Branding", icon: <Store size={16} /> },
  ];

  // Category color mapping for badges and borders
  const categoryColors = {
    "3D Letters": "bg-red-900/50 text-red-400 border-red-500/50",
    "Neon Signs": "bg-orange-900/50 text-orange-400 border-orange-500/50",
    "LED Boards": "bg-cyan-900/50 text-cyan-400 border-cyan-500/50",
    "Pylon Signs": "bg-purple-900/50 text-purple-400 border-purple-500/50",
    "Outdoor Branding": "bg-green-900/50 text-green-400 border-green-500/50",
  };

  const [selectedCategory, setSelectedCategory] = useState("All Works");
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All Works" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="mt-24 scroll-mt-24 relative z-10 overflow-hidden bg-[#020617] min-h-screen pb-20">
      
      {/* --- Header Area --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto px-4 mb-10"
      >
        <motion.h4 
          className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Portfolio
        </motion.h4>
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Our Premium <span className="text-red-500">Portfolio</span>
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-lg mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A collection of our premium sign boards and outdoor branding work.
        </motion.p>
        <div className="mx-auto mt-4 h-[2px] w-16 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
      </motion.div>

      {/* --- Filter Buttons --- */}
      <motion.div 
        className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
          }
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            onClick={() => setSelectedCategory(cat.name)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border text-sm font-semibold transition-all duration-300 ${
              selectedCategory === cat.name
                ? "bg-red-600/20 border-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                : "bg-[#1e293b]/80 border-transparent text-gray-400 hover:bg-[#1e293b] hover:text-white"
            }`}
          >
            {cat.icon}
            {cat.name}
          </motion.button>
        ))}
      </motion.div>

      {/* --- Portfolio Grid --- */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.1,
            },
          },
        }}
      >
        {filteredProjects.map((project, i) => {
          // Determine color scheme based on category
          const colorClass = categoryColors[project.category] || "bg-gray-800 text-gray-400 border-gray-700";
          const borderColor = colorClass.split(" ").pop(); // Extract border class

          return (
            <motion.div
              key={i}
              className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-[#1e293b] hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
              }}
              whileHover={{ y: -5, borderColor: borderColor || "transparent" }}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <motion.img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Top Left Category Badge */}
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${colorClass}`}>
                  {project.category}
                </div>

                {/* Top Right Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-white/20 transition-colors">
                  <ArrowRight size={14} className="rotate-45" />
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-1">{project.name}</h3>
                <p className="text-gray-400 text-xs mb-4 flex-1 line-clamp-2">{project.desc}</p>
                
                {/* Bottom Action Bar */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                  <span className="flex items-center gap-1 text-red-400 text-xs font-semibold hover:text-red-300 transition-colors">
                    View Details <ArrowRight size={14} />
                  </span>
                  <button 
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Heart size={18} className="hover:fill-current" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#0f172a] rounded-2xl shadow-2xl max-w-4xl w-full h-[min(84vh,680px)] md:h-[min(72vh,520px)] max-h-[calc(100dvh-2rem)] flex flex-col md:flex-row overflow-hidden border border-red-500/30"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, type: 'spring' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left: Image */}
              <div className="w-full h-[36%] md:h-full md:w-3/5 md:flex-none relative overflow-hidden bg-gray-900">
                <img
                  src={selectedProject.src}
                  alt={selectedProject.name}
                  className="w-full h-full object-contain"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60 md:hidden"></div>
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[#0f172a] text-white relative min-h-0 overflow-y-auto">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black/30 p-1 rounded-full transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={24} />
                </button>

                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border ${categoryColors[selectedProject.category] || "bg-gray-800 text-gray-400 border-gray-700"}`}>
                    {selectedProject.category}
                  </div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.name}</h2>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{selectedProject.desc}</p>

                  <div className="flex items-center gap-1 mb-6">
                    <span className="text-xs text-gray-500 mr-2">Rating:</span>
                    {Array.from({ length: selectedProject.rating }).map((_, idx) => (
                      <Star key={idx} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] text-sm w-full">
                  Request Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}