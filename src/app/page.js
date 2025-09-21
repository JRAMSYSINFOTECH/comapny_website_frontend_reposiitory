import Navbar from "../components/Navbar";
import LiveNowBanner from "../components/LiveNowBanner";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Go Live Banner*/}
      <LiveNowBanner />
    </div>
  );
}
