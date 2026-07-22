import rawMenu from "../../config/menu.json";
import rawGallery from "../../config/gallery.json";
import rawReviews from "../../config/reviews.json";

/** One orderable line item on the weekly order page. */
export interface MenuItem {
  /** Stable id, used as React key and in the WhatsApp message. */
  id: string;
  name: string;
  /** Short supporting line shown under the name. */
  detail: string;
  /** Price in whole rupees. */
  price: number;
  /** "main" items are featured first; "addon" items are listed under Add-ons. */
  kind: "main" | "addon";
  /** Optional per-order quantity cap (e.g. "max 1 per order"). */
  maxQty?: number;
  /** Optional thumbnail under /assets/dishes/, shown on the order page. */
  image?: string;
}

/** One combo tier bundling several à la carte items at a set price. */
export interface ComboTier {
  id: string;
  name: string;
  price: number;
  /** e.g. "Serves 2". */
  serves: string;
  /** What's included / portion sizes for this tier. */
  detail: string;
  /** Highlight this tier as the recommended choice. */
  recommended: boolean;
  /** Amount saved vs. buying items separately, or null if not applicable. */
  savings: number | null;
}

/** Combo bundles for the week, with a shared inclusions note. */
export interface ComboMenu {
  /** Shared description of what every tier includes. */
  note: string;
  tiers: ComboTier[];
}

/** The full weekly configuration — edited by the admin in config/menu.json. */
export interface WeeklyMenu {
  /** Master switch: false shows a graceful "orders closed" state. */
  orderingOpen: boolean;
  service: {
    day: string;
    meal: string;
    /** ISO date of delivery, e.g. "2026-07-18". */
    deliveryDate: string;
    deliveryWindow: string;
    orderBy: string;
  };
  special: {
    name: string;
    shortName: string;
    /** Optional promotional line shown on the specials and order pages. */
    tagline?: string;
    description: string;
    /** Public path under /assets/posters/, or "" to hide the poster. */
    poster: string;
    posterAlt: string;
    posterWidth: number;
    posterHeight: number;
  };
  portionsNote: string;
  items: MenuItem[];
  /** Optional combo bundles for the week (e.g. multi-item meal tiers). */
  combos?: ComboMenu;
  whatsapp: {
    number: string;
    display: string;
    contactName: string;
  };
  community: {
    name: string;
    flatLabel: string;
  };
  /** Announcement text the admin (or neighbours) can copy into MyGate. */
  mygateMessage: string;
}

export interface GalleryPoster {
  src: string;
  alt: string;
  caption: string;
  date: string;
  width: number;
  height: number;
}

export interface Review {
  name: string;
  flat: string;
  date: string;
  rating: number;
  text: string;
}

export const weeklyMenu = rawMenu as WeeklyMenu;
export const galleryPosters = rawGallery as GalleryPoster[];
export const reviews = rawReviews as Review[];

export function deliveryDateLabel(menu: WeeklyMenu): string {
  const d = new Date(`${menu.service.deliveryDate}T00:00:00+05:30`);
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  });
}
