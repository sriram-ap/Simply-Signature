/* ═══════════════════════════════════════════════════════
   Simply Signature — script.js
   Quantity · Live billing · WhatsApp order · Validation
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── Config ─────────────────────────────────────────── */
const CONFIG = {
  PRICE_PER_PORTION: 300,
  MIN_QTY: 1,
  MAX_QTY: 8,
  NUMBERS: [
    { wa: '919765844659', label: '+91 97658 44659' },
    { wa: '917875153344', label: '+91 78751 53344' },
  ],
  MENU: {
    tag:      'THIS SATURDAY · CHINESE COMBO',
    name:     'Veg Fried Rice + Pepper Paneer',
    desc:     'Two separate portions · Home-style & fresh',
    deadline: 'Order before 20 June 2026',
    menuLine: 'Saturday menu: Veg Fried Rice + Pepper Paneer combo',
  },
};

/* ── DOM refs ────────────────────────────────────────── */
const qtyInput      = document.getElementById('qty-display');
const qtyDecrease   = document.getElementById('qty-decrease');
const qtyIncrease   = document.getElementById('qty-increase');
const totalValue    = document.getElementById('total-value');
const flatInput     = document.getElementById('flat-input');
const waBtn1        = document.getElementById('wa-btn-1');
const waBtn2        = document.getElementById('wa-btn-2');
const dishTag       = document.getElementById('dish-tag');
const dishName      = document.getElementById('dish-name');
const dishDesc      = document.getElementById('dish-desc');
const deadlineText  = document.getElementById('deadline-text');

/* ── Init menu from config ───────────────────────────── */
function initMenu() {
  const m = CONFIG.MENU;
  if (dishTag)      dishTag.textContent      = m.tag;
  if (dishName)     dishName.textContent     = m.name;
  if (dishDesc)     dishDesc.textContent     = m.desc;
  if (deadlineText) deadlineText.textContent = m.deadline;
}

/* ── Quantity helpers ────────────────────────────────── */
function getQty() {
  const v = parseInt(qtyInput.value, 10);
  if (isNaN(v) || v < CONFIG.MIN_QTY) return CONFIG.MIN_QTY;
  if (v > CONFIG.MAX_QTY)             return CONFIG.MAX_QTY;
  return v;
}

function setQty(val) {
  const clamped = Math.min(CONFIG.MAX_QTY, Math.max(CONFIG.MIN_QTY, val));
  qtyInput.value = clamped;
  updateButtonStates(clamped);
  updateTotal(clamped);
}

function updateButtonStates(qty) {
  qtyDecrease.disabled = qty <= CONFIG.MIN_QTY;
  qtyIncrease.disabled = qty >= CONFIG.MAX_QTY;
}

/* ── Live billing ────────────────────────────────────── */
function updateTotal(qty) {
  const q     = qty !== undefined ? qty : getQty();
  const total = q * CONFIG.PRICE_PER_PORTION;
  totalValue.textContent = total.toLocaleString('en-IN');
}

function getGrandTotal() {
  return getQty() * CONFIG.PRICE_PER_PORTION;
}

/* ── Validation ──────────────────────────────────────── */
function getOrCreateError(input) {
  const field = input.closest('.order__field');
  if (!field) return null;
  let err = field.querySelector('.order__error-msg');
  if (!err) {
    err = document.createElement('span');
    err.className = 'order__error-msg';
    err.setAttribute('role', 'alert');
    const hint = field.querySelector('.order__hint');
    if (hint) hint.after(err);
    else field.appendChild(err);
  }
  return err;
}

function showError(input, message) {
  input.classList.add('order__input--error');
  const err = getOrCreateError(input);
  if (err) {
    err.textContent = message;
    err.classList.add('order__error-msg--visible');
  }
}

function clearError(input) {
  input.classList.remove('order__input--error');
  const err = getOrCreateError(input);
  if (err) {
    err.textContent = '';
    err.classList.remove('order__error-msg--visible');
  }
}

function validateFlat() {
  const val = flatInput.value.trim();
  if (!val) {
    showError(flatInput, 'Please enter your flat number and name.');
    flatInput.focus();
    return false;
  }
  if (val.length < 3) {
    showError(flatInput, 'Please enter a valid flat number and name.');
    flatInput.focus();
    return false;
  }
  clearError(flatInput);
  return true;
}

/* ── WhatsApp message builder ────────────────────────── */
function buildMessage() {
  const qty    = getQty();
  const total  = getGrandTotal();
  const flat   = flatInput.value.trim();
  const plural = qty > 1 ? 's' : '';

  return [
    `Hi! I'd like to pre-order from Simply Signature 🍽️`,
    `${CONFIG.MENU.menuLine}`,
    `Quantity: ${qty} portion${plural}`,
    `Total: ₹${total.toLocaleString('en-IN')}`,
    `Flat / Name: ${flat}`,
  ].join('\n');
}

function openWhatsApp(waNumber) {
  if (!validateFlat()) return;
  const msg = buildMessage();
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── Event listeners ─────────────────────────────────── */
qtyDecrease.addEventListener('click', () => {
  setQty(getQty() - 1);
});

qtyIncrease.addEventListener('click', () => {
  setQty(getQty() + 1);
});

qtyInput.addEventListener('input', () => {
  const v = parseInt(qtyInput.value, 10);
  if (!isNaN(v)) setQty(v);
});

qtyInput.addEventListener('blur', () => {
  setQty(getQty());
});

qtyInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp')   { e.preventDefault(); setQty(getQty() + 1); }
  if (e.key === 'ArrowDown') { e.preventDefault(); setQty(getQty() - 1); }
});

flatInput.addEventListener('input', () => {
  if (flatInput.value.trim().length > 0) clearError(flatInput);
});

flatInput.addEventListener('blur', () => {
  if (flatInput.value.trim().length > 0) validateFlat();
});

waBtn1.addEventListener('click', () => {
  openWhatsApp(CONFIG.NUMBERS[0].wa);
});

waBtn2.addEventListener('click', () => {
  openWhatsApp(CONFIG.NUMBERS[1].wa);
});

/* ── Boot ────────────────────────────────────────────── */
initMenu();
setQty(CONFIG.MIN_QTY);
