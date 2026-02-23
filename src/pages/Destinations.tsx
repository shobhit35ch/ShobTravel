import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, PlaneTakeoff, Star } from "lucide-react";

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4 }
    })
  };

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
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary mb-4">My Travel Map</h1>
          <p className="text-primary/60 text-sm sm:text-base mb-16">A living record of where I've been, where I'm headed, and where I dream of going.</p>

          {/* Where I've Been */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary">Where I've Been</h2>
                <p className="text-primary/50 text-xs sm:text-sm">{visitedCountries.length} countries explored</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {visitedCountries.map((country, index) => (
                <Link key={index} to={`/country/${country.id}`}>
                  <motion.div
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-200"
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
          </motion.section>

          {/* Divider */}
          <div className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/10" />
            </div>
          </div>

          {/* Where I'm Going */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <PlaneTakeoff className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary">Where I'm Going</h2>
                <p className="text-primary/50 text-xs sm:text-sm">{upcomingTrips.length} trips on the horizon</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {upcomingTrips.map((trip, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-200"
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
          </motion.section>

          {/* Divider */}
          <div className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/10" />
            </div>
          </div>

          {/* Where I Want to Go */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-primary">Where I Want to Go</h2>
                <p className="text-primary/50 text-xs sm:text-sm">The dream list</p>
              </div>
            </div>

            <div className="space-y-4">
              {bucketList.map((place, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-accent hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-display text-lg sm:text-xl text-primary mb-1">{place.name}</h3>
                  <p className="text-primary/70 text-sm">{place.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Destinations;
