<script lang="ts">
	import { formatText } from '$lib/format';
	import ResourceCard from '$lib/components/molecules/resource-card.svelte';
	import ResourceGrid from '$lib/components/organisms/resource-grid.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const releaseFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });
</script>

<PageTemplate title="Films">
	<ResourceGrid items={data.films}>
		{#snippet item(film)}
			<ResourceCard
				title={film.title}
				subtitle="Directed by {film.director}"
				badge="Episode {film.episode_id}"
				facts={[
					{ label: 'Released', value: releaseFormat.format(new Date(film.release_date)) },
					{ label: 'Producer', value: formatText(film.producer) }
				]}
			/>
		{/snippet}
	</ResourceGrid>
</PageTemplate>
