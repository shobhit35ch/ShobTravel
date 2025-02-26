
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin } from "lucide-react";

const AboutMe = () => {
  const visitedCountries = [
    {
      country: "Canada",
      description: "Explored the breathtaking Canadian Rockies and vibrant cities",
      places: [
        { name: "Banff National Park", description: "Home to the stunning Moraine Lake and incredible mountain landscapes" },
        { name: "Jasper National Park", description: "Wild beauty with glaciers and wildlife" },
        { name: "Vancouver", description: "Beautiful coastal city surrounded by mountains" }
      ],
      imageUrl: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png" // Using your Moraine Lake image for Canada
    }
  ];

  const bucketList = [
    { name: "Santorini, Greece", description: "Dream of experiencing the iconic white buildings and Mediterranean sunsets." },
    { name: "New Zealand", description: "Aspire to explore both islands and their diverse landscapes." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-32 pb-16"
      >
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="w-80 h-96 bg-accent/20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png"
                alt="Shobhit at Moraine Lake"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="font-display text-4xl text-primary mb-6">About Me</h1>
              <p className="text-primary/80 text-lg leading-relaxed mb-8">
                Hey there! I'm Shobhit, a 24-year-old travel enthusiast who believes 
                that exploring the world shouldn't drain your savings. Through my 
                journeys across different continents, I've mastered the art of 
                budget-friendly travel while creating unforgettable memories.
              </p>
            </div>
          </div>

          {/* Travel Experiences Accordion */}
          <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="visited">
                <AccordionTrigger className="flex items-center gap-2 text-xl">
                  <MapPin className="h-5 w-5" />
                  Where I've Been
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    {visitedCountries.map((country, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="h-48 overflow-hidden">
                          <img
                            src={country.imageUrl}
                            alt={country.country}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-xl text-primary mb-2">{country.country}</h3>
                          <p className="text-primary/70 text-sm mb-4">{country.description}</p>
                          <div className="space-y-3">
                            {country.places.map((place, placeIndex) => (
                              <div key={placeIndex} className="border-l-2 border-accent pl-3">
                                <h4 className="font-medium text-primary">{place.name}</h4>
                                <p className="text-primary/70 text-sm">{place.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bucket-list">
                <AccordionTrigger className="flex items-center gap-2 text-xl">
                  <MapPin className="h-5 w-5" />
                  Where I Want to Go
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 p-4">
                    {bucketList.map((place, index) => (
                      <div key={index} className="border-l-2 border-accent pl-4">
                        <h3 className="font-display text-lg text-primary">{place.name}</h3>
                        <p className="text-primary/70 mt-1">{place.description}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
