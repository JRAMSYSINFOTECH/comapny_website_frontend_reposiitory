"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const logoGreen = "#19B49A";
const darkTeal = "#0A3D3E";

// Flowing Lines Background
const FlowingLines = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px"
        style={{
          width: "200%",
          left: "-50%",
          top: `${10 + i * 12}%`,
          background: `linear-gradient(to right, transparent, ${logoGreen}, transparent)`
        }}
        animate={{
          x: ["-10%", "10%"],
        }}
        transition={{
          duration: 15 + i * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

// Chat Bubble Animation
const ChatBubbles = () => {
  const bubbles = [
    { x: 10, y: 20, delay: 0, message: "💬" },
    { x: 80, y: 30, delay: 0.5, message: "✨" },
    { x: 20, y: 70, delay: 1, message: "🎯" },
    { x: 85, y: 75, delay: 1.5, message: "📞" },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bubbles.map((bubble, idx) => (
        <motion.div
          key={idx}
          className="absolute text-4xl"
          style={{ left: `${bubble.x}%`, top: `${bubble.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 1, 0.3],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: bubble.delay,
          }}
        >
          {bubble.message}
        </motion.div>
      ))}
    </div>
  );
};

// Curved Text Path
const CurvedText = ({ text, radius = 100 }) => (
  <svg viewBox="0 0 200 200" className="w-32 h-32">
    <defs>
      <path
        id="circlePath"
        d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
      />
    </defs>
    <text className="text-[10px] font-bold tracking-widest" fill={logoGreen}>
      <textPath href="#circlePath" startOffset="0%">
        {text}
      </textPath>
    </text>
  </svg>
);

export default function CustomerServicesPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: "01",
      title: "Omnichannel Symphony",
      subtitle: "UNIFIED COMMUNICATION",
      description: "Orchestrate seamless conversations across phone, chat, email, WhatsApp, and social media into one harmonious customer experience.",
      features: ["Real-time syncing", "Unified inbox", "Channel routing"],
      icon: "💬",
      gradient: `linear-gradient(to bottom right, ${darkTeal}, ${logoGreen})`,
      bgPattern: "dots",
    },
    {
      number: "02",
      title: "Intelligence Layer",
      subtitle: "AI-POWERED AUTOMATION",
      description: "Deploy smart chatbots and virtual assistants that learn, adapt, and resolve 70% of inquiries instantly—24/7 without human intervention.",
      features: ["NLP processing", "Intent recognition", "Auto-escalation"],
      icon: "🤖",
      gradient: `linear-gradient(to bottom right, ${logoGreen}, ${darkTeal})`,
      bgPattern: "waves",
    },
    {
      number: "03",
      title: "Relationship Engine",
      subtitle: "CUSTOM CRM SOLUTIONS",
      description: "Build comprehensive customer profiles with interaction history, preferences, and predictive insights to deliver personalized service at scale.",
      features: ["360° customer view", "Workflow automation", "Custom fields"],
      icon: "🎯",
      gradient: `linear-gradient(to bottom right, ${darkTeal}, #0d5650, ${logoGreen})`,
      bgPattern: "grid",
    },
    {
      number: "04",
      title: "Insight Amplifier",
      subtitle: "ANALYTICS & REPORTING",
      description: "Transform customer conversations into actionable intelligence with sentiment analysis, performance metrics, and predictive analytics.",
      features: ["Sentiment tracking", "SLA monitoring", "Custom dashboards"],
      icon: "📊",
      gradient: `linear-gradient(to bottom right, ${logoGreen}, #0d5650, ${darkTeal})`,
      bgPattern: "diagonal",
    },
  ];

  const industries = [
    {
      name: "Retail & Commerce",
      icon: "🛍️",
      stat: "4.8★ avg rating",
      color: darkTeal,
      desc: "Order tracking, returns, and loyalty programs",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      stat: "HIPAA certified",
      color: logoGreen,
      desc: "Patient scheduling, billing, and telehealth support",
    },
    {
      name: "Financial Services",
      icon: "💳",
      stat: "SOC 2 compliant",
      color: darkTeal,
      desc: "Account support, fraud alerts, and transactions",
    },
    {
      name: "Education",
      icon: "🎓",
      stat: "500K+ students",
      color: logoGreen,
      desc: "Admissions, campus services, and parent portals",
    },
    {
      name: "Hospitality",
      icon: "🏨",
      stat: "Real-time booking",
      color: "#0d5650",
      desc: "Reservations, concierge, and guest services",
    },
    {
      name: "Government",
      icon: "🏛️",
      stat: "Multi-language",
      color: darkTeal,
      desc: "Citizen services, permits, and public inquiries",
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen" style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}>
      {/* Add Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
      `}</style>

      {/* HERO SECTION */}
      <section 
        className="relative min-h-screen overflow-hidden"
        style={{
          background: `linear-gradient(to bottom right, ${darkTeal}, #0d5650, ${darkTeal})`
        }}
      >
        <FlowingLines />
        <ChatBubbles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Rotating badge */}
              <motion.div
                className="mb-8 inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <CurvedText text="CUSTOMER SERVICE • DIGITAL EXPERIENCE • " />
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[0.95] text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                <span className="block">Every</span>
                <span 
                  className="block mt-2 italic"
                  style={{ color: logoGreen }}
                >
                  Conversation
                </span>
                <span className="block mt-2">Matters</span>
              </h1>

              <div className="relative mb-8 pl-6">
                <div 
                  className="absolute left-0 top-0 w-1 h-full"
                  style={{ background: `linear-gradient(to bottom, ${darkTeal}, ${logoGreen})` }}
                />
                <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-xl">
                  Transform customer service from a cost center into your most powerful competitive advantage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-white font-bold rounded-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                  style={{ background: logoGreen }}
                >
                  <a href="/contact" className="block">
                    Contact Us
                  </a>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden lg:block"
            >
              <div className="absolute inset-0">
                {/* Large circle */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border-4"
                  style={{ borderColor: `${logoGreen}50` }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Customer service elements */}
                {[
                  { icon: "💬", x: "50%", y: "10%", delay: 0 },
                  { icon: "📞", x: "85%", y: "40%", delay: 0.5 },
                  { icon: "✉️", x: "70%", y: "80%", delay: 1 },
                  { icon: "🤖", x: "15%", y: "70%", delay: 1.5 },
                  { icon: "📊", x: "10%", y: "30%", delay: 2 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl border-4 border-white"
                    style={{ 
                      left: item.x, 
                      top: item.y, 
                      transform: 'translate(-50%, -50%)',
                      background: idx % 2 === 0 ? logoGreen : darkTeal
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      opacity: 1,
                      y: [0, -20, 0],
                    }}
                    transition={{
                      scale: { delay: item.delay, duration: 0.5 },
                      y: { duration: 3, repeat: Infinity, delay: item.delay },
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}

                {/* Central hub */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center text-5xl shadow-2xl border-8 border-white z-10"
                  style={{ background: `linear-gradient(to bottom right, ${darkTeal}, ${logoGreen})` }}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎯
                </motion.div>

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[
                    { x1: "50%", y1: "50%", x2: "50%", y2: "10%" },
                    { x1: "50%", y1: "50%", x2: "85%", y2: "40%" },
                    { x1: "50%", y1: "50%", x2: "70%", y2: "80%" },
                    { x1: "50%", y1: "50%", x2: "15%", y2: "70%" },
                    { x1: "50%", y1: "50%", x2: "10%", y2: "30%" },
                  ].map((line, idx) => (
                    <motion.line
                      key={idx}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke={logoGreen}
                      strokeWidth="3"
                      strokeDasharray="10,10"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        delay: idx * 0.3,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative corner elements */}
        <div 
          className="absolute top-0 right-0 w-64 h-64 rounded-bl-full"
          style={{ background: `linear-gradient(to bottom right, ${logoGreen}30, transparent)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-tr-full"
          style={{ background: `linear-gradient(to top right, ${darkTeal}30, transparent)` }}
        />
      </section>

      {/* SERVICES SECTION */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div 
              className="inline-block mb-4 px-6 py-2 border-4 border-black"
              style={{ backgroundColor: `${logoGreen}20` }}
            >
              <span className="font-bold text-sm uppercase tracking-widest">Our Capabilities</span>
            </div>
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4" 
              style={{ fontFamily: '"Playfair Display", serif', color: darkTeal }}
            >
              <span className="italic">Complete</span> Service Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end customer experience platform that grows with your business
            </p>
          </motion.div>

          {/* Service tabs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {services.map((service, idx) => (
              <motion.button
                key={service.number}
                onClick={() => setActiveService(idx)}
                whileHover={{ scale: 1.05, rotate: activeService === idx ? 0 : -2 }}
                className={`p-6 text-left border-4 border-black transition-all ${
                  activeService === idx
                    ? "text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    : "bg-white hover:bg-slate-50"
                }`}
                style={activeService === idx ? { background: service.gradient } : {}}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">
                  {service.subtitle}
                </div>
                <div className="text-xl font-bold">{service.title}</div>
              </motion.button>
            ))}
          </div>

          {/* Active service details */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border-4 border-black p-8 sm:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="inline-block text-8xl font-black mb-4"
                  style={{ 
                    background: services[activeService].gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {services[activeService].number}
                </div>
                <h3 
                  className="text-3xl sm:text-4xl font-black mb-4" 
                  style={{ fontFamily: '"Playfair Display", serif', color: darkTeal }}
                >
                  {services[activeService].title}
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {services[activeService].description}
                </p>
                <div className="space-y-3">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: services[activeService].gradient }}
                      >
                        ✓
                      </div>
                      <span className="font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visualization */}
              <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 border-4 border-black flex items-center justify-center">
                <div className={`text-9xl opacity-20 ${services[activeService].icon}`}>
                  {services[activeService].icon}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl animate-bounce">
                    {services[activeService].icon}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section 
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(to bottom right, ${logoGreen}10, ${darkTeal}10, white)` }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4" 
              style={{ fontFamily: '"Playfair Display", serif', color: darkTeal }}
            >
              Trusted Across <span className="italic" style={{ color: logoGreen }}>Industries</span>
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
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative bg-white border-4 border-black p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ boxShadow: `8px 8px 0px 0px ${logoGreen}50` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-5xl">{industry.icon}</div>
                  <div 
                    className="px-3 py-1 text-white text-xs font-bold"
                    style={{ backgroundColor: industry.color }}
                  >
                    {industry.stat}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: darkTeal }}>{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section 
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(to right, ${darkTeal}, #0d5650, ${logoGreen})` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-block mb-8 px-8 py-3 bg-black text-white font-bold uppercase tracking-widest transform -rotate-2">
              Ready to Transform?
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 text-white leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Let's Build Your
              <br />
              <span className="italic">Customer Experience</span>
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of companies delivering world-class service with our platform
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white font-black text-xl uppercase tracking-wider shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ color: darkTeal }}
              >
                <a href="/contact">Get Started Now</a>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 border-8 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-8 border-white/20" />
      </section>
    </div>
  );
}