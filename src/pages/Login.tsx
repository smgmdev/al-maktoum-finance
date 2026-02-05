import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FeatureSlider from "@/components/login/FeatureSlider";
import FAQSection from "@/components/login/FAQSection";
import LoginHero from "@/components/login/LoginHero";
import FeaturesGrid from "@/components/login/FeaturesGrid";
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
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled ? "bg-zinc-900/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo & Nav */}
          <Link to="/" className="flex items-center">
            <img src={amfLogo} alt="AMF Logo" className="h-12 w-auto" />
          </Link>

          {/* Right Actions */}
          <Button className="bg-white hover:bg-white/90 text-black rounded-full px-6 h-10 text-sm font-medium">
            Sign up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <LoginHero />

      {/* Features Grid Section */}
      <FeaturesGrid />

      {/* Feature Slider Section */}
      <div className="bg-white">
        <section className="pt-16 pb-4 max-w-6xl mx-auto px-6">
          <div className="text-center space-y-2 px-6">
            <p className="text-gray-500 text-sm">Discover more</p>
            <h2 className="text-2xl md:text-3xl font-bold text-black">Al Maktoum Business Features</h2>
          </div>
        </section>
        <FeatureSlider />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="px-6 py-10 bg-[#f5f5f7] border-t border-gray-200">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Top Row - Logo & Social */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <img src={amfLogo} alt="AMF Logo" className="h-5 w-auto" />
              Al Maktoum Finance
            </Link>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 transition-colors">
              <span>🇦🇪</span>
              United Arab Emirates
            </button>
            <Link to="#" className="text-gray-500 hover:text-gray-900 transition-colors">Website Terms</Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 transition-colors">Legal Agreements</Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 transition-colors">Complaints</Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy</Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 transition-colors">Customer Vulnerability</Link>
          </div>

          {/* Copyright & Disclaimers */}
          <div className="space-y-3 text-xs text-gray-500">
            <p>© Al Maktoum Finance Ltd 2026</p>
            <p>
              If you would like to find out more about which Al Maktoum Finance entity you receive services from, or if you have any other questions, please reach out to us via the in-app chat.
            </p>
            <p>
              Al Maktoum Finance Ltd is authorised by the Financial Services Regulatory Authority under the Electronic Money Regulations. Registered address: Dubai International Financial Centre, Dubai, UAE.
            </p>
            <p>
              Investment services are provided by Al Maktoum Finance Trading Ltd, which is authorised and regulated by the Financial Services Regulatory Authority.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
