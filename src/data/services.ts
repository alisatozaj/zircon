export type Service = {
  title: string;
  description: string;
  /** Shown when the row is expanded with the + button. Edit these to match what you really offer. */
  includes: string[];
};

export const services: Service[] = [
  {
    title: "Website design & development",
    description:
      "Custom-designed, responsive websites with tailored layouts, pages, and features.",
    includes: [
      "Page structure & layout",
      "Responsive build",
      "Contact form",
      "SEO foundations",
    ],
  },
  {
    title: "Landing pages",
    description:
      "Single-page websites built around a specific product, service, or offer.",
    includes: [
      "One focused, custom page",
      "Clear call to action",
      "Responsive build",
      "Basic SEO setup",
    ],
  },
  {
    title: "Branding & graphic design",
    description:
      "Distinctive logos, typography, colors, and visual systems that make your business recognizable.",
    includes: [
      "Palette & typography",
      "Logo refinement or an agreed logo scope",
      "A consistent visual direction",
    ],
  },
];
