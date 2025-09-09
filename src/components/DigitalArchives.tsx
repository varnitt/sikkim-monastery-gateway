import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Archive, Search, Download, BookOpen, ScrollText, Image, Cpu } from "lucide-react";

const archiveCategories = [
  {
    icon: ScrollText,
    title: "Ancient Manuscripts",
    count: "1,247",
    description: "Rare Buddhist texts and scriptures digitally preserved",
    color: "text-primary"
  },
  {
    icon: Image,
    title: "Sacred Murals",
    count: "856",
    description: "High-resolution scans of monastery wall paintings",
    color: "text-accent"
  },
  {
    icon: BookOpen,
    title: "Historical Documents",
    count: "623",
    description: "Chronicles and records of monastery history",
    color: "text-secondary-foreground"
  }
];

const featuredItems = [
  {
    id: 1,
    title: "Kangyur Manuscript Collection",
    monastery: "Rumtek Monastery",
    year: "17th Century",
    type: "Buddhist Scripture",
    language: "Tibetan",
    pages: "108 folios",
    description: "Rare collection of Buddhist canonical texts written in traditional Tibetan script on handmade paper"
  },
  {
    id: 2,
    title: "Tara Mandala Mural",
    monastery: "Pemayangtse Monastery",
    year: "18th Century",
    type: "Sacred Art",
    medium: "Natural Pigments",
    dimensions: "12x8 feet",
    description: "Intricate mandala depicting the 21 forms of Tara, goddess of compassion and protection"
  }
];

export const DigitalArchives = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Digital Preservation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sacred <span className="text-primary">Archives</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore digitally preserved manuscripts, murals, and historical documents 
            with AI-powered search and categorization for researchers and culture enthusiasts
          </p>
        </div>

        {/* Archive Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {archiveCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-golden transition-monastery">
              <CardContent className="pt-8 pb-6">
                <div className={`w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 ${category.color}`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{category.count}</div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Search Feature */}
        <Card className="mb-16 bg-gradient-to-r from-card to-secondary/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">AI-Powered Archive Search</h3>
                <p className="text-muted-foreground">Intelligent search and categorization of cultural artifacts</p>
              </div>
            </div>
            
            <div className="flex gap-3 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search manuscripts, murals, or historical documents..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>
              <Button variant="default">
                <Search className="mr-2" />
                Search
              </Button>
            </div>
            
            <div className="flex gap-2">
              <Badge variant="outline">Buddhist texts</Badge>
              <Badge variant="outline">Tibetan art</Badge>
              <Badge variant="outline">17th century</Badge>
              <Badge variant="outline">Monastery history</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Featured Archive Items */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-center">Featured Archive Items</h3>
          
          {featuredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-monastery transition-monastery">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center">
                      <Archive className="w-16 h-16 text-primary mx-auto mb-4" />
                      <Badge variant="secondary">{item.type}</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.monastery} • {item.year}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 w-4 h-4" />
                      Download
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-medium">Type:</span> {item.type}
                    </div>
                    <div>
                      <span className="font-medium">
                        {item.language ? 'Language:' : item.medium ? 'Medium:' : 'Era:'}
                      </span> {item.language || item.medium || item.year}
                    </div>
                    <div>
                      <span className="font-medium">
                        {item.pages ? 'Pages:' : 'Dimensions:'}
                      </span> {item.pages || item.dimensions}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <Button variant="default">
                      View Details
                    </Button>
                    <Button variant="outline">
                      Add to Collection
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            <Archive className="mr-2" />
            Explore All Archives
          </Button>
        </div>
      </div>
    </section>
  );
};