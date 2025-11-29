'use client';
import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

// Example offerings for IoT services. Update per your official list.
const services = [
  {
    title: "Custom IoT Device Integration",
    desc: "Integration of sensors, gateways, and controllers to connect the physical & digital world for any vertical—manufacturing, smart city, or facility management.",
  },
  {
    title: "IoT Platform & Middleware Development",
    desc: "Build scalable platforms to manage, analyze, and automate data from thousands of devices. Includes real-time dashboards, alerts, and remote controls.",
  },
  {
    title: "Edge Computing & Gateway Solutions",
    desc: "Deploy intelligence at the edge to filter, preprocess, and secure data before it even reaches the cloud—reducing latency and bandwidth costs.",
  },
  {
    title: "Device Security & Compliance",
    desc: "Full-stack IoT security: secure comms, device authentication, regulatory compliance (e.g. ISO, HIPAA, GDPR) for industrial and public deployments.",
  },
  {
    title: "Maintenance & Managed IoT Services",
    desc: "Ongoing device updates, remote diagnostics, and management for uninterrupted operations at scale.",
  },
];

// Example sectors
const sectors = [
  { title: "Smart Cities", desc: "Street lighting, waste, parking, and pollution monitoring." },
  { title: "Manufacturing", desc: "Asset tracking, predictive maintenance, and factory automation." },
  { title: "Energy & Utilities", desc: "Smart metering, grid management, outage detection." },
  { title: "Healthcare", desc: "Patient monitoring, equipment tracking, compliance alarms." },
  { title: "Agriculture", desc: "Soil, crop, and livestock sensors—precision farming technology." },
  { title: "Buildings", desc: "Building automation, HVAC, access control, and energy management." },
];

export default function IoTServicesPage() {
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
          IoT Services
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Connecting your world—from assets and sensors to platforms and analytics, unleash the potential of IoT for any industry.
        </p>
      </motion.div>

      {/* What We Provide */}
      <motion.div
        className="bg-white max-w-4xl mx-auto rounded-xl shadow p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >
        <h2 className="font-bold text-2xl mb-2" style={{ color: logoGreen }}>
          What We Provide
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-[1.08rem]">
          <li>End-to-end device, platform, and analytics solutions.</li>
          <li>Edge, cloud, and hybrid IoT architectures.</li>
          <li>Custom development, integration, and managed support.</li>
          <li>Security-first deployments and regulatory alignment.</li>
        </ul>
      </motion.div>

      {/* Methods / Service Cards */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
          >
            <h3 className="font-semibold text-lg mb-2" style={{ color: logoGreen }}>{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Sectors */}
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: logoGreen }}>Sectors We Enable</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sectors.map((item, idx) => (
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
          Transform your operation with connected intelligence—get started now!
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Book IoT Consultation
        </button>
      </motion.div>
    </section>
  );
}
