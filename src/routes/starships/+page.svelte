<script lang="ts">
	import { formatMeasure, formatText } from '$lib/format';
	import ResourceCard from '$lib/components/molecules/resource-card.svelte';
	import ResourceGrid from '$lib/components/organisms/resource-grid.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageTemplate title="Starships">
	<ResourceGrid items={data.starships}>
		{#snippet item(starship)}
			<ResourceCard
				title={starship.name}
				subtitle={starship.model}
				badge={formatText(starship.starship_class)}
				facts={[
					{ label: 'Manufacturer', value: starship.manufacturer },
					{ label: 'Cost', value: formatMeasure(starship.cost_in_credits, 'credits') },
					{ label: 'Hyperdrive', value: formatMeasure(starship.hyperdrive_rating) },
					{ label: 'MGLT', value: formatMeasure(starship.MGLT) }
				]}
			/>
		{/snippet}
	</ResourceGrid>
</PageTemplate>
