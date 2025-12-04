'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import "../styles/navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const companyDropdown = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about/team" }
  ];

  // Updated: now each has a proper label and exact route pathname!
  const solutionsDropdown = [
    { label: "Contextual QR Code Solutions", href: "/solutions/contextual-qr" },
    { label: "Smart Waste Management", href: "/solutions/smart-waste" },
    { label: "Custom Software Development", href: "/solutions/custom-software" },
    { label: "IT Consulting & Advisory", href: "/solutions/it-consulting" },
    { label: "AI/ML & Data Analytics", href: "/solutions/ai-ml-data-analytics" },
    { label: "BPM & IoT-based Solutions", href: "/solutions/bpm-iot" },
    { label: "Cloud Computing (IaaS, PaaS, SaaS)", href: "/solutions/cloud-computing" },
  ];

  const servicesDropdown = [
  { label: "IoT Services", href: "/services/iot-services" },
  { label: "Customer Services", href: "/services/customer-services" },
  { label: "Product Development Services", href: "/services/product-development" }
  ];

  const getLinkClass = (path) => {
    const active = pathname === path || pathname.startsWith(path + "/")
      ? "text-[#0F3B57]"
      : "text-[#222A35]";
    return active;
  };

  const dropdownOverlayClass = "absolute left-0 bg-white shadow-lg py-2 mt-1 w-56 z-10 text-sm rounded";
  const dropdownVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  };

  return (
    <header className="w-full shadow-md bg-white relative z-50">
      <nav className="flex items-center justify-between px-8 py-3">
        <div className="flex items-center">
          <Image src="/JRAMSYS_logo-removebg-preview.png" alt="JRAMSYS Logo" width={160} height={40} priority />
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className={`nav-link ${getLinkClass("/")}`}>
              <span>Home</span>
            </Link>
          </li>
          {/* Company Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("company")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className={`nav-link ${getLinkClass("/about")}`}>
              <span>Our Company <span className="ml-1">▼</span></span>
            </button>
            <AnimatePresence>
              {openMenu === "company" && (
                <motion.ul className={dropdownOverlayClass} initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
                  {companyDropdown.map(item => (
                    <li key={item.label}>
                      <Link href={item.href} className="dropdown-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {/* Solutions Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className={`nav-link ${getLinkClass("/solutions")}`}>
              <span>Solutions <span className="ml-1">▼</span></span>
            </button>
            <AnimatePresence>
              {openMenu === "solutions" && (
                <motion.ul className={dropdownOverlayClass} initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
                  {solutionsDropdown.map(item => (
                    <li key={item.label}>
                      <Link href={item.href} className="dropdown-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className={`nav-link ${getLinkClass("/services")}`}>
              <span>Services <span className="ml-1">▼</span></span>
            </button>
            <AnimatePresence>
              {openMenu === "services" && (
                <motion.ul className={dropdownOverlayClass} initial="hidden" animate="visible" exit="exit" variants={dropdownVariants}>
                  {servicesDropdown.map(item => (
                    <li key={item.label}>
                      {/* Update these hrefs when you create service pages */}
                      <Link href={item.href} className="dropdown-link">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {/* Other pages */}
          {["customers", "support", "news", "careers", "contact"].map((route, idx) => (
            <li key={idx}>
              <Link href={`/${route}`} className={`nav-link ${getLinkClass(`/${route}`)}`}>
                <span>{route.charAt(0).toUpperCase() + route.slice(1)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
