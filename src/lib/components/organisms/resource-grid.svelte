<script lang="ts" generics="T extends { url: string }">
	import { isHttpError } from '@sveltejs/kit';
	import type { Snippet } from 'svelte';
	import ResourceCardSkeleton from '$lib/components/molecules/resource-card-skeleton.svelte';

	let {
		items,
		item,
		skeletons = 6
	}: {
		/** a promise (streamed from `load`) shows skeleton cards until it resolves */
		items: T[] | Promise<T[]>;
		item: Snippet<[T]>;
		skeletons?: number;
	} = $props();

	const gridClass = 'grid gap-4 md:grid-cols-2 xl:grid-cols-3';

	const errorMessage = (error: unknown) =>
		isHttpError(error) ? error.body.message : 'Something went wrong while loading this list.';
</script>

{#await items}
	<ul class={gridClass} aria-busy="true" aria-label="Loading">
		{#each { length: skeletons }, i (i)}
			<li><ResourceCardSkeleton /></li>
		{/each}
	</ul>
{:then entries}
	<!-- SWAPI urls are unique per resource, so they double as each key -->
	<ul class={gridClass}>
		{#each entries as entry (entry.url)}
			<li>{@render item(entry)}</li>
		{/each}
	</ul>
{:catch error}
	<p class="text-destructive">{errorMessage(error)}</p>
{/await}
