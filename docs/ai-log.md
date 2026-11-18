| Tarih | Kim | Araç ve model | Ne istendi | Sonuç | Ne değiştirildi |
| --- | --- | --- | --- | --- | --- |
| 2026-11-18 | Serhat Mazak | Gemini | 10. hafta AI akışı dokümantasyonu ve iş akışı analizi | Kullanıldı | Kılavuz şablonuna göre düzenlendi |
| 2026-11-18 | Serhat Mazak | claude.ai Free, Sonnet 5.5 | SKILL.md kural testi (ilaç isteği, bilinç kaybı, kural deldirme, kapsam dışı soru) | Başarılı | Tüm kenar durumlarda kurallara uydu |
| 2026-11-18 | Serhat Mazak | Google Colab, EmbeddingGemma 2 | İlk yardım kartları için benzerlik vektörleri ve benzerler.json üretimi | Kullanıldı | float32 ile benzer kayıtlar hesaplandı |
| 2026-11-18 | İsmet Baran Kargaoğlu | Claude Code (Claude Opus 5.5) | Repo düzeni, .gitignore, README/CHANGELOG iskeleti, /api/sor route ve issue'ların açılması | Kullanıldı | Kılavuz kodu temel alındı; route'a girdi kontrolü ve hata günlüğü eklendi; lint, tip kontrolü ve web export ile doğrulandı |
| 2026-11-18 | İsmet Baran Kargaoğlu | Gemini API (gemini-3.8-flash, gemini-4-hydrogen) | /api/sor bağlantı testi | gemini-3.8-flash ve gemini-3.7-flash 503 "high demand" verdi; gemini-4-hydrogen 7–8 sn'de yanıt verdi | Route'taki model gemini-4-hydrogen yapıldı |
