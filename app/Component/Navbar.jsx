"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutPage" },
    { name: "Services", path: "/service" },
       { name: "Pictures", path: "/pictures"},
    { name: "Contact", path: "/contacts"},
{ name: "Testimonials", path: "/testimonials" }
  ];


  return (
    <header className="w-full sticky top-0 z-50 bg-transparent">
      {/* Animated Glowing Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 h-32 w-full pointer-events-none z-0"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-32 bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 blur-2xl opacity-40 animate-pulse rounded-full"></div>
      </motion.div>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        className="glass flex items-center justify-between px-4 sm:px-10 py-3 mx-2 mt-2 shadow-2xl border border-white/10 backdrop-blur-lg relative z-10"
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
      >
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 120 }}
          className="flex items-center gap-2 cursor-pointer group"
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <motion.img
            src="/Navbar Jsm.png"
            alt="JSM Logo"
            className="w-20 h-24 sm:w-24 sm:h-24 drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
          <span className="text-2xl sm:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              JSM Advertising
            </motion.span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-bold text-lg">
          {menuItems.map((item, idx) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.08 }}
              whileHover={{ scale: 1.15, rotate: -2 }}
            >
              <Link
                href={item.path}
                className="animated-underline px-2 py-1 transition-all duration-300 cursor-pointer hover:text-yellow-400 relative"
              >
                <motion.span
                  whileHover={{ color: '#ffea00', scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-red-500 bg-white/10 p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.85, rotate: 10 }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 120 }}
            className="md:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-br from-black/90 via-red-900/80 to-yellow-900/80 backdrop-blur-2xl z-50 flex flex-col items-center justify-center"
          >
            <motion.button
              className="absolute top-6 right-8 text-white bg-red-500 p-2 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition-all"
              onClick={() => setMenuOpen(false)}
              whileTap={{ scale: 0.85, rotate: 10 }}
            >
              <X size={28} />
            </motion.button>
            <ul className="flex flex-col gap-8 text-2xl font-extrabold">
              {menuItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ scale: 1.2, color: '#ffea00' }}
                >
                  <Link
                    href={item.path}
                    className="animated-underline px-4 py-2 transition-all duration-300 cursor-pointer hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    <motion.span
                      whileHover={{ color: '#ffea00', scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
