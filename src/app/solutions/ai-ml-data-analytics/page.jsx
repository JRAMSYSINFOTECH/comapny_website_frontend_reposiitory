"use client";

import React from "react";
import { motion } from "framer-motion";

const logoGreen = "#19B49A";
const darkTeal = "#0A3D3E";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
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

const steps = [
  {
    title: "Opportunity Assessment",
    desc: "We evaluate your business data, identify AI/analytics possibilities, and scope high‑value use cases for prediction, automation, or insight.",
  },
  {
    title: "Data Engineering & Preparation",
    desc: "Our data experts clean, integrate, and structure the data—ensuring accuracy, compliance, and readiness for modeling.",
  },
  {
    title: "Model Development & Validation",
    desc: "We build, test, and refine custom machine learning/AI models—always measuring for accuracy, fairness, and business value.",
  },
  {
    title: "Integration & Intelligence",
    desc: "Analytics and AI are embedded into your apps, dashboards, or workflow for real‑time insights and automated decisions.",
  },
  {
    title: "Monitoring & Improvement",
    desc: "Algorithms and dashboards are monitored, retrained, and improved as your business and data landscape evolves.",
  },
];

const exampleUses = [
  {
    title: "Retail",
    desc: "Demand forecasting, customer segmentation, and personalized offers.",
  },
  {
    title: "Healthcare",
    desc: "Diagnostics, workflow automation, and patient‑outcome prediction.",
  },
  {
    title: "Manufacturing",
    desc: "Predictive maintenance and process optimization.",
  },
  {
    title: "Finance",
    desc: "Fraud detection, credit scoring, and real‑time risk analysis.",
  },
  {
    title: "Smart Cities",
    desc: "Sensor analytics, transport insights, and energy optimization.",
  },
  {
    title: "Education",
    desc: "Performance tracking and early warning for student intervention.",
  },
];

const valuePoints = [
  {
    label: "One platform, every journey",
    desc: "From classrooms to cities, the same QR engine powers marketing, operations, and support use cases.",
    icon: "🌐",
  },
  {
    label: "No‑code to pro‑code",
    desc: "Teams can launch simple flows in minutes, while developers extend with APIs and integrations.",
    icon: "🧩",
  },
  {
    label: "Live, actionable insight",
    desc: "Every scan turns into location‑rich telemetry you can plug into BI tools or automation.",
    icon: "📈",
  },
  {
    label: "Built‑in trust & control",
    desc: "Security, expiry, and governance guardrails are baked into each QR lifecycle.",
    icon: "🛡️",
  },
];

export default function AIMLDataAnalyticsPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 py-32 md:py-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-teal-500/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(${logoGreen} 1px, transparent 1px),
                linear-gradient(90deg, ${logoGreen} 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-3/5"
          >
            <p
              className="mb-3 inline-flex items-center rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ backgroundColor: "rgba(25,180,154,0.12)", color: logoGreen }}
            >
              AI / ML & DATA ANALYTICS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Turn Your Data
              <br />
              into <span style={{ color: logoGreen }}>Intelligent Action</span>
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-7 max-w-xl">
              Predictive analytics, custom AI models, and intuitive dashboards
              that turn hidden patterns into everyday decisions—across every
              sector you work in.
            </p>

            {/* quick value badges */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                92% prediction accuracy
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-500/40 px-3 py-1">
                🛡 Enterprise security
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-500/40 px-3 py-1">
                ✅ Explainable results
              </span>
            </div>
          </motion.div>

          {/* DASHBOARD LIKE SCREENSHOT: LEFT BARS + RIGHT KPIS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-2/5"
          >
            <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-[0_24px_80px_rgba(15,23,42,0.85)] px-5 py-5 md:px-6 md:py-6">
              <div className="mb-3 flex items-center justify-between text-[10px] text-slate-400">
                <span>AI INSIGHTS SNAPSHOT</span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {/* LEFT: FORECAST VS ACTUAL BARS (SPAN 3 COLS) */}
                <div className="col-span-3">
                  <p className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
                    Forecast vs Actual
                  </p>
                  <div className="h-28 rounded-xl bg-slate-900/80 p-2 flex items-end gap-1 overflow-hidden">
                    {[35, 65, 55, 80, 70, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md bg-emerald-400/80"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.4 }}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-[9px] text-slate-500">
                    Auto‑tuned models keeping forecasts aligned with reality.
                  </p>
                </div>

                {/* RIGHT: BUSINESS KPIS (SPAN 2 COLS) */}
                <div className="col-span-2">
                  <p className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
                    Business KPIs
                  </p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1.5">
                      <span className="text-[9px] text-slate-300">
                        Churn prediction accuracy
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400">
                        92%
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1.5">
                      <span className="text-[9px] text-slate-300">
                        Upsell conversion uplift
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400">
                        +27%
                      </span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-slate-900/80 px-2 py-1.5">
                      <span className="text-[9px] text-slate-300">
                        Manual work reduced
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400">
                        60%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY TEAMS TRUST OUR AI & ANALYTICS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Why teams trust our <span style={{ color: logoGreen }}>AI & Analytics</span>
            </h2>
            <p className="text-sm md:text-base font-bold text-slate-800 max-w-3xl mx-auto mt-3">
              <strong>
                Not just models—complete, secure, and explainable data products crafted around your KPIs and real business decisions.
              </strong>
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {valuePoints.map((value, idx) => (
              <div
                key={value.label}
                className={`group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 ${
                  idx % 2 === 0
                    ? "hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]"
                    : "hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]"
                }`}
              >
                <div
                  className={`h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md ${
                    idx % 2 === 0
                      ? "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"
                      : "bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400"
                  }`}
                >
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>

                <div className="flex flex-col">
                  <p
                    className={`text-[11px] font-semibold tracking-[0.22em] ${
                      idx % 2 === 0 ? "text-emerald-500" : "text-sky-500"
                    }`}
                  >
                    {idx === 0 && "ONE ENGINE, MANY USES"}
                    {idx === 1 && "FLEXIBLE FOR EVERY TEAM"}
                    {idx === 2 && "DECISIONS IN REAL TIME"}
                    {idx === 3 && "SECURE BY DESIGN"}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                    {value.label}
                  </h3>
                  <p className="mt-1 text-[12px] text-slate-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM RAW DATA TO LIVE WORKFLOW */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-50">
        <div className="max-w-6xl mx-auto relative">
          <div className="pointer-events-none absolute -inset-x-32 -top-16 -bottom-10 opacity-40">
            <div className="mx-auto h-full w-full max-w-5xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-sky-500/20 blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center mb-12"
          >
            <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-emerald-400">
              FROM RAW DATA TO LIVE INTELLIGENCE
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              How Jramsys delivers AI outcomes
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              A clear, trackable flow from assessment to deployment, validation, integration, and continuous improvement—
              all powered by the same Jramsys engine.
            </p>
          </motion.div>

          <div className="relative z-10 rounded-3xl bg-slate-900/80 border border-emerald-500/20 shadow-[0_24px_80px_rgba(15,23,42,0.9)] px-4 py-6 md:px-8 md:py-8">
            <div className="overflow-x-auto">
              <div className="min-w-[720px] md:min-w-0">
                <div className="relative flex items-start justify-between gap-6">
                  <div className="pointer-events-none absolute left-0 right-0 top-10 h-0.5 bg-gradient-to-r from-emerald-300 via-teal-400 to-sky-400" />

                  {steps.map((stage, idx) => (
                    <motion.div
                      key={stage.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="relative z-10 flex-1"
                    >
                      <div className="flex flex-col items-center text-center px-2">
                        <div
                          className={`flex items-center justify-center h-10 w-10 rounded-2xl border-2 bg-slate-950 shadow-md
                            ${
                              idx === 0
                                ? "border-fuchsia-400 text-fuchsia-300"
                                : idx === 1
                                ? "border-sky-400 text-sky-300"
                                : idx === 2
                                ? "border-amber-400 text-amber-300"
                                : idx === 3
                                ? "border-emerald-400 text-emerald-300"
                                : "border-emerald-500 text-emerald-300"
                            }`}
                        >
                          <span className="text-xs font-bold">0{idx + 1}</span>
                        </div>

                        <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-emerald-300 uppercase">
                          {idx === 0 && "ASSESS & SCOPE"}
                          {idx === 1 && "ENGINEER DATA"}
                          {idx === 2 && "BUILD MODELS"}
                          {idx === 3 && "INTEGRATE & DEPLOY"}
                          {idx === 4 && "MONITOR & EVOLVE"}
                        </p>

                        <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-50">
                          {stage.title}
                        </h3>
                        <p className="mt-1 text-[11px] md:text-[12px] text-slate-300 max-w-xs">
                          {stage.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE APPLICATIONS */}
      <section className="px-6 py-24 bg-white">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center"
            style={{ color: darkTeal }}
          >
            Example applications
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {exampleUses.map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.04 }}
                className="relative group"
              >
                <div
                  className={`absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300
                    ${
                      idx % 3 === 0 &&
                      "bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-400"
                    }
                    ${
                      idx % 3 === 1 &&
                      "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400"
                    }
                    ${
                      idx % 3 === 2 &&
                      "bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400"
                    }
                  `}
                />

                <div className="relative rounded-2xl bg-white border border-slate-100 px-5 py-5 shadow-[0_12px_40px_rgba(15,23,42,0.12)] transition-shadow duration-300 group-hover:shadow-[0_20px_70px_rgba(15,23,42,0.18)]">
                  <div className="mb-3 flex items-center justify-center">
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center text-lg text-white
                        ${
                          idx % 3 === 0 &&
                          "bg-gradient-to-br from-emerald-500 to-teal-500"
                        }
                        ${
                          idx % 3 === 1 &&
                          "bg-gradient-to-br from-fuchsia-500 to-orange-400"
                        }
                        ${
                          idx % 3 === 2 &&
                          "bg-gradient-to-br from-indigo-500 to-sky-500"
                        }
                      `}
                    >
                      {idx === 0 && "🛒"}
                      {idx === 1 && "🏥"}
                      {idx === 2 && "🏭"}
                      {idx === 3 && "💳"}
                      {idx === 4 && "🏙"}
                      {idx === 5 && "🎓"}
                    </div>
                  </div>

                  <h4 className="font-semibold mb-1 text-sm md:text-base text-slate-900 text-center">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 text-center">
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
