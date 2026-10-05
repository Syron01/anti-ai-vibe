---
name: anti-ai-vibe
description: AI üretimi "vibe" estetiğinden kaçınma sistemi — UI/renk paleti seçerken, web sitesi/component tasarlerken, kod yazarken ve 3D sahne/modellerken KULLAN. Tetikleyiciler: "tasarla", "renk paleti", "landing page", "site yap", "UI", "3D model", "Three.js", "Blender", yeni proje başlatma, kod yazma. Kullanıcı "AI vibe istemiyorum", "doğal olsun", "ruhu olsun", "jenerik olmasın" derse mutlaka uygula. Amaç: ortalama-Tailwind-mor-gradient estetiği yerine yazarı belli olan, kısıtlı ve sistematik çıktı.
---

# anti-ai-vibe: Yazarı belli olan tasarım, sistemli kod

Tek ilke: **Slop = yazarı olmayan tasarımdır.** AI, eğitim verisinin ortalamasına döner (mor-indigo gradient, Inter, rounded-2xl kart, glow orb). Ortalamadan çıkmak için iki şey yeterli: **somut bir çapa** ve **önceden yazılmış kısıtlar**. Zevk, kısıtın ürünüdür — sınırsız seçenek uygulanmaz; seçenekler fikir kalana kadar silinir.

## 0. Süreç — her işte, koddan/tasarımdan ÖNCE

1. **Çapa seç** (1 cümle, somut): "Anadolu kerpiç + bakır", "1970 İskandinav kütüphanesi", "eski matbaa mürekkebi". "Modern", "minimal", "profesyonel" YASAK — bunlar çapa değil, ortalamadır.
2. **Token dosyası yaz** (proje köküne `design-tokens` / CSS değişkeni olarak) ve ona sadık kal:
   ```
   --renk-zemin:   #F5F1E8   /* krem kağıt (60%) */
   --renk-yuzey:   #E7E0D2   /* kum (30%) */
   --renk-vurgu:   #B4552D   /* kiremit (10% — sadece birincil eylem) */
   --renk-metin:   #2B2620
   --yazi-baslik:  <1 font, nedeni belirtilmiş>
   --yazi-govde:   <1 font>
   --bosluk:       4 8 12 16 24 40 64   (tek ölçek)
   --kose:         6px                  (tek değer)
   ```
3. **Gerçek içerik kullan**, placeholder ("Lorem", "Platform X", uydurma istatistik) asla.
4. Üç boyutlu işte de aynı token dosyası geçerli: palet sahne ile web arasında paylaşılır.

## 1. Renk paleti — doğal ve ruhlu

- **2 nötr + 1 vurgu.** 60-30-10 dağıt. Fazlası kaos; üç renkten fazlasını ancak gerçek bir marka sistemi gerektirir.
- Paleti **gerçek bir kaynaktan al**: doğa fotoğrafı, film renk düzenlemesi, bölgenin malzemesi (taş, toprak, deniz, zeytin, kerpiç). Doygunluğu düşür (muted) — doygun renk dramatik film dışında gerçekçi değildir.
- Vurgu **tek yerde**: birincil eylem (CTA/link). "Her şeyin ön plana çıkması" = hiçbir şeyin çıkmaması.
- Kontrast WCAG AA'dan aşağı düşmesin; gradient üstüne gövde metni koyma.

**Yasak varsayılanlar** (tek tek değil, bunlara yönelme refleksi yasak): mor-indigo gradientler (#6366F1/#8B5CF6/#A855F7), koyu zeminde neon + glow, `bg-clip-text` gradient başlık, emerald #10B981 yedeği, teal-turuncu blockbuster düzeni, ve "post-mor refleksi" olan hazır krem+amber "zengin" palet şablonu. Renkleri işlevsel adlandır (`--renk-vurgu`), `gradient-start/gradient-end` değil.

**Sıcak palet ayrım testi**: krem/kahve tonu yasak değil, *hazır şablon olarak seçilmesi* yasak. Geçerli sayılması için iki şart: kaynağı somut isimleyebilmek (hangi malzeme/yer/film) ve şablonu **kıran en az bir ton** (soğuk bir taban, koyu bir yeşil/lacivert gibi) taşıması.

**Font tells**: her yerde Inter/Roboto/Poppins · "kaçış fontu" refleksiyle Space Grotesk / Instrument Serif · sans başlık içinde tek italik serif kelime · tek font-tek weight ile düz hiyerarşi. Font çapadan **türetilir** (çıktıyı görüp sonra bahane üretilmez); en fazla 2 aile, isimlenen 1 neden.

**Kontrast prosedürü**: teslim öncesi iki çifti ölç — gövde metin/zemin ve vurgu zemin üstü metin; 4.5:1 altındaysa tonu koyulaştır, transparanlıkları yeniden kurma.

## 2. UI — görsel tells

Yapma: hero formülü (badge chip + dev başlık + 2 CTA + arkada orb) · üç eşit özellik kartı · her yerde bento · her elemanda 16-24px radius · cam efekti (backdrop-blur) refleksi · Lucide Sparkles/Zap/Shield ikonları · emoji ikon · her şeye aynı fade-up animasyonu · uydurma sayaç/logoları · tek tip boşluk ritmi · her şeyi ortala.

Yap: **düz dürüst yüzeyler** (dolgulu, küçük radius, işlevsel gölge), hero **bilgi taşıyan** (tarih, manifesto, somut idare — "hip" boşluk cümlesi değil), 1-2 font ve **nedeni olan** tipografik vurgu (el yazısı "mürekkep" demekse Caveat; teknik kimlikse mono), bir bölüm bilinçli asimetrik, gerçek fotoğraf/gerçek isim/gerçek rakam, boş-yükleniyor-hata durumlarını tasarımın parçası say.

Örnek siteler bunu böyle yapar: Mürekkep = #323232 + tek kırmızı #c6073a, isimli ekip fotoğrafları. Scratch = sistem fontu + beyaz/mavi/turuncu, gradient yok. Ortak damar: az renk + gerekçeli tipografi + gerçek içerik + dekorun ya yokluğu ya anlamı.

## 3. Kod — en az kodla en iyisi

Mevcut projede: **önce mevcut konvansiyonu oku, ona katıl** — kendi tarzını dayatma, çalışan kodu yeniden yazma (yeniden yazma gerekçe ister).

Yeni kodda:
- **YAGNI**: bugün gerekmeyen soyutlama, config, "genişletilebilirlik kancası" yazma. Tek kullanımlık arayüz/fabrika/adapter = şişkinlik. Sorun 5 satırsa paket kurma; kurduğun her bağımlılık var mı diye doğrulanır ve yerini hak eder.
- **Savunma gürültüsü yok**: atamayan try/catch, çağıranın garanti ettiği değere tekrar null kontrolü, "olmazsa devam et" sessiz fallback.
- **Yorum = yalnızca neden** (kısıt, pazarlık, sebep). Kodun ne yaptığını anlatan yorum silinir.
- **Sistem tek:** hata yönetimi, HTTP katmanı, tarih yardımcısı — her iş için **tek yol**. İkinci bir kalıp belirdiyse birini sil. Dosya yeri "nerede olsun?" sorusunun bariz cevabıdır.
- **Küçük yüzey**: dar arayüz + derin uygulama; dışa açılmadığı halde public olan hiçbir şey yok. Ölü kod ve kullanılmayan import silinir.
- **Sahip çıkma testi**: elle yeniden türetemeyeceğin değişikliği gönderme. Okumadığın kodu yazma.

**Hareket politikası** (token dosyasına işlenir): tek easing + tek süre, yalnızca işlevli (hover/odak/durum geçişi). Her şeye aynı fade-up = silinir. Boşta sürekli animasyon yalnızca nesne **içeriğin kendisiyse** (3D vitrin objesi) meşrudur; sayfa süsü değil.

## 4. 3D

Yapma: plastik blob/clay illüstrasyon · gradient orb logo · her yüzeyde aynı parlaklık (uniform gloss) · yüzen küreler · ayrım olmadan detay yığını · saf siyah-gri gölgeler.

Yap:
1. **Silüet önce**: koyu düzlemde siyah silüet olarak okumuyorsa detay kurtarmaz. Önce büyük kütleler, sonra detay.
2. **Paleti proje token dosyasından al** — 2 nötr + 1 vurgu, sahnede de aynı. Her rengin yeri var.
3. **Işık 2-3 adet, yönü önceden bildirilmiş**: key + fill/rim. Işık kompozisyondur, sonradan eklenen aydınlatma değil.
4. **Gerçek malzeme**: roughness/metalness haritası, tekdüze parlaklık yerine yüzey başına davranış; curved yüzeyde yumuşak terminator; gölgeye ortam rengi sızması (bounce); SSS gereken yerde (deri/mum) SSS.
5. **Detay vurgudur, varsayılan değil**: sadece gözün baktığı yere poligon/doku harca.
6. **Mikro kusurlar**: mükemmel simetri ve pürüzsüzlük yapaylık işaretidir; doğal asimetri, hafif doku gürültüsü (kameralı grain, boyalı overlay değil).
7. Logo/ikon testi: 24px düz renkte okunmalı — gradient orb'un 24px'te kaldığı yerden çöker.
8. **Gerçek zamanlı bütçe** (Three.js/web): poligon ve doku bütçesini başta yaz (sahnenin ölçeğine göre), gölge haritası sayısını sınırla, sahne ekran dışındaysa render duraklat, kare başına yeni obje/GC oluşturma. Offline render kalitesi hedeflenir, bütçe gerçek zamanlıdır.

**Tailwind projesiyse**: token dosyası theme config'e yazılır ve varsayılan palet/radius sınıfları (indigo/violet, rounded-2xl, shadow-lg) kullanılmaz — konvansiyon tek yerden yaşar.

## 5. Teslim öncesi kapı

Tarama kuralı: **"Tek eşleşme gürültü, on eşleşme imzadır"** — çıktında yukarıdaki yasaklılardan onlarca varsa iş geri döner.

Üç soru:
1. Bu işin **bir yazarı var mı?** (çapa belli mi, kısıtlar tek mi)
2. **Ses tonu var mı?** (yerinden, anından belli mi — anonim her yerden herhangi bir yer mi)
3. **Kaybolsa fark edilir miydi?**

Üçü de evet değilse: moru değil, ortalamanı sil — somutlaştır, kısıtla, gerçeğiyle doldur.
