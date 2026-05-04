"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Star } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    { src: "/portfoliowork.jpeg", name: "3D Board", desc: "Premium 3D sign board, expertly crafted with high-grade materials.", rating: 5 },
    { src: "/worksimage1.jpeg", name: "Neon Board", desc: "Bright neon signage for outdoor and indoor branding with long-lasting glow.", rating: 5 },
    { src: "/workimages2.jpeg", name: "Neon Board", desc: "Custom neon designs tailored for shop branding.", rating: 4 },
    { src: "/workimages3.jpeg", name: "Neon Board", desc: "Vibrant neon boards for high-impact visuals.", rating: 5 },
    { src: "/workimages4.jpeg", name: "Neon Board", desc: "Durable neon signage with professional installation.", rating: 5 },
    { src: "/workimages5.jpeg", name: "3D Board", desc: "High-quality 3D boards for offices and shops.", rating: 5 },
    { src: "/workimages6.jpeg", name: "Neon Board", desc: "Eye-catching neon branding for events and shops.", rating: 4 },
    { src: "/workimages7.jpeg", name: "Neon Board", desc: "Custom neon letters and logos.", rating: 5 },
    { src: "/workimages8.jpeg", name: "3D Board", desc: "Modern 3D boards for premium branding.", rating: 5 },
    { src: "/workimages9.jpg", name: "3D Board", desc: "Expertly designed 3D boards with finishing.", rating: 5 },
    { src: "/workimages10.webp", name: "3D Board", desc: "High-end 3D boards with strong durability.", rating: 5 },
    { src: "/workimages11.webp", name: "3D SMD Board", desc: "Premium 3D signage with professional installation.", rating: 5 },
        { src: "/expo.jpeg", name: "Expo Center Project", desc: "Modern 3D boards for premium branding.", rating: 5 },
    { src: "/expo1.jpeg", name: "Expo Center Project", desc: "Expertly designed 3D boards with finishing.", rating: 5 },
    { src: "/expo4.jpeg", name: "Expo Center Project", desc: "High-end 3D boards with strong durability.", rating: 5 },
    { src: "/expo5.jpeg", name: "Expo Center Project", desc: "Premium 3D signage with professional installation.", rating: 5 },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="mt-24 scroll-mt-24 relative z-10 overflow-hidden">
      {/* Animated Colorful Layered Backgrounds */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        {/* Layer 1 */}
        <motion.div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-red-500/30 via-yellow-400/20 to-pink-500/30 blur-2xl animate-pulse"
          initial={{ x: -200 }}
          animate={{ x: [0, 100, -100, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        {/* Layer 2 */}
        <motion.div
          className="absolute top-32 left-0 w-full h-32 bg-gradient-to-r from-pink-500/20 via-blue-400/20 to-yellow-400/20 blur-2xl animate-pulse"
          initial={{ x: 100 }}
          animate={{ x: [-100, 0, 100, -100] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        {/* Layer 3 */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-pink-500/20 blur-2xl animate-pulse"
          initial={{ x: 0 }}
          animate={{ x: [100, -100, 0, 100] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      {/* Elegant Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h3
          className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <span className="relative z-10">Our <span className="text-yellow-400">Portfolio</span></span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-full blur-sm opacity-60"></span>
        </motion.h3>
        <p className="text-gray-200 mt-3 text-lg font-medium animate-fade-in">
          A selection of our premium sign boards and outdoor branding work.
        </p>
        <div className="mx-auto mt-3 h-[3px] w-32 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-full animate-pulse"></div>
      </motion.div>

      {/* Portfolio Grid - Heavy Animated */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.13,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer border-2 border-transparent hover:border-yellow-400 bg-gradient-to-br from-gray-900 via-gray-800 to-black hover:shadow-yellow-400/40 transition-all duration-500"
            onClick={() => setSelectedProject(project)}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
            }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.97, rotate: -2 }}
            style={{ boxShadow: '0 8px 32px 0 rgba(255, 234, 0, 0.10)' }}
          >
            <motion.div
              className="absolute inset-0 z-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-yellow-400/10 via-pink-500/10 to-red-500/10 blur-2xl opacity-60 animate-pulse"></div>
            </motion.div>
            <motion.img
              src={project.src}
              alt={project.name}
              className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-700 shadow-lg"
              whileHover={{ scale: 1.12, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <div className="bg-gray-950 rounded-b-3xl py-4 text-center shadow-inner border-t border-yellow-400/10">
              <h4 className="text-yellow-400 font-extrabold text-lg tracking-wide drop-shadow-lg animate-pulse">{project.name}</h4>
              <p className="text-gray-300 text-xs mt-1 mb-2 min-h-[40px]">{project.desc}</p>
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: project.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="text-yellow-400 drop-shadow" />
                ))}
              </div>
            </div>
            <motion.div
              className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg opacity-80 group-hover:scale-110 transition-transform duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
            >
              Featured
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {/* Compact Modal */}
<AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col md:flex-row overflow-hidden border border-red-500"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-48 md:h-auto relative overflow-hidden">
          <img
            src={selectedProject.src}
            alt={selectedProject.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between bg-gray-950 text-white">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold">{selectedProject.name}</h2>
            <button
              className="text-white p-1 rounded-full hover:bg-gray-800 transition"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-gray-300 text-sm mb-2">{selectedProject.desc}</p>

          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: selectedProject.rating }).map((_, idx) => (
              <Star key={idx} size={16} className="text-yellow-400" />
            ))}
          </div>

          <button className="bg-red-500 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 self-start text-sm">
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
