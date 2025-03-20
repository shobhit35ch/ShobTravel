
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Briefcase, Mail, Handshake, Camera, Globe } from "lucide-react";
import { ServiceCard } from "@/components/monetization/ServiceCard";
import { WhyWorkWithMe } from "@/components/monetization/WhyWorkWithMe";
import { ContactDialog } from "@/components/monetization/ContactDialog";
import { QuickPlannerDialog } from "@/components/monetization/QuickPlannerDialog";

const Monetization = () => {
  const services = [
    {
      title: "Personalized Travel Planning",
      description: "Expert travel planning with personal consultations. Get detailed itineraries customized to your preferences and style.",
      Icon: Briefcase,
      bulletPoints: [
        "One-on-one consultation calls",
        "Custom itineraries based on trip length",
        "Local insights and hidden gems",
        "24/7 travel support during your trip"
      ]
    },
    {
      title: "Brand Partnerships",
      description: "Collaborate with our engaged travel community through sponsored content, hotel reviews, and destination features.",
      Icon: Handshake,
      bulletPoints: [
        "Sponsored blog posts",
        "Instagram features",
        "Hotel/Resort reviews",
        "Long-term collaborations"
      ]
    },
    {
      title: "Photography Services",
      description: "Professional travel photography for hotels, destinations, and tourism boards.",
      Icon: Camera,
      bulletPoints: [
        "Full-day photoshoot packages",
        "Social media content packages",
        "Commercial usage rights",
        "Quick turnaround time"
      ]
    },
    {
      title: "Destination Marketing",
      description: "Comprehensive marketing packages for tourism boards and travel brands.",
      Icon: Globe,
      bulletPoints: [
        "Multi-platform coverage",
        "Professional content creation",
        "Detailed analytics reports",
        "3-12 month packages available"
      ]
    }
  ];

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
              Plan Your Dream Vacation
            </h1>
            <p className="text-primary/80 text-lg mb-6">
              My main purpose is to help you plan the best vacation possible. Let me create a customized travel experience that matches your preferences and budget.
            </p>
            
            <div className="mb-12 flex justify-center">
              <QuickPlannerDialog />
            </div>

            <h2 className="text-3xl font-display text-primary mb-6">Services I Offer</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <WhyWorkWithMe />

            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-display text-primary">Get in Touch</h2>
              </div>
              <p className="text-primary/80 mb-8">
                Ready to plan your dream vacation? Let's discuss how I can help make your travel dreams a reality.
              </p>
              <ContactDialog />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Monetization;
