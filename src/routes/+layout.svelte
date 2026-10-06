<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';
	import Starfield from '$lib/components/starfield.svelte';
	import { ModeWatcher, mode } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />

<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 64); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="inset" />
	<Sidebar.Inset class="isolate overflow-clip dark:bg-black">
		<!-- only mounted in dark mode, so light mode never starts WebGL -->
		{#if mode.current === 'dark'}
			<Starfield class="absolute inset-0 -z-10" />
		{/if}
		<SiteHeader />
		<div class="flex flex-1 flex-col">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
