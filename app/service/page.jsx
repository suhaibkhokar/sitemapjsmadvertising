"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Wrench, PenTool, Lightbulb, Code, Hammer,
  Layers, Building2, Sparkles, Image as ImgIcon, Monitor,
  ArrowLeft
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench size={40} />, title: "Sign Board Design & Installation", desc: "Premium metal, acrylic, SS, GI & 3D sign boards. Full manufacturing + installation.",
      img: "/workimages9.jpg"
    },
    {
      icon: <Lightbulb size={40} />, title: "LED & Neon Signage", desc: "Super bright LED, neon flex, edge-lit & backlit signage with durable quality.",
      img: "/workimages3.jpeg"
    },
    {
      icon: <Layers size={40} />, title: "Acrylic / 3D Letters", desc: "3D embossed, SS letters, acrylic glowing letters for shop & office branding.",
      img: "/workimages8.jpeg"
    },
    {
      icon: <Hammer size={40} />, title: "Shop & Office Interior", desc: "Wall panels, interior branding, wooden work & complete renovation.",
      img: "/expo1.jpeg"
    },
    {
      icon: <PenTool size={40} />, title: "Brand Logo & Identity", desc: "Custom logo, color palette, typography & complete brand guide.",
      img: "/homepageportfolio.jpeg"
    },
    {
      icon: <Monitor size={40} />, title: "Digital Screens & LED Walls", desc: "Indoor/outdoor LED screens & digital boards installation.",
      img: "/workimages10.webp"
    },
    {
      icon: <Building2 size={40} />, title: "Franchise / Corporate Branding", desc: "Full company branding, interior, exterior, signage & merch.",
      img: "/expo4.jpeg"
    },
    {
      icon: <ImgIcon size={40} />, title: "Printing & Marketing Materials", desc: "Brochures, business cards, flyers, banners, packaging & uniforms.",
      img: "/workimages5.jpeg"
    },
    {
      icon: <Code size={40} />, title: "Website & Online Store", desc: "Business websites, ecommerce stores, SEO & booking systems.",
      img: "/homepage first.webp"
    }
  ];

  return (
    <section className="min-h-screen text-white relative overflow-hidden flex flex-col">
      {/* Animated Colorful Layered Backgrounds */}
      <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-blue-500/30 via-yellow-400/20 to-pink-500/30 blur-2xl animate-pulse"
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
          className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-r from-yellow-400/20 via-blue-500/20 to-pink-500/20 blur-2xl animate-pulse"
          initial={{ x: 0 }}
          animate={{ x: [100, -100, 0, 100] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* HERO IMAGE & Animated Heading */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px] mb-16 flex items-center justify-center">
        <Image
          src="/homepage first.webp"
          alt="Services Banner"
          fill
          className="object-cover opacity-80 rounded-b-3xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-b-3xl"></div>

        <Link href="/" className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full shadow-lg border border-blue-400/30 hover:bg-blue-400 hover:text-black transition">
          <ArrowLeft size={18} className="text-blue-400" />
          <span className="text-sm font-semibold">Back</span>
        </Link>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-xl relative mb-4"
          >
            <span className="relative z-10">Our <span className="text-blue-400">Services</span></span>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-pink-500 rounded-full blur-sm opacity-60"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-200 mt-3 max-w-md sm:max-w-xl md:max-w-2xl text-base sm:text-lg font-medium"
          >
            Complete signage, branding, interior & digital solutions under one roof.
          </motion.p>
        </div>
      </div>

      {/* SERVICE GRID - Heavy Animated Image Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 mt-8">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/30 group hover:scale-105 hover:shadow-blue-400/30 transition-all duration-300 bg-gradient-to-br from-blue-900/60 via-black/60 to-pink-900/40"
            style={{ minHeight: 340 }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover opacity-80 group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
            <div className="absolute top-6 left-6 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-yellow-400 to-pink-500 shadow-lg border-2 border-white/20">
              {item.icon}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-black/60 backdrop-blur-xl rounded-b-3xl z-10">
              <h2 className="text-2xl font-extrabold text-white mb-2 drop-shadow-lg">{item.title}</h2>
              <p className="text-gray-200 text-base font-medium mb-1">{item.desc}</p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 rounded-full mt-3 animate-pulse"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* IMAGE GALLERY SECTION - Animated Card Grid */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-20 sm:my-28">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-400 text-center drop-shadow-lg">Our Work Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            "/workimages9.jpg",
            "/workimages3.jpeg",
            "/workimages8.jpeg",
            "/expo1.jpeg",
            "/homepageportfolio.jpeg",
            "/workimages10.webp",
            "/expo4.jpeg",
            "/workimages5.jpeg",
            "/homepage first.webp"
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.10 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/20 bg-gradient-to-br from-blue-900/60 via-black/60 to-pink-900/40 group hover:scale-105 transition-all duration-300 min-h-[220px] flex items-end"
              style={{ aspectRatio: '1/1' }}
            >
              <Image
                src={img}
                alt="Gallery Work"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="relative w-full p-4 bg-black/60 backdrop-blur-xl rounded-b-2xl z-10 flex items-center justify-center">
                <span className="text-white text-base font-semibold bg-gradient-to-r from-blue-400 via-yellow-400 to-pink-500 bg-clip-text text-transparent">Gallery Work</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FINAL CTA - Animated Button */}
      <div className="text-center py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-blue-500 via-yellow-400 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition px-10 sm:px-14 py-4 sm:py-5 rounded-2xl text-lg sm:text-2xl font-bold shadow-2xl text-black animate-pulse"
          >
            Contact Us For Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
