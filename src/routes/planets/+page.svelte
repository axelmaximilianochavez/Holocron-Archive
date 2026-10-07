<script lang="ts">
	import { formatMeasure, formatText } from '$lib/format';
	import ResourceCard from '$lib/components/molecules/resource-card.svelte';
	import ResourceGrid from '$lib/components/organisms/resource-grid.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageTemplate title="Planets">
	<ResourceGrid items={data.planets}>
		{#snippet item(planet)}
			<ResourceCard
				title={planet.name}
				subtitle={formatText(planet.climate)}
				facts={[
					{ label: 'Population', value: formatMeasure(planet.population) },
					{ label: 'Diameter', value: formatMeasure(planet.diameter, 'km') },
					{ label: 'Gravity', value: formatText(planet.gravity) },
					{ label: 'Terrain', value: formatText(planet.terrain) }
				]}
			/>
		{/snippet}
	</ResourceGrid>
</PageTemplate>
