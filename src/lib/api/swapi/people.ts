import { z } from 'zod';
import { swapiFetch, swapiResourceSchema, type Fetch } from './client';

export const personSchema = swapiResourceSchema.extend({
	name: z.string(),
	height: z.string(),
	mass: z.string(),
	hair_color: z.string(),
	skin_color: z.string(),
	eye_color: z.string(),
	birth_year: z.string(),
	gender: z.string(),
	homeworld: z.url(),
	films: z.array(z.url()),
	species: z.array(z.url()),
	vehicles: z.array(z.url()),
	starships: z.array(z.url())
});

export type Person = z.infer<typeof personSchema>;

export function getPeople(fetch: Fetch): Promise<Person[]> {
	return swapiFetch(fetch, '/people', z.array(personSchema));
}
