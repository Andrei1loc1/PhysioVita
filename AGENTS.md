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
│   │   ├── assistant/       ← virtual assistant (reads site.assistant, calls /api/chat)
│   │   └── footer/          ← reads site.brand, site.contact, SERVICES
│   └── admin/
│       ├── layout/          ← reads site.brand, site.admin
│       ├── dashboard/      ← reads site.admin, site.locale, APPOINTMENTS
│       ├── appointments/    ← reads APPOINTMENTS
│       ├── patients/        ← reads PATIENTS
│       └── stats/          ← reads REMINDERS, RECORDS
└── shared/                  ← animations + useCountUp (niche-agnostic)
```

## How to create a new niche variant

When the user says something like "make a dental clinic called DentalPro in Bucharest", follow this workflow:

### Step 1: Copy the project (MANDATORY — NEVER overwrite the template)
```powershell
# The template project stays untouched. Always create a COPY first.
# Replace <NewName> with the new project name (e.g. DentalPro)
Copy-Item -Path "C:\Users\Andrei\Documents\Fizioterapy project\physiorecovery" `
          -Destination "C:\Users\Andrei\Documents\Fizioterapy project\<NewName>" `
          -Recurse
```
Then `cd` into the new project folder. ALL subsequent edits happen in the COPY, not the original.

### Step 2: Edit ONLY these 3 files in the copy

### 1. `src/config/site.config.ts` — Brand & contact identity
- `brand`: new name (prefix, highlight, full)
- `contact`: new address, city, phone, email, schedule, Google Maps embed URL, map description
- `hero`: new image URL, badge text, title lines, subtitle, stats values+labels
- `assistant`: greeting text, quick questions, suggestions for the virtual assistant
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

### MANDATORY: Verify image URLs
After replacing image URLs in `site.config.ts` and `data.ts`, you MUST verify every new Unsplash URL returns HTTP 200 before considering the transformation complete. Run this in PowerShell:

```powershell
$urls = @(
  # Paste all new image URLs here
)
foreach ($url in $urls) {
  try {
    $resp = Invoke-WebRequest -Uri $url -Method Head -TimeoutSec 10 -UseBasicParsing
    Write-Output "$($resp.StatusCode) OK - $($url.Substring(0,60))..."
  } catch {
    Write-Output "FAIL - $($url.Substring(0,60))... - $($_.Exception.Message)"
  }
}
```

If any URL returns FAIL, replace it with a working Unsplash image for the niche. Do NOT leave broken image URLs.

### NEVER do these:
- Do NOT modify the template project in-place — ALWAYS copy first
- Do NOT modify any file in `src/components/` — they read from config/data
- Do NOT change component structure, styling, or layout per niche
- Do NOT add new components for a niche change
- Do NOT leave unverified image URLs

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
- Ollama Cloud API (virtual assistant — GLM-5.2 model)
- shadcn/ui components (available but mostly unused in custom UI)

## Virtual Assistant

The assistant is powered by Ollama Cloud API (OpenAI-compatible `/v1/chat/completions` endpoint).
- API route: `src/app/api/chat/route.ts` — reads env vars `OLLAMA_CLOUD_URL`, `OLLAMA_MODEL`, `OLLAMA_CLOUD_API_KEY`
- Component: `src/components/public/assistant/` — floating chat widget
- System prompt is auto-generated from `site.config.ts` (brand, contact, services) — no manual setup needed
- The assistant knows the niche, services, prices, schedule, and contact info automatically
- When transforming for a new niche, the assistant adapts automatically from the config + data

## Build commands
- `npx next build` — production build
- `npm run dev` — dev server

## Git
- Repo: https://github.com/Andrei1loc1/PhysioVita
- Branch: main