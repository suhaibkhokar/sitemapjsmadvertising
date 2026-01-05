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
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16">
      
      {/* Back Button */}
      <Link href="/" className="absolute top-6 left-6">
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full border border-gray-700">
          <ArrowLeft size={18} className="text-blue-400" />
          <span>Back to Home</span>
        </div>
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-10"
      >
        Contact <span className="text-blue-400">Us</span>
      </motion.h1>

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl border border-gray-700 shadow-xl space-y-6">

        {/* Name */}
        <div>
          <label className="text-sm text-gray-400">Your Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 mt-1 rounded-lg bg-black border border-gray-700 focus:border-blue-500 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Client Phone */}
        <div>
          <label className="text-sm text-gray-400">Your Phone Number</label>
          <input
            type="number"
            placeholder="03XX-XXXXXXX"
            className="w-full px-4 py-3 mt-1 rounded-lg bg-black border border-gray-700 focus:border-blue-500 outline-none"
            value={clientNumber}
            onChange={(e) => setClientNumber(e.target.value)}
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-400">Your Message</label>
          <textarea
            rows="5"
            placeholder="Write about your project..."
            className="w-full px-4 py-3 mt-1 rounded-lg bg-black border border-gray-700 focus:border-blue-500 outline-none"
            value={clientMessage}
            onChange={(e) => setClientMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Send Button */}
        <button
          onClick={sendToWhatsApp}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} /> Send to WhatsApp Business
        </button>

      </div>
    </section>
  );
}
