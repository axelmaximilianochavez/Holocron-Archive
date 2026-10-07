<script lang="ts">
	import { page } from '$app/state';
	import PageTemplate from '$lib/components/templates/page-template.svelte';
</script>

<PageTemplate title={page.status === 404 ? 'Lost in hyperspace' : 'Something went wrong'}>
	<p class="text-muted-foreground">{page.error?.message}</p>
</PageTemplate>
