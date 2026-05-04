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
        {/* HERO SECTION - Heavy Animated */}
        <header className="relative overflow-visible min-h-[80vh] flex items-center justify-center">
          {/* Animated Gradient Blobs */}
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/40 to-yellow-400/30 rounded-full blur-3xl animate-pulse z-0"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-gradient-to-tr from-yellow-400/30 to-pink-500/30 rounded-full blur-3xl animate-pulse z-0"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2 }}
          />
          <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 lg:px-12 py-24">
            {/* LEFT - Animated Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 80 }}
              className="max-w-xl"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                JSM Advertising
              </h1>
              <motion.p
                className="mt-6 text-gray-200 text-xl md:text-2xl font-medium leading-relaxed drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                From creative sign boards to high-impact outdoor advertising — <span className="text-yellow-400 font-bold">JSM Advertising</span> helps you attract attention, build trust, and grow your business.
              </motion.p>
              <div className="mt-8 flex gap-6">
                <motion.a
                  href="#contact"
                  className="bg-red-600 hover:bg-yellow-400 hover:text-black text-white px-8 py-4 rounded-2xl font-bold shadow-xl text-lg transition-transform hover:scale-110 animate-bounce"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                >
                  Get a Quote
                </motion.a>
                <motion.a
                  href="#portfolio"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all hover:scale-110 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                >
                  View Our Work
                </motion.a>
              </div>
            </motion.div>
            {/* RIGHT - Animated Image */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 80 }}
              className="relative w-full md:w-1/2 flex justify-center"
            >
              <motion.div
                className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-red-600 to-yellow-500 p-[6px] shadow-[0_0_60px_rgba(255,0,0,0.4)] animate-spin-slow"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 1.2, type: 'spring', stiffness: 60 }}
              >
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="/Jsm Home .jpg"
                    alt="JSM Advertising sign board and outdoor branding project in Pakistan"
                    className="object-cover w-full h-full opacity-95 hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute -z-10 blur-3xl opacity-40 w-72 h-72 bg-red-600 rounded-full top-10 right-0 animate-pulse"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </motion.div>
          </div>
        </header>

        {/* MAIN */}
        <main className="space-y-24 mt-16">

          {/* ABOUT */}
          <section className="bg-gray-800 rounded-xl shadow-md p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="text-3xl font-bold text-white">
                  Who We Are
                </h2>

                <p className="mt-3 text-gray-300 leading-relaxed">
                  JSM Advertising is a full-service outdoor marketing company
                  specializing in sign boards, LED signage, and digital
                  billboards. From concept to installation, we deliver
                  high-impact branding solutions.
                </p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-300">
                  {[
                    "Custom branding solutions",
                    "Fast installation teams",
                    "Premium quality materials",
                    "Nationwide service coverage",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-red-500 text-2xl">✅</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/homepage first.webp"
                  alt="Sign board branding work by JSM Advertising"
                  className="w-full h-44 object-cover rounded-lg"
                />

                <img
                  src="/homepage.webp"
                  alt="LED signage installation project in Pakistan"
                  className="w-full h-44 object-cover rounded-lg"
                />

                <img
                  src="/worksimage1.jpeg"
                  alt="Outdoor advertising billboard design by JSM Advertising"
                  className="w-full h-44 object-cover rounded-lg"
                />

                <img
                  src="/workimages2.jpeg"
                  alt="Shop branding and fascia design project"
                  className="w-full h-44 object-cover rounded-lg"
                />
              </div>

            </div>
          </section>

          {/* SERVICES */}
          <section>
            <h2 className="text-3xl font-bold text-white">Our Services</h2>

            <p className="text-gray-300 mt-2">
              Complete sign board, LED signage and outdoor advertising solutions.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {services.map((s) => (
                <motion.div
                  key={s.title}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl border shadow-sm bg-gray-800"
                >
                  <div className="text-4xl">{s.icon}</div>

                  <h3 className="mt-3 font-semibold text-lg text-white">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PORTFOLIO */}
          <PortfolioSection />

          {/* TESTIMONIALS */}
          <section className="bg-gray-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-white">
              What Clients Say
            </h2>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="p-6 bg-gray-700 rounded-lg shadow-sm">
                  <p className="text-gray-300">“{t.text}”</p>
                  <div className="mt-3 font-semibold text-white">
                    — {t.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-10 md:p-14 rounded-xl">

              <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                <div>
                  <h2 className="text-3xl font-bold">
                    Ready to Grow Your Brand?
                  </h2>

                  <p className="mt-2 text-gray-300">
                    Get a free quote for sign boards and outdoor advertising.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold"
                >
                  Contact Us
                </a>

              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}
