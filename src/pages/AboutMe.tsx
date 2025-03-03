
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const AboutMe = () => {
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
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
