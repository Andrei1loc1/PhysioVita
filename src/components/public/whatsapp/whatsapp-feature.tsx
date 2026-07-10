"use client";

import { MessageCircle, CheckCircle2 } from "lucide-react";
import { FadeInUp, ScaleIn } from "@/components/shared/animations";
import { site } from "@/config/site.config";

function WhatsAppFeature() {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.07_155/0.2),transparent_60%)]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10 md:p-16">
            <div>
              <FadeInUp>
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white/90 mb-4 sm:mb-6">
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Reminder automat
                </div>
                <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
                  Nu ratezi nicio ședință
                </h2>
                <p className="text-white/55 sm:text-white/65 text-sm sm:text-base leading-relaxed mb-5 sm:mb-8">
                  Primești reminder pe WhatsApp cu 24h înainte. Confirmă cu un singur tap.
                </p>
                <div className="flex flex-col gap-2.5 sm:gap-4">
                  {[
                    "Notificare automată cu 24h înainte",
                    "Confirmare cu un singur mesaj",
                    "Reprogramare rapidă din chat",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 sm:gap-3 text-white/80 sm:text-white/85"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
            <div className="flex items-center justify-center">
              <ScaleIn>
                <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl sm:rounded-3xl p-4 sm:p-6 max-w-[300px] sm:max-w-[320px] w-full">
                  <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-xs sm:text-sm">
                        {site.brand.full}
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-white/40 text-[10px] sm:text-xs">Online</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:gap-2.5">
                    <div className="flex justify-start">
                      <div className="bg-white/[0.12] backdrop-blur-sm rounded-2xl rounded-bl-md px-3 py-2 sm:px-4 sm:py-2.5 max-w-[85%]">
                        <p className="text-white text-[11px] sm:text-sm leading-relaxed">
                          Salut, Maria! 🌿 Mâine la 09:00 ai programare pentru kinetoterapie. Confirmi?
                        </p>
                        <div className="text-white/25 text-[9px] sm:text-[10px] mt-1 sm:mt-1.5 text-right">09:00</div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-[#5a9e76] rounded-2xl rounded-br-md px-3 py-2 sm:px-4 sm:py-2.5 max-w-[75%]">
                        <p className="text-white text-[11px] sm:text-sm leading-relaxed">✅ Confirm!</p>
                        <div className="text-white/30 text-[9px] sm:text-[10px] mt-0.5 sm:mt-1.5 text-right">09:02</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhatsAppFeature };