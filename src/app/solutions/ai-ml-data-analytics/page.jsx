"use client";

import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";
const darkTeal = "#0A3D3E";

// AI/ML themed particle system
const AIDataParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neural network nodes */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
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
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              i % 4 === 0
                ? "bg-emerald-400"
                : i % 4 === 1
                ? "bg-cyan-400"
                : i % 4 === 2
                ? "bg-purple-400"
                : "bg-pink-400"
            }`}
          />
        </motion.div>
      ))}

      {/* Data flow lines */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`flow-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
          style={{
            width: "250px",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["-150%", "250%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Binary rain */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-emerald-400/30 text-xs font-mono"
          style={{
            left: `${(i * 5) % 100}%`,
            top: "-5%",
          }}
          animate={{
            y: ["0%", "110vh"],
          }}
          transition={{
            duration: Math.random() * 4 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </motion.div>
      ))}

      {/* Neural connection waves */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute rounded-full border border-purple-400/20"
          style={{
            width: `${Math.random() * 150 + 100}px`,
            height: `${Math.random() * 150 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 12 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Data packets */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-sm"
          style={{
            left: `${10 + i * 12}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["0%", "100vw"],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 6 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* ML processing beam */}
      <motion.div
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
        animate={{
          y: ["0%", "100%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glowing data points */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-pink-400/40 to-purple-400/40 blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* AI thinking dots */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`think-${i}`}
          className="absolute flex gap-1"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
          <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
          <div className="w-1 h-1 rounded-full bg-emerald-400/60" />
        </motion.div>
      ))}

      {/* Neural pathways */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`path-${i}`}
            d={`M ${Math.random() * 100} ${Math.random() * 100} Q ${
              Math.random() * 50 + 25
            } ${Math.random() * 50 + 25} ${Math.random() * 100} ${Math.random() * 100}`}
            stroke={i % 2 === 0 ? "#10b981" : "#06b6d4"}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const steps = [
  {
    title: "Opportunity Assessment",
    desc: "We evaluate your business data, identify AI/analytics possibilities, and scope high‑value use cases for prediction, automation, or insight.",
    tag: "DISCOVER",
  },
  {
    title: "Data Engineering & Preparation",
    desc: "Our data experts clean, integrate, and structure the data—ensuring accuracy, compliance, and readiness for modeling.",
    tag: "PREPARE",
  },
  {
    title: "Model Development & Validation",
    desc: "We build, test, and refine custom machine learning/AI models—always measuring for accuracy, fairness, and business value.",
    tag: "BUILD",
  },
  {
    title: "Integration & Intelligence",
    desc: "Analytics and AI are embedded into your apps, dashboards, or workflow for real‑time insights and automated decisions.",
    tag: "DEPLOY",
  },
  {
    title: "Monitoring & Improvement",
    desc: "Algorithms and dashboards are monitored, retrained, and improved as your business and data landscape evolves.",
    tag: "OPTIMIZE",
  },
];

const exampleUses = [
  {
    title: "Retail",
    desc: "Demand forecasting, customer segmentation, and personalized offers.",
    icon: "🛒",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Healthcare",
    desc: "Diagnostics, workflow automation, and patient‑outcome prediction.",
    icon: "🏥",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Manufacturing",
    desc: "Predictive maintenance and process optimization.",
    icon: "🏭",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Finance",
    desc: "Fraud detection, credit scoring, and real‑time risk analysis.",
    icon: "💳",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Smart Cities",
    desc: "Sensor analytics, transport insights, and energy optimization.",
    icon: "🏙",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Education",
    desc: "Performance tracking and early warning for student intervention.",
    icon: "🎓",
    gradient: "from-pink-500 to-rose-500",
  },
];

const valuePoints = [
  {
    label: "End-to-End AI Solutions",
    desc: "From data strategy to production deployment—we handle the complete AI lifecycle with proven methodologies.",
    icon: "🔄",
    color: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    label: "Explainable & Ethical AI",
    desc: "Transparent models you can trust, with built-in fairness, interpretability, and bias detection.",
    icon: "🧠",
    color: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    label: "Real-Time Intelligence",
    desc: "Live dashboards and automated decisions powered by streaming data pipelines and edge computing.",
    icon: "⚡",
    color: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    label: "Enterprise-Grade Security",
    desc: "Bank-level encryption, compliance-ready architecture, and comprehensive audit trails for peace of mind.",
    icon: "🛡️",
    color: "from-orange-500 via-amber-500 to-yellow-500",
  },
];

export default function AIMLDataAnalyticsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 py-24 sm:py-32 md:py-40 lg:py-48 min-h-screen flex items-center">
        {/* Complex AI-themed animated background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Large gradient orbs */}
          <motion.div
            className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -right-32 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-purple-500/25 via-pink-500/15 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.45, 0.25],
              x: [0, -60, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute left-1/4 bottom-0 h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 40, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          <AIDataParticles />

          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(${logoGreen} 1px, transparent 1px),
                linear-gradient(90deg, ${logoGreen} 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        </div>

        <div className="mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-md border-2"
              style={{
                backgroundColor: "rgba(25,180,154,0.1)",
                borderColor: logoGreen,
                color: logoGreen,
              }}
            >
              <motion.span
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="text-lg"
              >
                🤖
              </motion.span>
              AI / ML & DATA ANALYTICS
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-6 sm:mb-8 px-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Transform Data into
              </motion.span>
              <br />
              <motion.span
                className="relative inline-block mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400"
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Intelligent Action
                </span>
                <motion.div
                  className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-10 max-w-4xl mx-auto px-4 leading-relaxed"
            >
              Predictive analytics, custom AI models, and intuitive dashboards that turn hidden patterns into everyday decisions—across every sector you work in.
            </motion.p>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm px-4 mb-10 sm:mb-12"
            >
              {[
                { icon: "📊", text: "92% Prediction Accuracy", color: "emerald" },
                { icon: "🛡️", text: "Enterprise Security", color: "cyan" },
                { icon: "✅", text: "Explainable Results", color: "purple" },
              ].map((badge, idx) => (
                <motion.span
                  key={badge.text}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-950/70 backdrop-blur-md font-medium`}
                  style={{
                    borderColor:
                      badge.color === "emerald"
                        ? "rgba(52, 211, 153, 0.4)"
                        : badge.color === "cyan"
                        ? "rgba(34, 211, 238, 0.4)"
                        : "rgba(168, 85, 247, 0.4)",
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                    className="text-base sm:text-lg"
                  >
                    {badge.icon}
                  </motion.span>
                  <span className="text-slate-200">{badge.text}</span>
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <motion.button
                className="px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg text-white shadow-2xl relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)`,
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(16, 185, 129, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <a href="/contact" className="relative z-10">
                  Get Started with AI Today
                </a>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <motion.div
            className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-emerald-400 blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-purple-400 blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 text-center"
          >
            <p className="text-sm sm:text-base font-bold tracking-[0.3em] text-emerald-400 mb-4">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white px-4 mb-6">
              Complete AI & Analytics{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4">
              Not just models—complete, secure, and explainable data products crafted around your KPIs and real business decisions.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {valuePoints.map((value, idx) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute -inset-[2px] rounded-3xl sm:rounded-[2rem] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 bg-gradient-to-r ${value.color}`} />
                <div className="relative h-full flex flex-col gap-5 rounded-3xl sm:rounded-[2rem] bg-slate-900/95 border border-slate-800 px-6 sm:px-8 py-7 sm:py-9 backdrop-blur-sm">
                  <div className={`h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl bg-gradient-to-br ${value.color}`}>
                    <span className="text-3xl sm:text-4xl">{value.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
                      {value.label}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS - Card Based */}
      <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <p className="text-sm sm:text-base font-bold tracking-[0.3em] text-emerald-600 mb-4">
              OUR PROCESS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 px-4">
              From Data to Intelligence
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {steps.map((stage, idx) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1 : -1 }}
                className={`relative group ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-purple-400 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-white text-xl sm:text-2xl font-black shadow-lg">
                      {idx + 1}
                    </div>
                    <span className="text-[10px] sm:text-xs font-black tracking-[0.2em] text-emerald-600">
                      {stage.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 md:py-28 bg-slate-900">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.15, once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm sm:text-base font-bold tracking-[0.3em] text-emerald-400 mb-4">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white px-4">
              AI Solutions Across Sectors
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {exampleUses.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                className="group relative"
              >
                <div className={`absolute -inset-[2px] rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 bg-gradient-to-br ${item.gradient}`} />
                <div className="relative h-full rounded-3xl bg-slate-800/90 border border-slate-700 px-6 sm:px-8 py-8 sm:py-10 backdrop-blur-sm">
                  <div className={`inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} text-3xl sm:text-4xl shadow-2xl mb-6`}>
                    {item.icon}
                  </div>
                  <h4 className="font-black text-xl sm:text-2xl text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}