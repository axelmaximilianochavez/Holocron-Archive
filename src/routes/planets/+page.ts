import { getPlanets } from '$lib/api/swapi/planets';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const planets = await getPlanets(fetch);

	return {
		planets: planets.toSorted((a, b) => a.name.localeCompare(b.name))
	};
};
