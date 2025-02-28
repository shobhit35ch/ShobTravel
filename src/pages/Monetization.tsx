
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Briefcase, Mail, Handshake } from "lucide-react";

const Monetization = () => {
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
            <h1 className="text-4xl md:text-5xl font-display text-primary mb-4">
              Let's Work Together
            </h1>
            <p className="text-primary/80 text-lg mb-12">
              I'm always excited to collaborate with brands and businesses that align with my values and travel philosophy.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-secondary/50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-display text-primary">Travel Planning</h2>
                </div>
                <p className="text-primary/80 mb-6">
                  Looking for personalized travel itineraries? I offer custom travel planning services to help you create unforgettable experiences tailored to your preferences and style.
                </p>
                <ul className="space-y-3 text-primary/80 mb-8">
                  <li>• Customized itinerary creation</li>
                  <li>• Local insights and hidden gems</li>
                  <li>• Accommodation recommendations</li>
                  <li>• Transportation planning</li>
                </ul>
              </div>

              <div className="bg-secondary/50 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Handshake className="w-6 h-6 text-primary mr-3" />
                  <h2 className="text-2xl font-display text-primary">Partnerships</h2>
                </div>
                <p className="text-primary/80 mb-6">
                  I collaborate with travel brands, hotels, and experiences that resonate with my audience's interests and values.
                </p>
                <ul className="space-y-3 text-primary/80 mb-8">
                  <li>• Authentic content creation</li>
                  <li>• Destination features</li>
                  <li>• Experience showcases</li>
                  <li>• Brand collaborations</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent/20 p-8 rounded-lg mb-16">
              <h2 className="text-2xl font-display text-primary mb-6">Why Work With Me?</h2>
              <div className="grid md:grid-cols-2 gap-6 text-primary/80">
                <div>
                  <h3 className="font-display text-lg mb-2">Engaged Community</h3>
                  <p>A dedicated following of travel enthusiasts who trust my recommendations and insights.</p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Professional Quality</h3>
                  <p>High-quality content creation with attention to detail and brand alignment.</p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Authentic Voice</h3>
                  <p>Genuine storytelling that resonates with audiences and drives engagement.</p>
                </div>
                <div>
                  <h3 className="font-display text-lg mb-2">Travel Expertise</h3>
                  <p>Years of experience exploring destinations and creating memorable experiences.</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-display text-primary">Get in Touch</h2>
              </div>
              <p className="text-primary/80 mb-8">
                Interested in working together? Send me an email with details about your project or collaboration opportunity. I look forward to discussing how we can create value together.
              </p>
              <a
                href="mailto:your-email@example.com"
                className="inline-block bg-accent px-6 py-3 rounded-full text-primary hover:bg-accent/80 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Monetization;
