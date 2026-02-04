import Header from "@/components/Header";
import PersonalHero from "@/components/personal/PersonalHero";
import TrustBadges from "@/components/personal/TrustBadges";
import PersonalFeatures from "@/components/personal/PersonalFeatures";
import PersonalBenefits from "@/components/personal/PersonalBenefits";
import PersonalCTA from "@/components/personal/PersonalCTA";
import Footer from "@/components/Footer";

const Personal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <PersonalHero />
      <TrustBadges />
      <PersonalFeatures />
      <PersonalBenefits />
      <PersonalCTA />
      <Footer />
    </div>
  );
};

export default Personal;
