"use client";

import { MapPin, Clock, Phone } from "lucide-react";
import { FadeInUp } from "@/components/shared/animations";
import { site } from "@/config/site.config";

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
            {site.contact.mapDescription}
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
            <iframe
              title={`Locație ${site.brand.full}`}
              src={site.contact.mapEmbedUrl}
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
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{site.contact.address}<br />{site.contact.city}, {site.contact.postalCode}</p>
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
                      <p>Luni — Vineri: <span className="text-foreground font-medium">{site.contact.schedule.weekdays}</span></p>
                      <p>Sâmbătă: <span className="text-foreground font-medium">{site.contact.schedule.saturday}</span></p>
                      <p>Duminică: <span className="text-muted-foreground">{site.contact.schedule.sunday}</span></p>
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
                      <p><span className="text-foreground font-medium">{site.contact.phone}</span></p>
                      <p><span className="text-foreground font-medium">{site.contact.email}</span></p>
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

export { LocationSection };