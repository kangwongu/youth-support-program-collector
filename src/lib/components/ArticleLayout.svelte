<script lang="ts">
	import type { Snippet } from 'svelte';

	let { backHref = '/guide', backLabel = '← 목록으로', children }: { backHref?: string; backLabel?: string; children: Snippet } = $props();
</script>

<div class="mx-auto max-w-2xl">
	<a
		href={backHref}
		class="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-600"
	>
		{backLabel}
	</a>

	<article class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
		<div class="p-6 sm:p-8">
			{@render children()}
		</div>
	</article>
</div>
