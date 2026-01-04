"use client";

import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Enhanced animated particles for hero background
const TechParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: 0,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <div
            className={`w-1 h-1 rounded-full ${
              i % 3 === 0
                ? "bg-emerald-400"
                : i % 3 === 1
                ? "bg-sky-400"
                : "bg-fuchsia-400"
            }`}
          />
        </motion.div>
      ))}
      
      {/* Animated lines */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
          style={{
            width: "200px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["-100%", "200%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Floating circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full border border-emerald-400/20"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Data streams */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-px h-32 bg-gradient-to-b from-transparent via-sky-400/40 to-transparent"
          style={{
            left: `${10 + i * 15}%`,
            top: "-20%",
          }}
          animate={{
            y: ["0%", "150%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Scanning beam effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"
        animate={{
          y: ["0%", "100%"],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pulsing dots grid */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full bg-emerald-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

// QR Code Image Component
const AnimatedQRCode = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Floating QR Card */}
      <motion.div
        className="rounded-3xl bg-white p-8 shadow-2xl border-4 border-slate-100 relative overflow-hidden"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-sky-400/10 to-fuchsia-400/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* QR Code SVG */}
        <div className="relative z-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Top-left finder pattern */}
            <rect x="10" y="10" width="60" height="60" fill="#1e293b" rx="4"/>
            <rect x="18" y="18" width="44" height="44" fill="white" rx="2"/>
            <rect x="26" y="26" width="28" height="28" fill="#1e293b" rx="2"/>
            
            {/* Top-right finder pattern */}
            <rect x="130" y="10" width="60" height="60" fill="#1e293b" rx="4"/>
            <rect x="138" y="18" width="44" height="44" fill="white" rx="2"/>
            <rect x="146" y="26" width="28" height="28" fill="#1e293b" rx="2"/>
            
            {/* Bottom-left finder pattern */}
            <rect x="10" y="130" width="60" height="60" fill="#1e293b" rx="4"/>
            <rect x="18" y="138" width="44" height="44" fill="white" rx="2"/>
            <rect x="26" y="146" width="28" height="28" fill="#1e293b" rx="2"/>
            
            {/* Data modules */}
            <rect x="80" y="20" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="20" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="20" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="20" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="34" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="34" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="34" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="48" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="48" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="48" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="62" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="62" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="20" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="34" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="48" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="62" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="130" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="144" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="158" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="172" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="186" y="80" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="94" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="94" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="130" y="94" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="158" y="94" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="172" y="94" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="108" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="108" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="108" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="144" y="108" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="158" y="108" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="186" y="108" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="122" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="122" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="130" y="122" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="144" y="122" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="172" y="122" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="136" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="136" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="130" y="136" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="158" y="136" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="186" y="136" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="80" y="150" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="150" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="150" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="144" y="150" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="172" y="150" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="92" y="164" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="116" y="164" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="130" y="164" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="158" y="164" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="186" y="164" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="104" y="178" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="130" y="178" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="144" y="178" width="8" height="8" fill="#1e293b" rx="1"/>
            <rect x="172" y="178" width="8" height="8" fill="#1e293b" rx="1"/>
          </svg>
        </div>

        {/* Scan line */}
        <motion.div
          className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
          style={{ top: "16px" }}
          animate={{
            y: [0, 280],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1.5,
          }}
        />

        {/* Corner indicators */}
        {[
          { top: "16px", left: "16px" },
          { top: "16px", right: "16px" },
          { bottom: "16px", left: "16px" },
          { bottom: "16px", right: "16px" },
        ].map((pos, idx) => (
          <motion.div
            key={idx}
            className="absolute w-12 h-12 border-3 border-emerald-400"
            style={{
              ...pos,
              borderRadius: "8px",
              ...(pos.top && pos.left && { borderRight: "none", borderBottom: "none" }),
              ...(pos.top && pos.right && { borderLeft: "none", borderBottom: "none" }),
              ...(pos.bottom && pos.left && { borderRight: "none", borderTop: "none" }),
              ...(pos.bottom && pos.right && { borderLeft: "none", borderTop: "none" }),
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [1.2, 1, 1, 1.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.5,
              delay: idx * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Floating icons around QR */}
      <motion.div
        className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ⚡
      </motion.div>

      <motion.div
        className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        🔗
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        📊
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        🔒
      </motion.div>
    </motion.div>
  );
};

const stages = [
  {
    title: "QR Code Creation & Customization",
    desc: "Instantly generate unique, scannable codes for assets, people, documents, events, or locations.",
    icon: "🎨",
  },
  {
    title: "Deployment & Distribution",
    desc: "Print, embed, or distribute QRs on packaging, ID cards, signages, tickets, bins, and more.",
    icon: "🚀",
  },
  {
    title: "Engagement & Integration",
    desc: "Upon scan, QRs trigger context-aware actions: launch content, collect data, track attendance.",
    icon: "🔗",
  },
  {
    title: "Monitoring & Analytics",
    desc: "Live dashboards reveal code usage, scan locations, devices, and engagement insights.",
    icon: "📊",
  },
  {
    title: "Security & Access Control",
    desc: "Set up expiry dates, permissions, and authentication for any QR workflow.",
    icon: "🔒",
  },
];

const exampleApps = [
  { title: "Education", desc: "Digital homework, attendance, & results access with QRs on student IDs or sheets.", icon: "🎓" },
  { title: "Healthcare", desc: "Patient record access and check-in with secure QR identity and session codes.", icon: "🏥" },
  { title: "Smart Cities", desc: "Citizen/bin tracking & feedback; connect physical infrastructure to digital control.", icon: "🏙️" },
  { title: "Museums & Temples", desc: "Audio guides, donation, ticketing—with multi-language QR experiences.", icon: "🏛️" },
  { title: "Retail", desc: "Product info, authenticity, loyalty offers—all via on-product QR codes.", icon: "🛍️" },
  { title: "Events & Hotels", desc: "Contactless check-in, booking confirmations, and room access using QRs.", icon: "🎫" },
];

const features = [
  {
    title: "Bulk & Custom QR Generation",
    desc: "Centralized QR creation with templates, customization, and dynamic data encoding.",
    icon: "📱",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Real-time Scan Insights",
    desc: "Track usage patterns, locations, devices, and engagement for optimization.",
    icon: "📊",
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "IoT, CRM, Messaging",
    desc: "Connect QRs to your existing systems: payments, IoT devices, messaging apps.",
    icon: "🔗",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    title: "Enterprise-grade Protection",
    desc: "Expiry dates, permissions, authentication, and audit trails for compliance.",
    icon: "🔒",
    color: "from-violet-500 to-purple-500",
  },
];

export default function ContextualQrPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 min-h-screen flex items-center">
        {/* Enhanced animated background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <motion.div
            className="absolute -left-20 sm:-left-32 -top-20 sm:-top-32 h-60 w-60 sm:h-96 sm:w-96 rounded-full bg-emerald-500/30 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-20 sm:-right-40 -top-10 h-56 w-56 sm:h-80 sm:w-80 rounded-full bg-sky-500/25 blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.25, 0.5, 0.25],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute -right-10 sm:-right-24 bottom-0 h-60 w-60 sm:h-96 sm:w-96 rounded-full bg-fuchsia-500/25 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.45, 0.25],
              x: [0, 30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          <TechParticles />
          
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(${logoGreen} 1px, transparent 1px),
                linear-gradient(90deg, ${logoGreen} 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest border border-emerald-500/30"
                style={{ backgroundColor: "rgba(25,180,154,0.15)", color: logoGreen }}
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  ⚡
                </motion.span>
                Powered by Innovation
              </motion.p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-5 lg:mb-6">
                Smart QR codes that{" "}
                <motion.span
                  style={{ color: logoGreen }}
                  animate={{
                    textShadow: [
                      `0 0 20px ${logoGreen}40`,
                      `0 0 40px ${logoGreen}80`,
                      `0 0 20px ${logoGreen}40`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  understand
                </motion.span>
                <br className="hidden sm:inline" />
                <span className="inline sm:hidden"> </span>
                context & trigger actions
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
                Build adaptive QR journeys for business, schools, cities. Complete lifecycle: creation, deployment, analytics, security—all in one platform.
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start text-xs sm:text-sm mb-8">
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2 bg-slate-950/60 backdrop-blur-md"
                  whileHover={{ scale: 1.05, borderColor: "rgba(52, 211, 153, 0.6)" }}
                >
                  <span className="text-lg">🧠</span>
                  <span className="text-slate-200">Centralized management</span>
                </motion.span>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-4 py-2 bg-slate-950/60 backdrop-blur-md"
                  whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                >
                  <span className="text-lg">📊</span>
                  <span className="text-slate-200">Live scan analytics</span>
                </motion.span>
                <motion.span
                  className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 px-4 py-2 bg-slate-950/60 backdrop-blur-md"
                  whileHover={{ scale: 1.05, borderColor: "rgba(232, 121, 249, 0.6)" }}
                >
                  <span className="text-lg">🔒</span>
                  <span className="text-slate-200">Enterprise security</span>
                </motion.span>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.button
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-white shadow-lg shadow-emerald-500/50"
                  style={{ background: `linear-gradient(135deg, ${logoGreen}, #16A085)` }}
                  whileHover={{ scale: 1.05, boxShadow: `0 20px 60px ${logoGreen}60` }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/contact" className="block">Get Started</a>
                </motion.button>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-6 text-xs sm:text-sm text-slate-400"
              >
                🎯 Transforming QR technology for the modern world
              </motion.p>
            </motion.div>

            <div className="flex justify-center lg:justify-end">
              <AnimatedQRCode />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16 text-center"
          >
            <p className="text-sm lg:text-base font-semibold tracking-widest text-emerald-500 mb-3">
              WHAT WE PROVIDE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 max-w-3xl mx-auto">
              Complete QR lifecycle management in one platform
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Enterprise-grade solution that revolutionizes how businesses use QR technology.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 rounded-2xl lg:rounded-3xl bg-white px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 shadow-lg border border-slate-100 transition-all duration-300 hover:shadow-2xl"
              >
                <motion.div
                  className={`h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${feature.color}`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl">{feature.icon}</span>
                </motion.div>
                <div className="flex flex-col flex-1">
                  <p className="text-xs font-semibold tracking-widest text-emerald-500 mb-1">
                    {feature.title.toUpperCase().split(" ")[0]}
                  </p>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-50">
        <div className="max-w-7xl mx-auto relative">
          <div className="pointer-events-none absolute -inset-x-32 -top-16 -bottom-10 opacity-30">
            <div className="mx-auto h-full w-full max-w-5xl bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-sky-500/30 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center mb-12 lg:mb-16"
          >
            <p className="text-xs sm:text-sm lg:text-base font-semibold tracking-widest text-emerald-400 mb-3">
              QR SOLUTION PROCESS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4">
              From QR creation to actionable insights
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto">
              A complete workflow that transforms simple scans into powerful business intelligence.
            </p>
          </motion.div>

          <div className="relative z-10">
            <div className="hidden lg:block rounded-3xl bg-slate-900/80 border border-emerald-500/20 shadow-2xl px-8 py-10">
              <div className="relative flex items-start justify-between gap-6">
                <div className="pointer-events-none absolute left-0 right-0 top-12 h-0.5 bg-gradient-to-r from-emerald-300 via-teal-400 to-sky-400" />

                {stages.map((stage, idx) => (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="relative z-10 flex-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className={`flex items-center justify-center h-12 w-12 rounded-2xl border-2 bg-slate-950 shadow-lg text-lg font-bold
                          ${
                            idx === 0
                              ? "border-emerald-400 text-emerald-300"
                              : idx === 1
                              ? "border-sky-400 text-sky-300"
                              : idx === 2
                              ? "border-amber-400 text-amber-300"
                              : idx === 3
                              ? "border-fuchsia-400 text-fuchsia-300"
                              : "border-emerald-500 text-emerald-300"
                          }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {stage.icon}
                      </motion.div>

                      <p className="mt-4 text-xs font-semibold tracking-widest text-emerald-300 uppercase">
                        Step {idx + 1}
                      </p>

                      <h3 className="mt-2 text-sm font-bold text-slate-50 leading-tight px-2">
                        {stage.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed max-w-[200px]">
                        {stage.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:hidden space-y-6">
              {stages.map((stage, idx) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  {idx < stages.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-sky-400 -z-10" />
                  )}
                  
                  <div className="flex gap-4 p-5 rounded-2xl bg-slate-900/80 border border-emerald-500/20">
                    <div
                      className={`flex items-center justify-center h-12 w-12 shrink-0 rounded-xl border-2 bg-slate-950 shadow-lg text-lg font-bold
                        ${
                          idx === 0
                            ? "border-emerald-400 text-emerald-300"
                            : idx === 1
                            ? "border-sky-400 text-sky-300"
                            : idx === 2
                            ? "border-amber-400 text-amber-300"
                            : idx === 3
                            ? "border-fuchsia-400 text-fuchsia-300"
                            : "border-emerald-500 text-emerald-300"
                        }`}
                    >
                      {stage.icon}
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-xs font-semibold tracking-widest text-emerald-300 uppercase mb-1">
                        Step {idx + 1}
                      </p>
                      <h3 className="text-base font-bold text-slate-50 mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-sm lg:text-base font-semibold tracking-widest text-emerald-500 mb-3">
              INDUSTRY APPLICATIONS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900">
              Applications across sectors
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Our platform serves diverse industries with tailored QR solutions.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exampleApps.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.04 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300
                    ${
                      idx % 3 === 0
                        ? "bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400"
                        : idx % 3 === 1
                        ? "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"
                        : "bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400"
                    }
                  `}
                />
                <div className="relative rounded-2xl bg-white border border-slate-100 px-5 py-6 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
                  <div className="mb-4 flex items-center justify-center">
                    <div
                      className={`h-14 w-14 rounded-xl flex items-center justify-center text-2xl text-white
                        ${
                          idx % 3 === 0
                            ? "bg-gradient-to-br from-emerald-500 to-teal-500"
                            : idx % 3 === 1
                            ? "bg-gradient-to-br from-fuchsia-500 to-orange-400"
                            : "bg-gradient-to-br from-indigo-500 to-sky-500"
                        }
                      `}
                    >
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold mb-2 text-base lg:text-lg text-slate-900 text-center">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* VISION SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="text-sm lg:text-base font-semibold tracking-widest text-emerald-500 mb-3">
              OUR APPROACH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 max-w-3xl mx-auto">
              Building something extraordinary
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Vision",
                desc: "To revolutionize how businesses and organizations leverage QR technology for seamless digital experiences.",
                icon: "🎯",
                color: "from-emerald-500 to-teal-500",
              },
              {
                title: "Mission",
                desc: "Creating an enterprise-grade QR platform that's powerful yet simple, serving everyone from startups to enterprises.",
                icon: "🚀",
                color: "from-sky-500 to-blue-500",
              },
              {
                title: "Values",
                desc: "Innovation, security, and user experience drive every decision we make as we build the future of QR solutions.",
                icon: "💎",
                color: "from-fuchsia-500 to-pink-500",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-2xl text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}