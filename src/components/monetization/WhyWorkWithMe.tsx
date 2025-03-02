
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
      title: "Engaged Community",
      description: "A dedicated following of travel enthusiasts who trust my recommendations and insights."
    },
    {
      title: "Professional Quality",
      description: "High-quality content creation with attention to detail and brand alignment."
    },
    {
      title: "Authentic Voice",
      description: "Genuine storytelling that resonates with audiences and drives engagement."
    },
    {
      title: "Travel Expertise",
      description: "Years of experience exploring destinations and creating memorable experiences."
    }
  ];

  return (
    <div className="bg-accent/20 p-8 rounded-lg mb-16">
      <h2 className="text-2xl font-display text-primary mb-6">Why Work With Me?</h2>
      <div className="grid md:grid-cols-2 gap-6 text-primary/80">
        {benefits.map((benefit, index) => (
          <Benefit key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};
