"use client";

import { CalendarDays, Heart, Activity, CheckCircle2 } from "lucide-react";
import { STEPS } from "@/lib/data";
import { FadeInUp, ScaleIn } from "@/components/shared/animations";

function HowItWorksSection() {
  const icons = [CalendarDays, Heart, Activity, CheckCircle2];

  return (
    <section className="py-10 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2 sm:mb-3">
            Cum funcționează
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4">
            Patru pași spre recuperare
          </h2>
          <p className="text-muted-foreground text-xs sm:text-lg max-w-xl leading-relaxed mb-8 sm:mb-14">
            Un proces clar, de la consultație la recuperarea completă.
          </p>
        </FadeInUp>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-4 gap-0 relative">
          <div className="absolute top-[35px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />

          {STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <ScaleIn key={step.step} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative z-10 w-[70px] h-[70px] rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-4 shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-2">
                    Pasul {step.step}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </ScaleIn>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/30 to-transparent" />

          {STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <ScaleIn key={step.step} delay={i * 0.08}>
                <div className="relative flex gap-4 pb-8 last:pb-0 group">
                  <div className="flex-shrink-0 w-[30px] flex flex-col items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md shadow-primary/30 z-10">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="flex-1 pt-[3px]">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary/50">
                      Pasul {step.step}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-tight mt-0.5 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScaleIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { HowItWorksSection };