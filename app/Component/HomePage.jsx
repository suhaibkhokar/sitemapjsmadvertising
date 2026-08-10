"use client";

import Head from "next/head";
import { motion } from "framer-motion";
import PortfolioSection from "./PortfolioSection";

export default function HomePage() {
  
  const services = [
    {
      title: "Sign Board Design & Installation",
      desc: "Custom metal, acrylic and wooden signboards — designed & installed end-to-end.",
      icon: "🪧",
    },
    {
      title: "LED & Neon Signage",
      desc: "Bright, energy-efficient LED signs and neon-style lights for 24/7 visibility.",
      icon: "💡",
    },
    {
      title: "Shop & Building Branding",
      desc: "Full shopfront and fascia branding to make retail and commercial spaces pop.",
      icon: "🏢",
    },
    {
      title: "Vehicle Graphics",
      desc: "High-impact van and car wraps for moving advertisements.",
      icon: "🚗",
    },
  ];

  const testimonials = [
    {
      name: "Ali Traders",
      text: "Fantastic work — our storefront has never looked better. Professional & fast!",
    },
    {
      name: "Sana Boutique",
      text: "Excellent LED sign and installation. Great quality and reasonable price.",
    },
  ];

  return (
    <>
      {/* SEO HEAD */}
      <Head>
        <title>
          JSM Advertising | Sign Board & Outdoor Advertising Company in Pakistan
        </title>

        <meta
          name="description"
          content="JSM Advertising provides sign boards, LED signage, outdoor branding, vehicle graphics and digital advertising services in Pakistan."
        />

        <meta
          name="keywords"
          content="sign board company in Pakistan, LED signage, outdoor advertising, shop branding, vehicle graphics, digital advertising agency"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://jsmadvertising.com/" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-x-hidden">
        {/* ===== HERO WITH LAYERED IMAGE ===== */}
        <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />
          
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/30 to-orange-400/20 rounded-full blur-3xl z-0"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-orange-400/20 to-red-500/20 rounded-full blur-3xl z-0"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[75vh]">
              
              {/* LEFT - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="space-y-5 relative z-20"
              >
                {/* "MAKE YOUR BRAND UNFORGETTABLE" tag */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300 tracking-wider"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  MAKE YOUR BRAND UNFORGETTABLE
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
                >
                  <span className="text-white">Unforgettable</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-clip-text text-transparent bg-[length:200%] animate-gradient">
                    With JSM
                  </span>
                  <br />
                  <span className="text-white">Advertising</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
                >
                  We create impactful signage and branding solutions that help your business stand out, get noticed, and grow beyond expectations.
                </motion.p>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-full font-semibold text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
                  >
                    Get a Quote
                  </motion.a>
                  <motion.a
                    href="#portfolio"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 border-2 border-white/20 rounded-full font-semibold text-white hover:bg-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    Explore Our Work
                  </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex gap-8 pt-4 border-t border-white/10"
                >
                  <div>
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-xs text-gray-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-xs text-gray-500">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-gray-500">Client Satisfaction</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT - Layered Image (no card border, blending naturally) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="relative lg:-mr-12"
              >
                {/* Image without card border - naturally layered */}
                <div className="relative">
                  {/* Red/orange glow behind image */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-orange-500/15 to-red-500/20 rounded-3xl blur-2xl" />
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-500/10">
                    {/* Gradient overlay for blending */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10" />
                    
                    <img
                      src="/jsm.png"
                      alt="JSM Advertising premium signage solutions"
                      className="w-full h-[450px] md:h-[550px] object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    
                    {/* Subtle glow at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                  </div>
                </div>
                
                {/* Floating glow decorations - blending naturally */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl" />
              </motion.div>

            </div>
          </div>
        </header>

      
          {/* PORTFOLIO */}
          <PortfolioSection />

      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </>
  );
}