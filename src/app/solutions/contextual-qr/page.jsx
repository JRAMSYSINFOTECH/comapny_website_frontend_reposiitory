'use client';
import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";

// Animation variants (same as About page)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Solution process steps (as "stage cards")
const stages = [
  {
    title: "QR Code Creation & Customization",
    desc: "Instantly generate unique, scannable codes for assets, people, documents, events, or locations. Customize the data, destination, and look of every QR, or use sector templates for fast deployment.",
  },
  {
    title: "Deployment & Distribution",
    desc: "Print, embed, or distribute QRs—on packaging, ID cards, signages, tickets, bins, and more. We enable both mass and personalized deployments for any need.",
  },
  {
    title: "Engagement & Integration",
    desc: "Upon scan, QRs trigger context-aware actions: launch content, collect data, track attendance, take payments, connect to IoT, and more—always tailored to your journey.",
  },
  {
    title: "Monitoring & Analytics",
    desc: "Live dashboards reveal code usage, scan locations, devices, and engagement. Gain actionable insights to optimize operations, marketing, and compliance.",
  },
  {
    title: "Security & Access Control",
    desc: "Set up expiry dates, permissions, and authentication for any QR workflow. Protect sensitive data, control access, and maintain integrity system-wide.",
  },
];

const exampleApps = [
  {
    title: "Education",
    desc: "Digital homework, attendance, & results access with QRs on student IDs or sheets.",
  },
  {
    title: "Healthcare",
    desc: "Patient record access and check-in with secure QR identity and session codes.",
  },
  {
    title: "Smart Cities",
    desc: "Citizen/bin tracking & feedback; connect physical infrastructure to digital control.",
  },
  {
    title: "Museums & Temples",
    desc: "Audio guides, donation, ticketing—with multi-language QR experiences.",
  },
  {
    title: "Retail",
    desc: "Product info, authenticity, loyalty offers—all via on-product QR codes.",
  },
  {
    title: "Events & Hotels",
    desc: "Contactless check-in, booking confirmations, and room access using QRs.",
  },
];

export default function ContextualQrPage() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 space-y-20">
      {/* Hero / Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: logoGreen }}>
          Contextual QR Code Solutions
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Build smart, adaptive QR journeys for your business, school, city, or product. Our all-in-one platform brings automation, traceability, and digital engagement anywhere a code can go.
        </p>
      </motion.div>

      {/* What We Provide - standout card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="bg-white max-w-4xl mx-auto rounded-xl shadow p-8"
      >
        <h2 className="font-bold text-2xl mb-2" style={{ color: logoGreen }}>
          What We Provide
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-[1.08rem]">
          <li>Centralized QR lifecycle management & mass/bulk creation</li>
          <li>Dynamic landing pages: forms, data, info, self-service, payment</li>
          <li>Detailed scan analytics by user/device/time/location</li>
          <li>Flexible integrations: IoT, messaging (SMS/WhatsApp), CRM</li>
          <li>Prebuilt sector templates for any industry or public service</li>
        </ul>
      </motion.div>

      {/* Solution Stages */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {stages.map((stage, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h3 className="font-semibold text-lg mb-2" style={{ color: logoGreen }}>
              {stage.title}
            </h3>
            <p className="text-gray-700">{stage.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Example Applications */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: logoGreen }}>Example Applications</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {exampleApps.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-5 rounded-xl shadow-md transition duration-300 border border-gray-100 text-center"
            >
              <h4 className="font-semibold mb-1" style={{ color: logoGreen }}>
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-3xl mx-auto text-center mt-12"
      >
        <p className="text-gray-700 text-lg mb-3">
          Curious how contextual QR can transform your workflow?
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Request a Free Demo
        </button>
      </motion.div>
    </section>
  );
}
