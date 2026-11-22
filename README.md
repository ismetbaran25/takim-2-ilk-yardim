# Kampüs Sağlık Asistanı

Kampüs Sağlık ve İlk Yardım Bilgi Asistanı. Tanı koymaz, ilaç önermez.

> Bu bir ders projesidir; tüm veriler sentetiktir. Uygulama tanı veya tedavi önermez.

## Takım ve roller

| Rol | Kim | Sorumlu olduğu çıktılar |
| --- | --- | --- |
| Ürün sahibi | Feyza Belinay Bögrek (Hemşirelik) | Problem ve kullanıcı, uygulama içeriği, 25 vakalık test seti, alan doğruluğu, kullanıcı testi |
| İçerik ve yayın sorumlusu | Beren Doğan (YBS) | YouTube videoları, tanıtım sayfası metinleri, benimseme planı, final sunumu |
| Teknik lider | İsmet Baran Kargaoğlu (BP) | Mimari, repo düzeni, pull request onayı, web ve APK yayını |
| Uygulama geliştiricisi | Sude Etyemez (BP) | Ekranlar, API route, Gemini bağlantısı, onay pencereleri |
| AI ve ölçüm sorumlusu | Serhat Mazak (BP) | SKILL.md, EmbeddingGemma 2, model karşılaştırması, AI kullanım günlüğü |
| Web sayfası sorumlusu | Bürge Dağ (BP) | GitHub Pages tanıtım sayfası, ekran görüntüleri, YouTube ve uygulama bağlantıları |

## Problem ve hedef kullanıcı

Kampüste biri yaralanınca öğrenciler ne yapacağını bilmiyor; panik anında yanlış ama “bilinen” yöntemler uygulanıyor
ya da kimse müdahale etmeye cesaret edemiyor. Bu uygulama, kampüste en sık karşılaşılan acil durumları kısa ve
anlaşılır kartlara dönüştürerek bu boşluğu doldurmayı amaçlıyor.
Her kart birkaç adımda ne yapılması ve ne yapılmaması gerektiğini anlatıyor, ne zaman 112’nin aranması gerektiğini de
açıkça belirtiyor. Uygulama özellikle ilk yardım eğitimi almamış öğrenciler, kulüp üyeleri ve kampüs personeli için
tasarlandı; telefondan saniyeler içinde açılıp telaş anında bile kolayca takip edilebiliyor. Amaç profesyonel yardımın
yerini almak değil, sağlık ekibi gelene kadar geçen kritik dakikalarda doğru ve güvenli adımları attırmak.

### Kullanıcı görevleri

1. Burkulma kartını bulun.
2. Sağlık biriminin çalışma saatini öğrenin.
3. Sor ekranında bir soru sorun.


## Canlı linkler

- Web uygulaması: https://takim-2-ilk-yardim.expo.app
- Android APK: _(EAS Build linki, 12.–13. hafta)_
- Tanıtım sayfası: https://burgedag21-hub.github.io/takim-2-site/
- YouTube kanalı: https://www.youtube.com/@Tak%C4%B1m2Kamp%C3%BCsSa%C4%9Fl%C4%B1kAsistan%C4%B1
- Short 1: https://www.youtube.com/shorts/ojJh-AvQC1M
- Ekran akışı taslağı: _(Artifact linki)_

## Kurulum

Gerekenler: Git, Node.js (LTS), VS Code.

```bash
git clone https://github.com/ismetbaran25/takim-2-ilk-yardim.git
cd takim-2-ilk-yardim/uygulama
npm install
cp .env.example .env   # GEMINI_API_KEY değerini teknik liderden alın; .env asla commit edilmez
npx expo start         # tarayıcıda açmak için w
```

### Çalışma akışı

Her iş için ayrı dal açın (`ozellik/<kisa-ad>`), küçük ve sık pull request gönderin. Teknik lider inceler ve `main` dalına birleştirir. Alan öğrencileri dosyaları GitHub web arayüzünde düzenleyip "Propose changes" ile pull request açar.

## Mimari

```
takim-2-ilk-yardim/
├── uygulama/                 Expo (SDK 58) uygulaması, web çıktısı "server" modunda
│   └── src/
│       ├── app/              Ekranlar (Expo Router; her dosya bir sayfa)
│       │   └── api/sor+api.ts  Sunucu tarafı API route → Gemini
│       ├── ai/skill.ts       Gemini'ye giden talimat (SKILL.md gövdesi)
│       ├── data/veri.json    İlk yardım kartları, sağlık birimi, duyurular (sentetik)
│       └── components/       Ortak bileşenler (ör. sağlık uyarısı)
├── skills/                   Agent Skill (SKILL.md)
├── notebooks/                EmbeddingGemma 2 not defteri
├── docs/                     AI akışı, AI günlüğü, test seti, ölçüm, kullanıcı testi
└── CHANGELOG.md
```

Uygulama AI'a doğrudan bağlanmaz: istek `/api/sor` route'una gider, route talimatı ve uygulamanın verisini soruyla birlikte Gemini'ye gönderir. API anahtarı yalnızca `.env` dosyasında ve EAS gizli değişkeninde durur.

## AI bileşenleri (Gemini, Agent Skill, EmbeddingGemma 2)

## Ölçüm ve model karşılaştırması

## Sınırlılıklar

## Katkı beyanı

## Benimseme planı

Kampüs Sağlık Asistanı, öğrencilerin yurt, derslik, laboratuvar ve ortak kampüs alanlarında karşılaşabilecekleri ani sağlık durumlarında panik yapmadan, güvenilir ilk yardım adımlarına hızlıca ulaşmasını sağlar. Öğrenciler uygulamayı; YouTube Shorts serileri, kısa sosyal medya içerikleri ve kampüs panolarına asılacak QR kodlu afişler aracılığıyla keşfeder. Oryantasyon günlerinde ve öğrenci kulüpleriyle yapılan etkinliklerde uygulamalı mini senaryolarla tanıtılması, öğrencilerin asistanı günlük hayatta aktif kullanmasını kolaylaştırır. Düzenli paylaşılan pratik örnekler sayesinde kampüs genelinde doğru ilk yardım alışkanlığının kalıcı hale gelmesi hedeflenir.
