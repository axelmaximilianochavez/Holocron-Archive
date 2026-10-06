<script lang="ts" module>
	import type { Icon } from '@tabler/icons-svelte';
	import type { RouteId } from '$app/types';

	export type NavItem = { title: string; url: RouteId; icon?: Icon };
</script>

<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	let { items }: { items: NavItem[] } = $props();

	// startsWith keeps the item highlighted on nested pages too, e.g. /people/1
	const isActive = (url: RouteId) => page.url.pathname.startsWith(resolve(url));
</script>

<Sidebar.Group>
	<Sidebar.GroupContent class="flex flex-col gap-2">
		<Sidebar.Menu>
			{#each items as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						tooltipContent={item.title}
						isActive={isActive(item.url)}
						class="hover:bg-primary/15 active:bg-primary/20 data-active:bg-primary/15 [&_svg]:transition-colors data-active:[&_svg]:text-primary [&:hover_svg]:text-primary"
					>
						{#snippet child({ props })}
							<a href={resolve(item.url)} {...props}>
								{#if item.icon}
									<item.icon />
								{/if}
								<span>{item.title}</span>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.GroupContent>
</Sidebar.Group>
