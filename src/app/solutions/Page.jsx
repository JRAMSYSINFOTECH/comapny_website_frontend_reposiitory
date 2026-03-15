'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/* ─── Design Tokens ──────────────────────────────── */
const C = {
  navy:     '#07192A',
  teal:     '#0B7B8F',
  tealLt:   '#12A3BC',
  tealGlow: '#15C4DF',
  cream:    '#F5F2ED',
  stone:    '#E3DDD5',
  body:     '#374151',
  muted:    '#6B7280',
};

const ease = [0.22, 1, 0.36, 1];
const up = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease, delay: d },
});

/* ─── Solutions — all 7, with real Unsplash images ── */
const solutions = [
  {
    id: 'ai-ml',
    title: 'AI/ML & Data Analytics',
    tagline: 'Turn data into intelligent action',
    description: 'Predictive analytics, custom AI models, and intuitive dashboards that surface hidden patterns for everyday decisions.',
    accentColor: '#0B7B8F',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/ai-ml-data-analytics',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7.5 7.5l2.8 2.8M17.7 17.7l2.8 2.8M7.5 20.5l2.8-2.8M17.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'bpm-iot',
    title: 'BPM & IoT Solutions',
    tagline: 'Orchestrate devices & workflows',
    description: 'Connect sensors, assets, and teams in one intelligent flow — every alert moves automatically toward resolution.',
    accentColor: '#0A6B8A',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/bpm-iot',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="10" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="19" y="10" width="6" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="11" y="6" width="6" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 14h2M17 14h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    tagline: 'Make your cloud work like a product',
    description: 'Design, migrate, and run modern cloud platforms so your teams ship faster, scale on demand, and stop fighting fires.',
    accentColor: '#1060A8',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/cloud-computing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M8 20a5 5 0 0 1 0-10 7 7 0 1 1 13.3 3A4 4 0 0 1 20 20H8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M14 16v4M11 19l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'qr',
    title: 'Contextual QR Solutions',
    tagline: 'Smart QR codes that understand context',
    description: 'Build adaptive QR journeys for business, schools, and cities — from creation to deployment, analytics, and security.',
    accentColor: '#6229A0',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/contextual-qr',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="6" y="6" width="3" height="3" fill="currentColor"/>
        <rect x="19" y="6" width="3" height="3" fill="currentColor"/>
        <rect x="6" y="19" width="3" height="3" fill="currentColor"/>
        <path d="M16 16h3v3h-3zM22 16v3M16 22h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Build software that moves with your business',
    description: 'Design, build, and scale digital platforms tailored to your goals, industry, and future roadmap.',
    accentColor: '#1845A0',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/custom-software',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M8 10l-4 4 4 4M20 10l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 7l-4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Advisory',
    tagline: 'Turn IT into a growth engine',
    description: 'Accelerate innovation and lower long-term IT cost with expert strategy, architecture, and digital transformation leadership.',
    accentColor: '#0A5A4A',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/it-consulting',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L4 10v8l10 6 10-6v-8L14 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M4 10l10 6 10-6M14 16v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'smart-waste',
    title: 'Smart Waste Management',
    tagline: 'Make every pickup visible and efficient',
    description: 'Transform your waste ecosystem with IoT-powered management — offering real-time control, efficiency, and sustainability at scale.',
    accentColor: '#145A2E',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    link: '/solutions/smart-waste',
    icon: (
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path d="M5 8h18M10 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M7 8l1.5 14a2 2 0 0 0 2 1.8h7a2 2 0 0 0 2-1.8L21 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.5 12v7M14 12v7M16.5 12v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

/* ─── Fonts & Styles ─────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,700;0,9..144,800;1,9..144,700&family=DM+Sans:wght@300;400;500;600&display=swap');

    .sol *, .sol *::before, .sol *::after { box-sizing: border-box; margin: 0; padding: 0; }
    .sol { font-family: 'DM Sans', system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    .f   { font-family: 'Fraunces', Georgia, serif; }

    /* ── Card ── */
    .sol-card {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      cursor: pointer;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    /* Image scales on hover */
    .sol-card .card-img {
      transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
    }
    .sol-card:hover .card-img {
      transform: scale(1.07);
    }

    /* Overlay darkens slightly on hover */
    .sol-card .card-overlay {
      transition: background 0.4s ease;
      background: linear-gradient(to top, rgba(4,12,24,0.96) 0%, rgba(4,12,24,0.7) 45%, rgba(4,12,24,0.35) 75%, rgba(4,12,24,0.15) 100%);
    }
    .sol-card:hover .card-overlay {
      background: linear-gradient(to top, rgba(4,12,24,0.98) 0%, rgba(4,12,24,0.8) 45%, rgba(4,12,24,0.5) 75%, rgba(4,12,24,0.2) 100%);
    }

    /* Learn more — underline draw effect */
    .learn-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.84rem;
      font-weight: 700;
      text-decoration: none;
      position: relative;
      padding-bottom: 3px;
      letter-spacing: 0.01em;
    }
    .learn-link::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0;
      width: 0; height: 2px;
      background: currentColor;
      transition: width 0.32s cubic-bezier(0.22,1,0.36,1);
      border-radius: 2px;
    }
    .sol-card:hover .learn-link::after { width: 100%; }
    .learn-link .arrow-ico {
      transition: transform 0.25s ease;
    }
    .sol-card:hover .learn-link .arrow-ico { transform: translateX(5px); }

    /* Card content slides up slightly on hover */
    .card-body {
      transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
    }
    .sol-card:hover .card-body { transform: translateY(-6px); }

    /* ── Responsive ── */
    @media (max-width: 1023px) {
      .sol-grid   { grid-template-columns: 1fr 1fr !important; }
      .hero-inner { padding: 0 32px !important; }
      .grid-inner { padding: 0 32px !important; }
    }
    @media (max-width: 639px) {
      .sol-grid   { grid-template-columns: 1fr !important; }
      .hero-inner { padding: 0 20px !important; }
      .grid-inner { padding: 0 20px !important; }
      .grid-sec   { padding: 64px 0 !important; }
      .hero-h1    { font-size: clamp(2.6rem,9vw,3.8rem) !important; }
      .cta-wrap   { flex-direction: column !important; align-items: center !important; }
      .cta-wrap a { width: 100%; justify-content: center; max-width: 320px; }
    }
  `}</style>
);

/* ════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════ */
export default function SolutionsPage() {
  return (
    <div className="sol" style={{ backgroundColor: '#fff', overflow: 'hidden' }}>
      <Fonts />

      {/* ══ HERO ══════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=88"
          alt="Technology solutions"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        {/* Strong dark overlay — navy tinted */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(5,14,25,0.96) 0%, rgba(7,25,42,0.90) 50%, rgba(4,12,22,0.95) 100%)',
        }}/>
        {/* Teal glow orb — top right */}
        <div style={{
          position: 'absolute', top: -180, right: -180, width: 700, height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(11,123,143,0.3) 0%, transparent 62%)',
          pointerEvents: 'none',
        }}/>
        {/* Warm orb — bottom left */}
        <div style={{
          position: 'absolute', bottom: -100, left: -100, width: 500, height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,90,20,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}/>

        {/* Wave SVG divider — hero bottom to cream */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, lineHeight: 0, zIndex: 2 }}>
          <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg"
            style={{ display: 'block', width: '100%', height: 'auto' }} preserveAspectRatio="none">
            <path d="M0,0 L0,60 C160,100 360,20 580,58 C800,96 1020,18 1240,55 C1330,72 1390,45 1440,52 L1440,0 Z"
              fill="#061829" opacity="0.55"/>
            <path d="M0,20 C200,80 420,5 660,50 C900,90 1140,10 1360,52 L1440,48 L1440,100 L0,100 Z"
              fill="#F5F2ED"/>
          </svg>
        </div>

        {/* ── Hero content — centered ── */}
        <div className="hero-inner" style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 48px',
          position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          textAlign: 'center',
          paddingTop: 'clamp(110px,13vw,155px)',
          paddingBottom: 'clamp(120px,15vw,175px)',
        }}>
          <motion.div initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 800 }}>

            {/* Headline */}
            <h1 className="f hero-h1" style={{
              fontSize: 'clamp(3.2rem,6vw,5.6rem)', fontWeight: 800,
              lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff',
              marginBottom: 10,
            }}>
              Technology Solutions
            </h1>
            <h1 className="f hero-h1" style={{
              fontSize: 'clamp(3.2rem,6vw,5.6rem)', fontWeight: 800,
              lineHeight: 1.04, letterSpacing: '-0.025em', fontStyle: 'italic',
              background: `linear-gradient(90deg, ${C.tealLt}, ${C.tealGlow})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', marginBottom: 32,
            }}>
              That Transform.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem,1.8vw,1.15rem)', lineHeight: 1.86, fontWeight: 300,
              color: 'rgba(255,255,255,0.72)', maxWidth: 560, marginBottom: 48,
            }}>
              Comprehensive, production-ready solutions designed to solve real challenges across industries — from IoT and AI to cloud infrastructure and custom software.
            </p>

            {/* Clean CTAs — no decoration around them */}
            <div className="cta-wrap" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="#solutions" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: `linear-gradient(135deg, ${C.teal}, ${C.tealLt})`,
                color: '#fff', fontWeight: 600, fontSize: '0.93rem',
                padding: '15px 36px', borderRadius: 8, textDecoration: 'none',
                boxShadow: `0 8px 28px ${C.teal}55`,
                transition: 'transform 0.2s, box-shadow 0.2s, filter 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.filter = 'brightness(1.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.filter = 'brightness(1)'; }}
              >
                Explore Solutions
                
              </a>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', border: '1.5px solid rgba(255,255,255,0.28)',
                color: 'rgba(255,255,255,0.84)', fontWeight: 500, fontSize: '0.9rem',
                padding: '14px 30px', borderRadius: 8, textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = 'rgba(255,255,255,0.84)'; }}
              >
                Talk to Us
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ══ SOLUTIONS GRID ════════════════════════════ */}
      <section id="solutions" className="grid-sec" style={{ backgroundColor: C.cream, padding: '88px 0' }}>
        <div className="grid-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

          {/* Section heading */}
          <motion.div {...up()} style={{ marginBottom: 52, textAlign: 'center' }}>
            <p style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: C.teal, marginBottom: 12 }}>
              What We Offer
            </p>
            <h2 className="f" style={{ fontSize: 'clamp(2rem,3.6vw,3rem)', fontWeight: 800, color: C.navy, lineHeight: 1.08, letterSpacing: '-0.025em', marginBottom: 14 }}>
              Our Solutions
            </h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.82, color: C.muted, maxWidth: 460, margin: '0 auto' }}>
              Seven specialized solutions covering the complete technology spectrum — each built for real operational environments.
            </p>
            <div style={{ width: 48, height: 3, background: `linear-gradient(90deg,${C.teal},${C.tealLt})`, borderRadius: 2, margin: '20px auto 0' }}/>
          </motion.div>

          {/* 7 image cards — uniform 3-col grid */}
          <div className="sol-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {solutions.map((sol, i) => (
              <motion.div key={sol.id} {...up(i * 0.07)}>
                <Link href={sol.link} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                  <div className="sol-card" style={{ boxShadow: '0 4px 24px rgba(7,25,42,0.12)', height: 340 }}>

                    {/* Background image */}
                    <div style={{ position: 'absolute', inset: 0 }}>
                      <div className="card-img" style={{ position: 'absolute', inset: 0 }}>
                        <Image
                          src={sol.image}
                          alt={sol.title}
                          fill
                          sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 33vw"
                          style={{ objectFit: 'cover', filter: 'blur(2.5px) brightness(0.72)' }}
                        />
                      </div>
                      {/* Strong gradient overlay */}
                      <div className="card-overlay" style={{ position: 'absolute', inset: 0 }}/>
                      {/* Accent top strip */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
                        background: sol.accentColor, zIndex: 2,
                      }}/>
                    </div>

                    {/* Card content — pinned to bottom with padding, no flex gap */}
                    <div className="card-body" style={{
                      position: 'absolute', zIndex: 3,
                      bottom: 0, left: 0, right: 0,
                      padding: '24px 26px 26px',
                    }}>
                      {/* Title */}
                      <h3 className="f" style={{
                        fontSize: 'clamp(1rem,1.5vw,1.2rem)', fontWeight: 700,
                        color: '#fff', lineHeight: 1.22, marginBottom: 8,
                      }}>
                        {sol.title}
                      </h3>
                      {/* Description — 2 lines max */}
                      <p style={{
                        fontSize: '0.82rem', lineHeight: 1.62,
                        color: 'rgba(255,255,255,0.72)',
                        marginBottom: 16,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {sol.description}
                      </p>

                      {/* Learn more — white pill, accent text */}
                      <div style={{
                        display: 'inline-flex', alignItems: 'center',
                        background: '#ffffff',
                        borderRadius: 7,
                        padding: '6px 14px',
                      }}>
                        <span className="learn-link" style={{ color: sol.accentColor }}>
                          <span>Learn more</span>
                          
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}