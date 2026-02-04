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
    <section id="whitelist-signup" className="py-32 px-6 border-t border-border">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center space-y-10 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Exclusive Access
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tightest text-foreground">
              Join the <span className="font-light italic">Waitlist</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
              Be among the first. Enter your email for exclusive early access 
              and founding member benefits.
            </p>
          </div>
          
          {/* Signup Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 bg-transparent border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:ring-0 text-center sm:text-left"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 bg-foreground text-background hover:bg-foreground/90 text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 group"
              >
                {isSubmitting ? (
                  "Joining..."
                ) : (
                  <>
                    Join
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="py-10 space-y-4">
              <div className="w-16 h-16 mx-auto border border-foreground flex items-center justify-center">
                <Check className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-serif font-medium text-foreground">
                You're on the list.
              </h3>
              <p className="text-muted-foreground">
                We'll be in touch with exclusive updates.
              </p>
            </div>
          )}
          
          {/* Trust Note */}
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhitelistSignup;
