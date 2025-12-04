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
    title: "Bin Integration & Sensor Setup",
    desc: "We connect IoT sensors to bins and collection vehicles, enabling real-time status, fill-level detection, and event triggers throughout your waste management network.",
  },
  {
    title: "Smart Collection & Routing",
    desc: "Fill data is used to generate and push optimized routes automatically to drivers—ensuring timely, efficient waste pickup and reducing fuel use.",
  },
  {
    title: "Monitoring & Data Analytics",
    desc: "Supervisors oversee all collection status, compliance, and performance with interactive dashboards and customizable reports.",
  },
  {
    title: "Citizen Feedback & Service Requests",
    desc: "End users submit pickup or service requests by simply scanning a QR—improving response and keeping communities clean.",
  },
];

const exampleUses = [
  { title: "Cities & Municipalities", desc: "Automated collection, cleaner streets, resource savings." },
  { title: "Gated Communities", desc: "Digital log of services, faster response for overflow bins." },
  { title: "Universities & Campuses", desc: "Track bins, events, and recycling efforts easily." },
  { title: "Industrial Parks", desc: "Bulk waste scheduling & compliance for enterprises." },
  { title: "Hotels & Events", desc: "Peak-time pickup and hygiene compliance tracking." },
  { title: "Government", desc: "Full audit, data-driven planning, transparent operations." },
];

export default function SmartWastePage() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4" style={{ color: logoGreen }}>Smart Waste Management</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Transform your waste ecosystem with JRamsys digital, IoT-powered waste management—offering control, efficiency, and sustainability at every stage.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="bg-white max-w-4xl mx-auto rounded-xl shadow p-8"
      >
        <h2 className="font-bold text-2xl mb-2" style={{ color: logoGreen }}>What We Provide</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 text-[1.08rem]">
          <li>End-to-end bin tracking, fill alerts, and predictive maintenance.</li>
          <li>Dynamic route optimization for collection fleets.</li>
          <li>Real-time dashboards, mobile staff apps, and full audit logs.</li>
          <li>Citizen-facing QR for service and instant feedback.</li>
          <li>Full deployment, support, and ongoing analytics insights.</li>
        </ul>
      </motion.div>

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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-3xl mx-auto text-center mt-12"
      >
        <p className="text-gray-700 text-lg mb-3">
          Ready to digitize your entire waste ecosystem with JRamsys?
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Request a Smart Waste Demo
        </button>
      </motion.div>
    </section>
  );
}
