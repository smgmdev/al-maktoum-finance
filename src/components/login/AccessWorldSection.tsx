import { Button } from "@/components/ui/button";
import BookCallDialog from "./BookCallDialog";

const AccessWorldSection = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/access-world-bg.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Access the world for personal and business needs
          </h2>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-white/90 text-black rounded-full px-6 h-12 text-base font-medium"
            >
              Sign Up for personal account
            </Button>
            <BookCallDialog 
              trigger={
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-6 h-12 text-base font-medium"
                >
                  Book a call for business account
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessWorldSection;
