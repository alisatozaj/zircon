export type ContactItem = {
  label: string;
  value: string;
  icon: "mail" | "instagram";
  href: string;
};

export const contacts: ContactItem[] = [
  {
    label: "Email",
    value: "zircn.dev@gmail.com",
    icon: "mail",
    href: "mailto:zircn.dev@gmail.com",
  },
  {
    label: "Instagram",
    value: "@zircn.dev",
    icon: "instagram",
    href: "https://instagram.com/zircn.dev",
  },
];
