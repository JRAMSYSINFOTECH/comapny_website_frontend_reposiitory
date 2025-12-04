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
    title: "Consultation & Requirements Discovery",
    desc: "We start by thoroughly understanding your business needs, technical environment, and user goals—then map out a clear software vision and roadmap.",
  },
  {
    title: "Design & Blueprinting",
    desc: "Our team prepares wireframes, detailed specs, and prototypes to validate features, UX, and integration—with your feedback at every step.",
  },
  {
    title: "Agile Development & Iteration",
    desc: "Our engineers build your solution in short sprints—regular demos show real progress and allow for rapid improvements or scope changes.",
  },
  {
    title: "Testing, QA & Launch",
    desc: "Rigorous quality assurance ensures your software is reliable and secure. We handle deployment, staff training, and documentation for a successful launch.",
  },
  {
    title: "Support & Continuous Enhancement",
    desc: "Post-launch, we monitor, fix issues proactively, and refine the solution as your business grows or new needs arise.",
  },
];

const exampleUses = [
  { title: "Education", desc: "Custom portals for online exams, fee management, or digital classrooms." },
  { title: "Healthcare", desc: "Patient platforms, scheduling, EMR, and telemedicine tools." },
  { title: "Retail", desc: "Inventory, e-commerce, loyalty apps, and POS integrations." },
  { title: "Manufacturing", desc: "Automation dashboards, workflow and process management." },
  { title: "Logistics", desc: "Vehicle tracking, order management, and last-mile solutions." },
  { title: "Government", desc: "Citizen portals, audits, and digital workflow modernization." },
];

export default function CustomSoftwareDevelopmentPage() {
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
          Custom Software Development
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          We design, build, and scale digital platforms that are tailored to your business goals, industry requirements, and future needs.
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
          <li>Web, mobile, and cloud application development with modern UX.</li>
          <li>API-first, scalable architecture—built for growth and security.</li>
          <li>Seamless third-party integration and data migration.</li>
          <li>Rapid sprints, regular demos, and adaptive project management.</li>
          <li>Ongoing support, upgrades, and feature evolution.</li>
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
          Ready for a digital solution designed just for you?
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Request a Consultation
        </button>
      </motion.div>
    </section>
  );
}
