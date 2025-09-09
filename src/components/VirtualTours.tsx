import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Play, Languages, Headphones, Clock, Users } from "lucide-react";
import monasteryCourtyard from "@/assets/monastery-courtyard.jpg";
import monasteryInterior from "@/assets/monastery-interior.jpg";

const virtualTours = [
  {
    id: 1,
    title: "Rumtek Monastery: Sacred Halls",
    description: "Experience the grandeur of the main prayer hall with its golden Buddha statues and intricate murals",
    image: monasteryInterior,
    duration: "15 min",
    languages: 5,
    participants: 1247,
    type: "Interior Tour",
    featured: true
  },
  {
    id: 2,
    title: "Pemayangtse: Monastery Grounds",
    description: "Walk through the peaceful courtyards and explore the traditional Tibetan architecture",
    image: monasteryCourtyard,
    duration: "12 min",
    languages: 4,
    participants: 892,
    type: "Courtyard Tour",
    featured: true
  }
];

const features = [
  {
    icon: Camera,
    title: "360° Panoramic Views",
    description: "Immersive views of monastery interiors and surroundings"
  },
  {
    icon: Languages,
    title: "Multiple Languages",
    description: "Narrated walkthroughs in Nepali, Hindi, English, and more"
  },
  {
    icon: Headphones,
    title: "Audio Guides",
    description: "Expert commentary on history, architecture, and significance"
  }
];

export const VirtualTours = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Immersive Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Virtual <span className="text-primary">Tours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step inside sacred spaces from anywhere in the world with our 360° virtual tours 
            featuring expert narration and cultural insights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-golden transition-monastery">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tours */}
        <div className="grid lg:grid-cols-2 gap-8">
          {virtualTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-monastery transition-monastery group">
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-monastery"
                />
                <div className="absolute inset-0 bg-gradient-monastery opacity-60" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" variant="monastery" className="w-16 h-16 rounded-full opacity-80 hover:opacity-100">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
                
                {/* Tour Type Badge */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground">
                  {tour.type}
                </Badge>
                
                {tour.featured && (
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    Featured
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{tour.title}</h3>
                <p className="text-muted-foreground mb-4">{tour.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Languages className="w-4 h-4" />
                    <span>{tour.languages} languages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{tour.participants.toLocaleString()} views</span>
                  </div>
                </div>
                
                <Button className="w-full" variant="default">
                  <Camera className="mr-2" />
                  Start Virtual Tour
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Browse All Virtual Tours
          </Button>
        </div>
      </div>
    </section>
  );
};