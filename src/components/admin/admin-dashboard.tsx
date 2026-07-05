"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  BarChart3,
  Bell,
  Plus,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Send,
  TrendingUp,
  ChevronRight,
  Activity,
  Settings,
  LogOut,
  XIcon,
  Heart,
  FileText,
  Phone,
} from "lucide-react";
import { APPOINTMENTS, PATIENTS, REMINDERS, RECORDS } from "@/lib/data";
import { FadeInUp, ScaleIn } from "@/components/shared/animations";
import { useCountUp } from "@/components/shared/use-count-up";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: CalendarDays, label: "Programări", id: "appointments" },
  { icon: Users, label: "Pacienți", id: "patients" },
  { icon: BarChart3, label: "Statistici", id: "stats" },
];

const STATUS_MAP: Record<string, { label: string; dot: string; bg: string; text: string }> = {
  confirmed: { label: "Confirmat", dot: "bg-emerald-400", bg: "bg-emerald-50", text: "text-emerald-700" },
  pending: { label: "În așteptare", dot: "bg-amber-400", bg: "bg-amber-50", text: "text-amber-700" },
  done: { label: "Finalizat", dot: "bg-gray-400", bg: "bg-gray-50", text: "text-gray-500" },
};

function Sidebar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <aside className="fixed top-0 left-0 bottom-0 w-[260px] z-50 hidden lg:flex flex-col bg-white border-r border-[#e8e0d4]">
      <div className="px-6 pt-7 pb-5 flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5a9e76] to-[#a8d5ba] flex items-center justify-center shadow-lg shadow-[#5a9e76]/25">
          <Activity className="w-[18px] h-[18px] text-white" />
        </div>
        <div className="font-[family-name:var(--font-heading)] text-[20px] font-extrabold tracking-tight text-[#2a2a2a]">
          Physio<span className="text-[#5a9e76]">Vita</span>
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
            AP
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-[#2a2a2a] truncate">Dr. Andrei Popescu</div>
            <div className="text-[10px] text-[#5a5a5a]">Medic specialist recuperare</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function MobileTopBar() {
  return (
    <div className="flex items-center justify-between mb-4 lg:hidden">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5a9e76] to-[#a8d5ba] flex items-center justify-center shadow-lg shadow-[#5a9e76]/25">
          <Activity className="w-[18px] h-[18px] text-white" />
        </div>
        <div>
          <div className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight text-[#2a2a2a]">
            Physio<span className="text-[#5a9e76]">Vita</span>
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

function MobileBottomNav({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
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

function WeeklyCalendar() {
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return d;
  });
  const dayNames = ["Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"];
  const slotsPerDay: Record<number, number> = { 0: 4, 1: 6, 2: 3, 3: 5, 4: 7, 5: 1, 6: 0 };

  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day, i) => {
        const isToday = day.toDateString() === today.toDateString();
        const slots = slotsPerDay[i] || 0;
        return (
          <div key={i} className={`rounded-2xl p-2 sm:p-3 text-center cursor-pointer transition-all duration-300 ${isToday ? "bg-gradient-to-br from-[#5a9e76] to-[#7bb891] text-white shadow-lg shadow-[#5a9e76]/25" : "hover:bg-[#f5f0e8]/80"}`}>
            <div className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mb-1 ${isToday ? "text-white/70" : "text-[#6a6a6a]"}`}>
              {dayNames[i]}
            </div>
            <div className={`text-sm sm:text-lg font-bold font-[family-name:var(--font-heading)] ${isToday ? "text-white" : "text-[#2a2a2a]"}`}>
              {day.getDate()}
            </div>
            {slots > 0 && (
              <div className={`text-[8px] sm:text-[10px] font-medium mt-0.5 ${isToday ? "text-white/70" : "text-[#6a6a6a]"}`}>
                {slots} prog.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CommandCenter() {
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

function AppointmentsTab() {
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

function PatientsTab() {
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

function StatsTab() {
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

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
      case "appointments":
        return <AppointmentsTab />;
      case "patients":
        return <PatientsTab />;
      case "stats":
        return <StatsTab />;
      default:
        return <AppointmentsTab />;
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 lg:ml-[260px] p-4 sm:p-5 md:p-8 pb-28 lg:pb-8">
        <MobileTopBar />

        <div className="relative z-10">
          <CommandCenter />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}