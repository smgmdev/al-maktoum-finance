import { Shield, Clock, CreditCard, Globe } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Bank-grade security",
    description: "Your money is protected with advanced encryption and biometric authentication.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Get help whenever you need it with our in-app customer support team.",
  },
  {
    icon: CreditCard,
    title: "Free physical card",
    description: "Order your free card and start spending worldwide in minutes.",
  },
  {
    icon: Globe,
    title: "150+ currencies",
    description: "Spend and exchange in over 150 currencies at the real exchange rate.",
  },
];

const PersonalBenefits = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-card/30 border-y border-border/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Why choose us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Built for the way you live
          </h2>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto bg-secondary rounded-2xl flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalBenefits;
