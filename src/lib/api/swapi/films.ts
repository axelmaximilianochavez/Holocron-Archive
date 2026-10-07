import { z } from 'zod';
import { swapiFetch, swapiResourceSchema, type Fetch } from './client';

export const filmSchema = swapiResourceSchema.extend({
	title: z.string(),
	episode_id: z.number().int(),
	opening_crawl: z.string(),
	director: z.string(),
	producer: z.string(),
	release_date: z.iso.date(),
	characters: z.array(z.url()),
	planets: z.array(z.url()),
	starships: z.array(z.url()),
	vehicles: z.array(z.url()),
	species: z.array(z.url())
});

export type Film = z.infer<typeof filmSchema>;

export function getFilms(fetch: Fetch): Promise<Film[]> {
	return swapiFetch(fetch, '/films', z.array(filmSchema));
}
