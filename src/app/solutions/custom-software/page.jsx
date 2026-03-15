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
      title: "Problem Definition",
      desc: "We understand your business context, users, and existing systems to define a solution that solves a real operational problem — not just a feature request.",
      icon: "💡",
      color: "purple",
    },
    {
      title: "Design & Technical Planning",
      desc: "UX flows and technical architecture are defined early so scope, risks, and integrations are clear before development starts.",
      icon: "🎨",
      color: "pink",
    },
    {
      title: "Iterative Development",
      desc: "We build in controlled sprints with regular demos, allowing early feedback and course correction — no surprises at the end.",
      icon: "⚙️",
      color: "blue",
    },
    {
      title: "Production Readiness & Launch",
      desc: "We test for performance, security, and failure scenarios, then support rollout with documentation and team handover.",
      icon: "🚀",
      color: "amber",
    },
    {
      title: "Support & Improvement",
      desc: "Post-launch, we monitor usage, fix issues, and enhance features as real-world needs evolve.",
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
      title: "Product & Solution Definition",
      desc: "We start by clarifying the problem, constraints, and success metrics — so what gets built is useful, not just technically correct.",
      icon: "💡",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      title: "Engineering & Integrations",
      desc: "We build web, mobile, and backend systems designed to integrate cleanly with existing tools, devices, and workflows.",
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Testing, Readiness & Launch",
      desc: "We test for real usage — performance, security, and failure scenarios — and support rollout with documentation and handover.",
      icon: "✅",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Support & Continuous Improvement",
      desc: "After launch, we stay involved — monitoring, fixing, and improving the system as usage grows and requirements evolve.",
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


        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
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
                Production-ready software for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                  real-world
                </span>{" "}
                operations
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl">
                We design and build custom software for organizations that need more than dashboards and demos — systems that integrate devices, data, and workflows, built to run reliably in live environments.
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "⚡", text: "Focused delivery" },
                  { icon: "🎯", text: "Right-fit architecture" },
                  { icon: "💬", text: "Ongoing ownership" },
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
              We build systems that actually run in production
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
              How we deliver software that's ready for real use
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