# Simply Signature — Pre-Order Page

A lightweight, mobile-first pre-order page for **Simply Signature**, a premium vegetarian weekend food service by Gayathri's Kitchen, JVT-343, Jal Vayu Towers.

Customers select a quantity, see the live total update, enter their flat number and name, then tap a WhatsApp button to send a fully pre-filled order message.

---

## Project Structure

```
simply-signature/
├── index.html    # Markup only — all IDs and classes are stable hooks for JS and CSS
├── style.css     # All styles — tokens, layout, components, responsive
├── script.js     # All behaviour — quantity, billing, validation, WhatsApp
├── logo.png      # Round restaurant logo (replace with your own)
└── README.md     # This file
```

No build step. No dependencies. No frameworks. Open `index.html` directly in a browser.

---

## How to Run

```bash
# Option 1 — open directly
open index.html

# Option 2 — local dev server (avoids any file:// quirks)
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

---

## How to Customise Menu Items

All menu content lives in the `CONFIG.MENU` object at the top of `script.js`. You only need to edit this block each week — nothing else.

```js
// script.js — top of file
const CONFIG = {
  PRICE_PER_PORTION: 300,          // ← price per portion in INR
  MIN_QTY: 1,
  MAX_QTY: 8,                      // ← max portions available
  NUMBERS: [ ... ],
  MENU: {
    tag:      'THIS SATURDAY · SOUTH INDIAN SPECIAL',   // banner eyebrow
    name:     'Puliyogare + Avial',                     // dish headline
    desc:     'Iyengar style tamarind rice · Kerala vegetable curry',
    deadline: 'Order before 27 June 2026',              // deadline bar
    menuLine: 'Saturday menu: Iyengar Style Puliyogare + Avial', // WA message line
  },
};
```

Change all five `MENU` fields and the `PRICE_PER_PORTION`, save, and reload. The HTML, the banner, the deadline bar, and the WhatsApp message all update automatically.

---

## How to Change the WhatsApp Numbers

Edit the `NUMBERS` array in `CONFIG` inside `script.js`:

```js
NUMBERS: [
  { wa: '919765844659', label: '+91 97658 44659' },  // ← Button 1
  { wa: '917875153344', label: '+91 78751 53344' },  // ← Button 2
],
```

- `wa` — the full number with country code, no `+`, no spaces (e.g. `919876543210`)
- `label` — what is displayed on the button face

If you only want one number, remove the second object and delete `#wa-btn-2` from `index.html` and the `waBtn2` listener block from `script.js`.

---

## How to Deploy on GitHub Pages

### Step 1 — Create a repository

```bash
git init
git add index.html style.css script.js logo.png README.md
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/simply-signature.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings → Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose `main` branch, `/ (root)` folder.
5. Click **Save**.

GitHub will provide a URL like:
```
https://YOUR_USERNAME.github.io/simply-signature/
```

### Step 3 — Share the link

Paste the URL in your WhatsApp group caption alongside the weekly poster image. Tapping the link opens the order page in the customer's browser, from where tapping either WhatsApp button opens a chat with the order pre-filled.

### Updating the menu each week

```bash
# Edit script.js → CONFIG.MENU fields
git add script.js
git commit -m "Week of 27 June — Puliyogare + Avial"
git push
```

GitHub Pages redeploys in under a minute.

---

## Customisation Reference

| What to change | Where |
|---|---|
| Dish name, tag, description | `CONFIG.MENU` in `script.js` |
| Price per portion | `CONFIG.PRICE_PER_PORTION` in `script.js` |
| Max portions | `CONFIG.MAX_QTY` in `script.js` |
| WhatsApp numbers | `CONFIG.NUMBERS` in `script.js` |
| Deadline text | `CONFIG.MENU.deadline` in `script.js` |
| Colours / fonts | CSS custom properties in `style.css` `:root` block |
| Logo image | Replace `logo.png` (keep the same filename) |
| Brand name | `index.html` — `.brand__simply` and `.brand__signature` spans |
| Footer address | `index.html` — `.card__footer` paragraph |
