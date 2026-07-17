/**
 * The Simply Signature dish library — the shortlisted menu the weekly special
 * is chosen from. Add a photo by dropping a file into /public/assets/dishes/
 * (e.g. bisi-bele-bath.jpg, 1200×900 recommended) and setting `image` below.
 * Use only photos you own or royalty-free photos with a clear licence.
 */

export type SpiceLevel = "Mild" | "Mild–Medium" | "Medium" | "Medium–Hot" | "Hot";

export interface Dish {
  slug: string;
  name: string;
  origin: string;
  category: "Rice & One-Pot" | "Gravies & Curries" | "Dry Sautés" | "Street Classics" | "Kids' Corner";
  description: string;
  ingredients: string[];
  technique: string;
  spiceLevel: SpiceLevel;
  bestServedWith: string;
  whyHomely: string;
  whyHealthy: string;
  whyEasyOnDigestion: string;
  /** Public path under /assets/dishes/, or null to show the branded placeholder. */
  image: string | null;
}

export const dishes: Dish[] = [
  {
    slug: "iyengar-puliyodarai-avial",
    name: "Iyengar Style Puliyodarai with Avial",
    origin: "Tamil Nadu (Iyengar temple tradition) & Kerala",
    category: "Rice & One-Pot",
    description:
      "Temple-style tamarind rice tossed in a slow-roasted pulikachal of tamarind, jaggery and spices, served with Kerala's avial — vegetables simmered in a fresh coconut-yoghurt masala with curry leaves and cold-pressed coconut oil.",
    ingredients: [
      "Aged short-grain rice",
      "Tamarind & jaggery",
      "Sesame oil, mustard, chana & urad dal",
      "Groundnuts, dried red chillies, curry leaves",
      "Seasonal vegetables (drumstick, carrot, beans, raw banana)",
      "Fresh coconut, cumin, homemade yoghurt",
    ],
    technique:
      "The pulikachal paste is roasted low and slow until the tamarind loses its raw edge, then folded into just-cooled rice so every grain stays separate. Avial vegetables are cooked only until tender-crisp before the coconut masala goes in off the heat.",
    spiceLevel: "Medium",
    bestServedWith: "Appalam or fried papad, and a glass of neer mor (spiced buttermilk).",
    whyHomely:
      "This is festival-and-temple food made the unhurried way grandmothers make it — no shortcuts, no ready pastes.",
    whyHealthy:
      "Tamarind and sesame oil bring antioxidants and good fats; avial packs six or more vegetables into a single serving with no cream.",
    whyEasyOnDigestion:
      "Tamarind and buttermilk-based dishes are naturally cooling and probiotic-friendly; the spice sits in flavour, not in heat.",
    image: null,
  },
  {
    slug: "navaratna-kurma",
    name: "Navaratna Kurma (Kashmiri Style)",
    origin: "Mughlai-Kashmiri repertoire, North India",
    category: "Gravies & Curries",
    description:
      "The 'nine-treasure' kurma — paneer, garden vegetables, cashews and raisins in a silken, saffron-kissed gravy that is rich in taste yet gentle in spice. Our version keeps the royalty and loses the heaviness.",
    ingredients: [
      "Paneer & nine vegetables and treasures (carrot, beans, peas, potato, cauliflower, cashew, raisin…)",
      "Cashew-melon seed paste",
      "Milk & a touch of fresh cream",
      "Saffron, cardamom, white pepper",
      "Ghee, bay leaf, mild garam masala",
    ],
    technique:
      "Vegetables are steamed separately to keep their colour, while the cashew gravy is simmered gently so it thickens without splitting. Saffron is bloomed in warm milk and added right at the end.",
    spiceLevel: "Mild",
    bestServedWith: "Soft parathas, jeera rice or mild pulao.",
    whyHomely:
      "It's the celebratory dish of home feasts — creamy without being restaurant-heavy, sweet-savoury the way families actually like it.",
    whyHealthy:
      "A full rainbow of vegetables plus protein from paneer and cashews; sweetness comes from fruit and nuts, not sugar syrup.",
    whyEasyOnDigestion:
      "White pepper and cardamom instead of chilli heat, and a milk-cashew base that is far lighter than cream-flour gravies.",
    image: null,
  },
  {
    slug: "capsicum-shengdana-subzi",
    name: "Maharashtrian Capsicum Shengdana Subzi",
    origin: "Maharashtra, India",
    category: "Dry Sautés",
    description:
      "A rustic Maharashtrian classic: crisp capsicum tossed with coarsely crushed roasted groundnuts (shengdana), goda-style spices and a hint of jaggery — nutty, smoky and quietly addictive.",
    ingredients: [
      "Green capsicum",
      "Roasted groundnut (shengdana) crush",
      "Mustard, cumin, hing, turmeric",
      "Goda masala, jaggery",
      "Fresh coriander",
    ],
    technique:
      "Capsicum is sautéed on a hot, wide pan so it blisters rather than stews; the groundnut crush goes in at the end to stay crunchy and coat every piece.",
    spiceLevel: "Medium",
    bestServedWith: "Phulka, chapati or as the crunchy sidekick to varan-bhaat (dal-rice).",
    whyHomely:
      "This is everyday Maharashtrian ghar ka khana — the dish that appears in lunch dabbas across Pune and the Desh region.",
    whyHealthy:
      "Groundnuts add plant protein and vitamin E; capsicum brings vitamin C — and the dish needs very little oil.",
    whyEasyOnDigestion:
      "A dry sauté with hing (asafoetida) and cumin, both traditional digestive aids; no heavy gravy to sit in the stomach.",
    image: null,
  },
  {
    slug: "pepper-gobi-dry",
    name: "Pepper Gobi Dry",
    origin: "South Indian pepper-fry tradition",
    category: "Dry Sautés",
    description:
      "Cauliflower florets roasted until golden, then tossed in a glossy, dark crush of freshly cracked black pepper, curry leaves and onions. Bold, warming, and completely deep-fry-free.",
    ingredients: [
      "Cauliflower florets",
      "Freshly cracked black pepper",
      "Onion, ginger, garlic",
      "Curry leaves, fennel",
      "Cold-pressed oil",
    ],
    technique:
      "Florets are blanched, patted dry and pan-roasted for colour instead of batter-frying; the pepper masala is bloomed in oil and tossed through on high heat for that wok-kissed finish.",
    spiceLevel: "Medium–Hot",
    bestServedWith: "Rasam rice, curd rice, or as a starter on its own.",
    whyHomely:
      "Pepper fries are the pride of South Indian home kitchens — big flavour from the spice box, not from a fryer.",
    whyHealthy:
      "Cauliflower is fibre-rich and low-calorie; pan-roasting uses a fraction of the oil of restaurant 'gobi' dishes.",
    whyEasyOnDigestion:
      "Black pepper (piperine) is a classic digestive stimulant in Indian households — warmth without chilli burn.",
    image: null,
  },
  {
    slug: "pepper-paneer-dry",
    name: "Pepper Paneer Dry",
    origin: "South Indian pepper-fry tradition",
    category: "Dry Sautés",
    description:
      "Cubes of soft paneer seared and tossed with crushed black pepper, capsicum and onion petals — a clean, protein-forward dish with restaurant swagger and home-kitchen honesty.",
    ingredients: [
      "Fresh paneer",
      "Black pepper, fennel, cumin",
      "Capsicum & onion petals",
      "Curry leaves, ginger-garlic",
    ],
    technique:
      "Paneer is seared quickly so it forms a light crust while staying pillowy inside, then folded into the pepper masala off the flame to keep it tender.",
    spiceLevel: "Medium–Hot",
    bestServedWith: "Veg fried rice, phulkas, or as a party starter.",
    whyHomely:
      "No colourings, no cornflour coating — just paneer, pepper and patience, the way it's made for family celebrations.",
    whyHealthy:
      "Paneer delivers protein and calcium; the dish is sautéed, never deep-fried, and carries no cream or sugar.",
    whyEasyOnDigestion:
      "Fennel and pepper aid digestion, and skipping the batter coating means none of the usual fried heaviness.",
    image: null,
  },
  {
    slug: "pepper-baby-corn-dry",
    name: "Pepper Baby Corn Dry",
    origin: "South Indian pepper-fry tradition",
    category: "Dry Sautés",
    description:
      "Sweet, crunchy baby corn in a fiery-fragrant black pepper toss with curry leaves — the vegetarian answer to pepper chicken, minus the grease.",
    ingredients: [
      "Baby corn",
      "Crushed black pepper & fennel",
      "Onion, capsicum",
      "Curry leaves, ginger",
    ],
    technique:
      "Baby corn is par-boiled and then charred lightly on a hot pan; the pepper-fennel crush is toasted separately and tossed through with curry leaves at the very end.",
    spiceLevel: "Medium–Hot",
    bestServedWith: "Fried rice, noodles, or curd rice for a hot-cool contrast.",
    whyHomely:
      "A weeknight favourite that turns a simple vegetable into the star of the table with nothing but the home spice box.",
    whyHealthy:
      "Baby corn is low-calorie and fibre-rich; light pan-tossing keeps oil to a minimum.",
    whyEasyOnDigestion:
      "Gentle vegetable base with warming pepper and fennel — flavourful without sitting heavy.",
    image: null,
  },
  {
    slug: "usal-pav",
    name: "Usal Pav (Maharashtrian Style)",
    origin: "Maharashtra, India",
    category: "Street Classics",
    description:
      "Sprouted beans simmered in a robust, homemade goda-masala gravy (kat), finished with onion, coriander and lemon, served with soft pav — Maharashtra's beloved street classic, made the home way.",
    ingredients: [
      "Sprouted matki (moth beans) / mixed sprouts",
      "Onion-tomato-goda masala base",
      "Homemade kat (spiced gravy)",
      "Pav, lemon, coriander, farsan (optional)",
    ],
    technique:
      "Beans are sprouted in-house over two days, then simmered — not pressure-blasted — so they stay whole; the kat is built on freshly ground dry coconut and goda masala.",
    spiceLevel: "Medium–Hot",
    bestServedWith: "Ladi pav, chopped onion, lemon wedge, and a spoon of farsan on top.",
    whyHomely:
      "Usal is Sunday-morning food in Maharashtrian homes; ours tastes of the misal houses of Pune and Kolhapur without the oil slick.",
    whyHealthy:
      "Sprouting multiplies vitamins and makes protein more available — this is one of India's great high-protein street dishes.",
    whyEasyOnDigestion:
      "Sprouted, well-simmered beans are far gentler than un-sprouted pulses, and we keep the tarri (oil layer) restrained.",
    image: null,
  },
  {
    slug: "maharashtrian-misal",
    name: "Maharashtrian Misal",
    origin: "Maharashtra (Kolhapur & Pune traditions)",
    category: "Street Classics",
    description:
      "The crowned king of Maharashtrian street food: sprouted moth beans simmered in a robust, freshly ground kat — a spiced coconut-chilli gravy — layered with crunchy farsan, onion, coriander and lemon, and served with two soft pav. All the drama of a misal house, none of the oil slick.",
    ingredients: [
      "Sprouted matki (moth beans)",
      "Kat: dry coconut, byadgi chilli, goda masala",
      "Farsan (crunchy topping)",
      "Onion, coriander, lemon",
      "2 soft pav",
    ],
    technique:
      "Beans are sprouted in-house and simmered whole so they hold their bite; the kat is built on a masala roasted and ground the same morning. Misal is assembled in layers only at serving time, so the farsan lands crunchy, never soggy.",
    spiceLevel: "Medium–Hot",
    bestServedWith: "Soft pav, extra kat on the side, and a glass of buttermilk to cool down.",
    whyHomely:
      "Misal is Maharashtra's Sunday-morning ritual — ours tastes of the famous misal houses of Kolhapur and Pune, made in a home kitchen for neighbours.",
    whyHealthy:
      "Sprouted beans are one of India's great plant-protein sources, with vitamins multiplied by sprouting; the toppings add texture, not grease.",
    whyEasyOnDigestion:
      "Well-simmered sprouts are far gentler than un-sprouted pulses, and the tarri (oil layer) is kept deliberately restrained.",
    image: null,
  },
  {
    slug: "paneer-butter-masala",
    name: "Paneer Butter Masala",
    origin: "Punjab / Delhi, North India",
    category: "Gravies & Curries",
    description:
      "India's most-loved curry: soft paneer in a velvety tomato-cashew makhani gravy with a whisper of kasuri methi. Ours is balanced — buttery, never greasy; gently sweet, never cloying.",
    ingredients: [
      "Fresh paneer",
      "Ripe tomatoes, cashews",
      "Butter & a touch of cream",
      "Kashmiri chilli (colour, not heat)",
      "Kasuri methi, cardamom",
    ],
    technique:
      "Tomatoes and cashews are simmered and blended silky-smooth, then strained; Kashmiri chilli gives the signature colour while the heat stays gentle. Paneer is added off the boil so it stays soft.",
    spiceLevel: "Mild",
    bestServedWith: "Parathas, naan, jeera rice — or licked straight off the spoon.",
    whyHomely:
      "Made from whole tomatoes and real cashews, not tinned puree and cream powder — the way it tastes when a family makes it for guests.",
    whyHealthy:
      "Protein-rich paneer, a lycopene-loaded tomato base, and measured butter — indulgence with a conscience.",
    whyEasyOnDigestion:
      "Mild spicing, no onion-garlic overload, and a strained gravy that is famously gentle — a favourite for kids and elders alike.",
    image: null,
  },
  {
    slug: "thecha-bhaat",
    name: "Thecha Bhaat",
    origin: "Rural Maharashtra (Khandesh & Western Maharashtra)",
    category: "Rice & One-Pot",
    description:
      "Steamed rice folded through freshly pounded green-chilli–garlic thecha with roasted groundnuts and ghee — the fiery, rustic soul of the Maharashtrian countryside in a bowl. (Also known as Thecha Rice; the authentic Marathi name is ठेचा — thecha.)",
    ingredients: [
      "Steamed rice",
      "Green chillies & garlic, flame-roasted",
      "Roasted groundnuts, sesame",
      "Ghee, cumin, coriander",
    ],
    technique:
      "The thecha is pounded — never blended — in a mortar for its signature coarse texture, with chillies and garlic charred first to mellow their bite before being folded into hot rice with ghee.",
    spiceLevel: "Hot",
    bestServedWith: "A bowl of dahi (curd), papad, and raw onion on the side to cool the fire.",
    whyHomely:
      "Thecha is farmhouse food — what Maharashtrian families make when they want maximum comfort from the fewest ingredients.",
    whyHealthy:
      "Garlic and green chilli are rich in allicin and vitamin C; groundnuts add protein; there's nothing processed in the bowl.",
    whyEasyOnDigestion:
      "Roasting tames the chillies, garlic is a traditional gut ally, and ghee-laced rice is one of the oldest comfort foods for the stomach — with curd alongside to balance the heat.",
    image: null,
  },
  {
    slug: "kids-friendly-pasta",
    name: "Kids' Friendly Pasta",
    origin: "Italian classic, Indian home-kitchen adaptation",
    category: "Kids' Corner",
    description:
      "A creamy-tomato pasta made for little ones: hidden-vegetable sauce, mild cheese, zero chilli — comfort food that parents can feel good about.",
    ingredients: [
      "Durum-wheat pasta",
      "Tomato & hidden-vegetable sauce (carrot, pumpkin, capsicum)",
      "Milk & mild cheese",
      "Oregano, basil — no chilli",
    ],
    technique:
      "Vegetables are simmered into the tomato base and blended smooth so they vanish into the sauce; pasta is cooked just past al dente, the way kids actually like it.",
    spiceLevel: "Mild",
    bestServedWith: "A glass of milk or fresh juice — it's a complete kids' meal on its own.",
    whyHomely:
      "It's the pasta a mother makes, not a packet: real vegetables, real cheese, and no flavour sachets.",
    whyHealthy:
      "Every serving hides three vegetables in the sauce; milk and cheese add calcium and protein for growing kids.",
    whyEasyOnDigestion:
      "No chilli, no cream overload, and a soft texture — gentle on small tummies.",
    image: null,
  },
  {
    slug: "bisi-bele-bath",
    name: "Bisi Bele Bath",
    origin: "Karnataka (Mysuru palace tradition)",
    category: "Rice & One-Pot",
    description:
      "Karnataka's iconic 'hot lentil rice' — rice, toor dal and vegetables slow-cooked with a freshly ground bisi bele masala of roasted spices and coconut, finished with ghee, cashews and curry leaves.",
    ingredients: [
      "Rice & toor dal",
      "Freshly ground bisi bele bath masala (byadgi chilli, coriander, cinnamon, marathi moggu, coconut)",
      "Tamarind & jaggery",
      "Seasonal vegetables, ghee, cashew, curry leaves",
    ],
    technique:
      "The masala is roasted and ground fresh for each batch — never store-bought — and the dish is simmered to the traditional soft, spoonable consistency, with a final ghee tadka of cashews and curry leaves.",
    spiceLevel: "Medium",
    bestServedWith: "Khara boondi or potato chips on top, and a cup of curd on the side.",
    whyHomely:
      "One-pot, ladled hot, topped with crunch — bisi bele bath is the very definition of Kannadiga comfort food.",
    whyHealthy:
      "Dal and rice together form a complete protein; vegetables and tamarind add fibre and minerals in one balanced bowl.",
    whyEasyOnDigestion:
      "Well-cooked dal-rice is among the gentlest meals in Indian tradition; hing and ginger in the masala do the digestive heavy-lifting.",
    image: null,
  },
  {
    slug: "andhra-veg-biryani",
    name: "Andhra Style Spicy Vegetable Biryani",
    origin: "Andhra Pradesh / Rayalaseema, South India",
    category: "Rice & One-Pot",
    description:
      "A bold, aromatic vegetable biryani in the fiery Andhra style — long-grain rice layered with a green-chilli–mint masala and dum-cooked so every grain carries the spice. For those who like it properly hot.",
    ingredients: [
      "Aged basmati rice",
      "Seasonal vegetables & paneer (optional)",
      "Green chilli, mint, coriander masala",
      "Whole spices: bay, clove, cinnamon, star anise",
      "Fried onions, ghee, curd",
    ],
    technique:
      "Vegetables are marinated in the green masala with curd, then layered with 70%-cooked rice and finished on dum — sealed, low heat — so the steam does the blending.",
    spiceLevel: "Hot",
    bestServedWith: "Mirchi ka salan and a cooling cucumber-onion raita.",
    whyHomely:
      "Dum biryani made in a home kitchen, portioned the day it's cooked — no bulk vats, no reheating.",
    whyHealthy:
      "Loaded with vegetables and fresh herbs; curd-based marinade means flavour is built without heavy oil.",
    whyEasyOnDigestion:
      "Mint, curd and raita are built-in coolants; the dum method cooks everything through gently and thoroughly.",
    image: null,
  },
];

export function getDish(slug: string): Dish | undefined {
  return dishes.find((d) => d.slug === slug);
}
