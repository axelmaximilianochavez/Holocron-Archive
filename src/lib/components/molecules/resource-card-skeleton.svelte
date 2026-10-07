<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	let { facts = 4 }: { facts?: number } = $props();
</script>

<!-- mirrors ResourceCard's layout so the grid doesn't jump when real cards replace it -->
<Card.Root class="h-full" aria-hidden="true">
	<Card.Header>
		<Skeleton class="h-5 w-2/3" />
		<Skeleton class="h-4 w-1/2" />
		<Card.Action>
			<Skeleton class="h-5 w-16 rounded-full" />
		</Card.Action>
	</Card.Header>
	<Card.Content class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
		{#each { length: facts }, i (i)}
			<Skeleton class="h-4 w-20" />
			<Skeleton class="h-4 w-full max-w-40" />
		{/each}
	</Card.Content>
</Card.Root>
