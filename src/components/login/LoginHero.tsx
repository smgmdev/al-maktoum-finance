import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginHero = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.7 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-2xl space-y-6">
          <p className="text-white/70 text-lg">Main account</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Open an Al Maktoum account for free
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-lg">
            Smoothly send, spend, save, and more with 24/7 customer support in-app. Your money will thank you.
          </p>
          
          <Link to="#whitelist-signup">
            <Button className="mt-4 h-12 bg-white hover:bg-white/90 text-black rounded-full px-8 text-base font-medium">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginHero;
