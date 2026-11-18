# AI akışı

Tetikleyici: Kullanıcı Sor ekranında soru yazıp Gönder'e basar
AI işlemi: API route soruyu talimat ve uygulamanın verisiyle Gemini'ye gönderir
Koşul: Hata veya limit varsa kullanıcıya hata mesajı gösterilir
Çıktı: Yanıt ekranda gösterilir
İnsan onayı: Uygulama tıbbi tanı koymaz ve ilaç önermez; acil durumlarda 112'ye, diğer durumlarda kampüs sağlık birimine yönlendirir ve her ekranda sağlık uyarısı gösterir
Kayıt: AI kullanım günlüğü ve ölçüm dosyaları docs/ altında

Karar: İş akışı. Gerekçe: Kullanıcının sorusunu alıp sabit talimat ve yerel veriyle modele ileten, adım sayısı önceden bilinen, maliyeti ve hata ayıklaması öngörülebilir deterministik bir yapı olduğu için sistem ajan değil iş akışıdır.
