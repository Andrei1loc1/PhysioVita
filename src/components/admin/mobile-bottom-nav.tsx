"use client";

import { NAV_ITEMS } from "./constants";

export function MobileBottomNav({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pointer-events-none">
      <div className="mx-3 mb-2 bg-white/90 backdrop-blur-2xl border border-[#e8e0d4]/60 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] pointer-events-auto">
        <div className="flex items-center justify-around py-2 pb-[max(0.375rem,env(safe-area-inset-bottom))]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                  isActive ? "bg-[#5a9e76]/10 text-[#5a9e76]" : "text-[#6a6a6a]"
                }`}
              >
                <item.icon className={`w-[20px] h-[20px] transition-colors duration-200`} />
                <span className={`text-[9px] font-semibold tracking-wide`}>
                  {item.label === "Dashboard" ? "Home" : item.label === "Programări" ? "Progr." : item.label === "Statistici" ? "Stats" : item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}