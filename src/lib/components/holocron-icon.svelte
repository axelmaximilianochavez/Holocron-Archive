<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<!-- Jedi-style holocron: cube frame, an inset panel on each face, and a glowing core diamond in each panel.
     Drawn with currentColor so it follows the theme. -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 32 32"
	fill="none"
	stroke="currentColor"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
>
	<g stroke-width="2">
		<path d="M16 2 28.12 9 16 16 3.88 9Z" />
		<path d="M3.88 9 16 16v14L3.88 23Z" />
		<path d="M28.12 9 16 16v14l12.12-7Z" />
	</g>
	<g stroke-width="1.25" fill="currentColor" fill-opacity="0.2">
		<path d="M16 4.8 23.27 9 16 13.2 8.73 9Z" />
		<path d="M6.3 13.2 13.58 17.4v8.4L6.3 21.6Z" />
		<path d="M25.7 13.2 18.42 17.4v8.4l7.28-4.2Z" />
	</g>
	<g fill="currentColor" stroke="none">
		<path d="M16 7.25 19.03 9 16 10.75 12.97 9Z" />
		<path d="M8.43 16.88 11.46 18.63v3.5L8.43 20.38Z" />
		<path d="M23.57 16.88 20.54 18.63v3.5l3.03-1.75Z" />
	</g>
</svg>
