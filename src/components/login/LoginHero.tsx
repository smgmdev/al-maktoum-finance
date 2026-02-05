import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/dubai-frame-hero.webp";

const LoginHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("email_signups")
        .insert({ email: email.trim().toLowerCase() });
      
      if (error) {
        if (error.code === "23505") {
          // Unique constraint violation - email already exists
          toast({
            title: "Already registered",
            description: "This email is already signed up for the Golden Visa campaign.",
          });
        } else {
          throw error;
        }
      } else {
        // Send admin notification email
        await supabase.functions.invoke("send-book-call-email", {
          body: { type: "email_signup", email: email.trim().toLowerCase() },
        });
        
        toast({
          title: "Success!",
          description: "You're now entered to win the UAE Golden Visa!",
        });
        setEmail("");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img 
        src={heroImage} 
        alt="Dubai Frame"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-xl space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Sign Up and Win UAE Golden Visa
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed">
            Sign Up your interest for Al Maktoum Finance Account and get a chance to win UAE Golden Visa for free.
          </p>
          
          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-5 focus:border-white focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              required
              disabled={isSubmitting}
            />
            <div className="flex gap-3">
              <Button 
                type="submit"
                className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-12 text-base font-medium whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
              </Button>
              <Button 
                type="button"
                variant="outline"
                className="border-white/30 bg-transparent hover:bg-white/10 text-white rounded-full px-8 h-12 text-base font-medium whitespace-nowrap"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn more
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
