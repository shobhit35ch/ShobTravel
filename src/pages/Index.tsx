
import { lazy, Suspense, memo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mountain, TreeDeciduous, Tent, Landmark, Compass, Cherry } from "lucide-react";


// Lazy-load the Hero component since it's a large visual element
const Hero = lazy(() => import("@/components/Hero"));

// Optimize adventure card with memoization
const AdventureCard = memo(({
  image,
  icon: Icon,
  location,
  title,
  description,
  slug
}: {
  image: string | null;
  icon: any;
  location: string;
  title: string;
  description: string;
  slug?: string;
}) => {
  const content = (
    <>
      <div className="aspect-video overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden"
            }}
          />
        ) : (
          <div className="w-full h-full bg-accent/20 flex items-center justify-center">
            <Icon className="h-12 w-12 text-accent/50" />
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
          <span className="text-xs sm:text-sm font-medium text-accent">{location}</span>
        </div>
        <h3 className="font-display text-lg sm:text-2xl text-primary mb-2">{title}</h3>
        <p className="text-primary/70 text-sm sm:text-base">{description}</p>
      </div>
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {slug ? (
        <Link to={`/blog/${slug}`} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </motion.div>
  );
});

const Index = () => {
  const adventures = [
    {
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop",
      icon: Cherry,
      location: "Tokyo, Japan",
      title: "Japan: From Neon Lights to Ancient Temples",
      description: "Exploring Tokyo's electric streets, Kyoto's serene temples, and the magic of cherry blossom season. An unforgettable journey through the Land of the Rising Sun.",
      slug: "japan-adventure-2025"
    },
    {
      image: "/lovable-uploads/05d07f01-1fcb-4671-ae21-0ad4391dcec5.png",
      icon: Landmark,
      location: "Rome, Italy",
      title: "Rome: Where History Meets Modern Magic",
      description: "Discover the eternal city's iconic fountains, ancient ruins, and vibrant street life. Every corner tells a story!",
      slug: "rome-eternal-city-2024"
    },
    {
      image: "/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png",
      icon: Mountain,
      location: "Alberta, Canada",
      title: "Banff: Where TikTok Dreams Come True",
      description: "Turquoise lakes, mountain views, and endless Instagram spots. Trust me, your feed needs this.",
      slug: "banff-memorial-weekend-2024"
    },
    {
      image: "/lovable-uploads/657f7f48-e0f7-4a9c-b259-4639c6b2b466.png",
      icon: Mountain,
      location: "Switzerland",
      title: "Grindelwald: Living Your Main Character Energy",
      description: "POV: You're in a Swiss fairy tale with epic mountain trails and cozy chalets. The vibes? Immaculate.",
      slug: "europe-adventure-2024"
    },
    {
      image: "/lovable-uploads/0a7d72a8-4cde-4699-8415-86af428a1795.png",
      icon: Compass,
      location: "Guatemala",
      title: "Full Send to Lake Atitlan",
      description: "Volcanic views, crystal waters, and jungle vibes. This hidden gem needs to be on your bucket list ASAP.",
      slug: "guatemala-lake-atitlan-2024"
    },
    {
      image: "/lovable-uploads/79cfbd3b-0e2d-40e5-a010-bd2c7e085db9.png",
      icon: TreeDeciduous,
      location: "Italy",
      title: "Lake Como: Not Your Regular Lake Day",
      description: "Fancy boats, historic villas, and that Italian lifestyle you've been dreaming about. Major flex incoming.",
    },
    {
      image: "/lovable-uploads/23fa8958-0bc3-47d8-a42d-d07ca1eb5335.png",
      icon: Tent,
      location: "Nevada, USA",
      title: "Red Rocks: Beyond Vegas Vibes",
      description: "Swap the slots for sunset climbs and desert camping. The real Vegas experience no one talks about.",
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <Suspense fallback={<div className="h-[70vh] md:h-screen bg-gray-100" />}>
        <Hero />
      </Suspense>

      <motion.section
        id="latest-adventures"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-12 sm:py-16 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-2xl sm:text-3xl md:text-4xl text-primary mb-8 md:mb-12">
            Latest Adventures
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {adventures.map((adventure, index) => (
              <AdventureCard
                key={index}
                image={adventure.image}
                icon={adventure.icon}
                location={adventure.location}
                title={adventure.title}
                description={adventure.description}
                slug={adventure.slug}
              />
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default memo(Index);
