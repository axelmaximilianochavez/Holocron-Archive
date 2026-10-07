<script lang="ts">
	import { formatMeasure, formatText } from '$lib/format';
	import ResourceCard from '$lib/components/molecules/resource-card.svelte';
	import ResourceGrid from '$lib/components/organisms/resource-grid.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageTemplate title="Species">
	<ResourceGrid items={data.species}>
		{#snippet item(entry)}
			<ResourceCard
				title={entry.name}
				subtitle={formatText(entry.classification)}
				badge={formatText(entry.designation)}
				facts={[
					{ label: 'Language', value: formatText(entry.language) },
					{ label: 'Avg. height', value: formatMeasure(entry.average_height, 'cm') },
					{ label: 'Avg. lifespan', value: formatMeasure(entry.average_lifespan, 'years') }
				]}
			/>
		{/snippet}
	</ResourceGrid>
</PageTemplate>
