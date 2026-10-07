import { getSpecies } from '$lib/api/swapi/species';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const species = await getSpecies(fetch);

	return {
		species: species.toSorted((a, b) => a.name.localeCompare(b.name))
	};
};
