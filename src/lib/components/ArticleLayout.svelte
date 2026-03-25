<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		backHref = '/guide',
		backLabel = '← 목록으로',
		title = '',
		description = '',
		children
	}: {
		backHref?: string;
		backLabel?: string;
		title?: string;
		description?: string;
		children: Snippet;
	} = $props();

	const SITE_URL = 'https://youth-support-program-collector.vercel.app';

	const articleJsonLd = title
		? {
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: title,
				description: description,
				publisher: {
					'@type': 'Organization',
					name: '청년 지원 정책 모아보기',
					url: SITE_URL
				},
				inLanguage: 'ko'
			}
		: null;
</script>

<svelte:head>
	{#if articleJsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>`}
	{/if}
</svelte:head>

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
