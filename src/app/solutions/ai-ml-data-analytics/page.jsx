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
    title: "Opportunity Assessment",
    desc: "We evaluate your business data, identify AI/analytics possibilities, and scope high-value use cases for prediction, automation, or insight.",
  },
  {
    title: "Data Engineering & Preparation",
    desc: "Our data experts clean, integrate, and structure all relevant data—ensuring accuracy, compliance, and readiness for modeling.",
  },
  {
    title: "Model Development & Validation",
    desc: "We build, test, and refine custom machine learning/AI models—always measuring for accuracy, fairness, and business value.",
  },
  {
    title: "Integration & Intelligence",
    desc: "Analytics and AI are embedded into your apps, dashboards, or workflow for real-time insights and automated decisions.",
  },
  {
    title: "Monitoring & Continuous Improvement",
    desc: "All algorithms and dashboards are monitored, retrained, and improved as your business and data landscape evolves.",
  },
];

const exampleUses = [
  { title: "Retail", desc: "Demand forecasting, customer segmentation, and personalized offers." },
  { title: "Healthcare", desc: "Diagnostics, workflow automation, and patient outcome prediction." },
  { title: "Manufacturing", desc: "Predictive maintenance and process optimization." },
  { title: "Finance", desc: "Fraud detection, credit scoring, and real-time risk analysis." },
  { title: "Smart Cities", desc: "Sensor data analytics, transport insights, and energy optimization." },
  { title: "Education", desc: "Performance tracking and early warning for student intervention." },
];

export default function AIMLDataAnalyticsPage() {
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
          AI/ML & Data Analytics
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Turn business data into action—using predictive analytics, custom AI models, and dashboards, we help you discover value, trends, and automation opportunities across every sector.
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
          <li>Predictive modeling for demand, risk, or behavior</li>
          <li>Business intelligence dashboards with KPI tracking</li>
          <li>Custom AI tools (NLP, computer vision, recommendations)</li>
          <li>Automated reporting and alerting pipelines</li>
          <li>Cloud, on-premise, and hybrid deployment options</li>
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
          Transform your data into a competitive advantage—connect for a free data consult today.
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Start My Data Journey
        </button>
      </motion.div>
    </section>
  );
}
