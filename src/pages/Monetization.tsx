
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Briefcase, Mail, Handshake, Sparkles } from "lucide-react";
import { ServiceCard } from "@/components/monetization/ServiceCard";
import { WhyWorkWithMe } from "@/components/monetization/WhyWorkWithMe";
import { ContactDialog } from "@/components/monetization/ContactDialog";
import { QuickPlannerDialog } from "@/components/monetization/QuickPlannerDialog";

const Monetization = () => {
  const services = [
    {
      title: "Personalized Travel Planning",
      description: "Get expert travel planning with personal consultations to create truly unforgettable experiences tailored to your preferences and style.",
      Icon: Briefcase,
      bulletPoints: [
        "One-on-one consultation calls",
        "Detailed custom itineraries",
        "Local insights and hidden gems",
        "24/7 travel support"
      ]
    },
    {
      title: "Partnerships",
      description: "I collaborate with travel brands, hotels, and experiences that resonate with my audience's interests and values.",
      Icon: Handshake,
      bulletPoints: [
        "Authentic content creation",
        "Destination features",
        "Experience showcases",
        "Brand collaborations"
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
              Let's Plan Your Dream Trip
            </h1>
            <p className="text-primary/80 text-lg mb-12">
              Choose between our AI-powered quick planner for instant ideas or schedule a personal consultation for a fully customized experience.
            </p>

            <div className="bg-accent/10 p-8 rounded-lg mb-16">
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-display text-primary">Quick Trip Planner</h2>
              </div>
              <p className="text-primary/80 mb-6">
                Get instant travel suggestions based on your preferences using our AI planner. Perfect for initial ideas and inspiration.
              </p>
              <QuickPlannerDialog />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

            <WhyWorkWithMe />

            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-display text-primary">Schedule a Consultation</h2>
              </div>
              <p className="text-primary/80 mb-8">
                Ready for a personalized travel experience? Schedule a consultation call to discuss your dream trip in detail.
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
