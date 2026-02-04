import { Button } from "@/components/ui/button";
import { Plus, ArrowDown, Info, MoreHorizontal, Home, CirclePlus } from "lucide-react";

const PocketsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Pockets
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Organise your money
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Whether it's for gadgets and getaways or bills, automatically categorise your cash with Pockets. They're sub-accounts that help you control your spend.
            </p>
            <Button className="h-12 px-6 bg-gray-900 text-white hover:bg-gray-800 rounded-full text-base font-medium">
              Create a Pocket
            </Button>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative flex items-center justify-center gap-4">
            {/* Main Phone - Bills View */}
            <div className="relative w-[280px] h-[580px] bg-gradient-to-b from-[hsl(270,40%,25%)] to-[hsl(260,35%,15%)] rounded-[40px] p-4 shadow-2xl">
              {/* Phone Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                  <span className="text-xs">👤</span>
                </div>
                <div className="flex-1 mx-3 h-10 bg-white/10 rounded-full flex items-center px-4">
                  <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
                    </svg>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Balance Section */}
              <div className="text-center mb-6">
                <p className="text-white/60 text-sm mb-1">Bills</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">£100</span>
                  <span className="text-lg text-white/60">.67</span>
                </div>
                <Button variant="secondary" className="mt-3 h-8 px-4 bg-white/20 hover:bg-white/30 text-white text-sm rounded-full border-0">
                  Accounts
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-6 mb-6">
                {[
                  { icon: Plus, label: "Add money" },
                  { icon: ArrowDown, label: "Withdraw" },
                  { icon: Info, label: "Info" },
                  { icon: MoreHorizontal, label: "More" },
                ].map((action) => (
                  <div key={action.label} className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs text-white/60">{action.label}</span>
                  </div>
                ))}
              </div>

              {/* Transactions */}
              <div className="bg-[hsl(260,30%,12%)] rounded-2xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center">
                      <Home className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">House bills</p>
                      <p className="text-white/40 text-xs">14:35</p>
                    </div>
                  </div>
                  <span className="text-white font-medium">-£634</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                      <CirclePlus className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Gym subscription</p>
                      <p className="text-white/40 text-xs">10:20</p>
                    </div>
                  </div>
                  <span className="text-white font-medium">-£29.99</span>
                </div>
                <button className="w-full text-center text-white/60 text-sm hover:text-white transition-colors pt-2">
                  See all
                </button>
              </div>
            </div>

            {/* Secondary Phone - Budget View */}
            <div className="hidden md:block relative w-[200px] h-[420px] bg-[hsl(220,20%,10%)] rounded-[30px] p-3 shadow-xl -ml-8 mt-20">
              {/* Back Arrow */}
              <div className="mb-4">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>

              {/* Header */}
              <div className="mb-4">
                <p className="text-white/60 text-xs">Personal</p>
                <h3 className="text-white font-bold text-lg">Budget</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-green-400 text-xs">On track</span>
                  <span className="text-white/40 text-xs">· 26 Nov-25 Dec</span>
                </div>
              </div>

              {/* Budget Ring */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(220,15%,20%)" strokeWidth="8"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(220,60%,60%)" strokeWidth="8" strokeDasharray="188" strokeDashoffset="47" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(30,80%,60%)" strokeWidth="8" strokeDasharray="188" strokeDashoffset="160" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white/60 text-xs">Left to spend</span>
                  <span className="text-white font-bold text-xl">£424</span>
                  <span className="text-white/40 text-xs">25% · 6 days left</span>
                </div>
              </div>

              {/* Budget Items */}
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <span className="text-blue-400 text-[10px]">●</span>
                    </div>
                    <span className="text-white">Budget</span>
                  </div>
                  <span className="text-blue-400">✎ £1,700</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="text-white/60 text-[10px]">↗</span>
                    </div>
                    <div>
                      <span className="text-white">Spent this month</span>
                      <p className="text-white/40">4 transactions</p>
                    </div>
                  </div>
                  <span className="text-white">-£1,276</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-900"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default PocketsSection;
