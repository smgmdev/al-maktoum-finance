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
    <section className="relative min-h-[70vh] bg-gradient-to-b from-sky-400 via-sky-500 to-sky-600 overflow-hidden">
      {/* Cloud-like overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.3)_0%,_transparent_60%)]" />
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Change the way you money
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-md mx-auto lg:mx-0">
              Home or away, local or global — move freely between countries and currencies. Sign up for free, in a tap.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:border-white rounded-full px-5"
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="h-12 bg-black hover:bg-black/90 text-white rounded-full px-6 text-base font-medium"
              >
                {isSubmitting ? "Submitting..." : "Sign up your interest"}
              </Button>
            </form>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            {/* Phone Frame */}
            <div className="relative w-[280px] md:w-[320px]">
              {/* Phone Outline */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/30 rounded-[3rem] p-4 aspect-[9/16]">
                {/* Screen Content */}
                <div className="h-full rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-sky-300/50 to-sky-500/50 flex flex-col items-center justify-center p-6">
                  <p className="text-white/80 text-sm mb-1">Personal</p>
                  <p className="text-white text-4xl md:text-5xl font-bold mb-4">AED 22,044</p>
                  <Button variant="secondary" className="rounded-full bg-white text-black hover:bg-white/90 px-6">
                    Accounts
                  </Button>
                </div>
              </div>

              {/* Transaction Notification */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Salary</p>
                  <p className="text-xs text-gray-500">Today, 11:28</p>
                </div>
                <p className="text-sm font-semibold text-gray-900">+AED 9,350</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
