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
    title: "Consultation & Requirements Discovery",
    desc: "We start by understanding your business, users, and systems, then define a clear solution vision and roadmap.",
  },
  {
    title: "Design & Blueprinting",
    desc: "Wireframes, UX flows, and technical specs validate features, integrations, and usability before development.",
  },
  {
    title: "Agile Development & Iteration",
    desc: "Engineers build in short sprints with regular demos so you can see progress and refine scope early.",
  },
  {
    title: "Testing, QA & Launch",
    desc: "Functional, security, and performance testing ensure a stable release, supported by training and documentation.",
  },
  {
    title: "Support & Continuous Enhancement",
    desc: "We keep improving your platform with fixes, optimisations, and new features as your business evolves.",
  },
];

const exampleUses = [
  { title: "Education", desc: "Student portals, LMS integrations, exam and results workflows." },
  { title: "Healthcare", desc: "Scheduling, EMR dashboards, telemedicine and patient apps." },
  { title: "Retail", desc: "E‑commerce, inventory, loyalty, and POS extensions." },
  { title: "Manufacturing", desc: "Shop‑floor systems, production tracking, and maintenance tools." },
  { title: "Logistics", desc: "Order management, fleet tracking, and last‑mile delivery apps." },
  { title: "Government", desc: "Citizen portals, case management, and digital workflows." },
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* HERO */}
      <section className="relative px-6 py-32 md:py-44">
        {/* colourful hero background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-emerald-500/35 blur-3xl" />
          <div className="absolute -right-40 -top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-500/30 blur-3xl" />
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
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-3/5"
          >
            <p
              className="mb-3 inline-flex items-center rounded-full px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em]"
              style={{ backgroundColor: "rgba(25,180,154,0.12)", color: logoGreen }}
            >
              CUSTOM SOFTWARE DEVELOPMENT
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
              Build software that
              <br />
              <span style={{ color: logoGreen }}>moves with your business</span>
            </h1>

            <p className="text-sm md:text-base text-slate-200 mb-7 max-w-xl">
              Design, build, and scale digital platforms tailored to your goals, industry, and
              future roadmap—without fighting rigid off‑the‑shelf tools.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                94% on‑time sprint delivery
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-sky-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                ⚙️ Built on modern stack
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-fuchsia-400/40 px-3 py-1 bg-slate-950/40 backdrop-blur">
                ✅ Post‑launch support included
              </span>
            </div>
          </motion.div>

          {/* NEW: Project radar + stacked stats (unique for this page) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:w-2/5"
          >
            <div className="relative rounded-[32px] bg-slate-950 border border-emerald-500/25 shadow-[0_26px_90px_rgba(15,23,42,0.95)] px-6 py-6 overflow-hidden">
              {/* grid */}
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
                    LIVE DELIVERY RADAR
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    ACTIVE SOFTWARE PROJECTS
                  </span>
                </div>

                <div className="flex gap-4 items-stretch">
                  {/* radar / board */}
                  <motion.div
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="relative flex-1 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-700/70 shadow-[0_18px_50px_rgba(15,23,42,0.8)] overflow-hidden px-4 py-4"
                  >
                    {/* center glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full bg-emerald-500/25 blur-2xl" />
                    </div>

                    {/* vertical lanes */}
                    <div className="absolute inset-y-4 left-1/4 w-px bg-slate-700/60" />
                    <div className="absolute inset-y-4 left-1/2 w-px bg-slate-700/40" />
                    <div className="absolute inset-y-4 left-3/4 w-px bg-slate-700/25" />
                    {/* horizontal lanes */}
                    <div className="absolute inset-x-4 top-1/3 h-px bg-slate-700/60" />
                    <div className="absolute inset-x-4 top-2/3 h-px bg-slate-700/40" />

                    {/* project chips */}
                    {[
                      { label: "Mobile app", x: "9%", y: "22%", color: "bg-emerald-400" },
                      { label: "Data platform", x: "56%", y: "18%", color: "bg-sky-400" },
                      { label: "Portal revamp", x: "33%", y: "52%", color: "bg-fuchsia-400" },
                      { label: "B2B APIs", x: "68%", y: "60%", color: "bg-amber-300" },
                      { label: "Ops tooling", x: "18%", y: "72%", color: "bg-emerald-300" },
                    ].map((p, i) => (
                      <motion.div
                        key={p.label}
                        className={`absolute rounded-xl px-2.5 py-1.5 text-[9px] font-semibold text-slate-950 flex items-center gap-1 shadow-[0_0_18px_rgba(16,185,129,0.55)] ${p.color}`}
                        style={{ left: p.x, top: p.y }}
                        animate={{ y: ["0%", "-6%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 4 + i * 0.6, ease: "easeInOut" }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-950/70" />
                        {p.label}
                      </motion.div>
                    ))}

                    {/* sprint ring */}
                    <motion.div
                      className="absolute inset-10 rounded-3xl border border-emerald-400/35"
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    />
                  </motion.div>

                  {/* stacked KPIs */}
                  <div className="w-32 flex flex-col justify-between gap-2">
                    <div className="rounded-2xl bg-slate-900/95 border border-emerald-500/50 px-3 py-2 shadow-[0_0_22px_rgba(16,185,129,0.45)]">
                      <p className="text-[9px] text-slate-300 uppercase tracking-[0.18em]">
                        ON‑TIME SPRINTS
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-bold text-emerald-400">94%</span>
                        <span className="text-[9px] text-emerald-300 bg-emerald-500/15 px-1.5 py-0.5 rounded-full">
                          ▲ stable
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/85 border border-sky-500/45 px-3 py-2">
                      <p className="text-[9px] text-slate-300 uppercase tracking-[0.18em]">
                        ACTIVE PROJECTS
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-bold text-sky-300">11</span>
                        <span className="text-[9px] text-sky-300">3 in discovery</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-slate-900/80 border border-fuchsia-500/40 px-3 py-2">
                      <p className="text-[9px] text-slate-300 uppercase tracking-[0.18em]">
                        POST‑LAUNCH ISSUES
                      </p>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-xl font-bold text-fuchsia-300">Low</span>
                        <span className="text-[9px] text-fuchsia-300">SLA 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE OUR CUSTOM SOFTWARE – 4 COMPACT CARDS */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm md:text-base lg:text-lg font-semibold tracking-[0.35em] text-emerald-500">
              WHY TEAMS WORK WITH US
            </p>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Custom software that ships, scales, and keeps improving.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Card 1 – Product & solution design */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">💡</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  PRODUCT & SOLUTION DESIGN
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Product & solution design
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Discovery workshops, UX, and technical blueprints so the right product is
                  defined before any code is written.
                </p>
              </div>
            </div>

            {/* Card 2 – Engineering & integrations */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">⚙️</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  ENGINEERING & INTEGRATIONS
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Engineering & integrations
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Web, mobile, and API‑first backends on modern stacks, connected cleanly to
                  your existing systems.
                </p>
              </div>
            </div>

            {/* Card 3 – QA & launch */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-emerald-400/70 hover:shadow-[0_18px_60px_rgba(16,185,129,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400">
                <span className="text-2xl text-white">✅</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-500">
                  QA & LAUNCH
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Testing, QA & launch
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Functional, security, and performance testing plus rollout support, training,
                  and documentation.
                </p>
              </div>
            </div>

            {/* Card 4 – Support & evolution */}
            <div className="group flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-slate-100 transition-all duration-200 hover:border-sky-500/70 hover:shadow-[0_18px_60px_rgba(59,130,246,0.18)]">
              <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center shadow-md bg-gradient-to-br from-sky-500 via-blue-500 to-cyan-400">
                <span className="text-2xl text-white">🔄</span>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-sky-500">
                  SUPPORT & EVOLUTION
                </p>
                <h3 className="text-base md:text-lg font-semibold text-slate-900 mt-1">
                  Support & continuous enhancement
                </h3>
                <p className="mt-1 text-[12px] text-slate-600">
                  Ongoing monitoring, fixes, and new features so your platform keeps pace with
                  your business.
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
              FROM IDEA TO PRODUCTION
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              How we deliver your custom solution
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-3xl mx-auto">
              A transparent, collaborative flow from first workshop to launch and beyond—so you
              always know what is coming next.
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
                          {idx === 1 && "DESIGN & VALIDATE"}
                          {idx === 2 && "BUILD & ITERATE"}
                          {idx === 3 && "TEST & LAUNCH"}
                          {idx === 4 && "SUPPORT & GROW"}
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
                      {idx === 2 && "🛍️"}
                      {idx === 3 && "🏭"}
                      {idx === 4 && "🚚"}
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
