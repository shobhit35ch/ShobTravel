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
                Hey there! I'm Shobhit, a 24-year-old travel enthusiast with a deep passion for 
                mountain adventures and hiking trails. When I'm not exploring new peaks or 
                scenic viewpoints, you'll find me trying local cuisines or planning my next 
                outdoor expedition. I believe that exploring the world shouldn't drain your 
                savings, and I'm here to share how I make it work.
              </p>
            </div>
          </div>

          {/* Extended Bio Section */}
          <div className="space-y-6 text-primary/80 text-lg leading-relaxed">
            <p>
              My travel journey began while working a regular 9-5 job in tech. I was fortunate 
              enough to have an understanding manager who supported my passion for travel, 
              allowing me to work remotely when needed and take extended weekends. This 
              flexibility, combined with strategic planning, enabled me to explore numerous 
              destinations without compromising my career growth.
            </p>

            <p>
              One of the key aspects of my travel strategy has been the smart use of credit 
              card points and rewards programs. However, I believe in being transparent - 
              about 50-60% of my travels have been funded through my own savings. I recognize 
              that I'm privileged to be in a position where I can allocate a significant 
              portion of my income to travel, and I'm grateful for this opportunity.
            </p>

            <p>
              Through careful budgeting and planning, I've managed to visit over 15 countries 
              in the past three years. I've learned to maximize holiday weekends, combine 
              business trips with personal travel, and find the sweet spot between comfort 
              and cost. From sleeping in boutique hostels to finding hidden gem restaurants, 
              I've discovered that memorable experiences don't always come with a hefty 
              price tag.
            </p>

            <p>
              My goal with this blog is to share not just the highlight reel, but the 
              real, practical aspects of frequent travel while maintaining a full-time 
              job. I want to help others understand that with some creativity, flexibility, 
              and yes, a bit of privilege, it's possible to build a life that balances 
              professional growth with exploring the world.
            </p>
          </div>

          {/* Interests Section */}
          <div className="mt-12 space-y-6 text-primary/80 text-lg leading-relaxed">
            <h2 className="text-2xl font-display text-primary mb-4">What Gets Me Excited</h2>
            <p>
              As someone who thrives in the outdoors, I'm constantly seeking out new hiking 
              trails and mountain vistas. I maintain an active lifestyle - not in a 
              gym-influencer way, but enough to tackle challenging trails and long days of 
              exploration. This balance of fitness and adventure has allowed me to fully 
              immerse myself in some of the world's most breathtaking landscapes.
            </p>
            <p>
              Food is another passion of mine. I believe that experiencing local cuisine is 
              just as important as visiting tourist spots. Whether it's a hole-in-the-wall 
              restaurant in the Alps or a street food stall in Asia, I'm always eager to 
              try authentic local dishes. I rate my travel experiences not just by the 
              views, but by the complete sensory experience - the trails, the food, and 
              the local culture all play a part in my adventure ratings.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
