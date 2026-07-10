"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { FadeInUp } from "@/components/shared/animations";

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

export { ServicesSection };