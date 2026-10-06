<script lang="ts">
	import { resolve } from '$app/paths';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AlienIcon from '@tabler/icons-svelte/icons/alien';
	import CameraIcon from '@tabler/icons-svelte/icons/camera';
	import CarIcon from '@tabler/icons-svelte/icons/car';
	import FileAiIcon from '@tabler/icons-svelte/icons/file-ai';
	import FileDescriptionIcon from '@tabler/icons-svelte/icons/file-description';
	import MovieIcon from '@tabler/icons-svelte/icons/movie';
	import PlanetIcon from '@tabler/icons-svelte/icons/planet';
	import RocketIcon from '@tabler/icons-svelte/icons/rocket';
	import UsersIcon from '@tabler/icons-svelte/icons/users';
	import type { ComponentProps } from 'svelte';
	import HolocronIcon from './holocron-icon.svelte';
	import NavMain, { type NavItem } from './nav-main.svelte';
	import NavUser from './nav-user.svelte';

	const data = {
		user: {
			name: 'shadcn',
			email: 'm@example.com',
			avatar: '/avatars/shadcn.jpg'
		},
		navMain: [
			{
				title: 'Films',
				url: '/films',
				icon: MovieIcon
			},
			{
				title: 'People',
				url: '/people',
				icon: UsersIcon
			},
			{
				title: 'Planets',
				url: '/planets',
				icon: PlanetIcon
			},
			{
				title: 'Species',
				url: '/species',
				icon: AlienIcon
			},
			{
				title: 'Vehicles',
				url: '/vehicles',
				icon: CarIcon
			},
			{
				title: 'Starships',
				url: '/starships',
				icon: RocketIcon
			}
		] satisfies NavItem[],
		navClouds: [
			{
				title: 'Capture',
				icon: CameraIcon,
				isActive: true,
				url: '#',
				items: [
					{
						title: 'Active Proposals',
						url: '#'
					},
					{
						title: 'Archived',
						url: '#'
					}
				]
			},
			{
				title: 'Proposal',
				icon: FileDescriptionIcon,
				url: '#',
				items: [
					{
						title: 'Active Proposals',
						url: '#'
					},
					{
						title: 'Archived',
						url: '#'
					}
				]
			},
			{
				title: 'Prompts',
				icon: FileAiIcon,
				url: '#',
				items: [
					{
						title: 'Active Proposals',
						url: '#'
					},
					{
						title: 'Archived',
						url: '#'
					}
				]
			}
		]
	};

	let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:p-1.5!">
					{#snippet child({ props })}
						<a href={resolve('/')} {...props}>
							<HolocronIcon class="size-5! text-primary" />
							<span class="text-base font-semibold">Holocron Archive</span>
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={data.navMain} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser user={data.user} />
	</Sidebar.Footer>
</Sidebar.Root>
