import { getSpecies } from '$lib/api/swapi/species';
import type { PageLoad } from './$types';

// not awaited: the page renders right away and ResourceGrid shows skeletons until the promise resolves
export const load: PageLoad = ({ fetch }) => ({
	species: getSpecies(fetch).then((species) =>
		species.toSorted((a, b) => a.name.localeCompare(b.name))
	)
});
