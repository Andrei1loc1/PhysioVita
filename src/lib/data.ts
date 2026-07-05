import {
  Heart,
  Bone,
  Activity,
  Hand,
  Brain,
  Stethoscope,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Kinetoterapie",
    description:
      "Exerciții terapeutice personalizate pentru recuperarea mobilității și forței musculare.",
    longDescription:
      "Programul nostru de kinetoterapie combină exerciții terapeutice personalizate cu tehnici moderne de reabilitare. Fiecare ședință este adaptată afecțiunii tale — de la recuperarea post-traumatică la gestionarea durerilor cronice. Specialiștii noștri creează un plan de exerciții progresiv care îți redă mobilitatea, forța și încrederea în corpul tău.",
    benefits: ["Plan personalizat de exerciții", "Monitorizare constantă a progresului", "Tehnici de mobilizare articulară", "Exerciții de stabilizare și echilibru"],
    duration: "45 min / ședință",
    icon: Activity,
    price: "150 lei",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Fizioterapie manuală",
    description:
      "Tehnici manuale specializate pentru dureri cronice, hernii de disc și afecțiuni articulare.",
    longDescription:
      "Fizioterapia manuală utilizează tehnici hands-on specializate pentru tratamentul durerilor cronice, herniilor de disc și afecțiunilor articulare. Terapeutul lucrează direct pe țesuturile moi și articulațiile pentru a reduce durerea, a îmbunătăți circulația și a restabili funcția normală. Fiecare mișcare este precisă și adaptată nevoilor tale specifice.",
    benefits: ["Mobilizări articulare precise", "Manipulări vertebrate sigure", "Tehnici de țesut moale", "Reducerea imediată a durerii"],
    duration: "30 min / ședință",
    icon: Hand,
    price: "200 lei",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Recuperare post-chirurgicală",
    description:
      "Programe de reabilitare după operații de genunchi, șold, umăr și coloană vertebrală.",
    longDescription:
      "Programele noastre de recuperare post-chirurgicală sunt concepute pentru a te aduce înapoi la activitățile zilnice în cel mai scurt timp posibil. De la operații de genunchi și șold la intervenții pe coloana vertebrală, echipa noastră te ghidează pas cu pas prin fiecare etapă de reabilitare, asigurându-se că recuperarea este completă și sigură.",
    benefits: ["Protocol bazat pe dovezi științifice", "Progresie graduală și sigură", "Comunicare cu medicul chirurg", "Exerciții funcționale specifice"],
    duration: "60 min / ședință",
    icon: Bone,
    price: "250 lei",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Terapie neurologică",
    description:
      "Recuperare după AVC, Parkinson și alte afecțiuni neurologice cu tehnici specializate.",
    longDescription:
      "Terapia neurologică este dedicată pacienților care suferă de afecțiuni ale sistemului nervos — de la recuperarea post-AVC la managementul Parkinsonului. Folosim tehnici bazate pe neuroplasticitate pentru a stimula reconectarea neuronală și a îmbunătăți funcțiile motorii, cognitivii și de echilibru.",
    benefits: ["Tehnici de neuroplasticitate", "Reeducare mers și echilibru", "Stimulare senzorială progresivă", "Suport pentru activitățile zilnice"],
    duration: "50 min / ședință",
    icon: Brain,
    price: "220 lei",
    image:
      "https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Electroterapie & Ultrasunete",
    description:
      "Tratamente moderne cu TENS, ultrasunete și laser terapeutic pentru inflamații și dureri.",
    longDescription:
      "Electroterapia și ultrasunetele sunt tratamente neinvazive care folosesc energii fizice pentru a reduce inflamația, durerea și a accelera vindecarea țesuturilor. TENS blochează semnalele dureroase, ultrasunetele penetreză țesuturile profunde, iar laserul terapeutic stimulează regenerarea celulară — toate combinate pentru rezultate optime.",
    benefits: ["Analgezie prin TENS", "Ultrasunete pentru țesuturi profunde", "Laser terapeutic de joasă putere", "Fără disconfort sau efecte secundare"],
    duration: "20 min / ședință",
    icon: Stethoscope,
    price: "120 lei",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Recuperare sportivă",
    description:
      "Reabilitare pentru sportivi cu leziuni acute sau cronice, cu monitorizare și progresie graduală.",
    longDescription:
      "Programul de recuperare sportivă este creat pentru sportivi de toate nivelurile — de la amatori la profesioniști. Combinăm evaluarea funcțională detaliată cu exerciții specifice sportului practicat, asigurându-ne că revii pe teren mai puternic și mai rezistent decât înainte de accidentare.",
    benefits: ["Evaluare funcțională completă", "Program specific sportului practicat", "Testare performanță și return-to-play", "Prevenire reaccidentare"],
    duration: "60 min / ședință",
    icon: Heart,
    price: "280 lei",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&auto=format&fit=crop",
  },
];

export const TEAM = [
  {
    name: "Dr. Andrei Ionescu",
    role: "Medic specialist recuperare",
    badges: ["Kinetoterapie", "Neurologie"],
    initials: "AI",
    color: "oklch(0.55 0.08 155)",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Elena Marinescu",
    role: "Fizioterapeut principal",
    badges: ["Manuală", "Sportivă"],
    initials: "EM",
    color: "oklch(0.62 0.1 35)",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Dr. Mihaela Radu",
    role: "Medic fizioterapeut",
    badges: ["Pediatrie", "Geriatrică"],
    initials: "MR",
    color: "oklch(0.55 0.06 60)",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80&auto=format&fit=crop&crop=face",
  },
  {
    name: "Cristian Vasile",
    role: "Kinetoterapeut",
    badges: ["Ortopedie", "Traumatologie"],
    initials: "CV",
    color: "oklch(0.72 0.07 155)",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&crop=face",
  },
];

export const REVIEWS = [
  {
    name: "Maria Popescu",
    text: "Am venit cu dureri de spate cronice și acum merg din nou fără probleme. Echipa e minunată și tratamentele sunt foarte eficiente.",
    rating: 5,
    treatment: "Kinetoterapie",
    initials: "MP",
  },
  {
    name: "Ion Vasilescu",
    text: "După operația de genunchi, nu credeam că voi mai putea alerga. Datorită echipei de aici, am revenit la sportul pe care îl iubeam.",
    rating: 5,
    treatment: "Recuperare post-op",
    initials: "IV",
  },
  {
    name: "Ana Dumitrescu",
    text: "Cea mai frumoasă experiență într-o clinică. Personal blând, atmosferă caldă și rezultate vizibile de la primele ședințe.",
    rating: 5,
    treatment: "Fizioterapie manuală",
    initials: "AD",
  },
];

export const STEPS = [
  {
    step: "01",
    title: "Evaluare inițială",
    description:
      "Echipa noastră realizează o evaluare completă a stării tale de sănătate și a nevoilor specifice.",
  },
  {
    step: "02",
    title: "Plan personalizat",
    description:
      "Creăm un program de recuperare adaptat exact afecțiunii și obiectivelor tale.",
  },
  {
    step: "03",
    title: "Tratament & ghidare",
    description:
      "Ședințe de terapie cu specialiști dedicați, cu monitorizare constantă a progresului.",
  },
  {
    step: "04",
    title: "Recuperare completă",
    description:
      "Revii la activitățile zilnice cu încredere și primim reminder WhatsApp pentru următoarele vizite.",
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80&auto=format&fit=crop";

export const APPOINTMENTS = [
  {
    name: "Maria Popescu",
    initials: "MP",
    color: "oklch(0.55 0.08 155)",
    time: "09:00",
    service: "Kinetoterapie",
    status: "confirmed" as const,
  },
  {
    name: "Ion Vasilescu",
    initials: "IV",
    color: "oklch(0.62 0.1 35)",
    time: "09:30",
    service: "Fizioterapie manuală",
    status: "confirmed" as const,
  },
  {
    name: "Elena Dumitrescu",
    initials: "ED",
    color: "oklch(0.55 0.2 20)",
    time: "10:00",
    service: "Recuperare post-op",
    status: "pending" as const,
  },
  {
    name: "Cristian Marin",
    initials: "CM",
    color: "oklch(0.45 0.08 155)",
    time: "10:30",
    service: "Terapie neurologică",
    status: "confirmed" as const,
  },
  {
    name: "Ana Ionescu",
    initials: "AI",
    color: "oklch(0.72 0.07 155)",
    time: "11:00",
    service: "Electroterapie",
    status: "done" as const,
  },
  {
    name: "George Popa",
    initials: "GP",
    color: "oklch(0.62 0.1 35)",
    time: "11:30",
    service: "Recuperare sportivă",
    status: "confirmed" as const,
  },
  {
    name: "Diana Stan",
    initials: "DS",
    color: "oklch(0.55 0.2 20)",
    time: "12:00",
    service: "Kinetoterapie",
    status: "pending" as const,
  },
  {
    name: "Mihai Radu",
    initials: "MR",
    color: "oklch(0.45 0.08 155)",
    time: "14:00",
    service: "Recuperare post-op",
    status: "confirmed" as const,
  },
  {
    name: "Laura Neagu",
    initials: "LN",
    color: "oklch(0.55 0.08 155)",
    time: "14:30",
    service: "Fizioterapie manuală",
    status: "confirmed" as const,
  },
  {
    name: "Andrei Toma",
    initials: "AT",
    color: "oklch(0.62 0.1 35)",
    time: "15:00",
    service: "Terapie neurologică",
    status: "pending" as const,
  },
  {
    name: "Raluca Moise",
    initials: "RM",
    color: "oklch(0.72 0.07 155)",
    time: "15:30",
    service: "Kinetoterapie",
    status: "confirmed" as const,
  },
  {
    name: "Victor Enache",
    initials: "VE",
    color: "oklch(0.55 0.2 20)",
    time: "16:00",
    service: "Electroterapie",
    status: "confirmed" as const,
  },
];

export const PATIENTS = [
  {
    name: "Maria Popescu",
    initials: "MP",
    color: "oklch(0.55 0.08 155)",
    lastVisit: "Iunie 2025",
    nextVisit: "Azi 09:00",
    diagnosis: "Hernie de disc L4-L5",
    treatment: "Kinetoterapie",
    sessionsDone: 8,
    sessionsTotal: 12,
    progress: 67,
    sinceDate: "Martie 2023",
    totalVisits: 12,
    age: 45,
    phone: "0721 234 567",
    history: [
      { date: "15 Iun 2025", detail: "Ședința 8 — mobilitate îmbunătățită", type: "session" },
      { date: "8 Iun 2025", detail: "Ședința 7 — exerciții avansate", type: "session" },
      { date: "1 Iun 2025", detail: "Evaluare mijloc de tratament — progres bun", type: "evaluation" },
      { date: "25 Mai 2025", detail: "Ședința 6 — fără dureri acute", type: "session" },
      { date: "18 Mai 2025", detail: "Ședința 5 — mișcări laterale îmbunătățite", type: "session" },
    ],
  },
  {
    name: "Ion Vasilescu",
    initials: "IV",
    color: "oklch(0.62 0.1 35)",
    lastVisit: "Mai 2025",
    nextVisit: "Azi 09:30",
    diagnosis: "Recuperare post-op genunchi",
    treatment: "Recuperare post-chirurgicală",
    sessionsDone: 10,
    sessionsTotal: 16,
    progress: 63,
    sinceDate: "Ianuarie 2025",
    totalVisits: 10,
    age: 52,
    phone: "0722 345 678",
    history: [
      { date: "20 Mai 2025", detail: "Ședința 10 — flexie 110°", type: "session" },
      { date: "13 Mai 2025", detail: "Ședința 9 — mers fără sprijin", type: "session" },
      { date: "6 Mai 2025", detail: "Control ortopedic — evoluție favorabilă", type: "evaluation" },
      { date: "29 Apr 2025", detail: "Ședința 8 — exerciții echilibru", type: "session" },
      { date: "22 Apr 2025", detail: "Ședința 7 — flexie 95°", type: "session" },
    ],
  },
  {
    name: "Elena Dumitrescu",
    initials: "ED",
    color: "oklch(0.55 0.2 20)",
    lastVisit: "Aprilie 2025",
    nextVisit: "Azi 10:00",
    diagnosis: "Dureri cronice cervicale",
    treatment: "Fizioterapie manuală",
    sessionsDone: 3,
    sessionsTotal: 6,
    progress: 50,
    sinceDate: "Februarie 2025",
    totalVisits: 3,
    age: 38,
    phone: "0733 456 789",
    history: [
      { date: "28 Apr 2025", detail: "Ședința 3 — reducere durere cu 40%", type: "session" },
      { date: "21 Apr 2025", detail: "Ședința 2 — mobilizare cervicală", type: "session" },
      { date: "14 Apr 2025", detail: "Ședința 1 — evaluare inițială", type: "evaluation" },
    ],
  },
  {
    name: "Cristian Marin",
    initials: "CM",
    color: "oklch(0.45 0.08 155)",
    lastVisit: "Iunie 2025",
    nextVisit: "Azi 10:30",
    diagnosis: "Reabilitare post-AVC",
    treatment: "Terapie neurologică",
    sessionsDone: 14,
    sessionsTotal: 20,
    progress: 70,
    sinceDate: "Octombrie 2024",
    totalVisits: 14,
    age: 61,
    phone: "0744 567 890",
    history: [
      { date: "10 Iun 2025", detail: "Ședința 14 — mers asistat 50m", type: "session" },
      { date: "3 Iun 2025", detail: "Ședința 13 — coordonare fină îmbunătățită", type: "session" },
      { date: "27 Mai 2025", detail: "Evaluare neurologică — progres semnificativ", type: "evaluation" },
      { date: "20 Mai 2025", detail: "Ședința 12 — exerciții echilibru", type: "session" },
      { date: "13 Mai 2025", detail: "Ședința 11 — mișcări fine ale mâinii", type: "session" },
    ],
  },
  {
    name: "Ana Ionescu",
    initials: "AI",
    color: "oklch(0.72 0.07 155)",
    lastVisit: "Iunie 2025",
    nextVisit: "—",
    diagnosis: "Tendinită umăr drept",
    treatment: "Electroterapie & Ultrasunete",
    sessionsDone: 6,
    sessionsTotal: 6,
    progress: 100,
    sinceDate: "Aprilie 2025",
    totalVisits: 6,
    age: 34,
    phone: "0755 678 901",
    history: [
      { date: "5 Iun 2025", detail: "Ședința 6 — recuperare completă, dureri dispărute", type: "session" },
      { date: "28 Mai 2025", detail: "Ședința 5 — mobilitate completă", type: "session" },
      { date: "21 Mai 2025", detail: "Evaluare — progres excelent", type: "evaluation" },
      { date: "14 Mai 2025", detail: "Ședința 4 — ultrasunete + exerciții", type: "session" },
      { date: "7 Mai 2025", detail: "Ședința 3 — reducere durere semnificativă", type: "session" },
    ],
  },
  {
    name: "George Popa",
    initials: "GP",
    color: "oklch(0.62 0.1 35)",
    lastVisit: "Mai 2025",
    nextVisit: "Azi 11:30",
    diagnosis: "Entorsă gleznă grad II",
    treatment: "Recuperare sportivă",
    sessionsDone: 4,
    sessionsTotal: 8,
    progress: 50,
    sinceDate: "Mai 2025",
    totalVisits: 4,
    age: 28,
    phone: "0766 789 012",
    history: [
      { date: "28 Mai 2025", detail: "Ședința 4 — alergare ușoară pe bandă", type: "session" },
      { date: "21 Mai 2025", detail: "Ședința 3 — exerciții propriocepție", type: "session" },
      { date: "14 Mai 2025", detail: "Ședința 2 — mobilitate îmbunătățită", type: "session" },
      { date: "7 Mai 2025", detail: "Evaluare inițială — entorsă grad II", type: "evaluation" },
    ],
  },
  {
    name: "Diana Stan",
    initials: "DS",
    color: "oklch(0.55 0.2 20)",
    lastVisit: "Iunie 2025",
    nextVisit: "Azi 12:00",
    diagnosis: "Scolioză lombară",
    treatment: "Kinetoterapie",
    sessionsDone: 5,
    sessionsTotal: 10,
    progress: 50,
    sinceDate: "Aprilie 2025",
    totalVisits: 5,
    age: 22,
    phone: "0777 890 123",
    history: [
      { date: "12 Iun 2025", detail: "Ședința 5 — postură îmbunătățită", type: "session" },
      { date: "5 Iun 2025", detail: "Ședința 4 — exerciții corectare", type: "session" },
      { date: "29 Mai 2025", detail: "Ședința 3 — stabilizare trunchi", type: "session" },
      { date: "22 Mai 2025", detail: "Ședința 2 — mobilitate lombară", type: "session" },
      { date: "15 Mai 2025", detail: "Evaluare inițială — scolioză grad moderat", type: "evaluation" },
    ],
  },
];

export const REMINDERS = [
  {
    name: "Adrian Munteanu",
    detail: "Control 6 luni — recuperare genunchi",
    time: "Mâine",
  },
  {
    name: "Simona Vlad",
    detail: "Reevaluare tratament coloană",
    time: "3 zile",
  },
  {
    name: "Paul Georgescu",
    detail: "Kinetoterapie periodică",
    time: "5 zile",
  },
  {
    name: "Ioana Petrescu",
    detail: "Terapie neurologică — sesiunea 4",
    time: "1 săpt.",
  },
  {
    name: "Radu Costea",
    detail: "Recuperare sportivă — control",
    time: "2 săpt.",
  },
];

export const RECORDS = [
  {
    name: "Maria Popescu",
    detail: "Kinetoterapie — progres bun, mobilitate îmbunătățită",
    date: "Azi",
    color: "oklch(0.72 0.07 155)",
  },
  {
    name: "Ion Vasilescu",
    detail: "Fizioterapie manuală — ședința 3/6",
    date: "Ieri",
    color: "oklch(0.62 0.1 35)",
  },
  {
    name: "Elena Dumitrescu",
    detail: "Recuperare post-op — radiografie de control",
    date: "Ieri",
    color: "oklch(0.55 0.2 20)",
  },
];