"use client";
import { useEffect, useState } from "react";

export default function LiveNowBanner() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="text-center p-8 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl shadow-2xl animate-pulse">
        <h1 className="text-4xl font-bold mb-4">🔴 Go Live Now</h1>
        <p className="text-2xl">
          {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
}
