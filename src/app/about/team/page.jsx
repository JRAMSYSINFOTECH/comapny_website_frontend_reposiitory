'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Exact logo green
const logoGreen = '#19B49A';

// Modern, vision-aligned overview
const overviewSections = [
  {
    title: "Smart Industry Technologists",
    content:
      "Our team blends expertise across embedded systems, IoT, and cloud—enabling us to build contextual solutions for education, healthcare, retail, civic, and industrial sectors. We empower clients using the latest in QR, automation, and integrated platforms.",
  },
  {
    title: "Digital Innovators",
    content:
      "With deep experience in AI, machine learning, and business intelligence, our engineers drive efficiency, real-time analytics, and smart process automation. We’re dedicated to solving unique customer challenges through digital innovation.",
  },
  {
    title: "Solution Architects",
    content:
      "From requirements to scalable deployment, our architects design robust and secure solutions tailored for specific industry needs, ensuring performance, reliability, and seamless integration at every phase.",
  },
  {
    title: "Integration Specialists",
    content:
      "We enable clients to maximize ROI on legacy and modern systems by developing seamless APIs and third-party integrations—bridging data, devices, and business processes for unified digital infrastructure.",
  },
  {
    title: "Quality Champions",
    content:
      "We uphold top standards in every deliverable, offering rigorous testing, cybersecurity validation, regulatory compliance, and process transparency to guarantee client trust and satisfaction.",
  },
  {
    title: "Client Success Partners",
    content:
      "From project management through support, our professionals ensure clear communication, timely delivery, and post-implementation guidance—building relationships and growing together with our clients.",
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

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen py-16 px-8 bg-gray-50">
      {/* Header Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6 text-left" style={{ color: logoGreen }}>Our Team</h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-left">
          At JRAMSYS, we take pride in our highly skilled and dedicated team of professionals
          who are passionate about delivering exceptional services and solutions to our clients.
          Our team consists of individuals with diverse backgrounds, expertise, and experience
          in the field of embedded systems.
        </p>
      </motion.div>

      {/* Overview of Employees */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-8 text-left" style={{ color: logoGreen }}>Overview of Employees</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {overviewSections.map((section, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-transform transition-shadow duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: logoGreen }}>{section.title}</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leadership Grid */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-left" style={{ color: logoGreen }}>Meet Our Leadership</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
        {leadershipMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-transform transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
              <Image src={member.img} alt={member.name} fill className="object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="mt-1" style={{ color: logoGreen }}>{member.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Crew Grid */}
      <h2 className="text-3xl font-bold mt-12 mb-6 text-left" style={{ color: logoGreen }}>Our Crew</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
        {crewMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-transform transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
          >
            <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
              <Image src={member.img} alt={member.name} fill className="object-cover" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
            <p className="mt-1" style={{ color: logoGreen }}>{member.role}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
