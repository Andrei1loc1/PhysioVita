"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Activity, Heart, CalendarDays, Clock, FileText, ChevronRight, Phone } from "lucide-react";
import { PATIENTS } from "@/lib/data";

export function PatientsTab() {
  const [search, setSearch] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(0);
  const [historyOpen, setHistoryOpen] = useState(false);
  const filtered = PATIENTS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  const p = PATIENTS[selectedPatient];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 items-start">
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] p-4 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <h2 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight text-[#2a2a2a]">Pacienți</h2>
          <span className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full bg-[#5a9e76]/10 text-[#5a9e76]">{PATIENTS.length} activi</span>
        </div>
        <div className="relative mb-3 sm:mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6a6a6a]" />
          <input
            type="text"
            placeholder="Caută pacient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#e8e0d4] bg-[#faf8f4]/80 text-sm text-[#2a2a2a] placeholder-[#6a6a6a] outline-none focus:border-[#5a9e76] focus:ring-2 focus:ring-[#5a9e76]/10 transition-all"
          />
        </div>
        <div className="lg:max-h-[340px] lg:overflow-y-auto -mx-1 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex flex-col gap-1">
            {filtered.map((patient) => {
              const idx = PATIENTS.indexOf(patient);
              return (
                <div
                  key={patient.initials}
                  onClick={() => { setSelectedPatient(idx); setHistoryOpen(true); }}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                    selectedPatient === idx
                      ? "bg-[#5a9e76]/10 border border-[#5a9e76]/15"
                      : "hover:bg-[#f5f0e8]/60"
                  }`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-[11px] sm:text-[13px] text-white flex-shrink-0 shadow-md" style={{ background: patient.color }}>{patient.initials}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] sm:text-[13.5px] font-semibold text-[#2a2a2a] truncate">{patient.name}</div>
                    <div className="text-[10px] sm:text-[11.5px] text-[#5a5a5a]">{patient.treatment}</div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#5a9e76] font-semibold whitespace-nowrap">{patient.nextVisit}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e8e0d4] shadow-[0_2px_12px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="relative bg-gradient-to-r from-[#5a9e76] to-[#7bb891] px-4 sm:px-6 py-3 sm:py-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,oklch(0.88_0.1_155/0.2),transparent_55%)] pointer-events-none" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xs sm:text-sm border border-white/20">
                {p.initials}
              </div>
              <div>
                <div className="font-semibold text-white text-sm sm:text-base">{p.name}</div>
                <div className="text-white/70 text-[10px] sm:text-xs">Pacient din {p.sinceDate} · {p.totalVisits} vizite</div>
              </div>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {[
            { label: "Diagnostic", value: p.diagnosis, color: "bg-[#5a9e76]", icon: Heart },
            { label: "Tratament", value: p.treatment, color: "bg-emerald-400", icon: Activity },
            { label: "Ședințe", value: `${p.sessionsDone} / ${p.sessionsTotal}`, color: "bg-green-500", icon: Clock },
            { label: "Următoarea", value: p.nextVisit, color: "bg-[#c4704a]", icon: CalendarDays },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between bg-[#faf8f4]/80 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3"
            >
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#5a9e76]/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#5a9e76]" />
                </div>
                <span className="text-xs sm:text-sm text-[#5a5a5a]">{item.label}</span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#2a2a2a]">{item.value}</span>
            </div>
          ))}

          <div className="bg-[#5a9e76]/5 rounded-xl p-3 sm:p-4 border border-[#5a9e76]/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium text-[#5a5a5a]">Progres recuperare</span>
              <span className="text-xs sm:text-sm font-bold text-[#5a9e76]">{p.progress}%</span>
            </div>
            <div className="w-full bg-[#5a9e76]/10 rounded-full h-2 sm:h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${p.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
                className="bg-gradient-to-r from-[#5a9e76] to-[#a8d5ba] h-full rounded-full"
              />
            </div>
            <div className="text-[10px] sm:text-xs text-[#5a5a5a] mt-1">{p.sessionsDone} din {p.sessionsTotal} ședințe completate</div>
          </div>

          <div>
            <button
              onClick={() => setHistoryOpen(!historyOpen)}
              className="w-full flex items-center justify-between mb-0 group"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#5a9e76]" />
                <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-tight text-[#2a2a2a]">Istoric medical</h3>
              </div>
              <motion.div
                animate={{ rotate: historyOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4 text-[#6a6a6a]" />
              </motion.div>
            </button>
            <AnimatePresence>
              {historyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 mt-3">
                    {p.history.map((entry, i) => (
                      <div key={i} className="flex items-start gap-2.5 sm:gap-3">
                        <div className="flex flex-col items-center mt-1">
                          <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${entry.type === "evaluation" ? "bg-[#5a9e76]" : "bg-[#ddb892]"}`} />
                          {i < p.history.length - 1 && <div className="w-px h-full bg-[#e8e0d4] mt-1" />}
                        </div>
                        <div className="flex-1 min-w-0 pb-2">
                          <div className="text-[11px] sm:text-xs text-[#5a5a5a] font-medium">{entry.date}</div>
                          <div className="text-[12px] sm:text-[13px] font-semibold text-[#2a2a2a] leading-tight">{entry.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#e8e0d4]/40">
            <Phone className="w-3.5 h-3.5 text-[#5a5a5a]" />
            <span className="text-xs sm:text-sm text-[#5a5a5a]">{p.phone}</span>
            <span className="text-[10px] text-[#6a6a6a] mx-1">·</span>
            <span className="text-xs sm:text-sm text-[#5a5a5a]">{p.age} ani</span>
          </div>
        </div>
      </div>
    </div>
  );
}