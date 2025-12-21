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
              IT CONSULTING & ADVISORY
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Turn IT from{" "}
              <span style={{ color: logoGreen }}>cost centre</span>
              <br />
              into a growth engine
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl">
              Accelerate innovation and lower long‑term IT cost with expert strategy, solution
              architecture, and digital transformation leadership from JRamsys.
            </p>

            <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                📊 Roadmaps aligned to business
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                ☁ Cloud, security & data focus
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                🤝 Vendor‑neutral advice
              </span>
            </div>
          </motion.div>

          {/* IT health card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-2/5"
          >
            <div className="rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800/80 shadow-[0_24px_80px_rgba(15,23,42,0.85)] px-5 py-5 md:px-6 md:py-6 relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 opacity-25">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.25) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="mb-3 flex items-center justify-between text-[10px] text-slate-300">
                  <span>IT MATURITY SNAPSHOT</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE REVIEW
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-3 items-stretch">
                  {/* capability bars */}
                  <div className="col-span-3 flex flex-col">
                    <p className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
                      Capability balance
                    </p>
                    <div className="relative flex-1 rounded-2xl bg-slate-950/85 border border-slate-800/70 px-3 py-2 overflow-hidden">
                      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-14 bg-gradient-to-t from-emerald-500/30 via-cyan-400/10 to-transparent blur-xl" />

                      <div className="relative flex flex-col gap-2 text-[10px] text-slate-300">
                        <div className="flex items-center justify-between">
                          <span>Cloud</span>
                          <span className="text-emerald-300 font-semibold">A-</span>
                        </div>
                        <div className="h-1 rounded-full bg-slate-800">
                          <div className="h-full w-[80%] bg-gradient-to-r from-emerald-400 to-cyan-400" />
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <span>Security</span>
                          <span className="text-sky-300 font-semibold">B+</span>
                        </div>
                        <div className="h-1 rounded-full bg-slate-800">
                          <div className="h-full w-[70%] bg-gradient-to-r from-sky-400 to-indigo-400" />
                        </div>

                        <div className="flex items-center justify-between mt-1">
                          <span>Data & analytics</span>
                          <span className="text-fuchsia-300 font-semibold">B</span>
                        </div>
                        <div className="h-1 rounded-full bg-slate-800">
                          <div className="h-full w-[60%] bg-gradient-to-r from-fuchsia-400 to-emerald-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* advisory KPIs */}
                  <div className="col-span-2 flex flex-col">
                    <p className="mb-1 text-[10px] uppercase tracking-wide text-slate-400">
                      Advisory impact
                    </p>
                    <div className="space-y-1.5">
                      <div className="rounded-2xl bg-slate-950/80 border border-emerald-500/40 px-3 py-2 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-slate-200">
                            Projects re‑aligned to strategy
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-400">+42%</span>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-slate-950/70 border border-sky-500/40 px-3 py-2 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-slate-200">
                            Shadow IT risks reduced
                          </span>
                          <span className="text-[10px] font-semibold text-sky-300">-37%</span>
                        </div>
                      </div>
                      <div className="rounded-2xl bg-slate-950/70 border border-fuchsia-500/35 px-3 py-2 flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-slate-200">
                            Exec stakeholders engaged
                          </span>
                          <span className="text-[10px] font-semibold text-fuchsia-300">5+</span>
                        </div>
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
              Strategy, architecture, and governance in one place.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* card 1 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">🧪</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  AUDITS & INSIGHT
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Independent IT audits & analysis
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Independent IT audits, risk and opportunity analysis across infrastructure,
                  applications, security, and data.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">☁️</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  CLOUD & MODERNISATION
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Cloud adoption & hybrid strategies
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Cloud adoption, migration, and hybrid strategies that balance performance,
                  cost, and compliance.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  SECURITY & COMPLIANCE
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Digital workflow, cybersecurity & compliance
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Digital workflow, cybersecurity, and compliance programs designed to meet
                  regulations and reduce risk.
                </p>
              </div>
            </div>

            {/* card 4 */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">📑</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  VENDORS & CHANGE
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  RFP support & change leadership
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  RFP and vendor selection support, technical due diligence, and leadership for
                  end‑to‑end IT change management.
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
              HOW OUR ADVISORY ENGAGEMENTS RUN
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              A clear arc from assessment to optimisation
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              A structured journey from IT assessment to execution and ongoing optimisation—so
              every initiative tracks back to your business goals.
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
                          {idx === 0 && "DISCOVER & ASSESS"}
                          {idx === 1 && "PLAN & PRIORITISE"}
                          {idx === 2 && "ARCHITECT & SELECT"}
                          {idx === 3 && "GUIDE DELIVERY"}
                          {idx === 4 && "OPTIMISE & EVOLVE"}
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
                      {idx === 1 && "🏥"}
                      {idx === 2 && "🎓"}
                      {idx === 3 && "🏛"}
                      {idx === 4 && "💳"}
                      {idx === 5 && "🚀"}
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
