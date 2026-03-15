'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Brand tokens ─────────────────────────── */
const C = {
  navy:    "#0D2B3E",
  teal:    "#1A6B7C",
  tealLt:  "#2A8FA3",
  orange:  "#E8681A",
  cream:   "#F5F3EF",
  stone:   "#E8E3DB",
  offwhite:"#FAFAF8",
  ink:     "#111111",
  body:    "#444444",
  muted:   "#717171",
};

/* ─── Motion ───────────────────────────────── */
const ease = [0.22, 1, 0.36, 1];
const up  = (d=0) => ({ initial:{opacity:0,y:36},  whileInView:{opacity:1,y:0},  viewport:{once:true}, transition:{duration:0.72,ease,delay:d} });
const lft = (d=0) => ({ initial:{opacity:0,x:-48}, whileInView:{opacity:1,x:0},  viewport:{once:true}, transition:{duration:0.75,ease,delay:d} });
const rgt = (d=0) => ({ initial:{opacity:0,x:48},  whileInView:{opacity:1,x:0},  viewport:{once:true}, transition:{duration:0.75,ease,delay:d} });

/* ─── Data ─────────────────────────────────── */
const WHY = [
  { title:"Focused, Not Bloated",    body:"A lean engineering team making clear decisions fast — no bureaucracy, no overhead." },
  { title:"Built by Practitioners",  body:"We design and build end-to-end, ensuring every solution is practical and production-ready." },
  { title:"Automation with Purpose", body:"Every workflow removes manual effort and eliminates operational friction by design." },
  { title:"Scalable by Design",      body:"Clean architecture from day one — no shortcuts that create bigger problems later." },
  { title:"Direct Collaboration",    body:"Clients work directly with the engineers building their systems — faster delivery." },
  { title:"Honest Delivery",         body:"We commit only to what we can deliver, communicate clearly, and own end-to-end." },
];

/* SVG icons — one per WHY item, no numbers */
const WHY_ICONS = [
  /* Focused */
  <svg key="i0" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="9" stroke={C.teal} strokeWidth="1.7"/>
    <circle cx="13" cy="13" r="4" stroke={C.teal} strokeWidth="1.7"/>
    <circle cx="13" cy="13" r="1.5" fill={C.teal}/>
  </svg>,
  /* Practitioners */
  <svg key="i1" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M4 20V8l9-4 9 4v12" stroke={C.teal} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="9" y="14" width="8" height="6" rx="1" stroke={C.teal} strokeWidth="1.7"/>
  </svg>,
  /* Automation */
  <svg key="i2" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 4v4M13 18v4M4 13h4M18 13h4" stroke={C.teal} strokeWidth="1.7" strokeLinecap="round"/>
    <circle cx="13" cy="13" r="4" stroke={C.teal} strokeWidth="1.7"/>
  </svg>,
  /* Scalable */
  <svg key="i3" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="3" y="15" width="6" height="8" rx="1" stroke={C.teal} strokeWidth="1.7"/>
    <rect x="10" y="10" width="6" height="13" rx="1" stroke={C.teal} strokeWidth="1.7"/>
    <rect x="17" y="4" width="6" height="19" rx="1" stroke={C.teal} strokeWidth="1.7"/>
  </svg>,
  /* Collaboration */
  <svg key="i4" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="9" cy="9" r="4" stroke={C.teal} strokeWidth="1.7"/>
    <circle cx="19" cy="9" r="3" stroke={C.teal} strokeWidth="1.7"/>
    <path d="M2 22c0-4 3.1-7 7-7s7 3 7 7" stroke={C.teal} strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M19 14c2.5 0 5 2 5 5" stroke={C.teal} strokeWidth="1.7" strokeLinecap="round"/>
  </svg>,
  /* Honest */
  <svg key="i5" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M7 13l4 4 8-8" stroke={C.teal} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="13" r="10" stroke={C.teal} strokeWidth="1.7"/>
  </svg>,
];

const CULTURE = [
  { label:"Learning by building",    body:"We improve through iteration and hands-on feedback, not slides." },
  { label:"Direct communication",    body:"Fewer layers, faster decisions, shared ownership across the team." },
  { label:"Responsible flexibility", body:"Focus and measurable results matter more than rigid process." },
  { label:"Continuous improvement",  body:"We review, fix, and move forward — always." },
];

const CORE    = ["Internet of Things (IoT)", "Automation & System Integration", "Cloud Platforms", "Data & Analytics"];
const SUPPORT = ["AI & Machine Learning", "Edge Computing", "Smart Sensors & Devices", "Wireless & Connectivity", "Mobile Applications", "Web Applications", "Security-by-Design"];

/* ─── Fonts ─────────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=Inter:wght@300;400;500;600&display=swap');
    .jra *, .jra *::before, .jra *::after { box-sizing:border-box; margin:0; padding:0; }
    .jra { font-family:'Inter',system-ui,sans-serif; -webkit-font-smoothing:antialiased; }
    .s   { font-family:'Cormorant Garamond',Georgia,serif; }
  `}</style>
);

const Eyebrow = ({ children, light=false }) => (
  <p style={{ fontSize:"0.68rem", fontWeight:600, letterSpacing:"0.26em",
    textTransform:"uppercase", color: light ? "rgba(255,255,255,0.45)" : C.teal, marginBottom:14 }}>
    {children}
  </p>
);

const Hover = ({ dark=false, children, style={} }) => (
  <div
    style={{ transition:"transform 0.26s ease, box-shadow 0.26s ease", ...style }}
    onMouseEnter={e=>{
      e.currentTarget.style.transform="translateY(-5px)";
      e.currentTarget.style.boxShadow= dark
        ? "0 20px 52px rgba(0,0,0,0.35)"
        : "0 20px 52px rgba(13,43,62,0.13)";
    }}
    onMouseLeave={e=>{
      e.currentTarget.style.transform="translateY(0)";
      e.currentTarget.style.boxShadow="none";
    }}
  >
    {children}
  </div>
);

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function About() {
  return (
    <div className="jra" style={{ backgroundColor:"#fff", overflow:"hidden" }}>
      <Fonts />

      {/* ── HERO ──────────────────────────────────── */}
      <section style={{ position:"relative", minHeight:"100vh",
        display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88"
          alt="JRAMSYS office" fill sizes="100vw"
          style={{ objectFit:"cover", objectPosition:"center 35%" }} priority
        />
        <div style={{ position:"absolute", inset:0,
          background:"linear-gradient(175deg,rgba(10,28,40,0.94) 0%,rgba(10,28,40,0.88) 50%,rgba(10,28,40,0.96) 100%)" }}/>
        <div style={{ position:"absolute", bottom:-200, right:-200, width:600, height:600,
          borderRadius:"50%", background:"radial-gradient(circle,rgba(26,107,124,0.18) 0%,transparent 65%)",
          pointerEvents:"none" }}/>

        <div style={{ position:"relative", zIndex:10, maxWidth:860, margin:"0 auto",
          padding:"120px 32px 80px", textAlign:"center" }}>
          <motion.div initial={{ opacity:0, y:48 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:1.0, ease }}>

            <div style={{ display:"inline-flex", alignItems:"center", gap:9,
              backgroundColor:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.13)",
              borderRadius:50, padding:"8px 20px 8px 12px", marginBottom:48 }}>
              <div style={{ width:26, height:26, borderRadius:"50%", backgroundColor:C.teal,
                display:"flex", alignItems:"center", justifyContent:"center" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1.5 1.5h5l4 4.5-4 4.5H1.5V1.5Z" fill="#fff"/>
                </svg>
              </div>
              <span style={{ fontSize:"0.7rem", fontWeight:600, letterSpacing:"0.22em",
                textTransform:"uppercase", color:"rgba(255,255,255,0.6)" }}>
                JRAMSYS Infotech Private Limited
              </span>
            </div>

            <h1 className="s" style={{ fontSize:"clamp(3.4rem,7.5vw,6.2rem)", fontWeight:700,
              lineHeight:1.04, letterSpacing:"-0.02em", color:"#fff", marginBottom:12 }}>
              Engineering Solutions
            </h1>
            <h1 className="s" style={{ fontSize:"clamp(3.4rem,7.5vw,6.2rem)", fontWeight:700,
              lineHeight:1.04, letterSpacing:"-0.02em", fontStyle:"italic",
              color:C.tealLt, marginBottom:36 }}>
              That Deliver.
            </h1>

            <p style={{ fontSize:"clamp(1.05rem,2vw,1.2rem)", lineHeight:1.85, fontWeight:300,
              color:"rgba(255,255,255,0.68)", maxWidth:560, margin:"0 auto 52px" }}>
              Reliable, production-ready technology that makes complex systems
              work in real operational environments.
            </p>

            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:9,
                backgroundColor:C.teal, color:"#fff", fontWeight:600, fontSize:"0.9rem",
                letterSpacing:"0.04em", padding:"16px 36px", borderRadius:4, textDecoration:"none" }}
                onMouseEnter={e=>(e.currentTarget.style.backgroundColor=C.tealLt)}
                onMouseLeave={e=>(e.currentTarget.style.backgroundColor=C.teal)}>
                Get in Touch
              </a>
             
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── STORY ─────────────────────────────────── */}
      <section style={{ backgroundColor:C.offwhite, padding:"110px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>

            <motion.div {...lft()} style={{ position:"relative" }}>
              <div style={{ position:"relative", height:540, borderRadius:18, overflow:"hidden",
                boxShadow:"0 28px 72px rgba(13,43,62,0.18)" }}>
                <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=88"
                  alt="Technology" fill sizes="45vw" style={{ objectFit:"cover" }}/>
                <div style={{ position:"absolute", inset:0,
                  background:"linear-gradient(to top,rgba(13,43,62,0.45) 0%,transparent 55%)" }}/>
              </div>
              <div style={{ position:"absolute", bottom:-28, right:-28, width:190, height:190,
                borderRadius:14, overflow:"hidden", border:"5px solid #fff",
                boxShadow:"0 16px 40px rgba(13,43,62,0.18)" }}>
                <Image src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=85"
                  alt="Engineering" fill sizes="190px" style={{ objectFit:"cover" }}/>
              </div>
              <div style={{ position:"absolute", top:-18, left:-18, width:110, height:110,
                borderRadius:12, zIndex:-1, backgroundColor:C.stone }}/>
            </motion.div>

            <motion.div {...rgt()}>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="s" style={{ fontSize:"clamp(2.4rem,3.8vw,3.4rem)", fontWeight:700,
                color:C.navy, lineHeight:1.1, letterSpacing:"-0.025em" }}>
                A focused team building practical technology
              </h2>
              <div style={{ width:48, height:2, backgroundColor:C.teal, borderRadius:2, margin:"24px 0 32px" }}/>
              <p style={{ fontSize:"1.08rem", lineHeight:1.88, color:C.body, marginBottom:20 }}>
                JRAMSYS Infotech helps organisations convert complex systems and
                data into dependable, usable solutions. We prioritise clarity,
                reliability, and real-world usability above everything else.
              </p>
              <p style={{ fontSize:"1.08rem", lineHeight:1.88, color:C.body, marginBottom:44 }}>
                Every solution we build is designed to support your business
                processes — not complicate them. From concept to production,
                we own it end-to-end.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                {[
                  { label:"What We Build", accent:C.teal,
                    text:"IoT platforms, automation systems, and data pipelines built with real production constraints in mind." },
                  { label:"Where We're Headed", accent:C.orange,
                    text:"Disciplined execution — validating and scaling solutions with measurable operational value." },
                ].map((card,i) => (
                  <div key={i} style={{ backgroundColor:"#fff", borderRadius:14, padding:"24px 22px",
                    border:`1px solid ${C.stone}`, borderTop:`3px solid ${card.accent}` }}>
                    <p style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em",
                      textTransform:"uppercase", color:card.accent, marginBottom:10 }}>{card.label}</p>
                    <p style={{ fontSize:"0.88rem", lineHeight:1.72, color:C.body }}>{card.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── WHY US ────────────────────────────────────────────────────────────
          Layout: Left = sticky dark panel with heading + big quote
                  Right = 2-col card grid, all same style, no numbers
      ──────────────────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor:"#fff", padding:"120px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>

          {/* ── Centered heading block ── */}
          <motion.div {...up()} style={{ maxWidth:640, margin:"0 auto 72px", textAlign:"center" }}>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="s" style={{ fontSize:"clamp(2.6rem,4.5vw,3.8rem)", fontWeight:700,
              color:C.navy, lineHeight:1.08, letterSpacing:"-0.025em", marginBottom:20 }}>
              Why companies trust JRAMSYS
            </h2>
            <p style={{ fontSize:"1.05rem", lineHeight:1.82, color:C.muted }}>
              We combine deep engineering expertise with a commitment to honest,
              practical delivery — building long-term partnerships, not short-term projects.
            </p>
          </motion.div>

          {/* ── Two-column feature row: large horizontal cards ── */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:20 }}>
            {WHY.slice(0,2).map((item, idx) => (
              <motion.div key={idx} {...up(idx * 0.1)}>
                <Hover dark style={{
                  display:"flex", alignItems:"flex-start", gap:28,
                  backgroundColor:C.navy,
                  borderRadius:18, padding:"44px 40px", height:"100%",
                  borderLeft:`4px solid ${C.teal}`,
                }}>
                  {/* Icon container */}
                  <div style={{ flexShrink:0, width:60, height:60, borderRadius:14,
                    backgroundColor:"rgba(42,143,163,0.15)",
                    border:"1px solid rgba(42,143,163,0.3)",
                    display:"flex", alignItems:"center", justifyContent:"center" }}>
                    {WHY_ICONS[idx]}
                  </div>
                  <div>
                    <h3 className="s" style={{ fontSize:"1.55rem", fontWeight:700, color:"#fff",
                      lineHeight:1.2, letterSpacing:"-0.015em", marginBottom:12 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize:"1rem", lineHeight:1.8, color:"rgba(255,255,255,0.52)" }}>
                      {item.body}
                    </p>
                  </div>
                </Hover>
              </motion.div>
            ))}
          </div>

          {/* ── Four-column grid: remaining cards ── */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
            {WHY.slice(2).map((item, idx) => (
              <motion.div key={idx} {...up(0.18 + idx * 0.07)}>
                <Hover style={{
                  backgroundColor:C.cream, borderRadius:18,
                  padding:"36px 30px", height:"100%",
                  border:`1px solid ${C.stone}`,
                  borderTop:`3px solid ${C.teal}`,
                }}>
                  {/* Icon */}
                  <div style={{ width:52, height:52, borderRadius:12,
                    backgroundColor:"rgba(26,107,124,0.08)",
                    border:"1px solid rgba(26,107,124,0.14)",
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:24 }}>
                    {WHY_ICONS[idx + 2]}
                  </div>
                  <h3 style={{ fontSize:"1rem", fontWeight:600, color:C.navy,
                    lineHeight:1.3, letterSpacing:"-0.01em", marginBottom:12 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize:"0.875rem", lineHeight:1.78, color:C.muted }}>
                    {item.body}
                  </p>
                </Hover>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ── CULTURE ───────────────────────────────── */}
      <section style={{ backgroundColor:C.cream, padding:"110px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <motion.div {...up()} style={{ display:"grid", gridTemplateColumns:"1fr 1fr",
            gap:48, alignItems:"flex-end", marginBottom:56 }}>
            <div>
              <Eyebrow>Our Culture</Eyebrow>
              <h2 className="s" style={{ fontSize:"clamp(2.4rem,4vw,3.6rem)", fontWeight:700,
                color:C.navy, lineHeight:1.08, letterSpacing:"-0.025em" }}>
                How we work
              </h2>
            </div>
            <p style={{ fontSize:"1.05rem", lineHeight:1.82, color:C.body, alignSelf:"flex-end" }}>
              Engineers and problem-solvers who believe great outcomes come from
              clear thinking, direct ownership, and practical execution.
            </p>
          </motion.div>

          <motion.div {...up(0.1)} style={{ position:"relative", height:380,
            borderRadius:20, overflow:"hidden", marginBottom:52 }}>
            <Image src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1800&q=88"
              alt="Team collaboration" fill sizes="100vw"
              style={{ objectFit:"cover", objectPosition:"center 42%" }}/>
            <div style={{ position:"absolute", inset:0,
              background:"linear-gradient(to right,rgba(13,43,62,0.82) 0%,rgba(13,43,62,0.18) 55%,transparent 100%)" }}/>
            <div style={{ position:"absolute", left:52, top:"50%", transform:"translateY(-50%)", maxWidth:440 }}>
              <p className="s" style={{ fontSize:"clamp(1.4rem,2.5vw,2rem)", color:"#fff",
                lineHeight:1.36, fontWeight:700 }}>
                "Clarity, ownership, and practical execution — above everything else."
              </p>
              <p style={{ fontSize:"0.75rem", color:"rgba(255,255,255,0.45)", marginTop:16,
                fontWeight:500, letterSpacing:"0.14em", textTransform:"uppercase" }}>
                — JRAMSYS Engineering Team
              </p>
            </div>
          </motion.div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
            {CULTURE.map((val, idx) => (
              <motion.div key={idx} {...up(idx*0.08)}>
                <div style={{ backgroundColor:"#fff", borderRadius:16, padding:"34px 28px",
                  border:`1px solid ${C.stone}`, borderBottom:`3px solid ${C.teal}`, height:"100%" }}>
                  <div style={{ width:36, height:36, borderRadius:8,
                    backgroundColor:"rgba(26,107,124,0.08)",
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9l4 4 8-8" stroke={C.teal} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ fontSize:"0.98rem", fontWeight:600, color:C.navy,
                    marginBottom:10, lineHeight:1.35 }}>{val.label}</p>
                  <p style={{ fontSize:"0.875rem", lineHeight:1.72, color:C.muted }}>{val.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TECH STACK ────────────────────────────── */}
      <section style={{ backgroundColor:"#fff", padding:"110px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <motion.div {...up()} style={{ display:"grid", gridTemplateColumns:"1fr 2fr",
            gap:72, alignItems:"start" }}>
            <div>
              <Eyebrow>Technology</Eyebrow>
              <h2 className="s" style={{ fontSize:"clamp(2rem,3.2vw,3rem)", fontWeight:700,
                color:C.navy, lineHeight:1.1, letterSpacing:"-0.025em" }}>
                Our technology stack
              </h2>
              <div style={{ width:40, height:2, backgroundColor:C.teal,
                borderRadius:2, margin:"22px 0 24px" }}/>
              <p style={{ fontSize:"1rem", lineHeight:1.8, color:C.body }}>
                We apply the right tools to solve real operational problems —
                keeping every solution maintainable and cost-effective.
              </p>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[
                { label:"Core Technologies",       items:CORE,    accent:C.navy,   dot:C.teal   },
                { label:"Supporting Technologies", items:SUPPORT, accent:C.orange, dot:C.orange },
              ].map((col,ci) => (
                <div key={ci} style={{ backgroundColor:C.cream, borderRadius:18,
                  padding:"36px 30px", border:`1px solid ${C.stone}`,
                  borderTop:`3px solid ${col.dot}` }}>
                  <p style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.22em",
                    textTransform:"uppercase", color:col.accent, marginBottom:24 }}>{col.label}</p>
                  <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:14 }}>
                    {col.items.map((t,i) => (
                      <li key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <span style={{ width:6, height:6, borderRadius:"50%",
                          backgroundColor:col.dot, flexShrink:0 }}/>
                        <span style={{ fontSize:"0.95rem", color:C.ink, fontWeight:500, lineHeight:1.4 }}>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* ── MISSION & VISION — cream bg, no image ─── */}
      <section style={{ backgroundColor:C.cream, padding:"110px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <motion.div {...up()} style={{ textAlign:"center", marginBottom:72 }}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="s" style={{ fontSize:"clamp(2.4rem,4vw,3.6rem)", fontWeight:700,
              color:C.navy, lineHeight:1.08, letterSpacing:"-0.025em" }}>
              Mission & Vision
            </h2>
            <div style={{ width:48, height:2, backgroundColor:C.teal,
              borderRadius:2, margin:"24px auto 0" }}/>
          </motion.div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:28,
            maxWidth:1000, margin:"0 auto" }}>
            {[
              {
                accent:C.teal, label:"Mission",
                icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="8" stroke={C.teal} strokeWidth="1.6"/>
                  <circle cx="11" cy="11" r="4" stroke={C.teal} strokeWidth="1.6"/>
                  <circle cx="11" cy="11" r="1.5" fill={C.teal}/>
                </svg>,
                text:"To convert complex technology into practical solutions that improve operational performance and reliability for every client we work with.",
              },
              {
                accent:C.orange, label:"Vision",
                icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 18L11 4l7 14" stroke={C.orange} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13h8" stroke={C.orange} strokeWidth="1.6" strokeLinecap="round"/>
                </svg>,
                text:"To be the trusted technology partner for businesses seeking intelligent, scalable solutions that drive sustained operational efficiency and growth.",
              },
            ].map((card,i) => (
              <motion.div key={i} {...(i===0 ? lft(0.1) : rgt(0.1))}>
                <div style={{ backgroundColor:"#fff", borderRadius:20, padding:"52px 48px",
                  border:`1px solid ${C.stone}`, borderTop:`3px solid ${card.accent}` }}>
                  <div style={{ width:52, height:52, borderRadius:14,
                    backgroundColor: i===0 ? "rgba(26,107,124,0.08)" : "rgba(232,104,26,0.08)",
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:28 }}>
                    {card.icon}
                  </div>
                  <p style={{ fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.24em",
                    textTransform:"uppercase", color:card.accent, marginBottom:16 }}>{card.label}</p>
                  <p className="s" style={{ fontSize:"clamp(1.25rem,2vw,1.55rem)", fontWeight:600,
                    lineHeight:1.62, color:C.navy }}>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}