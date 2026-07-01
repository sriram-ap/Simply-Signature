# Simply Signature — Pre-Order Page

A production-ready, mobile-first pre-order page for **Simply Signature**, a premium vegetarian food service by Gayathri's Kitchen, JVT-343, Jal Vayu Towers.

Customers choose an option, add extras, see a live grand total, enter their flat number, choose delivery or takeaway, add packing notes, then tap a WhatsApp button to send a fully pre-filled order message.

---

## Project Structure

```
simply-signature/
├── index.html    # Semantic markup — stable ID hooks for JS and CSS
├── style.css     # Design tokens, layout, components, responsive, motion
├── script.js     # All behaviour — billing, validation, WhatsApp message
├── logo.png      # Round restaurant logo (replace with your own)
├── poster.png    # Weekly dish poster (used as og:image for WhatsApp link previews)
└── README.md     # This file
```

No build step. No dependencies. No frameworks. Works by opening `index.html` directly in any browser.

---

## How to Run

```bash
# Option 1 — open directly in browser
# Double-click index.html, or on macOS:
open index.html

# Option 2 — simple local server (avoids any file:// quirks on some browsers)
python3 -m http.server 8080
# then visit http://localhost:8080
```

---

## How to Customise Menu Items

Open `script.js`. Everything weekly lives in `CONFIG` at the top of the file — nothing else needs to change.

### Change the dish and date

```js
MENU: {
  tag:      'FRIDAY DINNER · 10 JULY 2026',   // banner eyebrow
  name:     'Puliyogare & Avial',              // dish headline in banner
  desc:     'Iyengar style · Kerala coconut curry', // banner subtext
  deadline: 'Order before 10 July 2026',       // deadline bar text
  event:    'Friday dinner (10 July 2026)',     // appears in WhatsApp message
},
```

### Change option prices or descriptions

```js
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
```

### Change add-on prices

```js
ADDONS: [
  { id: 'kurma',   label: 'Navaratna Kurma 400ml', price: 200, max: 8  },
  { id: 'subzi',   label: 'Capsicum Subzi 200ml',  price: 100, max: 8  },
  { id: 'paratha', label: 'Paratha',               price: 20,  max: 20 },
],
```

The grand total recalculates automatically. No changes to HTML or CSS required.

---

## How to Change the WhatsApp Numbers

Edit the `NUMBERS` array in `CONFIG`:

```js
NUMBERS: [
  { wa: '919765844659', label: '+91 97658 44659' },  // Button 1
  { wa: '917875153344', label: '+91 78751 53344' },  // Button 2
],
```

- `wa` — full number with country code, no `+`, no spaces (`91` + 10 digits)
- `label` — displayed on the button face (auto-synced from CONFIG, not hardcoded in HTML)

---

## How to Deploy on GitHub Pages

### Step 1 — Create a repository

```bash
git init
git add index.html style.css script.js logo.png poster.png README.md
git commit -m "Initial deploy"
git remote add origin https://github.com/YOUR_USERNAME/simply-signature.git
git push -u origin main
```

### Step 2 — Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select `main` branch, `/ (root)` folder.
5. Click **Save**.

Your page will be live at:
```
https://YOUR_USERNAME.github.io/simply-signature/
```

GitHub Pages redeploys automatically on every push. No CI/CD needed.

### Step 3 — Share the link

Paste the URL into your WhatsApp group alongside the weekly poster image. Tapping the link opens the order page in the customer's mobile browser. Tapping a WhatsApp button opens a chat with the full order pre-filled including options, add-ons, grand total, flat number, fulfilment type, and packing notes.

### Updating the menu each week (2-minute workflow)

```bash
# 1. Edit CONFIG.MENU (and OPTIONS/ADDONS if prices change) in script.js
# 2. Replace poster.png with this week's poster image
git add script.js poster.png
git commit -m "Week of 10 July — Puliyogare + Avial"
git push
# GitHub Pages redeploys in under 60 seconds
```

---

## Customisation Reference

| What to change | Where |
|---|---|
| Dish name, date, deadline | `CONFIG.MENU` in `script.js` |
| Option prices and descriptions | `CONFIG.OPTIONS` in `script.js` |
| Add-on prices and max quantities | `CONFIG.ADDONS` in `script.js` |
| Max portions per option | `CONFIG.MAX_OPTION_QTY` in `script.js` |
| WhatsApp numbers | `CONFIG.NUMBERS` in `script.js` |
| Paratha notice text | `#paratha-notice` in `index.html` |
| Colours and fonts | CSS custom properties in `:root` block in `style.css` |
| Logo | Replace `logo.png` (keep filename) |
| WhatsApp link preview image | Replace `poster.png` and update `og:image` in `index.html` |
| Brand name | `.brand__simply` and `.brand__signature` spans in `index.html` |
| Footer address | `.card__footer` paragraph in `index.html` |
