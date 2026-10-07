import { getStarships } from '$lib/api/swapi/starships';
import type { PageLoad } from './$types';

// not awaited: the page renders right away and ResourceGrid shows skeletons until the promise resolves
export const load: PageLoad = ({ fetch }) => ({
	starships: getStarships(fetch).then((starships) =>
		starships.toSorted((a, b) => a.name.localeCompare(b.name))
	)
});
