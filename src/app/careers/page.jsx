
"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

function SaveHeart({ saved, onSave }) {
  return (
    <button onClick={onSave} aria-label={saved ? "Saved" : "Save"} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
      {saved ? (
        <svg className="w-6 h-6" style={{ color: brandTeal }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" style={{ color: brandTeal }} fill="none" stroke="currentColor" strokeWidth="2.0" viewBox="0 0 24 24">
          <path d="M12.1 18.55l-.1.1-.11-.11C7.14 14.24 4 11.39 4 8.5A4.5 4.5 0 0 1 8.5 4 5.54 5.54 0 0 1 12 6.09 5.54 5.54 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 2.89-3.14 5.74-7.9 10.05z"/>
        </svg>
      )}
    </button>
  );
}

function JobCard({ title, location, type, experience, onViewDetails, saved, onToggleSave }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-cyan-400 hover:shadow-xl transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-600 transition-colors" style={{ color: brandTeal }}>{title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
            <span>•</span>
            <span>{type}</span>
            <span>•</span>
            <span>{experience}+ years exp</span>
          </div>
        </div>
        <SaveHeart saved={saved} onSave={onToggleSave} />
      </div>
      <button className="px-6 py-2 rounded-xl font-semibold transition-all hover:scale-105" style={{ backgroundColor: brandLight, color: "white" }} onClick={onViewDetails}>
        View Details
      </button>
    </motion.div>
  );
}

function JobsPopup({ title, jobs, onClose, onOpenJob }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl relative max-h-[80vh] flex flex-col"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold" style={{ color: brandTeal }}>{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <svg className="w-6 h-6" style={{ color: brandTeal }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {jobs.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="text-lg">No saved jobs yet</p>
            </div>
          ) : (
            <div className="space-y-3">
              {jobs.map(j => (
                <div
                  key={j.id}
                  className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-cyan-400 hover:shadow-lg transition-all"
                  onClick={() => onOpenJob(j)}
                >
                  <h4 className="font-bold text-lg mb-2" style={{ color: brandTeal }}>{j.title}</h4>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span>{j.location}</span>
                    <span>•</span>
                    <span>{j.type}</span>
                    <span>•</span>
                    <span>{j.experience}+ years</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function CareerPage() {
  // ============ JOBS DATA - EASY TO ADD MORE JOBS HERE when jobs added filters and all functiionlity will work ============
  const jobs = [
    // EXAMPLE: Uncomment these and add more jobs when you have openings
    // {
    //   id: 1, 
    //   title: "Full Stack Developer", 
    //   location: "Guntur, India", 
    //   area: "Software Development", 
    //   type: "Full-time", 
    //   experience: 2, 
    //   description: "Develop and maintain large scale web applications using React, Node.js, and modern APIs."
    // },
    // {
    //   id: 2, 
    //   title: "Cloud Solutions Architect", 
    //   location: "London, UK", 
    //   area: "Cloud & DevOps", 
    //   type: "Full-time", 
    //   experience: 5, 
    //   description: "Lead cloud migration and DevOps automation for enterprise clients."
    // },
  ];
  // ================================================================

  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [showSaved, setShowSaved] = useState(false);

  const locations = ["Guntur, India", "London, UK", "USA"];
  const areas = ["Software Development", "Cloud & DevOps", "AI/ML/Data", "IoT/Smart City", "IT Consulting", "Design/UX"];
  const types = ["Full-time", "Part-time", "Contract", "Remote"];
  const experiences = [
    { label: "0-1 Year", min: 0, max: 1 },
    { label: "1-3 Years", min: 1, max: 3 },
    { label: "3-5 Years", min: 3, max: 5 },
    { label: "5-8 Years", min: 5, max: 8 },
    { label: "8+ Years", min: 8, max: 100 },
  ];

  const handleNotifyMe = () => {
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setEmail("");
    }
  };

  const handleToggle = (item, array, setArray) => {
    if (array.includes(item)) {
      setArray(array.filter(x => x !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const handleExpToggle = (range) => {
    if (selectedExperience.some(r => r.label === range.label)) {
      setSelectedExperience(selectedExperience.filter(r => r.label !== range.label));
    } else {
      setSelectedExperience([...selectedExperience, range]);
    }
  };

  const handleToggleSave = (job) => {
    setSavedJobs(s => s.find(j => j.id === job.id) ? s.filter(j => j.id !== job.id) : [...s, job]);
  };

  const activeFiltersCount = selectedLocations.length + selectedAreas.length + selectedTypes.length + selectedExperience.length;
  const hasJobs = jobs.length > 0;

  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchLocation = selectedLocations.length === 0 || selectedLocations.includes(job.location);
      const matchArea = selectedAreas.length === 0 || selectedAreas.includes(job.area);
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(job.type);
      const matchExperience =
        selectedExperience.length === 0 ||
        selectedExperience.some(r => job.experience >= r.min && job.experience <= r.max);
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.area.toLowerCase().includes(q) ||
        job.type.toLowerCase().includes(q) ||
        (job.description && job.description.toLowerCase().includes(q));
      return matchLocation && matchArea && matchType && matchExperience && matchSearch;
    });
  }, [jobs, selectedLocations, selectedAreas, selectedTypes, selectedExperience, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Notification */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowSuccess(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-[90%] sm:w-full">
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-500 p-6 sm:p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">You're on the list! 🎉</h3>
                    <p className="text-sm sm:text-base text-gray-600">We'll notify you as soon as new positions open up.</p>
                  </div>
                  <button onClick={() => setShowSuccess(false)} className="mt-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                    Got it!
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section with Animations */}
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 103, 155, 0.3), transparent 50%), radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3), transparent 50%)" }} animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          
          {[...Array(12)].map((_, i) => (
            <motion.div key={`diag-${i}`} className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ width: "300px", left: `${i * 10}%`, top: `${i * 8}%`, transform: "rotate(-45deg)" }} animate={{ x: ["-100%", "300%"], opacity: [0, 0.8, 0] }} transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.3 }} />
          ))}

          {[...Array(8)].map((_, i) => (
            <motion.div key={`hex-${i}`} className="absolute" style={{ left: `${15 + i * 12}%`, top: `${20 + (i % 3) * 20}%` }} animate={{ y: [0, -30, 0], rotate: [0, 180, 360], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.5 }}>
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-white/10">
                <polygon points="50,5 90,30 90,70 50,95 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </motion.div>
          ))}

          <motion.div className="absolute top-20 left-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-cyan-500/20 blur-3xl" animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.5, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-pink-500/20 blur-3xl" animate={{ x: [0, -80, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} />

          {[...Array(25)].map((_, i) => (
            <motion.div key={`dot-${i}`} className="absolute w-1 h-1 rounded-full bg-white/40" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 3 }} />
          ))}

          <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }}>
            {[...Array(6)].map((_, i) => (
              <div key={`spiral-${i}`} className="absolute top-1/2 left-1/2 w-2 h-32 origin-bottom" style={{ transform: `rotate(${i * 60}deg)`, background: "linear-gradient(to top, transparent, rgba(255,255,255,0.1))" }} />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} className="inline-block mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                <motion.span className="text-xl" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>🌟</motion.span>
                <span className="text-xs font-bold text-white tracking-wider">CAREERS AT JRAMSYS</span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white drop-shadow-lg">
              Build Your Future<br />
              <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                With Innovation
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Join a team of passionate innovators creating cutting-edge solutions that shape the future of technology
            </p>

            {!hasJobs && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-orange-500/90 backdrop-blur-sm border-2 border-orange-300 shadow-xl">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-white" />
                <span className="text-white font-bold text-sm sm:text-base">Currently no open positions - Stay tuned!</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Conditional Content Based on Job Availability */}
      {!hasJobs ? (
        <>
          {/* Notify Me Section - No Jobs */}
          <div className="relative -mt-16 z-20 max-w-4xl mx-auto px-4 sm:px-6 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-3xl shadow-2xl border-2 border-gray-200 p-6 sm:p-10">
              <div className="text-center mb-6">
                <motion.div className="text-5xl sm:text-6xl mb-4" animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>🔔</motion.div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: brandTeal }}>Be the First to Know</h2>
                <p className="text-gray-600 text-sm sm:text-base mb-4">Get notified when new positions open up. We'll send you an email as soon as opportunities arise!</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-4">
                <input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  onKeyPress={(e) => e.key === 'Enter' && handleNotifyMe()} 
                  placeholder="Enter your email address" 
                  className="flex-1 px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-gray-900 font-medium" 
                />
                <motion.button
                  onClick={() => setShowFilters(!showFilters)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 font-semibold transition-all whitespace-nowrap"
                  style={{ borderColor: brandTeal, color: brandTeal, backgroundColor: showFilters ? `${brandTeal}10` : 'transparent' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  <span className="hidden sm:inline">Preferences</span>
                  {activeFiltersCount > 0 && (
                    <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full" style={{ backgroundColor: brandTeal }}>
                      {activeFiltersCount}
                    </span>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50 rounded-2xl p-6 mb-4 text-left">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                          <h3 className="font-bold mb-3 text-sm flex items-center gap-2" style={{ color: brandTeal }}>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            Experience
                          </h3>
                          <div className="space-y-2">
                            {experiences.map(exp => (
                              <label key={exp.label} className="flex items-center cursor-pointer hover:bg-white p-2 rounded-lg transition-colors">
                                <input
                                  type="checkbox"
                                  checked={selectedExperience.some(r => r.label === exp.label)}
                                  onChange={() => handleExpToggle(exp)}
                                  className="mr-2 w-4 h-4 rounded"
                                  style={{ accentColor: brandTeal }}
                                />
                                <span className="text-sm text-gray-700">{exp.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {activeFiltersCount > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                          <span className="text-sm text-gray-600">
                            <span className="font-semibold" style={{ color: brandTeal }}>{activeFiltersCount}</span> filter{activeFiltersCount !== 1 ? 's' : ''} selected
                          </span>
                          <button
                            onClick={() => {
                              setSelectedLocations([]);
                              setSelectedAreas([]);
                              setSelectedTypes([]);
                              setSelectedExperience([]);
                            }}
                            className="text-sm font-semibold hover:underline"
                            style={{ color: brandTeal }}
                          >
                            Clear all
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                onClick={handleNotifyMe} 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white shadow-lg mx-auto block" 
                style={{ background: `linear-gradient(135deg, ${brandTeal}, ${brandLight})` }}
              >
                Notify Me
              </motion.button>

              {activeFiltersCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center text-sm text-gray-600"
                >
                  ✓ We'll notify you about positions matching your preferences
                </motion.div>
              )}
            </motion.div>
          </div>
        </>
      ) : (
        <>
          {/* Search Bar and Saved Jobs - When Jobs Exist */}
          <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex gap-4 items-center">
              <div className="flex-1 relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-400 text-lg text-gray-900"
                  placeholder="Search jobs by title, location, or skill..."
                />
              </div>
              <button
                className="px-6 py-3 rounded-xl font-semibold border-2 hover:bg-gray-50 transition-colors flex items-center gap-2"
                style={{ borderColor: brandTeal, color: brandTeal }}
                onClick={() => setShowSaved(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.0" viewBox="0 0 24 24">
                  <path d="M12.1 18.55l-.1.1-.11-.11C7.14 14.24 4 11.39 4 8.5A4.5 4.5 0 0 1 8.5 4 5.54 5.54 0 0 1 12 6.09 5.54 5.54 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 2.89-3.14 5.74-7.9 10.05z"/>
                </svg>
                <span className="hidden sm:inline">Saved</span> ({savedJobs.length})
              </button>
            </div>
          </div>

          {/* Jobs List with Filters */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold" style={{ color: brandTeal }}>
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} Available
              </h2>
              <motion.button
                onClick={() => setShowFilters(!showFilters)}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 font-semibold transition-all"
                style={{ borderColor: brandTeal, color: brandTeal, backgroundColor: showFilters ? `${brandTeal}10` : 'transparent' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
                {activeFiltersCount > 0 && (
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full" style={{ backgroundColor: brandTeal }}>
                    {activeFiltersCount}
                  </span>
                )}
              </motion.button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div>
                        <h3 className="font-bold mb-3 text-sm" style={{ color: brandTeal }}>Locations</h3>
                        <div className="space-y-2">
                          {locations.map(loc => (
                            <label key={loc} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedLocations.includes(loc)}
                                onChange={() => handleToggle(loc, selectedLocations, setSelectedLocations)}
                                className="mr-2 w-4 h-4 rounded"
                                style={{ accentColor: brandTeal }}
                              />
                              <span className="text-sm text-gray-700">{loc}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3 text-sm" style={{ color: brandTeal }}>Areas</h3>
                        <div className="space-y-2">
                          {areas.map(area => (
                            <label key={area} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedAreas.includes(area)}
                                onChange={() => handleToggle(area, selectedAreas, setSelectedAreas)}
                                className="mr-2 w-4 h-4 rounded"
                                style={{ accentColor: brandTeal }}
                              />
                              <span className="text-sm text-gray-700">{area}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3 text-sm" style={{ color: brandTeal }}>Job Type</h3>
                        <div className="space-y-2">
                          {types.map(type => (
                            <label key={type} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedTypes.includes(type)}
                                onChange={() => handleToggle(type, selectedTypes, setSelectedTypes)}
                                className="mr-2 w-4 h-4 rounded"
                                style={{ accentColor: brandTeal }}
                              />
                              <span className="text-sm text-gray-700">{type}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold mb-3 text-sm" style={{ color: brandTeal }}>Experience</h3>
                        <div className="space-y-2">
                          {experiences.map(exp => (
                            <label key={exp.label} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                              <input
                                type="checkbox"
                                checked={selectedExperience.some(r => r.label === exp.label)}
                                onChange={() => handleExpToggle(exp)}
                                className="mr-2 w-4 h-4 rounded"
                                style={{ accentColor: brandTeal }}
                              />
                              <span className="text-sm text-gray-700">{exp.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {activeFiltersCount > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          <span className="font-semibold" style={{ color: brandTeal }}>{activeFiltersCount}</span> filter{activeFiltersCount !== 1 ? 's' : ''} active
                        </span>
                        <button
                          onClick={() => {
                            setSelectedLocations([]);
                            setSelectedAreas([]);
                            setSelectedTypes([]);
                            setSelectedExperience([]);
                          }}
                          className="text-sm font-semibold hover:underline"
                          style={{ color: brandTeal }}
                        >
                          Clear all filters
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border-2 border-gray-200">
                <svg className="w-20 h-20 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No matching jobs found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <JobCard
                    key={job.id}
                    {...job}
                    saved={!!savedJobs.find(j => j.id === job.id)}
                    onToggleSave={() => handleToggleSave(job)}
                    onViewDetails={() => {}}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* Saved Jobs Popup */}
      {showSaved && (
        <JobsPopup
          title="Saved Jobs"
          jobs={savedJobs}
          onClose={() => setShowSaved(false)}
          onOpenJob={() => {}}
        />
      )}

      {/* CTA Section - White Background */}
      <div className="bg-white py-16 px-4 sm:px-6 border-t-2 border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6" style={{ color: brandTeal }}>Ready to Shape the Future?</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {!hasJobs ? "Even though we don't have openings right now, we're always looking for exceptional talent. Drop us your details and we'll reach out when the right opportunity comes up!" : "Apply now and join our team of innovators!"}
            </p>
            <motion.a 
              href="mailto:officejram@gmail.com" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all text-white"
              style={{ background: `linear-gradient(135deg, ${brandTeal}, ${brandLight})` }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Us Your Resume
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            <span className="font-bold text-white">💼 Stay Connected:</span> Follow us on social media for updates on new positions and company news
          </p>
        </div>
      </div>
    </div>
  );
}