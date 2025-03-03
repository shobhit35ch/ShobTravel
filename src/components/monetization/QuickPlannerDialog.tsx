
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
}

export const QuickPlannerDialog = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<PlannerFormData>({
    destination: "",
    duration: "",
    preferences: "",
    budget: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-quick-plan', {
        body: formData
      });

      if (error) throw error;
      
      toast({
        title: "Plan Generated!",
        description: "Check your email for your personalized quick travel plan.",
      });

      setFormData({
        destination: "",
        duration: "",
        preferences: "",
        budget: ""
      });
    } catch (error) {
      console.error("Error generating plan:", error);
      toast({
        title: "Error",
        description: "There was a problem generating your plan. Please try again.",
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
          Get Quick Plan
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Quick Trip Planner</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="destination" className="text-sm font-medium">
              Destination
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
              Trip Duration
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
              Budget Range
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
            <label htmlFor="preferences" className="text-sm font-medium">
              Travel Preferences
            </label>
            <Textarea
              id="preferences"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              required
              disabled={isLoading}
              placeholder="Tell us about your interests (e.g., food, culture, adventure)"
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
                Generating Plan...
              </>
            ) : (
              'Generate Quick Plan'
            )}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
