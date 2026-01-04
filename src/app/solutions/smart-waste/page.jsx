"use client";

import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";

// Animated waste truck
const AnimatedTruck = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <motion.div
        className="relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Truck body */}
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <svg viewBox="0 0 400 200" className="w-full h-auto">
            {/* Truck container */}
            <rect x="50" y="40" width="200" height="100" fill="#16A085" rx="8" />
            <rect x="60" y="50" width="180" height="80" fill="#19B49A" rx="4" />
            
            {/* Cab */}
            <rect x="250" y="60" width="100" height="80" fill="#0D7A68" rx="8" />
            <rect x="260" y="70" width="35" height="40" fill="#38BDF8" opacity="0.6" rx="2" />
            
            {/* Wheels */}
            <circle cx="100" cy="150" r="20" fill="#1e293b" />
            <circle cx="100" cy="150" r="12" fill="#475569" />
            <circle cx="300" cy="150" r="20" fill="#1e293b" />
            <circle cx="300" cy="150" r="12" fill="#475569" />
            
            {/* Waste bins inside */}
            {[80, 120, 160, 200].map((x, i) => (
              <motion.rect
                key={i}
                x={x}
                y="70"
                width="25"
                height="35"
                fill={i % 2 === 0 ? "#34D399" : "#F59E0B"}
                rx="2"
                initial={{ y: 70 }}
                animate={{ y: [70, 65, 70] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Route line */}
        <motion.div
          className="absolute -bottom-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Waste icons floating */}
        {[
          { icon: "🗑️", delay: 0, x: 50, y: -30 },
          { icon: "♻️", delay: 0.3, x: 150, y: -40 },
          { icon: "📦", delay: 0.6, x: 250, y: -35 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 + item.delay }}
          >
            <motion.span
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
            >
              {item.icon}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Zigzag process flow
const ZigzagProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Bin Integration",
      desc: "Connect IoT sensors to bins for real-time monitoring",
      icon: "🔌",
      side: "left",
    },
    {
      num: "02",
      title: "Smart Routing",
      desc: "AI-powered route optimization for efficient collection",
      icon: "🗺️",
      side: "right",
    },
    {
      num: "03",
      title: "Data Analytics",
      desc: "Track performance with interactive dashboards",
      icon: "📊",
      side: "left",
    },
    {
      num: "04",
      title: "Citizen Engagement",
      desc: "QR-based service requests and feedback",
      icon: "📱",
      side: "right",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Connecting line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-sky-400 to-fuchsia-400 transform -translate-x-1/2 hidden md:block" />

      <div className="space-y-12 md:space-y-24">
        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: step.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              step.side === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content Card */}
            <div className="flex-1 w-full">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-slate-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-sky-400/20 rounded-bl-full" />
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="text-6xl font-black text-emerald-500/20">{step.num}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </motion.div>
            </div>

            {/* Center Circle */}
            <div className="hidden md:flex items-center justify-center shrink-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg text-white font-bold text-xl relative z-10"
              >
                {step.icon}
              </motion.div>
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Card with icon grid
const IconGrid = () => {
  const items = [
    { icon: "🗑️", label: "Bin Tracking" },
    { icon: "🚛", label: "Fleet Management" },
    { icon: "📊", label: "Analytics" },
    { icon: "🔔", label: "Alerts" },
    { icon: "📱", label: "Mobile App" },
    { icon: "♻️", label: "Sustainability" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="aspect-square bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg border border-slate-200 cursor-pointer"
        >
          <span className="text-5xl">{item.icon}</span>
          <span className="text-sm font-semibold text-slate-700 text-center">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default function SmartWastePage() {
  const applications = [
    { name: "Cities", icon: "🏙️", color: "from-emerald-500 to-teal-500" },
    { name: "Communities", icon: "🏘️", color: "from-sky-500 to-blue-500" },
    { name: "Universities", icon: "🎓", color: "from-fuchsia-500 to-pink-500" },
    { name: "Industrial", icon: "🏭", color: "from-amber-500 to-orange-500" },
    { name: "Hotels", icon: "🏨", color: "from-violet-500 to-purple-500" },
    { name: "Government", icon: "🏛️", color: "from-cyan-500 to-teal-500" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION - Unique Split Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-emerald-400"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-5 py-2 mb-6"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ♻️
                </motion.span>
                <span className="text-sm font-semibold tracking-wider">SMART WASTE MANAGEMENT</span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Make Every{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Waste Pickup
                </span>{" "}
                Smart
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-xl">
                Transform your waste ecosystem with IoT-powered management. Control, efficiency, and sustainability at every stage.
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                {["Real-time Monitoring", "Route Optimization", "Full Audit Logs"].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20"
                  >
                    <span className="text-emerald-400">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content - Animated truck */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedTruck />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Complete digital control over your waste management network
            </p>
          </motion.div>

          <IconGrid />
        </div>
      </section>

      {/* ZIGZAG PROCESS SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From sensor to clean street in four simple steps
            </p>
          </motion.div>

          <ZigzagProcess />
        </div>
      </section>

      {/* APPLICATIONS CAROUSEL */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Built for Every Sector
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Trusted by organizations across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((app, idx) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className={`aspect-square bg-gradient-to-br ${app.color} rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-2xl cursor-pointer`}
              >
                <span className="text-5xl">{app.icon}</span>
                <span className="text-sm font-bold text-white text-center">{app.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Ready to Go Smart?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join organizations transforming waste management with intelligent solutions
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-emerald-600 font-bold rounded-xl shadow-2xl"
              >
                <a href="/contact" className="block">
                  Contact Us Today
                </a>
              </motion.button>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white"
              >
                Schedule Demo
              </motion.button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}