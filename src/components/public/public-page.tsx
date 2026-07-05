"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  CalendarDays,
  Phone,
  Star,
  MessageCircle,
  CheckCircle2,
  Clock,
  Users,
  Heart,
  Activity,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowDown,
  User,
  Mail,
  Stethoscope,
  Check,
  XIcon,
  Sparkles,
  MapPin,
} from "lucide-react";
import { SERVICES, TEAM, REVIEWS, STEPS, HERO_IMAGE } from "@/lib/data";
import {
  FadeInUp,
  StaggerContainer,
  ScaleIn,
  fadeInUp,
} from "@/components/shared/animations";
import { useCountUp } from "@/components/shared/use-count-up";
import dynamic from "next/dynamic";

const HeroSpine3D = dynamic(
  () =>
    import("@/components/public/hero-spine-3d").then((m) => m.HeroSpine3D),
  { ssr: false, loading: () => null }
);

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[min(96vw,1100px)] transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] rounded-2xl px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg"
          : "bg-white/50 backdrop-blur-2xl border border-white/25"
      }`}
    >
      <div className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-extrabold tracking-tight text-foreground flex items-center gap-2">
        Physio<span className="text-primary">Vita</span>
      </div>
      <ul className="hidden lg:flex gap-8 list-none">
        {["Servicii", "Despre", "Echipa", "Programare", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="text-muted-foreground text-sm font-medium hover:text-foreground transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:rounded after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
      <a
        href="#programare"
        className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      >
        <CalendarDays className="w-4 h-4" />
        <span className="hidden sm:inline">Programează-te</span>
        <span className="sm:hidden">Booking</span>
      </a>
      <button
        className="sm:hidden p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Meniu"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-2xl rounded-2xl border border-border p-5 flex flex-col gap-3 shadow-xl sm:hidden z-50"
          >
            {["Servicii", "Despre", "Echipa", "Programare", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-foreground font-medium text-base py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#programare"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <CalendarDays className="w-4 h-4" />
              Programează-te
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

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

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-10 w-full pt-6 sm:pt-28 pb-16 flex flex-col justify-end lg:justify-center min-h-[100dvh] lg:min-h-0 lg:grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 overflow-visible" style={{ overflow: 'visible' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="h-[42vh] sm:h-[48vh] lg:h-[440px] xl:h-[500px] order-1 lg:order-2 overflow-visible lg:mt-12"
          style={{ overflow: 'visible' }}
        >
          <HeroSpine3D />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          className="order-2 lg:order-1"
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

function ServicesSection({ onServiceClick }: { onServiceClick: (index: number) => void }) {
  return (
    <section id="servicii" className="py-10 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2 sm:mb-3">
            Servicii
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4">
            Tratamente pentru fiecare nevoie
          </h2>
          <p className="text-muted-foreground text-xs sm:text-lg max-w-xl leading-relaxed mb-6 sm:mb-14">
            De la recuperare post-traumatică la terapie neurologică — soluții complete sub același acoperiș.
          </p>
        </FadeInUp>

        <div className="flex flex-col gap-3 sm:gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => onServiceClick(i)}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg sm:hover:shadow-xl sm:hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex md:flex-col">
                <div className="w-28 sm:w-36 md:w-full flex-shrink-0 md:flex-shrink aspect-square md:aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 112px, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:from-black/70 md:via-black/20" />
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 md:bottom-auto md:left-auto bottom-2 left-2 md:bottom-auto md:left-auto">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white px-2 py-0.5 md:px-3 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-3 sm:p-4 md:p-5 md:pb-6 flex flex-col justify-center md:justify-start">
                  <div className="flex items-center gap-2 md:gap-2.5 mb-1 md:mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                      <service.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm md:text-lg font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-[11px] md:text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mt-2 md:mt-4 flex items-center gap-1.5 text-primary text-[11px] md:text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
                    Află mai multe
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.scrollWidth / TEAM.length));
      setActiveIndex(Math.min(idx, TEAM.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="echipa" className="py-10 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2 sm:mb-3">
            Echipa
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4">
            Specialiștii noștri
          </h2>
          <p className="text-muted-foreground text-xs sm:text-lg max-w-xl leading-relaxed mb-6 sm:mb-14">
            Profesioniști dedicați recuperării tale.
          </p>
        </FadeInUp>

        {/* Mobile: horizontal scroll */}
        <div ref={scrollRef} className="md:hidden overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <style>{`.team-scroll::-webkit-scrollbar{display:none}`}</style>
          <div className="flex gap-3 px-4" style={{ width: "max-content" }}>
            {TEAM.map((member) => (
              <div
                key={member.initials}
                className="w-[260px] flex-shrink-0 snap-start group relative rounded-2xl overflow-hidden aspect-[3/4]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="font-[family-name:var(--font-heading)] text-base font-bold text-white tracking-tight mb-0.5">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-white/70 font-medium mb-1.5">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/15 text-white/80 font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex justify-center gap-1.5 mt-4">
          {TEAM.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.initials}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h4 className="font-[family-name:var(--font-heading)] text-base sm:text-xl font-bold text-white tracking-tight mb-0.5 sm:mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 font-medium mb-1.5 sm:mb-2">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {member.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] sm:text-[11px] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/15 text-white/80 font-medium"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2 sm:mb-3">
            Recenzii
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4">
            Ce spun pacienții
          </h2>
          <p className="text-muted-foreground text-sm sm:text-lg max-w-xl leading-relaxed mb-8 sm:mb-14">
            Peste 8.500 de pacienți mulțumiți.
          </p>
        </FadeInUp>

        <div className="flex flex-col gap-3 sm:gap-5 md:grid md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 hover:shadow-md sm:hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-3 sm:mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground text-sm sm:text-[15px] leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ background: "oklch(0.55 0.08 155)" }}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {review.treatment}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
                        PhysioVita
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

function LocationSection() {
  return (
    <section className="py-12 sm:py-20 md:py-24 px-5 sm:px-6 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] text-primary mb-2 sm:mb-3">
            Unde ne găsești
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 sm:mb-4">
            Vino la clinica noastră
          </h2>
          <p className="text-muted-foreground text-xs sm:text-base max-w-lg leading-relaxed mb-6 sm:mb-10">
            Situată în centrul Bucureștiului, clinica noastră este ușor accesibilă cu transportul în comun sau cu mașina.
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            <iframe
              title="Locație PhysioVita"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1586328875437!2d21.2266!3d45.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455e80e7f23e89%3A0x3d0c7e1e0e8f12c5!2sTimi%C8%99oara!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.85) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 pointer-events-none border border-border rounded-2xl sm:rounded-3xl" />
          </div>

          <div className="flex flex-col justify-center gap-4 sm:gap-5">
            <FadeInUp>
              <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight mb-1">Adresă</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">Str. Recuperării nr. 15<br />Timișoara, 300001</p>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp>
              <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight mb-1">Program</h3>
                    <div className="text-muted-foreground text-xs sm:text-sm space-y-0.5">
                      <p>Luni — Vineri: <span className="text-foreground font-medium">08:00 — 20:00</span></p>
                      <p>Sâmbătă: <span className="text-foreground font-medium">09:00 — 14:00</span></p>
                      <p>Duminică: <span className="text-muted-foreground">Închis</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            <FadeInUp>
              <div className="bg-white border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm sm:text-base font-bold tracking-tight mb-1">Contact</h3>
                    <div className="text-muted-foreground text-xs sm:text-sm space-y-0.5">
                      <p><span className="text-foreground font-medium">+40 721 234 567</span></p>
                      <p><span className="text-foreground font-medium">contact@physiovita.ro</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-sage-dark text-white py-10 sm:py-16 px-5 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="col-span-2 md:col-span-2">
            <div className="font-[family-name:var(--font-heading)] text-xl sm:text-2xl font-extrabold tracking-tight mb-3 sm:mb-4">
              Physio<span className="text-sage-light">Vita</span>
            </div>
            <p className="text-white/45 text-xs sm:text-sm leading-relaxed max-w-sm">
              Clinica de fizioterapie și recuperare medicală unde fiecare pacient primește atenția pe care o merită.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/30 mb-3 sm:mb-4">
              Servicii
            </h5>
            <ul className="space-y-1.5 sm:space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicii"
                    className="text-white/55 text-xs sm:text-sm hover:text-white transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white/30 mb-3 sm:mb-4">
              Contact
            </h5>
            <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-sm text-white/55">
              <li>Str. Recuperării nr. 15</li>
              <li>București, Sector 2</li>
              <li>+40 721 234 567</li>
              <li>contact@physiovita.ro</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 sm:mt-10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-white/30 gap-2">
          <span>© 2025 PhysioVita. Toate drepturile rezervate.</span>
          <span>Politica de confidențialitate · Termeni și condiții</span>
        </div>
      </div>
    </footer>
  );
}

function ServiceModal({ service, onClose }: { service: typeof SERVICES[number]; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 60, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 pt-5 sm:pt-6 pb-3 bg-white/90 backdrop-blur-md border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <service.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight">{service.title}</h3>
              <span className="text-xs text-muted-foreground">{service.duration}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-muted/60 hover:bg-muted flex items-center justify-center transition-colors"
          >
            <XIcon className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 512px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="absolute bottom-3 left-5 sm:left-6">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg shadow-primary/25">
              {service.price}
            </span>
          </div>
        </div>

        <div className="px-5 sm:px-6 pt-4 pb-6 space-y-5">
          <p className="text-foreground/80 text-sm leading-relaxed">
            {service.longDescription}
          </p>

            <div>
              <h4 className="font-[family-name:var(--font-heading)] text-sm font-bold tracking-tight mb-3">Beneficii</h4>
            <ul className="space-y-2">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/70">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
            <div className="text-sm">
              <span className="font-semibold text-foreground">{service.duration}</span>
              <span className="text-muted-foreground"> · Ședințe recomandate: 6–12</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#programare"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <CalendarDays className="w-4 h-4" />
              Programează-te
            </a>
            <a
              href="tel:+40721234567"
              className="flex-1 inline-flex items-center justify-center gap-2 border border-border py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Sună-ne
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PublicPage() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection onServiceClick={(i) => setSelectedService(i)} />
      <HowItWorksSection />
      <TeamSection />
      <ReviewsSection />
      <WhatsAppFeature />
      <PatientHistoryFeature />
      <CTASection />
      <LocationSection />
      <Footer />

      <AnimatePresence>
        {selectedService !== null && (
          <ServiceModal
            service={SERVICES[selectedService]}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}