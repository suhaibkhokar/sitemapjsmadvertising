"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  ];

  return (
    <header className="w-full bg-black text-white shadow-lg sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 sm:px-8 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/Navbar Jsm.png"
            alt="JSM Logo"
            className="w-20 h-24 sm:w-24 sm:h-24"
          />
          <span className="text-lg sm:text-xl font-bold tracking-wide">
            <span className="text-red-500">JSM</span> Advertising
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className="hover:text-red-500 transition-all duration-300 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-500"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900 text-left py-4 border-t border-gray-800"
        >
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={item.path}
                className="flex justify-between items-center px-6 py-3 hover:bg-gray-800 transition-all cursor-pointer border-b border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-base font-medium">{item.name}</span>
                <ArrowRight className="text-red-500" size={18} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </header>
  );
}
