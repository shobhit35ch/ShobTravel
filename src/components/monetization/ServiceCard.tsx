
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  bulletPoints: string[];
}

export const ServiceCard = ({ title, description, Icon, bulletPoints }: ServiceCardProps) => {
  return (
    <div className="bg-secondary/50 p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-primary mr-3" />
        <h2 className="text-2xl font-display text-primary">{title}</h2>
      </div>
      <p className="text-primary/80 mb-6">{description}</p>
      <ul className="space-y-3 text-primary/80 mb-8">
        {bulletPoints.map((point, index) => (
          <li key={index}>• {point}</li>
        ))}
      </ul>
    </div>
  );
};
