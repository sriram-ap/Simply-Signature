/* ═══════════════════════════════════════════════════════
   Simply Signature — script.js
   Multi-option billing · Add-ons · Grand Total
   Delivery/Takeaway · Packing notes · WhatsApp order
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── Config ─────────────────────────────────────────── */
const CONFIG = {
  NUMBERS: [
    { wa: '919765844659', label: '+91 97658 44659' },
    { wa: '917875153344', label: '+91 78751 53344' },
  ],
  OPTIONS: [
    {
      id:    'opt1',
      label: 'Option 1',
      price: 350,
      desc:  '400ml Navaratna Kurma + 200ml Capsicum Subzi + 3 Parathas',
    },
    {
      id:    'opt2',
      label: 'Option 2',
      price: 300,
      desc:  '400ml Navaratna Kurma + 200ml Capsicum Subzi',
    },
  ],
  ADDONS: [
    { id: 'kurma',   label: 'Navaratna Kurma 400ml', price: 200, max: 8  },
    { id: 'subzi',   label: 'Capsicum Subzi 200ml',  price: 100, max: 8  },
    { id: 'paratha', label: 'Paratha',               price: 20,  max: 20 },
  ],
  MAX_OPTION_QTY: 8,
  MENU: {
    tag:      'FRIDAY DINNER \u00b7 03 JULY 2026',
    name:     'Navaratna Kurma & Capsicum Subzi',
    desc:     'Home-style & fresh \u00b7 Limited portions',
    deadline: 'Order before 03 July 2026',
    event:    'Friday dinner (03 July 2026)',
  },
};

/* ── DOM refs ────────────────────────────────────────── */
const dishTag      = document.getElementById('dish-tag');
const dishName     = document.getElementById('dish-name');
const dishDesc     = document.getElementById('dish-desc');
const deadlineText = document.getElementById('deadline-text');
const totalValue   = document.getElementById('total-value');
const flatInput    = document.getElementById('flat-input');
const flatError    = document.getElementById('flat-error');
const packingInput = document.getElementById('packing-notes');
const orderSummary = document.getElementById('order-summary');
const waBtn1       = document.getElementById('wa-btn-1');
const waBtn2       = document.getElementById('wa-btn-2');
const waBtn1Label  = document.getElementById('wa-btn-1-label');
const waBtn2Label  = document.getElementById('wa-btn-2-label');

/* ── Init ────────────────────────────────────────────── */
function init() {
  // Menu text
  const m = CONFIG.MENU;
  if (dishTag)      dishTag.textContent      = m.tag;
  if (dishName)     dishName.textContent     = m.name;
  if (dishDesc)     dishDesc.textContent     = m.desc;
  if (deadlineText) deadlineText.textContent = m.deadline;

  // Button labels from config (single source of truth)
  if (waBtn1Label) waBtn1Label.textContent = CONFIG.NUMBERS[0].label;
  if (waBtn2Label) waBtn2Label.textContent = CONFIG.NUMBERS[1].label;

  // Aria labels
  if (waBtn1) waBtn1.setAttribute('aria-label', `Order via WhatsApp on ${CONFIG.NUMBERS[0].label}`);
  if (waBtn2) waBtn2.setAttribute('aria-label', `Order via WhatsApp on ${CONFIG.NUMBERS[1].label}`);

  // Wire quantity controls
  CONFIG.OPTIONS.forEach((opt) => wireQtyControl(opt.id, 0, CONFIG.MAX_OPTION_QTY));
  CONFIG.ADDONS.forEach((addon) => wireQtyControl(addon.id, 0, addon.max));

  updateTotal();
}

/* ── Quantity control wiring ─────────────────────────── */
function wireQtyControl(id, min, max) {
  const input   = document.getElementById(`qty-${id}`);
  const decBtn  = document.getElementById(`qty-${id}-dec`);
  const incBtn  = document.getElementById(`qty-${id}-inc`);
  if (!input || !decBtn || !incBtn) return;

  function syncState() {
    const v = readQty(input, min, max);
    input.value = v;
    decBtn.disabled = v <= min;
    incBtn.disabled = v >= max;
    updateTotal();
  }

  decBtn.addEventListener('click', () => {
    input.value = Math.max(min, readQty(input, min, max) - 1);
    syncState();
  });

  incBtn.addEventListener('click', () => {
    input.value = Math.min(max, readQty(input, min, max) + 1);
    syncState();
  });

  input.addEventListener('input', syncState);
  input.addEventListener('blur', syncState);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp')   { e.preventDefault(); input.value = Math.min(max, readQty(input, min, max) + 1); syncState(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); input.value = Math.max(min, readQty(input, min, max) - 1); syncState(); }
  });

  syncState();
}

function readQty(input, min, max) {
  const v = parseInt(input.value, 10);
  if (isNaN(v) || v < min) return min;
  if (v > max)             return max;
  return v;
}

function getQtyById(id) {
  const el = document.getElementById(`qty-${id}`);
  if (!el) return 0;
  return readQty(el, 0, Number(el.max) || 99);
}

/* ── Grand Total calculation ─────────────────────────── */
function calcTotal() {
  let total = 0;
  CONFIG.OPTIONS.forEach((opt) => {
    total += getQtyById(opt.id) * opt.price;
  });
  CONFIG.ADDONS.forEach((addon) => {
    total += getQtyById(addon.id) * addon.price;
  });
  return total;
}

function updateTotal() {
  const total = calcTotal();
  if (totalValue) {
    totalValue.textContent = total.toLocaleString('en-IN');
  }
  updateSummary();
}

/* ── Order summary ───────────────────────────────────── */
function updateSummary() {
  if (!orderSummary) return;
  const lines = [];

  CONFIG.OPTIONS.forEach((opt) => {
    const qty = getQtyById(opt.id);
    if (qty > 0) {
      lines.push(`${opt.label} ×${qty} — ₹${(qty * opt.price).toLocaleString('en-IN')}`);
    }
  });

  CONFIG.ADDONS.forEach((addon) => {
    const qty = getQtyById(addon.id);
    if (qty > 0) {
      lines.push(`${addon.label} ×${qty} — ₹${(qty * addon.price).toLocaleString('en-IN')}`);
    }
  });

  orderSummary.innerHTML = lines.length
    ? lines.map((l) => `<span>${l}</span>`).join('<br>')
    : '';
}

/* ── Validation ──────────────────────────────────────── */
function validateOrder() {
  let valid = true;

  // At least one item must be selected
  const total = calcTotal();
  if (total === 0) {
    // Highlight the first fieldset visually — no field to focus, so announce via summary
    if (orderSummary) {
      orderSummary.innerHTML = '<span style="color:var(--error)">Please select at least one option or add-on before ordering.</span>';
    }
    valid = false;
  }

  // Flat number must be present
  const flatVal = flatInput ? flatInput.value.trim() : '';
  if (!flatVal || flatVal.length < 3) {
    showError(flatInput, flatError, 'Please enter your flat number and name.');
    if (flatInput) flatInput.focus();
    valid = false;
  } else {
    clearError(flatInput, flatError);
  }

  return valid;
}

function showError(input, errorEl, message) {
  if (input)   input.classList.add('order__input--error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('order__error-msg--visible');
    errorEl.style.display = 'block';
  }
}

function clearError(input, errorEl) {
  if (input)   input.classList.remove('order__input--error');
  if (errorEl) {
    errorEl.textContent = '';
    errorEl.classList.remove('order__error-msg--visible');
    errorEl.style.display = 'none';
  }
}

/* ── WhatsApp message builder ────────────────────────── */
function getFulfilment() {
  const checked = document.querySelector('input[name="fulfilment"]:checked');
  return checked ? checked.value : 'delivery';
}

function buildMessage() {
  const lines = [
    `Hi! I'd like to pre-order from Simply Signature 🍽️`,
    `${CONFIG.MENU.event}`,
    '',
  ];

  CONFIG.OPTIONS.forEach((opt) => {
    const qty = getQtyById(opt.id);
    if (qty > 0) {
      lines.push(`${opt.label} (${opt.desc}): ${qty} set${qty > 1 ? 's' : ''} — ₹${(qty * opt.price).toLocaleString('en-IN')}`);
    }
  });

  const addonLines = [];
  CONFIG.ADDONS.forEach((addon) => {
    const qty = getQtyById(addon.id);
    if (qty > 0) {
      addonLines.push(`  ${addon.label} ×${qty} — ₹${(qty * addon.price).toLocaleString('en-IN')}`);
    }
  });
  if (addonLines.length) {
    lines.push('Add-ons:');
    lines.push(...addonLines);
  }

  lines.push('');
  lines.push(`Grand Total: ₹${calcTotal().toLocaleString('en-IN')}`);
  lines.push(`Fulfilment: ${getFulfilment() === 'delivery' ? '🛵 Delivery' : '🏠 Takeaway'}`);
  lines.push(`Flat / Name: ${flatInput ? flatInput.value.trim() : ''}`);

  const notes = packingInput ? packingInput.value.trim() : '';
  if (notes) lines.push(`Packing notes: ${notes}`);

  return lines.join('\n');
}

function openWhatsApp(waNumber) {
  if (!validateOrder()) return;
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(buildMessage())}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* ── Event listeners ─────────────────────────────────── */
if (flatInput) {
  flatInput.addEventListener('input', () => {
    if (flatInput.value.trim().length > 0) clearError(flatInput, flatError);
  });
  flatInput.addEventListener('blur', () => {
    const val = flatInput.value.trim();
    if (val.length > 0 && val.length < 3) {
      showError(flatInput, flatError, 'Please enter a valid flat number and name.');
    } else if (val.length >= 3) {
      clearError(flatInput, flatError);
    }
  });
}

if (waBtn1) waBtn1.addEventListener('click', () => openWhatsApp(CONFIG.NUMBERS[0].wa));
if (waBtn2) waBtn2.addEventListener('click', () => openWhatsApp(CONFIG.NUMBERS[1].wa));

/* ── Boot ────────────────────────────────────────────── */
init();
