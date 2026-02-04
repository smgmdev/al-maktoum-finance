import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const WhitelistSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Invalid Email",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    toast({
      title: "Welcome to the Waitlist",
      description: "You'll be among the first to experience Al Maktoum Finance.",
    });
  };

  return (
    <section id="whitelist-signup" className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Early Access
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              Join the waitlist
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Be among the first to experience the future of finance. Sign up for exclusive early access.
            </p>
          </div>
          
          {/* Signup Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-foreground rounded-full px-5"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="h-12 px-6 bg-foreground text-background hover:bg-foreground/90 rounded-full text-base font-medium transition-all duration-300 group"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Get started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-8 space-y-4">
              <div className="w-16 h-16 mx-auto bg-foreground rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">
                We'll be in touch with exclusive updates and early access.
              </p>
            </div>
          )}
          
          {/* Trust Note */}
          <p className="text-sm text-muted-foreground">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhitelistSignup;
