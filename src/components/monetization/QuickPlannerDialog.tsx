
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface PlannerFormData {
  destination: string;
  duration: string;
  preferences: string;
  budget: string;
  email: string;
}

export const QuickPlannerDialog = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<PlannerFormData>({
    destination: "",
    duration: "",
    preferences: "",
    budget: "",
    email: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          firstName: "Travel Inquiry",
          lastName: "",
          email: formData.email,
          phone: "",
          message: `New Travel Inquiry:
Destination: ${formData.destination}
Trip Duration: ${formData.duration}
Budget Range: ${formData.budget}
Travel Preferences: ${formData.preferences}`
        }
      });

      if (error) throw error;
      
      toast({
        title: "Request Received!",
        description: "Thank you for your travel inquiry. I'll be in touch shortly with personalized recommendations.",
      });

      setFormData({
        destination: "",
        duration: "",
        preferences: "",
        budget: "",
        email: ""
      });
    } catch (error) {
      console.error("Error sending inquiry:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
        <button className="bg-secondary/80 px-6 py-3 rounded-full text-primary hover:bg-secondary/60 transition-colors">
          Request Vacation Planning Help
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tell Me About Your Dream Vacation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="destination" className="text-sm font-medium">
              Where Would You Like to Go?
            </label>
            <Input
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="e.g., Paris, France"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-medium">
              How Long Is Your Trip?
            </label>
            <Input
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="e.g., 5 days"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="budget" className="text-sm font-medium">
              What's Your Budget Range?
            </label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="e.g., $2000-3000"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="preferences" className="text-sm font-medium">
              What Are You Looking For in This Trip?
            </label>
            <Textarea
              id="preferences"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Tell me about your interests (e.g., food, culture, adventure, relaxation)"
              className="min-h-[100px]"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent px-6 py-3 rounded-lg text-primary hover:bg-accent/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending Inquiry...
              </>
            ) : (
              'Send Vacation Inquiry'
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
