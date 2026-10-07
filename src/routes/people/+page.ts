import { getPeople } from '$lib/api/swapi/people';
import type { PageLoad } from './$types';

// not awaited: the page renders right away and ResourceGrid shows skeletons until the promise resolves
export const load: PageLoad = ({ fetch }) => ({
	people: getPeople(fetch).then((people) => people.toSorted((a, b) => a.name.localeCompare(b.name)))
});
