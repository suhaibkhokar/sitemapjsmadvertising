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
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="mt-24 scroll-mt-24 relative z-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-4xl font-extrabold text-white tracking-tight">
          <span className="text-red-500">Recent</span> Projects
        </h3>
        <p className="text-gray-300 mt-3 text-base md:text-lg">
          A selection of our premium sign boards and outdoor branding work.
        </p>
        <div className="mx-auto mt-3 h-[3px] w-24 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
      </motion.div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.src}
              alt={project.name}
              className="w-full h-56 object-cover rounded-t-2xl group-hover:scale-110 transition-transform duration-700"
            />
            <div className="bg-gray-900 rounded-b-2xl py-2 text-center shadow-inner">
              <h4 className="text-white font-semibold text-base">{project.name}</h4>
            </div>
          </motion.div>
        ))}
      </div>

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
