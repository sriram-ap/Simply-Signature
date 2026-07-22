/**
 * Site-wide constants. Weekly-changing values live in /config/menu.json —
 * this file only holds facts that rarely change.
 */
export const site = {
  name: "Simply Signature",
  tagline: "Premium Vegetarian • From Gayathri's Kitchen",
  description:
    "Simply Signature is a premium vegetarian home kitchen by Gayathri Sriram, serving small-batch, homestyle weekend meals to the Jal Vayu Towers community. 100% vegetarian, freshly cooked, made with love.",
  url: "https://simplysignature.in",
  established: "12 June 2026",
  establishedISO: "2026-06-12",
  founder: "Gayathri Sriram",
  location: {
    community: "Jal Vayu Towers (JVT)",
    unit: "JVT — 343",
    // TODO(admin): fill in city/region/postal code for richer local SEO.
    locality: "",
    region: "",
    country: "IN",
  },
  contact: {
    whatsappPrimary: { number: "919765844659", display: "+91 97658 44659", name: "Gayathri Sriram" },
    whatsappSecondary: { number: "917875153344", display: "+91 78751 53344" },
  },
  serviceDays: [
    { day: "Friday", meals: "Dinner" },
    { day: "Saturday", meals: "Lunch / Dinner" },
    { day: "Sunday", meals: "Lunch" },
  ],
  values: [
    "Authentic taste, the way it's meant to be",
    "Only the best, quality ingredients",
    "Home-cooked warmth, restaurant relish",
    "Rich in flavour, yet tummy-friendly",
  ],
} as const;

export function waLink(number: string, text?: string): string {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
