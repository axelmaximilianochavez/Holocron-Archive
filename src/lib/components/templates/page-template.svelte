<script lang="ts">
	import type { Snippet } from 'svelte';
	import PageTitle from '$lib/components/atoms/page-title.svelte';

	let {
		title,
		documentTitle = title,
		children
	}: { title: string; documentTitle?: string; children?: Snippet } = $props();
</script>

<svelte:head>
	<title>{documentTitle} · Holocron Archive</title>
</svelte:head>

<section class="flex flex-1 flex-col gap-4 p-4 lg:p-6">
	<PageTitle>{title}</PageTitle>
	{@render children?.()}
</section>
