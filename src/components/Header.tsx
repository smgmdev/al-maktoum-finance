import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById("whitelist-signup");
    signupSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-lg md:text-xl font-semibold text-foreground tracking-tight">
              Al Maktoum
            </a>
            
            {/* Nav Links - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="/personal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Personal
              </a>
              <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Business
              </a>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
            </nav>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-sm text-muted-foreground hover:text-foreground"
            >
              Log in
            </Button>
            <Button 
              onClick={scrollToSignup}
              className="h-10 px-5 bg-foreground text-background hover:bg-foreground/90 rounded-full text-sm font-medium"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
