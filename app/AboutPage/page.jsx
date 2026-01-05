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
    <div className="relative min-h-screen bg-gray-900 text-white px-6 py-20 overflow-hidden">

      {/* 🔥 Glowing Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Back Button */}
      <Link href="/" className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2 bg-gray-800/60 backdrop-blur-lg px-4 py-2 rounded-full 
        hover:bg-gray-700 transition border border-gray-700">
          <ArrowLeft size={18} className="text-red-400" />
          <span className="text-sm">Back to Home</span>
        </div>
      </Link>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-extrabold text-center mb-4"
      >
        About <span className="text-red-500">JSM Advertising</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 text-center max-w-3xl mx-auto text-lg"
      >
        We are a creative advertising & signage company based in Lahore.  
        Experts in <span className="text-red-400 font-semibold">
        LED Boards, Signage, 3D Letters, Acrylic Boards, Branding & Digital Printing.</span>  
        Delivering powerful designs for 10+ years!
      </motion.p>

      {/* 🔥 Auto-Scrolling Services Strip */}
      <div className="mt-10 overflow-hidden whitespace-nowrap border-y border-gray-700 py-4">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="inline-block text-xl text-gray-300 font-semibold tracking-wide"
        >
          🚀 LED SIGN BOARDS • 3D LETTERS • SHOP BRANDING • FLEX PRINTING • ACRYLIC BOARDS • DIGITAL SIGNAGE • ONE-WAY VISION • NEON LIGHTS • BRANDING SOLUTIONS •{" "}
        </motion.div>
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
    </div>
  );
}
