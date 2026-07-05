// Cart functions
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = count;
}

function addToCart(id, name, price, stock) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  const currentQty = existing ? existing.quantity : 0;

  if (currentQty >= stock) {
    alert('Sorry! Only ' + stock + ' items available in stock.');
    return;
  }

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1, stock });
  }

  saveCart(cart);
  alert('Added to cart!');
}

// Auth functions
function getToken() {
  return localStorage.getItem('token');
}

function getUser() {
  return JSON.parse(localStorage.getItem('user')) || null;
}

function isLoggedIn() {
  return !!getToken();
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('cart');
  window.location.href = 'login.html';
}

// Alert function
function showAlert(message, type) {
  const alert = document.getElementById('alert');
  if (alert) {
    alert.textContent = message;
    alert.className = 'alert alert-' + type;
    alert.style.display = 'block';
    setTimeout(function() { alert.style.display = 'none'; }, 3000);
  }
}

// Update navbar based on login status
function updateNavbar() {
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const user = getUser();

  if (isLoggedIn()) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (logoutBtn) {
      logoutBtn.style.display = 'block';
      logoutBtn.textContent = 'Logout (' + (user ? user.name : '') + ')';
      logoutBtn.onclick = logout;
    }
  }
}

// Run on every page
document.addEventListener('DOMContentLoaded', function() {
  updateNavbar();
  updateCartCount();
});