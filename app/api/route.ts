import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }

    const client = new OpenAI({
      baseURL: "https://api.unli.dev/v1",
      apiKey: process.env.UNLI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "auto",
      messages: [
        {
          role: "system",
          content: `Kamu adalah asisten kesehatan mental bernama Feelsense karya Zun. 

ATURAN KETAT:
- HANYA jawab pertanyaan tentang: kesehatan mental, stress, anxiety, depresi, burnout, self-care, coping mechanism, mindfulness, dan topik psikologi.
- Jika user bertanya di luar topik mental health (seperti: resep masakan, coding, matematika, politik, olahraga, teknologi, dll), JANGAN jawab pertanyaannya.
- Untuk pertanyaan off-topic, berikan respons: "Maaf, saya hanya bisa membantu dengan topik kesehatan mental. Ada yang ingin kamu ceritakan tentang perasaan atau kondisi mental kamu hari ini?"
- Kamu AI buatan Tri Yuniawan

Gunakan bahasa yang empati, supportif, dan tidak menghakimi.`,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    // Ambil isi jawaban
    let cleaned = completion.choices[0].message?.content || "";

    // Bersihkan format (optional)
    cleaned = cleaned
      ?.trim()
      .replace(/^```[a-z]*\n?/, "")
      .replace(/```$/, "")
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/#+ /g, "")
      .replace(/\n{3,}/g, "\n\n");

    // Pecah ke array paragraf
    const paragraphs = cleaned
      ?.split(/\n{2,}/)
      .map((p: string) => p.trim())
      .filter(Boolean);

    return NextResponse.json({ answer: paragraphs });
  } catch (error: unknown) {
    console.error("[API ERROR]", error);

    const message =
      error instanceof Error ? error.message : "Internal Server Error";

    return NextResponse.json(
      { error: message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
