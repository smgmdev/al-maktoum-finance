import { Gift, Globe, Headphones, Shield } from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Exclusive Rewards",
    description: "Premium cashback, luxury travel perks, and access to members-only events worldwide.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Accepted at over 80 million locations worldwide with zero foreign transaction fees.",
  },
  {
    icon: Headphones,
    title: "24/7 Concierge",
    description: "Personal banking support available anytime, anywhere—your dedicated financial assistant.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Advanced fraud protection with real-time alerts and cutting-edge encryption technology.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Banking Reimagined for the{" "}
            <span className="text-gradient-gold">Elite</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the exceptional benefits that set Al Maktoum Finance apart from traditional banking.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-gold animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 w-fit rounded-xl bg-gradient-gold shadow-gold">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
