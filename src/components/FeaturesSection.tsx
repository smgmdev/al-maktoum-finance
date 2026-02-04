const features = [
  {
    number: "01",
    title: "Exclusive Rewards",
    description: "Premium cashback on every purchase. Luxury travel perks. Access to members-only experiences worldwide.",
  },
  {
    number: "02",
    title: "Global Access",
    description: "Accepted at over 80 million locations. Zero foreign transaction fees. Seamless international banking.",
  },
  {
    number: "03",
    title: "24/7 Concierge",
    description: "Personal banking support anytime, anywhere. Your dedicated financial assistant, always available.",
  },
  {
    number: "04",
    title: "Security First",
    description: "Advanced fraud protection. Real-time alerts. Cutting-edge encryption for complete peace of mind.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tightest text-foreground leading-tight">
            Banking, <span className="font-light italic">simplified.</span>
          </h2>
        </div>
        
        {/* Features List */}
        <div className="space-y-0">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group grid md:grid-cols-12 gap-6 py-10 border-t border-border hover:bg-secondary/30 transition-colors duration-500 animate-fade-in-up px-4 -mx-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:col-span-1">
                <span className="text-xs text-muted-foreground font-mono">
                  {feature.number}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-xl font-serif font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">
                  {feature.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
