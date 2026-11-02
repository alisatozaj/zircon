export type Package = {
  slug: string;
  name: string;
  price: number;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export type AddOn = {
  name: string;
  description: string;
  price: string;
};

export const packages: Package[] = [
  {
    slug: "landing-page",
    name: "Landing Page",
    price: 350,
    features: [
      "One custom page",
      "Responsive build",
      "Contact form",
      "Basic SEO setup",
      "1 consolidated revision round",
    ],
  },
  {
    slug: "business-website",
    name: "Business Website",
    price: 600,
    featured: true,
    badge: "Strong starting point",
    features: [
      "Up to 5 pages",
      "Responsive build",
      "Contact form",
      "SEO foundations",
      "2 consolidated revision rounds",
    ],
  },
  {
    slug: "custom-website",
    name: "Custom Website",
    price: 1000,
    features: [
      "Custom scope",
      "Extra pages or functionality",
      "Agreed timeline",
      "Agreed deliverables",
    ],
  },
];

export const addOns: AddOn[] = [
  {
    name: "Branding add-on",
    description: "Palette, typography, logo refinement, or an agreed logo scope.",
    price: "from €100",
  },
  {
    name: "Website care",
    description:
      "Defined small updates and checks. Excludes hosting, paid software, and large development.",
    price: "from €50/month",
  },
];

export type CompareRow = {
  feature: string;
  /** One value per package, in the same order as `packages`. `true` renders a check mark. */
  values: [string | true, string | true, string | true];
};

export const compareRows: CompareRow[] = [
  { feature: "Pages", values: ["1", "Up to 5", "Agreed scope"] },
  { feature: "Responsive build", values: [true, true, true] },
  { feature: "Contact form", values: [true, true, "Optional"] },
  { feature: "SEO setup", values: ["Basic", "Foundations", "Agreed scope"] },
  { feature: "Revision rounds", values: ["1", "2", "Agreed scope"] },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How does pricing work?",
    answer: "The prices shown are starting points. A final quote follows an agreed scope.",
  },
  {
    question: "What is included?",
    answer:
      "Each package lists its core deliverables. Any additions are agreed before work starts.",
  },
  {
    question: "What about copy and images?",
    answer:
      "You can supply final copy and images. Writing, sourcing, or production can be scoped separately.",
  },
  {
    question: "Who handles domain and hosting?",
    answer:
      "You own your domain and hosting accounts. Setup can be included as an agreed extra.",
  },
  {
    question: "How long does it take?",
    answer: "Timing depends on scope and how quickly content and feedback arrive.",
  },
  {
    question: "How do payment and revisions work?",
    answer:
      "Payment milestones and consolidated revision rounds are agreed before work starts.",
  },
];
