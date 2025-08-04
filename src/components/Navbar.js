'use client';
import React from 'react';
import "../styles/navbar.css";


export default function Navbar() {
  return (
    <header className="w-full shadow-md bg-white text-[#333] font-[400] text-[15px] leading-[1.42857143] whitespace-nowrap">
      <nav className="flex items-center justify-between px-8 py-3">
        <div className="text-3xl font-bold text-green-700">JRAMSYS</div>

        <ul className="flex items-center space-x-0">
          <li>
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-[6px] rounded shadow-md transition duration-300 ease-in-out"
            >
              HOME
            </a>
          </li>

          <li>
            <a
              href="#"
              className="px-4 py-[6px] rounded transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-md"
            >
              ABOUT
            </a>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="flex items-center px-4 py-[6px] rounded transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-md"
            >
              SOLUTIONS <span className="ml-1">▼</span>
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-1 w-48 z-10 text-sm rounded">
              {['SMART SIGNALING', 'SMART BUILDINGS', 'SMART CITY SOLUTIONS','IOT SOLUTIONS',].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className="relative group">
            <a
              href="#"
              className="flex items-center px-4 py-[6px] rounded transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-md"
            >
              SERVICES <span className="ml-1">▼</span>
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-1 w-50 z-20 text-sm rounded">
              {['IOT Services', 'CUSTOMER SERVICES', 'PRODUCT DEVELOPMENT SERVICES'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {[
            'CUSTOMERS',
            'SUPPORT',
            'NEWS & EVENTS',
            'CAREERS',
            'CONTACT'
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="px-4 py-[6px] rounded transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:shadow-md"
              >
                {item}
              </a>
            </li>
            
          ))}
        </ul>
      </nav>
    </header>
  );
}
