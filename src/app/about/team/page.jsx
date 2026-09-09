'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

// Leadership members
const leadershipMembers = [
  { name: 'Sai Kiran', role: 'CEO' },
  { name: 'Arun Reddy', role: 'Director' },
  { name: 'Maneendra Reddy', role: 'CTO' },
  { name: 'Ramesh Kumar', role: 'Lead' },
];

/*
const crewMembers = [
  { name: 'Damodar', role: 'Employee', img: 'https://images.unsplash.com/photo-1581093448797-3c2e0f303a3f?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Ashwini', role: 'Employee', img: 'https://images.unsplash.com/photo-1599566150180-29194dcaad36?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Saravan Kumar', role: 'Employee', img: 'https://images.unsplash.com/photo-1607746882003-944635dfe10e?auto=format&fit=crop&w=400&h=400&q=80' },
  { name: 'Maneendra', role: 'Employee', img: 'https://images.unsplash.com/photo-1599566150207-29194dcaad36?auto=format&fit=crop&w=400&h=400&q=80' },
];
*/

export default function TeamPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <div className="relative h-[90vh] sm:h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-br from-teal-900 to-cyan-900"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)'
            }}
          />
        </div>

        {/* Background images */}
        <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4 sm:p-8 opacity-20">

          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mt-12 sm:mt-16 aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative mt-24 sm:mt-32 aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>

        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-cyan-300 text-base sm:text-lg font-medium tracking-wider uppercase">
              Our People
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Talent<br />
              Behind Every<br />
              <span className="text-cyan-300">Solution</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl">
              Meet the engineers, innovators, and problem-solvers who turn complex challenges into elegant solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Leadership Team - staggered like crew */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">

        <div className="max-w-7xl mx-auto text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
            Leadership Team
          </h2>

          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 mb-4"></div>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Visionaries guiding our journey toward innovation and excellence
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {leadershipMembers.map((member, idx) => (

            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${idx % 2 === 0 ? 'sm:mt-0' : 'sm:mt-12'}`}
            >

              <div className="relative group aspect-[4/5] rounded-2xl overflow-hidden">

                {/* GENERIC CONTACT / PERSON LOGO */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">

                  <svg
                    className="w-32 h-32 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" />
                  </svg>

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent opacity-50"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">

                  <h3 className="text-base sm:text-lg font-bold">
                    {member.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-cyan-200">
                    {member.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </section>

      {/* =========================================================
          CREW MEMBERS - TEMPORARILY HIDDEN
          ========================================================= */}

      {/*
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">

        <div className="max-w-7xl mx-auto text-center mb-12">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900">
            Our Team
          </h2>

          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Talented professionals making it all happen
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {crewMembers.map((member, idx) => (

            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${idx % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
            >

              <div className="relative group aspect-[4/5] rounded-2xl overflow-hidden">

                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent opacity-60"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">

                  <h3 className="text-base sm:text-lg font-bold">
                    {member.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-cyan-200">
                    {member.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>
      */}

      {/* Join CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 mb-4">
            Want to Join Us?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto mb-6">
            We are always looking for talented individuals who share our passion for technology and innovation.
          </p>

          <a
            href="/careers"
            className="inline-block px-6 sm:px-10 py-2 sm:py-4 rounded-xl font-bold text-lg transition-all hover:bg-cyan-300 hover:scale-105"
            style={{ backgroundColor: brandLight, color: 'white' }}
          >
            View Careers
          </a>

        </motion.div>

      </section>

    </main>
  );
}