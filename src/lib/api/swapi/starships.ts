import { z } from 'zod';
import { swapiFetch, type Fetch } from './client';
import { craftSchema } from './craft';

export const starshipSchema = craftSchema.extend({
	starship_class: z.string(),
	hyperdrive_rating: z.string(),
	MGLT: z.string()
});

export type Starship = z.infer<typeof starshipSchema>;

export function getStarships(fetch: Fetch): Promise<Starship[]> {
	return swapiFetch(fetch, '/starships', z.array(starshipSchema));
}
