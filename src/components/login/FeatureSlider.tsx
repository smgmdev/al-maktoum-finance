import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Globe, CreditCard, Smartphone, PiggyBank, Banknote } from "lucide-react";

const features = [
  {
    title: "Hold money in 30+ currencies",
    icon: Banknote,
    gradient: "from-[hsl(220,40%,20%)] to-[hsl(230,45%,15%)]",
    visual: (
      <div className="relative flex items-center justify-center h-40">
        <div className="text-6xl font-bold text-white/20">£ $ €</div>
        <div className="absolute bottom-0 left-0 right-0 bg-[hsl(220,30%,12%)] rounded-lg p-2 text-xs">
          <div className="flex justify-between text-white/60">
            <span>GBP</span>
            <span className="text-green-400">+£10,000</span>
          </div>
          <div className="flex justify-between text-white/40">
            <span>J Perez</span>
            <span>-£11,930.40</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Transfer to 150+ destinations",
    icon: Globe,
    gradient: "from-[hsl(225,40%,22%)] to-[hsl(235,45%,16%)]",
    visual: (
      <div className="relative flex items-center justify-center h-40">
        <div className="w-28 h-28 rounded-full border-2 border-white/20 relative flex items-center justify-center">
          <div className="absolute inset-2 rounded-full border border-orange-400/50"></div>
          <div className="absolute w-2 h-2 bg-orange-400 rounded-full top-1/4 right-1/4"></div>
          <Globe className="w-16 h-16 text-white/30" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[hsl(220,30%,18%)] flex items-center justify-center">
            <span className="text-white">→</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[hsl(220,30%,18%)] flex items-center justify-center">
            <span className="text-white">→</span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[hsl(220,30%,18%)] flex items-center justify-center">
            <span className="text-white/60">↻</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Make your spend stress-free",
    icon: CreditCard,
    gradient: "from-[hsl(220,40%,20%)] to-[hsl(230,45%,15%)]",
    visual: (
      <div className="relative flex items-center justify-center h-40">
        <div className="relative">
          <div className="w-20 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg transform rotate-[-15deg] absolute -left-4"></div>
          <div className="w-20 h-32 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg transform rotate-[-5deg] absolute left-0"></div>
          <div className="w-20 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg transform rotate-[5deg] relative left-4"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-[hsl(220,30%,12%)] rounded-lg p-3">
          <div className="text-white font-semibold">£75,080</div>
          <div className="text-white/40 text-xs">Left of £100,000</div>
          <div className="w-full h-1 bg-white/20 rounded-full mt-2">
            <div className="w-3/4 h-full bg-orange-400 rounded-full"></div>
          </div>
          <div className="text-white/40 text-[10px] mt-1">Resets on the 1st of each month</div>
        </div>
      </div>
    ),
  },
  {
    title: "Accept payments easily, anywhere",
    icon: Smartphone,
    gradient: "from-[hsl(225,40%,22%)] to-[hsl(235,45%,16%)]",
    visual: (
      <div className="relative flex items-center justify-center h-40">
        <div className="flex gap-2">
          <div className="w-16 h-24 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg"></div>
          <div className="w-12 h-8 bg-white rounded-md self-end"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-[hsl(220,30%,12%)] rounded-lg p-2 flex items-center gap-2">
          <div className="w-6 h-4 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-[8px] font-bold">VISA</span>
          </div>
          <div className="flex-1">
            <div className="text-white text-xs">Iced latte ··0034</div>
            <div className="text-white/40 text-[10px]">07:15</div>
          </div>
          <span className="text-green-400 text-xs">+£5.50</span>
        </div>
      </div>
    ),
  },
  {
    title: "Put your money to work",
    icon: PiggyBank,
    gradient: "from-[hsl(220,40%,20%)] to-[hsl(230,45%,15%)]",
    visual: (
      <div className="relative flex items-center justify-center h-40">
        <div className="flex gap-1">
          <div className="w-6 h-32 bg-gradient-to-b from-gray-500 to-gray-700 rounded"></div>
          <div className="w-6 h-28 bg-gradient-to-b from-gray-500 to-gray-700 rounded mt-4"></div>
          <div className="w-6 h-24 bg-gradient-to-b from-gray-500 to-gray-700 rounded mt-8"></div>
        </div>
        <div className="absolute bottom-2 right-2 bg-orange-500 rounded-full px-3 py-1 flex items-center gap-1">
          <div className="w-4 h-4 bg-white/20 rounded-full"></div>
          <span className="text-white text-xs font-medium">Savings</span>
        </div>
      </div>
    ),
  },
];

const FeatureSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);

    // Auto-scroll every 4 seconds
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-12 overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex-none w-[280px] md:w-[320px] bg-gradient-to-b ${feature.gradient} rounded-3xl p-6 transition-opacity duration-300 ${
                selectedIndex === index ? "opacity-100" : "opacity-60"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                {feature.title}
              </h3>
              {feature.visual}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index ? "bg-black w-4" : "bg-black/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSlider;
