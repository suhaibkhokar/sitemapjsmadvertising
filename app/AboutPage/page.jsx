"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Sparkles,
  Lightbulb,
  Rocket,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen text-white px-0 py-0 overflow-hidden flex flex-col items-center justify-center">
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
      <Link href="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full shadow-lg border border-yellow-400/30 hover:bg-yellow-400 hover:text-black transition">
        <ArrowLeft size={18} className="text-yellow-400" />
        <span className="text-sm font-semibold">Back to Home</span>
      </Link>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
        className="text-5xl md:text-6xl font-black tracking-tight text-center mb-6 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-xl relative"
      >
        About <span className="text-yellow-400">JSM Advertising</span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-full blur-sm opacity-60"></span>
      </motion.h1>

      {/* Animated Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-200 text-center max-w-2xl mx-auto text-lg font-medium mb-8"
      >
        We are a creative advertising & signage company based in Lahore.<br />
        <span className="text-yellow-400 font-semibold">LED Boards, Signage, 3D Letters, Acrylic Boards, Branding & Digital Printing.</span><br />
        Delivering powerful designs for <span className="text-pink-400 font-bold">10+ years!</span>
      </motion.p>

      {/* Animated Services Strip */}
      <div className="mt-4 overflow-hidden whitespace-nowrap border-y border-yellow-400/20 py-4 w-full">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="inline-block text-xl text-yellow-200 font-semibold tracking-wide"
        >
          🚀 LED SIGN BOARDS • 3D LETTERS • SHOP BRANDING • FLEX PRINTING • ACRYLIC BOARDS • DIGITAL SIGNAGE • ONE-WAY VISION • NEON LIGHTS • BRANDING SOLUTIONS •{' '}
        </motion.div>
      </div>
      <div className="relative min-h-screen px-6 py-20 overflow-hidden flex items-center justify-center">
        {/* Animated Gradient Background Overlays */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-red-500/30 to-yellow-400/20 rounded-full blur-3xl animate-pulse z-0"></div>
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-yellow-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse z-0"></div>

        {/* Glassmorphic Card */}
        <div className="glass relative z-10 max-w-3xl w-full mx-auto p-10 md:p-16 flex flex-col items-center shadow-2xl border border-white/10">
          {/* Back Button */}
          <Link href="/" className="absolute top-6 left-6 z-20">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full hover:bg-red-500/80 hover:text-white transition border border-white/10 shadow-lg">
              <ArrowLeft size={18} className="text-yellow-400" />
              <span className="text-sm font-semibold">Back to Home</span>
            </div>
          </Link>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            About <span className="text-yellow-400">JSM Advertising</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-200 text-center max-w-2xl mx-auto text-lg font-medium mb-6"
          >
            We are a creative advertising & signage company based in Lahore.<br />
            <span className="text-red-400 font-semibold">LED Boards, Signage, 3D Letters, Acrylic Boards, Branding & Digital Printing.</span><br />
            Delivering powerful designs for <span className="text-yellow-400 font-bold">10+ years!</span>
          </motion.p>

          {/* Animated Services Strip */}
          <div className="mt-10 overflow-hidden whitespace-nowrap border-y border-white/10 py-4 w-full">
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="inline-block text-xl text-gray-100 font-semibold tracking-wide"
            >
              🚀 LED SIGN BOARDS • 3D LETTERS • SHOP BRANDING • FLEX PRINTING • ACRYLIC BOARDS • DIGITAL SIGNAGE • ONE-WAY VISION • NEON LIGHTS • BRANDING SOLUTIONS •{' '}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-red-500/20 shadow-lg"
        >
          <Star size={40} className="text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">10+ Years Experience</h2>
          <p className="text-gray-300">Thousands of successful signboards & branding projects delivered across Lahore.</p>
        </motion.div>

        {/* Quality */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-red-500/20 shadow-lg"
        >
          <CheckCircle size={40} className="text-green-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Premium Quality</h2>
          <p className="text-gray-300">We use high-grade materials, imported LEDs, & quality machines.</p>
        </motion.div>

        {/* Creativity */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-red-500/20 shadow-lg"
        >
          <Sparkles size={40} className="text-red-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Creative Designs</h2>
          <p className="text-gray-300">Every design is crafted with attention, branding strategy & modern touch.</p>
        </motion.div>
      </div>

      {/* 🎖 WHY CHOOSE US */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="max-w-5xl mx-auto mt-20 bg-gray-800 p-10 rounded-xl border border-gray-700 shadow-xl"
      >
        <h2 className="text-3xl font-bold text-red-500 mb-6">Why Choose JSM?</h2>

        <div className="space-y-4">
          {[
            "Fast Production & On-Time Delivery",
            "Custom Designs for Every Business",
            "Premium Materials & Long-lasting LED Lights",
            "Professional Installation Team",
            "Affordable & Market-Competitive Prices",
            "100% Satisfaction Guaranteed",
          ].map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <CheckCircle className="text-red-400" />
              <span className="text-gray-300">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🕒 COMPANY TIMELINE */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-red-500 mb-6">Our Journey</h2>

        <div className="border-l border-gray-700 pl-6 space-y-8">

          {/* Timeline Item */}
          {[
            { year: "2014", text: "JSM Advertising started operations in Lahore." },
            { year: "2016", text: "Installed 500+ signboards across Punjab." },
            { year: "2019", text: "Expanded to 3D letters & acrylic LED signage." },
            { year: "2022", text: "Corporate branding & digital signage added." },
            { year: "2024", text: "Completed 1500+ projects with client repeat rate of 90%." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
            >
              <h3 className="text-xl font-bold text-yellow-400">{item.year}</h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FINAL CTA */}
      <div className="text-center mt-24">
        <Link href="/aboutcontact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-red-600 to-yellow-500 px-8 py-4 rounded-xl text-white text-xl font-semibold shadow-xl"
          >
            Contact Us for Your Project
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
