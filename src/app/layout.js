"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body>
        {/* Hide Navbar and Footer on home page */}
        {!isHomePage && <Navbar />}
        <PageTransition>{children}</PageTransition>
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}
