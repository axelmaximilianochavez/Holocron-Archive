<script lang="ts" module>
	export type Fact = { label: string; value: string };
</script>

<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as Card from '$lib/components/ui/card/index.js';

	let {
		title,
		subtitle,
		badge,
		facts = []
	}: { title: string; subtitle?: string; badge?: string; facts?: Fact[] } = $props();
</script>

<Card.Root class="h-full">
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		{#if subtitle}
			<Card.Description>{subtitle}</Card.Description>
		{/if}
		{#if badge}
			<Card.Action>
				<Badge variant="outline">{badge}</Badge>
			</Card.Action>
		{/if}
	</Card.Header>
	{#if facts.length > 0}
		<Card.Content>
			<dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
				{#each facts as fact (fact.label)}
					<dt class="text-muted-foreground">{fact.label}</dt>
					<dd>{fact.value}</dd>
				{/each}
			</dl>
		</Card.Content>
	{/if}
</Card.Root>
