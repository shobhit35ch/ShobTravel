
interface BenefitProps {
  title: string;
  description: string;
}

const Benefit = ({ title, description }: BenefitProps) => (
  <div>
    <h3 className="font-display text-lg mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export const WhyWorkWithMe = () => {
  const benefits = [
    {
      title: "Travel Expertise",
      description: "Years of experience exploring destinations and creating memorable vacation experiences tailored to individual preferences."
    },
    {
      title: "Personalized Planning",
      description: "Custom itineraries designed specifically for your interests, travel style, and budget constraints."
    },
    {
      title: "Local Insights",
      description: "Access to hidden gems, authentic experiences, and local recommendations you won't find in guidebooks."
    },
    {
      title: "Stress-Free Experience",
      description: "I handle all the details and logistics so you can focus on enjoying your dream vacation without the hassle."
    }
  ];

  return (
    <div className="bg-accent/20 p-8 rounded-lg mb-16">
      <h2 className="text-2xl font-display text-primary mb-6">Why Plan Your Vacation With Me?</h2>
      <div className="grid md:grid-cols-2 gap-6 text-primary/80">
        {benefits.map((benefit, index) => (
          <Benefit key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};
