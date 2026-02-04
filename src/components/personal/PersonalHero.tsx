import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/personal-hero.jpg";

const PersonalHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lifestyle" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>
      
      <div className="container mx-auto max-w-7xl px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-2xl space-y-8 animate-fade-in-up">
          {/* Label */}
          <p className="text-muted-foreground text-lg">
            Personal Account
          </p>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
            Open your account for free
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Smoothly send, spend, save, and more with 24/7 customer support in-app. Your money will thank you.
          </p>

          {/* CTA Button */}
          <Button 
            className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-full text-base font-medium transition-all duration-300 group"
          >
            Open an account
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalHero;
