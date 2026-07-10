"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/data";
import { Navbar } from "@/components/public/navbar";
import { HeroSection } from "@/components/public/hero";
import { ServicesSection, ServiceModal } from "@/components/public/services";
import { HowItWorksSection } from "@/components/public/how-it-works";
import { TeamSection } from "@/components/public/team";
import { ReviewsSection } from "@/components/public/reviews";
import { WhatsAppFeature } from "@/components/public/whatsapp";
import { PatientHistoryFeature } from "@/components/public/patient-history";
import { CTASection } from "@/components/public/booking";
import { LocationSection } from "@/components/public/location";
import { Footer } from "@/components/public/footer";

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