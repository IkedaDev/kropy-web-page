import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders"; // <-- NUEVO EN ASTRO 5

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),

  schema: z.object({
    title: z.string().max(100, "El título no debe superar los 100 caracteres"),
    description: z.string().min(50).max(160, "Descripción ideal para SEO"),
    publishDate: z.date(),
    author: z.string().default("Kropy"),
    image: z.string().optional(),
    tags: z.array(z.string()).default(["Desarrollo Web"]),
    isDraft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
