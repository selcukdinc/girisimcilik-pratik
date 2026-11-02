// Sitedeki yenilikler, en yenisi en üstte. Kullanıcıya görünen her değişiklik
// (her PR) buraya bir kayıt ekler; yenilikler.test.ts sırayı ve biçimi denetler.
// Maddeler kullanıcının diliyle yazılır: ne değişti, sana ne kazandırır.
// Markdown alt kümesi kullanılabilir (`kod`, **kalın**).

export interface Yenilik {
  // Değişikliği getiren PR'ın numarası; kaydın kimliği de budur
  pr: number;
  // YYYY-AA-GG
  tarih: string;
  baslik: string;
  maddeler: string[];
}

export const YENILIKLER: Yenilik[] = [
  {
    pr: 2,
    tarih: "2026-11-02",
    baslik: "Şık sırası ve açıklama düzeltmesi",
    maddeler: [
      "Bazı açıklamalar doğru cevabı \"D şıkkı\" gibi harfle anıyordu; şıklar her açılışta karıştığı için bu harf ekrandakiyle uyuşmuyordu. Artık açıklamalar doğru cevabı metniyle söylüyor.",
      "\"Hiçbiri\" ve \"Hepsine\" şıkkı olan iki hukuk sorusunda şıklar artık kitaptaki sırada kalıyor.",
    ],
  },
  {
    pr: 1,
    tarih: "2026-11-01",
    baslik: "Girişimcilik Pratik açıldı",
    maddeler: [
      "KOSGEB Girişimcilik El Kitabı'nın ilk 7 ünitesindeki bütün bölüm sonu soruları (70 soru) kitaptaki haliyle sitede. Bu sorular **GES** etiketi taşır.",
      "Geçmiş sınavlarda çıkmış 25 soru eklendi. Bunların 18'i kitap sorusuyla aynı olduğu için ikinci kez eklenmedi; o kitap soruları **Çıkmış** etiketini de taşıyor.",
      "Aynı konulardan yazılmış 200'ü aşkın **Türetilmiş** soru var. Yalnız kitap ve çıkmış sorularla çalışmak istersen kaynak seçiminden \"Yalnız gerçek sorular\"ı seç.",
      "**Karma test**: seçtiğin ünitelerden sorular karışık sırayla, şıklar karışık yerlerde gelir. Soru sayısını seçebilir, önce çözmediklerinin ve yanlışlarının gelmesini isteyebilirsin.",
      "Soru havuzu, aralıklı tekrar ve ilerleme sayfaları hesap açmadan çalışır. Hesap açma, doğrulama e-postası kurulunca açılacak. Konu anlatımları yakında.",
    ],
  },
];
