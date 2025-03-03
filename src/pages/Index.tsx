import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { Mountain, TreeDeciduous, Tent } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-4 py-32"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-display text-4xl text-primary mb-12">
            Latest Adventures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Banff Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/lovable-uploads/230e8e59-f044-442a-9e84-f783643253eb.png"
                  alt="Moraine Lake, Banff"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mountain className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Alberta, Canada</span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">Banff: Where TikTok Dreams Come True</h3>
                <p className="text-primary/70">Turquoise lakes, mountain views, and endless Instagram spots. Trust me, your feed needs this. 🏔️ #nofilterneeded</p>
              </div>
            </motion.div>

            {/* Grindelwald Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-accent/20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Mountain className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Switzerland</span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">Grindelwald: Living Your Main Character Energy</h3>
                <p className="text-primary/70">POV: You're in a Swiss fairy tale with epic mountain trails and cozy chalets. The vibes? Immaculate. ✨ #swissalps</p>
              </div>
            </motion.div>

            {/* Lake Como Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-accent/20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <TreeDeciduous className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Italy</span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">Lake Como: Not Your Regular Lake Day</h3>
                <p className="text-primary/70">Fancy boats, historic villas, and that Italian lifestyle you've been dreaming about. Major flex incoming. 🇮🇹 #dolcevita</p>
              </div>
            </motion.div>

            {/* Red Rocks Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <div className="w-full h-full bg-accent/20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tent className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Nevada, USA</span>
                </div>
                <h3 className="font-display text-2xl text-primary mb-2">Red Rocks: Beyond Vegas Vibes</h3>
                <p className="text-primary/70">Swap the slots for sunset climbs and desert camping. The real Vegas experience no one talks about. 🏜️ #outdoorvibes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
