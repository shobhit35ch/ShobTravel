import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, PlaneTakeoff } from "lucide-react";

const Destinations = () => {
  const visitedCountries = [
    {
      id: "japan",
      country: "Japan",
      description: "From neon-lit Tokyo to ancient Kyoto temples and Osaka's food scene",
      places: [
        { name: "Tokyo", description: "Shibuya Crossing, Akihabara, TeamLab Borderless, and Meiji Shrine" },
        { name: "Kyoto", description: "Fushimi Inari, Kinkaku-ji, Arashiyama Bamboo Grove" },
        { name: "Osaka", description: "Dotonbori street food, Osaka Castle, Shinsekai district" },
        { name: "Mount Fuji", description: "Day trip to Kawaguchiko for iconic Fuji views" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "canada",
      country: "Canada",
      description: "Explored the breathtaking Canadian Rockies and vibrant cities",
      places: [
        { name: "Banff National Park", description: "Home to the stunning Moraine Lake and incredible mountain landscapes" },
        { name: "Jasper National Park", description: "Wild beauty with glaciers and wildlife" },
        { name: "Vancouver", description: "Beautiful coastal city surrounded by mountains" }
      ],
      imageUrl: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png"
    },
    {
      id: "italy",
      country: "Italy",
      description: "Discovered ancient history, art, and incredible cuisine",
      places: [
        { name: "Rome", description: "Explored the Colosseum, Vatican City, and ancient ruins" },
        { name: "Florence", description: "Immersed in Renaissance art and Tuscan culture" },
        { name: "Venice", description: "Navigated the romantic canals and historic streets" }
      ],
      imageUrl: "/lovable-uploads/05d07f01-1fcb-4671-ae21-0ad4391dcec5.png"
    },
    {
      id: "united-states",
      country: "United States",
      description: "Ventured through diverse landscapes and vibrant cities",
      places: [
        { name: "Yellowstone National Park", description: "Witnessed geothermal wonders and wildlife" },
        { name: "New York City", description: "Experienced the energy of the Big Apple" },
        { name: "Grand Canyon", description: "Marveled at one of nature's greatest wonders" }
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      id: "iceland",
      country: "Iceland",
      description: "Experienced the land of fire and ice",
      places: [
        { name: "Blue Lagoon", description: "Relaxed in geothermal waters surrounded by lava fields" },
        { name: "Golden Circle", description: "Explored waterfalls, geysers, and tectonic plates" },
        { name: "Reykjavik", description: "Discovered the world's northernmost capital" }
      ],
      imageUrl: "/lovable-uploads/a0c8d7e6-a4a6-4e47-913b-d212f9ade26d.png"
    },
    {
      id: "guatemala",
      country: "Guatemala",
      description: "Explored stunning landscapes and vibrant culture",
      places: [
        { name: "Lake Atitlan", description: "Stunning lake surrounded by volcanoes and Mayan villages" },
        { name: "Panajachel", description: "Gateway town to Lake Atitlan with local markets" },
        { name: "Casa Verapaz", description: "Beautiful accommodations with amazing lake views" }
      ],
      imageUrl: "/lovable-uploads/2be0e9f8-1ba3-4f39-b815-8e3a3122348d.png"
    }
  ];

  const bucketList = [
    { name: "Santorini, Greece", description: "Dream of experiencing the iconic white buildings and Mediterranean sunsets." },
    { name: "New Zealand", description: "Aspire to explore both islands and their diverse landscapes." }
  ];

  const upcomingTrips = [
    {
      country: "France",
      description: "Looking forward to experiencing French cuisine and culture",
      places: [
        { name: "Paris", description: "The city of lights with iconic architecture" },
        { name: "French Riviera", description: "Beautiful Mediterranean coastline" },
        { name: "Provence", description: "Picturesque countryside and lavender fields" }
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      country: "Portugal",
      description: "Excited to explore charming cities and coastal landscapes",
      places: [
        { name: "Lisbon", description: "Historic city with colorful streets and trams" },
        { name: "Porto", description: "Riverside city famous for port wine" },
        { name: "Algarve", description: "Stunning beaches and dramatic cliffs" }
      ],
      imageUrl: "/placeholder.svg"
    },
    {
      country: "Spain",
      description: "Anticipating vibrant culture, architecture, and cuisine",
      places: [
        { name: "Barcelona", description: "Gaudi's masterpieces and Mediterranean beaches" },
        { name: "Madrid", description: "The capital with world-class museums and food" },
        { name: "Seville", description: "Andalusian charm with Moorish influences" }
      ],
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-20 md:pt-32 pb-16 flex-1"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-12">My Travel Map</h1>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="visited">
              <AccordionTrigger className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                Where I've Been
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4">
                  {visitedCountries.map((country, index) => (
                    <Link key={index} to={`/country/${country.id}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={country.imageUrl}
                            alt={country.country}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 sm:p-6">
                          <h3 className="font-display text-lg sm:text-xl text-primary mb-2">{country.country}</h3>
                          <p className="text-primary/70 text-sm mb-4">{country.description}</p>
                          <div className="space-y-3">
                            {country.places.map((place, placeIndex) => (
                              <div key={placeIndex} className="border-l-2 border-accent pl-3">
                                <h4 className="font-medium text-primary text-sm">{place.name}</h4>
                                <p className="text-primary/70 text-xs sm:text-sm">{place.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="upcoming">
              <AccordionTrigger className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <PlaneTakeoff className="h-5 w-5 flex-shrink-0" />
                Where I'm Going
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4">
                  {upcomingTrips.map((trip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={trip.imageUrl}
                          alt={trip.country}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="font-display text-lg sm:text-xl text-primary mb-2">{trip.country}</h3>
                        <p className="text-primary/70 text-sm mb-4">{trip.description}</p>
                        <div className="space-y-3">
                          {trip.places.map((place, placeIndex) => (
                            <div key={placeIndex} className="border-l-2 border-accent pl-3">
                              <h4 className="font-medium text-primary text-sm">{place.name}</h4>
                              <p className="text-primary/70 text-xs sm:text-sm">{place.description}</p>
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
              <AccordionTrigger className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                Where I Want to Go
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-2 sm:p-4">
                  {bucketList.map((place, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4">
                      <h3 className="font-display text-lg text-primary">{place.name}</h3>
                      <p className="text-primary/70 mt-1 text-sm">{place.description}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Destinations;
