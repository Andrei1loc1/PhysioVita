export function WeeklyCalendar() {
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