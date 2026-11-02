// WhatsApp siparişlerinin gideceği numara (ülke koduyla, boşluksuz). Kendi numaranızı yazın.
const WHATSAPP_NUMBER = "905444685776";

// Ürün listesi — yeni ürün eklemek için bu diziye satır eklemeniz yeterli.
// Bunlar örnek ürünlerdir; kendi ürünleriniz olunca değiştirin.
const PRODUCTS = [
  { id: 1, name: "Damla Taşlı Kolye", cat: "kolye", price: 649, oldPrice: 799, bg: "#f3e6dc", tone: "#b8894a", badge: "Çok Satan",
    material: "925 ayar gümüş, 22 ayar altın kaplama", size: "Zincir: 45 cm (+5 cm uzatma)",
    desc: "Ortasında damla kesim zirkon taşı bulunan ince zincirli kolye. Günlük kullanıma ve özel günlere uygun." },
  { id: 2, name: "İnci Detaylı Kolye", cat: "kolye", price: 549, bg: "#eef0ee", tone: "#9a9a9a",
    material: "925 ayar gümüş, tatlı su incisi", size: "Zincir: 42 cm",
    desc: "Tek bir doğal tatlı su incisiyle sade ve zarif bir tasarım. Her inci doğası gereği birbirinden farklıdır." },
  { id: 3, name: "Harf Kolye", cat: "kolye", price: 449, bg: "#f6eadf", tone: "#c49a5a", badge: "Kişiye Özel",
    material: "925 ayar gümüş, altın kaplama", size: "Zincir: 45 cm, harf: 1 cm",
    desc: "İstediğiniz harfle hazırlanır. Sipariş notuna harfi yazmanız yeterli. Hediye için harika bir seçim." },
  { id: 4, name: "Sonsuzluk Kolye", cat: "kolye", price: 499, bg: "#f2e8ee", tone: "#b07a8c", badge: "Yeni",
    material: "925 ayar gümüş, rose kaplama", size: "Zincir: 45 cm",
    desc: "Sonsuzluk simgeli, rose renkli ince kolye. Sevgiliye ya da en yakın arkadaşa anlamlı bir hediye." },
  { id: 5, name: "Halka Küpe", cat: "kupe", price: 399, bg: "#f1e9e1", tone: "#b8894a",
    material: "925 ayar gümüş, altın kaplama", size: "Çap: 2 cm",
    desc: "Her kombine uyan klasik halka küpe. Hafif yapısıyla gün boyu rahat kullanılır." },
  { id: 6, name: "Zirkon Taşlı Küpe", cat: "kupe", price: 349, oldPrice: 429, bg: "#eceff3", tone: "#8c95a3",
    material: "925 ayar gümüş, zirkon taş", size: "Taş: 5 mm",
    desc: "Parıltılı tek taş vida küpe. Sade ama göz alıcı; her yaşa yakışır." },
  { id: 7, name: "Yaprak Küpe", cat: "kupe", price: 379, bg: "#eef1e8", tone: "#a08a55", badge: "Yeni",
    material: "925 ayar gümüş, mat altın kaplama", size: "Boy: 2,5 cm",
    desc: "Doğadan ilham alan yaprak formlu sallantılı küpe. El işçiliğiyle dokulandırılmıştır." },
  { id: 8, name: "Ay Yıldız Küpe Seti", cat: "kupe", price: 289, bg: "#eae8f2", tone: "#7c74a8",
    material: "925 ayar gümüş", size: "Ay: 8 mm, yıldız: 6 mm",
    desc: "Biri ay biri yıldız olan asimetrik küpe seti. Eğlenceli ve modern bir dokunuş." },
  { id: 9, name: "Tektaş Yüzük", cat: "yuzuk", price: 899, bg: "#f4ece4", tone: "#b8894a", badge: "Çok Satan",
    material: "925 ayar gümüş, zirkon taş", size: "Ölçü: 6–9 (sipariş notunda belirtin)",
    desc: "Klasik tektaş formunda, ışığı güzel yansıtan yüzük. Söz ve nişan hediyesi olarak da tercih edilir." },
  { id: 10, name: "Minimal Bant Yüzük", cat: "yuzuk", price: 299, bg: "#eeeeee", tone: "#9a9a9a",
    material: "925 ayar gümüş", size: "Ölçü: 5–10",
    desc: "İnce ve sade bant yüzük. Tek başına ya da diğer yüzüklerle üst üste takılabilir." },
  { id: 11, name: "Tarih Yazılı Yüzük", cat: "yuzuk", price: 499, bg: "#f6e9e3", tone: "#c18d6b", badge: "Kişiye Özel",
    material: "925 ayar gümüş, rose kaplama", size: "Ölçü: 5–10",
    desc: "Sizin için önemli bir tarih yüzüğün dışına işlenir. Tarihi sipariş notuna yazmanız yeterli." },
  { id: 12, name: "Doğal Taş Yüzük", cat: "yuzuk", price: 459, bg: "#e7f0ec", tone: "#4f8c74",
    material: "925 ayar gümüş, yeşim taşı", size: "Ölçü: ayarlanabilir",
    desc: "Doğal yeşim taşıyla hazırlanan ayarlanabilir yüzük. Her taşın rengi ve deseni eşsizdir." },
  { id: 13, name: "Zincir Bileklik", cat: "bileklik", price: 429, bg: "#f3ebe2", tone: "#b8894a",
    material: "925 ayar gümüş, altın kaplama", size: "Uzunluk: 17 cm (+3 cm uzatma)",
    desc: "Kalın halkalı, şık zincir bileklik. Saatle birlikte ya da tek başına güzel durur." },
  { id: 14, name: "Nazar Boncuklu Bileklik", cat: "bileklik", price: 259, bg: "#e8eef5", tone: "#4a7bb8", badge: "Yeni",
    material: "925 ayar gümüş, mineli nazar boncuğu", size: "Uzunluk: 16 cm (+3 cm uzatma)",
    desc: "Küçük mineli nazar boncuklu ince bileklik. Kötü gözlere karşı şık bir koruma." },
  { id: 15, name: "Kelepçe Bileklik", cat: "bileklik", price: 579, bg: "#f0ece6", tone: "#a3825a",
    material: "925 ayar gümüş, mat altın kaplama", size: "Ayarlanabilir",
    desc: "Açık uçlu, bileğe göre ayarlanabilen kelepçe bileklik. Modern ve güçlü bir görünüm." },
  { id: 16, name: "Taşlı Tenis Bileklik", cat: "bileklik", price: 849, oldPrice: 999, bg: "#eef0f4", tone: "#8a93a6", badge: "Çok Satan",
    material: "925 ayar gümüş, zirkon taşlar", size: "Uzunluk: 17 cm",
    desc: "Baştan sona sıra taşlı, parıltılı tenis bileklik. Davetler ve özel geceler için ideal." },
];

const CATEGORY_LABELS = { kolye: "Kolye", kupe: "Küpe", yuzuk: "Yüzük", bileklik: "Bileklik" };

// Görsel yerine basit çizimler; gerçek fotoğraflarınız olunca <img> ile değiştirebilirsiniz.
function icon(cat, tone) {
  const s = `stroke="${tone}" stroke-width="3" fill="none" stroke-linecap="round"`;
  switch (cat) {
    case "kolye":
      return `<svg viewBox="0 0 100 100"><path d="M18 12 Q50 78 82 12" ${s}/><path d="M50 62 l-9 13 9 14 9-14z" fill="${tone}" opacity=".85"/></svg>`;
    case "kupe":
      return `<svg viewBox="0 0 100 100"><circle cx="32" cy="58" r="16" ${s}/><circle cx="68" cy="58" r="16" ${s}/><circle cx="32" cy="34" r="3" fill="${tone}"/><circle cx="68" cy="34" r="3" fill="${tone}"/></svg>`;
    case "yuzuk":
      return `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="62" rx="28" ry="24" ${s} stroke-width="6"/><path d="M50 22 l-12 12 12 10 12-10z" fill="${tone}" opacity=".85"/></svg>`;
    default:
      return `<svg viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="36" ry="30" ${s} stroke-dasharray="6 5" stroke-width="5"/><circle cx="50" cy="80" r="5" fill="${tone}"/></svg>`;
  }
}

const formatPrice = (n) => n.toLocaleString("tr-TR") + " ₺";

// --- Sepet (tarayıcıda saklanır) ---
let cart = [];
try { cart = JSON.parse(localStorage.getItem("sena-cart")) || []; } catch { cart = []; }

function saveCart() {
  try { localStorage.setItem("sena-cart", JSON.stringify(cart)); } catch {}
  renderCart();
}

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  showToast("Sepete eklendi ✨");
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
}

function renderCart() {
  const list = document.getElementById("cartItems");
  const lines = cart.map((i) => ({ ...PRODUCTS.find((p) => p.id === i.id), qty: i.qty })).filter((l) => l.name);
  const total = lines.reduce((sum, l) => sum + l.price * l.qty, 0);
  const count = lines.reduce((sum, l) => sum + l.qty, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = formatPrice(total);

  list.innerHTML = lines.length
    ? lines.map((l) => `
        <div class="line-item">
          <div class="line-item__img" style="background:${l.bg}">${icon(l.cat, l.tone)}</div>
          <div>
            <div class="line-item__name">${l.name}</div>
            <div class="qty">
              <button data-qty="-1" data-id="${l.id}" aria-label="Azalt">−</button>
              <span>${l.qty}</span>
              <button data-qty="1" data-id="${l.id}" aria-label="Arttır">+</button>
            </div>
          </div>
          <div style="text-align:right">
            <div>${formatPrice(l.price * l.qty)}</div>
            <button class="remove" data-remove="${l.id}">Kaldır</button>
          </div>
        </div>`).join("")
    : `<p class="empty">Sepetiniz şu an boş.</p>`;
}

// --- Ürünler ---
let currentCat = "hepsi";
let currentSort = "onerilen";

const priceHtml = (p) => `${formatPrice(p.price)}${p.oldPrice ? `<del>${formatPrice(p.oldPrice)}</del>` : ""}`;

function renderProducts() {
  let items = currentCat === "hepsi" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.cat === currentCat);
  if (currentSort === "artan") items.sort((a, b) => a.price - b.price);
  if (currentSort === "azalan") items.sort((a, b) => b.price - a.price);
  if (currentSort === "indirim") items = items.filter((p) => p.oldPrice);

  const grid = document.getElementById("productGrid");
  if (!items.length) {
    grid.innerHTML = `<p class="empty">Bu seçimde ürün bulunamadı.</p>`;
    return;
  }
  grid.innerHTML = items.map((p) => `
    <article class="card">
      <div class="card__img" style="background:${p.bg}" data-view="${p.id}">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        ${icon(p.cat, p.tone)}
      </div>
      <div class="card__body">
        <span class="card__cat">${CATEGORY_LABELS[p.cat]}</span>
        <h3 class="card__name" data-view="${p.id}">${p.name}</h3>
        <div class="card__foot">
          <span class="price">${priceHtml(p)}</span>
          <button class="add-btn" data-add="${p.id}">Sepete Ekle</button>
        </div>
      </div>
    </article>`).join("");
}

// --- Yardımcılar ---
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 1800);
}

const drawer = document.getElementById("cartDrawer");
const toggleDrawer = (open) => {
  drawer.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", String(!open));
};

// --- Ürün detay penceresi ---
const modal = document.getElementById("productModal");
let modalProductId = null;

function openModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  modalProductId = id;
  const img = document.getElementById("modalImg");
  img.style.background = p.bg;
  img.innerHTML = icon(p.cat, p.tone);
  document.getElementById("modalCat").textContent = CATEGORY_LABELS[p.cat];
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalPrice").innerHTML = priceHtml(p);
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalMaterial").textContent = p.material;
  document.getElementById("modalSize").textContent = p.size;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modal.addEventListener("click", (e) => { if (e.target.closest("[data-close-modal]")) closeModal(); });
document.getElementById("modalAdd").addEventListener("click", () => {
  addToCart(modalProductId);
  closeModal();
});

// --- Olaylar ---
document.getElementById("filters").addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c === btn));
  currentCat = btn.dataset.cat;
  renderProducts();
});

document.getElementById("sort").addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

document.getElementById("productGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (btn) return addToCart(Number(btn.dataset.add));
  const view = e.target.closest("[data-view]");
  if (view) openModal(Number(view.dataset.view));
});

document.getElementById("cartItems").addEventListener("click", (e) => {
  const q = e.target.closest("[data-qty]");
  if (q) changeQty(Number(q.dataset.id), Number(q.dataset.qty));
  const r = e.target.closest("[data-remove]");
  if (r) changeQty(Number(r.dataset.remove), -Infinity);
});

document.getElementById("cartOpen").addEventListener("click", () => toggleDrawer(true));
drawer.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) toggleDrawer(false); });
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  toggleDrawer(false);
  closeModal();
});

document.getElementById("menuBtn").addEventListener("click", () => document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach((a) => a.addEventListener("click", () => document.getElementById("nav").classList.remove("open")));

document.getElementById("checkout").addEventListener("click", () => {
  if (!cart.length) return showToast("Sepetiniz boş");
  const lines = cart.map((i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return `• ${p.name} x${i.qty} — ${formatPrice(p.price * i.qty)}`;
  });
  const total = cart.reduce((s, i) => s + PRODUCTS.find((p) => p.id === i.id).price * i.qty, 0);
  const text = `Merhaba, sipariş vermek istiyorum:\n${lines.join("\n")}\nToplam: ${formatPrice(total)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
});

// İletişim formu mesajı WhatsApp'a hazır metin olarak aktarır; ek bir servise gerek yoktur.
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const text = `Merhaba, ben ${data.get("ad")} (${data.get("eposta")}).\n${data.get("mesaj")}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  document.getElementById("formNote").textContent = "Teşekkürler! Mesajınız WhatsApp'ta açıldı, göndermeniz yeterli.";
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
renderCart();
