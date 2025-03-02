import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Briefcase, Mail, Handshake } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Monetization = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
                Interested in working together? Send me a message with details about your project or collaboration opportunity. I look forward to discussing how we can create value together.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <button className="inline-block bg-accent px-6 py-3 rounded-full text-primary hover:bg-accent/80 transition-colors">
                    Contact Me
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Send a Message</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number (Optional)
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[100px]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent px-6 py-3 rounded-lg text-primary hover:bg-accent/80 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Monetization;
