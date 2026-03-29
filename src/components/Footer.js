'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="w-full bg-[#0B3C49] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">

          {/* Logo */}
          <div className="bg-white rounded-lg p-4 w-fit">
            <Image
              src="/JRAMSYS_logo-removebg-preview.png"
              alt="JRAMSYS Infotech"
              width={150}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <a
              href="mailto:officejram@gmail.com"
              className="text-sm text-[#7DD3E8] hover:text-white transition"
            >
              officejram@gmail.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Services</h4>
            <ul className="text-sm text-[#7DD3E8] space-y-2">

              <li>
                <Link
                  href="/services/iot-services"
                  className="hover:text-white transition"
                >
                  IoT Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services/customer-services"
                  className="hover:text-white transition"
                >
                  Customer Services
                </Link>
              </li>

              <li>
                <Link
                  href="/services/product-development"
                  className="hover:text-white transition"
                >
                  Product Development Services
                </Link>
              </li>

            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Address</h4>
            <p className="text-sm text-[#7DD3E8] leading-relaxed">
              Priory Street, Coventry<br />
              CV1 5FB<br />
              United Kingdom
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#1B5F6E]" />

        {/* Bottom Copyright */}
        <div className="mt-6 text-center text-sm text-[#9EDBF0]">
          © {new Date().getFullYear()} JRAMSYS INFOTECH. All rights reserved.
        </div>

      </div>
    </footer>
  )
}