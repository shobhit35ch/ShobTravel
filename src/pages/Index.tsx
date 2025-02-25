
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-accent uppercase tracking-wider font-medium">
            About Me
          </span>
          <h2 className="mt-2 font-display text-4xl text-primary mb-6">
            Hello, I'm [Your Name]
          </h2>
          <p className="text-primary/80 text-lg leading-relaxed">
            At 24, I've discovered that travel doesn't have to break the bank. 
            Through my adventures across continents, I've mastered the art of 
            budget travel while creating unforgettable experiences. Join me as 
            I share my journey, tips, and insights to help you explore the world 
            without compromising your savings.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
