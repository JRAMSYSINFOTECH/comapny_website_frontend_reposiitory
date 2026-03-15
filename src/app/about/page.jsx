'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Brand tokens ─────────────────────────── */
const C = {
  navy:     "#081E2F",
  navyMid:  "#0D2B3E",
  teal:     "#0E8FA3",
  tealLt:   "#19C5DF",
  tealGlow: "#0ECDE6",
  orange:   "#F07020",
  orangeLt: "#FF8C3A",
  cream:    "#F4F1EC",
  stone:    "#E2DDD4",
  offwhite: "#F9F8F6",
  ink:      "#0A0A0A",
  body:     "#374151",
  muted:    "#6B7280",
  white:    "#FFFFFF",
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

const WHY_ICONS = [
  <svg key="i0" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="13" cy="13" r="9" stroke={C.tealLt} strokeWidth="1.8"/>
    <circle cx="13" cy="13" r="4" stroke={C.tealLt} strokeWidth="1.8"/>
    <circle cx="13" cy="13" r="1.5" fill={C.tealLt}/>
  </svg>,
  <svg key="i1" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M4 20V8l9-4 9 4v12" stroke={C.tealLt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="9" y="14" width="8" height="6" rx="1" stroke={C.tealLt} strokeWidth="1.8"/>
  </svg>,
  <svg key="i2" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M13 4v4M13 18v4M4 13h4M18 13h4" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="13" cy="13" r="4" stroke={C.teal} strokeWidth="1.8"/>
  </svg>,
  <svg key="i3" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <rect x="3" y="15" width="6" height="8" rx="1" stroke={C.teal} strokeWidth="1.8"/>
    <rect x="10" y="10" width="6" height="13" rx="1" stroke={C.teal} strokeWidth="1.8"/>
    <rect x="17" y="4" width="6" height="19" rx="1" stroke={C.teal} strokeWidth="1.8"/>
  </svg>,
  <svg key="i4" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <circle cx="9" cy="9" r="4" stroke={C.teal} strokeWidth="1.8"/>
    <circle cx="19" cy="9" r="3" stroke={C.teal} strokeWidth="1.8"/>
    <path d="M2 22c0-4 3.1-7 7-7s7 3 7 7" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M19 14c2.5 0 5 2 5 5" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="i5" width="26" height="26" viewBox="0 0 26 26" fill="none">
    <path d="M7 13l4 4 8-8" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="13" cy="13" r="10" stroke={C.teal} strokeWidth="1.8"/>
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

/* ─── Responsive hook ───────────────────────── */
function useBreakpoint() {
  const [bp, setBp] = useState({ isMobile: false, isTablet: false, isDesktop: true });
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setBp({ isMobile: w < 640, isTablet: w >= 640 && w < 1024, isDesktop: w >= 1024 });
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return bp;
}

/* ─── Fonts ─────────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700;1,800&family=DM+Sans:wght@300;400;500;600&display=swap');

    .jra *, .jra *::before, .jra *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .jra { font-family: 'DM Sans', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    .s   { font-family: 'Playfair Display', Georgia, serif; }

    /* ── Hover card lift ── */
    .card-lift {
      transition: transform 0.28s cubic-bezier(0.22,1,0.36,1),
                  box-shadow 0.28s cubic-bezier(0.22,1,0.36,1);
    }
    .card-lift:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 56px rgba(13,43,62,0.14);
    }
    .card-lift-dark:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 56px rgba(0,0,0,0.4);
    }

    /* ── CTA button ── */
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #0E8FA3 0%, #19C5DF 100%);
      color: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.04em;
      padding: 16px 36px;
      border-radius: 6px;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
      box-shadow: 0 8px 28px rgba(14,143,163,0.45);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(14,143,163,0.55);
      filter: brightness(1.08);
    }

    .btn-ghost {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.09);
      color: #fff;
      font-weight: 500;
      font-size: 0.9rem;
      padding: 15px 30px;
      border-radius: 6px;
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.22);
      cursor: pointer;
      transition: background 0.2s ease, border-color 0.2s ease;
    }
    .btn-ghost:hover {
      background: rgba(255,255,255,0.16);
      border-color: rgba(255,255,255,0.38);
    }

    /* ── Responsive grid helpers ── */
    @media (max-width: 1023px) {
      .grid-2col { grid-template-columns: 1fr !important; }
      .grid-4col { grid-template-columns: 1fr 1fr !important; }
      .grid-tech { grid-template-columns: 1fr !important; gap: 0 !important; }
      .grid-tech-inner { grid-template-columns: 1fr 1fr !important; }
      .story-img { height: 360px !important; }
      .story-thumb { display: none !important; }
      .culture-banner { height: 280px !important; }
    }
    @media (max-width: 639px) {
      .grid-4col { grid-template-columns: 1fr !important; }
      .grid-why-top { grid-template-columns: 1fr !important; }
      .grid-tech-inner { grid-template-columns: 1fr !important; }
      .mission-grid { grid-template-columns: 1fr !important; }
      .culture-grid { grid-template-columns: 1fr 1fr !important; }
      .culture-banner { height: 200px !important; }
      .section-pad { padding: 72px 0 !important; }
      .inner-pad { padding: 0 20px !important; }
      .hero-content { padding: 100px 20px 60px !important; }
      .story-img { height: 280px !important; }
    }

    /* Stat ticker */
    .stat-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 50px;
      padding: 10px 20px;
    }
  `}</style>
);

const Eyebrow = ({ children, light=false }) => (
  <p style={{
    fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.26em",
    textTransform: "uppercase",
    color: light ? C.tealGlow : C.teal,
    marginBottom: 14,
  }}>
    {children}
  </p>
);

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export default function About() {
  return (
    <div className="jra" style={{ backgroundColor: "#fff", overflow: "hidden" }}>
      <Fonts />

      {/* ══ HERO ══════════════════════════════════ */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
      }}>
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=88"
          alt="JRAMSYS office" fill sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 35%" }} priority
        />
        {/* Stronger, richer overlay — deep navy with teal tint */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(5,15,25,0.97) 0%, rgba(8,30,47,0.92) 40%, rgba(5,18,32,0.96) 100%)",
        }}/>
        {/* Teal glow orb — top right */}
        <div style={{
          position: "absolute", top: -120, right: -120, width: 700, height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(14,143,163,0.28) 0%, transparent 62%)",
          pointerEvents: "none",
        }}/>
        {/* Orange accent orb — bottom left */}
        <div style={{
          position: "absolute", bottom: -80, left: -80, width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(240,112,32,0.18) 0%, transparent 60%)",
          pointerEvents: "none",
        }}/>
        {/* Subtle grid overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.04,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}/>

        <div className="hero-content" style={{
          position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto",
          padding: "120px 40px 80px", textAlign: "center",
        }}>
          <motion.div initial={{ opacity:0, y:48 }} animate={{ opacity:1, y:0 }}
            transition={{ duration: 1.0, ease }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              backgroundColor: "rgba(14,143,163,0.14)",
              border: "1px solid rgba(14,205,230,0.3)",
              borderRadius: 50, padding: "9px 22px 9px 14px", marginBottom: 52,
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "linear-gradient(135deg,#0E8FA3,#19C5DF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 14px rgba(14,205,230,0.5)",
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1.5 1.5h5l4 4.5-4 4.5H1.5V1.5Z" fill="#fff"/>
                </svg>
              </div>
              <span style={{
                fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.82)",
              }}>
                JRAMSYS Infotech Private Limited
              </span>
            </div>

            {/* Headline */}
            <h1 className="s" style={{
              fontSize: "clamp(3.2rem,7vw,6rem)", fontWeight: 800,
              lineHeight: 1.04, letterSpacing: "-0.02em", color: "#fff", marginBottom: 10,
            }}>
              Engineering Solutions
            </h1>
            <h1 className="s" style={{
              fontSize: "clamp(3.2rem,7vw,6rem)", fontWeight: 800,
              lineHeight: 1.04, letterSpacing: "-0.02em", fontStyle: "italic",
              background: `linear-gradient(90deg, ${C.tealLt} 0%, ${C.tealGlow} 100%)`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", marginBottom: 36,
            }}>
              That Deliver.
            </h1>

            <p style={{
              fontSize: "clamp(1rem,2vw,1.2rem)", lineHeight: 1.85, fontWeight: 300,
              color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: "0 auto 44px",
            }}>
              Reliable, production-ready technology that makes complex systems
              work in real operational environments.
            </p>

            <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <a href="/contact" className="btn-primary">
                Get in Touch
              </a>
            </div>

          </motion.div>
        </div>

      </section>

      {/* ── Wave SVG shape divider: Hero → Story ── */}
      <div style={{ position:"relative", marginTop:-2, lineHeight:0, backgroundColor: C.offwhite }}>
        <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg"
          style={{ display:"block", width:"100%", height:"auto" }}
          preserveAspectRatio="none">
          {/* Back wave layer — darker navy */}
          <path d="M0,0 L0,55 C180,90 360,20 540,50 C720,80 900,30 1080,55 C1260,80 1350,40 1440,60 L1440,0 Z"
            fill="#0A2236" opacity="0.6"/>
          {/* Front wave layer — main navy */}
          <path d="M0,0 L0,40 C200,75 400,10 600,45 C800,80 1000,15 1200,48 C1320,65 1380,30 1440,45 L1440,0 Z"
            fill="#081E2F"/>
        </svg>
      </div>


      {/* ══ STORY ═════════════════════════════════ */}
      <section className="section-pad" style={{ backgroundColor: C.offwhite, padding: "110px 0" }}>
        <div className="inner-pad" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div className="grid-2col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>

            <motion.div {...lft()} style={{ position:"relative" }}>
              <div className="story-img" style={{
                position:"relative", height:540, borderRadius:20, overflow:"hidden",
                boxShadow:"0 32px 80px rgba(8,30,47,0.22)",
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=88"
                  alt="Technology" fill sizes="45vw" style={{ objectFit:"cover" }}
                />
                <div style={{
                  position:"absolute", inset:0,
                  background:"linear-gradient(to top, rgba(8,30,47,0.6) 0%, transparent 55%)",
                }}/>
              </div>
              {/* Floating thumb */}
              <div className="story-thumb" style={{
                position:"absolute", bottom:-28, right:-28, width:180, height:180,
                borderRadius:16, overflow:"hidden", border:`5px solid #fff`,
                boxShadow:"0 20px 48px rgba(8,30,47,0.22)",
              }}>
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=85"
                  alt="Engineering" fill sizes="180px" style={{ objectFit:"cover" }}
                />
              </div>
              {/* Decorative accent */}
              <div style={{
                position:"absolute", top:-20, left:-20, width:100, height:100,
                borderRadius:14, zIndex:-1,
                background:`linear-gradient(135deg, ${C.teal}33, ${C.teal}11)`,
                border:`2px solid ${C.teal}44`,
              }}/>
            </motion.div>

            <motion.div {...rgt()}>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="s" style={{
                fontSize:"clamp(2.2rem,3.6vw,3.2rem)", fontWeight:800,
                color:C.navy, lineHeight:1.1, letterSpacing:"-0.025em",
              }}>
                A focused team building practical technology
              </h2>
              <div style={{ width:52, height:3, background:`linear-gradient(90deg,${C.teal},${C.tealLt})`, borderRadius:2, margin:"24px 0 32px" }}/>
              <p style={{ fontSize:"1.06rem", lineHeight:1.9, color:C.body, marginBottom:20 }}>
                JRAMSYS Infotech helps organisations convert complex systems and
                data into dependable, usable solutions. We prioritise clarity,
                reliability, and real-world usability above everything else.
              </p>
              <p style={{ fontSize:"1.06rem", lineHeight:1.9, color:C.body, marginBottom:44 }}>
                Every solution we build is designed to support your business
                processes — not complicate them. From concept to production,
                we own it end-to-end.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                {[
                  { label:"What We Build", accent:C.teal, bg:"rgba(14,143,163,0.06)",
                    text:"IoT platforms, automation systems, and data pipelines built with real production constraints in mind." },
                  { label:"Where We're Headed", accent:C.orange, bg:"rgba(240,112,32,0.06)",
                    text:"Disciplined execution — validating and scaling solutions with measurable operational value." },
                ].map((card,i) => (
                  <div key={i} style={{
                    backgroundColor:card.bg, borderRadius:16, padding:"24px 22px",
                    border:`1px solid ${card.accent}33`,
                    borderTop:`3px solid ${card.accent}`,
                  }}>
                    <p style={{
                      fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.2em",
                      textTransform:"uppercase", color:card.accent, marginBottom:10,
                    }}>{card.label}</p>
                    <p style={{ fontSize:"0.9rem", lineHeight:1.75, color:C.body }}>{card.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ══ WHY US ════════════════════════════════ */}
      <section className="section-pad" style={{ backgroundColor:"#fff", padding:"120px 0" }}>
        <div className="inner-pad" style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>

          <motion.div {...up()} style={{ maxWidth:640, margin:"0 auto 72px", textAlign:"center" }}>
            <Eyebrow>Why Choose Us</Eyebrow>
            <h2 className="s" style={{
              fontSize:"clamp(2.4rem,4.5vw,3.6rem)", fontWeight:800,
              color:C.navy, lineHeight:1.08, letterSpacing:"-0.025em", marginBottom:20,
            }}>
              Why companies trust JRAMSYS
            </h2>
            <p style={{ fontSize:"1.05rem", lineHeight:1.82, color:C.muted }}>
              Deep engineering expertise combined with honest, practical delivery — building long-term partnerships, not short-term projects.
            </p>
          </motion.div>

          {/* Top 2 — dark navy cards */}
          <div className="grid-why-top" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20, marginBottom:20 }}>
            {WHY.slice(0,2).map((item, idx) => (
              <motion.div key={idx} {...up(idx * 0.1)}>
                <div className="card-lift card-lift-dark" style={{
                  display:"flex", alignItems:"flex-start", gap:28,
                  background:`linear-gradient(135deg, ${C.navy} 0%, #0D2B3E 100%)`,
                  borderRadius:20, padding:"44px 40px", height:"100%",
                  borderLeft:`4px solid ${C.teal}`,
                  position:"relative", overflow:"hidden",
                }}>
                  {/* Glow orb */}
                  <div style={{
                    position:"absolute", top:-40, right:-40, width:200, height:200,
                    borderRadius:"50%",
                    background:"radial-gradient(circle, rgba(14,143,163,0.2) 0%, transparent 70%)",
                    pointerEvents:"none",
                  }}/>
                  <div style={{
                    flexShrink:0, width:62, height:62, borderRadius:16,
                    background:"rgba(14,143,163,0.2)",
                    border:"1px solid rgba(25,197,223,0.4)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    boxShadow:"0 0 20px rgba(14,205,230,0.2)",
                  }}>
                    {WHY_ICONS[idx]}
                  </div>
                  <div>
                    <h3 className="s" style={{
                      fontSize:"1.5rem", fontWeight:700, color:"#fff",
                      lineHeight:1.2, letterSpacing:"-0.015em", marginBottom:12,
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize:"1rem", lineHeight:1.8, color:"rgba(255,255,255,0.70)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom 4 — light cream cards */}
          <div className="grid-4col" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
            {WHY.slice(2).map((item, idx) => (
              <motion.div key={idx} {...up(0.18 + idx * 0.07)}>
                <div className="card-lift" style={{
                  backgroundColor:"#fff", borderRadius:20,
                  padding:"36px 28px", height:"100%",
                  border:`1px solid ${C.stone}`,
                  borderTop:`3px solid ${C.teal}`,
                  boxShadow:"0 2px 16px rgba(8,30,47,0.06)",
                }}>
                  <div style={{
                    width:54, height:54, borderRadius:14,
                    background:"rgba(14,143,163,0.08)",
                    border:"1px solid rgba(14,143,163,0.18)",
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:24,
                  }}>
                    {WHY_ICONS[idx + 2]}
                  </div>
                  <h3 style={{
                    fontSize:"1rem", fontWeight:600, color:C.navy,
                    lineHeight:1.3, letterSpacing:"-0.01em", marginBottom:12,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize:"0.875rem", lineHeight:1.78, color:C.muted }}>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ══ CULTURE ═══════════════════════════════ */}
      <section className="section-pad" style={{ backgroundColor:C.cream, padding:"110px 0" }}>
        <div className="inner-pad" style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>

          <motion.div {...up()} style={{
            display:"grid", gridTemplateColumns:"1fr 1fr", gap:48,
            alignItems:"flex-end", marginBottom:56,
          }} className="grid-2col">
            <div>
              <Eyebrow>Our Culture</Eyebrow>
              <h2 className="s" style={{
                fontSize:"clamp(2.2rem,4vw,3.4rem)", fontWeight:800,
                color:C.navy, lineHeight:1.08, letterSpacing:"-0.025em",
              }}>
                How we work
              </h2>
            </div>
            <p style={{ fontSize:"1.05rem", lineHeight:1.82, color:C.body, alignSelf:"flex-end" }}>
              Engineers and problem-solvers who believe great outcomes come from
              clear thinking, direct ownership, and practical execution.
            </p>
          </motion.div>

          {/* Culture banner */}
          <motion.div {...up(0.1)} style={{
            position:"relative", height:380, borderRadius:22, overflow:"hidden", marginBottom:52,
          }} className="culture-banner">
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1800&q=88"
              alt="Team collaboration" fill sizes="100vw"
              style={{ objectFit:"cover", objectPosition:"center 42%" }}
            />
            <div style={{
              position:"absolute", inset:0,
              background:"linear-gradient(to right, rgba(5,15,25,0.92) 0%, rgba(8,30,47,0.55) 50%, transparent 100%)",
            }}/>
            {/* Teal accent line */}
            <div style={{
              position:"absolute", left:52, top:0, width:3, height:"100%",
              background:`linear-gradient(to bottom, transparent, ${C.teal}, transparent)`,
            }}/>
            <div style={{ position:"absolute", left:68, top:"50%", transform:"translateY(-50%)", maxWidth:440 }}>
              <p className="s" style={{
                fontSize:"clamp(1.4rem,2.5vw,2rem)", color:"#fff",
                lineHeight:1.38, fontWeight:700,
              }}>
                "Clarity, ownership, and practical execution — above everything else."
              </p>
              <p style={{
                fontSize:"0.75rem", color:C.tealGlow, marginTop:18,
                fontWeight:600, letterSpacing:"0.16em", textTransform:"uppercase",
              }}>
                — JRAMSYS Engineering Team
              </p>
            </div>
          </motion.div>

          <div className="culture-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
            {CULTURE.map((val, idx) => (
              <motion.div key={idx} {...up(idx*0.08)}>
                <div className="card-lift" style={{
                  backgroundColor:"#fff", borderRadius:18, padding:"34px 28px",
                  border:`1px solid ${C.stone}`,
                  borderBottom:`3px solid ${C.teal}`, height:"100%",
                  boxShadow:"0 2px 12px rgba(8,30,47,0.05)",
                }}>
                  <div style={{
                    width:40, height:40, borderRadius:10,
                    background:`linear-gradient(135deg, rgba(14,143,163,0.15), rgba(14,143,163,0.05))`,
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20,
                  }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9l4 4 8-8" stroke={C.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ fontSize:"0.98rem", fontWeight:600, color:C.navy, marginBottom:10, lineHeight:1.35 }}>{val.label}</p>
                  <p style={{ fontSize:"0.875rem", lineHeight:1.72, color:C.muted }}>{val.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ══ TECH STACK ════════════════════════════ */}
      <section className="section-pad" style={{ backgroundColor:"#fff", padding:"110px 0" }}>
        <div className="inner-pad" style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <motion.div {...up()} className="grid-tech" style={{
            display:"grid", gridTemplateColumns:"1fr 2fr", gap:72, alignItems:"start",
          }}>
            <div>
              <Eyebrow>Technology</Eyebrow>
              <h2 className="s" style={{
                fontSize:"clamp(2rem,3.2vw,3rem)", fontWeight:800,
                color:C.navy, lineHeight:1.1, letterSpacing:"-0.025em",
              }}>
                Our technology stack
              </h2>
              <div style={{
                width:44, height:3,
                background:`linear-gradient(90deg, ${C.teal}, ${C.tealLt})`,
                borderRadius:2, margin:"22px 0 24px",
              }}/>
              <p style={{ fontSize:"1rem", lineHeight:1.82, color:C.body }}>
                We apply the right tools to solve real operational problems —
                keeping every solution maintainable and cost-effective.
              </p>
            </div>
            <div className="grid-tech-inner" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
              {[
                { label:"Core Technologies",       items:CORE,    accent:C.teal,   dot:C.teal,   bg:"rgba(14,143,163,0.05)" },
                { label:"Supporting Technologies", items:SUPPORT, accent:C.orange, dot:C.orange, bg:"rgba(240,112,32,0.05)" },
              ].map((col,ci) => (
                <div key={ci} style={{
                  backgroundColor:C.offwhite, borderRadius:20,
                  padding:"36px 30px", border:`1px solid ${C.stone}`,
                  borderTop:`3px solid ${col.dot}`,
                }}>
                  <p style={{
                    fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.22em",
                    textTransform:"uppercase", color:col.accent, marginBottom:24,
                  }}>{col.label}</p>
                  <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:13 }}>
                    {col.items.map((t,i) => (
                      <li key={i} style={{ display:"flex", alignItems:"center", gap:12 }}>
                        <span style={{
                          width:7, height:7, borderRadius:"50%",
                          background:`radial-gradient(circle, ${col.dot}, ${col.dot}99)`,
                          flexShrink:0,
                          boxShadow:`0 0 6px ${col.dot}55`,
                        }}/>
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


      {/* ══ MISSION & VISION ══════════════════════ */}
      <section className="section-pad" style={{
        padding:"90px 0",
        background: C.cream,
        position:"relative", overflow:"hidden",
      }}>
        {/* Subtle decorative orbs for ivory bg */}
        <div style={{
          position:"absolute", top:-80, right:-80, width:400, height:400, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(14,143,163,0.07) 0%, transparent 65%)",
          pointerEvents:"none",
        }}/>
        <div style={{
          position:"absolute", bottom:-80, left:-80, width:360, height:360, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(240,112,32,0.07) 0%, transparent 65%)",
          pointerEvents:"none",
        }}/>

        <div className="inner-pad" style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px", position:"relative", zIndex:1 }}>
          <motion.div {...up()} style={{ textAlign:"center", marginBottom:56 }}>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="s" style={{
              fontSize:"clamp(2.4rem,4vw,3.6rem)", fontWeight:800,
              color:C.navy, lineHeight:1.08, letterSpacing:"-0.025em",
            }}>
              Mission &amp; Vision
            </h2>
            <div style={{
              width:52, height:3,
              background:`linear-gradient(90deg, ${C.teal}, ${C.tealLt})`,
              borderRadius:2, margin:"24px auto 0",
            }}/>
          </motion.div>

          <div className="mission-grid" style={{
            display:"grid", gridTemplateColumns:"1fr 1fr", gap:24,
            maxWidth:860, margin:"0 auto",
          }}>
            {[
              {
                accent:C.teal, accentLt:C.tealLt, label:"Mission",
                icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <circle cx="11" cy="11" r="8" stroke={C.tealLt} strokeWidth="1.8"/>
                  <circle cx="11" cy="11" r="4" stroke={C.tealLt} strokeWidth="1.8"/>
                  <circle cx="11" cy="11" r="1.5" fill={C.tealLt}/>
                </svg>,
                text:"To convert complex technology into practical solutions that improve operational performance and reliability for every client we work with.",
              },
              {
                accent:C.orange, accentLt:C.orangeLt, label:"Vision",
                icon:<svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M4 18L11 4l7 14" stroke={C.orangeLt} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 13h8" stroke={C.orangeLt} strokeWidth="1.8" strokeLinecap="round"/>
                </svg>,
                text:"To be the trusted technology partner for businesses seeking intelligent, scalable solutions that drive sustained operational efficiency and growth.",
              },
            ].map((card,i) => (
              <motion.div key={i} {...(i===0 ? lft(0.1) : rgt(0.1))}>
                <div className="card-lift card-lift-dark" style={{
                  background: i===0
                    ? `linear-gradient(135deg, #076373 0%, #0A8596 50%, #065A6A 100%)`
                    : `linear-gradient(135deg, #B84D08 0%, #D45F0A 50%, #A03D04 100%)`,
                  borderRadius:18, padding:"36px 32px",
                  border:"none",
                  position:"relative", overflow:"hidden",
                  boxShadow: i===0
                    ? "0 20px 56px rgba(7,99,115,0.55)"
                    : "0 20px 56px rgba(184,77,8,0.55)",
                }}>
                  {/* Decorative dot-grid pattern */}
                  <div style={{
                    position:"absolute", inset:0, opacity:0.12,
                    backgroundImage:"radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize:"22px 22px",
                    pointerEvents:"none",
                  }}/>
                  {/* Diagonal stripe accent top-right */}
                  <div style={{
                    position:"absolute", top:-20, right:-20, width:140, height:140,
                    opacity:0.12,
                    background:"repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0px, rgba(255,255,255,0.8) 2px, transparent 2px, transparent 14px)",
                    borderRadius:"50%",
                    pointerEvents:"none",
                  }}/>
                  {/* Light shimmer orb */}
                  <div style={{
                    position:"absolute", top:-30, right:-30, width:180, height:180,
                    borderRadius:"50%",
                    background:"radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 65%)",
                    pointerEvents:"none",
                  }}/>
                  {/* Bottom glow */}
                  <div style={{
                    position:"absolute", bottom:-20, left:-20, width:120, height:120,
                    borderRadius:"50%",
                    background:"radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%)",
                    pointerEvents:"none",
                  }}/>
                  <div style={{
                    width:44, height:44, borderRadius:12,
                    background:"rgba(255,255,255,0.18)",
                    border:"1px solid rgba(255,255,255,0.3)",
                    display:"flex", alignItems:"center", justifyContent:"center", marginBottom:20,
                    position:"relative", zIndex:1,
                  }}>
                    {i===0
                      ? <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                          <circle cx="11" cy="11" r="8" stroke="#fff" strokeWidth="1.8"/>
                          <circle cx="11" cy="11" r="4" stroke="#fff" strokeWidth="1.8"/>
                          <circle cx="11" cy="11" r="1.5" fill="#fff"/>
                        </svg>
                      : <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                          <path d="M4 18L11 4l7 14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M7 13h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                    }
                  </div>
                  <p style={{
                    fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.24em",
                    textTransform:"uppercase", color:"rgba(255,255,255,0.65)", marginBottom:12,
                    position:"relative", zIndex:1,
                  }}>{card.label}</p>
                  <p className="s" style={{
                    fontSize:"clamp(1rem,1.6vw,1.2rem)", fontWeight:700,
                    lineHeight:1.65, color:"#fff",
                    position:"relative", zIndex:1,
                  }}>{card.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}