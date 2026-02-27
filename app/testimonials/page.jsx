"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Ali Khan",
      city: "Peshawar",
      text: "JSM Advertising ne hamari shop ka look bilkul change kar diya. Highly recommended!",
    },
    {
      name: "Usman Shah",
      city: "Mardan",
      text: "Neon sign aur glass work zabardast tha. On-time delivery!",
    },
    {
      name: "Ahmed Raza",
      city: "Swabi",
      text: "Professional team aur reasonable price. Dobara bhi kaam karwaon ga.",
    },
    {
      name: "Sara Malik",
      city: "Islamabad",
      text: "Creative ideas aur quality kaam. Har client ko recommend karungi!",
    },
    {
      name: "Hassan Ali",
      city: "Lahore",
      text: "Timely delivery aur great customer service. JSM is the best!",
    },
    {
      name: "Fatima Noor",
      city: "Karachi",
      text: "Highly skilled team! Our branding looks amazing now.",
    },
  ];

  const colors = [
    "from-red-500 to-pink-500",
    "from-purple-500 to-indigo-500",
    "from-green-400 to-teal-400",
    "from-yellow-400 to-orange-500",
    "from-blue-400 to-cyan-500",
    "from-pink-400 to-purple-500",
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 sm:px-8 py-20 relative overflow-hidden">

      {/* 🔥 Background Gradient Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      {/* 🔙 Back Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full hover:bg-black transition"
      >
        <ArrowLeft size={18} /> Back
      </Link>

      {/* Animated Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400">
          What Our Clients Say
        </h1>
        <p className="text-gray-300 mt-3 text-lg sm:text-xl">
          Real feedback from our happy clients across Pakistan
        </p>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-500">+120</h2>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-pink-500">+50</h2>
          <p className="text-gray-300">Happy Clients</p>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-500">+10</h2>
          <p className="text-gray-300">Years Experience</p>
        </div>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 50 }}
            className={`rounded-3xl p-6 shadow-xl border border-gray-700 bg-gradient-to-br ${colors[i % colors.length]} hover:scale-105 transform transition-all duration-500`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3 text-yellow-300">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>

            {/* Review Text */}
            <p className="text-white italic mb-4 text-lg">{r.text}</p>

            {/* Name */}
            <div className="border-t border-gray-400 pt-3 mt-3">
              <h3 className="font-bold text-white text-xl">{r.name}</h3>
              <p className="text-gray-200">{r.city}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Join our happy clients!
        </h2>
        <p className="text-gray-300 mb-6">
          Get your custom branding or glass installation today.
        </p>
        <Link
          href="/contacts"
          className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 px-8 py-3 rounded-full font-bold text-black hover:scale-105 transition-transform"
        >
          Get Free Quote
        </Link>
      </motion.div>

      {/* Floating Background Effects */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/2 left-10 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-1/3 right-10 w-56 h-56 rounded-full bg-green-400/20 blur-3xl"
      />
    </div>
  );
}