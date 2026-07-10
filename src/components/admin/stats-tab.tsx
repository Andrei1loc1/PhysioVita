"use client";

import { motion } from "framer-motion";
import { Users, CalendarDays, XCircle, TrendingUp, Bell, ChevronRight } from "lucide-react";
import { REMINDERS, RECORDS } from "@/lib/data";
import { ScaleIn } from "@/components/shared/animations";
import { useCountUp } from "@/components/shared/use-count-up";

export function StatsTab() {
  const stat1 = useCountUp(142);
  const stat3 = useCountUp(3);

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {[
          { icon: Users, value: "142", label: "Pacienți noi luna aceasta", change: "+12%", positive: true, ref: stat1.ref, display: stat1.displayValue, bg: "bg-[#5a9e76]/10", iconBg: "bg-[#5a9e76]", text: "text-[#5a9e76]" },
          { icon: CalendarDays, value: "34,200", label: "Total programări", change: "+8%", positive: true, ref: null, display: null, bg: "bg-emerald-50", iconBg: "bg-emerald-500", text: "text-emerald-600" },
          { icon: XCircle, value: "3", label: "Neprezentări", change: "-5%", positive: false, ref: stat3.ref, display: stat3.displayValue, bg: "bg-red-50", iconBg: "bg-red-500", text: "text-red-500" },
        ].map((card, i) => (
          <ScaleIn key={card.label} delay={i * 0.1}>
            <div className="relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] group hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#f5f0e8] to-transparent rounded-bl-full pointer-events-none" />
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${card.iconBg} flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-black/10`}>
                <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2a2a2a]">
                {card.ref ? <span ref={card.ref}>{card.display}</span> : card.value}
              </div>
              <div className="text-xs sm:text-sm text-[#5a5a5a] mt-1">{card.label}</div>
              <div className={`flex items-center gap-1 mt-2 text-xs sm:text-sm font-semibold ${card.positive ? "text-emerald-600" : "text-red-500"}`}>
                <TrendingUp className="w-3.5 h-3.5" />
                {card.change}
              </div>
            </div>
          </ScaleIn>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a]">Rechemări automate</h2>
            <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-[#5a9e76]/10 text-[#5a9e76]">{REMINDERS.length} programate</span>
          </div>
          <div className="flex flex-col gap-2">
            {REMINDERS.map((rem, i) => (
              <motion.div
                key={rem.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.25 }}
                className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-[#faf8f4] border border-[#e8e0d4]/60 hover:border-[#5a9e76]/15 hover:bg-[#5a9e76]/5 transition-all"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#5a9e76]/10 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5a9e76]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] sm:text-[13px] font-semibold text-[#2a2a2a] truncate">{rem.name}</div>
                  <div className="text-[10px] sm:text-[11.5px] text-[#5a5a5a] truncate">{rem.detail}</div>
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-[#5a9e76] font-[family-name:var(--font-heading)] whitespace-nowrap">{rem.time}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
          <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a] mb-4 sm:mb-5">Fișe medicale recente</h2>
          <div className="flex flex-col gap-2">
            {RECORDS.map((rec, i) => (
              <motion.div key={rec.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04, duration: 0.25 }}
                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl bg-[#faf8f4] border border-[#e8e0d4]/60 hover:border-[#5a9e76]/15 transition-all cursor-pointer group"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: rec.color }} />
                <div className="flex-1 min-w-0"><div className="text-[11px] sm:text-[12.5px] font-semibold text-[#2a2a2a] leading-tight truncate">{rec.name}</div><div className="text-[10px] sm:text-[11px] text-[#5a5a5a] leading-tight truncate">{rec.detail}</div></div>
                <div className="text-[10px] sm:text-[10.5px] text-[#6a6a6a] font-semibold whitespace-nowrap">{rec.date}</div>
                <ChevronRight className="w-3.5 h-3.5 text-[#6a6a6a] group-hover:text-[#5a9e76] transition-colors" />
              </motion.div>
            ))}
          </div>
          <div className="border-t border-[#e8e0d4] my-4 sm:my-5" />
          <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a] mb-3 sm:mb-4">Statistici rapide</h2>
          <div className="space-y-2.5 sm:space-y-3">
            {[
              { label: "Pacienți luna aceasta", value: "142", color: "" },
              { label: "Programări săptămâna asta", value: "48", color: "" },
              { label: "Rata de confirmare", value: "92%", color: "text-emerald-600" },
              { label: "Venit estimat lună", value: "34.200 lei", color: "text-[#5a9e76]" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-1">
                <span className="text-[11px] sm:text-[13px] text-[#5a5a5a]">{item.label}</span>
                <span className={`font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold ${item.color || "text-[#2a2a2a]"}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}