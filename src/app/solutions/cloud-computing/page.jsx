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
    title: "Cloud Assessment & Strategy",
    desc: "We evaluate your business needs, current IT setup, and future growth to craft a custom cloud adoption or modernization strategy (including hybrid and multi-cloud approaches).",
  },
  {
    title: "Architecture & Solution Design",
    desc: "Our experts design secure, scalable IaaS, PaaS, or SaaS architectures on AWS, Azure, GCP, or your preferred provider—including networking, identity, and compliance.",
  },
  {
    title: "Migration & Cloud Implementation",
    desc: "We migrate legacy systems, deploy cloud-native applications, and orchestrate seamless transitions—minimizing downtime and risk.",
  },
  {
    title: "Automation & DevOps",
    desc: "We set up CI/CD pipelines, automate infrastructure provisioning, and implement monitoring and backup for reliability and rapid rollouts.",
  },
  {
    title: "Optimization & Managed Services",
    desc: "Proactive monitoring, cost control, and ongoing support keep your cloud efficient and secure, letting you focus on core business.",
  },
];

const exampleUses = [
  { title: "Education", desc: "Elastically scale online learning platforms and student data management." },
  { title: "Healthcare", desc: "Secure, HIPAA-compliant cloud for patient portals and telemedicine." },
  { title: "Manufacturing", desc: "IoT data hubs, analytics, and workflow automation in the cloud." },
  { title: "Retail", desc: "Global e-commerce platforms, inventory, and marketing operations." },
  { title: "Finance", desc: "Reliable, real-time payments and compliance on secure cloud stacks." },
  { title: "Public Sector", desc: "Digital citizen portals and government document management." },
];

export default function CloudComputingPage() {
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
          Cloud Computing (IaaS, PaaS, SaaS)
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Boost flexibility, cut IT costs, and go global—JRamsys architects, migrates, and manages your cloud, using best-in-class tools and proven DevOps practices.
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
          <li>Cloud migration, modernization, and disaster recovery</li>
          <li>Design and deploy secure, scalable apps on top providers</li>
          <li>DevOps: automation of builds, deploys, monitoring, and backup</li>
          <li>Cost, performance, and growth optimization at every stage</li>
          <li>Full managed services and long-term cloud support</li>
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
          Ready to accelerate your cloud journey? Connect with JRamsys experts now.
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Explore Cloud Solutions
        </button>
      </motion.div>
    </section>
  );
}
