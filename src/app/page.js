'use client';
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";  // [web:26]
const logoGreen = "#19B49A";
const darkTeal = "#0A3D3E";

// Solution cards with visual icons + links
const solutions = [
  {
    title: "AI/ML & Data Analytics",
    tagline: "Intelligence at Scale",
    desc: "Predictive models, business intelligence dashboards, and custom AI tools for every sector.",
    gradient: "from-purple-500 to-pink-500",
    link: "/solutions/ai-ml-data-analytics",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    )
  },
  {
    title: "Cloud Computing",
    tagline: "Scale Without Limits",
    desc: "IaaS, PaaS, SaaS on AWS, Azure, GCP with DevOps automation and 24/7 managed services.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/solutions/cloud-computing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    )
  },
  {
    title: "BPM & IoT Solutions",
    tagline: "Connect Everything",
    desc: "Automate workflows with IoT sensors, real-time monitoring, and intelligent process orchestration.",
    gradient: "from-green-500 to-teal-500",
    link: "/solutions/bpm-iot",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    )
  },
  {
    title: "Contextual QR Solutions",
    tagline: "Smart Connections",
    desc: "Dynamic QR ecosystems for education, healthcare, smart cities, and digital transformation.",
    gradient: "from-orange-500 to-red-500",
    link: "/solutions/contextual-qr",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
        />
      </svg>
    )
  }
];

// Featured products/solutions
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

// Stats
const stats = [
  { value: "10", label: "Technology Platforms", suffix: "+" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
  { value: "24/7", label: "Support Available", suffix: "" },
  { value: "6", label: "Core Solutions", suffix: "" }
];

// Industries
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
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentStat(prev => (prev + 1) % stats.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-white overflow-hidden"
      style={{ fontFamily: "'Poppins', -apple-system, sans-serif" }}
    >
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(${logoGreen} 1px, transparent 1px),
                linear-gradient(90deg, ${logoGreen} 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite"
            }}
          ></div>
        </div>

        <motion.div
          style={{ y: parallaxY }}
          className="absolute top-20 left-[10%] w-96 h-96 bg-teal-500/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          style={useTransform(scrollY, [0, 500], [0, -100])}
          className="absolute bottom-20 right-[10%] w-80 h-80 bg-green-500/30 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-8xl font-black mb-8 leading-none tracking-tight"
              style={{
                background: `linear-gradient(135deg, white 0%, ${logoGreen} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              TRANSFORM
              <br />
              <span className="text-white">YOUR BUSINESS WITH</span>
              <br />
              <span style={{ color: logoGreen }}>INTELLIGENT</span>
              <br />
              TECHNOLOGY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto font-light"
            >
              From{" "}
              <span style={{ color: logoGreen }} className="font-semibold">
                AI & Cloud
              </span>{" "}
              to{" "}
              <span style={{ color: logoGreen }} className="font-semibold">
                IoT & Automation
              </span>{" "}
              — Complete digital solutions that drive real results
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/solutions">
                <button
                  className="group relative px-12 py-5 text-xl font-bold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ background: logoGreen }}
                >
                  <span className="relative z-10">Explore Solutions</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-12 py-5 text-xl font-bold text-white rounded-full border-2 border-white hover:bg-white hover:text-slate-900 transition-all duration-300 cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-24"
          >
            <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl px-12 py-6 border border-white/20">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div
                  className="text-6xl font-black mb-2"
                  style={{ color: logoGreen }}
                >
                  {stats[currentStat].value}
                  {stats[currentStat].suffix}
                </div>
                <div className="text-white text-lg uppercase tracking-wider">
                  {stats[currentStat].label}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* SOLUTIONS GRID – pink bar style like screenshot */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2
              className="text-6xl md:text-7xl font-black mb-6"
              style={{ color: darkTeal }}
            >
              Our Smart Solutions
            </h2>
            <div
              className="w-32 h-2 mx-auto rounded-full"
              style={{ background: logoGreen }}
            ></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, idx) => (
              <Link
                key={idx}
                href={solution.link}
                className="block w-full h-full hover:no-underline group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full cursor-pointer"
                >
                  <div className="relative p-10 flex flex-col h-full">
                    {/* Pink gradient bar with small icon inside, like reference image */}
                    <div
                      className={`mb-8 rounded-3xl bg-gradient-to-r ${solution.gradient} flex items-center px-8 py-6`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10">
                        {solution.icon}
                      </div>
                    </div>

                    <div
                      className="text-xs tracking-[0.2em] mb-2 uppercase"
                      style={{ color: logoGreen }}
                    >
                      {solution.tagline}
                    </div>

                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ color: darkTeal }}
                    >
                      {solution.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-1">
                      {solution.desc}
                    </p>

                    <div
                      className="flex items-center text-lg font-semibold group-hover:translate-x-2 transition-transform duration-300"
                      style={{ color: logoGreen }}
                    >
                      Learn More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SOLUTIONS */}
      <section className="py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Featured Solutions
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Production-ready platforms powering digital transformation across
              industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredSolutions.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex flex-col justify-end p-8">
                  <div
                    className="text-sm uppercase tracking-widest mb-2"
                    style={{ color: logoGreen }}
                  >
                    {product.category}
                  </div>
                  <h3 className="text-3xl font-bold mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-lg">{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-6xl md:text-7xl font-black mb-6"
              style={{ color: darkTeal }}
            >
              Our IoT Approach
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              End-to-end integration from device to insight
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-green-400 hidden md:block"></div>

            {[
              { title: "Connect", desc: "IoT devices & sensors", icon: "🔌" },
              { title: "Collect", desc: "Real-time data streams", icon: "📊" },
              { title: "Analyze", desc: "AI-powered insights", icon: "🧠" },
              { title: "Automate", desc: "Smart workflows & actions", icon: "⚡" },
              { title: "Optimize", desc: "Continuous improvement", icon: "🎯" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? -50 : 50
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex items-center gap-8 mb-16 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    idx % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="inline-block bg-gradient-to-br from-teal-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                    Step {idx + 1}
                  </div>
                  <h3
                    className="text-4xl font-bold mb-3"
                    style={{ color: darkTeal }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600">{step.desc}</p>
                </div>

                <div className="relative z-10">
                  <div
                    className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center text-5xl border-4"
                    style={{ borderColor: logoGreen }}
                  >
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2
              className="text-6xl md:text-7xl font-black mb-6"
              style={{ color: darkTeal }}
            >
              Industries We Serve
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className={`relative h-48 rounded-3xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white text-2xl md:text-3xl font-bold text-center p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                <span className="relative z-10">{industry.name}</span>
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 rounded-3xl transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE JRamsys */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, ${logoGreen} 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, ${logoGreen} 0%, transparent 50%)
              `
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-black mb-6">
              Why Choose <span style={{ color: logoGreen }}>JRamsys</span>?
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Innovation-driven solutions with a commitment to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Cutting-Edge Technology",
                desc: "We leverage the latest in AI, Cloud, IoT, and automation to keep you ahead of the competition"
              },
              {
                icon: "🎯",
                title: "Tailored Solutions",
                desc: "Every solution is customized to your specific business needs and industry requirements"
              },
              {
                icon: "⚡",
                title: "Rapid Deployment",
                desc: "Agile methodology ensures fast time-to-market with continuous improvements"
              },
              {
                icon: "💎",
                title: "Quality Assured",
                desc: "Rigorous testing and quality standards guarantee reliable, production-ready solutions"
              },
              {
                icon: "🤝",
                title: "Partnership Approach",
                desc: "We're not just vendors—we're your long-term technology partners invested in your growth"
              },
              {
                icon: "🔒",
                title: "Security First",
                desc: "Enterprise-grade security and compliance built into every solution from day one"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: logoGreen }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-green-50 opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h2
            className="text-6xl md:text-7xl font-black mb-8 leading-tight"
            style={{ color: darkTeal }}
          >
            Ready to Start Your
            <br />
            <span style={{ color: logoGreen }}>Digital Transformation?</span>
          </h2>

          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Let's build something extraordinary together. Our team is ready to
            bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <button
                className="group relative px-14 py-6 text-2xl font-bold text-white rounded-full overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer"
                style={{ background: logoGreen }}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </Link>

          </div>

          <div className="mt-16 flex items-center justify-center gap-12 text-lg text-gray-600">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8"
                style={{ color: logoGreen }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="font-semibold">officejram@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8"
                style={{ color: logoGreen }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold">Priory Street, Coventry CV1 5FB, UK</span>
            </div>
          </div>
        </motion.div>
      </section>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </div>
  );
}
