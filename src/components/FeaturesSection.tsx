import { CreditCard, Globe, Shield, Headphones, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global payments",
    description: "Send and receive money in 25+ currencies with the real exchange rate.",
  },
  {
    icon: CreditCard,
    title: "Multi-currency accounts",
    description: "Hold, exchange, and manage multiple currencies in one place.",
  },
  {
    icon: TrendingUp,
    title: "Smart analytics",
    description: "Track spending patterns and get insights to optimize your finances.",
  },
  {
    icon: Shield,
    title: "Bank-grade security",
    description: "Advanced encryption and fraud protection keeps your money safe.",
  },
  {
    icon: Zap,
    title: "Instant transfers",
    description: "Move money instantly between accounts and to other users.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it from our dedicated support team.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Why choose us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            The all-in-one financial account
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Scale — and save — with global payments, multi-currency accounts, and smarter spending.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
