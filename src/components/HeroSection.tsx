import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Camera, Archive } from "lucide-react";
import monasteryHero from "@/assets/monastery-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${monasteryHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-monastery" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-xs backdrop-blur-sm bg-white/10 border-white/20">
            Government of Sikkim
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-xs backdrop-blur-sm bg-white/10 border-white/20">
            Tourism Department
          </Badge>
        </div>
        
        <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm backdrop-blur-sm bg-white/10 border-white/20">
          Digital Heritage Platform
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Monastery<span className="text-accent">360</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed">
          Discover the Sacred Heritage of Sikkim's Monasteries
        </p>
        
        <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
          Immerse yourself in over 200 ancient monasteries through virtual tours, 
          interactive maps, and digital archives preserving centuries of spiritual wisdom
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            <Camera className="mr-2" />
            Explore Virtual Tours
          </Button>
          <Button variant="monastery" size="lg" className="px-8 py-6 text-lg">
            <MapPin className="mr-2" />
            Interactive Map
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-accent">200+</div>
            <div className="text-sm opacity-90">Monasteries</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-accent">17th</div>
            <div className="text-sm opacity-90">Century Heritage</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-accent">360°</div>
            <div className="text-sm opacity-90">Virtual Tours</div>
          </div>
          <div className="backdrop-blur-sm bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="text-3xl font-bold text-accent">Cultural</div>
            <div className="text-sm opacity-90">Preservation</div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Icons */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-3">
        <Button size="icon" variant="monastery" className="w-12 h-12 rounded-full">
          <Calendar className="w-5 h-5" />
        </Button>
        <Button size="icon" variant="monastery" className="w-12 h-12 rounded-full">
          <Archive className="w-5 h-5" />
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};