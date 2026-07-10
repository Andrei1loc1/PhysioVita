"use client";

import { Activity, Bell } from "lucide-react";
import { site } from "@/config/site.config";

export function MobileTopBar() {
  return (
    <div className="flex items-center justify-between mb-4 lg:hidden">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5a9e76] to-[#a8d5ba] flex items-center justify-center shadow-lg shadow-[#5a9e76]/25">
          <Activity className="w-[18px] h-[18px] text-white" />
        </div>
        <div>
          <div className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[#2a2a2a]">
            {site.brand.prefix}<span className="text-[#5a9e76]">{site.brand.highlight}</span>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#6a6a6a]">Admin</div>
        </div>
      </div>
      <button className="w-9 h-9 rounded-xl bg-white border border-[#e8e0d4] flex items-center justify-center hover:bg-[#f5f0e8] transition-colors relative">
        <Bell className="w-[16px] h-[16px] text-[#5a5a5a]" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#5a9e76] rounded-full border-2 border-white" />
      </button>
    </div>
  );
}