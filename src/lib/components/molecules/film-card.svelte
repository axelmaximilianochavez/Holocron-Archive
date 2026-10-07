<script lang="ts">
	import type { Film } from '$lib/api/swapi/films';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let { film }: { film: Film } = $props();

	const releaseYear = $derived(new Date(film.release_date).getFullYear());
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{film.title}</Card.Title>
		<Card.Description>Directed by {film.director} · {releaseYear}</Card.Description>
		<Card.Action>
			<Badge variant="outline">Episode {film.episode_id}</Badge>
		</Card.Action>
	</Card.Header>
</Card.Root>
