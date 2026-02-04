import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

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
      title: "Welcome to the Waitlist!",
      description: "You'll be among the first to experience Al Maktoum Finance.",
    });
  };

  return (
    <section id="whitelist-signup" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium">
              Exclusive Access
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Join the{" "}
              <span className="text-gradient-gold">Waitlist</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Be among the first to experience premium banking. 
              Enter your email below for exclusive early access and special founding member benefits.
            </p>
          </div>
          
          {/* Signup Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold shadow-gold transition-all duration-300"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-card border border-primary/30 shadow-gold">
              <div className="space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-gold flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  You're on the List!
                </h3>
                <p className="text-muted-foreground">
                  Thank you for your interest. We'll be in touch soon with exclusive updates.
                </p>
              </div>
            </div>
          )}
          
          {/* Trust Note */}
          <p className="text-xs text-muted-foreground">
            By joining, you agree to receive updates about Al Maktoum Finance. 
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhitelistSignup;
