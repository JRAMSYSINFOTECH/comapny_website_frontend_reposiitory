'use client';
import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.25 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const services = [
  {
    title: "Omnichannel Support Integrations",
    desc: "Connect phone, chat, email, and WhatsApp into a unified ticketing and communication system for world-class, responsive service.",
  },
  {
    title: "Custom CRM Solutions",
    desc: "Implement or tailor CRMs for customer records, case/issue management, and support workflow digitalization.",
  },
  {
    title: "Chatbot & Self-Service Portals",
    desc: "Deploy AI-powered or rule-based chatbots and customer self-service to provide 24/7 answers and lower manual workload.",
  },
  {
    title: "Feedback & Survey Automation",
    desc: "Gather, analyze, and react to customer feedback in real time to continuously improve experiences and satisfaction.",
  },
  {
    title: "Analytics & Quality Monitoring",
    desc: "Monitor agent/service performance, automate reporting, and keep your support aligned with KPIs and SLAs.",
  },
];

const sectors = [
  { title: "Retail & E-commerce", desc: "Order assistance, product support, and loyalty programs." },
  { title: "Education", desc: "Student/parent help desks and campus support digitalization." },
  { title: "Healthcare", desc: "Patient inquiries, appointment coordination, and billing help." },
  { title: "Government", desc: "Citizen assistance, civic engagement, and public queries." },
  { title: "Hospitality & Events", desc: "Booking, check-in, and guest services automation." },
  { title: "Finance", desc: "Account support, fraud response, and service inquiries." },
];

export default function CustomerServicesPage() {
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
          Customer Services
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Deliver outstanding experiences, build loyalty, and streamline support using JRamsys’ suite of digital customer service solutions.
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
          <li>Integrated multi-channel case management</li>
          <li>Automated ticketing, chatbots, and help desk portals</li>
          <li>Custom CRM and SLA reporting solutions</li>
          <li>Customer feedback, analytics, and improvement loops</li>
        </ul>
      </motion.div>

      {/* Services Methods / Cards */}
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
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: logoGreen }}>Sectors We Serve</h2>
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
          Unleash digital-powered service experiences—let’s talk about your support transformation.
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Start My Service Transformation
        </button>
      </motion.div>
    </section>
  );
}
