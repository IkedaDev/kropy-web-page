export interface PortfolioProject {
  id: string;
  title: string;
  category: "landings" | "apps" | "saas";
  tags: string[];
  description: string;
  demoUrl: string;
  image: string;
}
