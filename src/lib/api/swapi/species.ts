import { z } from 'zod';
import { swapiFetch, swapiResourceSchema, type Fetch } from './client';

export const speciesSchema = swapiResourceSchema.extend({
	name: z.string(),
	classification: z.string(),
	designation: z.string(),
	average_height: z.string(),
	skin_colors: z.string(),
	hair_colors: z.string(),
	eye_colors: z.string(),
	average_lifespan: z.string(),
	// null for species with no known homeworld (e.g. droids)
	homeworld: z.url().nullable(),
	language: z.string(),
	people: z.array(z.url()),
	films: z.array(z.url())
});

export type Species = z.infer<typeof speciesSchema>;

export function getSpecies(fetch: Fetch): Promise<Species[]> {
	return swapiFetch(fetch, '/species', z.array(speciesSchema));
}
