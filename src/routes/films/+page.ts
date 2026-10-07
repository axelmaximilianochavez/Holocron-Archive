import { getFilms } from '$lib/api/swapi/films';
import type { PageLoad } from './$types';

// not awaited: the page renders right away and ResourceGrid shows skeletons until the promise resolves
export const load: PageLoad = ({ fetch }) => ({
	films: getFilms(fetch).then((films) => films.toSorted((a, b) => a.episode_id - b.episode_id))
});
