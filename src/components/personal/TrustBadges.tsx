import { Star, Users, Award } from "lucide-react";

const badges = [
  {
    icon: Star,
    text: "Rated 4.8 on App Store",
  },
  {
    icon: Users,
    text: "Used by 50+ million customers",
  },
  {
    icon: Award,
    text: "Best Finance App 2024",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-8 px-6 border-b border-border/50 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((badge) => (
            <div key={badge.text} className="flex items-center gap-3">
              <badge.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
