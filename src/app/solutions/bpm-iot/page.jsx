"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// IoT Connection Network Animation
const IoTNetworkBg = () => {
  const devices = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <defs>
        <linearGradient id="iotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {devices.map((device, i) =>
        devices.slice(i + 1).map((target, j) => {
          const distance = Math.sqrt(
            Math.pow(device.x - target.x, 2) + Math.pow(device.y - target.y, 2)
          );
          if (distance < 25) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={`${device.x}%`}
                y1={`${device.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="url(#iotGrad)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: Math.random() * 2,
                }}
              />
            );
          }
          return null;
        })
      )}
      {devices.map((device) => (
        <motion.circle
          key={device.id}
          cx={`${device.x}%`}
          cy={`${device.y}%`}
          r="3"
          fill="#10b981"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </svg>
  );
};

// Real-time Process Flow Visualization
const ProcessFlowDiagram = () => {
  const steps = [
    { icon: "📡", label: "Sensor", color: "from-emerald-400 to-teal-400" },
    { icon: "⚙️", label: "Process", color: "from-teal-400 to-cyan-400" },
    { icon: "🔔", label: "Alert", color: "from-cyan-400 to-sky-400" },
    { icon: "👤", label: "Action", color: "from-sky-400 to-blue-400" },
  ];

  return (
    <div className="relative w-full h-64 flex items-center justify-center px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <motion.div
              className="flex flex-col items-center gap-2 sm:gap-3"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.3, duration: 0.5 }}
            >
              <motion.div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-3xl sm:text-4xl shadow-2xl relative`}
                animate={{
                  y: [0, -10, 0],
                  boxShadow: [
                    "0 10px 30px rgba(16, 185, 129, 0.3)",
                    "0 20px 50px rgba(16, 185, 129, 0.5)",
                    "0 10px 30px rgba(16, 185, 129, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              >
                {step.icon}
                <motion.div
                  className="absolute -inset-2 rounded-xl sm:rounded-2xl border-2 border-emerald-400/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                />
              </motion.div>
              <span className="text-xs sm:text-sm font-bold text-emerald-400">
                {step.label}
              </span>
            </motion.div>

            {idx < steps.length - 1 && (
              <motion.div
                className="relative hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.3 + 0.5 }}
              >
                <motion.div
                  className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-0 w-3 h-3 bg-emerald-400 rounded-full"
                  style={{ marginTop: "-6px" }}
                  animate={{
                    x: [0, 32, 48],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: idx * 0.3,
                    ease: "linear",
                  }}
                />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function BPMIoTUnique() {
  const [activeTab, setActiveTab] = useState(0);

  const processSteps = [
    {
      num: "01",
      title: "Process Discovery & Mapping",
      desc: "Analyze and document workflows, identify automation opportunities and IoT integration points.",
      icon: "🔍",
      color: "from-emerald-500 to-teal-500",
    },
    {
      num: "02",
      title: "BPM Platform Configuration",
      desc: "Setup and customize BPM tools with digital workflows, business rules, and approval processes.",
      icon: "⚙️",
      color: "from-teal-500 to-cyan-500",
    },
    {
      num: "03",
      title: "IoT Integration & Connectivity",
      desc: "Connect sensors, devices, and gateways for real-time data flow into your processes.",
      icon: "📡",
      color: "from-cyan-500 to-sky-500",
    },
    {
      num: "04",
      title: "Workflow Automation",
      desc: "Enable smart, event-driven automation for tasks, alerts, and compliance workflows.",
      icon: "🤖",
      color: "from-sky-500 to-blue-500",
    },
    {
      num: "05",
      title: "Monitoring & Optimization",
      desc: "Real-time dashboards, analytics, and continuous process improvement support.",
      icon: "📊",
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const industries = [
    { name: "Manufacturing", icon: "🏭", color: "emerald" },
    { name: "Facilities", icon: "🏢", color: "teal" },
    { name: "Healthcare", icon: "🏥", color: "cyan" },
    { name: "Logistics", icon: "🚚", color: "sky" },
    { name: "Utilities", icon: "⚡", color: "blue" },
    { name: "Retail", icon: "🏪", color: "indigo" },
  ];

  const benefits = [
    {
      title: "From Alerts to Actions",
      desc: "IoT events automatically trigger the right workflow, task, or technician dispatch—no manual intervention needed.",
      icon: "⚡",
    },
    {
      title: "End-to-End Visibility",
      desc: "Track every process from sensor signal to resolution with real-time dashboards and status updates.",
      icon: "👁️",
    },
    {
      title: "Teams in Sync",
      desc: "Technicians, supervisors, and devices share the same live status—eliminating communication gaps.",
      icon: "🤝",
    },
    {
      title: "Intelligent Automation",
      desc: "Smart rules and AI-powered decisions optimize resource allocation and minimize downtime.",
      icon: "🧠",
    },
  ];

  return (
    <div className="bg-slate-50 text-slate-900">
      {/* HERO SECTION - Split Screen Design */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 overflow-hidden">
        <IoTNetworkBg />
        
        {/* Circuit Pattern Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                {/* Horizontal lines */}
                <line x1="0" y1="20" x2="40" y2="20" stroke="#10b981" strokeWidth="2" />
                <line x1="60" y1="20" x2="120" y2="20" stroke="#10b981" strokeWidth="2" />
                {/* Vertical lines */}
                <line x1="40" y1="0" x2="40" y2="20" stroke="#10b981" strokeWidth="2" />
                <line x1="80" y1="20" x2="80" y2="60" stroke="#10b981" strokeWidth="2" />
                {/* Connection nodes */}
                <circle cx="40" cy="20" r="4" fill="#10b981" />
                <circle cx="80" cy="20" r="4" fill="#14b8a6" />
                <circle cx="80" cy="60" r="4" fill="#10b981" />
                {/* More complex paths */}
                <line x1="0" y1="60" x2="40" y2="60" stroke="#10b981" strokeWidth="2" />
                <line x1="40" y1="60" x2="40" y2="100" stroke="#10b981" strokeWidth="2" />
                <line x1="40" y1="100" x2="100" y2="100" stroke="#10b981" strokeWidth="2" />
                <circle cx="40" cy="60" r="4" fill="#14b8a6" />
                <circle cx="40" cy="100" r="4" fill="#10b981" />
                <circle cx="100" cy="100" r="4" fill="#14b8a6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Flowing Waves */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              style={{ top: `${20 + i * 20}%` }}
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-sm mb-6"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-400 rounded-full"
                />
                <span className="text-emerald-300 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  BPM & IOT-BASED SOLUTIONS
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                <span className="block text-white">Orchestrate Your</span>
                <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Devices & Workflows
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Connect sensors, assets, and teams in one intelligent flow—transforming every alert into automated action and every process into a seamless journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white shadow-lg hover:shadow-emerald-500/50 transition-all"
                >
                  <a href="/contact" className="block">
                  Contact Us</a>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visual - Process Flow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="bg-slate-900/50 backdrop-blur-xl border border-emerald-400/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8">
                <ProcessFlowDiagram />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - Card Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">
              Complete IoT & BPM{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Integration
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              One control layer for devices, people, and processes—operations feel smoother for your teams and invisible for your customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <div className="relative h-full bg-slate-50 border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-emerald-400/50 transition-all">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 shadow-lg">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE - Horizontal Scroll */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
              Our Process
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4">
              From Signal to{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Resolution
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto">
              A clear, trackable flow from discovery to deployment and optimization
            </p>
          </motion.div>

          {/* Timeline Cards */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="absolute top-24 left-20 right-20 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hidden xl:block" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative"
                >
                  <div className="bg-slate-800/90 backdrop-blur-md border border-emerald-400/30 rounded-2xl sm:rounded-3xl p-6 h-full hover:border-emerald-400/60 transition-all">
                    {/* Number Badge */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center font-black text-white text-xl mb-4 shadow-lg`}>
                      {step.num}
                    </div>

                    {/* Icon */}
                    <div className="text-4xl mb-4">{step.icon}</div>

                    {/* Content */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES - Icon Grid */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-emerald-600 font-bold tracking-widest uppercase text-xs sm:text-sm mb-3">
              Industries We Serve
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">
              Sector-Specific{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group"
              >
                <div className="bg-white border-2 border-slate-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-emerald-400/50 hover:shadow-xl transition-all">
                  <motion.div
                    className={`text-4xl sm:text-5xl mb-3 sm:mb-4 inline-block`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {industry.icon}
                  </motion.div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {industry.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}