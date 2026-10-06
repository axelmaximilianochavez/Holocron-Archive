<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { prefersReducedMotion } from 'svelte/motion';
	import StarfieldScene from './starfield-scene.svelte';

	let { class: className = '' }: { class?: string } = $props();
</script>

<!-- sticky inner box keeps the canvas at viewport size instead of the full page height -->
<div class="pointer-events-none {className}" aria-hidden="true">
	<div class="sticky top-0 h-svh w-full">
		<Canvas>
			<StarfieldScene speed={prefersReducedMotion.current ? 0 : 100} />
		</Canvas>
	</div>
</div>
