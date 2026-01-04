"use client";

import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";
const darkTeal = "#0A3D3E";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
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

const benefits = [
  {
    icon: "⚡",
    title: "Faster Time-to-Value",
    desc: "Accelerate digital initiatives with proven frameworks and battle-tested strategies.",
  },
  {
    icon: "💰",
    title: "Optimized IT Spend",
    desc: "Reduce waste and focus budgets on high-impact technology investments.",
  },
  {
    icon: "🎯",
    title: "Strategic Alignment",
    desc: "Ensure every technology decision directly supports your business objectives.",
  },
  {
    icon: "🔒",
    title: "Risk Mitigation",
    desc: "Identify and address vulnerabilities before they become costly problems.",
  },
];

const exampleUses = [
  {
    title: "Manufacturing",
    desc: "Map IIoT and automation projects for production and supply chain digitalization.",
  },
  {
    title: "Healthcare",
    desc: "Build secure, compliant health IT platforms and automate workflows.",
  },
  {
    title: "Education",
    desc: "Advise on e-learning, smart classrooms, and campus infrastructure.",
  },
  {
    title: "Public Sector",
    desc: "Modernize digital citizen services and data management.",
  },
  {
    title: "Finance",
    desc: "Implement robust, scalable fintech solutions with full audit trails.",
  },
  {
    title: "Retail & Startups",
    desc: "Develop IT strategies for growth, omni-channel, and analytics.",
  },
];

export default function ITConsultingPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 py-32 md:py-40">
        {/* Animated Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* Floating orbs */}
          <motion.div
            className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-emerald-500/40 blur-3xl"
            animate={{
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-[15%] top-[10%] h-80 w-80 rounded-full bg-sky-500/35 blur-3xl"
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute left-[5%] bottom-[10%] h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl"
            animate={{
              y: [0, 25, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute right-[8%] bottom-[15%] h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl"
            animate={{
              y: [0, -30, 0],
              x: [0, -25, 0],
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Animated grid */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(${logoGreen} 1px, transparent 1px),
                linear-gradient(90deg, ${logoGreen} 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="mb-4 inline-flex items-center rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur-sm"
              style={{ backgroundColor: "rgba(25,180,154,0.15)", color: logoGreen }}
            >
              IT CONSULTING & ADVISORY
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              Turn IT from{" "}
              <span className="relative">
                <span style={{ color: logoGreen }}>cost centre</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              <br />
              into a growth engine
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Accelerate innovation and lower long‑term IT cost with expert strategy, solution
              architecture, and digital transformation leadership from JRamsys.
            </p>

            <div className="flex flex-wrap justify-center gap-3 text-xs text-slate-300 mb-10">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-4 py-2 bg-slate-950/40 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-base">📊</span>
                Roadmaps aligned to business
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-4 py-2 bg-slate-950/40 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-base">☁️</span>
                Cloud, security & data focus
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 px-4 py-2 bg-slate-950/40 backdrop-blur"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-base">🤝</span>
                Vendor‑neutral advice
              </motion.span>
            </div>

            <motion.button
              className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className="text-white no-underline">
                Get in Touch
              </a>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US - Benefits Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <p className="text-sm md:text-base font-semibold tracking-[0.35em] text-emerald-400">
              WHY PARTNER WITH US
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Tangible outcomes from day one
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 px-6 py-8 backdrop-blur-sm">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE – Asymmetric Layout */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-sm md:text-base font-semibold tracking-[0.35em] text-emerald-600">
              WHAT WE PROVIDE
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
              Strategy, architecture, and governance in one place
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {/* Large Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-fuchsia-500/30 to-orange-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-orange-400 mb-4 shadow-lg">
                  <span className="text-3xl">🧪</span>
                </div>
                <p className="text-xs font-semibold tracking-[0.22em] text-emerald-400 mb-2">
                  AUDITS & INSIGHT
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  Independent IT audits & analysis
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Independent IT audits, risk and opportunity analysis across infrastructure,
                  applications, security, and data. Get a clear picture of where you stand and
                  where to invest next.
                </p>
              </div>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="md:col-span-5 group rounded-3xl bg-white border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-4 shadow-md">
                <span className="text-2xl">☁️</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.22em] text-sky-600 mb-2">
                CLOUD & MODERNISATION
              </p>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Cloud adoption & hybrid strategies
              </h3>
              <p className="text-sm text-slate-600">
                Balance performance, cost, and compliance with tailored cloud strategies.
              </p>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="md:col-span-5 group rounded-3xl bg-white border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 mb-4 shadow-md">
                <span className="text-2xl">🛡️</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.22em] text-emerald-600 mb-2">
                SECURITY & COMPLIANCE
              </p>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Cybersecurity & compliance programs
              </h3>
              <p className="text-sm text-slate-600">
                Meet regulations and reduce risk with comprehensive security frameworks.
              </p>
            </motion.div>

            {/* Large Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 to-sky-900 p-8 text-white shadow-2xl"
            >
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-sky-500/30 to-cyan-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-400 mb-4 shadow-lg">
                  <span className="text-3xl">📑</span>
                </div>
                <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300 mb-2">
                  VENDORS & CHANGE
                </p>
                <h3 className="text-2xl font-bold mb-3">
                  RFP support & change leadership
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Navigate vendor selection, technical due diligence, and lead end‑to‑end IT 
                  change management with confidence and clarity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STEPS – VERTICAL TIMELINE */}
      <section className="py-24 px-6 bg-slate-900 text-slate-50 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-semibold tracking-[0.3em] text-emerald-400">
              HOW OUR ADVISORY ENGAGEMENTS RUN
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              A clear arc from assessment to optimisation
            </h2>
            <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
              A structured journey from IT assessment to execution and ongoing optimisation—so
              every initiative tracks back to your business goals.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-sky-400 to-fuchsia-400" />

            <div className="space-y-12">
              {steps.map((stage, idx) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="relative pl-20"
                >
                  {/* Step number circle */}
                  <div
                    className={`absolute left-0 flex items-center justify-center h-16 w-16 rounded-2xl border-2 bg-slate-950 shadow-xl z-10
                      ${idx === 0 && "border-fuchsia-400"}
                      ${idx === 1 && "border-sky-400"}
                      ${idx === 2 && "border-amber-400"}
                      ${idx === 3 && "border-emerald-400"}
                      ${idx === 4 && "border-emerald-500"}
                    `}
                  >
                    <span className="text-xl font-bold text-white">0{idx + 1}</span>
                  </div>

                  {/* Content card */}
                  <div className="rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-6 hover:bg-slate-800/70 transition-colors duration-300">
                    <p className="text-xs font-semibold tracking-[0.22em] text-emerald-400 mb-2">
                      {idx === 0 && "DISCOVER & ASSESS"}
                      {idx === 1 && "PLAN & PRIORITISE"}
                      {idx === 2 && "ARCHITECT & SELECT"}
                      {idx === 3 && "GUIDE DELIVERY"}
                      {idx === 4 && "OPTIMISE & EVOLVE"}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE APPLICATIONS - Staggered Grid */}
      <section className="px-6 py-24 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
        >
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.35em] text-emerald-600">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Example applications
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exampleUses.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300
                    ${idx % 3 === 0 && "bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400"}
                    ${idx % 3 === 1 && "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"}
                    ${idx % 3 === 2 && "bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400"}
                  `}
                />
                <div className="relative rounded-2xl bg-white border border-slate-200 px-6 py-8 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl h-full flex flex-col">
                  <div className="mb-4 flex items-center justify-center">
                    <div
                      className={`h-16 w-16 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg
                        ${idx % 3 === 0 && "bg-gradient-to-br from-emerald-500 to-teal-500"}
                        ${idx % 3 === 1 && "bg-gradient-to-br from-fuchsia-500 to-orange-400"}
                        ${idx % 3 === 2 && "bg-gradient-to-br from-indigo-500 to-sky-500"}
                      `}
                    >
                      {idx === 0 && "🏭"}
                      {idx === 1 && "🏥"}
                      {idx === 2 && "🎓"}
                      {idx === 3 && "🏛"}
                      {idx === 4 && "💳"}
                      {idx === 5 && "🚀"}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 text-center mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 text-center flex-1">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}