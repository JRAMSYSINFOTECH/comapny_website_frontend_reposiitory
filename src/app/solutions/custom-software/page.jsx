"use client";

import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";

// Updated color palette for this page
const colors = {
  primary: "#7C3AED", // Purple
  secondary: "#EC4899", // Pink
  accent: "#F59E0B", // Amber
  blue: "#3B82F6", // Blue
  teal: "#14B8A6", // Teal
};

// Floating code blocks animation
const FloatingCodeBlocks = () => {
  const codeSnippets = [
    { code: "</>", color: "from-purple-500 to-pink-500", delay: 0 },
    { code: "{ }", color: "from-blue-500 to-cyan-500", delay: 0.5 },
    { code: "[ ]", color: "from-pink-500 to-rose-500", delay: 1 },
    { code: "=>", color: "from-amber-500 to-orange-500", delay: 1.5 },
  ];

  return (
    <div className="relative w-full h-full">
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className={`absolute bg-gradient-to-br ${snippet.color} rounded-2xl p-6 shadow-2xl text-white font-mono text-3xl font-bold`}
          style={{
            left: `${20 + i * 20}%`,
            top: `${15 + (i % 2) * 30}%`,
          }}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: snippet.delay,
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: snippet.delay,
            }}
          >
            {snippet.code}
          </motion.div>
        </motion.div>
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <motion.path
          d="M 50 50 Q 150 100 250 80"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M 250 80 Q 350 60 400 100"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Timeline with icons
const DevelopmentTimeline = () => {
  const phases = [
    {
      title: "Consultation & Discovery",
      desc: "Understanding your business, users, and systems to define a clear solution vision.",
      icon: "💡",
      color: "purple",
    },
    {
      title: "Design & Blueprinting",
      desc: "Wireframes, UX flows, and technical specs that validate features before development.",
      icon: "🎨",
      color: "pink",
    },
    {
      title: "Agile Development",
      desc: "Building in short sprints with regular demos so you can see progress early.",
      icon: "⚙️",
      color: "blue",
    },
    {
      title: "Testing & Launch",
      desc: "Comprehensive testing ensures a stable release with training and documentation.",
      icon: "🚀",
      color: "amber",
    },
    {
      title: "Support & Enhancement",
      desc: "Continuous improvement with fixes, optimizations, and new features.",
      icon: "🔄",
      color: "teal",
    },
  ];

  return (
    <div className="relative">
      {phases.map((phase, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="mb-16 last:mb-0"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${
                phase.color === "purple"
                  ? "from-purple-500 to-violet-500"
                  : phase.color === "pink"
                  ? "from-pink-500 to-rose-500"
                  : phase.color === "blue"
                  ? "from-blue-500 to-cyan-500"
                  : phase.color === "amber"
                  ? "from-amber-500 to-orange-500"
                  : "from-teal-500 to-cyan-500"
              } flex items-center justify-center text-4xl shadow-xl`}
            >
              {phase.icon}
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-purple-300 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black text-purple-600">0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{phase.desc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function CustomSoftwareDevelopmentPage() {
  const features = [
    {
      title: "Product & Solution Design",
      desc: "Discovery workshops, UX, and technical blueprints so the right product is defined before any code is written.",
      icon: "💡",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Engineering & Integrations",
      desc: "Web, mobile, and API-first backends on modern stacks, connected cleanly to your existing systems.",
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Testing, QA & Launch",
      desc: "Functional, security, and performance testing plus rollout support, training, and documentation.",
      icon: "✅",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Support & Evolution",
      desc: "Ongoing monitoring, fixes, and new features so your platform keeps pace with your business.",
      icon: "🔄",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const industries = [
    { name: "Education", icon: "🎓", desc: "Student portals, LMS integrations, exam workflows" },
    { name: "Healthcare", icon: "🏥", desc: "Scheduling, EMR dashboards, patient apps" },
    { name: "Retail", icon: "🛍️", desc: "E-commerce, inventory, loyalty programs" },
    { name: "Manufacturing", icon: "🏭", desc: "Production tracking, maintenance tools" },
    { name: "Logistics", icon: "🚚", desc: "Fleet tracking, delivery apps" },
    { name: "Government", icon: "🏛️", desc: "Citizen portals, digital workflows" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-950 via-slate-900 to-pink-950 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#7C3AED 1px, transparent 1px),
                linear-gradient(90deg, #7C3AED 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 rounded-full px-5 py-2 mb-6"
              >
                <span className="text-sm font-semibold tracking-wider uppercase">Custom Software Development</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Build software that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                  moves with
                </span>{" "}
                your business
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl">
                Design, build, and scale digital platforms tailored to your goals, industry, and future roadmap—without fighting rigid off-the-shelf tools.
              </p>

              {/* <div className="flex flex-wrap gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-xl"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/20"
                >
                  View Case Studies
                </motion.button>
              </div> */}

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "⚡", text: "Fast delivery" },
                  { icon: "🎯", text: "Modern stack" },
                  { icon: "💬", text: "Post-launch support" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content - Floating code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 hidden lg:block"
            >
              <FloatingCodeBlocks />
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f8fafc"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            />
          </svg>
        </div>
      </section>

      {/* FEATURES SECTION - Card Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-purple-600 font-semibold tracking-wider uppercase mb-3">Why Teams Work With Us</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Custom software that ships, scales, and keeps improving
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-slate-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <p className="text-purple-600 font-semibold tracking-wider uppercase mb-3">From Idea To Production</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              How we deliver your custom solution
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A transparent, collaborative flow from first workshop to launch and beyond
            </p>
          </motion.div>

          <DevelopmentTimeline />
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-emerald-600 font-semibold tracking-wider uppercase mb-3">Industry Expertise</p>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Built for every industry
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-slate-100 hover:border-emerald-300 transition-all cursor-pointer"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-slate-600 text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
    </div>
  );
}