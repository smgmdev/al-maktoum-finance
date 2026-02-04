import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Plus, ArrowDown, Info, MoreHorizontal, Home, CirclePlus } from "lucide-react";

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

      {/* Pockets Slider Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-sm font-medium text-white/50 uppercase tracking-wider">
                Pockets
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Organise your money
              </h2>
              <p className="text-base text-white/60 leading-relaxed max-w-lg">
                Whether it's for gadgets and getaways or bills, automatically categorise your cash with Pockets. They're sub-accounts that help you control your spend.
              </p>
              <Button className="h-11 px-6 bg-white text-gray-900 hover:bg-white/90 rounded-full text-sm font-medium">
                Create a Pocket
              </Button>
            </div>

            {/* Right - Phone Mockups */}
            <div className="relative flex items-center justify-center gap-4">
              {/* Main Phone - Bills View */}
              <div className="relative w-[260px] h-[520px] bg-gradient-to-b from-[hsl(270,40%,25%)] to-[hsl(260,35%,15%)] rounded-[36px] p-4 shadow-2xl">
                {/* Phone Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                    <span className="text-xs">👤</span>
                  </div>
                  <div className="flex-1 mx-3 h-9 bg-white/10 rounded-full flex items-center px-3">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
                      </svg>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Balance Section */}
                <div className="text-center mb-5">
                  <p className="text-white/60 text-sm mb-1">Bills</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-white">£100</span>
                    <span className="text-base text-white/60">.67</span>
                  </div>
                  <Button variant="secondary" className="mt-2 h-7 px-3 bg-white/20 hover:bg-white/30 text-white text-xs rounded-full border-0">
                    Accounts
                  </Button>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-5 mb-5">
                  {[
                    { icon: Plus, label: "Add money" },
                    { icon: ArrowDown, label: "Withdraw" },
                    { icon: Info, label: "Info" },
                    { icon: MoreHorizontal, label: "More" },
                  ].map((action) => (
                    <div key={action.label} className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[10px] text-white/60">{action.label}</span>
                    </div>
                  ))}
                </div>

                {/* Transactions */}
                <div className="bg-[hsl(260,30%,12%)] rounded-xl p-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center">
                        <Home className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-xs">House bills</p>
                        <p className="text-white/40 text-[10px]">14:35</p>
                      </div>
                    </div>
                    <span className="text-white font-medium text-xs">-£634</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center">
                        <CirclePlus className="w-4 h-4 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-xs">Gym subscription</p>
                        <p className="text-white/40 text-[10px]">10:20</p>
                      </div>
                    </div>
                    <span className="text-white font-medium text-xs">-£29.99</span>
                  </div>
                  <button className="w-full text-center text-white/60 text-xs hover:text-white transition-colors pt-1">
                    See all
                  </button>
                </div>
              </div>

              {/* Secondary Phone - Budget View */}
              <div className="hidden md:block relative w-[180px] h-[380px] bg-[hsl(220,20%,10%)] rounded-[28px] p-3 shadow-xl -ml-8 mt-16">
                {/* Back Arrow */}
                <div className="mb-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>

                {/* Header */}
                <div className="mb-3">
                  <p className="text-white/60 text-[10px]">Personal</p>
                  <h3 className="text-white font-bold text-base">Budget</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    <span className="text-green-400 text-[10px]">On track</span>
                    <span className="text-white/40 text-[10px]">· 26 Nov-25 Dec</span>
                  </div>
                </div>

                {/* Budget Ring */}
                <div className="relative w-28 h-28 mx-auto mb-3">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(220,15%,20%)" strokeWidth="8"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(220,60%,60%)" strokeWidth="8" strokeDasharray="188" strokeDashoffset="47" strokeLinecap="round"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(30,80%,60%)" strokeWidth="8" strokeDasharray="188" strokeDashoffset="160" strokeLinecap="round"/>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-white/60 text-[10px]">Left to spend</span>
                    <span className="text-white font-bold text-lg">£424</span>
                    <span className="text-white/40 text-[9px]">25% · 6 days left</span>
                  </div>
                </div>

                {/* Budget Items */}
                <div className="space-y-2 text-[10px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-blue-900/50 flex items-center justify-center">
                        <span className="text-blue-400 text-[8px]">●</span>
                      </div>
                      <span className="text-white">Budget</span>
                    </div>
                    <span className="text-blue-400">✎ £1,700</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white/60 text-[8px]">↗</span>
                      </div>
                      <div>
                        <span className="text-white">Spent this month</span>
                        <p className="text-white/40 text-[9px]">4 transactions</p>
                      </div>
                    </div>
                    <span className="text-white">-£1,276</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </section>

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
