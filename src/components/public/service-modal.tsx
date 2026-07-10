"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CalendarDays,
  Phone,
  CheckCircle2,
  Clock,
  XIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

type ServiceType = typeof SERVICES[number];

function ServiceModal({ service, onClose }: { service: ServiceType; onClose: () => void }) {
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

export { ServiceModal };
export type { ServiceType };