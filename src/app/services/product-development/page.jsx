"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Isometric Grid Background
const IsometricGrid = () => (
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="isometric" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" 
            fill="none" stroke="currentColor" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#isometric)"/>
    </svg>
  </div>
);

// Floating Code Blocks
const FloatingCodeBlock = ({ delay = 0, x = "20%", y = "30%" }) => (
  <motion.div
    className="absolute text-[10px] sm:text-xs font-mono text-emerald-400/30 hidden sm:block"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
    }}
  >
    <pre>{`{
  "product": "MVP",
  "status": "building"
}`}</pre>
  </motion.div>
);

// Product Stage Indicator
const StageIndicator = ({ stage, isActive }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ${
      isActive ? "text-emerald-400" : "text-gray-600"
    }`}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <polygon
        points="50,10 90,35 90,65 50,90 10,65 10,35"
        fill={isActive ? "rgba(16, 185, 129, 0.1)" : "rgba(75, 85, 99, 0.1)"}
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl">
      {stage.icon}
    </div>
  </motion.div>
);

export default function ProductDevelopmentPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: "01",
      icon: "💡",
      title: "Ideation Sprint",
      subtitle: "CONCEPT & STRATEGY",
      description: "Transform rough ideas into validated product concepts through intensive workshops, market research, and competitive analysis. Define your north star.",
      timeline: "1-2 weeks",
      deliverables: ["Product roadmap", "User personas", "Feature matrix"],
      color: "emerald",
      gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    },
    {
      number: "02",
      icon: "🎨",
      title: "Design System",
      subtitle: "UX/UI CREATION",
      description: "Craft beautiful, intuitive interfaces with comprehensive design systems. From wireframes to high-fidelity prototypes that users test before a line of code is written.",
      timeline: "2-3 weeks",
      deliverables: ["Wireframes", "UI mockups", "Interactive prototype"],
      color: "purple",
      gradient: "from-purple-400 via-pink-400 to-rose-400",
    },
    {
      number: "03",
      icon: "⚡",
      title: "MVP Build",
      subtitle: "RAPID DEVELOPMENT",
      description: "Launch your minimum viable product in weeks, not months. Agile sprints deliver working features continuously for fast market validation and investor demos.",
      timeline: "8-12 weeks",
      deliverables: ["Working MVP", "Core features", "Tech stack"],
      color: "blue",
      gradient: "from-blue-400 via-cyan-400 to-teal-400",
    },
    {
      number: "04",
      icon: "🚀",
      title: "Scale & Iterate",
      subtitle: "GROWTH ENGINE",
      description: "Evolve your product based on real user feedback. Add features, optimize performance, and scale infrastructure to handle growing demand and complexity.",
      timeline: "Ongoing",
      deliverables: ["Feature releases", "Performance boost", "Scale support"],
      color: "orange",
      gradient: "from-orange-400 via-amber-400 to-yellow-400",
    },
  ];

  const industries = [
    {
      name: "SaaS & Startups",
      icon: "🚀",
      description: "MVP to market leader",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Enterprise Digital",
      icon: "🏢",
      description: "Legacy modernization",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      name: "Healthcare Tech",
      icon: "⚕️",
      description: "Patient-centric apps",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "EdTech Platforms",
      icon: "📚",
      description: "Learning experiences",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "E-commerce",
      icon: "🛒",
      description: "Shopping innovation",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "IoT Products",
      icon: "🔌",
      description: "Connected devices",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
  ];

  const metrics = [
    { label: "Products Shipped", value: "127+", icon: "📦" },
    { label: "Avg Time to MVP", value: "10 wk", icon: "⚡" },
    { label: "Client Satisfaction", value: "4.9/5", icon: "⭐" },
    { label: "Team Experience", value: "15 yr", icon: "🎯" },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen" style={{ fontFamily: '"Space Mono", monospace' }}>
      {/* Add Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Audiowide&display=swap');
      `}</style>

      {/* HERO SECTION - RETRO FUTURISTIC */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950" />
          <IsometricGrid />
          <FloatingCodeBlock delay={0} x="10%" y="20%" />
          <FloatingCodeBlock delay={1} x="80%" y="60%" />
          <FloatingCodeBlock delay={2} x="15%" y="70%" />
          
          {/* Scan lines effect */}
          <motion.div
            className="absolute inset-0 opacity-10 hidden sm:block"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(16, 185, 129, 0.03) 2px, rgba(16, 185, 129, 0.03) 4px)",
            }}
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Retro badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 bg-emerald-500/10 border border-emerald-500/50 sm:border-2 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 border-2 border-emerald-400 border-t-transparent rounded-full"
                />
                <span className="text-emerald-400 font-bold text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]" style={{ fontFamily: '"Audiowide", cursive' }}>
                  PRODUCT DEV SYSTEMS
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[0.95]" style={{ fontFamily: '"Audiowide", cursive' }}>
                <span className="block">BUILD</span>
                <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  LEGENDARY
                </span>
                <span className="block mt-2">PRODUCTS</span>
              </h1>

              <div className="relative mb-6 sm:mb-8 pl-3 sm:pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-emerald-500 to-cyan-500" />
                <p className="text-base sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-xl font-normal" style={{ fontFamily: '"Space Mono", monospace' }}>
                  From concept to launch in 10 weeks. Full-stack product teams that ship MVPs, scale platforms, and iterate at light speed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <a href="/contact" className="relative flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base uppercase tracking-wider border-2 sm:border-4 border-emerald-400" style={{ fontFamily: '"Audiowide", cursive' }}>
                    Start Building
                  </a>
                </motion.button>
              </div>
            </motion.div>

            {/* Right - 3D Product Pipeline - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden md:block"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Isometric product stages */}
                {[
                  { icon: "💡", x: 0, y: -120, delay: 0, label: "Idea" },
                  { icon: "🎨", x: 80, y: -60, delay: 0.3, label: "Design" },
                  { icon: "⚡", x: 80, y: 60, delay: 0.6, label: "Build" },
                  { icon: "🚀", x: 0, y: 120, delay: 0.9, label: "Launch" },
                ].map((stage, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${stage.x}px)`,
                      top: `calc(50% + ${stage.y}px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: stage.delay, duration: 0.5 }}
                  >
                    <div className="relative group">
                      {/* Hexagon container */}
                      <svg width="100" height="120" className="absolute -translate-x-1/2 -translate-y-1/2">
                        <polygon
                          points="50,10 90,35 90,85 50,110 10,85 10,35"
                          fill="rgba(15, 23, 42, 0.9)"
                          stroke="#10b981"
                          strokeWidth="2"
                        />
                      </svg>
                      
                      <div className="relative flex flex-col items-center">
                        <div className="text-4xl mb-2">{stage.icon}</div>
                        <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest">
                          {stage.label}
                        </div>
                      </div>

                      {/* Glow effect */}
                      <motion.div
                        className="absolute inset-0 -z-10"
                        animate={{
                          boxShadow: [
                            "0 0 20px rgba(16, 185, 129, 0.3)",
                            "0 0 40px rgba(16, 185, 129, 0.6)",
                            "0 0 20px rgba(16, 185, 129, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: stage.delay }}
                      />
                    </div>
                  </motion.div>
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {[
                    { x1: "50%", y1: "calc(50% - 120px)", x2: "calc(50% + 80px)", y2: "calc(50% - 60px)" },
                    { x1: "calc(50% + 80px)", y1: "calc(50% - 60px)", x2: "calc(50% + 80px)", y2: "calc(50% + 60px)" },
                    { x1: "calc(50% + 80px)", y1: "calc(50% + 60px)", x2: "50%", y2: "calc(50% + 120px)" },
                  ].map((line, idx) => (
                    <motion.line
                      key={idx}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeDasharray="10,10"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ delay: 0.3 + idx * 0.3, duration: 1 }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Terminal-style cursor - hidden on mobile */}
        <motion.div
          className="absolute bottom-10 right-10 w-3 h-5 sm:w-4 sm:h-6 bg-emerald-400 hidden sm:block"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </section>

      {/* PHASES SECTION - TIMELINE VIEW */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="absolute inset-0 opacity-5">
          <IsometricGrid />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-6 py-1.5 sm:py-2 border border-emerald-500/50 sm:border-2 bg-emerald-500/10">
              <span className="font-bold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-400" style={{ fontFamily: '"Audiowide", cursive' }}>
                DEVELOPMENT PIPELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4" style={{ fontFamily: '"Audiowide", cursive' }}>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                IDEA → LAUNCH
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              Four phases that take you from whiteboard to production
            </p>
          </motion.div>

          {/* Phase selector */}
          <div className="flex justify-center mb-8 sm:mb-12 overflow-x-auto pb-4 -mx-4 px-4">
            <div className="inline-flex gap-2 sm:gap-3 md:gap-4">
              {phases.map((phase, idx) => (
                <motion.button
                  key={phase.number}
                  onClick={() => setActivePhase(idx)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative group flex-shrink-0 ${
                    activePhase === idx ? "text-emerald-400" : "text-gray-600"
                  }`}
                >
                  <StageIndicator stage={phase} isActive={activePhase === idx} />
                  <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs font-bold">
                    {phase.number}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active phase details */}
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-950 border border-emerald-500/30 sm:border-2 p-4 sm:p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-br ${phases[activePhase].gradient} bg-clip-text text-transparent`}>
                    {phases[activePhase].number}
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl">{phases[activePhase].icon}</div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] text-emerald-400 uppercase">
                    {phases[activePhase].subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4" style={{ fontFamily: '"Audiowide", cursive' }}>
                  {phases[activePhase].title}
                </h3>

                <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                  {phases[activePhase].description}
                </p>

                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/30">
                    <span className="text-xs sm:text-sm font-bold text-emerald-400">
                      ⏱️ {phases[activePhase].timeline}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <p className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-400 uppercase">
                    Deliverables:
                  </p>
                  {phases[activePhase].deliverables.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3"
                    >
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br ${phases[activePhase].gradient} flex items-center justify-center text-white text-[10px] sm:text-xs font-bold`}>
                        ✓
                      </div>
                      <span className="font-mono text-sm sm:text-base">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual representation */}
              <div className="relative hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30">
                  {/* Code snippet visualization */}
                  <div className="p-4 sm:p-6 font-mono text-[10px] sm:text-xs text-emerald-400/50">
                    <div>// Phase: {phases[activePhase].title}</div>
                    <div className="mt-2">const build = () =&gt; {"{"}</div>
                    <div className="ml-4">timeline: "{phases[activePhase].timeline}",</div>
                    <div className="ml-4">status: "active",</div>
                    <div className="ml-4">progress: 100</div>
                    <div>{"};"}</div>
                  </div>

                  {/* Progress visualization */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-slate-800">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${phases[activePhase].gradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-500/5 border border-emerald-500/30" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-500/5 border border-cyan-500/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4" style={{ fontFamily: '"Audiowide", cursive' }}>
              <span className="text-emerald-400">TECH_</span>STACK
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400">
              Battle-tested technologies for production-grade products
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-all" />
                <div className="relative bg-slate-900 border border-emerald-500/30 p-4 sm:p-6 hover:border-emerald-500/50 transition-colors">
                  <div className="text-[10px] sm:text-xs text-emerald-400 mb-1 sm:mb-2 font-bold uppercase tracking-wider">
                    {tech.category}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-bold" style={{ fontFamily: '"Audiowide", cursive' }}>
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION - GRID */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="absolute inset-0 opacity-5">
          <IsometricGrid />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4" style={{ fontFamily: '"Audiowide", cursive' }}>
              INDUSTRY <span className="text-emerald-400">FOCUS</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all`} />
                <div className="relative bg-slate-900 border border-slate-800 sm:border-2 group-hover:border-emerald-500/50 p-6 sm:p-8 transition-all">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{industry.icon}</div>
                  <h3 className="text-lg sm:text-xl font-black mb-2" style={{ fontFamily: '"Audiowide", cursive' }}>
                    {industry.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - TERMINAL STYLE */}
      <section className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-black/50 backdrop-blur-sm border-2 sm:border-4 border-emerald-400 p-6 sm:p-8 md:p-12"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              <span className="ml-2 sm:ml-4 text-[10px] sm:text-xs text-emerald-400 font-mono">
                ~/your-next-product
              </span>
            </div>

            {/* Terminal content */}
            <div className="font-mono text-xs sm:text-sm text-emerald-400 mb-6 sm:mb-8">
              <div className="mb-1 sm:mb-2">&gt; status: <span className="text-white">READY_TO_BUILD</span></div>
              <div className="mb-1 sm:mb-2">&gt; timeline: <span className="text-white">10_WEEKS_TO_MVP</span></div>
              <div className="mb-2 sm:mb-4">&gt; command: <span className="text-white animate-pulse">_</span></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-white" style={{ fontFamily: '"Audiowide", cursive' }}>
              Ready to Ship?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-emerald-100 mb-6 sm:mb-10 max-w-2xl">
              Let's build your MVP, scale your platform, or transform your product vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-emerald-600 font-black text-sm sm:text-base uppercase tracking-wider hover:bg-emerald-50 transition-colors"
                style={{ fontFamily: '"Audiowide", cursive' }}
              >
                <a href="/contact">
                  Get Started
                </a>
              </motion.button>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-emerald-400" />
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 sm:border-t-4 sm:border-r-4 border-emerald-400" />
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 sm:border-b-4 sm:border-l-4 border-emerald-400" />
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-emerald-400" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}