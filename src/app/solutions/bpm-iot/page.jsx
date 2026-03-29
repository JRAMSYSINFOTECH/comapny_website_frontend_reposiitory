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

// BPM content
const steps = [
  {
    title: "Process Discovery & Mapping",
    desc: "We analyze, document, and blueprint your business workflows—identifying automation opportunities and key IoT touchpoints.",
  },
  {
    title: "BPM Platform Configuration",
    desc: "Setup and customize your BPM tools—designing digital workflows, business rules, and approval processes tailored to your real-world operations.",
  },
  {
    title: "IoT Integration & Connectivity",
    desc: "Connect hardware, sensors, and gateways—so machine or facility data flows directly into your processes for real-time triggers and monitoring.",
  },
  {
    title: "Workflow Automation",
    desc: "Enable smart, event-driven automation for tasks, alerts, escalations, and compliance—minimizing manual steps, delays, and errors.",
  },
  {
    title: "Reporting, Optimization & Support",
    desc: "Dashboards and analytics reveal bottlenecks and insights. We iterate on process improvements and handle ongoing support.",
  },
];

const exampleUses = [
  {
    title: "Manufacturing",
    desc: "Automated maintenance, fault alerts, and supply chain requests—linked to IoT sensors.",
  },
  {
    title: "Facilities",
    desc: "Smart lighting, HVAC, and occupancy control processes.",
  },
  {
    title: "Healthcare",
    desc: "Digitized patient workflows, equipment monitoring, and compliance.",
  },
  {
    title: "Logistics",
    desc: "Asset tracking, shipment status, and fleet optimization.",
  },
  {
    title: "Utilities",
    desc: "Smart metering, outage detection, and automated service dispatch.",
  },
  {
    title: "Retail & Banking",
    desc: "Self-service, approval workflows, and request digitization.",
  },
];

const valuePoints = [
  {
    label: "From alerts to actions",
    desc: "IoT events don’t just flash on a screen—they automatically trigger the right workflow, task, or technician visit.",
    icon: "⚡",
  },
  {
    label: "Journeys, not tickets",
    desc: "Every BOM, service call, or incident follows a guided, trackable path from first signal to resolution.",
    icon: "🧭",
  },
  {
    label: "People + machines in sync",
    desc: "Technicians, supervisors, and smart devices see the same live status, so work never falls through the cracks.",
    icon: "🤝",
  },
  {
    label: "Always-on visibility",
    desc: "Real-time dashboards show bottlenecks, SLA risk, and asset health—so you act before customers feel the pain.",
    icon: "👁️",
  },
];

export default function BPMIotSolutionsPage() {
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
          {/* hero text */}
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
              BPM & IOT‑BASED SOLUTIONS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Orchestrate Your
              <br />
              <span style={{ color: logoGreen }}>Devices & Workflows</span>
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-7 max-w-xl">
              Connect sensors, assets, and teams in one intelligent flow—so every alert,
              BOM, and appointment moves automatically toward a fast, clean resolution.
            </p>

            {/* quick value badges */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                -32% BOM approval time
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-500/40 px-3 py-1">
                📅 68% auto‑scheduled visits
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-slate-500/40 px-3 py-1">
                ✅ 91% first‑time fix
              </span>
            </div>
          </motion.div>

          {/* NEW hero card: incident journey + side stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-2/5"
          >
            <div className="relative rounded-[32px] bg-slate-950 border border-slate-800 shadow-[0_26px_90px_rgba(15,23,42,0.9)] px-5 py-6 overflow-hidden">
              {/* subtle grid */}
              <div className="pointer-events-none absolute inset-0 opacity-15">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
              </div>

              <div className="relative z-10 flex flex-col gap-4">
                {/* header */}
                <div className="flex items-center justify-between text-[10px] text-slate-300 mb-1">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE INCIDENT JOURNEY
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    FROM SIGNAL TO RESOLUTION
                  </span>
                </div>

                <div className="flex gap-3">
                  {/* main vertical journey card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="flex-1 rounded-2xl bg-slate-900/90 border border-emerald-500/30 px-3.5 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.8)]"
                  >
                    <p className="text-[10px] font-semibold tracking-[0.18em] text-emerald-300 uppercase mb-2">
                      PROCESS ENGINE · BPM + IoT Brain
                    </p>

                    <div className="space-y-2.5">
                      {[
                        {
                          label: "Signal from sensor",
                          desc: "Temp threshold exceeded on Line 3.",
                          icon: "📡",
                          active: true,
                        },
                        {
                          label: "Task auto‑created",
                          desc: "Work order assigned to nearest technician.",
                          icon: "📋",
                          active: true,
                        },
                        {
                          label: "Technician on‑site",
                          desc: "ETA 14 min · access granted via mobile.",
                          icon: "👷",
                          active: false,
                        },
                        {
                          label: "Resolved & logged",
                          desc: "Checklist completed, asset history updated.",
                          icon: "✅",
                          active: false,
                        },
                      ].map((step, i) => (
                        <div key={step.label} className="flex items-start gap-2">
                          <div className="flex flex-col items-center">
                            <div
                              className={`h-6 w-6 rounded-full flex items-center justify-center text-[11px] ${
                                step.active
                                  ? "bg-emerald-500 text-slate-950"
                                  : "bg-slate-800 text-slate-300"
                              }`}
                            >
                              {step.icon}
                            </div>
                            {i < 3 && (
                              <div className="mt-1 h-5 w-px bg-gradient-to-b from-emerald-500/60 to-slate-700/40" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] font-semibold text-slate-100">
                              {step.label}
                            </p>
                            <p className="text-[10px] text-slate-400">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* side stacked mini cards */}
                  <div className="w-32 flex flex-col gap-2">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="rounded-2xl bg-slate-900/90 border border-emerald-500/40 px-3 py-2"
                    >
                      <p className="text-[9px] text-slate-400 uppercase tracking-[0.18em]">
                        DEVICES
                      </p>
                      <p className="mt-1 text-[11px] text-slate-100">
                        128 sensors online
                      </p>
                      <p className="text-[9px] text-emerald-400">7 triggers today</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="rounded-2xl bg-slate-900/90 border border-sky-500/40 px-3 py-2"
                    >
                      <p className="text-[9px] text-slate-400 uppercase tracking-[0.18em]">
                        TEAMS
                      </p>
                      <p className="mt-1 text-[11px] text-slate-100">
                        24 technicians active
                      </p>
                      <p className="text-[9px] text-sky-300">3 urgent jobs</p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -2 }}
                      className="rounded-2xl bg-slate-900/90 border border-fuchsia-500/40 px-3 py-2"
                    >
                      <p className="text-[9px] text-slate-400 uppercase tracking-[0.18em]">
                        SLA HEALTH
                      </p>
                      <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full w-[86%] bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400" />
                      </div>
                      <p className="mt-1 text-[9px] text-fuchsia-300 text-right">
                        86% on‑time
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* bottom KPI strip */}
                <div className="mt-2 rounded-2xl bg-slate-900/85 border border-slate-700 px-3 py-2 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 uppercase tracking-[0.18em]">
                      AUTO‑SCHEDULED VISITS
                    </span>
                    <span className="text-sm font-semibold text-emerald-400">
                      68% from IoT alerts
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-slate-400 uppercase tracking-[0.18em]">
                      FIRST‑TIME FIX
                    </span>
                    <span className="text-sm font-semibold text-emerald-400">
                      91% success
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE BPM & IOT */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Why teams choose <span style={{ color: logoGreen }}>BPM & IoT</span> with us
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-3xl mx-auto mt-3">
              One control layer for devices, people, and processes—so operations
              feel smoother for your teams and invisible for your customers.
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
                    {idx === 0 && "ALERTS TO ACTION"}
                    {idx === 1 && "END‑TO‑END JOURNEYS"}
                    {idx === 2 && "TEAMS IN SYNC"}
                    {idx === 3 && "REAL‑TIME VISIBILITY"}
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

      {/* STEPS */}
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
              FROM SIGNAL TO RESOLUTION
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              How Jramsys delivers BPM & IoT outcomes
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              A clear, trackable flow from discovery to configuration, integration,
              automation, and continuous improvement.
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
                          {idx === 0 && "DISCOVER & MAP"}
                          {idx === 1 && "CONFIGURE BPM"}
                          {idx === 2 && "INTEGRATE IOT"}
                          {idx === 3 && "AUTOMATE WORK"}
                          {idx === 4 && "MEASURE & IMPROVE"}
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
                      {idx === 0 && "🏭"}
                      {idx === 1 && "🏢"}
                      {idx === 2 && "🏥"}
                      {idx === 3 && "🚚"}
                      {idx === 4 && "⚡"}
                      {idx === 5 && "🏦"}
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
