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
    title: "Bin Integration & Sensor Setup",
    desc: "We connect IoT sensors to bins and collection vehicles, enabling real-time status, fill-level detection, and event triggers throughout your waste management network.",
  },
  {
    title: "Smart Collection & Routing",
    desc: "Fill data is used to generate and push optimized routes automatically to drivers—ensuring timely, efficient waste pickup and reducing fuel use.",
  },
  {
    title: "Monitoring & Data Analytics",
    desc: "Supervisors oversee all collection status, compliance, and performance with interactive dashboards and customizable reports.",
  },
  {
    title: "Citizen Feedback & Service Requests",
    desc: "End users submit pickup or service requests by simply scanning a QR—improving response and keeping communities clean.",
  },
];

const exampleUses = [
  {
    title: "Cities & Municipalities",
    desc: "Automated collection, cleaner streets, resource savings.",
  },
  {
    title: "Gated Communities",
    desc: "Digital log of services, faster response for overflow bins.",
  },
  {
    title: "Universities & Campuses",
    desc: "Track bins, events, and recycling efforts easily.",
  },
  {
    title: "Industrial Parks",
    desc: "Bulk waste scheduling & compliance for enterprises.",
  },
  {
    title: "Hotels & Events",
    desc: "Peak-time pickup and hygiene compliance tracking.",
  },
  {
    title: "Government",
    desc: "Full audit, data-driven planning, transparent operations.",
  },
];

export default function SmartWastePage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 py-28 md:py-36">
        {/* colourful background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/35 blur-3xl" />
          <div className="absolute -right-40 -top-10 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -left-10 bottom-[-120px] h-80 w-[420px] rotate-[-18deg] bg-gradient-to-r from-emerald-400/25 via-cyan-400/25 to-fuchsia-400/25 blur-3xl" />
          <div
            className="absolute inset-0 opacity-18"
            style={{
              backgroundImage: `
                linear-gradient(${logoGreen} 1px, transparent 1px),
                linear-gradient(90deg, ${logoGreen} 1px, transparent 1px)
              `,
              backgroundSize: "46px 46px",
            }}
          />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
          {/* hero text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5"
          >
            <p
              className="mb-3 inline-flex items-center rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ backgroundColor: "rgba(25,180,154,0.12)", color: logoGreen }}
            >
              SMART WASTE MANAGEMENT
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Make every{" "}
              <span style={{ color: logoGreen }}>waste pickup</span>
              <br />
              visible, efficient, and smart
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl">
              Transform your waste ecosystem with JRamsys digital, IoT-powered waste management—
              offering control, efficiency, and sustainability at every stage.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                🛰 Real-time bin & fleet visibility
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                🗺 Optimised collection routes
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                🧾 Full history & audit logs
              </span>
            </div>
          </motion.div>

          {/* NEW: Smart City Map + KPIs panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-2/5"
          >
            <div className="relative rounded-[28px] bg-slate-950 border border-emerald-500/25 shadow-[0_24px_80px_rgba(15,23,42,0.9)] px-6 py-6 overflow-hidden">
              {/* subtle grid */}
              <div className="pointer-events-none absolute inset-0 opacity-20">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
              </div>

              <div className="relative z-10 flex flex-col gap-5">
                {/* header */}
                <div className="flex items-center justify-between text-[10px] text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE SMART WASTE VIEW
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    CITY-LEVEL SNAPSHOT
                  </span>
                </div>

                <div className="flex gap-4 items-stretch">
                  {/* circular map */}
                  <motion.div
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="relative flex-1 aspect-square rounded-full bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/70 shadow-[0_18px_50px_rgba(15,23,42,0.8)] overflow-hidden"
                  >
                    {/* glowing center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full bg-emerald-500/25 blur-2xl" />
                    </div>

                    {/* orbit rings */}
                    <div className="absolute inset-6 rounded-full border border-emerald-500/25" />
                    <div className="absolute inset-10 rounded-full border border-sky-500/25" />
                    <div className="absolute inset-14 rounded-full border border-fuchsia-500/25" />

                    {/* animated bin markers */}
                    {[
                      { top: "16%", left: "58%", color: "bg-emerald-400" },
                      { top: "40%", left: "22%", color: "bg-emerald-300" },
                      { top: "63%", left: "68%", color: "bg-amber-300" },
                      { top: "70%", left: "32%", color: "bg-red-400" },
                      { top: "28%", left: "35%", color: "bg-emerald-400" },
                    ].map((dot, i) => (
                      <motion.div
                        key={i}
                        className={`absolute h-2.5 w-2.5 rounded-full ${dot.color} shadow-[0_0_12px_rgba(52,211,153,0.9)]`}
                        style={{ top: dot.top, left: dot.left }}
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.8 + i * 0.3 }}
                      />
                    ))}

                    {/* small truck icon path */}
                    <motion.div
                      className="absolute h-6 w-10 rounded-xl bg-emerald-400/80 flex items-center justify-center text-[10px] font-bold text-slate-950"
                      initial={{ x: "10%", y: "65%" }}
                      animate={{ x: "65%", y: "25%" }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 6,
                        ease: "easeInOut",
                      }}
                    >
                      🚛
                    </motion.div>
                  </motion.div>

                  {/* KPIs column */}
                  <div className="w-32 flex flex-col justify-between gap-2">
                    <div className="rounded-2xl bg-slate-900/90 border border-emerald-500/40 px-3 py-2">
                      <p className="text-[9px] text-slate-300 uppercase tracking-[0.18em]">
                        OVERFILLED BINS
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-bold text-emerald-400">18</span>
                        <span className="text-[9px] text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded-full">
                          -32%
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/80 border border-sky-500/40 px-3 py-2">
                      <p className="text-[9px] text-slate-300 uppercase tracking-[0.18em]">
                        ACTIVE TRUCKS
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-bold text-sky-300">12</span>
                        <span className="text-[9px] text-sky-300">on route</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/80 border border-fuchsia-500/35 px-3 py-2">
                      <p className="text-[9px] text-slate-300 uppercase tracking-[0.18em]">
                        TODAY&apos;S PICKUPS
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-bold text-fuchsia-300">842</span>
                        <span className="text-[9px] text-fuchsia-300">97% on‑time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE PROVIDE – 4 COMPACT CARDS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.35em] text-emerald-500">
              WHAT WE PROVIDE
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
              End-to-end digital control over your waste network.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* card 1 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-400">
                <span className="text-2xl text-white">🗑️</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  IOT & BIN VISIBILITY
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Live bin tracking & alerts
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  End-to-end bin tracking, fill alerts, and predictive maintenance across your
                  full container network.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">🛣️</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  FLEET & ROUTING
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Dynamic route optimisation
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Dynamic route optimization for collection fleets so drivers only visit bins
                  that actually need service.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">📊</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  CONTROL ROOMS
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Dashboards & audit history
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Real-time dashboards, mobile staff apps, and full audit logs for every route,
                  pickup, and alert.
                </p>
              </div>
            </div>

            {/* card 4 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">📱</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  QR & CITIZEN APPS
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  QR requests & managed rollout
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Citizen-facing QR for service and instant feedback, plus full deployment,
                  support, and ongoing analytics insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS – HORIZONTAL STEPPER */}
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
              HOW SMART COLLECTION RUNS
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              From sensor to clean street, in four steps
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              A connected loop that starts at the bin and ends in the control room—so every
              collection is data‑driven and traceable.
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
                          className={`flex items=center justify-center h-10 w-10 rounded-2xl border-2 bg-slate-950 shadow-md
                            ${
                              idx === 0
                                ? "border-emerald-400 text-emerald-300"
                                : idx === 1
                                ? "border-sky-400 text-sky-300"
                                : idx === 2
                                ? "border-amber-400 text-amber-300"
                                : "border-fuchsia-400 text-fuchsia-300"
                            }`}
                        >
                          <span className="text-xs font-bold">0{idx + 1}</span>
                        </div>

                        <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-emerald-300 uppercase">
                          {idx === 0 && "SENSE & CONNECT"}
                          {idx === 1 && "PLAN & DISPATCH"}
                          {idx === 2 && "MONITOR & ANALYSE"}
                          {idx === 3 && "ENGAGE & IMPROVE"}
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
                      {idx === 0 && "🏙"}
                      {idx === 1 && "🏘"}
                      {idx === 2 && "🎓"}
                      {idx === 3 && "🏭"}
                      {idx === 4 && "🏨"}
                      {idx === 5 && "🏛"}
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
