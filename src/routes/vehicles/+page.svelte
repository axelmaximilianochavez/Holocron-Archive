<script lang="ts">
	import { formatMeasure, formatText } from '$lib/format';
	import ResourceCard from '$lib/components/molecules/resource-card.svelte';
	import ResourceGrid from '$lib/components/organisms/resource-grid.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageTemplate title="Vehicles">
	<ResourceGrid items={data.vehicles}>
		{#snippet item(vehicle)}
			<ResourceCard
				title={vehicle.name}
				subtitle={vehicle.model}
				badge={formatText(vehicle.vehicle_class)}
				facts={[
					{ label: 'Manufacturer', value: vehicle.manufacturer },
					{ label: 'Cost', value: formatMeasure(vehicle.cost_in_credits, 'credits') },
					{ label: 'Crew', value: formatMeasure(vehicle.crew) },
					{ label: 'Passengers', value: formatMeasure(vehicle.passengers) }
				]}
			/>
		{/snippet}
	</ResourceGrid>
</PageTemplate>
