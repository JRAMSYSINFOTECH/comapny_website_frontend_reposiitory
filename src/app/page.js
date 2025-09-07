import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at top */}
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        {/* Your actual content goes here */}
      </main>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
