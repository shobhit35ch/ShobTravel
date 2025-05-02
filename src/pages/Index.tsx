
import { lazy, Suspense, memo } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mountain, TreeDeciduous, Tent, Landmark } from "lucide-react";

// Lazy-load the Hero component since it's a large visual element
const Hero = lazy(() => import("@/components/Hero"));

// Optimize adventure card with memoization
const AdventureCard = memo(({ 
  image, 
  icon: Icon, 
  location, 
  title, 
  description 
}: { 
  image: string | null; 
  icon: any; 
  location: string; 
  title: string; 
  description: string;
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-video overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="w-full h-full bg-accent/20" />
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-5 w-5 text-accent" />
        <span className="text-sm font-medium text-accent">{location}</span>
      </div>
      <h3 className="font-display text-2xl text-primary mb-2">{title}</h3>
      <p className="text-primary/70">{description}</p>
    </div>
  </motion.div>
));

const Index = () => {
  const adventures = [
    {
      image: "/lovable-uploads/05d07f01-1fcb-4671-ae21-0ad4391dcec5.png",
      icon: Landmark,
      location: "Rome, Italy",
      title: "Rome: Where History Meets Modern Magic",
      description: "Discover the eternal city's iconic fountains, ancient ruins, and vibrant street life. Every corner tells a story! 🏛️ #WhenInRome"
    },
    {
      image: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png",
      icon: Mountain,
      location: "Alberta, Canada",
      title: "Banff: Where TikTok Dreams Come True",
      description: "Turquoise lakes, mountain views, and endless Instagram spots. Trust me, your feed needs this. 🏔️ #nofilterneeded"
    },
    {
      image: "/lovable-uploads/657f7f48-e0f7-4a9c-b259-4639c6b2b466.png",
      icon: Mountain,
      location: "Switzerland",
      title: "Grindelwald: Living Your Main Character Energy",
      description: "POV: You're in a Swiss fairy tale with epic mountain trails and cozy chalets. The vibes? Immaculate. ✨ #swissalps"
    },
    {
      image: null,
      icon: TreeDeciduous,
      location: "Italy",
      title: "Lake Como: Not Your Regular Lake Day",
      description: "Fancy boats, historic villas, and that Italian lifestyle you've been dreaming about. Major flex incoming. 🇮🇹 #dolcevita"
    },
    {
      image: null,
      icon: Tent,
      location: "Nevada, USA",
      title: "Red Rocks: Beyond Vegas Vibes",
      description: "Swap the slots for sunset climbs and desert camping. The real Vegas experience no one talks about. 🏜️ #outdoorvibes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Suspense fallback={<div className="h-screen bg-gray-100" />}>
        <Hero />
      </Suspense>
      
      <motion.section
        id="latest-adventures"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-32"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-4xl text-primary mb-12">
            Latest Adventures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {adventures.map((adventure, index) => (
              <AdventureCard 
                key={index}
                image={adventure.image}
                icon={adventure.icon}
                location={adventure.location}
                title={adventure.title}
                description={adventure.description}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default memo(Index);
