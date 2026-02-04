import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById("whitelist-signup");
    signupSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Go beyond
              <br />
              banking as usual
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Take your finances further with the account designed for efficiency, and built for your future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={scrollToSignup}
                className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-full text-base font-medium transition-all duration-300 group"
              >
                Get started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="h-12 px-8 rounded-full text-base border-border/50 bg-transparent hover:bg-secondary/50"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-muted/30 to-transparent rounded-full blur-3xl" />
            
            {/* 3D Card Container */}
            <div className="relative card-3d">
              {/* Card */}
              <div className="relative w-[320px] md:w-[380px] aspect-[1.586/1] bg-gradient-to-br from-card via-secondary to-muted rounded-2xl card-shadow overflow-hidden">
                {/* Card shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                
                {/* Card content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-foreground font-semibold text-lg tracking-tight">Al Maktoum</span>
                    <span className="text-muted-foreground text-sm">Premium</span>
                  </div>
                  
                  {/* Chip */}
                  <div className="w-12 h-9 bg-gradient-to-br from-amber-300/80 to-amber-500/80 rounded-md" />
                  
                  <div className="space-y-1">
                    <p className="text-foreground/70 text-sm tracking-[0.2em]">•••• •••• •••• 4242</p>
                    <p className="text-muted-foreground text-xs">VALID THRU 12/28</p>
                  </div>
                </div>
              </div>
              
              {/* Card reflection/shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[280px] h-4 bg-black/30 blur-xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
