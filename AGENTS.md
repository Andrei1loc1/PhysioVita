<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PhysioVita — Multi-Niche Template

## What this is

A configurable Next.js 16.2 clinic/business site template. The same codebase can be transformed for ANY niche (dental, veterinary, dermatology, psychology, etc.) by editing ONLY 3 files.

## Architecture

```
src/
├── config/site.config.ts    ← BRAND, CONTACT, HERO, ADMIN, COLORS (niche-specific)
├── lib/data.ts              ← SERVICES, TEAM, REVIEWS, STEPS, PATIENTS, APPOINTMENTS
├── app/globals.css          ← COLOR PALETTE (oklch CSS variables)
├── components/              ← DO NOT MODIFY per niche — reads from config + data
│   ├── public/
│   │   ├── navbar/          ← reads site.brand
│   │   ├── hero/            ← reads site.hero
│   │   ├── services/        ← reads SERVICES from data.ts
│   │   ├── how-it-works/    ← reads STEPS from data.ts
│   │   ├── team/            ← reads TEAM from data.ts
│   │   ├── reviews/         ← reads REVIEWS from data.ts
│   │   ├── whatsapp/        ← reads site.brand
│   │   ├── patient-history/ ← static demo content
│   │   ├── booking/         ← reads SERVICES from data.ts
│   │   ├── location/        ← reads site.contact
│   │   └── footer/          ← reads site.brand, site.contact, SERVICES
│   └── admin/
│       ├── layout/          ← reads site.brand, site.admin
│       ├── dashboard/      ← reads site.admin, site.locale, APPOINTMENTS
│       ├── appointments/    ← reads APPOINTMENTS
│       ├── patients/        ← reads PATIENTS
│       └── stats/          ← reads REMINDERS, RECORDS
└── shared/                  ← animations + useCountUp (niche-agnostic)
```

## How to transform for a new niche

When the user says something like "transform this into a dental clinic called DentalPro in Bucharest", edit ONLY these 3 files:

### 1. `src/config/site.config.ts` — Brand & contact identity
- `brand`: new name (prefix, highlight, full)
- `contact`: new address, city, phone, email, schedule, Google Maps embed URL, map description
- `hero`: new image URL, badge text, title lines, subtitle, stats values+labels
- `footerTagline`: new tagline mentioning the niche
- `admin`: new doctor name, title, initials, greeting
- `colors`: new palette hex values (MUST match globals.css)
- `niche`: new niche label
- `locale`: keep "ro-RO" unless asked otherwise

### 2. `src/lib/data.ts` — All content data
- `SERVICES`: new services with title, description, longDescription, benefits, duration, icon (lucide), price, image (Unsplash URL)
- `TEAM`: new team members with name, role, badges, initials, color, image
- `REVIEWS`: new patient reviews with name, text, rating, treatment, initials
- `STEPS`: new 4-step process (step number, title, description)
- `APPOINTMENTS`: new appointment list (name, initials, color, time, service, status)
- `PATIENTS`: new patient records with full medical history
- `REMINDERS`: new reminder list
- `RECORDS`: new medical records
- `HERO_IMAGE`: keep in sync with site.config hero.image

### 3. `src/app/globals.css` — Color palette
- Update all oklch values in `:root` to match the new niche palette
- Key variables to change: `--primary`, `--accent`, `--ring`, `--chart-*`
- Also update `--color-sage`, `--color-sage-light`, `--color-sage-dark`, `--color-cream`, `--color-terracotta` in `@theme inline`
- Keep the same structure — just swap color values

### NEVER do these:
- Do NOT modify any file in `src/components/` — they read from config/data
- Do NOT change component structure, styling, or layout per niche
- Do NOT add new components for a niche change

## Design system (unchanged across niches)

- Warm, earthy aesthetic with glassmorphism
- Rounded corners (xl/2xl/3xl)
- Framer Motion animations (FadeInUp, ScaleIn, StaggerContainer)
- Mobile-first responsive
- Dark gradient hero with 3D abstract scene
- Floating glass navbar
- DentArt-style booking calendar
- Admin dashboard with warm palette, floating bottom nav

## Tech stack (unchanged)
- Next.js 16.2 (App Router, Turbopack)
- Tailwind CSS v4 (CSS custom properties, no tailwind.config needed)
- Framer Motion
- lucide-react icons
- React Three Fiber (3D hero scene)
- shadcn/ui components (available but mostly unused in custom UI)

## Build commands
- `npx next build` — production build
- `npm run dev` — dev server

## Git
- Repo: https://github.com/Andrei1loc1/PhysioVita
- Branch: main