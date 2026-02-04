import { Percent, Globe, Plus, Users, Briefcase, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Percent,
    title: "Earn up to 4% AER (variable), paid daily",
    description: "Watch your money grow with competitive rates.",
  },
  {
    icon: Globe,
    title: "Send money abroad at great rates",
    description: "Transfer money around the world 24/7 in just a few taps.",
  },
  {
    icon: Plus,
    title: "Link all of your accounts",
    description: "Get a full and secure view of all your money, all in one place.",
  },
  {
    icon: Users,
    title: "Open a Joint account, together",
    description: "Share finances with a Joint account and try an account for kids.",
  },
  {
    icon: Briefcase,
    title: "Simplify freelance finances",
    description: "Open a Pro account to manage freelance income and earn up to 1% cashback on expenses.",
  },
  {
    icon: ArrowRight,
    title: "Pay back friends, instantly",
    description: "Chat, send, and receive money among your Al Maktoum friends.",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
          Everything you need, in one spot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 space-y-4"
            >
              <feature.icon className="w-6 h-6 text-black" />
              <h3 className="text-xl font-bold text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
