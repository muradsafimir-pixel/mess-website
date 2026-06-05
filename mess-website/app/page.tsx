import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
import { Navbar } from "@/components/Navbar";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] text-cougar-charcoal">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}
