"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopBar() {
  const messages = [
    "📢 Welcome to JSM Advertising – Digital Excellence Redefined!",
    "📞 Call Us: 03228010046",
    "🚀 Elevate Your Brand with Creative Advertising in Lahore!"
  ];

  const [index, setIndex] = useState(0);

  const nextMessage = () => setIndex((prev) => (prev + 1) % messages.length);
  const prevMessage = () =>
    setIndex((prev) => (prev - 1 + messages.length) % messages.length);

  useEffect(() => {
    const interval = setInterval(() => nextMessage(), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-red-600 via-black to-red-600 text-white text-sm font-semibold py-2 flex items-center justify-center relative overflow-hidden shadow-md">
      <button
        onClick={prevMessage}
        className="absolute left-3 p-1 hover:scale-110 transition-transform"
      >
        <ChevronLeft size={18} />
      </button>

      <div className="w-[90%] text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {messages[index].includes("03228010046") ? (
              <a
                href="tel:03228010046"
                className="underline hover:text-yellow-300 transition-colors"
              >
                {messages[index]}
              </a>
            ) : (
              messages[index]
            )}
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={nextMessage}
        className="absolute right-3 p-1 hover:scale-110 transition-transform"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
