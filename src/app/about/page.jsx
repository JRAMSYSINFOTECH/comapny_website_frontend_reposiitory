'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandTeal = "#1B5B6F";
const brandNavy = "#0F3B57";
const brandOrange = "#E8681A";
const brandLight = "#2D8BA3";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const SectionLabel = ({ children }) => (
  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
    style={{ backgroundColor: "#FEF0E7", color: brandOrange }}>
    {children}
  </span>
);

const SectionHeading = ({ children, center = true }) => (
  <h2 className={`text-3xl sm:text-4xl font-bold mb-3 ${center ? "text-center" : ""}`}
    style={{ color: brandNavy }}>
    {children}
  </h2>
);

const Divider = () => (
  <div className="flex items-center justify-center gap-2 mb-8">
    <div className="h-0.5 w-8 rounded" style={{ backgroundColor: brandOrange }} />
    <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brandOrange }} />
    <div className="h-0.5 w-8 rounded" style={{ backgroundColor: brandOrange }} />
  </div>
);

/* ─── WHY CHOOSE ITEMS ─── */
const whyItems = [
  {
    title: "Focused, Not Bloated",
    desc: "As a lean engineering team, we move fast, make clear decisions, and adapt quickly without layers of bureaucracy.",
    icon: "🎯",
  },
  {
    title: "Built by Practitioners",
    desc: "We design and build systems ourselves — from device integration to automation — ensuring practical, production-ready solutions.",
    icon: "🛠️",
  },
  {
    title: "Automation with Purpose",
    desc: "We don't add tools for the sake of it. Every workflow and automation is designed to remove manual effort and operational friction.",
    icon: "⚡",
  },
  {
    title: "Scalable by Design",
    desc: "Even as a startup, we architect systems to scale cleanly — avoiding shortcuts that create problems later.",
    icon: "📐",
  },
  {
    title: "Direct Client Collaboration",
    desc: "You work directly with the people building your system, not account managers passing messages.",
    icon: "🤝",
  },
  {
    title: "Honest Delivery",
    desc: "We commit only to what we can deliver, communicate clearly, and take ownership through deployment and support.",
    icon: "✅",
  },
];

/* ─── CULTURE VALUES ─── */
const cultureValues = [
  "Learning by building – we improve through hands-on work, iteration, and feedback",
  "Direct communication – fewer layers, faster decisions, shared ownership",
  "Responsible flexibility – we value focus and results over rigid processes",
  "Continuous improvement – we review what worked, fix what didn't, and move forward",
];

/* ─── TECH STACK ─── */
const coretech = [
  { name: "Internet of Things (IoT)", icon: "🌐" },
  { name: "Automation & System Integration", icon: "⚙️" },
  { name: "Cloud Platforms", icon: "☁️" },
  { name: "Data & Analytics", icon: "📊" },
];

const supportingTech = [
  { name: "AI & Machine Learning (applied, not research)", icon: "🤖" },
  { name: "Edge Computing", icon: "💻" },
  { name: "Smart Sensors & Devices", icon: "📡" },
  { name: "Wireless & Connectivity", icon: "📶" },
  { name: "Mobile Applications", icon: "📱" },
  { name: "Web Applications", icon: "🌍" },
  { name: "Security-by-Design", icon: "🔐" },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
];

export default function About() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <div className="relative min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F3B57] via-[#1B5B6F] to-[#0e4a5c]" />
        {/* subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* accent circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #E8681A 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "rgba(232,104,26,0.18)", color: "#FDBA74" }}>
              🚀 About JRAMSYS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              We are <span style={{ color: "#FDBA74" }}>JRAMSYS</span>
            </h1>
            <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed max-w-xl">
              A focused team building practical technology solutions — turning complex systems into
              tools that actually work in day-to-day operations.
            </p>
            <a href="/contact"
              className="inline-block px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: brandOrange }}>
              Get in Touch
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="JRAMSYS Team"
                fill sizes="50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3B57]/60 to-transparent" />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              <div>
                <p className="text-xs text-gray-500 font-medium">Our Focus</p>
                <p className="text-sm font-bold" style={{ color: brandNavy }}>Practical Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════ OUR STORY ════════════════════════════ */}
      <div className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <SectionLabel>Our Story</SectionLabel>
            <SectionHeading>A focused team building practical technology solutions</SectionHeading>
            <Divider />
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              JRAMSYS is a technology startup founded to solve a simple but common problem: organizations
              struggle to turn complex systems and raw data into solutions that actually work in
              day-to-day operations.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We build with a strong emphasis on clarity, reliability, and real-world usability —
              ensuring technology supports business processes instead of complicating them.
            </p>
          </motion.div>

          {/* What We're Building */}
          <motion.div {...fadeUp} className="mt-14 text-left bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: brandOrange }}>
              What We're Building
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our work focuses on IoT platforms, automation, and data-driven systems designed to integrate
              devices, applications, and workflows. From early-stage deployments to scalable architectures,
              we design solutions that are production-ready from day one.
            </p>
          </motion.div>

          {/* Where We're Headed */}
          <motion.div {...fadeUp} className="mt-6 text-left bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: brandOrange }}>
              Where We're Headed
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              As we enter the market, our priority is execution. We're partnering with early customers to
              validate, refine, and scale solutions that deliver measurable operational value. Every project
              is an opportunity to build smarter, simpler, and more reliable systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════ WHY CHOOSE JRAMSYS ════════════════════════ */}
      <div className="py-20 sm:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <SectionLabel>Why Us</SectionLabel>
            <SectionHeading>Why Choose JRAMSYS</SectionHeading>
            <Divider />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* hover accent */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: brandOrange }} />
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                  style={{ backgroundColor: "#FEF0E7" }}>
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2" style={{ color: brandNavy }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════ CULTURE ══════════════════════════════ */}
      <div className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Our Culture</SectionLabel>
              <SectionHeading center={false}>Our Culture</SectionHeading>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-0.5 w-8 rounded" style={{ backgroundColor: brandOrange }} />
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: brandOrange }} />
                <div className="h-0.5 w-8 rounded" style={{ backgroundColor: brandOrange }} />
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                We're a small, focused team of engineers and problem-solvers who value clear thinking,
                ownership, and practical execution. We believe strong teams build reliable technology —
                especially in complex, real-world environments.
              </p>
              <div className="space-y-4">
                {cultureValues.map((val, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: brandOrange }}>
                      ✓
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{val}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Images grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {cultureImages.map((src, idx) => (
                <div key={idx} className={`relative rounded-2xl overflow-hidden shadow-md ${idx % 2 === 1 ? "mt-6" : ""}`}
                  style={{ height: "200px" }}>
                  <Image src={src} alt="Team culture" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ════════════════════════ TECHNOLOGY STACK ════════════════════════════ */}
      <div className="py-20 sm:py-28" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: brandNavy }}>
              Our Technology Stack
            </h2>
            <p className="text-gray-400 text-base mb-3">— Core Technologies We Work With —</p>
            <Divider />
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We focus on applying the right technologies to solve real operational problems —
              not forcing complexity where it isn't needed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border-2 border-gray-200 bg-white overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* Core Technologies */}
              <div className="p-8 sm:p-10 border-b sm:border-b-0 sm:border-r border-gray-200">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: brandNavy }}>C</div>
                  <h3 className="text-lg font-bold" style={{ color: brandNavy }}>Core Technologies</h3>
                </div>
                <ul className="space-y-4">
                  {coretech.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                      <span className="text-2xl w-8 flex-shrink-0">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supporting Technologies */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: brandOrange }}>S</div>
                  <h3 className="text-lg font-bold" style={{ color: brandNavy }}>Supporting Technologies</h3>
                </div>
                <ul className="space-y-4">
                  {supportingTech.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                      <span className="text-2xl w-8 flex-shrink-0">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════ MISSION & VISION ════════════════════════ */}
      <div className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <SectionLabel>Who We Are</SectionLabel>
            <SectionHeading>Mission & Vision</SectionHeading>
            <Divider />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl p-10 text-white"
              style={{ background: `linear-gradient(135deg, ${brandNavy} 0%, #1B5B6F 100%)` }}
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10 bg-white" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                  🎯
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3 opacity-60">Mission</p>
                <p className="text-base sm:text-lg leading-relaxed text-blue-50">
                  To turn complex technology into practical solutions that help businesses operate smarter,
                  faster, and more reliably — starting today.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden rounded-3xl p-10 text-white"
              style={{ background: `linear-gradient(135deg, ${brandOrange} 0%, #c9540e 100%)` }}
            >
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10 bg-white" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                  🚀
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3 opacity-70">Vision</p>
                <p className="text-base sm:text-lg leading-relaxed text-orange-50">
                  To be the go-to technology partner for businesses seeking intelligent, scalable solutions —
                  building the future of operational efficiency one innovation at a time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
