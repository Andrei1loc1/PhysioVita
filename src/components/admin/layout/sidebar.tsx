"use client";

import { motion } from "framer-motion";
import { Activity, Settings, LogOut } from "lucide-react";
import { NAV_ITEMS } from "../constants";
import { site } from "@/config/site.config";

export function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <aside className="fixed top-0 left-0 bottom-0 w-[260px] z-50 hidden lg:flex flex-col bg-white border-r border-[#e8e0d4]">
      <div className="px-6 pt-7 pb-5 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5a9e76] to-[#a8d5ba] flex items-center justify-center shadow-lg shadow-[#5a9e76]/25">
          <Activity className="w-[18px] h-[18px] text-white" />
        </div>
        <div className="font-[family-name:var(--font-heading)] text-[20px] font-extrabold tracking-tight text-[#2a2a2a]">
          {site.brand.prefix}<span className="text-[#5a9e76]">{site.brand.highlight}</span>
        </div>
        <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#6a6a6a] bg-[#f5f0e8] px-2 py-0.5 rounded-md ml-auto">
          Admin
        </span>
      </div>

      <nav className="flex-1 px-3 flex flex-col gap-0.5 mt-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13.5px] font-medium transition-all duration-200 relative text-left group ${
                isActive
                  ? "bg-[#5a9e76]/10 text-[#2a2a2a] font-semibold"
                  : "text-[#5a5a5a] hover:bg-[#f5f0e8] hover:text-[#2a2a2a]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-pill"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-[#5a9e76]"
                  transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                />
              )}
              <item.icon className={`w-[18px] h-[18px] flex-shrink-0 transition-colors duration-200 ${isActive ? "text-[#5a9e76]" : "group-hover:text-[#5a9e76]"}`} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="px-3 pb-3 space-y-1">
        <div className="px-3.5 py-2 rounded-xl hover:bg-[#f5f0e8] flex items-center gap-2.5 text-[#5a5a5a] hover:text-[#2a2a2a] cursor-pointer transition-all">
          <Settings className="w-[16px] h-[16px]" />
          <span className="text-[12.5px] font-medium">Setări</span>
        </div>
        <div className="px-3.5 py-2 rounded-xl hover:bg-[#f5f0e8] flex items-center gap-2.5 text-[#5a5a5a] hover:text-[#2a2a2a] cursor-pointer transition-all">
          <LogOut className="w-[16px] h-[16px]" />
          <span className="text-[12.5px] font-medium">Deconectare</span>
        </div>
      </div>

      <div className="px-4 py-4 mx-3 mb-3 rounded-2xl bg-[#f5f0e8] border border-[#e8e0d4]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5a9e76] to-[#a8d5ba] flex items-center justify-center font-bold text-sm text-white shadow-md shadow-[#5a9e76]/20">
            {site.admin.doctorInitials}
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-[#2a2a2a] truncate">{site.admin.doctorName}</div>
            <div className="text-[10px] text-[#5a5a5a]">{site.admin.doctorTitle}</div>
          </div>
        </div>
      </div>
    </aside>
  );
}