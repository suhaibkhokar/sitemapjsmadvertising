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

  const expoCenterImages = [
    "/expo.jpeg",
  "/expo1.jpeg",
  "/expo2.jpeg",
  "/expo3.jpeg",
  "/expo4.jpeg",
  "/expo5.jpeg",
];
  return (

    <div className="relative min-h-screen text-white px-4 sm:px-8 py-16 overflow-hidden flex flex-col items-center">
      {/* Animated Colorful Layered Backgrounds */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-red-500/30 via-yellow-400/20 to-pink-500/30 blur-2xl animate-pulse"
          initial={{ x: -200 }}
          animate={{ x: [0, 100, -100, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-32 left-0 w-full h-32 bg-gradient-to-r from-pink-500/20 via-blue-400/20 to-yellow-400/20 blur-2xl animate-pulse"
          initial={{ x: 100 }}
          animate={{ x: [-100, 0, 100, -100] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-pink-500/20 blur-2xl animate-pulse"
          initial={{ x: 0 }}
          animate={{ x: [100, -100, 0, 100] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>


      {/* Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full shadow-lg border border-yellow-400/30 hover:bg-yellow-400 hover:text-black transition"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-semibold">Back</span>
      </Link>

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <span className="relative z-10">Our <span className="text-yellow-400">Work Gallery</span></span>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-full blur-sm opacity-60"></span>
        </motion.h1>
        <p className="text-gray-200 mt-3 text-lg font-medium animate-fade-in">
          Premium glass, boards & branding installations by JSM Advertising
        </p>
        <div className="mx-auto mt-3 h-[3px] w-32 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-full animate-pulse"></div>
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

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 relative z-10"
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
        {stairsGlassImages.map((img, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
            }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.97, rotate: -2 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl overflow-hidden group border-2 border-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-500"
            style={{ boxShadow: '0 8px 32px 0 rgba(255, 234, 0, 0.10)' }}
          >
            <img
              src={img}
              alt="Stairs Glass Plotter"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-yellow-400">
                Stairs Glass Plotter
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

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

      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 relative z-10"
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
        {neonSignImages.map((img, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
            }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.97, rotate: -2 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl overflow-hidden group border-2 border-pink-400/20 hover:shadow-pink-400/40 transition-all duration-500"
            style={{ boxShadow: '0 8px 32px 0 rgba(236, 72, 153, 0.10)' }}
          >
            <img
              src={img}
              alt="Neon Sign Board"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-pink-400 tracking-wide drop-shadow-[0_0_8px_rgba(236,72,153,0.9)]">
                Neon Sign Board
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* ================= Expo Center Project ================= */}
<motion.h2
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-2xl font-bold text-blue-500 mb-6 border-l-4 border-blue-500 pl-4 relative z-10"
>
  Expo Center Project
</motion.h2>


      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20 relative z-10"
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
        {expoCenterImages.map((img, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
            }}
            whileHover={{ scale: 1.07, rotate: 1 }}
            whileTap={{ scale: 0.97, rotate: -2 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl overflow-hidden group border-2 border-blue-400/20 hover:shadow-blue-400/40 transition-all duration-500"
            style={{ boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.10)' }}
          >
            <img
              src={img}
              alt="Expo Center Project"
              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-blue-400">
                Expo Center Project
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Us Button - Bold Animated */}
      <div className="w-full flex justify-center mt-10 mb-4 z-20">
        <Link
          href="/contacts"
          className="bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 px-10 py-4 rounded-full font-bold text-black text-xl shadow-xl hover:scale-110 transition-transform duration-300 border-2 border-yellow-400/40 animate-pulse"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
}
