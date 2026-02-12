import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import BioStatsSection from "@/components/BioStatsSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CredibilityBar />
        <BioStatsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
