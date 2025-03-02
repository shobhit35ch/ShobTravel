
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Briefcase, Mail, Handshake } from "lucide-react";
import { ServiceCard } from "@/components/monetization/ServiceCard";
import { WhyWorkWithMe } from "@/components/monetization/WhyWorkWithMe";
import { ContactDialog } from "@/components/monetization/ContactDialog";

const Monetization = () => {
  const services = [
    {
      title: "Travel Planning",
      description: "Looking for personalized travel itineraries? I offer custom travel planning services to help you create unforgettable experiences tailored to your preferences and style.",
      Icon: Briefcase,
      bulletPoints: [
        "Customized itinerary creation",
        "Local insights and hidden gems",
        "Accommodation recommendations",
        "Transportation planning"
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
              Let's Work Together
            </h1>
            <p className="text-primary/80 text-lg mb-12">
              I'm always excited to collaborate with brands and businesses that align with my values and travel philosophy.
            </p>

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
                Interested in working together? Send me a message with details about your project or collaboration opportunity. I look forward to discussing how we can create value together.
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
