import { Button } from "@/components/ui/button";
import VisaCard from "./VisaCard";

const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById("whitelist-signup");
    signupSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
                Exclusive Banking
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-foreground">
                Experience{" "}
                <span className="text-gradient-gold">Premium</span>{" "}
                Banking Excellence
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Join Al Maktoum Finance and unlock a world of exclusive benefits, 
                unparalleled rewards, and sophisticated financial services tailored for the elite.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToSignup}
                className="bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-gold transition-all duration-300"
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="outline" 
                className="border-border text-foreground hover:bg-secondary px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Content - VISA Card */}
          <div 
            className="flex justify-center lg:justify-end animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <VisaCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
