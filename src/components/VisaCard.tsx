const VisaCard = () => {
  return (
    <div className="relative perspective-1000">
      <div className="relative w-80 h-48 md:w-96 md:h-56 animate-card-float transform-gpu">
        {/* Card Background */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-secondary via-muted to-secondary border border-border shadow-gold-lg overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent blur-2xl transform -translate-x-1/2 translate-y-1/2" />
          </div>
          
          {/* Card Content */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Top Row - Chip and Logo */}
            <div className="flex justify-between items-start">
              {/* EMV Chip */}
              <div className="w-12 h-9 rounded-md bg-gradient-gold-shimmer opacity-90" />
              
              {/* Al Maktoum Finance Logo */}
              <div className="text-right">
                <p className="text-xs text-muted-foreground tracking-widest uppercase">Al Maktoum</p>
                <p className="text-sm font-serif text-primary font-semibold tracking-wide">Finance</p>
              </div>
            </div>
            
            {/* Card Number */}
            <div className="mt-4">
              <p className="text-lg md:text-xl tracking-[0.25em] text-foreground font-mono">
                •••• •••• •••• 8421
              </p>
            </div>
            
            {/* Bottom Row - Cardholder and VISA */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Card Holder</p>
                <p className="text-sm text-foreground tracking-wider">PLATINUM MEMBER</p>
              </div>
              
              {/* VISA Logo */}
              <div className="text-right">
                <p className="text-2xl md:text-3xl font-bold italic text-primary tracking-tight">VISA</p>
              </div>
            </div>
          </div>
          
          {/* Shimmer Effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-shimmer"
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
