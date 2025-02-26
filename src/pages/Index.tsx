
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <motion.section
        id="about-me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-32"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 bg-accent/20 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src="/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png"
                alt="Shobhit at Moraine Lake"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="text-center md:text-left">
              <span className="text-accent uppercase tracking-wider font-medium">
                About Me
              </span>
              <h2 className="mt-2 font-display text-4xl text-primary mb-6">
                Hello, I'm Shobhit
              </h2>
              <p className="text-primary/80 text-lg leading-relaxed">
                At 24, I've discovered that travel doesn't have to break the bank. 
                Through my adventures across continents, I've mastered the art of 
                budget travel while creating unforgettable experiences. Join me as 
                I share my journey, tips, and insights to help you explore the world 
                without compromising your savings.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
