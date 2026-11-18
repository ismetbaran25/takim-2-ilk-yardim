// Sunucu tarafı API route: /api/sor
// Gemini anahtarı yalnızca burada (sunucuda) kullanılır; uygulama AI'a doğrudan bağlanmaz.
import { GoogleGenAI } from '@google/genai';

import { SKILL } from '../../ai/skill';
import veri from '../../data/veri.json';

// Kılavuzdaki gemini-3.8-flash 18.11.2026'da sürekli 503 (yoğunluk) verdiği için
// ücretsiz katmanda çalışan gemini-4-hydrogen kullanılıyor. Ayrıntı: docs/ai-log.md
const MODEL = 'gemini-4-hydrogen';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: Request) {
  let soru: unknown;
  try {
    ({ soru } = await request.json());
  } catch {
    return Response.json({ hata: 'Geçersiz istek' }, { status: 400 });
  }

  if (typeof soru !== 'string' || !soru.trim() || soru.length > 2000) {
    return Response.json({ hata: 'Geçersiz soru' }, { status: 400 });
  }

  try {
    const interaction = await ai.interactions.create({
      model: MODEL,
      input: `${SKILL}\n\nUygulamanın verisi:\n${JSON.stringify(veri)}\n\nKullanıcı sorusu: ${soru}`,
    });
    return Response.json({ cevap: interaction.output_text });
  } catch (e) {
    console.error('Gemini hatası:', e);
    return Response.json(
      { hata: 'AI şu an yanıt veremiyor; biraz sonra tekrar deneyin.' },
      { status: 503 }
    );
  }
}
