import { getPeople } from '$lib/api/swapi/people';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const people = await getPeople(fetch);

	return {
		people: people.toSorted((a, b) => a.name.localeCompare(b.name))
	};
};
