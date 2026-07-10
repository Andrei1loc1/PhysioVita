"use client";

import { BookingCalendar } from "@/components/public/booking-calendar";

function CTASection() {
  return (
    <section id="programare" className="py-12 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-primary/60 mb-2">Programare online</span>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2 sm:mb-3">
            Rezervă-ți locul în 30 de secunde
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Fără telefoane, fără așteptare. Alege data, ora și serviciul — primești confirmare instant.
          </p>
        </div>

        <div id="calendar">
          <BookingCalendar />
        </div>
      </div>
    </section>
  );
}

export { CTASection };