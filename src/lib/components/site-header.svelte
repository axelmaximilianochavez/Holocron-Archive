<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { Button } from "$lib/components/ui/button/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import SunIcon from "@lucide/svelte/icons/sun";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import { toggleMode } from "mode-watcher";
</script>

<header
	class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
>
	<div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
		<Sidebar.Trigger class="-ms-1" />
		<Separator orientation="vertical" class="mx-2 data-vertical:h-4 data-vertical:self-auto" />
		<h1 class="text-base font-medium">Documents</h1>
		<div class="ms-auto flex items-center gap-2">
			<Button onclick={toggleMode} variant="ghost" size="icon" aria-label="Toggle theme">
				<SunIcon class="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<MoonIcon
					class="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
				/>
			</Button>
		</div>
	</div>
</header>
