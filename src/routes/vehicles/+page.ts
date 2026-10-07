import { getVehicles } from '$lib/api/swapi/vehicles';
import type { PageLoad } from './$types';

// not awaited: the page renders right away and ResourceGrid shows skeletons until the promise resolves
export const load: PageLoad = ({ fetch }) => ({
	vehicles: getVehicles(fetch).then((vehicles) =>
		vehicles.toSorted((a, b) => a.name.localeCompare(b.name))
	)
});
