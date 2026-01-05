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
    { icon: <Wrench size={40} />, title: "Sign Board Design & Installation", desc: "Premium metal, acrylic, SS, GI & 3D sign boards. Full manufacturing + installation." },
    { icon: <Lightbulb size={40} />, title: "LED & Neon Signage", desc: "Super bright LED, neon flex, edge-lit & backlit signage with durable quality." },
    { icon: <Layers size={40} />, title: "Acrylic / 3D Letters", desc: "3D embossed, SS letters, acrylic glowing letters for shop & office branding." },
    { icon: <Hammer size={40} />, title: "Shop & Office Interior", desc: "Wall panels, interior branding, wooden work & complete renovation." },
    { icon: <PenTool size={40} />, title: "Brand Logo & Identity", desc: "Custom logo, color palette, typography & complete brand guide." },
    { icon: <Monitor size={40} />, title: "Digital Screens & LED Walls", desc: "Indoor/outdoor LED screens & digital boards installation." },
    { icon: <Building2 size={40} />, title: "Franchise / Corporate Branding", desc: "Full company branding, interior, exterior, signage & merch." },
    { icon: <ImgIcon size={40} />, title: "Printing & Marketing Materials", desc: "Brochures, business cards, flyers, banners, packaging & uniforms." },
    { icon: <Code size={40} />, title: "Website & Online Store", desc: "Business websites, ecommerce stores, SEO & booking systems." }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[500px] mb-16">
        <Image
          src="/homepage first.webp"
          alt="Services Banner"
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gray-900/50"></div>

        <Link href="/" className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-2 bg-gray-800/60 px-3 sm:px-4 py-2 rounded-xl border border-gray-700 hover:bg-gray-700 transition">
            <ArrowLeft size={18} className="text-red-500" />
            <span className="text-sm">Back</span>
          </div>
        </Link>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-500 leading-snug"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 mt-3 max-w-md sm:max-w-xl md:max-w-2xl text-base sm:text-lg"
          >
            Complete signage, branding, interior & digital solutions under one roof.
          </motion.p>
        </div>
      </div>

      {/* SERVICE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-xl hover:-translate-y-1 transition"
          >
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="text-red-500 mb-4">
              {item.icon}
            </motion.div>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white">{item.title}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              transition={{ delay: 0.4 }}
              className="mt-4 sm:mt-5 h-1 bg-red-500 rounded-full"
            />
          </motion.div>
        ))}
      </div>

      {/* IMAGE GALLERY SECTION */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto my-16 sm:my-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-red-500 text-center sm:text-left">Our Work Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            "/homepage first.webp",
            "/homepage.webp",
            "/homepageportfolio.jpeg",
            "/homeportfolio.jpeg",
            "/workimage1.webp"
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative w-full h-48 sm:h-52 md:h-60 lg:h-64 rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt="Gallery Work"
                fill
                className="object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="text-center py-16 sm:py-20">
        <Link
          href="/contact"
          className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 transition px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-xl"
        >
          Contact Us For Your Project
        </Link>
      </div>

    </div>
  );
}
