"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Animated Neural Network Background
const NeuralNetworkBg = () => {
  const nodes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((target, j) => {
          const distance = Math.sqrt(
            Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2)
          );
          if (distance < 20) {
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="url(#lineGrad)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
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
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="2"
          fill="#3b82f6"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
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

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          <div className={`w-1.5 h-1.5 rounded-full ${
            i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-cyan-400' : 'bg-teal-400'
          }`} />
        </motion.div>
      ))}
    </div>
  );
};

// Animated Grid
const AnimatedGrid = () => {
  return (
    <motion.div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(#3b82f6 1px, transparent 1px),
          linear-gradient(90deg, #3b82f6 1px, transparent 1px)
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
  );
};

// Data Wave Animation
const DataWave = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          style={{ top: `${30 + i * 20}%` }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// AI/ML Circular Pipeline Visualization - UPDATED VERSION
const AIMLDiagram = () => {
  const stages = [
    { emoji: "📊", label: "Data Input", angle: 30, color: "from-blue-400 to-cyan-400" },
    { emoji: "🔍", label: "Analysis", angle: 90, color: "from-cyan-400 to-teal-400" },
    { emoji: "🧠", label: "Learning", angle: 150, color: "from-teal-400 to-emerald-400" },
    { emoji: "⚡", label: "Processing", angle: 210, color: "from-emerald-400 to-green-400" },
    { emoji: "💡", label: "Insights", angle: 270, color: "from-violet-400 to-purple-400" },
    { emoji: "📈", label: "Results", angle: 330, color: "from-purple-400 to-pink-400" },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background animated line (Data Wave) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${40 + i * 20}%` }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Rotating Container for all elements except robot */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Circular Pipeline Stages */}
        {stages.map((stage, idx) => {
          const radius = 200; // Consistent radius for all elements
          const x = Math.cos((stage.angle * Math.PI) / 180) * radius;
          const y = Math.sin((stage.angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={stage.label}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: idx * 0.2,
                duration: 0.5,
              }}
            >
              {/* Counter-rotate the content so it stays upright */}
              <motion.div
                className="flex flex-col items-center gap-2"
                style={{
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-3xl shadow-lg`}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {stage.emoji}
                </motion.div>
                <span className="text-xs font-bold text-cyan-400 whitespace-nowrap">
                  {stage.label}
                </span>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Lines from robot to each element (spokes) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="spokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {stages.map((stage, idx) => {
            const radius = 120; // Same as stages
            const x = Math.cos((stage.angle * Math.PI) / 180) * radius;
            const y = Math.sin((stage.angle * Math.PI) / 180) * radius;
            
            return (
              <line
                key={`spoke-${idx}`}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${x}px)`}
                y2={`calc(50% + ${y}px)`}
                stroke="url(#spokeGrad)"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
            );
          })}
        </svg>
      </motion.div>

      {/* Central AI Brain - STAYS CENTERED (outside rotating container) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center text-5xl shadow-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.5)",
              "0 0 40px rgba(6, 182, 212, 0.8)",
              "0 0 20px rgba(59, 130, 246, 0.5)",
            ],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          🤖
        </motion.div>
      </div>
    </div>
  );
};

export default function AIMLAnalyticsProfessional() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const capabilities = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Predictive Analytics",
      description: "Advanced forecasting models that anticipate market trends, customer behavior, and operational needs with precision.",
      metrics: "Up to 95% accuracy",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Machine Learning Solutions",
      description: "Custom ML models tailored to your specific business challenges, from classification to deep neural networks.",
      metrics: "Industry-specific training",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Real-Time Dashboards",
      description: "Interactive visualizations that transform complex data into actionable insights for informed decision-making.",
      metrics: "Live data integration",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Process Automation",
      description: "Intelligent automation powered by AI to streamline workflows, reduce costs, and eliminate manual errors.",
      metrics: "60% efficiency gain",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Natural Language Processing",
      description: "Extract insights from unstructured text data, automate document processing, and enhance customer interactions.",
      metrics: "Multi-language support",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Ethical AI Framework",
      description: "Transparent, explainable AI systems with built-in bias detection and fairness monitoring for responsible deployment.",
      metrics: "Compliance-ready",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of your data infrastructure, business objectives, and AI opportunities.",
      deliverables: ["Data audit report", "Feasibility study", "ROI projections"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      phase: "02",
      title: "Strategy & Planning",
      description: "Develop a roadmap aligned with your business goals, including technology selection and resource allocation.",
      deliverables: ["Implementation roadmap", "Technical architecture", "Risk assessment"],
      color: "from-cyan-500 to-teal-500",
    },
    {
      phase: "03",
      title: "Data Engineering",
      description: "Build robust data pipelines, ensure data quality, and establish governance frameworks.",
      deliverables: ["Data warehouse", "ETL pipelines", "Quality metrics"],
      color: "from-teal-500 to-emerald-500",
    },
    {
      phase: "04",
      title: "Model Development",
      description: "Design, train, and validate machine learning models using industry best practices and rigorous testing.",
      deliverables: ["Trained models", "Performance reports", "Documentation"],
      color: "from-violet-500 to-purple-500",
    },
    {
      phase: "05",
      title: "Deployment & Integration",
      description: "Seamlessly integrate AI solutions into your existing systems with minimal disruption.",
      deliverables: ["Production deployment", "API integration", "User training"],
      color: "from-purple-500 to-pink-500",
    },
    {
      phase: "06",
      title: "Monitoring & Optimization",
      description: "Continuous performance monitoring, model retraining, and ongoing support for sustained excellence.",
      deliverables: ["Performance dashboards", "Maintenance plan", "Regular updates"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  const industries = [
    { name: "Finance", icon: "💰", desc: "Fraud detection, risk assessment, algorithmic trading", gradient: "from-yellow-400 to-orange-500" },
    { name: "Healthcare", icon: "🏥", desc: "Diagnostic assistance, patient outcomes, resource optimization", gradient: "from-red-400 to-pink-500" },
    { name: "Retail", icon: "🛒", desc: "Demand forecasting, personalization, inventory optimization", gradient: "from-purple-400 to-indigo-500" },
    { name: "Manufacturing", icon: "🏭", desc: "Predictive maintenance, quality control, supply chain", gradient: "from-blue-400 to-cyan-500" },
    { name: "Technology", icon: "💻", desc: "User behavior, product recommendations, anomaly detection", gradient: "from-green-400 to-teal-500" },
    { name: "Education", icon: "🎓", desc: "Performance tracking, early intervention, personalized learning", gradient: "from-pink-400 to-rose-500" },
  ];

  return (
    <div className="bg-slate-950 text-white">
      {/* HERO SECTION */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Complex Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
          <NeuralNetworkBg />
          <FloatingParticles />
          <AnimatedGrid />
          <DataWave />
          
          {/* Gradient Orbs */}
          <motion.div
            className="absolute -left-40 top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-40 bottom-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Original Badge Design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-cyan-400/40 bg-cyan-500/5 backdrop-blur-sm mb-8"
              >
                <motion.span
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="text-2xl"
                >
                  🤖
                </motion.span>
                <span className="text-cyan-400 font-bold text-sm sm:text-base uppercase tracking-widest">
                  AI / ML & DATA ANALYTICS
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                <span className="block">Transform Data Into</span>
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  Strategic Intelligence
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
                Enterprise AI and analytics solutions that drive measurable business outcomes. From predictive models to automated insights, we help organizations leverage data for competitive advantage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-white overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <a href="/contact">
                      Schedule Consultation
                    </a>
                  </span>
                </motion.button>
               
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 items-center text-sm text-slate-400">
                {["SOC 2 Certified", "GDPR Compliant", "ISO 27001"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* AI/ML Animated Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96"
            >
              <AIMLDiagram />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* CAPABILITIES SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <AnimatedGrid />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p 
              className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Capabilities
            </motion.p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Comprehensive AI & Analytics{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              End-to-end solutions designed to extract maximum value from your data assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all backdrop-blur-sm">
                  <div className={`w-14 h-14 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold text-cyan-400">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {capability.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <FloatingParticles />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3">
              Our Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Proven Implementation{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Framework
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A structured approach ensuring successful AI adoption and measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodology.map((phase, idx) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full bg-slate-800/90 border border-slate-700 rounded-3xl p-8 hover:border-cyan-400/50 transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-6`}>
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                      Deliverables:
                    </p>
                    <ul className="space-y-1">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-center text-sm text-slate-400">
                          <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-10">
          <NeuralNetworkBg />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3">
              Industry Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Sector-Specific{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Deep domain knowledge across critical industries
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative h-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 hover:border-cyan-400/50 transition-all text-center">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} text-4xl mb-6`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {industry.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 overflow-hidden">
        <DataWave />
        <FloatingParticles />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how AI and machine learning can transform your business operations and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                <a href="/contact">
                  Contact Our Experts
                </a>
              </motion.button>
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}