const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div>
            <p className="text-sm font-serif font-medium text-foreground tracking-tight">
              Al Maktoum Finance
            </p>
          </div>
          
          {/* Links */}
          <div className="flex gap-8">
            <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          {/* Copyright */}
          <div>
            <p className="text-xs text-muted-foreground">
              © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
