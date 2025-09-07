'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Footer() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="w-full bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* All footer items in one row */}
        <div className="flex flex-wrap justify-between items-start gap-8 text-left">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/JRAMSYS-logo.png"
              alt="Company Logo"
              width={120}
              height={120}
              className="object-contain"
              priority
            />
          </div>

          {/* Contact Us */}
          <div>
            <button
              onClick={() => toggleSection('contact')}
              className="font-semibold focus:outline-none"
              type="button"
            >
              Contact Us
            </button>
            {openSection === 'contact' && (
              <div className="text-sm mt-1">
                <p>Email: officejram@gmail.com</p>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <button
              onClick={() => toggleSection('services')}
              className="font-semibold focus:outline-none"
              type="button"
            >
              Services
            </button>
            {openSection === 'services' && (
              <ul className="text-sm mt-1 space-y-1">
                <li>Web Development</li>
                <li>App Design</li>
                <li>IT Support</li>
              </ul>
            )}
          </div>

          {/* Address */}
          <div>
            <button
              onClick={() => toggleSection('address')}
              className="font-semibold focus:outline-none"
              type="button"
            >
              Address
            </button>
            {openSection === 'address' && (
              <div className="text-sm mt-1">
                <p>Priory Street, Coventry</p>
                <p>CV1 5FB, United Kingdom</p>
              </div>
            )}
          </div>

          {/* Copyright */}
          <div>
            <button
              onClick={() => toggleSection('copyright')}
              className="font-semibold focus:outline-none"
              type="button"
            >
              Copyright
            </button>
            {openSection === 'copyright' && (
              <div className="text-sm mt-1">
                <p>© {new Date().getFullYear()} JRAMSYS INFOTECH</p>
                <p>All rights reserved.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </footer>
  )
}
