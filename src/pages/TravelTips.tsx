
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const TravelTips = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-8">
              Travel Tips & Resources
            </h1>
            
            {/* General Travel Tips Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-display text-primary mb-6">Essential Travel Tips</h2>
              <div className="grid gap-6">
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-display text-lg text-primary mb-3">Planning & Booking</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Book flights 3-6 months in advance for the best deals</li>
                    <li>• Use flight price tracking tools to monitor fare changes</li>
                    <li>• Consider shoulder season for popular destinations</li>
                    <li>• Always check visa requirements well in advance</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-display text-lg text-primary mb-3">Packing Smart</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Roll clothes instead of folding to save space</li>
                    <li>• Pack a basic first-aid kit for emergencies</li>
                    <li>• Bring a portable charger for your devices</li>
                    <li>• Always pack important items in carry-on luggage</li>
                  </ul>
                </div>
                
                <div className="bg-secondary/50 p-6 rounded-lg">
                  <h3 className="font-display text-lg text-primary mb-3">At Your Destination</h3>
                  <ul className="space-y-3 text-primary/80">
                    <li>• Download offline maps before your trip</li>
                    <li>• Learn basic phrases in the local language</li>
                    <li>• Keep emergency contacts easily accessible</li>
                    <li>• Research local customs and etiquette</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Recommended Travel Cards Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-display text-primary mb-6">
                Recommended Travel Cards
              </h2>
              <div className="bg-secondary/50 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-2/3">
                    <h3 className="font-display text-xl text-primary mb-4">
                      American Express® Gold Card
                    </h3>
                    <ul className="space-y-3 text-primary/80 mb-6">
                      <li>• 4X points at restaurants worldwide</li>
                      <li>• 4X points at U.S. supermarkets (up to $25,000 per year)</li>
                      <li>• 3X points on flights booked directly with airlines</li>
                      <li>• $120 Uber Cash annually ($10 monthly credits)</li>
                      <li>• $120 dining credit annually ($10 monthly credits)</li>
                    </ul>
                    <a
                      href="https://resy.com/amex-offers?date=2024-03-19&seats=2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-accent px-6 py-3 rounded-full text-primary hover:bg-accent/80 transition-colors"
                    >
                      Learn More About Amex Gold
                    </a>
                  </div>
                  <div className="w-full md:w-1/3">
                    <img
                      src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                      alt="Credit Card Benefits"
                      className="rounded-lg w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TravelTips;
