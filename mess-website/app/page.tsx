import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Join } from "@/components/Join";
import { Navbar } from "@/components/Navbar";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { WhatWeOffer } from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] text-cougar-charcoal antialiased">
      <Navbar />
      <Hero />
      <About />
      <WhatWeOffer />
      <Stats />
      <Team />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}
