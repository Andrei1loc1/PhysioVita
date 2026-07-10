"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Users, BarChart3, Send } from "lucide-react";
import { APPOINTMENTS } from "@/lib/data";
import { STATUS_MAP } from "../constants";
import { WeeklyCalendar } from "../dashboard";

export function AppointmentsTab() {
  const [appointments, setAppointments] = useState(APPOINTMENTS);
  const cycleStatus = (i: number) => {
    const order = ["pending", "confirmed", "done"] as const;
    setAppointments((prev) => prev.map((a, j) => {
      if (j !== i) return a;
      return { ...a, status: order[(order.indexOf(a.status) + 1) % order.length] };
    }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a]">Programări de azi</h2>
          <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-[#5a9e76]/10 text-[#5a9e76]">{appointments.length} prog.</span>
        </div>
        <div className="lg:max-h-[420px] lg:overflow-y-auto -mx-1 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col gap-1.5">
            {appointments.map((apt, i) => {
              const status = STATUS_MAP[apt.status];
              return (
                <motion.div
                  key={`${apt.initials}-${apt.time}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.02, duration: 0.25 }}
                  className="flex items-center gap-2 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl hover:bg-[#f5f0e8]/60 transition-all duration-200 cursor-pointer group"
                  onClick={() => cycleStatus(i)}
                >
                  <span className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-bold text-[#5a9e76] min-w-[38px] sm:min-w-[48px] tracking-tight">{apt.time}</span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-[11px] sm:text-[13px] text-white flex-shrink-0 shadow-md" style={{ background: apt.color }}>{apt.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] sm:text-[13.5px] font-semibold text-[#2a2a2a] leading-tight truncate">{apt.name}</div>
                    <div className="text-[10px] sm:text-[11.5px] text-[#5a5a5a] leading-tight truncate">{apt.service}</div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap transition-all group-hover:scale-105 ${status.bg} ${status.text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                    {status.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a] mb-3 sm:mb-5">Calendar săptămânal</h2>
          <WeeklyCalendar />
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a] mb-3 sm:mb-4">Acțiuni rapide</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {[
              { icon: Plus, label: "Adaugă pacient", color: "[#5a9e76]" },
              { icon: Users, label: "Listă așteptare", color: "amber-500" },
              { icon: BarChart3, label: "Raport zilnic", color: "emerald-500" },
              { icon: Send, label: "Trimite reminder-e", color: "[#c4704a]" },
            ].map((action) => (
              <button key={action.label} className="group flex items-center gap-2.5 p-3 sm:p-4 rounded-2xl border border-[#e8e0d4]/80 bg-[#faf8f4]/50 hover:bg-white hover:border-[#5a9e76]/20 hover:shadow-md transition-all duration-200 text-left">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-${action.color}/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <action.icon className={`w-4 h-4 sm:w-[18px] sm:h-[18px] text-${action.color}`} />
                </div>
                <span className="text-[11px] sm:text-[12.5px] font-semibold text-[#2a2a2a] leading-tight">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}