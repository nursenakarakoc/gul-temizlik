# Gül Temizlik — Ürün Ekleme ve Silme Rehberi

Sitedeki ürünler bir **Google E-Tablo**'dan geliyor. Tabloda yaptığınız her değişiklik
birkaç dakika içinde sitede görünür. Kod bilmenize gerek yok.

---

## Ürün eklemek

1. Ürün tablosunu açın (bilgisayardan ya da telefondaki **Google E-Tablolar** uygulamasından).
2. En alttaki boş satıra yeni ürünü yazın:

| Sütun | Ne yazılır | Zorunlu mu? | Örnek |
|---|---|---|---|
| **Ürün Adı** | Ürünün adı | ✅ Evet | Domestos Çamaşır Suyu |
| **Kategori** | Ürünün grubu | Hayır | Banyo |
| **Fiyat** | Satış fiyatı (sadece rakam) | ✅ Evet | 79 veya 79,90 |
| **Eski Fiyat** | İndirim varsa eski fiyat; üstü çizili görünür | Hayır | 99 |
| **Miktar** | Boyut / adet | Hayır | 750 ml |
| **Kullanım** | Nerede kullanılır | Hayır | Banyo, tuvalet |
| **Açıklama** | Kısa tanıtım yazısı | Hayır | Mikroplara karşı etkili… |
| **Etiket** | Kartın köşesindeki küçük yazı | Hayır | Yeni, Çok Satan, İndirim |
| **Fotoğraf Linki** | Ürün fotoğrafının linki (aşağıya bakın) | Hayır | |
| **Sitede Göster** | `Evet` ya da `Hayır` | Hayır (boşsa gösterilir) | Evet |

3. Bu kadar. Kaydetmenize gerek yok, Google kendisi kaydeder.
   **Ürün sitede 5 dakika içinde görünür.** (Görünmezse sayfayı yenileyin.)

> **Kategori:** Yeni bir kategori adı yazarsanız (ör. "Oto Bakım") sitede o kategorinin
> düğmesi kendiliğinden çıkar. Aynı kategorideki ürünlere **aynı yazımı** kullanın.

## Ürün silmek

- **Kalıcı olarak kaldırmak:** Ürünün satırına sağ tıklayın → **Satırı sil**.
- **Geçici olarak gizlemek** (ör. stok bitti): **Sitede Göster** sütununa `Hayır` yazın.
  Stok gelince tekrar `Evet` yazın.

## Fiyat değiştirmek

İlgili ürünün **Fiyat** hücresine yeni fiyatı yazın. İndirim yapacaksanız eski fiyatı
**Eski Fiyat** sütununa, yeni fiyatı **Fiyat** sütununa yazın. İndirim bitince
**Eski Fiyat** hücresini boşaltın.

## Ürün fotoğrafı eklemek

Fotoğrafı olmayan ürünlerde site otomatik olarak bir şişe/sprey/kutu çizimi gösterir.
Gerçek fotoğraf eklemek için:

1. Fotoğrafı **Google Drive**'a yükleyin.
2. Fotoğrafa sağ tıklayın → **Paylaş** → Genel erişim: **"Bağlantıya sahip olan herkes"** yapın.
3. **Bağlantıyı kopyala** deyin ve linki tablodaki **Fotoğraf Linki** hücresine yapıştırın.

> Kare (eşit en ve boy) fotoğraflar en güzel görünür.

---

## Dikkat edilecekler

- **İlk satırdaki başlıkları değiştirmeyin ve silmeyin** (Ürün Adı, Kategori, Fiyat…).
  Sütunların sırasını değiştirmek sorun değil.
- **Ürün Adı** ya da **Fiyat** boş olan satırlar sitede gösterilmez.
- Aynı adda iki ürün olmasın.
- Tablonun **sahibi siz olun** ve düzenleme iznini sadece güvendiğiniz kişilere verin.
  Tabloyu düzenleyebilen herkes sitedeki ürünleri değiştirebilir.

---

## Siparişler nasıl geliyor?

Müşteri sepetteki **"WhatsApp ile Sipariş Ver"** butonuna basınca, sepetin listesi ve toplam
tutar hazır bir mesaj olarak WhatsApp'ınıza gelir. Adres, ödeme (IBAN / kapıda ödeme)
ve teslimatı müşteriyle WhatsApp'tan konuşarak ayarlarsınız.

---

## (Bir kereye mahsus) İlk kurulum

Bu adımlar sadece en başta, bir kez yapılır.

1. **Tabloyu oluşturun:** [sheets.google.com](https://sheets.google.com) → **Boş** e-tablo.
   Adını "Gül Temizlik Ürünler" yapın.
2. **Örnek ürünleri içe aktarın:** **Dosya → İçe aktar → Yükle** ile bu klasördeki
   `urun-tablosu-sablonu.csv` dosyasını seçin → **"Mevcut sayfayı değiştir"** → **Verileri içe aktar**.
   (Örnek ürünleri sonra kendi ürünlerinizle değiştirin.)
3. **Tabloyu siteye açın:** **Dosya → Paylaş → Web'de yayınla** →
   "Tüm doküman" yerine **ilgili sayfayı** (Sayfa1) seçin, biçim olarak
   **Virgülle ayrılmış değerler (.csv)** seçin → **Yayınla**.
   Çıkan linki kopyalayın.
4. Bu linki `script.js` dosyasının en üstündeki `URUN_TABLOSU_LINKI = ""` tırnaklarının
   arasına yapıştırın ve siteyi güncelleyin.

> "Web'de yayınla" sadece tablodaki ürün bilgilerini okunabilir yapar; kimse tabloyu
> düzenleyemez. Düzenleme izni yine sadece sizdedir.
