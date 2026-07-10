import { NextRequest, NextResponse } from "next/server";
import { site } from "@/config/site.config";
import { SERVICES } from "@/lib/data";

const OLLAMA_URL = process.env.OLLAMA_CLOUD_URL || "https://ollama.com";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "glm-5.2:cloud";
const OLLAMA_API_KEY = process.env.OLLAMA_CLOUD_API_KEY;

const TICK = String.fromCharCode(96);

function buildSystemPrompt() {
  const servicesList = SERVICES.map(
    (s) => "- " + s.title + ": " + s.description + " (Pret: " + s.price + ", Durata: " + s.duration + ")"
  ).join("\n");

  return [
    "Esti " + site.brand.full + ", un asistent virtual pentru o clinica de " + site.niche + ".",
    "",
    "INFORMATII DESPRE CLINICA:",
    "- Nume: " + site.brand.full,
    "- Adresa: " + site.contact.address + ", " + site.contact.city + ", " + site.contact.postalCode,
    "- Telefon: " + site.contact.phone,
    "- Email: " + site.contact.email,
    "- Program: Luni-Vineri " + site.contact.schedule.weekdays + ", Sambata " + site.contact.schedule.saturday + ", Duminica " + site.contact.schedule.sunday,
    "",
    "SERVICII OFERITE:",
    servicesList,
    "",
    "REGULI DE FORMATARE (FOARTE IMPORTANT):",
    "1. Raspunde DOAR in limba romana, prietenos si profesional",
    "2. Fii FOARTE concis — maxim 1-2 propozitii scurte per raspuns",
    "3. Foloseste formatare Markdown pentru raspunsuri clare:",
    "   - **Bold** pentru servicii, preturi, informatii cheie",
    "   - Liste scurte cu bullet (-) cand enumerati servicii",
    "   - Inline code (" + TICK + "backticks" + TICK + ") pentru preturi si ore",
    "4. Nu folosi paragrafe lungi — foloseste randuri scurte",
    "5. Un emoji la inceputul raspunsului (maxim 1)",
    "6. Nu da sfaturi medicale — recomanda mereu programare",
    "7. Nu inventa informatii care nu sunt mai sus",
    "8. Daca nu stii, spune sincer si recomanda contactarea clinicii",
    "",
    "EXEMPLE DE RASPUNSURI BUNE:",
    '- "🧾 Oferim: **Kinetoterapie** (' + TICK + '150 lei' + TICK + '), **Fizioterapie** (' + TICK + '200 lei' + TICK + '), **Recuperare post-op** (' + TICK + '250 lei' + TICK + ') si altele. Te intereseaza unul anume?"',
    '- "📅 Ne gasesti pe Str. Recuperarii 15, Timisoara. Luni-Vineri ' + TICK + '08:00-20:00' + TICK + '. Te asteptam!"',
    '- "💰 Kinetoterapia costa ' + TICK + '150 lei' + TICK + '/sedinta (45 min). Vrei sa programezi?"',
    '- "👋 Salut! Te pot ajuta cu info despre servicii, preturi si programari."',
  ].join("\n");
}

export async function POST(req: NextRequest) {
  if (!OLLAMA_API_KEY) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const { messages } = await req.json();

    const response = await fetch(`${OLLAMA_URL}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OLLAMA_API_KEY}`,
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...messages,
        ],
        stream: false,
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Ollama API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Assistant unavailable" },
        { status: 503 }
      );
    }

    const data = await response.json();
    let content = data.choices?.[0]?.message?.content;
    if (!content || content.trim().length === 0) {
      content = data.choices?.[0]?.message?.reasoning || "Îmi pare rău, nu am putut genera un răspuns.";
    }

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}