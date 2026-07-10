"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Navbar } from "@/components/public/navbar";
import { HeroSection } from "@/components/public/hero-section";
import { ServicesSection } from "@/components/public/services-section";
import { HowItWorksSection } from "@/components/public/how-it-works-section";
import { TeamSection } from "@/components/public/team-section";
import { ReviewsSection } from "@/components/public/reviews-section";
import { WhatsAppFeature } from "@/components/public/whatsapp-feature";
import { PatientHistoryFeature } from "@/components/public/patient-history-feature";
import { CTASection } from "@/components/public/cta-section";
import { LocationSection } from "@/components/public/location-section";
import { Footer } from "@/components/public/footer";
import { ServiceModal } from "@/components/public/service-modal";

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