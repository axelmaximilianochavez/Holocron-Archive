import { getStarships } from '$lib/api/swapi/starships';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const starships = await getStarships(fetch);

	return {
		starships: starships.toSorted((a, b) => a.name.localeCompare(b.name))
	};
};
