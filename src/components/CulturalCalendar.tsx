import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Losar Festival",
    monastery: "Rumtek Monastery",
    date: "February 24, 2024",
    time: "6:00 AM - 6:00 PM",
    type: "Religious Festival",
    participants: "All Welcome",
    description: "Tibetan New Year celebration with traditional dances, prayers, and cultural performances",
    status: "upcoming",
    bookable: true
  },
  {
    id: 2,
    title: "Hemis Festival",
    monastery: "Hemis Monastery",
    date: "June 15, 2024",
    time: "9:00 AM - 5:00 PM",
    type: "Cultural Festival",
    participants: "Tourists Welcome",
    description: "Annual mask dance festival celebrating Guru Padmasambhava's birthday",
    status: "upcoming",
    bookable: true
  },
  {
    id: 3,
    title: "Evening Prayer Ceremony",
    monastery: "Pemayangtse Monastery",
    date: "Daily",
    time: "6:00 PM - 7:00 PM",
    type: "Daily Ritual",
    participants: "Observers Welcome",
    description: "Traditional evening prayers and meditation session open to visitors",
    status: "ongoing",
    bookable: false
  },
  {
    id: 4,
    title: "Meditation Retreat",
    monastery: "Tashiding Monastery",
    date: "March 10-17, 2024",
    time: "5:00 AM - 9:00 PM",
    type: "Spiritual Retreat",
    participants: "Limited to 20",
    description: "7-day silent meditation retreat guided by experienced monks",
    status: "upcoming",
    bookable: true
  }
];

export const CulturalCalendar = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Cultural Events
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Events & <span className="text-primary">Festivals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join authentic spiritual ceremonies, colorful festivals, and cultural events. 
            Book your participation in advance for an immersive cultural experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-monastery transition-monastery">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant={event.status === 'upcoming' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {event.status === 'upcoming' ? 'Upcoming' : 'Ongoing'}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {event.type}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{event.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium text-foreground">{event.monastery}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    Learn More
                  </Button>
                  {event.bookable && (
                    <Button variant="default" className="flex-1">
                      <Ticket className="mr-2 w-4 h-4" />
                      Book Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            <Calendar className="mr-2" />
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};