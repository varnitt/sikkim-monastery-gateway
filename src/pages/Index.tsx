import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { VirtualTours } from "@/components/VirtualTours";
import { MonasteryMap } from "@/components/MonasteryMap";
import { CulturalCalendar } from "@/components/CulturalCalendar";
import { DigitalArchives } from "@/components/DigitalArchives";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <section id="tours">
          <VirtualTours />
        </section>
        <section id="map">
          <MonasteryMap />
        </section>
        <section id="events">
          <CulturalCalendar />
        </section>
        <section id="archives">
          <DigitalArchives />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
