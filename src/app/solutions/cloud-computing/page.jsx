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
    title: "Cloud Assessment & Strategy",
    desc: "We evaluate your business needs, current IT setup, and future growth to craft a custom cloud adoption or modernization strategy, including hybrid and multi‑cloud options.",
  },
  {
    title: "Architecture & Solution Design",
    desc: "Our experts design secure, scalable IaaS, PaaS, or SaaS architectures on AWS, Azure, GCP, or your preferred provider—including networking, identity, and compliance.",
  },
  {
    title: "Migration & Cloud Implementation",
    desc: "We migrate legacy systems, deploy cloud‑native applications, and orchestrate seamless transitions—minimising downtime and risk.",
  },
  {
    title: "Automation & DevOps",
    desc: "CI/CD pipelines, infrastructure‑as‑code, monitoring, and backup are put in place for reliable, repeatable releases.",
  },
  {
    title: "Optimisation & Managed Services",
    desc: "Proactive monitoring, cost control, and ongoing support keep your cloud efficient and secure so teams can focus on core business.",
  },
];

const exampleUses = [
  {
    title: "Education",
    desc: "Elastically scale online learning platforms and student data management.",
  },
  {
    title: "Healthcare",
    desc: "Secure, compliant cloud for patient portals, imaging, and telemedicine.",
  },
  {
    title: "Manufacturing",
    desc: "IoT data hubs, analytics, and workflow automation in the cloud.",
  },
  {
    title: "Retail",
    desc: "Global e‑commerce platforms, inventory, and marketing operations.",
  },
  {
    title: "Finance",
    desc: "Low‑latency payments, risk engines, and regulatory reporting.",
  },
  {
    title: "Public Sector",
    desc: "Digital citizen services and secure government document management.",
  },
];

const valuePoints = [
  {
    label: "Right‑sized from day one",
    desc: "Cloud foundations designed around your workloads, cost targets, and compliance—not a one‑size‑fits‑all template.",
    icon: "📐",
  },
  {
    label: "Zero‑drama migrations",
    desc: "Playbooks, dry‑runs, and rollback plans so go‑lives feel boring—in the best possible way.",
    icon: "🛫",
  },
  {
    label: "DevOps as a habit",
    desc: "Pipelines, observability, and automation built into every environment, not bolted on later.",
    icon: "⚙️",
  },
  {
    label: "Always‑on optimisation",
    desc: "Continuous tuning for spend, performance, and resilience as your usage grows.",
    icon: "🌱",
  },
];

export default function CloudComputingPage() {
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
              CLOUD COMPUTING · IAAS · PAAS · SAAS
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Make your{" "}
              <span style={{ color: logoGreen }}>cloud</span>
              <br />
              work like a product
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-7 max-w-xl">
              JRamsys designs, migrates, and runs modern cloud platforms so your teams ship faster,
              scale on demand, and stop fighting infrastructure fires.
            </p>
          </motion.div>

          {/* Cloud efficiency snapshot card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-2/5"
          >
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 md:p-7 border border-slate-800 shadow-2xl">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>CLOUD HEALTH SNAPSHOT</span>
                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-wide text-slate-400">
                    Spend vs utilisation
                  </p>
                  <div className="h-28 rounded-xl bg-slate-900/80 p-2 flex items-end gap-1 overflow-hidden">
                    {[65, 72, 58, 80, 55, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-sky-500 to-emerald-300"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-[11px] text-slate-400">
                    Continuous rightsizing keeps capacity aligned with real usage.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-wide text-slate-400">
                    Platform KPIs
                  </p>
                  {[
                    { label: "Infra cost reduction", value: "‑28%" },
                    { label: "Deploy frequency uplift", value: "3×" },
                    { label: "Change failure rate", value: "‑40%" },
                  ].map((kpi, idx) => (
                    <motion.div
                      key={kpi.label}
                      className="flex items-center justify-between rounded-lg bg-slate-900/80 px-3 py-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.08 }}
                    >
                      <span className="text-[11px] text-slate-300">{kpi.label}</span>
                      <span className="text-[11px] font-semibold text-emerald-400">
                        {kpi.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY TEAMS CHOOSE OUR CLOUD – 4 COMPACT CARDS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.35em] text-emerald-500">
              WHY TEAMS CHOOSE OUR CLOUD
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Cloud platforms that are engineered, not improvised.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 – Right‑sized from day one */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">📐</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  FOUNDATION & FIT
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Right‑sized from day one
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Cloud foundations designed around your workloads, cost targets, and compliance—
                  not a one‑size‑fits‑all template.
                </p>
              </div>
            </div>

            {/* Card 2 – Zero‑drama migrations */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">🛫</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  MIGRATION PLAYBOOKS
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Zero‑drama migrations
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Playbooks, dry‑runs, and rollback plans so go‑lives feel boring—in the best
                  possible way.
                </p>
              </div>
            </div>

            {/* Card 3 – DevOps as a habit */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  BUILT-IN DEVOPS
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  DevOps as a habit
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Pipelines, observability, and automation built into every environment, not
                  bolted on later.
                </p>
              </div>
            </div>

            {/* Card 4 – Always‑on optimisation */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  CONTINUOUS TUNING
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Always‑on optimisation
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Continuous tuning for spend, performance, and resilience as your usage grows.
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
              HOW YOUR CLOUD JOURNEY RUNS
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              From assessment to always‑on optimisation
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              A staged approach that de‑risks migration, builds the right architectures, and then
              keeps your platforms tuned over time.
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
                          {idx === 0 && "DISCOVER & PLAN"}
                          {idx === 1 && "DESIGN & ARCHITECT"}
                          {idx === 2 && "MIGRATE & MODERNISE"}
                          {idx === 3 && "AUTOMATE & ENABLE"}
                          {idx === 4 && "OPTIMISE & MANAGE"}
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
                      {idx === 0 && "🎓"}
                      {idx === 1 && "🏥"}
                      {idx === 2 && "🏭"}
                      {idx === 3 && "🛍️"}
                      {idx === 4 && "💳"}
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
