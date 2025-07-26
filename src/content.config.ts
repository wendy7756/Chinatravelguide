import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
// routes
const routes = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/routes",
	}),
			schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			clients: z.array(z.string()).optional(),
			location: z.string().optional(),
			// Transform string to Date object
			date: z.coerce.date().optional(),
			order: z.number(),
			// Tour information fields
			subtitle: z.string().optional(),
			tourType: z.string().optional(),
			guideDriver: z.string().optional(),
			duration: z.string().optional(),
			hotel: z.string().optional(),
			attractions: z.string().optional(),
			price: z.string().optional(),
			whatsappNumber: z.string().optional(),
			whatsappBusinessLink: z.string().optional(),
			bannerImages: z.array(z.string()).optional(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// destinations
const destinations = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/destinations",
	}),
			schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			location: z.string().optional(),
			features: z.array(z.string()).optional(),
			order: z.number(),
			featured: z.boolean().optional(),
			// Tour information fields
			subtitle: z.string().optional(),
			tourType: z.string().optional(),
			guideDriver: z.string().optional(),
			duration: z.string().optional(),
			hotel: z.string().optional(),
			attractions: z.string().optional(),
			price: z.string().optional(),
			whatsappNumber: z.string().optional(),
			whatsappBusinessLink: z.string().optional(),
			bannerImages: z.array(z.string()).optional(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// testimonials - removed

// stories
const stories = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/stories",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			location: z.string().optional(),
			order: z.number(),
			featured: z.boolean().optional(),
			// Transform string to Date object
			date: z.coerce.date().optional(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	routes,
	destinations,
	stories,
	otherPages,
};
