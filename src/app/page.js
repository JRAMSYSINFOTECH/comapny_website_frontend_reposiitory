import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">JRAMSYS INFOTECH</h1>
     <Navbar />

      <h1>About us</h1>
    </div>
  );
}