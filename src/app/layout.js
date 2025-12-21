"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
=======
      <body className="w-screen overflow-none bg-gray-100">
        {children}
>>>>>>> 14e68cedbfa6dfeeb259b39fbecb18b82d2a0efd
      </body>
    </html>
  );
}
