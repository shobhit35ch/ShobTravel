
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-me');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-5xl md:text-7xl mb-6">
            Explore the World
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join me on a journey of discovery, adventure, and budget-friendly travel tips
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-all duration-300"
          >
            Start Reading
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Hero;
