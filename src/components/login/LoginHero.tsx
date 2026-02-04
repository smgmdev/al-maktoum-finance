import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const LoginHero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    
    toast({
      title: "Thank you!",
      description: "We'll notify you when Al Maktoum Finance launches.",
    });
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.7 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-2xl space-y-6">
          <p className="text-white/70 text-lg">Main account</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Open an Al Maktoum account for free
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-lg">
            Smoothly send, spend, save, and more with 24/7 customer support in-app. Your money will thank you.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md pt-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus:border-white rounded-full px-5"
              required
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="h-12 bg-white hover:bg-white/90 text-black rounded-full px-8 text-base font-medium"
            >
              {isSubmitting ? "Signing up..." : "Sign up"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
