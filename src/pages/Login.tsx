import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Plus, ArrowDown, Info, MoreHorizontal, Home, CirclePlus } from "lucide-react";
import FeatureSlider from "@/components/login/FeatureSlider";
import FAQSection from "@/components/login/FAQSection";

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

          {/* Visa Card Section */}
          <div className="hidden lg:flex flex-col items-center">
            <img 
              src="/src/assets/visa-card.png" 
              alt="Al Maktoum Visa Card" 
              className="w-[320px] h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </main>


      {/* Feature Slider Section */}
      <FeatureSlider />

      {/* FAQ Section */}
      <FAQSection />

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
