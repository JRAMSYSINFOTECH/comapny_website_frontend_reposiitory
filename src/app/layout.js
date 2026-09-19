import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "JRAMSYS Infotech | AI, Cloud & IoT Solutions for Modern Businesses",
  description:
    "JRAMSYS Infotech builds AI-powered, cloud-native, and automation-driven solutions — predictive analytics, IoT workflow automation, cloud migration, and custom software for every industry.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}