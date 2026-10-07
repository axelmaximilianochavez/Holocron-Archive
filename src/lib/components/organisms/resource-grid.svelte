<script lang="ts" generics="T extends { url: string }">
	import type { Snippet } from 'svelte';

	let { items, item }: { items: T[]; item: Snippet<[T]> } = $props();
</script>

<!-- SWAPI urls are unique per resource, so they double as each key -->
<ul class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
	{#each items as entry (entry.url)}
		<li>{@render item(entry)}</li>
	{/each}
</ul>
