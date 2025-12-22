'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

const solutions = [
  {
    id: 'ai-ml',
    title: 'AI/ML & Data Analytics',
    tagline: 'Turn your data into intelligent action',
    description: 'Predictive analytics, custom AI models, and intuitive dashboards that turn hidden patterns into everyday decisions.',
    icon: '🤖',
    color: 'from-cyan-500 to-teal-600',
    link: '/solutions/ai-ml-data-analytics'
  },
  {
    id: 'bpm-iot',
    title: 'BPM & IoT Solutions',
    tagline: 'Orchestrate your devices & workflows',
    description: 'Connect sensors, assets, and teams in one intelligent flow—every alert and appointment moves automatically toward resolution.',
    icon: '⚡',
    color: 'from-teal-600 to-cyan-700',
    link: '/solutions/bpm-iot'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    tagline: 'Make your cloud work like a product',
    description: 'Design, migrate, and run modern cloud platforms so your teams ship faster, scale on demand, and stop fighting infrastructure fires.',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    link: '/solutions/cloud-computing'
  },
  {
    id: 'qr',
    title: 'Contextual QR Solutions',
    tagline: 'Smart QR codes that understand context',
    description: 'Build adaptive QR journeys for business, schools, cities. Complete lifecycle: creation, deployment, analytics, security.',
    icon: '📱',
    color: 'from-purple-500 to-pink-500',
    link: '/solutions/contextual-qr'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Build software that moves with your business',
    description: 'Design, build, and scale digital platforms tailored to your goals, industry, and future roadmap.',
    icon: '💻',
    color: 'from-indigo-500 to-blue-600',
    link: '/solutions/custom-software'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Advisory',
    tagline: 'Turn IT into a growth engine',
    description: 'Accelerate innovation and lower long‑term IT cost with expert strategy, solution architecture, and digital transformation leadership.',
    icon: '📊',
    color: 'from-emerald-500 to-teal-600',
    link: '/solutions/it-consulting'
  },
  {
    id: 'smart-waste',
    title: 'Smart Waste Management',
    tagline: 'Make every waste pickup visible and efficient',
    description: 'Transform your waste ecosystem with digital, IoT-powered management—offering control, efficiency, and sustainability.',
    icon: '🗑️',
    color: 'from-green-500 to-emerald-600',
    link: '/solutions/smart-waste'
  }
];

export default function SolutionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Diagonal Split */}
      <div className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Diagonal Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-cyan-900" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}></div>
        </div>

        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-64 h-64 border-4 border-cyan-400 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-96 h-96 border-4 border-teal-400"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-cyan-400/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-cyan-300 font-semibold text-sm tracking-wider">7 CORE SOLUTIONS</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-none">
                Technology<br />
                Solutions That<br />
                <span className="text-cyan-300">Transform</span>
              </h1>
              <p className="text-2xl text-gray-200 leading-relaxed max-w-2xl">
                Comprehensive solutions designed to solve real challenges across industries
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Grid - Unique Asymmetric Layout */}
      <div className="py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: brandTeal }}>
              Explore Our Solutions
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl">
              Seven specialized solutions covering the complete technology spectrum
            </p>
          </motion.div>

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
            {/* Large Featured Card - Spans more space */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 md:row-span-2"
            >
              <Link href={solutions[0].link}>
                <div className={`relative h-full min-h-[400px] bg-gradient-to-br ${solutions[0].color} rounded-3xl p-10 text-white overflow-hidden group cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-7xl mb-6">{solutions[0].icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{solutions[0].title}</h3>
                      <p className="text-xl text-white/90 mb-4">{solutions[0].tagline}</p>
                      <p className="text-white/80 text-lg leading-relaxed">{solutions[0].description}</p>
                    </div>
                    <div className="flex items-center gap-3 text-lg font-semibold mt-8 group-hover:gap-5 transition-all">
                      <span>Explore Solution</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Medium Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5"
            >
              <Link href={solutions[1].link}>
                <div className="h-full min-h-[240px] bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all group cursor-pointer">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solutions[1].color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {solutions[1].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: brandTeal }}>{solutions[1].title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: brandLight }}>{solutions[1].tagline}</p>
                  <p className="text-gray-600 leading-relaxed">{solutions[1].description}</p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="md:col-span-5"
            >
              <Link href={solutions[2].link}>
                <div className="h-full min-h-[240px] bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all group cursor-pointer">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solutions[2].color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {solutions[2].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: brandTeal }}>{solutions[2].title}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: brandLight }}>{solutions[2].tagline}</p>
                  <p className="text-gray-600 leading-relaxed">{solutions[2].description}</p>
                </div>
              </Link>
            </motion.div>

            {/* Second Large Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 md:row-span-2"
            >
              <Link href={solutions[3].link}>
                <div className={`relative h-full min-h-[400px] bg-gradient-to-br ${solutions[3].color} rounded-3xl p-10 text-white overflow-hidden group cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="text-7xl mb-6">{solutions[3].icon}</div>
                      <h3 className="text-4xl font-bold mb-4">{solutions[3].title}</h3>
                      <p className="text-xl text-white/90 mb-4">{solutions[3].tagline}</p>
                      <p className="text-white/80 text-lg leading-relaxed">{solutions[3].description}</p>
                    </div>
                    <div className="flex items-center gap-3 text-lg font-semibold mt-8 group-hover:gap-5 transition-all">
                      <span>Explore Solution</span>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Remaining Cards */}
            {solutions.slice(4).map((solution, idx) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + idx * 0.05 }}
                className="md:col-span-4"
              >
                <Link href={solution.link}>
                  <div className="h-full min-h-[240px] bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all group cursor-pointer">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: brandTeal }}>{solution.title}</h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: brandLight }}>{solution.tagline}</p>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}