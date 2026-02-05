import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Settings, Search, Plus, ArrowDown, Info, MoreHorizontal, ShoppingCart, Home, Dumbbell, CreditCard, Send, Repeat } from "lucide-react";

const PhoneMockup1 = () => (
  <div className="w-64 h-[500px] bg-black rounded-[2.5rem] p-3 shadow-2xl">
    <div className="w-full h-full bg-zinc-900 rounded-[2rem] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <ChevronLeft className="w-5 h-5 text-white" />
        <span className="text-white text-sm font-medium">Al Maktoum Personal</span>
        <Settings className="w-5 h-5 text-white" />
      </div>
      
      {/* Tabs */}
      <div className="flex gap-2 px-4 mb-6">
        <span className="bg-white text-black text-xs px-3 py-1.5 rounded-full font-medium">Spending</span>
        <span className="text-white/60 text-xs px-3 py-1.5">Income</span>
        <span className="text-white/60 text-xs px-3 py-1.5">Cashflow</span>
        <span className="text-white/60 text-xs px-3 py-1.5">Budget</span>
      </div>
      
      {/* Donut Chart */}
      <div className="flex justify-center mb-4">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="80 251" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray="60 251" strokeDashoffset="-80" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#a3a3a3" strokeWidth="8" strokeDasharray="40 251" strokeDashoffset="-140" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#d4a574" strokeWidth="8" strokeDasharray="30 251" strokeDashoffset="-180" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white/60 text-xs">Spent</span>
            <span className="text-white text-2xl font-bold">AED 3,547</span>
            <span className="text-white/60 text-xs">January</span>
          </div>
        </div>
      </div>
      
      {/* Time Tabs */}
      <div className="flex justify-center gap-2 mb-6">
        <span className="text-white/60 text-xs px-3 py-1">1W</span>
        <span className="bg-zinc-700 text-white text-xs px-3 py-1 rounded-full">1M</span>
        <span className="text-white/60 text-xs px-3 py-1">6M</span>
        <span className="text-white/60 text-xs px-3 py-1">1Y</span>
      </div>
      
      {/* Category */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white text-sm">By Category</span>
          <span className="text-blue-400 text-xs">Manage</span>
        </div>
        <div className="flex items-center justify-between bg-zinc-800 rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-white text-sm">Groceries</span>
              <p className="text-white/60 text-xs">38 transactions</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-white text-sm">-AED 1,356</span>
            <p className="text-white/60 text-xs">38%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PhoneMockup2 = () => (
  <div className="w-64 h-[500px] bg-gradient-to-b from-purple-300 to-purple-400 rounded-[2.5rem] p-3 shadow-2xl">
    <div className="w-full h-full bg-gradient-to-b from-purple-200/80 to-purple-300/80 rounded-[2rem] overflow-hidden backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="w-8 h-8 bg-white/30 rounded-full" />
        <Search className="w-5 h-5 text-gray-700" />
      </div>
      
      {/* Bills Card */}
      <div className="px-4 mb-4">
        <div className="text-center">
          <span className="text-gray-600 text-sm">Bills</span>
          <p className="text-gray-900 text-3xl font-bold">AED 369<span className="text-lg">.67</span></p>
        </div>
        <div className="flex justify-center mt-3">
          <span className="bg-white/50 text-gray-700 text-xs px-4 py-1.5 rounded-full">Accounts</span>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-6">
        {[
          { icon: Plus, label: "Add money" },
          { icon: ArrowDown, label: "Withdraw" },
          { icon: Info, label: "Info" },
          { icon: MoreHorizontal, label: "More" },
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
              <action.icon className="w-4 h-4 text-gray-700" />
            </div>
            <span className="text-gray-700 text-[10px]">{action.label}</span>
          </div>
        ))}
      </div>
      
      {/* Transactions */}
      <div className="px-4 space-y-3">
        <div className="flex items-center justify-between bg-white/40 rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-orange-500" />
            </div>
            <div>
              <span className="text-gray-900 text-sm font-medium">House bills</span>
              <p className="text-gray-600 text-xs">14:35</p>
            </div>
          </div>
          <span className="text-gray-900 text-sm">-AED 2,327</span>
        </div>
        
        <div className="flex items-center justify-between bg-white/40 rounded-xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <span className="text-gray-900 text-sm font-medium">Gym subscription</span>
              <p className="text-gray-600 text-xs">10:20</p>
            </div>
          </div>
          <span className="text-gray-900 text-sm">-AED 110</span>
        </div>
        
        <div className="text-center">
          <span className="text-gray-600 text-sm">See all</span>
        </div>
      </div>
    </div>
  </div>
);

const PhoneMockup3 = () => (
  <div className="w-64 h-[500px] bg-gradient-to-b from-blue-400 to-blue-600 rounded-[2.5rem] p-3 shadow-2xl">
    <div className="w-full h-full bg-gradient-to-b from-blue-500/90 to-blue-700/90 rounded-[2rem] overflow-hidden backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        <ChevronLeft className="w-5 h-5 text-white" />
        <span className="text-white text-sm font-medium">Transfers</span>
        <Settings className="w-5 h-5 text-white" />
      </div>
      
      {/* Balance */}
      <div className="px-4 mb-6">
        <div className="text-center">
          <span className="text-white/70 text-sm">Available Balance</span>
          <p className="text-white text-4xl font-bold mt-1">AED 12,450</p>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="flex justify-center gap-8 mb-8">
        {[
          { icon: Send, label: "Send" },
          { icon: ArrowDown, label: "Request" },
          { icon: Repeat, label: "Exchange" },
        ].map((action, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs">{action.label}</span>
          </div>
        ))}
      </div>
      
      {/* Recent Transfers */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white text-sm font-medium">Recent Transfers</span>
          <span className="text-white/70 text-xs">View all</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white/10 rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-white text-sm">To USD Account</span>
                <p className="text-white/60 text-xs">Today, 09:45</p>
              </div>
            </div>
            <span className="text-white text-sm">-AED 5,000</span>
          </div>
          
          <div className="flex items-center justify-between bg-white/10 rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-400/30 rounded-full flex items-center justify-center">
                <Send className="w-4 h-4 text-green-300" />
              </div>
              <div>
                <span className="text-white text-sm">From Ahmed K.</span>
                <p className="text-white/60 text-xs">Yesterday</p>
              </div>
            </div>
            <span className="text-green-300 text-sm">+AED 1,200</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SpendingInsights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [PhoneMockup1, PhoneMockup2, PhoneMockup3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-500 text-lg">Spending insights</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Analyse your money
            </h2>
            <p className="text-gray-600 text-lg max-w-md">
              Dive deep into your cashflow, set a budget, and review your spend all in a few taps.
            </p>
            <Button className="bg-black hover:bg-black/90 text-white rounded-full px-8 py-6 text-base font-medium">
              Try budgeting tools
            </Button>
          </div>

          {/* Right Phone Slider */}
          <div className="flex justify-center lg:justify-end overflow-hidden">
            <div className="relative w-full max-w-lg">
              {/* Phone Mockups Carousel */}
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(calc(-${currentSlide * 280}px + 20px))` }}
              >
                <div className="flex-shrink-0 px-2">
                  <PhoneMockup1 />
                </div>
                <div className="flex-shrink-0 px-2 ml-4">
                  <PhoneMockup2 />
                </div>
                <div className="flex-shrink-0 px-2 ml-4">
                  <PhoneMockup3 />
                </div>
              </div>
              {/* Fade overlay on the right edge */}
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? "bg-black w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpendingInsights;
