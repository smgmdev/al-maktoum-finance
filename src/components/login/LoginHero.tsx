import { Button } from "@/components/ui/button";
import heroImage from "@/assets/personal-hero.jpg";

const LoginHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-xl space-y-6">
          {/* Subtitle */}
          <p className="text-white/70 text-lg">
            Accept payments
          </p>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]">
            Payments built for growth
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-md leading-relaxed">
            Combine your sales and your company finances into one account with Al Maktoum Finance. From next-day settlement to transparent fees — access everything together.
          </p>
          
          {/* Terms Link */}
          <p className="text-white/80">
            <a href="#" className="underline hover:text-white transition-colors">Fees and T&Cs</a> apply.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-white hover:bg-white/90 text-black rounded-full px-8 h-12 text-base font-medium">
              Get started
            </Button>
            <Button 
              variant="outline" 
              className="border-white/40 bg-transparent hover:bg-white/10 text-white rounded-full px-8 h-12 text-base font-medium"
            >
              Speak to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
