import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PersonalCTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="space-y-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Open your free account in minutes and start managing your money the smart way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              className="h-12 px-8 bg-foreground text-background hover:bg-foreground/90 rounded-full text-base font-medium transition-all duration-300 group"
            >
              Open an account
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="h-12 px-8 rounded-full text-base border-border/50 bg-transparent hover:bg-secondary/50"
            >
              Compare plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCTA;
