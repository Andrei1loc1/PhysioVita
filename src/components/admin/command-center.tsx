"use client";

import { CalendarDays, CheckCircle2, Clock, XCircle } from "lucide-react";
import { APPOINTMENTS } from "@/lib/data";
import { FadeInUp } from "@/components/shared/animations";

export function CommandCenter() {
  const nextPatient = APPOINTMENTS[0];

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 bg-gradient-to-br from-[#f5f0e8] via-white to-[#e8f0e4] border border-[#e0d8c8]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,oklch(0.72_0.07_155/0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,oklch(0.62_0.1_35/0.05),transparent_50%)] pointer-events-none" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-center">
          <FadeInUp>
            <div className="inline-flex items-center gap-2 bg-[#5a9e76]/10 border border-[#5a9e76]/15 rounded-full px-3 py-1 mb-3 sm:mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#5a9e76] shadow-[0_0_8px_rgba(90,158,118,0.6)]" />
              <span className="text-[10px] sm:text-xs font-semibold text-[#5a9e76] uppercase tracking-wider">Clinica deschisă</span>
            </div>
            <div className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-[#2a2a2a] mb-1 sm:mb-2">
              Bună dimineața, <span className="text-[#5a9e76]">Dr. Popescu</span>
            </div>
            <div className="text-xs sm:text-sm text-[#5a5a5a] mb-4 sm:mb-6">
              {new Date().toLocaleDateString("ro-RO", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </div>
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#e0d8c8]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-white text-sm sm:text-base shadow-lg flex-shrink-0" style={{ background: nextPatient.color }}>
                {nextPatient.initials}
              </div>
              <div className="min-w-0">
                <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-[#5a9e76] font-bold mb-0.5">
                  Următorul pacient
                </div>
                <div className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-bold tracking-tight text-[#2a2a2a] truncate">
                  {nextPatient.name}
                </div>
                <div className="text-xs sm:text-sm text-[#5a5a5a] truncate">
                  {nextPatient.time} — {nextPatient.service}
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
        <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-center gap-3 sm:gap-4 border-t lg:border-t-0 lg:border-l border-[#e0d8c8]/50">
          {[
            { icon: CalendarDays, value: "12", label: "programări azi", bg: "bg-[#5a9e76]/10", text: "text-[#5a9e76]" },
            { icon: CheckCircle2, value: "8", label: "confirmate", bg: "bg-emerald-50", text: "text-emerald-600" },
            { icon: Clock, value: "3", label: "în așteptare", bg: "bg-amber-50", text: "text-amber-600" },
            { icon: XCircle, value: "1", label: "anulată", bg: "bg-red-50", text: "text-red-500" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2.5 sm:gap-3.5">
              <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${s.bg}`}>
                <s.icon className={`w-[18px] h-[18px] ${s.text}`} />
              </div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold tracking-tight text-[#2a2a2a] leading-none mb-0.5">{s.value}</div>
                <div className="text-[11px] sm:text-xs text-[#5a5a5a] font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}