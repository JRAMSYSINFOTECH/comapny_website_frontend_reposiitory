"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Fixed deadline: 13 December 2025, 00:00
    const targetDate = new Date(2025, 11, 13, 0, 0, 0);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify you at ${email}`);
    setEmail("");
  };

  return (
    <>
      <style jsx global>{`
        html,
        body {
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
          height: 100vh !important;
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "#2DD4BF",
          border: "4px solid #106272",
          boxSizing: "border-box",
        }}
      >
        <div className="flex items-start justify-center h-full w-full relative">
          {/* CARD PANEL */}
          <div
            className="relative max-w-3xl w-[94vw] mx-auto text-center px-2 py-10 md:py-14 rounded-2xl z-10 overflow-visible"
            style={{
              marginTop: "2vw",
              background: "#23272C",
              border: "3px solid #106272",
              boxShadow: "0 8px 32px 0 rgba(16,98,114,0.05)",
              minHeight: "calc(80vh - 40px)",
            }}
          >
            {/* Bottom left cluster */}
            <div
              style={{
                position: "absolute",
                left: -5,
                bottom: 215,
                width: 80,
                height: 80,
                zIndex: 12,
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 64,
                  background: "#2DD4BF",
                  borderRadius:
                    "0 100px 100px 0 / 0 100px 100px 0",
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 32,
                  background: "#1E3A5F",
                  borderTopLeftRadius: 22,
                  borderTopRightRadius: 22,
                  position: "absolute",
                  left: 35,
                  bottom: 0,
                }}
              />
              <div
                style={{
                  width: 32,
                  height: 32,
                  background: "#fff",
                  borderBottomLeftRadius: 50,
                  position: "absolute",
                  left: 35,
                  bottom: 40,
                }}
              />
            </div>

            {/* Right decorative cluster */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                width: 112,
                height: 92,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 32,
                  background: "#2DD4BF",
                  borderTopLeftRadius: 32,
                  borderTopRightRadius: 32,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              <div
                style={{
                  width: 64,
                  height: 32,
                  background: "#1E3A5F",
                  borderBottomLeftRadius: 32,
                  borderBottomRightRadius: 32,
                  position: "absolute",
                  left: 32,
                  top: 40,
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 32,
                  background: "#fff",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  position: "absolute",
                  left: 70,
                  top: 1,
                }}
              />
            </div>

            {/* LOGO (blended with background) */}
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle at 0 0, rgba(242, 245, 245, 1))",
                  boxShadow: "0 0 0 1px rgba(26, 23, 23, 1)",
                }}
              >
                <Image
                  src="/JRAMSYS_logo-removebg-preview.png"
                  alt="JRAMSYS Infotech Logo"
                  width={500}
                  height={55}
                  className="h-auto w-auto md:w-[160px]"
                  priority
                />
              </div>
            </div>

            {/* COUNTDOWN/TIMER */}
            <div
              className="flex justify-center mb-8 flex-wrap gap-2 md:gap-3"
              style={{
                borderRadius: "14px",
                boxShadow:
                  "0 4px 24px 0 rgba(16, 98, 114, 0.05)",
              }}
            >
              {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 md:p-4 min-w-[58px] md:min-w-[72px] border border-teal-500/20 text-white"
                >
                  <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-white">
                    {String(value).padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm text-white">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-7 text-white"
              style={{ letterSpacing: ".02em" }}
            >
              We are coming soon
            </h1>
            <p className="text-gray-200 text-xs md:text-base mb-8 max-w-xl mx-auto px-2">
              We are almost there! If you want to get notified when
              the website goes live, subscribe to our mailing list!
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center mb-7 md:mb-10 px-1"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="px-4 py-2 md:px-6 md:py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 w-full sm:w-60 md:w-80 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold hover:opacity-90 transition text-sm w-full sm:w-auto border"
                style={{
                  backgroundColor: "#106272",
                  color: "#fff",
                  borderColor: "#106272",
                }}
              >
                Notify Me!
              </button>
            </form>

            {/* Social icons bar */}
            <div className="flex justify-center gap-6 mt-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" fill="#fff" />
                  <circle cx="12" cy="12" r="4" fill="#1E3A5F" />
                 <circle cx="17.5" cy="6.5" r="1.5" fill="#2DD4BF" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#fff" />
                  <path
                    fill="#1E3A5F"
                    d="M15 8h-2V7c0-.4.2-.6.6-.6h1.3V4h-2.1C10.7 4 10 4.8 10 6.2V8H8v3h2v7h3v-7h2.1l.4-3z"
                  />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#fff" />
                  <path
                    fill="#1E3A5F"
                    d="m16.6 7.2-3.1 3.8-3.1-3.8H7l4 4.7-4.2 5.1H9l3.2-3.9 3.2 3.9h1.4l-4.2-5.1 4-4.7h-1.2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#fff" />
                  <rect
                    x="7.5"
                    y="10.5"
                    width="2"
                    height="5"
                    fill="#1E3A5F"
                  />
                  <rect
                    x="14.5"
                    y="10.5"
                    width="2"
                    height="5"
                    fill="#1E3A5F"
                  />
                  <circle cx="8.5" cy="8" r="1" fill="#1E3A5F" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
