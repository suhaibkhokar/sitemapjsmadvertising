"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, ArrowUpRight, Building2, Code, Hammer, Layers,
  Lightbulb, PanelsTopLeft, PenTool, Printer, Signpost, Wrench,
  Image as ImgIcon,
  Monitor,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Wrench size={40} />, title: "Sign Board Design & Installation", desc: "Premium metal, acrylic, SS, GI & 3D sign boards. Full manufacturing + installation.",
      img: "/workimages9.jpg"
    },
    {
      icon: <Lightbulb size={40} />, title: "LED & Neon Signage", desc: "Super bright LED, neon flex, edge-lit & backlit signage with durable quality.",
      img: "/workimages3.jpeg"
    },
    {
      icon: <Layers size={40} />, title: "Acrylic / 3D Letters", desc: "3D embossed, SS letters, acrylic glowing letters for shop & office branding.",
      img: "/workimages8.jpeg"
    },
    {
      icon: <Hammer size={40} />, title: "Shop & Office Interior", desc: "Wall panels, interior branding, wooden work & complete renovation.",
      img: "/expo1.jpeg"
    },
    {
      icon: <PenTool size={40} />, title: "Brand Logo & Identity", desc: "Custom logo, color palette, typography & complete brand guide.",
      img: "/homepageportfolio.jpeg"
    },
    {
      icon: <Monitor size={40} />, title: "Digital Screens & LED Walls", desc: "Indoor/outdoor LED screens & digital boards installation.",
      img: "/workimages10.webp"
    },
    {
      icon: <Building2 size={40} />, title: "Franchise / Corporate Branding", desc: "Full company branding, interior, exterior, signage & merch.",
      img: "/expo4.jpeg"
    },
    {
      icon: <ImgIcon size={40} />, title: "Printing & Marketing Materials", desc: "Brochures, business cards, flyers, banners, packaging & uniforms.",
      img: "/workimages5.jpeg"
    },
    {
      icon: <Code size={40} />, title: "Website & Online Store", desc: "Business websites, ecommerce stores, SEO & booking systems.",
      img: "/homepage first.webp"
    },
    {
      icon: <Signpost size={40} />, title: "Road Direction Sign Board", desc: "Roadside direction and destination signs built for visibility and durability.",
      img: "/Road Direction Sign.png"
    },
    {
      icon: <PanelsTopLeft size={40} />, title: "Wall Branding", desc: "Interior wall graphics and branded spaces designed for businesses.",
      img: "/wall branding.png"
    },
    {
      icon: <Signpost size={40} />, title: "Hoding Sign Board", desc: "Large-format holding boards for outdoor advertising and brand visibility.",
      img: "/Hoding Sign Board.png"
    },
    {
      icon: <Printer size={40} />, title: "Vinyl Pasting", desc: "Printed vinyl graphics professionally applied to walls, glass and boards.",
      img: "/Vinyl Pasting.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f3f2] text-[#191615]">
      <section className="relative isolate min-h-[500px] overflow-hidden bg-[#191311] text-white md:min-h-[560px]">
        <Image
          src="/homepage first.webp"
          alt="JSM Advertising signage and branding work"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#160e0c]/95 via-[#24110d]/75 to-[#3a180f]/25" />

        <div className="mx-auto flex min-h-[500px] max-w-7xl flex-col px-5 pb-12 pt-6 sm:px-8 md:min-h-[560px] md:px-12 md:pb-16">
          <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
            <ArrowLeft size={17} /> Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mt-auto max-w-3xl pb-4"
          >
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-px w-8 bg-orange-400" /> JSM Advertising / Services
            </p>
            <h1 className="max-w-2xl text-5xl font-black leading-[1.02] sm:text-6xl md:text-7xl">
              Built to be <span className="text-orange-400">seen.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Signage, spaces and graphics made to put your brand in the right light.
            </p>
            <a href="#service-list" className="mt-8 inline-flex items-center gap-2 border-b border-orange-400 pb-2 text-sm font-bold text-white transition hover:text-orange-300">
              Explore our capabilities <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 border-t border-white/20 pt-4 text-xs font-semibold uppercase tracking-widest text-white/60">
            <span>Signage</span><span className="text-orange-400">/</span>
            <span>Branding</span><span className="text-orange-400">/</span><span>Print</span>
          </div>
        </div>
      </section>

      <section id="service-list" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-20">
        <div className="mb-10 grid gap-5 border-b border-[#ded8d5] pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a6259]">What we do</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
              From one sign to a complete brand environment.
            </h2>
          </div>
          <span className="text-sm font-semibold text-[#8a6259]">{String(services.length).padStart(2, "0")} capabilities</span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.42, delay: (index % 3) * 0.06 }}
            className="group overflow-hidden border border-[#e4d9d5] bg-white transition-colors duration-300 hover:border-[#e64b2f]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[#eee8e5]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute left-4 top-4 bg-[#e64b2f] px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
                {item.category}
              </span>
            </div>
            <div className="flex min-h-[190px] flex-col p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold tabular-nums text-[#89948b]">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[#e64b2f]">{item.icon}</span>
              </div>
              <h2 className="text-xl font-extrabold leading-snug">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#6b625f]">{item.desc}</p>
            </div>
          </motion.article>
        ))}
        </div>
      </section>

      <section className="bg-[#191311] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-300">Have a project in mind?</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Let’s make it visible.</h2>
          </div>
          <Link
            href="/contacts"
            className="inline-flex w-fit items-center gap-3 bg-[#e64b2f] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange-500"
          >
            Talk to our team <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
