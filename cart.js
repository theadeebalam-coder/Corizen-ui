/* =========================
   CORIZEN CART SYSTEM
========================= */

const CART_KEY = "corizen_cart";

/* ---------- GET CART ---------- */
function getCart() {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

/* ---------- SAVE CART ---------- */
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ---------- ADD TO CART ---------- */
function addToCart(productId) {
  const cart = getCart();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });
  }

  saveCart(cart);
  alert("Added to cart");
}

/* ---------- REMOVE ITEM ---------- */
function removeItem(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
}

/* ---------- UPDATE QUANTITY ---------- */
function updateQty(productId, change) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    removeItem(productId);
    return;
  }

  saveCart(cart);
  renderCart();
}

/* ---------- TOTAL ---------- */
function cartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

/* ---------- RENDER CART PAGE ---------- */
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");

  if (!container || !totalBox) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    totalBox.innerHTML = "";
    return;
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <p>₹${item.price}</p>
      </div>

      <div class="qty">
        <button onclick="updateQty(${item.id}, -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="updateQty(${item.id}, 1)">+</button>
      </div>
    `;

    container.appendChild(row);
  });

  totalBox.innerHTML = `
    <p>Subtotal ₹${cartTotal()}</p>
    <p>Delivery Free</p>
    <strong>Total ₹${cartTotal()}</strong>
  `;
}
