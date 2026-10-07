import { z } from 'zod';
import { swapiFetch, swapiResourceSchema, type Fetch } from './client';

export const planetSchema = swapiResourceSchema.extend({
	name: z.string(),
	rotation_period: z.string(),
	orbital_period: z.string(),
	diameter: z.string(),
	climate: z.string(),
	gravity: z.string(),
	terrain: z.string(),
	surface_water: z.string(),
	population: z.string(),
	residents: z.array(z.url()),
	films: z.array(z.url())
});

export type Planet = z.infer<typeof planetSchema>;

export function getPlanets(fetch: Fetch): Promise<Planet[]> {
	return swapiFetch(fetch, '/planets', z.array(planetSchema));
}
