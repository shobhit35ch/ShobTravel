
import { memo } from "react";
import { motion } from "framer-motion";

const Hero = memo(() => {
  const scrollToAdventures = () => {
    const adventuresSection = document.getElementById('latest-adventures');
    adventuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/2be0e9f8-1ba3-4f39-b815-8e3a3122348d.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Explore the World
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join me on a journey of discovery, adventure, and budget-friendly travel tips
          </p>
          <button
            onClick={scrollToAdventures}
            className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Start Reading
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
});

export default Hero;
