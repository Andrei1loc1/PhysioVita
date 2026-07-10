"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, ArrowDown } from "lucide-react";
import { HERO_IMAGE } from "@/lib/data";
import { useCountUp } from "@/components/shared/use-count-up";
import dynamic from "next/dynamic";

const HeroSpine3D = dynamic(
  () =>
    import("./hero-spine-3d").then((m) => m.HeroSpine3D),
  { ssr: false, loading: () => null }
);

function HeroSection() {
  const stat1 = useCountUp(15);
  const stat2 = useCountUp(8500);
  const stat3 = useCountUp(4.9);

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-visible" style={{ overflow: 'visible' }}>
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Physiotherapy clinic"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a2a]/90 via-[#2d5a3f]/85 to-[#4a3728]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.72_0.07_155/0.2),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,oklch(0.62_0.1_35/0.1),transparent_55%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full pt-6 sm:pt-28 pb-8 flex flex-col justify-end lg:justify-center min-h-[100dvh] lg:min-h-0 lg:grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 overflow-visible" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="h-[36vh] sm:h-[48vh] lg:h-[440px] xl:h-[500px] order-1 lg:order-2 overflow-visible lg:mt-12"
          style={{ overflow: 'visible' }}
        >
          <HeroSpine3D />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="order-2 lg:order-1 -mt-4 sm:-mt-6 lg:mt-0"
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-md border border-white/[0.12] rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white/90 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_oklch(0.72_0.16_155/0.6)] animate-pulse" />
            Deschis — Programează-te azi
          </div>

          <h1 className="font-[family-name:var(--font-heading)] text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] sm:leading-[1.05] text-white mb-4 sm:mb-6">
            Recuperarea ta,
            <br className="hidden sm:block" />{" "}
            <span className="text-white" style={{ textShadow: '0 0 30px rgba(90,158,118,0.6), 0 0 60px rgba(90,158,118,0.3), 0 0 100px rgba(90,158,118,0.15)' }}>
              prioritatea noastră
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/55 sm:text-white/60 max-w-md sm:max-w-lg leading-relaxed mb-6 sm:mb-10">
            Echipă dedicată, tehnologie modernă și un plan de tratament
            personalizat. Recâștigă-ți mobilitatea cu încredere.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#programare"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <CalendarDays className="w-4 sm:w-5 h-4 sm:h-5" />
              Programează-te
            </a>
            <a
              href="#servicii"
              className="inline-flex items-center gap-2 bg-white/[0.06] text-white border border-white/[0.15] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.12] transition-all duration-300"
            >
              Vezi serviciile
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex gap-8 sm:gap-10 md:gap-16 mt-8 sm:mt-14"
          >
            {[
              { ref: stat1.ref, val: stat1.displayValue, label: "Ani experiență" },
              { ref: stat2.ref, val: stat2.displayValue, label: "Pacienți" },
              { ref: stat3.ref, val: stat3.displayValue, label: "Rating" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <span ref={s.ref} className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight block leading-none mb-0.5 sm:mb-1">
                  {s.val}
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/35">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
         </motion.div>
        </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-white/30 sm:hidden">
        <ArrowDown className="w-5 h-5" />
      </div>
    </section>
  );
}

export { HeroSection };