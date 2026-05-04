"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function ContactPage() {
  
  const [name, setName] = useState("");
  const [clientNumber, setClientNumber] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  // YOUR BUSINESS WHATSAPP NUMBER
  const WHATSAPP_BUSINESS_NUMBER = "923228010046"; // <-- Replace this only

  const sendToWhatsApp = () => {
    if (!name || !clientNumber || !clientMessage) {
      alert("Please fill all fields");
      return;
    }

    const text =
      `🌟 *New Client Inquiry — JSM Advertising* 🌟%0A%0A` +
      `👤 *Name:* ${name}%0A` +
      `📞 *Client Number:* ${clientNumber}%0A` +
      `💬 *Message:* ${clientMessage}%0A%0A` +
      `Sent via JSM Advertising Website 🚀`;

    window.open(
      `https://wa.me/${WHATSAPP_BUSINESS_NUMBER}?text=${text}`,
      "_blank"
    );
  };

  return (
    <section className="min-h-screen text-white px-6 py-16 flex flex-col items-center justify-center relative overflow-hidden">
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

      {/* Back Button */}
      <Link href="/" className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-black/80 px-4 py-2 rounded-full shadow-lg border border-blue-400/30 hover:bg-blue-400 hover:text-black transition">
        <ArrowLeft size={18} className="text-blue-400" />
        <span className="text-sm font-semibold">Back to Home</span>
      </Link>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
        className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-xl relative mb-10"
      >
        <span className="relative z-10">Contact <span className="text-blue-400">JSM Advertising</span></span>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-2/3 h-2 bg-gradient-to-r from-blue-500 via-yellow-400 to-pink-500 rounded-full blur-sm opacity-60"></span>
      </motion.h1>

      {/* Glassmorphic Animated Form */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 80 }}
        className="max-w-xl w-full mx-auto glass p-10 rounded-3xl border-2 border-blue-400/20 shadow-2xl space-y-8 backdrop-blur-xl bg-gradient-to-br from-blue-900/60 via-black/60 to-pink-900/40"
        style={{ boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.10)' }}
      >
        {/* Name */}
        <div>
          <label className="text-sm text-blue-300 font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 mt-1 rounded-lg bg-black/70 border border-blue-400/30 focus:border-blue-400 outline-none text-white font-semibold shadow-inner"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Client Phone */}
        <div>
          <label className="text-sm text-blue-300 font-semibold">Your Phone Number</label>
          <input
            type="number"
            placeholder="03XX-XXXXXXX"
            className="w-full px-4 py-3 mt-1 rounded-lg bg-black/70 border border-blue-400/30 focus:border-blue-400 outline-none text-white font-semibold shadow-inner"
            value={clientNumber}
            onChange={(e) => setClientNumber(e.target.value)}
          />
        </div>
        {/* Message */}
        <div>
          <label className="text-sm text-blue-300 font-semibold">Your Message</label>
          <textarea
            rows="5"
            placeholder="Write about your project..."
            className="w-full px-4 py-3 mt-1 rounded-lg bg-black/70 border border-blue-400/30 focus:border-blue-400 outline-none text-white font-semibold shadow-inner"
            value={clientMessage}
            onChange={(e) => setClientMessage(e.target.value)}
          ></textarea>
        </div>
        {/* Send Button */}
        <motion.button
          onClick={sendToWhatsApp}
          whileHover={{ scale: 1.05, background: 'linear-gradient(90deg,#38bdf8,#facc15,#ec4899)' }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-gradient-to-r from-blue-500 via-yellow-400 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-lg shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle size={22} /> Send to WhatsApp Business
        </motion.button>
      </motion.div>
    </section>
  );
}
