import { Globe, CreditCard, Building2, Shield, Coins, ArrowLeftRight, Wallet, Users, Landmark } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Borderless Hybrid Banking",
    description: "Open your banking account in US, Europe, UK, and leading financial capitals from one single app.",
  },
  {
    icon: CreditCard,
    title: "Al Maktoum Card",
    description: "Top up your card in less than 20 seconds with any of your assets and use them for your daily purchases worldwide.",
  },
  {
    icon: Building2,
    title: "Multi-Jurisdiction Accounts",
    description: "Access banking services across multiple jurisdictions, also available for non-residents.",
  },
  {
    icon: Shield,
    title: "Institutional-Grade Security",
    description: "Your assets are protected with end-to-end encryption, multi-signature protocols, and 24/7 monitoring.",
  },
  {
    icon: Coins,
    title: "Digital Asset Support",
    description: "Full support for digital assets alongside traditional fiat currencies in one unified platform.",
  },
  {
    icon: ArrowLeftRight,
    title: "Real-Time Exchange",
    description: "Competitive real-time exchange rates with full transparency. No hidden fees or spreads.",
  },
  {
    icon: Wallet,
    title: "Secure Custody",
    description: "Your assets are held by qualified custodians with the highest standards of protection and regulatory compliance.",
  },
  {
    icon: Users,
    title: "Business Accounts",
    description: "Empower your company with cutting-edge solutions like real-time transactions and global treasury management.",
  },
  {
    icon: Landmark,
    title: "Compliant & Regulated",
    description: "Fully compliant payments and banking solution, seamlessly integrating fiat and digital assets.",
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
