'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

const overviewSections = [
  {
    title: "Smart Industry Technologists",
    content:
      "Our team blends expertise across embedded systems, IoT, and cloud—enabling us to build contextual solutions for education, healthcare, retail, civic, and industrial sectors.",
  },
  {
    title: "Digital Innovators",
    content:
      "With deep experience in AI, machine learning, and business intelligence, our engineers drive efficiency, real-time analytics, and smart process automation.",
  },
  {
    title: "Solution Architects",
    content:
      "From requirements to scalable deployment, our architects design robust and secure solutions tailored for specific industry needs.",
  },
  {
    title: "Integration Specialists",
    content:
      "We enable clients to maximize ROI on legacy and modern systems by developing seamless APIs and third-party integrations.",
  },
  {
    title: "Quality Champions",
    content:
      "We uphold top standards in every deliverable, offering rigorous testing, cybersecurity validation, and regulatory compliance.",
  },
  {
    title: "Client Success Partners",
    content:
      "From project management through support, our professionals ensure clear communication, timely delivery, and post-implementation guidance.",
  },
];

const leadershipMembers = [
  { name: 'Sai Kiran', role: 'CEO', img: 'https://images.unsplash.com/photo-1603415526960-fcfc7c58c1e7?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Lead 2', role: 'Lead', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Lead 3', role: 'Lead', img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Lead 4', role: 'Lead', img: 'https://images.unsplash.com/photo-1581091870622-1d9f72ec7f7a?auto=format&fit=crop&w=400&h=400&q=80' },
];

const crewMembers = [
  { name: 'Damodar', role: 'Employee', img: 'https://images.unsplash.com/photo-1581093448797-3c2e0f303a3f?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Ashwini', role: 'Employee', img: 'https://images.unsplash.com/photo-1599566150180-29194dcaad36?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Saravan Kumar', role: 'Employee', img: 'https://images.unsplash.com/photo-1607746882003-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Maneendra', role: 'Employee', img: 'https://images.unsplash.com/photo-1599566150207-29194dcaad36?auto=format&fit=crop&w=400&h=400&q=80' },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Ultra Unique Hero - Diagonal Split with Overlay Text */}
      <div className="relative h-screen overflow-hidden bg-white">
        {/* Diagonal Background Split */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-cyan-900" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)' }}></div>
        </div>

        {/* Background Image Grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8 opacity-20">
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="" fill className="object-cover rounded-2xl" />
          </div>
          <div className="relative mt-16">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80" alt="" fill className="object-cover rounded-2xl" />
          </div>
          <div className="relative mt-32">
            <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80" alt="" fill className="object-cover rounded-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="mb-8">
                <span className="text-cyan-300 text-lg font-medium tracking-wider uppercase">Our People</span>
              </div>
              <h1 className="text-7xl lg:text-8xl font-bold mb-8 text-white leading-none">
                The Talent<br />
                Behind Every<br />
                <span className="text-cyan-300">Solution</span>
              </h1>
              <p className="text-2xl text-gray-200 leading-relaxed max-w-2xl mb-12">
                Meet the engineers, innovators, and problem-solvers who turn complex challenges into elegant solutions.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats - Enhanced Visibility */}
        <div className="absolute bottom-20 right-20 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white rounded-3xl p-5 shadow-2xl border-3"
            style={{ borderColor: brandLight }}
          >
            <div className="text-6xl font-bold mb-2" style={{ color: brandTeal }}>50+</div>
            <div className="text-gray-700 text-xl font-semibold">Team Members</div>
          </motion.div>
        </div>
      </div>

      {/* Leadership - Horizontal Showcase */}
      <div className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl font-bold mb-4" style={{ color: brandTeal }}>
              Leadership Team
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: brandLight }}></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionaries guiding our journey toward innovation and excellence
            </p>
          </motion.div>

          {/* Feature Leadership Member */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="relative h-96 lg:h-full">
                <Image 
                  src={leadershipMembers[0].img} 
                  alt={leadershipMembers[0].name} 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-12">
                <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full text-sm font-medium mb-4" style={{ color: brandTeal }}>
                  {leadershipMembers[0].role}
                </div>
                <h3 className="text-4xl font-bold mb-6" style={{ color: brandTeal }}>
                  {leadershipMembers[0].name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Leading JRAMSYS with a vision to transform how technology serves businesses. With extensive experience in IoT and smart systems, driving innovation across every project.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-cyan-100 transition-colors">
                    <span className="text-xl">💼</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-cyan-100 transition-colors">
                    <span className="text-xl">🔗</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Leadership */}
          <div className="grid md:grid-cols-3 gap-8">
            {leadershipMembers.slice(1).map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-72">
                  <Image 
                    src={member.img} 
                    alt={member.name} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium mb-2" style={{ color: brandLight }}>{member.role}</p>
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Members - Staggered Layout */}
      <div className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-5xl font-bold mb-4" style={{ color: brandTeal }}>
              The Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Talented professionals making it all happen
            </p>
          </motion.div>

          {/* Staggered Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {crewMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${idx % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
              >
                <div className="relative group">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-cyan-200">{member.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Join CTA - Minimal */}
      <div className="py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: brandTeal }}>
              Want to Join Us?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              We are always looking for talented individuals who share our passion for technology and innovation.
            </p>
            <a 
              href="/careers" 
              className="inline-block px-10 py-4 rounded-xl font-bold text-lg transition-all"
              style={{ backgroundColor: brandLight, color: 'white' }}
            >
              View Careers
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}