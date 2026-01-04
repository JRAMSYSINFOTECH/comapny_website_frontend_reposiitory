"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

export default function Contact() {
    const [activeCountry, setActiveCountry] = useState("in");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (name || email || message) {
                e.preventDefault();
                e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
                return e.returnValue;
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [name, email, message]);

    const countryData = {
        in: {
            name: "India",
            status: "active",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.0146392088577!2d80.6175106!3d16.3685621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIyJzA2LjgiTiA4MMKwMzcnMDMuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
            googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=16.3685621,80.6175106",
            email: "officejram@gmail.com",
            phone: "+91 9121767948",
            address: "D.no 3-262, 6th Ward Near Panchayathi, Kattempudi, Dandamudi, Patsalatadiparru, Guntur, Andhra Pradesh, 522316",
            flag: "🇮🇳"
        },
        us: {
            name: "United States",
            status: "coming-soon",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.80930249999994!3d44.24236485000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2suk!4v1761617122302!5m2!1sen!2suk",
            googleMapsUrl: "https://www.google.com/maps/place/United+States",
            email: "Coming Soon",
            phone: "Coming Soon",
            address: "United States",
            flag: "🇺🇸",
            expectedDate: "Q3 2026"
        },
        uk: {
            name: "United Kingdom",
            status: "coming-soon",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77875.66339520458!2d-1.5973183726034648!3d52.41366291035289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151656e22b7%3A0x4f660f5564f0689!2sCoventry!5e0!3m2!1sen!2suk!4v1761613259494!5m2!1sen!2suk",
            googleMapsUrl: "https://www.google.com/maps/place/Coventry,+UK",
            email: "Coming Soon",
            phone: "Coming Soon",
            address: "Coventry, United Kingdom",
            flag: "🇬🇧",
            expectedDate: "Q4 2026"
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) {
            newErrors.name = "Name is required";
        } else if (name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!message.trim()) {
            newErrors.message = "Message is required";
        } else if (message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        setIsSubmitting(true);
        const formData = { name, email, message, country: activeCountry };
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setShowSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
            setErrors({});
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (err) {
            setErrorMessage(err.message || "Failed to send message. Please try again.");
            setShowError(true);
            setTimeout(() => setShowError(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isActive = countryData[activeCountry].status === "active";

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
            <AnimatePresence>
                {showSuccess && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-[90%] sm:w-full">
                        <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-500 p-6 sm:p-8">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-sm sm:text-base text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                </div>
                                <button onClick={() => setShowSuccess(false)} className="mt-2 px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showError && (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-[90%] sm:w-full">
                        <div className="bg-white rounded-2xl shadow-2xl border-2 border-red-500 p-6 sm:p-8">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">Something Went Wrong</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{errorMessage}</p>
                                </div>
                                <button onClick={() => setShowError(false)} className="mt-2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all">
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {(showSuccess || showError) && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => { setShowSuccess(false); setShowError(false); }} />
                )}
            </AnimatePresence>

            <div className="relative bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-16 sm:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden">
                <div className="absolute inset-0">
                    {/* Large Gradient Orbs */}
                    <motion.div className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-br from-teal-400/30 to-cyan-400/30 blur-3xl" animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
                    <motion.div className="absolute -bottom-20 -right-20 w-64 h-64 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] rounded-full bg-gradient-to-tl from-emerald-400/25 to-teal-400/25 blur-3xl" animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: [1, 1.3, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
                    <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl" animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

                    {/* Floating Particles */}
                    {[...Array(15)].map((_, i) => (
                        <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-white/20" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }} transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }} />
                    ))}

                    {/* Animated Lines */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div key={`line-${i}`} className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" style={{ width: "200px", left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ x: ["-100%", "200%"], opacity: [0, 1, 0] }} transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }} />
                    ))}

                    {/* Pulsing Rings */}
                    {[...Array(5)].map((_, i) => (
                        <motion.div key={`ring-${i}`} className="absolute rounded-full border border-white/10" style={{ width: `${100 + i * 80}px`, height: `${100 + i * 80}px`, left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }} animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }} />
                    ))}

                    {/* Grid Pattern */}
                    <motion.div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: "50px 50px" }} animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />

                    {/* Radial Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-900/50" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }} className="inline-block mb-4 sm:mb-5">
                            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                                <motion.span className="text-base sm:text-lg" animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>🌍</motion.span>
                                <span className="text-xs font-bold text-white tracking-wider">GLOBAL OFFICES</span>
                            </div>
                        </motion.div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 text-white drop-shadow-lg px-4">Get In Touch</h1>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed px-4">We're here to help transform your business. Reach out to discuss your project or ask any questions.</p>
                    </motion.div>
                </div>
            </div>

            <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-30 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                        {Object.entries(countryData).map(([code, data]) => (
                            <button key={code} onClick={() => setActiveCountry(code)} className={`relative px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-xs sm:text-sm transition-all rounded-lg sm:rounded-xl ${activeCountry === code ? "text-white shadow-lg scale-100 sm:scale-105" : "text-gray-700 hover:text-teal-600 hover:bg-gray-100"}`}>
                                {activeCountry === code && (
                                    <motion.div layoutId="activeTab" className="absolute inset-0 rounded-lg sm:rounded-xl" style={{ background: data.status === "active" ? "linear-gradient(135deg, #1B5B6F, #2D8BA3, #1B5B6F)" : "linear-gradient(135deg, #64748b, #94a3b8)" }} transition={{ type: "spring", bounce: 0.15, duration: 0.6 }} />
                                )}
                                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 justify-center">
                                    <span className="text-xl sm:text-2xl">{data.flag}</span>
                                    <span className="text-xs sm:text-sm font-bold">{data.name}</span>
                                </span>
                                {data.status === "coming-soon" && (
                                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -top-1 -right-1 px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[8px] sm:text-[9px] font-black rounded-full shadow-lg">SOON</motion.span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
                <AnimatePresence mode="wait">
                    <motion.div key={activeCountry} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                        {!isActive && (
                            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-8 sm:mb-10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white text-center shadow-2xl">
                                <motion.div animate={{ rotate: [0, 15, -15, 0], y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🚀</motion.div>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2 sm:mb-3 drop-shadow">Opening Soon!</h2>
                                <p className="text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">Our {countryData[activeCountry].name} office is launching soon</p>
                                <p className="text-xs sm:text-sm font-medium opacity-95">Expected Launch: {countryData[activeCountry].expectedDate}</p>
                            </motion.div>
                        )}

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className={`relative group rounded-xl sm:rounded-2xl border-2 p-5 sm:p-6 text-center transition-all ${isActive ? "bg-white border-gray-200 hover:border-teal-500 hover:shadow-xl" : "bg-gray-50 border-gray-300 opacity-60"}`}>
                                {!isActive && <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-0.5 sm:py-1 bg-orange-500 text-white text-[9px] sm:text-[10px] font-black rounded-full">Soon</div>}
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center ${isActive ? "bg-gradient-to-br from-cyan-500 to-teal-600 group-hover:scale-110" : "bg-gray-400"} transition-all shadow-lg`}>
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-black mb-1 sm:mb-2" style={{ color: isActive ? brandTeal : "#64748b" }}>Email</h3>
                                {isActive ? <a href={`mailto:${countryData[activeCountry].email}`} className="text-xs sm:text-sm text-gray-600 hover:text-teal-600 transition-colors break-all font-medium">{countryData[activeCountry].email}</a> : <p className="text-xs sm:text-sm text-gray-500 font-semibold">{countryData[activeCountry].email}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className={`relative group rounded-xl sm:rounded-2xl border-2 p-5 sm:p-6 text-center transition-all ${isActive ? "bg-white border-gray-200 hover:border-teal-500 hover:shadow-xl" : "bg-gray-50 border-gray-300 opacity-60"}`}>
                                {!isActive && <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-0.5 sm:py-1 bg-orange-500 text-white text-[9px] sm:text-[10px] font-black rounded-full">Soon</div>}
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center ${isActive ? "bg-gradient-to-br from-teal-500 to-cyan-600 group-hover:scale-110" : "bg-gray-400"} transition-all shadow-lg`}>
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.4217 18.7584L19.0011 20.254C18.6399 20.6343 18.1917 20.9122 17.6763 20.9631C16.0468 21.1239 12.0621 20.9462 7.81536 16.4752C3.81071 12.259 3.09304 8.64546 3.00289 6.96594C2.96765 6.30945 3.25823 5.71766 3.69185 5.26114L5.26145 3.60864C6.13596 2.68795 7.61028 2.8305 8.37326 3.90961L9.63424 5.6931C10.2507 6.56497 10.1841 7.75924 9.47752 8.50311L9.1907 8.80507C9.1907 8.80507 8.10812 9.94484 11.0631 13.0559C14.0181 16.167 15.1007 15.0272 15.1007 15.0272L15.5562 14.5477C16.1858 13.8848 17.1672 13.7486 17.9728 14.2123L19.8833 15.312C21.1102 16.0182 21.3806 17.7489 20.4217 18.7584Z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-black mb-1 sm:mb-2" style={{ color: isActive ? brandTeal : "#64748b" }}>Phone</h3>
                                {isActive ? <a href={`tel:${countryData[activeCountry].phone}`} className="text-xs sm:text-sm text-gray-600 hover:text-teal-600 transition-colors font-medium">{countryData[activeCountry].phone}</a> : <p className="text-xs sm:text-sm text-gray-500 font-semibold">{countryData[activeCountry].phone}</p>}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={`relative group rounded-xl sm:rounded-2xl border-2 p-5 sm:p-6 text-center transition-all sm:col-span-2 lg:col-span-1 ${isActive ? "bg-white border-gray-200 hover:border-teal-500 hover:shadow-xl" : "bg-gray-50 border-gray-300 opacity-60"}`}>
                                {!isActive && <div className="absolute top-2 sm:top-3 right-2 sm:right-3 px-2 py-0.5 sm:py-1 bg-orange-500 text-white text-[9px] sm:text-[10px] font-black rounded-full">Soon</div>}
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center ${isActive ? "bg-gradient-to-br from-cyan-500 to-teal-600 group-hover:scale-110" : "bg-gray-400"} transition-all shadow-lg`}>
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-base sm:text-lg font-black mb-1 sm:mb-2" style={{ color: isActive ? brandTeal : "#64748b" }}>Location</h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">{countryData[activeCountry].address}</p>
                            </motion.div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="relative h-[350px] sm:h-[400px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-gray-200 shadow-2xl">
                                {!isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm z-10 flex items-center justify-center">
                                        <div className="text-center px-6">
                                            <motion.div className="text-5xl sm:text-7xl mb-4" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>🗺️</motion.div>
                                            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 drop-shadow-lg">Opening Soon</h3>
                                            <p className="text-sm sm:text-base text-white/90">Location details will be announced</p>
                                        </div>
                                    </div>
                                )}
                                <iframe width="100%" height="100%" src={countryData[activeCountry].mapSrc} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map of ${countryData[activeCountry].name}`} />
                                {isActive && (
                                    <motion.a href={countryData[activeCountry].googleMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 text-xs sm:text-sm font-bold border-2 border-gray-100" style={{ color: brandTeal }} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                        </svg>
                                        Open in Maps
                                    </motion.a>
                                )}
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-200 p-6 sm:p-8 shadow-2xl">
                                {isActive ? (
                                    <>
                                        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                                            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-xl">
                                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl font-black" style={{ color: brandTeal }}>Send a Message</h2>
                                                <p className="text-xs sm:text-sm text-gray-500 font-medium">We'll respond within 24 hours</p>
                                            </div>
                                        </div>

                                        <div className="space-y-5 sm:space-y-6">
                                            <div>
                                                <label className="block text-sm font-bold mb-2 text-gray-800">Full Name *</label>
                                                <input type="text" value={name} onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({...errors, name: ""}); }} className={`w-full px-4 py-3 sm:py-3.5 border-2 rounded-xl focus:outline-none transition-all text-gray-900 text-sm font-medium ${errors.name ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"}`} placeholder="John Doe" disabled={isSubmitting} />
                                                {errors.name && (
                                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-xs text-red-600 font-semibold flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        {errors.name}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold mb-2 text-gray-800">Email Address *</label>
                                                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors({...errors, email: ""}); }} className={`w-full px-4 py-3 sm:py-3.5 border-2 rounded-xl focus:outline-none transition-all text-gray-900 text-sm font-medium ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"}`} placeholder="john@example.com" disabled={isSubmitting} />
                                                {errors.email && (
                                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-xs text-red-600 font-semibold flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        {errors.email}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold mb-2 text-gray-800">Your Message *</label>
                                                <textarea value={message} onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors({...errors, message: ""}); }} rows="5" className={`w-full px-4 py-3 sm:py-3.5 border-2 rounded-xl focus:outline-none transition-all resize-none text-gray-900 text-sm font-medium ${errors.message ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200" : "border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200"}`} placeholder="Tell us about your project or inquiry..." disabled={isSubmitting} />
                                                {errors.message && (
                                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 text-xs text-red-600 font-semibold flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        {errors.message}
                                                    </motion.p>
                                                )}
                                            </div>

                                            <motion.button onClick={handleSubmit} disabled={isSubmitting} className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white transition-all shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`} style={{ background: "linear-gradient(135deg, #1B5B6F, #2D8BA3, #1B5B6F)" }} whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 15px 40px rgba(27, 91, 111, 0.4)" } : {}} whileTap={!isSubmitting ? { scale: 0.98 } : {}}>
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            
                                                        </svg>
                                                    </>
                                                )}
                                            </motion.button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center py-16 sm:py-20">
                                        <motion.div className="text-6xl sm:text-8xl mb-5 sm:mb-6" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>📧</motion.div>
                                        <h3 className="text-2xl sm:text-3xl font-black text-gray-800 mb-3 sm:mb-4">Contact Form Coming Soon</h3>
                                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">For now, please reach out to our India office</p>
                                        <motion.button onClick={() => setActiveCountry("in")} className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white shadow-xl" style={{ background: "linear-gradient(135deg, #1B5B6F, #2D8BA3)" }} whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(27, 91, 111, 0.4)" }} whileTap={{ scale: 0.95 }}>
                                            Contact India Office
                                        </motion.button>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="bg-gradient-to-r from-slate-900 via-teal-900 to-slate-900 py-6 sm:py-8 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-slate-200 text-xs sm:text-sm font-medium">
                        <span className="font-bold">🌍 Growing Globally:</span> We're expanding our presence worldwide. Stay tuned for updates on our new offices!
                    </p>
                </div>
            </div>
        </div>
    );
}