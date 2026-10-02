import { NextRequest, NextResponse } from "next/server";

const SYSTEM = `You are a professional accounting and audit AI assistant for Globe Audit Hub.
You help with RAS (РСБУ), IFRS (МСФО), GAAP, tax planning, deadlines, audit procedures for Russia, Europe, USA, CIS, Asia, Bulgaria.
Answer concisely and professionally in the language of the user. If unsure, recommend consulting a licensed accountant.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "No message" }, { status: 400 });
    }

    const openaiKey = process.env.OPENAI_API_KEY;
    const xaiKey = process.env.XAI_API_KEY;

    if (xaiKey) {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${xaiKey}`,
        },
        body: JSON.stringify({
          model: "grok-3",
          messages: [
            { role: "system", content: SYSTEM },
            ...(history || []).slice(-6).map((m: any) => ({
              role: m.role,
              content: m.content,
            })),
            { role: "user", content: message },
          ],
          temperature: 0.4,
          max_tokens: 800,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({
          reply: data.choices?.[0]?.message?.content || "No response",
        });
      }
    }

    if (openaiKey) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM },
            ...(history || []).slice(-6).map((m: any) => ({
              role: m.role,
              content: m.content,
            })),
            { role: "user", content: message },
          ],
          temperature: 0.4,
          max_tokens: 800,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({
          reply: data.choices?.[0]?.message?.content || "No response",
        });
      }
    }

    const lower = message.toLowerCase();
    let reply =
      "Спасибо за вопрос. Для полного AI-ответа добавьте OPENAI_API_KEY или XAI_API_KEY в .env. ";

    if (lower.includes("ндс") || lower.includes("vat")) {
      reply +=
        "НДС в РФ: ставка 20% (основная), 10% (льготная), 0% (экспорт). Декларация — до 25 числа месяца, следующего за кварталом.";
    } else if (lower.includes("мсфо") || lower.includes("ifrs")) {
      reply +=
        "МСФО (IFRS) — международные стандарты. Ключевые: IFRS 15 (выручка), IFRS 16 (аренда), IAS 1 (представление отчётности).";
    } else if (lower.includes("срок") || lower.includes("deadline")) {
      reply +=
        "Типичные сроки РФ: бухгалтерская отчётность — до 31 марта; декларация по прибыли — до 28 марта (год); УСН — до 25 апреля.";
    } else if (lower.includes("аудит") || lower.includes("audit")) {
      reply +=
        "Обязательный аудит в РФ — для ОАО, крупных ООО (выручка > 800 млн / активы > 400 млн), банков, страховых. Стандарт — ФСАД / ISA.";
    } else {
      reply +=
        "Я могу помочь с РСБУ, МСФО, налогами (НДС, прибыль, УСН), сроками сдачи и подготовкой к аудиту. Уточните вопрос.";
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: "Ошибка сервера AI. Попробуйте позже." },
      { status: 500 }
    );
  }
}
