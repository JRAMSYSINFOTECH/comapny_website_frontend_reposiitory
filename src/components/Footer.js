'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden">

      {/* BASE COLOR */}
      <div className="absolute inset-0 bg-[#0B1F33]" />

      {/* ABSTRACT CIRCUIT PATTERN - Professional & Unique */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Horizontal Lines */}
          <line x1="100" y1="80" x2="300" y2="80" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="150" y1="120" x2="350" y2="120" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="200" y1="160" x2="450" y2="160" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="120" y1="200" x2="380" y2="200" stroke="#9EDBF0" strokeWidth="1"/>
          
          <line x1="500" y1="90" x2="750" y2="90" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="550" y1="140" x2="800" y2="140" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="520" y1="190" x2="780" y2="190" stroke="#9EDBF0" strokeWidth="1"/>
          
          <line x1="820" y1="100" x2="1050" y2="100" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="850" y1="150" x2="1080" y2="150" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="870" y1="200" x2="1100" y2="200" stroke="#9EDBF0" strokeWidth="1"/>
          
          {/* Vertical Connectors */}
          <line x1="250" y1="80" x2="250" y2="200" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="650" y1="90" x2="650" y2="190" stroke="#9EDBF0" strokeWidth="1"/>
          <line x1="950" y1="100" x2="950" y2="200" stroke="#9EDBF0" strokeWidth="1"/>
          
          {/* Circuit Nodes */}
          <circle cx="100" cy="80" r="4" fill="#9EDBF0"/>
          <circle cx="300" cy="80" r="4" fill="#9EDBF0"/>
          <circle cx="250" cy="120" r="5" fill="#9EDBF0"/>
          <circle cx="450" cy="160" r="4" fill="#9EDBF0"/>
          <circle cx="250" cy="200" r="5" fill="#9EDBF0"/>
          
          <circle cx="500" cy="90" r="4" fill="#9EDBF0"/>
          <circle cx="650" cy="90" r="5" fill="#9EDBF0"/>
          <circle cx="750" cy="90" r="4" fill="#9EDBF0"/>
          <circle cx="650" cy="140" r="5" fill="#9EDBF0"/>
          <circle cx="650" cy="190" r="5" fill="#9EDBF0"/>
          
          <circle cx="820" cy="100" r="4" fill="#9EDBF0"/>
          <circle cx="950" cy="100" r="5" fill="#9EDBF0"/>
          <circle cx="1050" cy="100" r="4" fill="#9EDBF0"/>
          <circle cx="950" cy="150" r="5" fill="#9EDBF0"/>
          <circle cx="950" cy="200" r="5" fill="#9EDBF0"/>
          
          {/* Diagonal Connections */}
          <line x1="300" y1="80" x2="350" y2="120" stroke="#9EDBF0" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="450" y1="160" x2="520" y2="190" stroke="#9EDBF0" strokeWidth="1" strokeDasharray="3,3"/>
          <line x1="750" y1="90" x2="820" y2="100" stroke="#9EDBF0" strokeWidth="1" strokeDasharray="3,3"/>
        </svg>
      </div>
      
      {/* FLOATING GEOMETRIC SHAPES */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-10 left-[15%] w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 border border-[#9EDBF0] rounded-lg rotate-12"></div>
        <div className="absolute top-16 right-[15%] sm:top-24 sm:right-[20%] w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border border-[#9EDBF0] rounded-full"></div>
        <div className="absolute bottom-16 left-[35%] sm:bottom-20 sm:left-[40%] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 border border-[#9EDBF0] rotate-45"></div>
        <div className="absolute bottom-24 right-[30%] sm:bottom-32 sm:right-[35%] w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border border-[#9EDBF0] rounded-lg -rotate-12"></div>
      </div>

      {/* SUBTLE TECH GRID */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">

          {/* LOGO */}
          <div className="flex justify-center sm:justify-start">
            <div className="bg-white rounded-lg p-3 sm:p-4 w-fit">
              <Image
                src="/JRAMSYS_logo-removebg-preview.png"
                alt="JRAMSYS Infotech"
                width={130}
                height={52}
                priority
                className="object-contain sm:w-[140px] lg:w-[150px]"
              />
            </div>
          </div>

          {/* SERVICES */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3">Services</h4>
            <ul className="text-lg-1 text-[#9EDBF0] space-y-2">
              <li><a href="/services/iot-services" className="hover:text-white transition-colors duration-200">IoT Services</a></li>
              <li><a href="/services/customer-services" className="hover:text-white transition-colors duration-200">Customer Services</a></li>
              <li><a href="/services/product-development" className="hover:text-white transition-colors duration-200">Product Development Services</a></li>
            </ul>
          </div>

          {/* ADDRESS */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3">Address</h4>
            <p className="text-lg-1 text-[#9EDBF0] leading-relaxed">
              Priory Street, Coventry<br />
              CV1 5FB<br />
              United Kingdom
            </p>
          </div>

          {/* CONTACT + SOCIAL */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3">Contact Us</h4>
            <a
              href="mailto:officejram@gmail.com"
              className="inline-block text-lg-1 text-[#9EDBF0] hover:text-white mb-5 sm:mb-6 transition-colors duration-200 break-all"
            >
              officejram@gmail.com
            </a>

            <h4 className="text-base sm:text-base font-semibold mb-3">Follow Us</h4>
            <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/jramsys-infotech-pvt-ltd/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-[#9EDBF0] text-[#9EDBF0] hover:bg-[#9EDBF0] hover:text-[#0B1F33] hover:scale-110 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4 sm:h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16bApS6nXH/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-[#9EDBF0] text-[#9EDBF0] hover:bg-[#9EDBF0] hover:text-[#0B1F33] hover:scale-110 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4 sm:h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a
                href="https://www.twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-[#9EDBF0] text-[#9EDBF0] hover:bg-[#9EDBF0] hover:text-[#0B1F33] hover:scale-110 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4 sm:h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/jramsys_infotech_private_ltd?igsh=ZWV3bzBicWcycjk1"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 border-[#9EDBF0] text-[#9EDBF0] hover:bg-[#9EDBF0] hover:text-[#0B1F33] hover:scale-110 transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4 sm:h-4">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-12 border-t border-[#163A5F]" />

        <div className="mt-4 sm:mt-5 lg:mt-6 text-center text-xs sm:text-sm text-[#A8DFF3]">
          © {new Date().getFullYear()} JRAMSYS INFOTECH. All rights reserved.
        </div>

      </div>
    </footer>
  )
}