"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Circuit Board Pattern Background
const CircuitPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M20 0L20 40M40 20L80 20M60 40L60 100M0 60L40 60M80 80L100 80M40 0L40 20M60 20L60 40M80 20L80 80" 
          stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
        <circle cx="20" cy="40" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="40" cy="20" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="80" cy="20" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="60" cy="40" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="40" cy="60" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="80" cy="80" r="2" fill="currentColor" opacity="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit)"/>
  </svg>
);

// Data Stream Animation
const DataStream = ({ delay = 0 }) => (
  <motion.div
    className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
    style={{ width: "200px" }}
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: "300%", opacity: [0, 1, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  />
);

// Hexagon Grid
const HexagonGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" width="100" height="86.6" patternUnits="userSpaceOnUse">
          <polygon points="50,1 95,25.5 95,74.5 50,99 5,74.5 5,25.5" 
            stroke="currentColor" strokeWidth="1" fill="none"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)"/>
    </svg>
  </div>
);

export default function IoTServicesPage() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const services = [
    {
      number: "01",
      title: "Smart Device Mesh",
      subtitle: "SENSOR INTEGRATION",
      description: "Connect thousands of IoT sensors, beacons, and edge devices into a unified intelligent mesh network with real-time data synchronization.",
      icon: "⬡",
      color: "from-orange-500 to-red-500",
      accent: "orange",
    },
    {
      number: "02",
      title: "Neural Edge Processing",
      subtitle: "EDGE COMPUTING",
      description: "Deploy AI-powered edge nodes that process data locally, reducing cloud dependency and enabling millisecond response times for critical operations.",
      icon: "◈",
      color: "from-cyan-500 to-blue-500",
      accent: "cyan",
    },
    {
      number: "03",
      title: "Quantum Analytics Pipeline",
      subtitle: "DATA INTELLIGENCE",
      description: "Transform raw IoT telemetry into predictive insights using advanced analytics, machine learning, and real-time pattern recognition.",
      icon: "◆",
      color: "from-purple-500 to-pink-500",
      accent: "purple",
    },
    {
      number: "04",
      title: "Fortress Security Layer",
      subtitle: "ZERO-TRUST ARCHITECTURE",
      description: "Military-grade encryption, blockchain-verified authentication, and automated threat detection for enterprise-level IoT deployments.",
      icon: "◇",
      color: "from-green-500 to-emerald-500",
      accent: "green",
    },
  ];

  const industries = [
    { name: "Industrial IoT", tag: "MANUFACTURING", icon: "⚙", stat: "99.9% uptime" },
    { name: "Smart Infrastructure", tag: "CITIES", icon: "🏗", stat: "50M+ devices" },
    { name: "Connected Logistics", tag: "SUPPLY CHAIN", icon: "📦", stat: "Real-time tracking" },
    { name: "Energy Grid", tag: "UTILITIES", icon: "⚡", stat: "Predictive maintenance" },
    { name: "Healthcare IoT", tag: "MEDICAL", icon: "🏥", stat: "HIPAA compliant" },
    { name: "Agriculture 4.0", tag: "FARMING", icon: "🌱", stat: "Precision farming" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden" style={{ fontFamily: '"Rajdhani", system-ui, sans-serif' }}>
      {/* Add Rajdhani font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* HERO SECTION - DIAGONAL SPLIT */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <CircuitPattern />
          <HexagonGrid />
          
          {/* Diagonal accent stripes */}
          <div className="absolute inset-0">
            <motion.div 
              className="absolute h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
              style={{ 
                width: "200%", 
                left: "-50%",
                top: "30%",
                transform: "rotate(-15deg)",
              }}
              animate={{ x: ["0%", "50%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              style={{ 
                width: "200%", 
                left: "-50%",
                top: "70%",
                transform: "rotate(-15deg)",
              }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left content - 7 columns */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Stylized badge */}
              <div className="mb-8 inline-block relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 blur opacity-50" />
                <div className="relative px-6 py-2 bg-black border border-orange-500 clip-corner">
                  <span className="font-bold tracking-[0.3em] text-orange-500 text-xs" style={{ fontFamily: '"Orbitron", monospace' }}>
                    NEXT-GEN IOT INFRASTRUCTURE
                  </span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.95]" style={{ fontFamily: '"Orbitron", monospace' }}>
                <span className="block text-white">BUILD THE</span>
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    CONNECTED
                  </span>
                </span>
                <span className="block mt-2 text-white">FUTURE</span>
              </h1>

              <div className="relative mb-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-transparent" />
                <p className="text-lg sm:text-xl text-gray-300 pl-6 max-w-xl leading-relaxed">
                  Industrial-grade IoT platforms that transform sensor networks into intelligent, 
                  self-optimizing systems. From edge to cloud, we engineer connectivity that scales.
                </p>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "10M+", label: "Devices Connected" },
                  { value: "99.99%", label: "System Uptime" },
                  { value: "<50ms", label: "Edge Latency" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur group-hover:blur-md transition-all" />
                    <div className="relative bg-gray-900/90 border border-gray-800 p-3 clip-corner-sm">
                      <div className="text-2xl font-black text-orange-500" style={{ fontFamily: '"Orbitron", monospace' }}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right visualization - 5 columns */}
            <motion.div 
              className="lg:col-span-5 hidden lg:block"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative h-[600px]">
                {/* Central node */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(249, 115, 22, 0.6)",
                      "0 0 80px rgba(249, 115, 22, 0.9)",
                      "0 0 40px rgba(249, 115, 22, 0.6)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 clip-hex flex items-center justify-center">
                    <div className="text-5xl">⬢</div>
                  </div>
                </motion.div>

                {/* Orbiting devices */}
                {[
                  { angle: 0, distance: 180, icon: "📡", delay: 0, color: "orange" },
                  { angle: 60, distance: 180, icon: "🔌", delay: 0.5, color: "cyan" },
                  { angle: 120, distance: 180, icon: "💾", delay: 1, color: "purple" },
                  { angle: 180, distance: 180, icon: "⚡", delay: 1.5, color: "green" },
                  { angle: 240, distance: 180, icon: "🌐", delay: 2, color: "orange" },
                  { angle: 300, distance: 180, icon: "🔒", delay: 2.5, color: "cyan" },
                ].map((device, idx) => {
                  const x = Math.cos((device.angle * Math.PI) / 180) * device.distance;
                  const y = Math.sin((device.angle * Math.PI) / 180) * device.distance;
                  
                  return (
                    <motion.div
                      key={idx}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        marginLeft: `${x}px`,
                        marginTop: `${y}px`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        rotate: 360,
                      }}
                      transition={{
                        scale: { delay: device.delay, duration: 0.5 },
                        opacity: { delay: device.delay, duration: 0.5 },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className={`w-16 h-16 border-2 ${
                          device.color === 'orange' ? 'border-orange-500 bg-orange-500/10' :
                          device.color === 'cyan' ? 'border-cyan-500 bg-cyan-500/10' :
                          device.color === 'purple' ? 'border-purple-500 bg-purple-500/10' :
                          'border-green-500 bg-green-500/10'
                        } clip-corner-sm flex items-center justify-center text-2xl backdrop-blur-sm`}
                      >
                        {device.icon}
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
                    const x = 50 + (Math.cos((angle * Math.PI) / 180) * 180 * 100) / 600;
                    const y = 50 + (Math.sin((angle * Math.PI) / 180) * 180 * 100) / 600;
                    
                    return (
                      <motion.line
                        key={idx}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="#f97316"
                        strokeWidth="2"
                        strokeOpacity="0.3"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: [0, 1, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.3,
                        }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-xs text-gray-500 uppercase tracking-widest">Scroll</div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-16 bg-gradient-to-b from-orange-500 to-transparent"
          />
        </div>
      </section>

      {/* SERVICES SECTION - DIAGONAL CARDS */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <CircuitPattern />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500" />
              <span className="text-orange-500 font-bold tracking-[0.3em] text-sm" style={{ fontFamily: '"Orbitron", monospace' }}>
                CORE CAPABILITIES
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center" style={{ fontFamily: '"Orbitron", monospace' }}>
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                SYSTEM ARCHITECTURE
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`relative group w-full lg:w-5/6 ${idx % 2 === 0 ? 'lg:ml-0' : 'lg:mr-0'}`}>
                  {/* Glowing background */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                  
                  {/* Main card */}
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-gray-700 transition-all duration-300 overflow-hidden">
                    {/* Diagonal accent */}
                    <div className={`absolute top-0 right-0 w-32 h-full bg-gradient-to-l ${service.color} opacity-10 transform skew-x-12 translate-x-16`} />
                    
                    <div className="relative p-8 lg:p-12">
                      <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Number and icon */}
                        <div className="flex items-center gap-6">
                          <div className={`text-8xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent`} 
                               style={{ fontFamily: '"Orbitron", monospace' }}>
                            {service.number}
                          </div>
                          <div className={`text-6xl`}>
                            {service.icon}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className={`inline-block px-4 py-1 border border-${service.accent}-500 bg-${service.accent}-500/10 mb-3 clip-corner-sm`}>
                            <span className={`text-${service.accent}-500 text-xs font-bold tracking-[0.2em]`}>
                              {service.subtitle}
                            </span>
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-black mb-4" style={{ fontFamily: '"Orbitron", monospace' }}>
                            {service.title}
                          </h3>
                          <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-2xl">
                            {service.description}
                          </p>
                          
                          {/* Feature tags */}
                          <div className="flex flex-wrap gap-2">
                            {[
                              idx === 0 && ["Multi-Protocol", "Auto-Discovery", "Mesh Networks"],
                              idx === 1 && ["AI/ML Integration", "Local Processing", "Offline Mode"],
                              idx === 2 && ["Predictive Models", "Real-Time Alerts", "Custom Dashboards"],
                              idx === 3 && ["End-to-End Encryption", "Audit Logs", "Compliance Ready"],
                            ][idx]?.map((tag) => (
                              <span key={tag} className="px-3 py-1 border border-gray-700 text-xs text-gray-400 hover:border-gray-600 transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data stream overlay */}
                    <div className="absolute top-1/2 left-0 right-0 overflow-hidden pointer-events-none">
                      <DataStream delay={idx * 0.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION - GRID WITH OVERLAP */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="absolute inset-0">
          <HexagonGrid />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4" style={{ fontFamily: '"Orbitron", monospace' }}>
              <span className="text-white">DEPLOYED ACROSS</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                CRITICAL SECTORS
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 opacity-0 group-hover:opacity-50 blur transition-all duration-300" />
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <div className="px-2 py-1 border border-orange-500/30 bg-orange-500/5">
                      <span className="text-[10px] font-bold text-orange-500 tracking-widest">
                        {industry.tag}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: '"Orbitron", monospace' }}>
                    {industry.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    {industry.stat}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - FULL WIDTH DIAGONAL */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <CircuitPattern />
        </div>
        
        {/* Diagonal stripes */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-full w-1 bg-white/10"
              style={{ left: `${i * 12}%`, transform: 'skewX(-15deg)' }}
              animate={{ x: ['0%', '100%'] }}
              transition={{ duration: 10 + i, repeat: Infinity, ease: 'linear' }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-block px-6 py-2 bg-black/30 border border-white/30 backdrop-blur-sm">
              <span className="font-bold tracking-[0.3em] text-white/90 text-sm" style={{ fontFamily: '"Orbitron", monospace' }}>
                READY TO SCALE?
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: '"Orbitron", monospace' }}>
              ENGINEER YOUR
              <br />
              <span className="text-black">IOT ECOSYSTEM</span>
            </h2>

            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Deploy enterprise-grade IoT infrastructure that scales from prototype to production. 
              Talk to our solutions architects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-black hover:bg-gray-900 font-bold uppercase tracking-wider transition-colors clip-corner"
              >
                <a href="/contact" className="flex items-center justify-center">
                  Contact
                </a>
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom CSS for clip corners */}
      <style jsx>{`
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
        .clip-corner-sm {
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
        }
        .clip-hex {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
}