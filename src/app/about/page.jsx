'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Exact logo green
const logoGreen = "#19B49A";

export default function About() {
  // animation variants for the staggered fade-up effect
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

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 space-y-20">
      {/* OUR COMPANY / ABOUT US */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Smart Office representing JRAMSYS"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Company
          </h2>
          {/* LOGO GREEN applied */}
          <h3 className="text-lg font-medium" style={{ color: logoGreen }}>
            Innovating Smart Solutions for a Connected Future
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify">
            At <span className="font-semibold" style={{ color: logoGreen }}>JRAMSYS</span>, we
            are a leading provider of intelligent technology and automation
            solutions, specializing in IoT, Smart City, and industrial
            innovation. With a team of highly skilled engineers, software
            developers, and strategists, we design and deliver scalable systems
            that empower businesses, governments, and communities to operate
            more efficiently and sustainably.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our expertise spans across smart signaling, building automation,
            connected infrastructure, and customized IoT development. We believe
            in the power of technology to transform industries, improve safety,
            and create smarter environments for a better tomorrow.
          </p>
        </motion.div>
      </div>

      {/* OUR MISSION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-5xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to engineer innovative, reliable, and sustainable
          technology solutions that empower businesses and communities to
          thrive. We aim to bridge the gap between people and technology by
          creating systems that are efficient, intelligent, and easy to
          integrate — driving progress and improving everyday life.
        </p>
      </motion.div>

      {/* OUR VISION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-5xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To become a globally recognized leader in smart and sustainable
          technology — transforming cities, industries, and everyday life
          through intelligent innovation and a commitment to excellence.
        </p>
      </motion.div>

      {/* CORE VALUES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>

        {/* Staggered Animation Container (live, not once) */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          {[
            {
              title: "Innovation",
              desc: "We constantly push boundaries to develop smart, forward-thinking technologies that make real-world impact.",
            },
            {
              title: "Integrity",
              desc: "We build trust through honesty, transparency, and commitment to doing what’s right — every time.",
            },
            {
              title: "Customer Focus",
              desc: "Our customers are at the heart of everything we do. We listen, understand, and deliver beyond expectations.",
            },
            {
              title: "Collaboration",
              desc: "We believe great solutions come from teamwork — within our company and with our partners worldwide.",
            },
            {
              title: "Excellence",
              desc: "We pursue excellence in design, engineering, and delivery to ensure quality and reliability in every solution.",
            },
            {
              title: "Sustainability",
              desc: "We are committed to creating technologies that support sustainable growth and environmental responsibility.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              {/* LOGO GREEN applied */}
              <h3 className="font-semibold text-lg mb-2" style={{ color: logoGreen }}>
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* CALL TO ACTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
        className="max-w-4xl mx-auto text-center mt-12"
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you’re a business, city planner, or industrial innovator,
          <span className="font-semibold" style={{ color: logoGreen }}> JRAMSYS </span>
          is here to help you turn ideas into reality. Let’s collaborate to
          build smarter, safer, and more connected environments for the future.
        </p>
      </motion.div>
    </section>
  );
}
