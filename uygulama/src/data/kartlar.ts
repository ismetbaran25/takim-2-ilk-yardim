import veri from './veri.json';

export type Kart = {
  id: string | number;
  durum: string;
  metin: string;
  kaynak: string;
};

// Geçici örnek kartlar: veri.json'daki "kartlar" boşken gösterilir.
const ornekKartlar: Kart[] = [
  {
    id: 1,
    durum: 'Burkulma',
    metin:
      'Eklemi dinlendir, 15-20 dakika bezle sarılı buz uygula, hafifçe sar ve yukarıda tut.',
    kaynak: 'Örnek veri (geçici)',
  },
  {
    id: 2,
    durum: 'Yanık',
    metin:
      'Yanan bölgeyi 10-15 dakika serin akan suyun altında tut, temiz bir bezle hafifçe kapat.',
    kaynak: 'Örnek veri (geçici)',
  },
  {
    id: 3,
    durum: 'Bayılma',
    metin:
      'Kişiyi sırt üstü yatır, ayaklarını kaldır, sıkan giysileri gevşet. Kendine gelmezse 112\'yi ara.',
    kaynak: 'Örnek veri (geçici)',
  },
];

const gercekKartlar = (veri as unknown as { kartlar?: Kart[] }).kartlar ?? [];

export const kartlar: Kart[] =
  gercekKartlar.length > 0 ? gercekKartlar : ornekKartlar;