import { z } from "astro:schema";

const pricingComponentSchema = z.object({
	name: z.string(),
	included: z.string(),
	unit: z.string(),
	price: z.string(),
});

const pricingProductSchema = z.object({
	product: z.string(),
	description: z.string(),
	link: z.string(),
	components: z.array(pricingComponentSchema),
});

export const pricingSchema = z.object({
	category: z.string(),
	name: z.string(),
	icon: z.string(),
	products: z.array(pricingProductSchema),
});