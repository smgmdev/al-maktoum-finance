import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Plus, ArrowDown, Info, MoreHorizontal, Home, CirclePlus } from "lucide-react";
import FeatureSlider from "@/components/login/FeatureSlider";

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" });

const Login = () => {
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
    
    toast({
      title: "Check your email",
      description: "We've sent you a verification link.",
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,12%)] via-[hsl(215,45%,10%)] to-[hsl(220,40%,8%)] text-foreground overflow-y-auto">
      {/* Header */}
      <header className="p-6">
        <Link to="/" className="text-lg font-semibold text-white tracking-tight">
          Al Maktoum
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          {/* Login Form */}
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Welcome back
              </h1>
              <p className="text-muted-foreground">
                Enter the email associated with your Al Maktoum Business account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 bg-[hsl(215,30%,18%)] border-[hsl(215,25%,25%)] text-white placeholder:text-muted-foreground focus:border-[hsl(210,80%,55%)] rounded-lg px-4"
                required
              />
              
              <Link 
                to="#" 
                className="inline-block text-sm text-[hsl(210,80%,55%)] hover:text-[hsl(210,80%,65%)] transition-colors"
              >
                Lost access to my email
              </Link>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-[hsl(215,20%,25%)] hover:bg-[hsl(215,20%,30%)] text-white rounded-lg text-sm font-medium transition-all"
              >
                {isSubmitting ? "Continuing..." : "Continue"}
              </Button>
            </form>

          </div>

          {/* QR Code Section */}
          <div className="hidden lg:flex flex-col items-center space-y-4">
            <div className="bg-white p-4 rounded-2xl">
              {/* Simplified QR Code SVG */}
              <svg width="160" height="160" viewBox="0 0 160 160" className="text-black">
                {/* QR Code Pattern - Simplified representation */}
                <rect x="0" y="0" width="160" height="160" fill="white"/>
                {/* Corner squares */}
                <rect x="10" y="10" width="40" height="40" fill="black"/>
                <rect x="16" y="16" width="28" height="28" fill="white"/>
                <rect x="22" y="22" width="16" height="16" fill="black"/>
                
                <rect x="110" y="10" width="40" height="40" fill="black"/>
                <rect x="116" y="16" width="28" height="28" fill="white"/>
                <rect x="122" y="22" width="16" height="16" fill="black"/>
                
                <rect x="10" y="110" width="40" height="40" fill="black"/>
                <rect x="16" y="116" width="28" height="28" fill="white"/>
                <rect x="22" y="122" width="16" height="16" fill="black"/>
                
                {/* Center Logo */}
                <rect x="65" y="65" width="30" height="30" fill="black" rx="4"/>
                <text x="80" y="85" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">M</text>
                
                {/* Random QR pattern */}
                <rect x="60" y="10" width="8" height="8" fill="black"/>
                <rect x="76" y="10" width="8" height="8" fill="black"/>
                <rect x="92" y="10" width="8" height="8" fill="black"/>
                <rect x="60" y="26" width="8" height="8" fill="black"/>
                <rect x="84" y="26" width="8" height="8" fill="black"/>
                <rect x="60" y="42" width="8" height="8" fill="black"/>
                <rect x="76" y="42" width="8" height="8" fill="black"/>
                <rect x="92" y="42" width="8" height="8" fill="black"/>
                
                <rect x="10" y="60" width="8" height="8" fill="black"/>
                <rect x="26" y="60" width="8" height="8" fill="black"/>
                <rect x="42" y="60" width="8" height="8" fill="black"/>
                <rect x="10" y="76" width="8" height="8" fill="black"/>
                <rect x="34" y="76" width="8" height="8" fill="black"/>
                <rect x="10" y="92" width="8" height="8" fill="black"/>
                <rect x="26" y="92" width="8" height="8" fill="black"/>
                <rect x="42" y="92" width="8" height="8" fill="black"/>
                
                <rect x="110" y="60" width="8" height="8" fill="black"/>
                <rect x="126" y="60" width="8" height="8" fill="black"/>
                <rect x="142" y="60" width="8" height="8" fill="black"/>
                <rect x="118" y="76" width="8" height="8" fill="black"/>
                <rect x="142" y="76" width="8" height="8" fill="black"/>
                <rect x="110" y="92" width="8" height="8" fill="black"/>
                <rect x="126" y="92" width="8" height="8" fill="black"/>
                <rect x="142" y="92" width="8" height="8" fill="black"/>
                
                <rect x="60" y="110" width="8" height="8" fill="black"/>
                <rect x="76" y="110" width="8" height="8" fill="black"/>
                <rect x="92" y="110" width="8" height="8" fill="black"/>
                <rect x="68" y="126" width="8" height="8" fill="black"/>
                <rect x="84" y="126" width="8" height="8" fill="black"/>
                <rect x="60" y="142" width="8" height="8" fill="black"/>
                <rect x="76" y="142" width="8" height="8" fill="black"/>
                <rect x="92" y="142" width="8" height="8" fill="black"/>
              </svg>
            </div>
            <div className="text-center space-y-1">
              <p className="text-white font-medium">Log in with QR code</p>
              <p className="text-muted-foreground text-sm max-w-[200px]">
                Scan this code with your phone camera to log in instantly
              </p>
            </div>
          </div>
        </div>
      </main>


      {/* Feature Slider Section */}
      <FeatureSlider />

      {/* Footer */}
      <footer className="p-6 flex items-center justify-between">
        <button className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm">
          <span className="text-lg">🇬🇧</span>
          English (United Kingdom)
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <Link to="#" className="text-muted-foreground hover:text-white transition-colors text-sm">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
};

export default Login;
