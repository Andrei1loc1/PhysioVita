"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, CalendarDays } from "lucide-react";

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

export { Navbar };