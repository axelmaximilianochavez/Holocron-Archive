<script lang="ts">
	import { formatMeasure, formatText } from '$lib/format';
	import ResourceCard from '$lib/components/molecules/resource-card.svelte';
	import ResourceGrid from '$lib/components/organisms/resource-grid.svelte';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<PageTemplate title="People">
	<ResourceGrid items={data.people}>
		{#snippet item(person)}
			<ResourceCard
				title={person.name}
				subtitle={formatText(person.gender)}
				badge={formatText(person.birth_year)}
				facts={[
					{ label: 'Height', value: formatMeasure(person.height, 'cm') },
					{ label: 'Mass', value: formatMeasure(person.mass, 'kg') },
					{ label: 'Hair', value: formatText(person.hair_color) },
					{ label: 'Eyes', value: formatText(person.eye_color) }
				]}
			/>
		{/snippet}
	</ResourceGrid>
</PageTemplate>
