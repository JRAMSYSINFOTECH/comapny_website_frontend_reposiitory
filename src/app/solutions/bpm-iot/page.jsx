'use client';
import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const steps = [
  {
    title: "Process Discovery & Mapping",
    desc: "We analyze, document, and blueprint your business workflows—identifying automation opportunities and key IoT touchpoints.",
  },
  {
    title: "BPM Platform Configuration",
    desc: "Setup and customize your BPM tools—designing digital workflows, business rules, and approval processes tailored to your real-world operations.",
  },
  {
    title: "IoT Integration & Connectivity",
    desc: "Connect hardware, sensors, and gateways—so machine or facility data flows directly into your processes for real-time triggers and monitoring.",
  },
  {
    title: "Workflow Automation",
    desc: "Enable smart, event-driven automation for tasks, alerts, escalations, and compliance—minimizing manual steps, delays, and errors.",
  },
  {
    title: "Reporting, Optimization & Support",
    desc: "Dashboards and analytics reveal bottlenecks and insights. We iterate on process improvements and handle ongoing support.",
  },
];

const exampleUses = [
  { title: "Manufacturing", desc: "Automated maintenance, fault alerts, and supply chain requests—linked to IoT sensors." },
  { title: "Facilities", desc: "Smart lighting, HVAC, and occupancy control processes." },
  { title: "Healthcare", desc: "Digitized patient workflows, equipment monitoring, and compliance." },
  { title: "Logistics", desc: "Asset tracking, shipment status, and fleet optimization." },
  { title: "Utilities", desc: "Smart metering, outage detection, and automated service dispatch." },
  { title: "Retail & Banking", desc: "Self-service, approval workflows, and request digitization." },
];

export default function BPMIotSolutionsPage() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 space-y-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: logoGreen }}>
          BPM & IoT-based Solutions
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Bridge the physical and digital world—integrate IoT with business process automation for efficiency, transparency, and real-time control in every operation.
        </p>
      </motion.div>

      {/* What We Provide */}
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
          <li>Low-code/no-code BPM and robust open integration possibilities</li>
          <li>Custom automated workflows for task routing and digital approvals</li>
          <li>Direct IoT connectivity—sensor, machine, or alarm triggers</li>
          <li>End-to-end reporting, compliance audit, and user dashboarding</li>
          <li>Training, support, and continuous process optimization</li>
        </ul>
      </motion.div>

      {/* Stages */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {steps.map((stage, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h3 className="font-semibold text-lg mb-2" style={{ color: logoGreen }}>{stage.title}</h3>
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
          {exampleUses.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-5 rounded-xl shadow-md transition duration-300 border border-gray-100 text-center"
            >
              <h4 className="font-semibold mb-1" style={{ color: logoGreen }}>{item.title}</h4>
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
          Modernize your processes and connect your assets—speak to our BPM/IoT specialists today.
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Schedule a Demo
        </button>
      </motion.div>
    </section>
  );
}
