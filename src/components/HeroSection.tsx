import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById("whitelist-signup");
    signupSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-12 animate-fade-in-up">
          {/* Minimal Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-border">
            <span className="w-2 h-2 bg-foreground animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Coming Soon
            </span>
          </div>

          {/* Powerful Typography */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tightest leading-none text-foreground text-balance">
              Redefining
              <br />
              <span className="font-light italic">Premium</span> Banking
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A new era of financial excellence. No complexity. 
              Just pure, refined banking for those who demand more.
            </p>
          </div>

          {/* Clean CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={scrollToSignup}
              className="h-14 px-10 bg-foreground text-background hover:bg-foreground/90 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 group"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="ghost" 
              className="h-14 px-10 text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground hover:bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Minimal Stats */}
          <div className="pt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-border">
            <div className="pt-8 text-center">
              <p className="text-3xl md:text-4xl font-serif font-medium text-foreground">80M+</p>
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mt-2">Locations</p>
            </div>
            <div className="pt-8 text-center border-x border-border">
              <p className="text-3xl md:text-4xl font-serif font-medium text-foreground">0%</p>
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mt-2">Foreign Fees</p>
            </div>
            <div className="pt-8 text-center">
              <p className="text-3xl md:text-4xl font-serif font-medium text-foreground">24/7</p>
              <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
