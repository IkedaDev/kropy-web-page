export interface Product {
  title: string;
  price: string;
  pricePrefix?: string;
  currency?: string;
  features: string[];
  href: string;
  buttonText: string;
  isRecommended?: boolean;
  buttonVariant?: "dark" | "emerald" | "outline";
}
