import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/personal-hero.jpg";

const LoginHero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Sign up with:", email);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-xl space-y-6">
          {/* Subtitle */}
          <p className="text-white/70 text-lg">
            Accept payments
          </p>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Sign up and win UAE golden visa
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed">
            Sign up your interest for Al Maktoum Finance account and get a chance to win UAE golden visa for free.
          </p>
          
          {/* Terms Link */}
          <p className="text-white/80">
            <a href="#" className="underline hover:text-white transition-colors">Fees and T&Cs</a> apply.
          </p>
          
          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full px-5 focus:bg-white/20 focus:border-white/40"
              required
            />
            <Button 
              type="submit"
              className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-12 text-base font-medium whitespace-nowrap"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
