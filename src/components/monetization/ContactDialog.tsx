
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactDialog = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
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
  );
};
