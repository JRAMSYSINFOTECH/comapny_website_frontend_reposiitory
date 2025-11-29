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
    title: "End-to-End Product Engineering",
    desc: "From ideation to launch, we provide complete digital product design, development, and lifecycle services. Transform your vision into market-ready solutions.",
  },
  {
    title: "Prototyping & MVP Development",
    desc: "Rapidly turn concepts into interactive prototypes and Minimum Viable Products for faster market validation and investor buy-in.",
  },
  {
    title: "UI/UX Design",
    desc: "Expert interface and experience design—from wireframes to polished digital experiences, every product is crafted for usability and beauty.",
  },
  {
    title: "Agile Iterative Builds",
    desc: "Work in fast sprints with continuous feedback, so features release continuously and user value grows with each step.",
  },
  {
    title: "Maintenance, Scaling & Support",
    desc: "Post-launch, we handle scaling, feature enhancements, tech support, and analytics—so your product stays ahead of the curve.",
  },
];

const sectors = [
  { title: "Startups", desc: "Accelerate go-to-market and wow early users and investors." },
  { title: "Enterprises", desc: "Digitize traditional offerings and expand your portfolio." },
  { title: "Healthcare", desc: "Build patient-facing, provider, or wellness digital tools." },
  { title: "Education", desc: "Apps and platforms for smart classrooms and learning content." },
  { title: "Retail & E-commerce", desc: "Custom shopping, loyalty, and omnichannel platforms." },
  { title: "Industry & IoT", desc: "Connected device, control, and analytics products." },
];

export default function ProductDevelopmentPage() {
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
          Product Development Services
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          From idea to success—JRamsys delivers business-driven digital products: strategy, design, engineering, and growth for every stage of your journey.
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
          <li>Custom product strategy, design, prototyping, and build</li>
          <li>Agile, fast iterations for speed to ROI and user adoption</li>
          <li>UI/UX, mobile, web, and IoT product expertise</li>
          <li>Scaling, updates, and post-launch support</li>
        </ul>
      </motion.div>

      {/* Services/Methods */}
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
          Ready to create, launch, and grow your next digital product?
        </p>
        <button
          className="px-8 py-3 rounded-lg font-bold text-white"
          style={{ background: logoGreen }}
        >
          Request Product Consultation
        </button>
      </motion.div>
    </section>
  );
}
