'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const logoGreen = "#19B49A";
const darkTeal = "#0A3D3E";

// Enhanced Network Animation Component
const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create more visible nodes
    const nodeCount = window.innerWidth < 768 ? 40 : 60;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 3 + 2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node with stronger visibility
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(25, 180, 154, 0.9)`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = logoGreen;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections with better visibility
        nodes.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = 0.4 * (1 - distance / 180);
            ctx.strokeStyle = `rgba(25, 180, 154, ${opacity})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: 0.6 }}
    />
  );
};

const solutions = [
  {
    title: "AI/ML & Data Analytics",
    tagline: "Intelligence at Scale",
    desc: "Predictive models, business intelligence dashboards, and custom AI tools for every sector.",
    gradient: "from-purple-500 to-pink-500",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Cloud Computing",
    tagline: "Scale Without Limits",
    desc: "IaaS, PaaS, SaaS on AWS, Azure, GCP with DevOps automation and 24/7 managed services.",
    gradient: "from-blue-500 to-cyan-500",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "BPM & IoT Solutions",
    tagline: "Connect Everything",
    desc: "Automate workflows with IoT sensors, real-time monitoring, and intelligent process orchestration.",
    gradient: "from-green-500 to-teal-500",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Contextual QR Solutions",
    tagline: "Smart Connections",
    desc: "Dynamic QR ecosystems for education, healthcare, smart cities, and digital transformation.",
    gradient: "from-orange-500 to-red-500",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    )
  }
];

const featuredSolutions = [
  {
    title: "Smart Analytics Platform",
    category: "AI/ML & Data",
    desc: "Real-time business intelligence with predictive insights and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Cloud Migration Suite",
    category: "Cloud Computing",
    desc: "Seamless transition to cloud with zero downtime and enhanced performance.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
  },
  {
    title: "IoT Command Center",
    category: "BPM & IoT",
    desc: "Centralized control for thousands of connected devices with predictive maintenance.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    title: "QR Engagement System",
    category: "Contextual QR",
    desc: "Multi-sector QR platform with analytics, security, and customizable workflows.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80"
  }
];

const stats = [
  { value: "10", label: "Technology Platforms", suffix: "+" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
  { value: "24/7", label: "Support Available", suffix: "" },
  // { value: "50", label: "Global Clients", suffix: "+" }
];

const industries = [
  { name: "Healthcare", gradient: "from-red-400 to-pink-400" },
  { name: "Education", gradient: "from-blue-400 to-indigo-400" },
  { name: "Manufacturing", gradient: "from-gray-400 to-slate-500" },
  { name: "Smart Cities", gradient: "from-green-400 to-emerald-400" },
  { name: "Finance", gradient: "from-yellow-400 to-orange-400" },
  { name: "Retail", gradient: "from-purple-400 to-violet-400" }
];

export default function HomePage() {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentStat(prev => (prev + 1) % stats.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white overflow-hidden" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
        {/* Network Animation Background */}
        <NetworkBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/70" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
              Transform Your Business with
              <br />
              <span style={{ color: logoGreen }}>Intelligent Technology</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              From AI & Cloud to IoT & Automation — Complete digital solutions that drive real results
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white rounded-lg shadow-lg transition-all"
                style={{ background: logoGreen }}
              >
                Explore Solutions
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white rounded-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }} 
            className="mt-20"
          >
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-12 py-6 border border-white/20">
              <motion.div 
                key={currentStat} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold mb-2" style={{ color: logoGreen }}>
                  {stats[currentStat].value}{stats[currentStat].suffix}
                </div>
                <div className="text-white text-sm uppercase tracking-wider font-medium">
                  {stats[currentStat].label}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: darkTeal }}>
              Our Smart Solutions
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-4" style={{ background: logoGreen }} />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology platforms tailored to your industry needs
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} 
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-8">
                  <div className={`mb-6 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center w-16 h-16 text-white`}>
                    {solution.icon}
                  </div>
                  <div className="text-xs tracking-widest mb-2 uppercase font-semibold" style={{ color: logoGreen }}>
                    {solution.tagline}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: darkTeal }}>
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {solution.desc}
                  </p>
                  <div className="flex items-center text-base font-semibold" style={{ color: logoGreen }}>
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SOLUTIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Production-ready platforms powering digital transformation
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSolutions.map((product, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }} 
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex flex-col justify-end p-8">
                  <div className="text-sm uppercase tracking-wider mb-2 font-semibold" style={{ color: logoGreen }}>
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-300">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: darkTeal }}>
              Our IoT Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end integration from device to insight
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-green-400 hidden md:block" />
            
            {[
              { title: "Connect", desc: "IoT devices & sensors", icon: "🔌" },
              { title: "Collect", desc: "Real-time data streams", icon: "📊" },
              { title: "Analyze", desc: "AI-powered insights", icon: "🧠" },
              { title: "Automate", desc: "Smart workflows & actions", icon: "⚡" },
              { title: "Optimize", desc: "Continuous improvement", icon: "🎯" }
            ].map((step, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`flex-1 ${idx % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-inherit`}>
                  <div className="inline-block bg-gradient-to-br from-teal-500 to-green-500 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
                    Step {idx + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 px-4" style={{ color: darkTeal }}>{step.title}</h3>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4">{step.desc}</p>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl border-2 sm:border-4"
                    style={{ borderColor: logoGreen }}>{step.icon}</div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: darkTeal }}>
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Delivering tailored solutions across diverse sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`h-40 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white text-2xl font-bold text-center p-6 shadow-lg cursor-pointer`}
              >
                {industry.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span style={{ color: logoGreen }}>JRamsys</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Innovation-driven solutions with a commitment to your success
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🚀", title: "Cutting-Edge Technology", desc: "We leverage the latest in AI, Cloud, IoT, and automation to keep you ahead" },
              { icon: "🎯", title: "Tailored Solutions", desc: "Every solution is customized to your specific business needs" },
              { icon: "⚡", title: "Rapid Deployment", desc: "Agile methodology ensures fast time-to-market" },
              { icon: "💎", title: "Quality Assured", desc: "Rigorous testing guarantees reliable, production-ready solutions" },
              { icon: "🤝", title: "Partnership Approach", desc: "We are your long-term technology partners invested in your growth" },
              { icon: "🔒", title: "Security First", desc: "Enterprise-grade security built into every solution" }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: logoGreen }}>
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: darkTeal }}>
            Ready to Start Your Digital Transformation?
          </h2>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's build something extraordinary together. Our team is ready to bring your vision to life.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-4 text-xl font-semibold text-white rounded-lg shadow-xl transition-all"
            style={{ background: logoGreen }}
          >
            <a href="/contact" className="text-white no-underline">
              Contact Us Today
            </a>
          </motion.button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: logoGreen }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="font-semibold">officejram@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: logoGreen }}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold">Priory Street, Coventry CV1 5FB, UK</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}