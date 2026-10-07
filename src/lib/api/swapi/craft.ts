import { z } from 'zod';
import { swapiResourceSchema } from './client';

/** Fields vehicles and starships share; each extends this with its own class field. */
export const craftSchema = swapiResourceSchema.extend({
	name: z.string(),
	model: z.string(),
	manufacturer: z.string(),
	cost_in_credits: z.string(),
	length: z.string(),
	max_atmosphering_speed: z.string(),
	crew: z.string(),
	passengers: z.string(),
	cargo_capacity: z.string(),
	consumables: z.string(),
	pilots: z.array(z.url()),
	films: z.array(z.url())
});
