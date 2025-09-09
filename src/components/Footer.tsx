import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Archive, MapPin, Camera, Calendar, Mail, Phone, Globe, Heart } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "Virtual Tours", icon: Camera },
    { name: "Interactive Map", icon: MapPin },
    { name: "Cultural Calendar", icon: Calendar },
    { name: "Digital Archives", icon: Archive },
  ];

  const contact = [
    { label: "Email", value: "info@monastery360.com", icon: Mail },
    { label: "Phone", value: "+91 98765 43210", icon: Phone },
    { label: "Website", value: "monastery360.com", icon: Globe },
  ];

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Archive className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Monastery<span className="text-accent">360</span>
                </h3>
                <Badge variant="secondary" className="text-xs">
                  Digital Heritage Platform
                </Badge>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Preserving and showcasing the sacred heritage of Sikkim's monasteries 
              through immersive digital experiences and cultural preservation.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Made with love for cultural preservation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href="#" className="flex items-center gap-2 text-white/80 hover:text-accent transition-smooth">
                    <link.icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-smooth">Our Mission</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Cultural Impact</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Community Partners</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Research & Education</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Tourism Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              {contact.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-xs text-white/60">{item.label}</p>
                    <p className="text-white/80">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Get Updates</h5>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-sm backdrop-blur-sm placeholder:text-white/50 focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Monastery360. Preserving Sikkim's sacred heritage for future generations.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-smooth">Accessibility</a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-white/20">
            <p className="text-white/50 text-sm">
              Supported by the Government of Sikkim • Tourism Department • Cultural Heritage Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};