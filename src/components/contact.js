'use client';
import React, { useEffect, useState } from "react"
import * as yup from 'yup';
export default function Contact() {
    const [first_place, setFirstplace] = useState("in")
    const [cChange, setCChange] = useState([])
    const [animateAgain, SetanimateAgain] = useState(0)
    // const contactValues = 
    // const contactObj = yup.object().shape({

    // })
    const countryMapsSrc = {
        in: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487297.09110756894!2d77.78407256221801!3d17.411378560043865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2suk!4v1761616990274!5m2!1sen!2suk",
        uk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77875.66339520458!2d-1.5973183726034648!3d52.41366291035289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b151656e22b7%3A0x4f660f5564f0689!2sCoventry!5e0!3m2!1sen!2suk!4v1761613259494!5m2!1sen!2suk",
        us: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795828!2d-119.80930249999994!3d44.24236485000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2suk!4v1761617122302!5m2!1sen!2suk"
    }
    const countryEmail = {
        in: "abcd@jramsys.co.in",
        uk: "efgh@jramsys.co.uk",
        us: "ijkl@jramsys.co.us"
    }
    const countryPhone = {
        in: "+91 1234567890",
        uk: "+44 1234567890",
        us: "+1 1234567890"
    }
    const changeContry = () => {        
        var setItem = []
        setItem.push(
            <div key={animateAgain} className="transition-all animate-zoomIn">
                <div className="w-full flex justify-center">
                    <div className="w-10/12 flex gap-10 p-5">
                        <div className="bg-white/50 rounded-lg py-5 px-20 flex flex-col justify-center shadow-md items-center">
                            <svg fill="#008236" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" /></svg>
                            <span className="text-black font-semibold">Email</span>
                            <span className="text-black">{countryEmail[first_place]}</span>
                        </div>
                        <div className="bg-white/50 rounded-lg py-5 px-20 flex flex-col justify-center shadow-md items-center">
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#008236" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#008236" />
                            </svg>
                            <span className="text-black font-semibold">Call Us</span>
                            <span className="text-black">{countryPhone[first_place]}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <div className="w-10/12 flex gap-5 p-5">
                        <div className="w-3/6 h-full">
                            <iframe className="rounded-lg" width="100%" height="100%" src={countryMapsSrc[first_place]} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="w-3/6 p-8 rounded-lg flex flex-col gap-3 shadow-md">
                            <fieldset className="w-full h-14 rounded-lg border-2 border-gray-200 focus-within:border-green-600 transition-all"><input className="w-full p-3 outline-none" placeholder="Name"></input></fieldset>
                            <fieldset className="w-full h-14 rounded-lg border-2 border-gray-200 focus-within:border-green-600 transition-all"><input className="w-full p-3 outline-none" placeholder="Email"></input></fieldset>
                            <fieldset className="w-full h-50 rounded-lg border-2 border-gray-200 focus-within:border-green-600 transition-all"><textarea className="w-full outline-none p-3 resize-none" rows="7" placeholder="Message"></textarea></fieldset>
                            <button className="w-full p-4 bg-green-600 rounded-lg text-white font-semibold cursor-pointer hover:bg-green-700 outline-none">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        setCChange(setItem)
    }
    useEffect(() => {
        SetanimateAgain(prev => prev + 1)
        changeContry()
    },[first_place])
    return (
        <div className="w-full h-full p-5 border-black">
            <div className="w-full flex justify-center items-center gap-10">
                <p onClick={() => setFirstplace("in")} className={`relative m-10 group hover:cursor-pointer font-semibold ${first_place === "in" ? "text-green-800" : "hover:text-green-800"}`}>
                    <span>India</span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:transition-all duration-200 ease-in-out ${first_place === "in" ? "w-full" : "group-hover:w-full"}`}></span>
                </p>
                <p onClick={() => setFirstplace("uk")} className={`relative m-10 group hover:cursor-pointer font-semibold ${first_place === "uk" ? "text-green-800" : "hover:text-green-800"}`}>
                    <span>United Kingdom</span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:transition-all duration-200 ease-in-out ${first_place === "uk" ? "w-full" : "group-hover:w-full"}`}></span>
                </p>
                <p onClick={() => setFirstplace("us")} className={`relative m-10 group hover:cursor-pointer font-semibold ${first_place === "us" ? "text-green-800" : "hover:text-green-800"}`}>
                    <span>United States</span>
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:transition-all duration-200 ease-in-out ${first_place === "us" ? "w-full" : "group-hover:w-full"}`}></span>
                </p>
            </div>
            {cChange}
        </div>
    )
}