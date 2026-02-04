import { TrendingUp, Send, Link2, Users, Briefcase, MessageCircle, Wallet } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    number: "1",
    title: "Earn up to 4% AER (variable), paid daily",
    description: "Watch your money grow with competitive rates.",
  },
  {
    icon: Send,
    number: "2",
    title: "Send money abroad at great rates",
    description: "Transfer money around the world 24/7 in just a few taps.",
  },
  {
    icon: Link2,
    number: "3",
    title: "Link all of your accounts",
    description: "Get a full and secure view of all your money, all in one place.",
  },
  {
    icon: Users,
    number: "4",
    title: "Open a Joint account, together",
    description: "Share finances with a Joint account and try an account for kids.",
  },
  {
    icon: Briefcase,
    number: "5",
    title: "Simplify freelance finances",
    description: "Open a Pro account to manage freelance income and earn up to 1% cashback.",
  },
  {
    icon: MessageCircle,
    number: "6",
    title: "Pay back friends, instantly",
    description: "Chat, send, and receive money among your friends.",
  },
  {
    icon: Wallet,
    number: "7",
    title: "Budget with Pockets",
    description: "Organise your money into separate Pockets to track your spending.",
  },
];

const PersonalFeatures = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Everything you need, in one spot
          </h2>
        </div>
        
        {/* Features List */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group flex gap-5 p-6 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Number Badge */}
              <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-foreground">{feature.number}</span>
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                  {feature.title}
                </h3>
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

export default PersonalFeatures;
