import { error } from '@sveltejs/kit';
import { z } from 'zod';

const BASE_URL = 'https://swapi.info/api';

/** Fields every SWAPI resource shares; each resource schema extends this. */
export const swapiResourceSchema = z.object({
	created: z.iso.datetime(),
	edited: z.iso.datetime(),
	url: z.url()
});

/**
 * Fetches a SWAPI path and validates the response against `schema`.
 * Throws SvelteKit `error()`s, so a failure inside `load` renders `+error.svelte`.
 *
 * @param fetch the `fetch` passed to `load`, so SvelteKit can track and dedupe the request
 */
export async function swapiFetch<T extends z.ZodType>(
	fetch: typeof globalThis.fetch,
	path: string,
	schema: T
): Promise<z.infer<T>> {
	let response: Response;
	try {
		response = await fetch(`${BASE_URL}${path}`);
	} catch {
		error(503, 'Could not reach the Star Wars API. Check your connection and try again.');
	}

	if (!response.ok) {
		error(response.status, `The Star Wars API responded with ${response.status}.`);
	}

	const parsed = schema.safeParse(await response.json());
	if (!parsed.success) {
		console.error(`Unexpected SWAPI response for ${path}`, z.treeifyError(parsed.error));
		error(502, 'The Star Wars API returned data in an unexpected format.');
	}

	return parsed.data;
}
