import { getVehicles } from '$lib/api/swapi/vehicles';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const vehicles = await getVehicles(fetch);

	return {
		vehicles: vehicles.toSorted((a, b) => a.name.localeCompare(b.name))
	};
};
