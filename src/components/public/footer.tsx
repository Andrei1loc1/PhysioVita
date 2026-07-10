import { SERVICES } from "@/lib/data";

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

export { Footer };