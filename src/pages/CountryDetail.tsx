
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Place {
  name: string;
  description: string;
}

interface CountryData {
  country: string;
  description: string;
  places: Place[];
  imageUrl: string;
  detailedDescription?: string;
  gallery?: string[];
}

const CountryDetail = () => {
  const { countryId } = useParams();

  // This would ideally come from a database, but for now we'll hardcode it
  const countriesData: Record<string, CountryData> = {
    japan: {
      country: "Japan",
      description: "From neon-lit Tokyo to ancient Kyoto temples and Osaka's legendary food scene",
      places: [
        { name: "Tokyo", description: "Explored Shibuya Crossing, Akihabara's electric town, TeamLab Borderless, and the peaceful Meiji Shrine" },
        { name: "Kyoto", description: "Walked through thousands of torii gates at Fushimi Inari, visited the Golden Pavilion, and biked through the Bamboo Grove" },
        { name: "Osaka", description: "Devoured takoyaki and okonomiyaki in Dotonbori, explored Osaka Castle, and experienced Shinsekai's retro charm" },
        { name: "Mount Fuji", description: "Day trip to Kawaguchiko for the most incredible sunset views of Japan's iconic peak" }
      ],
      imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
      detailedDescription: "Japan was an absolute dream trip. Two weeks of exploring the perfect blend of ultra-modern cities and ancient traditions. Tokyo's energy is unmatched, Kyoto's temples are breathtaking, and Osaka's food scene is next level. Every moment felt like stepping into a different world - from the serene bamboo groves to the neon-drenched streets of Shinjuku. The JR Pass made getting around a breeze, and the people were incredibly welcoming.",
      gallery: [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1470&auto=format&fit=crop"
      ]
    },
    italy: {
      country: "Italy",
      description: "Discovered ancient history, art, and incredible cuisine",
      places: [
        { name: "Rome", description: "Explored the Colosseum, Vatican City, and the stunning Trevi Fountain" },
        { name: "Florence", description: "Immersed in Renaissance art and Tuscan culture" },
        { name: "Venice", description: "Navigated the romantic canals and historic streets" }
      ],
      imageUrl: "/lovable-uploads/05d07f01-1fcb-4671-ae21-0ad4391dcec5.png",
      detailedDescription: "Italy is a country that captures your heart with its rich history, stunning architecture, and incredible food culture. From the ancient ruins of Rome to the artistic legacy of Florence, every city tells its own unique story through centuries of history, art, and culture.",
      gallery: ["/lovable-uploads/05d07f01-1fcb-4671-ae21-0ad4391dcec5.png"]
    },
    iceland: {
      country: "Iceland",
      description: "Experienced the land of fire and ice",
      places: [
        { name: "Blue Lagoon", description: "Relaxed in geothermal waters surrounded by lava fields" },
        { name: "Golden Circle", description: "Explored waterfalls, geysers, and tectonic plates" },
        { name: "Reykjavik", description: "Discovered the world's northernmost capital" }
      ],
      imageUrl: "/lovable-uploads/a0c8d7e6-a4a6-4e47-913b-d212f9ade26d.png",
      detailedDescription: "Iceland is truly a land of contrasts, where fire meets ice and nature puts on an unforgettable show. From the therapeutic waters of the Blue Lagoon to the raw power of its waterfalls, every day brought new wonders.",
      gallery: ["/lovable-uploads/a0c8d7e6-a4a6-4e47-913b-d212f9ade26d.png"]
    }
  };

  const countryData = countryId ? countriesData[countryId] : null;

  if (!countryData) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-display text-primary">Country not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 pt-20 md:pt-32 pb-16 flex-1"
      >
        <Link
          to="/destinations"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Destinations
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-display text-primary mb-6">{countryData.country}</h1>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
            <img
              src={countryData.imageUrl}
              alt={countryData.country}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg text-primary/80 mb-8">
            {countryData.detailedDescription}
          </p>

          <h2 className="text-xl md:text-2xl font-display text-primary mb-6">Places Visited</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {countryData.places.map((place, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-display text-primary mb-2">{place.name}</h3>
                <p className="text-primary/70">{place.description}</p>
              </motion.div>
            ))}
          </div>

          {countryData.gallery && countryData.gallery.length > 0 && (
            <>
              <h2 className="text-xl md:text-2xl font-display text-primary my-8">Photo Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countryData.gallery.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${countryData.country} gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CountryDetail;
