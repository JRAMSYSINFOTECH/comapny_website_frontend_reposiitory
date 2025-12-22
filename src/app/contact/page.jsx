'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";

const brandTeal = "#1B5B6F";
const brandLight = "#2D8BA3";

export default function Contact() {
    const [activeCountry, setActiveCountry] = useState("in");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const countryData = {
        in: {
            name: "India",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487297.09110756894!2d77.78407256221801!3d17.411378560043865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2suk!4v1761616990274!5m2!1sen!2suk",
            email: "abcd@officejram@gmail.com",
            phone: "+91 1234567890",
            address: "Hyderabad, Telangana, India"
        },
        uk: {
            name: "United Kingdom",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77875.66339520458!2d-1.5973183726034648!3d52.41366291035289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151656e22b7%3A0x4f660f5564f0689!2sCoventry!5e0!3m2!1sen!2suk!4v1761613259494!5m2!1sen!2suk",
            email: "efgh@officejram@gmail.com",
            phone: "+44 1234567890",
            address: "Coventry, United Kingdom"
        },
        us: {
            name: "United States",
            mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.80930249999994!3d44.24236485000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2suk!4v1761617122302!5m2!1sen!2suk",
            email: "officejram@gmail.com",
            phone: "+1 1234567890",
            address: "United States"
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        const formData = { name, email, message, country: activeCountry };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            
            const data = await res.json();
            
            if (!res.ok) throw new Error(data.message);
            
            alert("Message sent successfully! We will get back to you shortly.");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            alert(err.message || "Failed to send message. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-teal-900 to-cyan-900 py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
                            We'd love to hear from you. Choose your location and reach out to us.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Country Selector */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex justify-center gap-8">
                        {Object.entries(countryData).map(([code, data]) => (
                            <button
                                key={code}
                                onClick={() => setActiveCountry(code)}
                                className={`relative px-8 py-3 font-bold text-lg transition-colors ${
                                    activeCountry === code
                                        ? "text-white"
                                        : "text-gray-600 hover:text-teal-600"
                                }`}
                            >
                                {activeCountry === code && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-xl"
                                        style={{ backgroundColor: brandTeal }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{data.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    key={activeCountry}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-cyan-400 hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-400 to-teal-500">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: brandTeal }}>Email</h3>
                            <a href={`mailto:${countryData[activeCountry].email}`} className="text-gray-600 hover:text-teal-600 transition-colors">
                                {countryData[activeCountry].email}
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-cyan-400 hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.4217 18.7584L19.0011 20.254C18.6399 20.6343 18.1917 20.9122 17.6763 20.9631C16.0468 21.1239 12.0621 20.9462 7.81536 16.4752C3.81071 12.259 3.09304 8.64546 3.00289 6.96594C2.96765 6.30945 3.25823 5.71766 3.69185 5.26114L5.26145 3.60864C6.13596 2.68795 7.61028 2.8305 8.37326 3.90961L9.63424 5.6931C10.2507 6.56497 10.1841 7.75924 9.47752 8.50311L9.1907 8.80507C9.1907 8.80507 8.10812 9.94484 11.0631 13.0559C14.0181 16.167 15.1007 15.0272 15.1007 15.0272L15.5562 14.5477C16.1858 13.8848 17.1672 13.7486 17.9728 14.2123L19.8833 15.312C21.1102 16.0182 21.3806 17.7489 20.4217 18.7584Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: brandTeal }}>Phone</h3>
                            <a href={`tel:${countryData[activeCountry].phone}`} className="text-gray-600 hover:text-teal-600 transition-colors">
                                {countryData[activeCountry].phone}
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl border-2 border-gray-200 p-8 text-center hover:border-cyan-400 hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-600">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2" style={{ color: brandTeal }}>Location</h3>
                            <p className="text-gray-600">
                                {countryData[activeCountry].address}
                            </p>
                        </motion.div>
                    </div>

                    {/* Map and Form */}
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="h-[600px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg"
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src={countryData[activeCountry].mapSrc}
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg"
                        >
                            <h2 className="text-3xl font-bold mb-2" style={{ color: brandTeal }}>
                                Send us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: brandTeal }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-gray-900"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: brandTeal }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-gray-900"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-2" style={{ color: brandTeal }}>
                                        Message
                                    </label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        rows="6"
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors resize-none text-gray-900"
                                        placeholder="Tell us how we can help..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all hover:scale-105"
                                    style={{ backgroundColor: brandTeal }}
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}