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
    title: "Discovery & Technology Assessment",
    desc: "Analyze your current IT landscape, business goals, pain points, and opportunities for digital transformation.",
  },
  {
    title: "Strategy Development",
    desc: "Design an actionable IT roadmap—prioritizing technologies and projects for maximum ROI and minimal risk.",
  },
  {
    title: "Solution Selection & Architecture",
    desc: "Evaluate vendors, platforms, and frameworks; architect best-fit solutions with integration, scalability, and security built in.",
  },
  {
    title: "Implementation Guidance",
    desc: "Oversee rollouts, resolve roadblocks, and ensure all technical projects stay aligned with your business aims.",
  },
  {
    title: "Ongoing Support & Optimization",
    desc: "Refine processes, monitor KPIs, and keep your digital ecosystem agile with trends and compliance support.",
  },
];

const exampleUses = [
  { title: "Manufacturing", desc: "Map IIoT and automation projects for production and supply chain digitalization." },
  { title: "Healthcare", desc: "Build secure, compliant health IT platforms and automate workflows." },
  { title: "Education", desc: "Advise on e-learning, smart classrooms, and campus infrastructure." },
  { title: "Public Sector", desc: "Modernize digital citizen services and data management." },
  { title: "Finance", desc: "Implement robust, scalable fintech solutions with full audit trails." },
  { title: "Retail & Startups", desc: "Develop IT strategies for growth, omni-channel, and analytics." },
];

export default function ITConsultingPage() {
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
          IT Consulting & Advisory
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Accelerate innovation and lower long-term IT cost with expert strategy, solution architecture, and digital transformation leadership from JRamsys.
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
          <li>Independent IT audits, risk and opportunity analysis</li>
          <li>Cloud adoption, migration, and hybrid strategies</li>
          <li>Digital workflow, cybersecurity, and compliance programs</li>
          <li>RFP and vendor selection support, technical due diligence</li>
          <li>Leadership for end-to-end IT change management</li>
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
          Start your digital transformation with a strategy session.
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Book a Strategy Call
        </button>
      </motion.div>
    </section>
  );
}
