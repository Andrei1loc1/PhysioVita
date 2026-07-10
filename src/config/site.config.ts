/**
 * ═══════════════════════════════════════════════════════════════
 *  SITE CONFIG — Single source of truth for niche-specific data
 * ═══════════════════════════════════════════════════════════════
 *
 *  To transform this site for a new niche, edit ONLY this file
 *  plus `src/lib/data.ts` and `src/app/globals.css`.
 *  NEVER modify component files — they read from here.
 */

export const site = {
  /** Brand identity */
  brand: {
    prefix: "Physio",
    highlight: "Vita",
    full: "PhysioVita",
    adminIcon: "Activity", // lucide icon name for admin sidebar
  },

  /** Niche label (used in footer tagline, meta, etc.) */
  niche: "fizioterapie și recuperare medicală",

  /** Locale for date formatting */
  locale: "ro-RO",

  /** Contact information */
  contact: {
    address: "Str. Recuperării nr. 15",
    city: "Timișoara",
    postalCode: "300001",
    phone: "+40 721 234 567",
    phoneHref: "tel:+40721234567",
    email: "contact@physiovita.ro",
    schedule: {
      weekdays: "08:00 — 20:00",
      saturday: "09:00 — 14:00",
      sunday: "Închis",
    },
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.1586328875437!2d21.2266!3d45.7489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455e80e7f23e89%3A0x3d0c7e1e0e8f12c5!2sTimi%C8%99oara!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro",
    mapDescription:
      "Situată în centrul Timișoarei, clinica noastră este ușor accesibilă cu transportul în comun sau cu mașina.",
  },

  /** Hero section content */
  hero: {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80&auto=format&fit=crop",
    imageAlt: "Clinică de fizioterapie",
    badge: "Deschis — Programează-te azi",
    titleLine1: "Recuperarea ta,",
    titleLine2: "prioritatea noastră",
    subtitle:
      "Echipă dedicată, tehnologie modernă și un plan de tratament personalizat. Recâștigă-ți mobilitatea cu încredere.",
    stats: [
      { value: 15, label: "Ani experiență" },
      { value: 8500, label: "Pacienți" },
      { value: 4.9, label: "Rating" },
    ],
  },

  /** Footer tagline */
  footerTagline:
    "Clinica de fizioterapie și recuperare medicală unde fiecare pacient primește atenția pe care o merită.",

  /** Admin dashboard */
  admin: {
    doctorName: "Dr. Andrei Popescu",
    doctorShortName: "Dr. Popescu",
    doctorTitle: "Medic specialist recuperare",
    doctorInitials: "AP",
    greeting: "Bună dimineața",
  },

  /** Virtual assistant */
  assistant: {
    name: "Asistent Virtual",
    greeting: "Bună ziua! 👋 Cu ce te pot ajuta astăzi?",
    placeholder: "Scrie un mesaj...",
    quickQuestions: [
      "Ce servicii oferiți?",
      "Care sunt prețurile?",
      "Cum pot programa o vizită?",
      "Unde vă aflați?",
    ],
    suggestions: [
      "Întreabă despre servicii",
      "Întreabă despre prețuri",
      "Vreau să programez",
      "Unde vă aflați?",
    ],
  },

  /** Color palette (must match globals.css :root values) */
  colors: {
    primary: "#5a9e76",
    primaryLight: "#a8d5ba",
    primaryDark: "#2d5a3f",
    accent: "#c4704a",
    bg: "#faf8f4",
    dark: "#2a2a2a",
    muted: "#5a5a5a",
    mutedLight: "#6a6a6a",
    border: "#e8e0d4",
    cream: "#f5f0e8",
  },
} as const;

export type SiteConfig = typeof site;