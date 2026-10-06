<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils.js';

	let { class: className, children }: { class?: string; children: Snippet } = $props();
</script>

<h1 class={cn('text-2xl font-semibold tracking-tight', className)}>{@render children()}</h1>
