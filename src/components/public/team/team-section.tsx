"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM } from "@/lib/data";
import { FadeInUp } from "@/components/shared/animations";

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

export { TeamSection };