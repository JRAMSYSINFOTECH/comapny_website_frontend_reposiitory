"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 3D Server Racks Animation
const ServerRacks = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {/* Server Racks in Perspective */}
        {[0, 1, 2].map((rack, idx) => (
          <motion.div
            key={rack}
            className="relative mb-8"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            {/* Rack Container */}
            <div 
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border-2 border-orange-500/30"
              style={{
                transform: `perspective(1000px) rotateX(${idx * 5}deg) translateZ(${idx * 20}px)`,
              }}
            >
              {/* Server Slots */}
              <div className="space-y-2">
                {[...Array(4)].map((_, slotIdx) => (
                  <motion.div
                    key={slotIdx}
                    className="h-8 bg-gradient-to-r from-orange-600 to-red-600 rounded flex items-center gap-2 px-3"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: rack * 0.3 + slotIdx * 0.2,
                    }}
                  >
                    {/* Status LEDs */}
                    {[...Array(8)].map((_, ledIdx) => (
                      <motion.div
                        key={ledIdx}
                        className={`w-1.5 h-1.5 rounded-full ${
                          ledIdx % 2 === 0 ? 'bg-green-400' : 'bg-yellow-400'
                        }`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: ledIdx * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>
              
              {/* Rack Label */}
              <div className="mt-4 text-center">
                <span className="text-xs font-bold text-orange-400">
                  {idx === 0 ? 'Compute' : idx === 1 ? 'Storage' : 'Network'}
                </span>
              </div>
            </div>
            
            {/* Connection Cables */}
            {idx < 2 && (
              <motion.div
                className="absolute -bottom-4 left-1/2 w-1 h-8 bg-gradient-to-b from-orange-500 to-transparent"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: idx * 0.3,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Hexagonal Grid Background
const HexGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full">
        <defs>
          <pattern id="hexagons" x="0" y="0" width="80" height="92" patternUnits="userSpaceOnUse">
            <path d="M40,0 L60,15 L60,45 L40,60 L20,45 L20,15 Z" stroke="#f97316" strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

// Animated Particles
const TechParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-orange-500 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default function CloudComputingUnique() {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      title: "Cloud Assessment",
      desc: "Evaluate infrastructure, workloads, and migration readiness",
      icon: "🔍",
      color: "orange",
      details: ["Infrastructure audit", "Cost analysis", "Migration roadmap"],
    },
    {
      title: "Architecture Design",
      desc: "Design scalable, secure cloud architecture",
      icon: "🏗️",
      color: "red",
      details: ["Solution design", "Security framework", "Compliance setup"],
    },
    {
      title: "Migration & Deploy",
      desc: "Execute seamless migration with zero downtime",
      icon: "🚀",
      color: "yellow",
      details: ["Data migration", "App deployment", "Testing & validation"],
    },
    {
      title: "DevOps Setup",
      desc: "Implement CI/CD and automation pipelines",
      icon: "⚙️",
      color: "orange",
      details: ["Pipeline setup", "Monitoring tools", "Backup systems"],
    },
    {
      title: "Optimize & Scale",
      desc: "Continuous optimization and cost management",
      icon: "📊",
      color: "red",
      details: ["Performance tuning", "Cost optimization", "24/7 support"],
    },
  ];

  const industries = [
    { name: "Education", icon: "🎓", gradient: "from-orange-500 to-red-500" },
    { name: "Healthcare", icon: "🏥", gradient: "from-red-500 to-pink-500" },
    { name: "Manufacturing", icon: "🏭", gradient: "from-yellow-500 to-orange-500" },
    { name: "Retail", icon: "🛍️", gradient: "from-orange-500 to-amber-500" },
    { name: "Finance", icon: "💳", gradient: "from-amber-500 to-yellow-500" },
    { name: "Public Sector", icon: "🏛️", gradient: "from-red-500 to-orange-500" },
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Security",
      desc: "Bank-level encryption, compliance frameworks, and 24/7 monitoring",
      icon: "🔒",
    },
    {
      title: "Auto-Scaling Infrastructure",
      desc: "Automatically adjust resources based on demand—pay only for what you use",
      icon: "📈",
    },
    {
      title: "99.99% Uptime SLA",
      desc: "Redundant systems across multiple regions ensure your services stay online",
      icon: "⚡",
    },
    {
      title: "Seamless Integration",
      desc: "Connect with existing tools, databases, and third-party services effortlessly",
      icon: "🔗",
    },
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* HERO SECTION - Full Width Isometric */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-orange-950/20 to-slate-950 overflow-hidden flex items-center">
        <HexGrid />
        <TechParticles />
        
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm mb-6"
            >
              <span className="text-orange-400 font-bold text-xs sm:text-sm uppercase tracking-wider">
                ☁️ Cloud Computing Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="block text-white">Infrastructure That</span>
              <span className="block mt-2 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Scales With You
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Build, deploy, and manage applications on enterprise cloud infrastructure. IaaS, PaaS, SaaS—all optimized for performance and cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl font-bold text-white shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Start Free Trial
              </motion.button> */}
              
            </motion.div>
          </div>

          {/* 3D Server Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="max-w-3xl mx-auto"
          >
            <ServerRacks />
          </motion.div>
        </div>
      </section>

      {/* BENEFITS - Expanding Cards */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <HexGrid />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
              Core Benefits
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4">
              Cloud Infrastructure{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Built Right
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Interactive Circular Flow */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <TechParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4">
              Cloud Migration{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Roadmap
              </span>
            </h2>
          </motion.div>

          {/* Circular Process Selector */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {processSteps.map((step, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${
                    activeStep === idx
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="text-2xl mr-2">{step.icon}</span>
                  <span className="text-sm">{step.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 border-2 border-orange-500/30">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl">{processSteps[activeStep].icon}</div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-lg text-slate-300">
                      {processSteps[activeStep].desc}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {processSteps[activeStep].details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* INDUSTRIES - Hexagonal Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-orange-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
              Industries
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4">
              Trusted Across{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                All Sectors
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="group relative"
              >
                <div className={`absolute -inset-2 bg-gradient-to-br ${industry.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all`} />
                <div className="relative bg-slate-800 rounded-2xl p-6 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all text-center">
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <div className="text-sm font-bold text-white">{industry.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 relative overflow-hidden">
        <TechParticles />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight px-4">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-orange-100 mb-10 max-w-2xl mx-auto px-4">
            Join thousands of companies running on our cloud infrastructure. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors shadow-2xl"
            >
              <a href="/contact" className="block">
              Get Started Free
              </a>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}