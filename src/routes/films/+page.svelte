<script lang="ts">
	import FilmCard from '$lib/components/molecules/film-card.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageTemplate title="Films">
	<ul class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each data.films as film (film.url)}
			<li><FilmCard {film} /></li>
		{/each}
	</ul>
</PageTemplate>
