// WhatsApp siparişlerinin gideceği numara (ülke koduyla, boşluksuz). Kendi numaranızı yazın.
const WHATSAPP_NUMBER = "905444685776";

// Ürün listesi — yeni ürün eklemek için bu diziye satır eklemeniz yeterli.
// Bunlar örnek ürünlerdir; kendi ürünleriniz olunca değiştirin.
// shape: çizim türü (sise, sprey, kutu, rulo, sunger)
const PRODUCTS = [
  { id: 1, name: "Yüzey Temizleyici Lavanta", cat: "yuzey", shape: "sise", price: 89, oldPrice: 109, bg: "#efeaf6", tone: "#8a6cc4", badge: "Çok Satan",
    amount: "2,5 L", usage: "Fayans, mutfak tezgâhı, yer ve tüm silinebilir yüzeyler",
    desc: "Kalıcı lavanta kokulu, sulandırarak da kullanılabilen ekonomik yüzey temizleyici." },
  { id: 2, name: "Çamaşır Suyu Ultra", cat: "yuzey", shape: "sise", price: 69, bg: "#e8f2fa", tone: "#3a86c8",
    amount: "4 L", usage: "Banyo, tuvalet, zemin; beyaz çamaşırlar",
    desc: "Yoğun kıvamlı, mikroplara karşı etkili çamaşır suyu. Kötü kokuları giderir." },
  { id: 3, name: "Cam Temizleyici Sprey", cat: "yuzey", shape: "sprey", price: 59, bg: "#e6f5f3", tone: "#2ea893",
    amount: "750 ml", usage: "Cam, ayna, vitrin ve parlak yüzeyler",
    desc: "İz bırakmadan parlatan, hızlı kuruyan cam temizleyici." },
  { id: 4, name: "Yağ Çözücü Sprey", cat: "yuzey", shape: "sprey", price: 79, bg: "#fdf0e3", tone: "#e08a2e", badge: "Yeni",
    amount: "750 ml", usage: "Ocak, davlumbaz, fırın, mutfak dolapları",
    desc: "Mutfaktaki inatçı yağ ve kirleri ovalamadan çözer." },
  { id: 5, name: "Toz Çamaşır Deterjanı", cat: "camasir", shape: "kutu", price: 349, oldPrice: 399, bg: "#e8f2fa", tone: "#3a86c8", badge: "Çok Satan",
    amount: "9 kg (60 yıkama)", usage: "Beyaz ve renkli çamaşırlar, otomatik makine",
    desc: "Düşük sıcaklıkta bile lekeleri çıkaran ekonomik boy toz deterjan." },
  { id: 6, name: "Sıvı Çamaşır Deterjanı", cat: "camasir", shape: "sise", price: 229, bg: "#eef0f6", tone: "#5a6ab0",
    amount: "3 L (50 yıkama)", usage: "Renkli ve siyah çamaşırlar",
    desc: "Renkleri koruyan, kalıntı bırakmayan sıvı deterjan." },
  { id: 7, name: "Çamaşır Yumuşatıcı", cat: "camasir", shape: "sise", price: 129, bg: "#fbe9ef", tone: "#e0567a",
    amount: "4 L", usage: "Tüm çamaşırlar",
    desc: "Çamaşırlarınıza yumuşaklık ve gün boyu süren gül ferahlığı." },
  { id: 8, name: "Bulaşık Deterjanı Limon", cat: "bulasik", shape: "sise", price: 75, bg: "#fbf6dc", tone: "#d6b21e",
    amount: "1,5 L", usage: "Elde bulaşık yıkama",
    desc: "Yağları hızla çözen, elleri yormayan limon kokulu bulaşık deterjanı." },
  { id: 9, name: "Bulaşık Makinesi Tableti", cat: "bulasik", shape: "kutu", price: 289, oldPrice: 339, bg: "#e6f5f3", tone: "#2ea893",
    amount: "60 tablet", usage: "Bulaşık makinesi",
    desc: "Hepsi bir arada tablet: deterjan, parlatıcı ve tuz bir arada." },
  { id: 10, name: "Bulaşık Süngeri (10'lu)", cat: "bulasik", shape: "sunger", price: 49, bg: "#f1f6e4", tone: "#7aa83a",
    amount: "10 adet", usage: "Bulaşık ve mutfak temizliği",
    desc: "Bir yüzü yumuşak, bir yüzü ovucu; tencere ve tavaya zarar vermez." },
  { id: 11, name: "Kireç Çözücü", cat: "banyo", shape: "sprey", price: 85, bg: "#e8f2fa", tone: "#3a86c8",
    amount: "750 ml", usage: "Duşakabin, batarya, lavabo, fayans",
    desc: "Kireç ve sabun lekelerini kolayca çözer, armatürlere parlaklık verir." },
  { id: 12, name: "WC Jel Temizleyici", cat: "banyo", shape: "sise", price: 65, bg: "#e6f5f3", tone: "#2ea893", badge: "Yeni",
    amount: "750 ml", usage: "Klozet ve pisuvar",
    desc: "Kenar altlarına kadar ulaşan yoğun jel; kir ve kokuyu giderir." },
  { id: 13, name: "Sıvı El Sabunu", cat: "banyo", shape: "sise", price: 119, bg: "#fbe9ef", tone: "#e0567a",
    amount: "3,5 L", usage: "Ev, ofis ve iş yeri lavaboları",
    desc: "Gül kokulu, cildi kurutmayan ekonomik boy sıvı sabun. Dispenser doldurmak için ideal." },
  { id: 14, name: "Tuvalet Kağıdı (32'li)", cat: "kagit", shape: "rulo", price: 259, oldPrice: 299, bg: "#f4f4f4", tone: "#9aa0a6", badge: "Çok Satan",
    amount: "32 rulo, 3 katlı", usage: "Ev ve iş yeri",
    desc: "Yumuşak ve dayanıklı 3 katlı tuvalet kağıdı, ekonomik paket." },
  { id: 15, name: "Kağıt Havlu (12'li)", cat: "kagit", shape: "rulo", price: 199, bg: "#eef4f8", tone: "#6a98b8",
    amount: "12 rulo, 2 katlı", usage: "Mutfak ve genel temizlik",
    desc: "Yüksek emiciliğe sahip, kolay yırtılmayan kağıt havlu." },
  { id: 16, name: "Çöp Torbası Jumbo (10'lu)", cat: "kagit", shape: "kutu", price: 55, bg: "#ececec", tone: "#4a4f55",
    amount: "10 adet, 80x110 cm", usage: "Büyük çöp kovaları, iş yerleri",
    desc: "Kalın ve dayanıklı, büzgülü jumbo boy çöp torbası." },
];

const CATEGORY_LABELS = { yuzey: "Yüzey & Ev", camasir: "Çamaşır", bulasik: "Bulaşık", banyo: "Banyo", kagit: "Kağıt & Hijyen" };

// Görsel yerine basit çizimler; gerçek fotoğraflarınız olunca <img> ile değiştirebilirsiniz.
function icon(shape, tone) {
  switch (shape) {
    case "sprey":
      return `<svg viewBox="0 0 100 100"><path d="M38 14h22v8l10 6v6H52" fill="none" stroke="#2b3a3a" stroke-width="3" stroke-linejoin="round"/><rect x="42" y="22" width="14" height="10" rx="2" fill="${tone}"/><path d="M36 32h28c4 0 6 3 6 6v48c0 4-2 6-6 6H36c-4 0-6-2-6-6V38c0-3 2-6 6-6Z" fill="${tone}"/><rect x="36" y="52" width="28" height="22" rx="4" fill="#fff" opacity=".9"/><circle cx="80" cy="24" r="2.5" fill="${tone}"/><circle cx="86" cy="31" r="2" fill="${tone}"/></svg>`;
    case "kutu":
      return `<svg viewBox="0 0 100 100"><rect x="22" y="24" width="56" height="64" rx="6" fill="${tone}"/><rect x="36" y="16" width="28" height="12" rx="4" fill="none" stroke="${tone}" stroke-width="4"/><rect x="30" y="44" width="40" height="26" rx="5" fill="#fff" opacity=".9"/><circle cx="44" cy="57" r="5" fill="${tone}" opacity=".5"/><circle cx="56" cy="55" r="3.5" fill="${tone}" opacity=".5"/></svg>`;
    case "rulo":
      return `<svg viewBox="0 0 100 100"><rect x="26" y="26" width="48" height="56" fill="#fff" stroke="${tone}" stroke-width="3"/><ellipse cx="50" cy="82" rx="24" ry="8" fill="#fff" stroke="${tone}" stroke-width="3"/><rect x="27.5" y="26" width="45" height="56" fill="#fff"/><ellipse cx="50" cy="26" rx="24" ry="8" fill="#fff" stroke="${tone}" stroke-width="3"/><ellipse cx="50" cy="26" rx="7" ry="2.5" fill="${tone}"/></svg>`;
    case "sunger":
      return `<svg viewBox="0 0 100 100"><rect x="18" y="34" width="64" height="20" rx="5" fill="${tone}"/><rect x="18" y="52" width="64" height="16" rx="5" fill="#f2d24a"/><circle cx="32" cy="58" r="2" fill="#d6b21e"/><circle cx="50" cy="62" r="2" fill="#d6b21e"/><circle cx="66" cy="58" r="2" fill="#d6b21e"/><circle cx="78" cy="24" r="4" fill="none" stroke="${tone}" stroke-width="2"/><circle cx="66" cy="20" r="2.5" fill="none" stroke="${tone}" stroke-width="2"/></svg>`;
    default:
      return `<svg viewBox="0 0 100 100"><rect x="42" y="10" width="16" height="10" rx="2" fill="#2b3a3a"/><path d="M40 20h20v8c8 3 12 8 12 15v41c0 4-3 6-6 6H34c-3 0-6-2-6-6V43c0-7 4-12 12-15Z" fill="${tone}"/><rect x="34" y="48" width="32" height="26" rx="5" fill="#fff" opacity=".9"/><path d="M50 54c-4 4-5 7-5 9a5 5 0 0 0 10 0c0-2-1-5-5-9Z" fill="${tone}"/></svg>`;
  }
}

const formatPrice = (n) => n.toLocaleString("tr-TR") + " ₺";

// --- Sepet (tarayıcıda saklanır) ---
let cart = [];
try { cart = JSON.parse(localStorage.getItem("gul-cart")) || []; } catch { cart = []; }

function saveCart() {
  try { localStorage.setItem("gul-cart", JSON.stringify(cart)); } catch {}
  renderCart();
}

function addToCart(id) {
  const item = cart.find((i) => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  showToast("Sepete eklendi ✓");
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
          <div class="line-item__img" style="background:${l.bg}">${icon(l.shape, l.tone)}</div>
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
        ${icon(p.shape, p.tone)}
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
  img.innerHTML = icon(p.shape, p.tone);
  document.getElementById("modalCat").textContent = CATEGORY_LABELS[p.cat];
  document.getElementById("modalName").textContent = p.name;
  document.getElementById("modalPrice").innerHTML = priceHtml(p);
  document.getElementById("modalDesc").textContent = p.desc;
  document.getElementById("modalAmount").textContent = p.amount;
  document.getElementById("modalUsage").textContent = p.usage;
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
