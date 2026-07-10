import { NextRequest, NextResponse } from "next/server";
import { site } from "@/config/site.config";
import { SERVICES } from "@/lib/data";

const OLLAMA_URL = process.env.OLLAMA_CLOUD_URL || "https://ollama.com";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "glm-5.2:cloud";
const OLLAMA_API_KEY = process.env.OLLAMA_CLOUD_API_KEY;

function buildSystemPrompt() {
  const servicesList = SERVICES.map(
    (s) => `- ${s.title}: ${s.description} (Preț: ${s.price}, Durată: ${s.duration})`
  ).join("\n");

  return `Ești ${site.brand.full}, un asistent virtual pentru o clinică de ${site.niche}.

INFORMAȚII DESPRE CLINICĂ:
- Nume: ${site.brand.full}
- Adresă: ${site.contact.address}, ${site.contact.city}, ${site.contact.postalCode}
- Telefon: ${site.contact.phone}
- Email: ${site.contact.email}
- Program: Luni-Vineri ${site.contact.schedule.weekdays}, Sâmbătă ${site.contact.schedule.saturday}, Duminică ${site.contact.schedule.sunday}

SERVICII OFERITE:
${servicesList}

REGULI:
1. Răspunde DOAR în limba română, prietenos și profesional
2. Fii concis — maximum 2-3 propoziții per răspuns
3. Nu da sfaturi medicale specifice — recomandă mereu programare pentru consultație
4. Dacă ești întrebat despre prețuri, folosește informațiile de mai sus
5. Dacă ești întrebat despre programări, direcționează către secțiunea de programare online sau telefon
6. Nu inventa informații care nu sunt mai sus
7. Folosește emoji-uri moderat (maxim 1 per răspuns) pentru a fi prietenos
8. Dacă nu știi răspunsul, spune sincer și recomandă contactarea directă a clinicii`;
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