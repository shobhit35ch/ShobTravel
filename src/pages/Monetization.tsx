
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Briefcase, Mail, Handshake, Sparkles, DollarSign, Globe, Camera } from "lucide-react";
import { ServiceCard } from "@/components/monetization/ServiceCard";
import { WhyWorkWithMe } from "@/components/monetization/WhyWorkWithMe";
import { ContactDialog } from "@/components/monetization/ContactDialog";
import { QuickPlannerDialog } from "@/components/monetization/QuickPlannerDialog";

const Monetization = () => {
  const services = [
    {
      title: "Personalized Travel Planning",
      description: "Expert travel planning with personal consultations starting at $150/trip. Get detailed itineraries customized to your preferences and style.",
      Icon: Briefcase,
      bulletPoints: [
        "One-on-one consultation calls ($75/hour)",
        "Custom itineraries ($150-300 based on trip length)",
        "Local insights and hidden gems",
        "24/7 travel support during your trip"
      ]
    },
    {
      title: "Brand Partnerships",
      description: "Collaborate with our engaged travel community through sponsored content, hotel reviews, and destination features.",
      Icon: Handshake,
      bulletPoints: [
        "Sponsored blog posts ($500+)",
        "Instagram features ($300+)",
        "Hotel/Resort reviews ($800+)",
        "Long-term collaborations (Custom pricing)"
      ]
    },
    {
      title: "Photography Services",
      description: "Professional travel photography for hotels, destinations, and tourism boards.",
      Icon: Camera,
      bulletPoints: [
        "Full-day photoshoot ($1000+)",
        "Social media package ($500+)",
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
              Work With Me
            </h1>
            <p className="text-primary/80 text-lg mb-12">
              Let's collaborate to create authentic travel content and experiences that resonate with your audience.
            </p>

            <div className="bg-accent/10 p-8 rounded-lg mb-16">
              <div className="flex items-center mb-6">
                <DollarSign className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-display text-primary">Advertising Opportunities</h2>
              </div>
              <p className="text-primary/80 mb-6">
                Want to reach our engaged audience of travel enthusiasts? We offer various advertising options:
              </p>
              <ul className="space-y-3 text-primary/80 mb-6">
                <li>• Banner Ads (Starting at $200/month)</li>
                <li>• Newsletter Sponsorship ($300 per send)</li>
                <li>• Sidebar Premium Placement ($250/month)</li>
                <li>• Custom Advertising Solutions Available</li>
              </ul>
              <ContactDialog />
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
                <h2 className="text-2xl font-display text-primary">Get in Touch</h2>
              </div>
              <p className="text-primary/80 mb-8">
                Interested in working together? Let's discuss how we can create value for your brand.
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
