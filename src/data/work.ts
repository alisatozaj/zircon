export type Category = "website" | "branding";

export type Project = {
  slug: string;
  title: string;
  category: Category;
  /** Show this project on the home page (Selected work). All projects appear on /work. */
  featured?: boolean;
  summary: string;
  description: string;
  /** Optional link to the live site. */
  url?: string;
  /** Card image (4:3). Also used in the hero slider. */
  cover: string;
  hero?: string;
  /**
   * Websites: full-page screenshots shown in the popup (desktop, and optionally mobile).
   * Use tall, full-length screenshots: the popup lets people scroll through the whole site.
   */
  desktop?: string;
  mobile?: string;
  /**
   * Branding: any number of images (logo, mockups, applications...).
   * The first one is shown big; the rest appear as small thumbnails people can click.
   */
  images?: string[];

  // ---- Branding details (all optional, each block only shows if you fill it in) ----
  /** Small label above the title, e.g. "Brand Identity". */
  kind?: string;
  /** Short line under the title, e.g. "A little taste of comfort." */
  tagline?: string;
  /** "Creative direction" list. */
  creative?: string[];
  industry?: string;
  style?: string;
  /** Color palette: hex codes, with an optional name. */
  palette?: { hex: string; name?: string }[];
};

export const categories: Record<Category, { label: string; intro: string }> = {
  website: {
    label: "Websites",
    intro: "Websites and landing pages",
  },
  branding: {
    label: "Branding & identity",
    intro: "Logos and visual identities",
  },
};

export const projects: Project[] = [
  // ---------------- Websites ----------------
  {
    slug: "noir-drive",
    title: "Noir Drive",
    category: "website",
    featured: true,
    summary:
      "Premium car rental website for people who value performance, elegance, freedom, and exceptional experiences.",
    description:
      "A cinematic booking experience for a high-end fleet. We designed a conversion-first journey from first glance to reserved keys — with confident photography, clear availability, and a mobile flow that feels as considered as the cars.",
    cover: "/images/noir-drive-cover.jpg",
    hero: "/images/noir.jpg",
    desktop: "/images/noir-drive-desktop.jpg",
    mobile: "/images/noir-drive-mobile.jpg",
  },
  {
    slug: "sorella-restaurant",
    title: "Sorella Restaurant",
    category: "website",
    featured: true,
    summary:
      "Contemporary restaurant serving modern Mediterranean-inspired cuisine.",
    description:
      "An editorial site for a Mediterranean kitchen: menus that read like a story, reservations without friction, and photography that makes the room feel close enough to book tonight.",
    cover: "/images/sorella-cover.jpg",
    hero: "/images/sorella.jpg",
    desktop: "/images/sorella-desktop.jpg",
    mobile: "/images/sorella-mobile.jpg",
  },
  {
    slug: "roamly-travel",
    title: "Roamly Travel",
    category: "website",
    featured: true,
    summary:
      "A travel agency website that makes booking travel easy and seamless.",
    description:
      "Roamly Travel is a travel agency website that makes booking travel easy and seamless. We built a booking flow that feels as gentle as the travel itself.",
    cover: "/images/roamly-cover.jpg",
    hero: "/images/roamly.jpg",
    desktop: "/images/roamly-desktop.jpg",
    mobile: "/images/roamly-mobile.jpg",
  },
  {
    slug: "lumora-clinic",
    title: "Lumora Beauty Clinic",
    category: "website",
    summary:
      "A beauty clinic website that makes booking appointments easy and seamless.",
    description:
      "Lumora is a beauty clinic website that makes booking appointments easy and seamless. We built a booking flow that feels as gentle as the clinic itself.",
    cover: "/images/lumora-cover.jpg",
    hero: "/images/lumora.jpg",
    desktop: "/images/lumora-desktop.jpg",
    mobile: "/images/lumora-mobile.jpg",
  },
  {
    slug: "golden-hands",
    title: "Golden Hands - Elderly Care Home",
    category: "website",
    summary:
      "Golden Hands is an elderly care home website that makes booking appointments easy and seamless.",
    description:
      "Golden Hands is an elderly care home website that makes booking appointments easy and seamless. We built a booking flow that feels as gentle as the care home itself.",
    cover: "/images/golden-hands-cover.jpg",
    hero: "/images/golden-hands.jpg",
    desktop: "/images/golden-hands-desktop.jpg",
    mobile: "/images/golden-hands-mobile.jpg",
  },
  {
    slug: "AD-AR Physiotherapy",
    title: "AD-AR Physiotherapy Clinic",
    category: "website",
    summary:
      "AD-AR Physiotherapy Clinic is a physiotherapy clinic website that makes booking appointments easy and seamless.",
    description:
      "AD-AR Clinic is a physiotherapy clinic website that makes booking appointments easy and seamless. We built a booking flow that feels as gentle as the clinic itself.",
    cover: "/images/adar-cover.jpg",
    hero: "/images/adar.jpg",
    desktop: "/images/adar-desktop.jpg",
    mobile: "/images/adar-mobile.jpg",
  },

  // ---------------- Branding ----------------
  // CINNA is the template to copy. Kora Studio and Mira Skincare are placeholders: replace or delete them.
  {
    slug: "cinna",
    title: "CINNA Bakery",
    category: "branding",
    featured: true,
    kind: "Brand Identity",
    tagline: "A little taste of comfort.",
    summary: "A playful bakery identity inspired by freshly baked cinnamon rolls.",
    description:
      "CINNA is a playful bakery identity inspired by the warmth and irresistible comfort of freshly baked cinnamon rolls. The visual direction combines warm, pastry-inspired colors, expressive illustrations and distinctive typography to create a brand that feels welcoming, memorable and delicious.",
    creative: [
      "Logo & visual identity",
      "Packaging design",
      "Illustration & brand assets",
      "Stationery & printed materials",
    ],
    industry: "Food & Beverage",
    style: "Playful · Warm · Contemporary",
    palette: [
      { hex: "#C1654E", name: "Cinnamon" },
      { hex: "#D4A574", name: "Caramel" },
      { hex: "#3D2817", name: "Coffee" },
      { hex: "#FBF8F3", name: "Cream" },
    ],
    cover: "/images/cinna-1.jpg",
    images: [
      "/images/cinna-1.jpg",
      "/images/cinna-2.jpg",
      "/images/cinna-3.jpg",
      "/images/cinna-4.jpg",
      "/images/cinna-5.jpg",
    ],
  },
  {
    slug: "calendula",
    title: "Calendula Skincare",
    category: "branding",
    featured: true,
    kind: "Brand Identity",
    tagline: "Nourish, restore and protect.",
    summary: "A skincare brand inspired by calendula, the sun and botanical healing.",
    description:
      "CALENDULA is a skincare brand inspired by the symbolism of the calendula flower and its connection to sunlight, vitality, purity and protection.",
    creative: [
      "Logo & visual identity",
      "Packaging design",
      "Illustration & brand assets",
      "Stationery & printed materials",
    ],
    industry: "Skincare",
    style: "Warm · Sun-inspired · Botanical",
    cover: "/images/calendula-1.jpg",
    palette: [
      { hex: "#CD7217", name: "Sunflower" },
      { hex: "#F2E1AD", name: "Cream" },
      { hex: "#B5BFA7", name: "Sea Foam" },
      { hex: "#DFD3E1", name: "Lavender" },
      { hex: "#C8D9E3", name: "Ice Melt" },
    ],
    images: ["/images/calendula-1.jpg", "/images/calendula-2.jpg", "/images/calendula-3.jpg", "/images/calendula-4.jpg"],
  },
  {
    slug: "vesper",
    title: "Vesper Jewelry",
    category: "branding",
    featured: true,
    kind: "Brand Identity",
    tagline: "The beauty of the last light.",
    summary: "Fine jewelry brand celebrating timeless elegance, individuality and precious moments.",
    description:
      "Vesper draws inspiration from celestial light, translating the symbolism of the evening star into a refined visual language. Deep forest green, champagne gold and elegant typography create a sophisticated aesthetic that feels mysterious, enduring and precious.",
    creative: [
      "Logo & visual identity",
      "Packaging design",
      "Illustration & brand assets",
      "Stationery & printed materials",
    ],
    industry: "Jewelry",
    style: "Twilight · Celestial · Timeless · Precious · Mystery · Elegance",
    cover: "/images/vesper-1.jpg",
    palette: [
      { hex: "#24472b", name: "Emerald" },
      { hex: "#C4A66A", name: "Champagne" },
      { hex: "#EDE5D6", name: "Warm Ivory" },
      { hex: "#242923", name: "Obsidian" },
      { hex: "#8A9279", name: "Muted Olive" },
    ],
    images: ["/images/vesper-1.jpg", "/images/vesper-2.jpg", "/images/vesper-3.jpg","/images/vesper-4.jpg", "/images/vesper-5.jpg"],
  },
];