const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-gold" />
              <div>
                <p className="text-foreground font-serif text-lg font-semibold">
                  Al Maktoum <span className="text-primary">Finance</span>
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Premium banking for the elite.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Al Maktoum Finance. All rights reserved.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-1">
              This is a mockup landing page for demonstration purposes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
