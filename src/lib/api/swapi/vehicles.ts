import { z } from 'zod';
import { swapiFetch, type Fetch } from './client';
import { craftSchema } from './craft';

export const vehicleSchema = craftSchema.extend({
	vehicle_class: z.string()
});

export type Vehicle = z.infer<typeof vehicleSchema>;

export function getVehicles(fetch: Fetch): Promise<Vehicle[]> {
	return swapiFetch(fetch, '/vehicles', z.array(vehicleSchema));
}
