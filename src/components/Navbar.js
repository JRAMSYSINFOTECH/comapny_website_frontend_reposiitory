"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const companyDropdown = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about/team" },
  ];

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
    { label: "Product Development Services", href: "/services/product-development" },
  ];

  const isActive = (path) =>
    pathname === path || pathname.startsWith(path + "/");

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
  };

  const linkClass = (path) =>
    `relative px-1 pb-1 text-[15px] font-medium transition-colors duration-300
     ${isActive(path) ? "text-[#0F3B57]" : "text-[#222A35] hover:text-[#0F3B57]"}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
      <nav className="flex items-center justify-between px-10 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center h-12">
          <Image
            src="/JRAMSYS_logo-removebg-preview.png"
            alt="JRAMSYS Logo"
            width={160}
            height={40}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <ul className="flex items-center space-x-8">

          <li>
            <Link href="/" className={linkClass("/")}>
              Home
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[#0F3B57] transition-all duration-300
                ${isActive("/") ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          </li>

          {/* COMPANY */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("company")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className={linkClass("/about")}>
              Our Company <span className="ml-1">▼</span>
            </button>

            <AnimatePresence>
              {openMenu === "company" && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-[130%] w-56 rounded-lg bg-white shadow-xl py-2"
                >
                  {companyDropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#222A35] hover:bg-[#F2F6F9] hover:text-[#0F3B57]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* SOLUTIONS */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <Link href="/solutions" className={linkClass("/solutions")}>
            Solutions <span className="ml-1">▼</span>
            </Link>


            <AnimatePresence>
              {openMenu === "solutions" && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-[130%] w-72 rounded-lg bg-white shadow-xl py-2"
                >
                  {solutionsDropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#222A35] hover:bg-[#F2F6F9] hover:text-[#0F3B57]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className={linkClass("/services")}>
              Services <span className="ml-1">▼</span>
            </button>

            <AnimatePresence>
              {openMenu === "services" && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-[130%] w-64 rounded-lg bg-white shadow-xl py-2"
                >
                  {servicesDropdown.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-[#222A35] hover:bg-[#F2F6F9] hover:text-[#0F3B57]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link href="/careers" className={linkClass("/careers")}>
              Careers
            </Link>
          </li>

          <li>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
