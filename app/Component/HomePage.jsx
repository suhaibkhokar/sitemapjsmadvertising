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

      <div className="min-h-screen bg-gray-900 text-white">
        {/* HERO SECTION */}
        <header className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-red-500">JSM Advertising</span> – Sign Board &
                Outdoor Advertising Company in Pakistan
              </h1>

              <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                From creative sign boards to high-impact outdoor advertising — JSM
                Advertising helps you attract attention, build trust, and grow
                your business.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105"
                >
                  Get a Quote
                </a>

                <a
                  href="#portfolio"
                  className="border border-red-500 text-red-400 px-6 py-3 rounded-xl font-semibold hover:bg-red-600 hover:text-white transition-all"
                >
                  View Our Work
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-tr from-red-600 to-yellow-500 p-[4px] shadow-[0_0_40px_rgba(255,0,0,0.4)]">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/Jsm Home .jpg"
                    alt="JSM Advertising sign board and outdoor branding project in Pakistan"
                    className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="absolute -z-10 blur-3xl opacity-30 w-72 h-72 bg-red-600 rounded-full top-10 right-0"></div>
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
