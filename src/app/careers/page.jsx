"use client";
import React, { useState, useMemo } from "react";

// Brand color
const mainGreen = "#19B49A";
const lightGreenBg = "#ECFDF5";

// ---- FilterSection ----
function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-4">
      <div
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between cursor-pointer select-none"
      >
        <h3 className="text-lg font-semibold" style={{ color: mainGreen }}>{title}</h3>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          style={{ color: mainGreen }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}

// ---- TopRightBarInline ----
function TopRightBarInline({ savedJobs, accessApplications, openSaved, openApps }) {
  return (
    <div className="flex gap-4 items-center ml-auto">
      <button
        className="bg-white border-2 rounded-full px-4 py-2 font-semibold flex items-center shadow"
        style={{ borderColor: mainGreen, color: mainGreen }}
        onClick={openSaved}
      >
        <svg className="w-6 h-6 mr-1" style={{ color: mainGreen }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
            2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
            C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
            c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
        Saved Jobs ({savedJobs.length})
      </button>
      <button
        className="bg-white border-2 rounded-full px-4 py-2 font-semibold flex items-center shadow"
        style={{ borderColor: mainGreen, color: mainGreen }}
        onClick={openApps}
      >
        <svg className="w-6 h-6 mr-1" style={{ color: mainGreen }} fill="none" stroke="currentColor" strokeWidth={2.0} viewBox="0 0 24 24">
          <path d="M16 2H8c-1.1 0-2 .9-2 2v16l6-3 6 3V4c0-1.1-.9-2-2-2z"/>
        </svg>
        Access Applications ({accessApplications.length})
      </button>
    </div>
  );
}

// ---- SaveHeart ----
function SaveHeart({ saved, onSave }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={onSave}
        aria-label={saved ? "Saved" : "Save"}
        className="p-1"
        style={{ outline: "none", background: "transparent", border: "none" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {saved ? (
          <svg className="w-7 h-7" style={{ color: mainGreen }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
              2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
              C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5
              c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg className="w-7 h-7" style={{ color: mainGreen }} fill="none" stroke="currentColor" strokeWidth="2.0" viewBox="0 0 24 24">
            <path d="M12.1 18.55l-.1.1-.11-.11C7.14 14.24 4 11.39 4 8.5A4.5 4.5 0 0 1 8.5 4 5.54 5.54 0 0 1 12 6.09 5.54 5.54 0 0 1 15.5 4 4.5 4.5 0 0 1 20 8.5c0 2.89-3.14 5.74-7.9 10.05z"/>
          </svg>
        )}
      </button>
      <div className="h-5">
        {saved
          ? <span className="block mt-1 text-xs select-none" style={{ color: mainGreen }}>Saved</span>
          : hovered && <span className="block mt-1 text-xs select-none" style={{ color: mainGreen }}>Save</span>
        }
      </div>
    </div>
  );
}

// ---- JobCard ----
function JobCard({ title, location, type, experience, onViewDetails, saved, onToggleSave }) {
  return (
    <div className="relative bg-white rounded-lg shadow p-4 mb-4 border border-gray-200 transition-all duration-300 text-gray-900 hover:shadow-2xl hover:-translate-y-1 group"
         style={{ borderColor: saved ? mainGreen : "#E5E7EB" }}>
      <div className="absolute top-2 right-2 flex gap-2 z-20">
        <SaveHeart saved={saved} onSave={onToggleSave} />
      </div>
      <div>
        <div className="text-xl md:text-2xl font-bold mb-2" style={{ color: mainGreen }}>{title}</div>
        <div className="mb-2 text-gray-600 text-base flex gap-3 flex-wrap">
          <span>{location}</span>
          <span>|</span>
          <span>{type}</span>
          <span>|</span>
          <span>Experience: {experience} years</span>
        </div>
        <button
          className="mt-3 rounded py-1 px-4 font-semibold transition"
          style={{ background: mainGreen, color: "white" }}
          onClick={onViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

// ---- JobAccordion ----
function JobAccordion({ sections }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="mb-4">
      {sections.map((section, idx) => (
        <div key={section.title}>
          <button className="w-full flex justify-between items-center py-2 border-b border-gray-300 text-left transition" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <span className="font-bold" style={{ color: mainGreen }}>{section.title}</span>
            <svg className={`w-5 h-5 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`} style={{ color: mainGreen }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
          </button>
          {openIndex === idx && <div className="pl-2 py-2" style={{ background: lightGreenBg, color: "#225046" }}>{section.content}</div>}
        </div>
      ))}
    </div>
  );
}

// ---- JobsPopup ----
function JobsPopup({ title, jobs, onClose, onOpenJob }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-start pt-24">
      <div className="bg-white rounded shadow p-6 w-full max-w-2xl relative">
        <h2 className="text-2xl font-bold mb-5" style={{ color: mainGreen }}>{title}</h2>
        <button onClick={onClose} className="absolute top-2 right-4 text-lg font-bold" style={{ color: mainGreen }}>×</button>
        <div className="max-h-[50vh] overflow-y-auto flex flex-col gap-3">
          {jobs.length === 0 ? (
            <div className="text-gray-400 text-center py-12">No jobs yet.</div>
          ) : (
            jobs.map(j => (
              <div key={j.id} className="flex items-center gap-4 p-3 border-b last:border-b-0 cursor-pointer hover:bg-[#ECFDF5]" onClick={() => onOpenJob(j)}>
                <div className="font-semibold">{j.title}</div>
                <div className="flex-grow text-xs text-gray-500">{j.location} | {j.type}</div>
                <div className="text-xs">Exp: {j.experience} yrs</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ---- JobFullDetails ----
function JobFullDetails({ job, onClose, onToggleSave, saved, onApply, isApplied, similarJobs, onOpenJob }) {
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-80 animate-slide-in-right">
      <div className="flex-1 flex justify-center overflow-auto bg-white relative">
        <button onClick={onClose} aria-label="Close" className="absolute top-3 left-3 text-3xl font-bold rounded-full px-2.5 py-1 shadow hover:bg-green-100 z-50" style={{ color: mainGreen, background: lightGreenBg }}>×</button>
        <div className="absolute top-4 right-6 flex gap-5 z-30 bg-white p-1 rounded shadow">
          <SaveHeart saved={saved} onSave={onToggleSave} />
        </div>
        <div className="w-full max-w-4xl min-h-screen px-8 pt-8 pb-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2" style={{ color: mainGreen }}>{job.title}</h1>
          <div className="mb-2 text-gray-700 flex flex-wrap gap-4"><span>{job.location}</span><span>|</span><span>{job.type}</span><span>|</span><span>Experience: {job.experience} years</span></div>
          <div className="mb-4 text-sm" style={{ color: mainGreen }}><span>Job No. {job.jobNumber}</span><span>{job.jobName ? ` | ${job.jobName}` : ""}</span></div>
          <button disabled={isApplied} onClick={onApply}
            className={`mb-8 rounded px-6 py-2 font-semibold transition${isApplied ? "" : ""}`}
            style={{
              background: mainGreen,
              opacity: isApplied ? .7 : 1,
              color: "#fff"
            }}>
            {isApplied ? "Application Sent" : "Apply for this job"}
          </button>
          <hr className="mb-6 mt-1" style={{ borderColor: mainGreen }} />
          <h2 className="mb-2 text-lg font-bold" style={{ color: mainGreen }}>Job Description</h2>
          <div className="whitespace-pre-line text-gray-900 mb-8">{job.fullDescription || job.overview}</div>
          <JobAccordion
            sections={[
              { title: "Qualification", content: job.qualification || "B.Tech/B.E., MBA, M.Tech or related." },
              { title: "Locations", content: job.location || "Multiple locations" },
              { title: "Additional Information", content: job.extraInfo || "See company website." },
              { title: "About Company", content: "JRamsys is a leader in global IT and engineering solutions." },
              { title: "Important Notice", content: "Apply only via official portal. Beware of recruiting scams." },
            ]}
          />
          <div className="flex gap-6 pt-6 mt-6 flex-wrap text-sm" style={{ color: mainGreen, borderTop: `2px solid ${mainGreen}` }}>
            <a href="#" className="flex items-center hover:underline"><span className="mr-2">→</span> Benefits information</a>
            <a href="#" className="flex items-center hover:underline"><span className="mr-2">→</span> Hiring process (Q&A)</a>
            <a href="#" className="flex items-center hover:underline"><span className="mr-2">→</span> Interview tips</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-96" style={{ background: lightGreenBg, borderLeft: `3px solid ${mainGreen}` }}>
        <h3 className="pt-8 pb-3 text-lg font-semibold" style={{ color: mainGreen }}>Similar jobs</h3>
        <div className="flex flex-col gap-4">
          {similarJobs.map(j => (
            <div key={j.id} className="bg-white border rounded px-4 py-3 shadow flex flex-col gap-2 cursor-pointer"
                 style={{ borderColor: mainGreen }}
                 onClick={() => onOpenJob(j)}>
              <div className="font-bold text-base" style={{ color: mainGreen }}>{j.title}</div>
              <div className="text-sm text-gray-500">{j.location} | {j.type} | {j.experience} years</div>
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
    <div className="relative min-h-screen bg-gray-50 font-sans">
      <div className="flex items-center gap-4 px-8 pt-6 pb-3 bg-transparent">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 min-w-0 text-lg"
          placeholder="Search by title, skill, area or location..."
        />
        <TopRightBarInline
          savedJobs={savedJobs}
          accessApplications={apps}
          openSaved={() => setShowSaved(true)}
          openApps={() => setShowApps(true)}
        />
      </div>
      <div className="flex p-4">
        <aside className="w-64 bg-white p-4 rounded shadow sticky top-4 max-h-screen overflow-y-auto animate-slide-in-left">
          <FilterSection title="Locations">
            {allLocations.map(loc => (
              <label key={loc} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={locations.includes(loc)}
                  onChange={() => handleToggle(loc, locations, setLocations)}
                  className="mr-2 accent-green-600"
                />
                {loc}
              </label>
            ))}
          </FilterSection>
          <FilterSection title="Areas of Interest">
            {allAreas.map(area => (
              <label key={area} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={areas.includes(area)}
                  onChange={() => handleToggle(area, areas, setAreas)}
                  className="mr-2 accent-green-600"
                />
                {area}
              </label>
            ))}
          </FilterSection>
          <FilterSection title="Job Type">
            {allTypes.map(type => (
              <label key={type} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={types.includes(type)}
                  onChange={() => handleToggle(type, types, setTypes)}
                  className="mr-2 accent-green-600"
                />
                {type}
              </label>
            ))}
          </FilterSection>
          <FilterSection title="Experience">
            {allExperiences.map(range => (
              <label key={range.label} className="flex items-center mb-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={experiences.some(r => r.label === range.label)}
                  onChange={() => handleExpToggle(range)}
                  className="mr-2 accent-green-600"
                />
                {range.label}
              </label>
            ))}
          </FilterSection>
        </aside>
        <main className="flex-1 ml-4 p-4 bg-white rounded shadow overflow-y-auto max-h-screen animate-slide-in-right">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <h2 className="text-xl font-semibold mb-4">No jobs match your filters</h2>
              <p>Try clearing some filters or search keywords.</p>
            </div>
          ) : (
            filteredJobs.map(job => (
              <JobCard key={job.id} {...job} saved={!!savedJobs.find(j => j.id === job.id)} onToggleSave={() => handleToggleSave(job)} onViewDetails={() => setViewJob(job)} />
            ))
          )}
        </main>
      </div>
      {viewJob && (
        <JobFullDetails job={viewJob} onClose={() => setViewJob(null)} onToggleSave={() => handleToggleSave(viewJob)} saved={!!savedJobs.find(j => j.id === viewJob.id)} onApply={() => handleApply(viewJob)} isApplied={!!apps.find(j => j.id === viewJob.id)} similarJobs={similarJobs} onOpenJob={job => setViewJob(job)} />
      )}
      {showSaved && (
        <JobsPopup title="Saved Jobs" jobs={savedJobs} onClose={() => setShowSaved(false)} onOpenJob={job => { setViewJob(job); setShowSaved(false); }} />
      )}
      {showApps && (
        <JobsPopup title="Access Applications" jobs={apps} onClose={() => setShowApps(false)} onOpenJob={job => { setViewJob(job); setShowApps(false); }} />
      )}
    </div>
  );
}
