import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Star } from "lucide-react";

const monasteries = [
  {
    id: 1,
    name: "Rumtek Monastery",
    location: "East Sikkim",
    established: "1740",
    type: "Kagyu",
    rating: 4.8,
    distance: "24 km from Gangtok",
    coordinates: { lat: 27.2926, lng: 88.5612 },
    featured: true
  },
  {
    id: 2,
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    established: "1705",
    type: "Nyingma",
    rating: 4.7,
    distance: "110 km from Gangtok",
    coordinates: { lat: 27.2082, lng: 88.2142 },
    featured: true
  },
  {
    id: 3,
    name: "Tashiding Monastery",
    location: "West Sikkim",
    established: "1641",
    type: "Nyingma",
    rating: 4.6,
    distance: "118 km from Gangtok",
    coordinates: { lat: 27.2532, lng: 88.1821 },
    featured: false
  },
  {
    id: 4,
    name: "Dubdi Monastery",
    location: "West Sikkim",
    established: "1701",
    type: "Nyingma",
    rating: 4.5,
    distance: "135 km from Gangtok",
    coordinates: { lat: 27.3355, lng: 88.2142 },
    featured: false
  }
];

export const MonasteryMap = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Interactive Exploration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Discover Sacred <span className="text-primary">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore geo-tagged monastery locations with travel routes, nearby attractions,
            and integration with local transport services
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] overflow-hidden shadow-elegant">
              <div className="relative h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-lg" />
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Navigate through Sikkim's monastery locations
                  </p>
                  <Button variant="default">
                    <Navigation className="mr-2" />
                    Launch Map View
                  </Button>
                </div>
                
                {/* Map Markers Preview */}
                <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="absolute top-32 right-32 w-3 h-3 bg-primary rounded-full animate-pulse delay-100" />
                <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-primary rounded-full animate-pulse delay-200" />
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary rounded-full animate-pulse delay-300" />
              </div>
            </Card>
          </div>

          {/* Monastery List */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Featured Monasteries</h3>
            {monasteries.map((monastery) => (
              <Card key={monastery.id} className="hover:shadow-monastery transition-monastery cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{monastery.name}</h4>
                    {monastery.featured && (
                      <Badge variant="secondary" className="text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{monastery.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Est. {monastery.established}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-accent" />
                      <span>{monastery.rating}</span>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="text-xs mb-3">
                    {monastery.type} Tradition
                  </Badge>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {monastery.distance}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            <Button variant="ghost" className="w-full">
              View All Monasteries
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};