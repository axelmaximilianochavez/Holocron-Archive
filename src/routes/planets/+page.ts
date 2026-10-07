import { getPlanets } from '$lib/api/swapi/planets';
import type { PageLoad } from './$types';

// not awaited: the page renders right away and ResourceGrid shows skeletons until the promise resolves
export const load: PageLoad = ({ fetch }) => ({
	planets: getPlanets(fetch).then((planets) =>
		planets.toSorted((a, b) => a.name.localeCompare(b.name))
	)
});
