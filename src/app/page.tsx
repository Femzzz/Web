import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Events from "@/components/Events";
import ExcoSection from "@/components/ExcoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Disciplines />
        <Events />
        <ExcoSection />
      </main>
      <Footer />
    </div>
  );
}