export type Step = {
  title: string;
  points: string[];
};

export const steps: Step[] = [
  { title: "Discover", points: ["Goals & scope", "Content & references"] },
  { title: "Design", points: ["Direction & structure", "Focused feedback"] },
  { title: "Build", points: ["Responsive development", "Checks & refinement"] },
  { title: "Launch", points: ["Final review", "Handover & next steps"] },
];
