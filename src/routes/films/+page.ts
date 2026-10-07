import { getFilms } from '$lib/api/swapi/films';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const films = await getFilms(fetch);

	return {
		films: films.toSorted((a, b) => a.episode_id - b.episode_id)
	};
};
