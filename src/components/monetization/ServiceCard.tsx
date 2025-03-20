
import { LucideIcon } from "lucide-react";
import { 
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  bulletPoints: string[];
}

export const ServiceCard = ({ title, description, Icon, bulletPoints }: ServiceCardProps) => {
  return (
    <Card className="bg-secondary/50">
      <CardHeader className="pb-2">
        <div className="flex items-center">
          <Icon className="w-6 h-6 text-primary mr-3" />
          <h2 className="text-2xl font-display text-primary">{title}</h2>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-primary/80 mb-6">{description}</p>
        <ul className="space-y-3 text-primary/80">
          {bulletPoints.map((point, index) => (
            <li key={index}>• {point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
