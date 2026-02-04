import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";

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

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} Login`,
      description: `${provider} authentication would be triggered here.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(210,50%,12%)] via-[hsl(215,45%,10%)] to-[hsl(220,40%,8%)] text-foreground">
      {/* Header */}
      <header className="p-6">
        <Link to="/" className="text-lg font-semibold text-white tracking-tight">
          Al Maktoum
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-140px)] px-6">
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

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[hsl(215,25%,25%)]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-muted-foreground">or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="w-full h-11 bg-[hsl(215,20%,20%)] hover:bg-[hsl(215,20%,25%)] text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>

              <Button
                type="button"
                onClick={() => handleSocialLogin("Apple")}
                className="w-full h-11 bg-[hsl(215,20%,20%)] hover:bg-[hsl(215,20%,25%)] text-white rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                Continue with Apple
              </Button>
            </div>

            {/* Create Account */}
            <div className="pt-4 space-y-3">
              <p className="text-center text-muted-foreground text-sm">
                Don't have an account?
              </p>
              <Button
                type="button"
                variant="outline"
                className="w-full h-11 bg-[hsl(215,20%,18%)] hover:bg-[hsl(215,20%,22%)] border-[hsl(215,25%,25%)] text-white rounded-lg text-sm font-medium transition-all"
                asChild
              >
                <Link to="/">Create account</Link>
              </Button>
            </div>
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

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 flex items-center justify-between">
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
