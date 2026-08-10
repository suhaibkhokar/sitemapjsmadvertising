"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Search, Phone, Home, User, LayoutGrid, Image as ImageIcon, BarChart3, Mail, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/AboutPage", icon: <User size={20} /> },
    { name: "Services", path: "/service", icon: <LayoutGrid size={20} /> },
    { name: "Pictures", path: "/pictures", icon: <ImageIcon size={20} /> },
    { name: "Contact", path: "/contacts", icon: <Mail size={20} /> },
    { name: "Testimonials", path: "/testimonials", icon: <BarChart3 size={20} /> }
  ];

  return (
    <header className="w-full sticky top-0 z-50">
      
      {/* --- DESKTOP NAVBAR --- */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        className="hidden md:flex items-center justify-between px-6 lg:px-10 py-2 bg-[#0A0A0A] border-b border-[#2a2a2a] relative z-50 h-[85px]"
      >
        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-40"></div>

        {/* Logo with Layering Effect */}
        <Link href="/" className="flex items-center gap-1 relative group">
          {/* Glowing Background Layer behind the logo */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-cyan-400/20 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Actual Logo Image (Made Bigger) */}
          <img src="/jsmhome.png" alt="JSM Logo" className="h-20 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-8 text-[15px] font-medium">
          {menuItems.slice(0, 6).map((item, idx) => (
            <li key={item.name} className="relative group">
              <Link 
                href={item.path} 
                className={`text-gray-300 hover:text-orange-500 transition-colors ${item.name === "Home" ? "text-orange-500" : ""}`}
              >
                {item.name}
              </Link>
              
              {/* Home Red Underline */}
              {item.name === "Home" && (
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors p-2 rounded-full border border-gray-700/70 hover:border-white/70">
            <Search size={18} />
          </button>
          <Link 
            href="/contacts" 
            className="bg-gradient-to-r from-[#ff4500] to-[#ff8c00] text-white font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,69,0,0.4)] transition-all"
          >
            Get a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.nav>

      {/* --- MOBILE HEADER --- */}
      <nav className="md:hidden flex items-center justify-between px-4 py-3 bg-[#0A0A0A] border-b border-[#2a2a2a] relative z-50">
        <Link href="/" className="relative group">
          {/* Glowing Layer for Mobile Logo */}
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/40 via-blue-500/30 to-cyan-400/20 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Mobile Logo (Made Bigger) */}
          <img src="/jsmhome.png" alt="JSM Logo" className="h-14 w-auto object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]" />
        </Link>

        <div className="flex items-center gap-3">
          <a href="tel:923014685576" className="bg-orange-500 text-white p-2.5 rounded-full shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform">
            <Phone size={20} />
          </a>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full border border-orange-500/50 text-white hover:bg-orange-500/10 transition-colors"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#0A0A0A] z-40 overflow-y-auto flex flex-col"
          >
            <div className="flex-1 px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between w-full p-4 rounded-xl border-b border-gray-800/50 hover:bg-[#1a1a1a] transition-colors group"
                >
                  <div className="flex items-center gap-4 text-white">
                    <span className="text-orange-400">{item.icon}</span>
                    <span className="font-medium text-base">{item.name}</span>
                  </div>
                  <div className="text-orange-400">
                    <ChevronRight size={20} />
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div className="p-4 pb-8 mt-auto">
              <Link 
                href="/contacts"
                onClick={() => setMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#ff4500] via-[#ff6a00] to-[#ff8c00] text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20"
              >
                <span className="bg-white/20 p-1.5 rounded-full rotate-[-45deg]">
                   <ArrowRight size={18} />
                </span>
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}