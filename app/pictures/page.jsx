"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PicturesPage() {

  const stairsGlassImages = [
    "/stairs ploter.jpeg",
    "/stairs ploter2.jpeg",
    "/stairs ploter3.jpeg",
    "/stairs ploter4.jpeg",
    "/stairs ploter5.jpeg",
    "/stairs ploter6.jpg",
    "/stairs ploter7.jpg",
    "/stairs ploter8.jpg",
  ];

  const neonSignImages = [
    "/neonsign.webp",
    "/neonsign1.webp",
    "/neonsign2.webp",
    "/neonsign3.webp",
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-white px-4 sm:px-8 py-16 overflow-hidden">

      {/* 🔥 Glowing Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* 🔙 BACK BUTTON */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-black/80 text-white px-4 py-2 rounded-full shadow-lg hover:bg-black transition"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Back</span>
      </Link>

      {/* 🔹 Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl font-extrabold text-red-500">
          Our Work Gallery
        </h1>
        <p className="text-gray-300 mt-3">
          Premium glass, boards & branding installations by JSM Advertising
        </p>
      </motion.div>

      {/* ================= Stairs Glass Plotter ================= */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-red-500 mb-6 border-l-4 border-red-500 pl-4 relative z-10"
      >
        Stairs Glass Plotter
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 relative z-10">
        {stairsGlassImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 rounded-xl shadow-lg overflow-hidden group border border-gray-700"
          >
            <img
              src={img}
              alt="Stairs Glass Plotter"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-white">
                Stairs Glass Plotter
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= Neon Sign Board ================= */}
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-pink-500 mb-6 border-l-4 border-pink-500 pl-4 relative z-10"
      >
        Neon Sign Board
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10">
        {neonSignImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-gray-900/70 rounded-xl shadow-lg overflow-hidden group border border-gray-700"
          >
            <img
              src={img}
              alt="Neon Sign Board"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-pink-500 tracking-wide drop-shadow-[0_0_8px_rgba(236,72,153,0.9)]">
                Neon Sign Board
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
