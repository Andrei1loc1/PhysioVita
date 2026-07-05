import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PhysioVita — Recuperare cu suflet",
  description:
    "Clinică de fizioterapie și recuperare medicală. Tratamente personalizate, echipă dedicată, tehnologie modernă.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}