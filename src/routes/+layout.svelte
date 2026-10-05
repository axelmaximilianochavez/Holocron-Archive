<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import SiteHeader from '$lib/components/site-header.svelte';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />

<Sidebar.Provider
	style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);"
>
	<AppSidebar variant="inset" />
	<Sidebar.Inset>
		<SiteHeader />
		<div class="relative isolate flex flex-1 flex-col bg-background dark:bg-black">
			<!-- lazy: browsers skip fetching hidden lazy images, so light mode doesn't download it -->
			<enhanced:img
				src="$lib/assets/starsBackground.jpg?w=3840;2560;1920;1280;768&quality=90"
				sizes="100vw"
				alt=""
				loading="lazy"
				class="absolute inset-0 -z-10 hidden size-full object-cover object-center dark:block"
			/>
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
