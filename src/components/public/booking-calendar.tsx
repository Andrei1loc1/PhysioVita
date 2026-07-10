"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Phone,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  User,
  Mail,
  Stethoscope,
  Check,
} from "lucide-react";

function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingState, setBookingState] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "" });

  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthNames = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
  const dayNames = ["Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"];

  const allTimeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < t;
  };

  const isWeekend = (day: number) => {
    const d = new Date(year, month, day).getDay();
    return d === 0 || d === 6;
  };

  const hasSlots = (day: number) => {
    return !isWeekend(day) && !isPast(day);
  };

  const isToday2 = (day: number) => {
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const getAvailableSlots = (): { slots: string[]; busy: string[] } => {
    if (!selectedDay) return { slots: [], busy: [] };
    const dayOfWeek = new Date(year, month, selectedDay).getDay();
    let slots = dayOfWeek === 5
      ? allTimeSlots.filter((t) => t < "15:00")
      : [...allTimeSlots];
    const seed = selectedDay * 7 + month * 31;
    const busy: string[] = [];
    for (let i = 0; i < 3; i++) {
      const idx = (seed + i * 13) % slots.length;
      if (!busy.includes(slots[idx])) busy.push(slots[idx]);
    }
    return { slots, busy };
  };

  const availableSlots: { slots: string[]; busy: string[] } | null = selectedDay ? getAvailableSlots() : null;

  const prev = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
    setSelectedSlot(null);
  };
  const next2 = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
    setSelectedSlot(null);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.service) return;
    if (!selectedDay || !selectedSlot) return;
    setBookingState("success");
  };

  const selectedDateObj = selectedDay ? new Date(year, month, selectedDay) : null;
  const selectedDayName = selectedDateObj ? dayNames[selectedDateObj.getDay() === 0 ? 6 : selectedDateObj.getDay() - 1] : "";

  if (bookingState === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 sm:py-16 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-bold text-foreground mb-2">
          Programare confirmată!
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base mb-6">
          {formData.name}, programarea ta pentru <strong className="text-foreground">{selectedDay} {monthNames[month]}</strong> la ora <strong className="text-primary">{selectedSlot}</strong> este confirmată.
        </p>
        <p className="text-muted-foreground/60 text-xs sm:text-sm mb-8">
          Vei primi un email de confirmare și un reminder pe WhatsApp cu o zi înainte.
        </p>
        <button
          onClick={() => {
            setBookingState("form");
            setSelectedDay(null);
            setSelectedSlot(null);
            setFormData({ name: "", phone: "", email: "", service: "" });
          }}
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
        >
          Fă o nouă programare
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
    >
      {/* Left: Calendar */}
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-white/65 backdrop-blur-2xl border border-white/25 shadow-sm">
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(var(--primary)/0.06),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <button onClick={prev} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-border bg-white flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <ChevronLeft className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
            <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-bold tracking-tight">
              {monthNames[month]} {year}
            </h3>
            <button onClick={next2} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-border bg-white flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all duration-200">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </div>

          <div className="grid grid-cols-7 mb-1.5">
            {dayNames.map((d) => (
              <div key={d} className="text-center text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider py-1">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0.5">
            {Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const past = isPast(day);
              const weekend = isWeekend(day);
              const disabled = past || weekend;
              const today3 = isToday2(day);
              const selected = selectedDay === day;
              const dot = hasSlots(day);

              return (
                <button
                  key={day}
                  disabled={disabled}
                  onClick={() => { if (!disabled) { setSelectedDay(day); setSelectedSlot(null); }}}
                  className={`
                    relative aspect-square rounded-lg text-xs sm:text-[13px] font-medium flex items-center justify-center transition-all duration-200
                    ${disabled ? "text-muted-foreground/25 cursor-not-allowed line-through" : "text-foreground hover:bg-primary/8 cursor-pointer"}
                    ${today3 && !selected ? "font-bold text-primary bg-primary/6" : ""}
                    ${selected ? "bg-primary text-white font-semibold rounded-lg" : ""}
                  `}
                >
                  {day}
                  {dot && !selected && !disabled && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                  {dot && selected && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 overflow-hidden bg-white/65 backdrop-blur-2xl border border-white/25 shadow-sm">
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,oklch(var(--primary)/0.05),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <h3 className="font-[family-name:var(--font-heading)] text-base sm:text-lg font-bold tracking-tight mb-1">
            Completează programarea
          </h3>
          <AnimatePresence mode="wait">
            {selectedDay ? (
              <motion.p
                key={selectedDay}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs sm:text-[13px] text-muted-foreground mb-4 sm:mb-5 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <strong className="text-foreground">{selectedDay} {monthNames[month]} {year}</strong> — alege ora
              </motion.p>
            ) : (
              <p className="text-xs sm:text-[13px] text-muted-foreground mb-4 sm:mb-5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                Selectează o dată din calendar
              </p>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-4 sm:mb-5">
            {selectedDay && availableSlots ? (
              availableSlots.slots.filter((slot) => !availableSlots.busy.includes(slot)).map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`
                    py-2 sm:py-2.5 px-1 rounded-lg sm:rounded-[10px] text-xs sm:text-[12.5px] font-medium transition-all duration-200
                    ${selectedSlot === slot
                      ? "bg-primary text-white font-semibold shadow-[0_4px_14px_oklch(var(--primary)/0.25)]"
                      : "bg-white border border-border text-foreground hover:border-primary hover:bg-primary/6 hover:-translate-y-px"
                    }
                  `}
                >
                  {slot}
                </button>
              ))
            ) : (
              <p className="col-span-3 text-center text-sm text-muted-foreground py-5">
                Selectează o dată din calendar pentru a vedea orele disponibile
              </p>
            )}
          </div>

          <div className="space-y-3 sm:space-y-3.5">
            <div>
              <label className="block text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1 sm:mb-1.5">Nume complet</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="ex. Maria Popescu"
                  className="w-full pl-9 pr-3 py-2.5 sm:py-3 text-sm rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1 sm:mb-1.5">Telefon</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07XX XXX XXX"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 text-sm rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1 sm:mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maria@email.com"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-3 text-sm rounded-xl border border-border bg-white text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[10px] sm:text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1 sm:mb-1.5">Serviciu</label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 sm:py-3 text-sm rounded-xl border border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 appearance-none"
                >
                  <option value="">Alege un serviciu</option>
                  <option value="kinetoterapie">Kinetoterapie — 150 lei</option>
                  <option value="fizioterapie">Fizioterapie — 200 lei</option>
                  <option value="recuperare">Recuperare post-traumatică — 250 lei</option>
                  <option value="masaj">Masaj terapeutic — 180 lei</option>
                  <option value="kinesiotaping">Kinesiotaping — 120 lei</option>
                  <option value="evaluare">Evaluare funcțională — 150 lei</option>
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.phone || !formData.service || !selectedDay || !selectedSlot}
            className="w-full mt-4 sm:mt-5 bg-primary hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed text-white py-3 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-[0_4px_14px_oklch(var(--primary)/0.25)]"
          >
            Confirmă programarea
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export { BookingCalendar };