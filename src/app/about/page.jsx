'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";
const accentOrange = "#FF6B35";

export default function About() {
  return (
    <section className="bg-white">
      {/* Diagonal Split Hero */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-6">
              🚀 Building the Future
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We're <span className="text-cyan-300">JRAMSYS</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              A startup IT company passionate about creating smart technology solutions that make a real difference. We turn complex problems into elegant, scalable systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="px-8 py-4 bg-cyan-400 text-teal-900 rounded-xl font-semibold hover:bg-cyan-300 transition-all hover:scale-105 inline-block">
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="JRAMSYS Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story - Professional Horizontal Scroll */}
      <div className="relative py-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: brandTeal }}>
              Our Story
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: brandLight }}></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A journey of innovation, dedication, and transforming possibilities into reality
            </p>
          </motion.div>

          {/* Professional Story Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
              <div className="relative bg-white m-0.5 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandTeal }}>
                  The Foundation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  JRAMSYS was founded with a clear vision: to bridge the gap between advanced technology and practical business applications. We recognized that many organizations struggled with complex systems and sought to create solutions that are both powerful and accessible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
              <div className="relative bg-white m-0.5 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandTeal }}>
                  Growth Through Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to engineering excellence and customer success has driven our expansion across multiple domains—IoT systems, smart city infrastructure, and industrial automation. Each project strengthened our expertise and refined our approach.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-cyan-900 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
              <div className="relative bg-white m-0.5 rounded-2xl p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-700 to-cyan-900 flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandTeal }}>
                  Shaping the Future
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to innovate and evolve. Our focus remains on delivering scalable, reliable technology solutions that empower organizations to operate more efficiently while preparing them for the opportunities of tomorrow.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* What Makes Us Different - Simple & Clean */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" style={{ color: brandTeal }}>
              Why Choose Us
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: brandLight }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Expertise",
                desc: "Deep knowledge in IoT, automation, and smart systems with proven implementation experience."
              },
              {
                title: "Scalable Solutions",
                desc: "We build systems that grow with your business needs and adapt to future requirements."
              },
              {
                title: "Quality Delivery",
                desc: "Committed to delivering reliable, well-engineered solutions that meet project specifications."
              },
              {
                title: "Customer Focus",
                desc: "We work closely with clients to understand requirements and deliver solutions that fit."
              },
              {
                title: "End-to-End Service",
                desc: "From planning and development to deployment and support, we handle the complete lifecycle."
              },
              {
                title: "Industry Experience",
                desc: "Extensive experience across smart cities, industrial automation, and IoT implementations."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: brandTeal }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Culture Section */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: brandTeal }}>
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a team of passionate engineers, designers, and problem-solvers who believe great technology comes from great teamwork.
            </p>
            <div className="space-y-6">
              {[
                "Continuous learning and experimentation",
                "Open communication and collaboration",
                "Work-life balance and flexibility",
                "Celebrating wins, learning from failures"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-100">
                    <svg className="w-5 h-5" style={{ color: brandTeal }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
                    alt="Team meeting"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    alt="Team brainstorming"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80"
                    alt="Office workspace"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies We Master - Clean Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4" style={{ color: brandTeal }}>
            Technologies We Master
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: brandLight }}></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise across modern technology platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Internet of Things", icon: "🌐" },
            { name: "Cloud Computing", icon: "☁️" },
            { name: "Artificial Intelligence", icon: "🤖" },
            { name: "Machine Learning", icon: "🧠" },
            { name: "Data Analytics", icon: "📊" },
            { name: "Industrial Automation", icon: "⚙️" },
            { name: "Smart Sensors", icon: "📡" },
            { name: "Mobile Technology", icon: "📱" },
            { name: "Web Development", icon: "🌍" },
            { name: "Cybersecurity", icon: "🔐" },
            { name: "Edge Computing", icon: "💻" },
            { name: "Wireless Networks", icon: "📶" }
          ].map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <h4 className="font-semibold text-gray-800 text-lg">{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision - Side by Side Cards */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-600 p-12 text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg leading-relaxed text-cyan-50">
                To empower businesses with smart, scalable technology solutions that drive real results. We make complex systems simple and accessible.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 p-12 text-white"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
            <div className="relative z-10">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg leading-relaxed text-cyan-50">
                To be India's most trusted startup for smart technology solutions—recognized for innovation, reliability, and customer success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}