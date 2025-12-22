"use client";
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

// ---- FilterSection ----
function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-6">
      <div
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between cursor-pointer select-none py-2"
      >
        <h3 className="text-base font-bold" style={{ color: brandTeal }}>{title}</h3>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          style={{ color: brandTeal }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

// ---- SaveHeart ----
function SaveHeart({ saved, onSave }) {
  return (
    <button
      onClick={onSave}
      aria-label={saved ? "Saved" : "Save"}
      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
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

// ---- JobCard ----
function JobCard({ title, location, type, experience, onViewDetails, saved, onToggleSave }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-cyan-400 hover:shadow-xl transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-600 transition-colors" style={{ color: brandTeal }}>
            {title}
          </h3>
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
      <button
        className="px-6 py-2 rounded-xl font-semibold transition-all hover:scale-105"
        style={{ backgroundColor: brandLight, color: "white" }}
        onClick={onViewDetails}
      >
        View Details
      </button>
    </motion.div>
  );
}

// ---- JobAccordion ----
function JobAccordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-3">
      {sections.map((section, idx) => (
        <div key={section.title} className="border-2 border-gray-200 rounded-xl overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="font-bold" style={{ color: brandTeal }}>{section.title}</span>
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
              style={{ color: brandTeal }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          {openIndex === idx && (
            <div className="p-4 bg-gray-50 text-gray-700 border-t-2 border-gray-200">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ---- JobsPopup ----
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-lg">No jobs yet</p>
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

// ---- JobFullDetails ----
function JobFullDetails({ job, onClose, onToggleSave, saved, onApply, isApplied, similarJobs, onOpenJob }) {
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-70">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="flex-1 bg-white overflow-auto relative"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center z-10">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            style={{ color: brandTeal }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <SaveHeart saved={saved} onSave={onToggleSave} />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: brandTeal }}>
            {job.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {job.location}
            </span>
            <span>•</span>
            <span>{job.type}</span>
            <span>•</span>
            <span>{job.experience}+ years experience</span>
          </div>

          <div className="text-sm mb-6" style={{ color: brandLight }}>
            Job No. {job.jobNumber} {job.jobName && `| ${job.jobName}`}
          </div>

          <button
            disabled={isApplied}
            onClick={onApply}
            className="px-8 py-3 rounded-xl font-bold text-lg transition-all mb-8"
            style={{
              backgroundColor: brandTeal,
              opacity: isApplied ? 0.6 : 1,
              color: "#fff"
            }}
          >
            {isApplied ? "✓ Application Sent" : "Apply for this job"}
          </button>

          <div className="border-t-2 pt-8 mb-8" style={{ borderColor: brandLight }}>
            <h2 className="text-2xl font-bold mb-4" style={{ color: brandTeal }}>
              Job Description
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {job.fullDescription || job.overview}
            </div>
          </div>

          <JobAccordion
            sections={[
              { title: "Qualification", content: job.qualification || "B.Tech/B.E., MBA, M.Tech or related." },
              { title: "Locations", content: job.location || "Multiple locations" },
              { title: "Additional Information", content: job.extraInfo || "See company website." },
              { title: "About Company", content: "JRAMSYS is a leader in global IT and engineering solutions." },
              { title: "Important Notice", content: "Apply only via official portal. Beware of recruiting scams." },
            ]}
          />
        </div>
      </motion.div>

      {/* Similar Jobs Sidebar */}
      <div className="hidden lg:block w-96 bg-gray-50 border-l border-gray-200 overflow-auto p-6">
        <h3 className="text-xl font-bold mb-6" style={{ color: brandTeal }}>
          Similar Jobs
        </h3>
        <div className="space-y-4">
          {similarJobs.map(j => (
            <div
              key={j.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-cyan-400 hover:shadow-lg transition-all"
              onClick={() => onOpenJob(j)}
            >
              <h4 className="font-bold mb-2" style={{ color: brandTeal }}>{j.title}</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <div>{j.location}</div>
                <div>{j.type} • {j.experience}+ years</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---- Main Page ----
export default function CareerPage() {
  const jobs = [
    {id: 1, title: "Full Stack Developer", location: "Guntur, India", area: "Software Development", type: "Full-time", experience: 2, jobName: "Custom Development", jobNumber: "DEV-GNT-101", overview: "Develop mission-critical web apps for global clients.", fullDescription: "Develop and maintain large scale web applications using React, Node.js, and modern APIs. Collaborate with global teams."},
    {id: 2, title: "Cloud Solutions Architect", location: "London, UK", area: "Cloud & DevOps", type: "Full-time", experience: 5, jobName: "Cloud Infrastructure", jobNumber: "CLOUD-UK-207", overview: "Design and manage AWS/Azure cloud for enterprise QR solutions.", fullDescription: "Lead migration and DevOps automation, optimize cloud spend, ensure scalable deployments for client SaaS apps."},
    {id: 3, title: "AI/ML Engineer", location: "USA", area: "AI/ML/Data", type: "Full-time", experience: 3, jobName: "AI Platform", jobNumber: "AI-USA-302", overview: "Build AI/ML features for analytics and BPM.", fullDescription: "Develop prediction and analytics pipelines. Deep learning in production using PyTorch/TensorFlow and cloud services."},
    {id: 4, title: "IoT System Specialist", location: "London, UK", area: "IoT/Smart City", type: "Full-time", experience: 2, jobName: "IoT Solutions", jobNumber: "IOT-UK-205", overview: "Create and support Smart City and Smart Waste IoT platforms.", fullDescription: "Deploy sensors, manage telemetry, and work on context-aware QR sensors for city-scale infrastructure."},
    {id: 5, title: "IT Strategy Consultant", location: "USA", area: "IT Consulting", type: "Full-time", experience: 5, jobName: "Consultancy", jobNumber: "CONS-USA-808", overview: "Advisory for large-scale digital transformation projects.", fullDescription: "Define roadmaps and support enterprise clients implementing modern platforms, including BPM/IoT and cloud."},
    {id: 6, title: "UX/UI Product Designer", location: "Guntur, India", area: "Design/UX", type: "Full-time", experience: 2, jobName: "Design Team", jobNumber: "DES-GNT-456", overview: "Design modern interfaces for QR, analytics & Smart City apps.", fullDescription: "User research, Figma, prototyping, usability testing for accessible enterprise digital product design."},
    {id: 7, title: "Technical Sales Manager", location: "USA", area: "Business Development", type: "Full-time", experience: 3, jobName: "Sales", jobNumber: "BD-USA-999", overview: "Present digital and IoT solutions to new verticals; close deals.", fullDescription: "Enterprise sales for QR, IoT, and custom cloud/BPM platforms."},
    {id: 8, title: "QA Automation Engineer", location: "London, UK", area: "QA", type: "Full-time", experience: 3, jobName: "Quality", jobNumber: "QA-UK-019", overview: "Automate testing for AI, IoT, SaaS platforms.", fullDescription: "Implement CI pipelines, coverage reporting, and end-to-end test design."},
    {id: 9, title: "Industry Solutions Lead: Education", location: "USA", area: "Industry Solutions - Education", type: "Full-time", experience: 4, jobName: "Edu Vertical", jobNumber: "EDU-USA-332", overview: "Drive QR attendance, smart events and digital rollout for schools.", fullDescription: "Implement QR-driven attendance, digital resources, events, and analytics for educational clients."},
    {id: 10, title: "Industry Solutions Manager: Healthcare", location: "Guntur, India", area: "Industry Solutions - Healthcare", type: "Full-time", experience: 4, jobName: "Healthcare", jobNumber: "HC-GNT-411", overview: "Digital and QR-based process improvement in hospitals.", fullDescription: "Deploy/support patient files, digital check-ins, smart tracking, and IoT equipment."},
    {id: 11, title: "Smart Waste Project Lead", location: "London, UK", area: "IoT/Smart City", type: "Full-time", experience: 6, jobName: "Smart Waste", jobNumber: "SW-UK-606", overview: "Lead Smart City waste management IoT projects.", fullDescription: "Implement, manage, and analyze smart waste systems for municipal partners."},
    {id: 12, title: "API & BPM Developer", location: "USA", area: "BPM/API Integration", type: "Full-time", experience: 2, jobName: "API Dev", jobNumber: "API-USA-552", overview: "Maintain APIs for QR/IoT and BPM workflows.", fullDescription: "Build and integrate APIs for automation, process flows, and third-party systems."},
    {id: 13, title: "Customer Success Specialist", location: "Guntur, India", area: "Customer Success", type: "Full-time", experience: 2, jobName: "Support", jobNumber: "CS-GNT-013", overview: "Onboarding and post-launch for QR and SaaS clients.", fullDescription: "Train and assist customers on-prem and remote, manage support tickets."},
    {id: 14, title: "Network Engineer", location: "London, UK", area: "IT", type: "Full-time", experience: 2, jobName: "Network Engineer", jobNumber: "NET-UK-5544", overview: "Deploy and monitor corporate networks.", fullDescription: "Setup and manage Cisco, firewall, VPN, and network diagnostics."},
    {id: 15, title: "Data Analyst", location: "London, UK", area: "Business Intelligence", type: "Full-time", experience: 3, jobName: "Data Analyst", jobNumber: "DATA-UK-2167", overview: "BI dashboards and KPI reporting.", fullDescription: "Create metrics dashboards and help with data-driven decision making."},
    {id: 16, title: "Security Consultant", location: "Guntur, India", area: "Security", type: "Contract", experience: 7, jobName: "Security Consultant", jobNumber: "SEC-GNT-7781", overview: "Audits and remediation planning.", fullDescription: "Conduct vulnerability scans and help teams harden cloud and IoT deployments."},
    {id: 17, title: "Technical Writer", location: "USA", area: "Documentation", type: "Part-time", experience: 2, jobName: "Tech Writer", jobNumber: "DOC-USA-1702", overview: "Create technical docs for projects.", fullDescription: "Author documentation for code, APIs, and process/platform usage."},
    {id: 18, title: "AI Scientist", location: "USA", area: "AI", type: "Full-time", experience: 5, jobName: "AI Scientist", jobNumber: "AI-USA-9901", overview: "ML systems and research.", fullDescription: "Experiment with latest LLMs, NLP, AI integrations, and research transfer methods."},
    {id: 19, title: "DevRel Engineer", location: "London, UK", area: "Advocacy", type: "Remote", experience: 3, jobName: "Developer Advocate", jobNumber: "DEVREL-UK-3120", overview: "Build/support developer communities.", fullDescription: "Technical content, code demos, conference presentations, and open-source engagement."},
    {id: 20, title: "QA Analyst", location: "USA", area: "Quality", type: "Full-time", experience: 2, jobName: "QA Analyst", jobNumber: "QA-USA-5678", overview: "Test and validate software releases.", fullDescription: "Manual and automated QA for platforms and client projects."}
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [areas, setAreas] = useState([]);
  const [types, setTypes] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);
  const [apps, setApps] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [showApps, setShowApps] = useState(false);
  const [viewJob, setViewJob] = useState(null);

  const allLocations = Array.from(new Set(jobs.map(j => j.location)));
  const allAreas = Array.from(new Set(jobs.map(j => j.area)));
  const allTypes = Array.from(new Set(jobs.map(j => j.type)));
  const allExperiences = [
    { label: "0-1 Year", min: 0, max: 1 },
    { label: "1-3 Years", min: 1, max: 3 },
    { label: "3-5 Years", min: 3, max: 5 },
    { label: "5-8 Years", min: 5, max: 8 },
    { label: "8-10 Years", min: 8, max: 10 },
    { label: "10+ Years", min: 10, max: 100 },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchLocation = locations.length === 0 || locations.includes(job.location);
    const matchArea = areas.length === 0 || areas.includes(job.area);
    const matchType = types.length === 0 || types.includes(job.type);
    const matchExperience =
      experiences.length === 0 ||
      experiences.some(r => job.experience >= r.min && job.experience <= r.max);
    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      q === "" ||
      job.title.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      job.area.toLowerCase().includes(q) ||
      job.type.toLowerCase().includes(q) ||
      job.fullDescription.toLowerCase().includes(q);
    return matchLocation && matchArea && matchType && matchExperience && matchSearch;
  });

  const handleToggle = (v, arr, setArr) => arr.includes(v) ? setArr(arr.filter(x => x !== v)) : setArr([...arr, v]);
  const handleExpToggle = (range) => experiences.some(r => r.label === range.label) ? setExperiences(experiences.filter(r => r.label !== range.label)) : setExperiences([...experiences, range]);
  const handleToggleSave = (job) => setSavedJobs(s => s.find(j => j.id === job.id) ? s.filter(j => j.id !== job.id) : [...s, job]);
  const handleApply = (job) => { if (!apps.find(j => j.id === job.id)) setApps([...apps, job]); };
  const similarJobs = useMemo(() => {
    if (!viewJob) return [];
    return jobs.filter(j => j.id !== viewJob.id && (j.area === viewJob.area || j.location === viewJob.location || j.type === viewJob.type)).slice(0, 3);
  }, [viewJob, jobs]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-teal-900 to-cyan-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-cyan-100 max-w-3xl">
              Build your career with innovative technology solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Actions Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-4 items-center">
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
            Saved ({savedJobs.length})
          </button>
          <button
            className="px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{ backgroundColor: brandTeal, color: "white" }}
            onClick={() => setShowApps(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Applications ({apps.length})
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-6">
        {/* Filters Sidebar */}
        <aside className="w-80 flex-shrink-0">
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6" style={{ color: brandTeal }}>Filters</h2>
            
            <FilterSection title="Locations">
              {allLocations.map(loc => (
                <label key={loc} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={locations.includes(loc)}
                    onChange={() => handleToggle(loc, locations, setLocations)}
                    className="mr-3 w-4 h-4 rounded"
                    style={{ accentColor: brandTeal }}
                  />
                  <span className="text-gray-700">{loc}</span>
                </label>
              ))}
            </FilterSection>

            <FilterSection title="Areas of Interest">
              {allAreas.map(area => (
                <label key={area} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={areas.includes(area)}
                    onChange={() => handleToggle(area, areas, setAreas)}
                    className="mr-3 w-4 h-4 rounded"
                    style={{ accentColor: brandTeal }}
                  />
                  <span className="text-gray-700 text-sm">{area}</span>
                </label>
              ))}
            </FilterSection>

            <FilterSection title="Job Type">
              {allTypes.map(type => (
                <label key={type} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={types.includes(type)}
                    onChange={() => handleToggle(type, types, setTypes)}
                    className="mr-3 w-4 h-4 rounded"
                    style={{ accentColor: brandTeal }}
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </FilterSection>

            <FilterSection title="Experience">
              {allExperiences.map(range => (
                <label key={range.label} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <input
                    type="checkbox"
                    checked={experiences.some(r => r.label === range.label)}
                    onChange={() => handleExpToggle(range)}
                    className="mr-3 w-4 h-4 rounded"
                    style={{ accentColor: brandTeal }}
                  />
                  <span className="text-gray-700">{range.label}</span>
                </label>
              ))}
            </FilterSection>
          </div>
        </aside>

        {/* Jobs List */}
        <main className="flex-1">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold" style={{ color: brandTeal }}>
              {filteredJobs.length} {filteredJobs.length === 1 ? 'Position' : 'Positions'} Available
            </h2>
          </div>

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
                  onViewDetails={() => setViewJob(job)}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Modals */}
      {viewJob && (
        <JobFullDetails
          job={viewJob}
          onClose={() => setViewJob(null)}
          onToggleSave={() => handleToggleSave(viewJob)}
          saved={!!savedJobs.find(j => j.id === viewJob.id)}
          onApply={() => handleApply(viewJob)}
          isApplied={!!apps.find(j => j.id === viewJob.id)}
          similarJobs={similarJobs}
          onOpenJob={job => setViewJob(job)}
        />
      )}
      {showSaved && (
        <JobsPopup
          title="Saved Jobs"
          jobs={savedJobs}
          onClose={() => setShowSaved(false)}
          onOpenJob={job => { setViewJob(job); setShowSaved(false); }}
        />
      )}
      {showApps && (
        <JobsPopup
          title="Your Applications"
          jobs={apps}
          onClose={() => setShowApps(false)}
          onOpenJob={job => { setViewJob(job); setShowApps(false); }}
        />
      )}
    </div>
  );
}