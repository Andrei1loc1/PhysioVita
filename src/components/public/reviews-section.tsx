"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import { FadeInUp } from "@/components/shared/animations";

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

export { ReviewsSection };