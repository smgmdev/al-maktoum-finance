import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeatureSlider from "@/components/login/FeatureSlider";
import FAQSection from "@/components/login/FAQSection";
import LoginHero from "@/components/login/LoginHero";
import FeaturesGrid from "@/components/login/FeaturesGrid";
import AccessWorldSection from "@/components/login/AccessWorldSection";
import BookCallDialog from "@/components/login/BookCallDialog";
import amfLogo from "@/assets/amf-logo.png";
const Login = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
    <div className="min-h-screen bg-black text-foreground overflow-y-auto">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-2 transition-all duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled ? "bg-zinc-900/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-center relative">
          {/* Centered Logo */}
          <Link to="/" className="flex items-center">
            <img src={amfLogo} alt="AMF Logo" className="h-12 w-auto" />
          </Link>

          {/* Right Actions - Absolute positioned */}
          <Button 
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute right-0 bg-white hover:bg-white/90 text-black rounded-full px-6 h-10 text-sm font-medium"
          >
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <LoginHero />

      {/* Feature Slider Section */}
      <div className="bg-white">
        <section className="pt-16 pb-4 max-w-6xl mx-auto px-6">
          <div className="text-center px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-black">Smooth and Easy Online Banking</h2>
          </div>
        </section>
        <FeatureSlider />
      </div>

      {/* Features Grid Section */}
      <FeaturesGrid />

      {/* Access World Video Section */}
      <AccessWorldSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Book a Call CTA Section */}
      <section className="px-6 py-16 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 max-w-2xl">
            Are you looking for high level corporate business bank account with flexible banking solutions?
          </h2>
          <BookCallDialog />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Top Row - Logo & Social */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-white">
              <img src={amfLogo} alt="AMF Logo" className="h-6 w-auto" />
              Al Maktoum Finance
            </Link>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/office-of-h-h-sheikh-abdulhakim-al-maktoum-group-holdings" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <button className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
              <span>🇦🇪</span>
              United Arab Emirates
            </button>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms and Conditions</Link>
          </div>

          {/* Copyright & Disclaimers */}
          <div className="space-y-3 text-xs text-gray-400">
            <p>Al Maktoum Finance is not a bank. Al Maktoum Finance currently does not provide services to clients.</p>
            <p>© Al Maktoum Finance 2026 by AbdulHakim AlMaktoum Kanak Financial Brokerage LLC.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
