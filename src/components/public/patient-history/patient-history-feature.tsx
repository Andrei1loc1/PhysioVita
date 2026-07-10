"use client";

import { Heart, Activity, Users, Clock } from "lucide-react";
import { FadeInUp, ScaleIn } from "@/components/shared/animations";

function PatientHistoryFeature() {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <FadeInUp>
            <div>
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2 sm:mb-3">
                Istoric pacient
              </div>
              <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3 sm:mb-4">
                Tot istoricul medical, mereu la îndemână
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                Accesează diagnosticul, planul de tratament și evoluția recuperării oricând.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: Heart, text: "Diagnostic complet și plan de tratament" },
                  { icon: Activity, text: "Monitorizarea progresului în timp real" },
                  { icon: Users, text: "Comunicare directă cu echipa medicală" },
                  { icon: Clock, text: "Istoricul tuturor ședințelor" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          <ScaleIn>
            <div className="bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg">
              <div className="bg-gradient-to-r from-primary to-primary/80 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    MP
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Maria Popescu</div>
                    <div className="text-white/70 text-[10px] sm:text-xs">Pacientă din Martie 2023</div>
                  </div>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {[
                  { label: "Diagnostic", value: "Hernie de disc L4-L5", color: "bg-primary", icon: Heart },
                  { label: "Ședințe", value: "8 / 12", color: "bg-green-500", icon: Activity },
                  { label: "Următoarea", value: "Mâine, 09:00", color: "bg-terracotta", icon: Clock },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-muted/50 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3"
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-xs sm:text-sm text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">{item.value}</span>
                  </div>
                ))}

                <div className="bg-primary/5 rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-muted-foreground">Progres recuperare</span>
                    <span className="text-xs sm:text-sm font-bold text-primary">67%</span>
                  </div>
                  <div className="w-full bg-primary/10 rounded-full h-2 sm:h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-primary/70 h-full rounded-full w-[67%] transition-all duration-1000" />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1.5">67% completat</div>
                </div>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}

export { PatientHistoryFeature };