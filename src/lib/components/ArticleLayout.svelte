<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { FaqItem } from '$lib/types';

	let {
		backHref = '/guide',
		backLabel = '← 목록으로',
		title = '',
		description = '',
		slug = '',
		publishedAt = '',
		updatedAt = '',
		author = '',
		faq = undefined,
		children
	}: {
		backHref?: string;
		backLabel?: string;
		title?: string;
		description?: string;
		slug?: string;
		publishedAt?: string;
		updatedAt?: string;
		author?: string;
		faq?: FaqItem[];
		children: Snippet;
	} = $props();

	const SITE_URL = 'https://youth-support-program-collector.vercel.app';
	const articleUrl = slug ? `${SITE_URL}/guide/${slug}` : '';

	const articleJsonLd = title
		? {
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: title,
				description,
				...(publishedAt ? { datePublished: publishedAt } : {}),
				...(updatedAt ? { dateModified: updatedAt } : {}),
				...(author
					? {
							author: {
								'@type': 'Person',
								name: author,
								url: `${SITE_URL}/about`
							}
						}
					: {}),
				publisher: {
					'@type': 'Organization',
					name: '청년 지원 정책 모아보기',
					url: SITE_URL
				},
				...(articleUrl ? { mainEntityOfPage: articleUrl } : {}),
				inLanguage: 'ko'
			}
		: null;

	const breadcrumbJsonLd =
		title && slug
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
						{ '@type': 'ListItem', position: 2, name: '가이드', item: `${SITE_URL}/guide` },
						{ '@type': 'ListItem', position: 3, name: title, item: articleUrl }
					]
				}
			: null;

	const faqJsonLd =
		faq && faq.length > 0
			? {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: faq.map((f) => ({
						'@type': 'Question',
						name: f.q,
						acceptedAnswer: { '@type': 'Answer', text: f.a }
					}))
				}
			: null;

	function formatDate(d: string) {
		if (!d) return '';
		const [y, m, day] = d.split('-');
		return `${y}년 ${parseInt(m)}월 ${parseInt(day)}일`;
	}
</script>

<svelte:head>
	{#if articleJsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>`}
	{/if}
	{#if breadcrumbJsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`}
	{/if}
	{#if faqJsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
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
			{#if author || updatedAt}
				<div class="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400">
					{#if author}
						<span>✍️ {author}</span>
					{/if}
					{#if updatedAt}
						<span>·</span>
						<span>
							최종 업데이트:
							<time datetime={updatedAt}>{formatDate(updatedAt)}</time>
						</span>
					{/if}
				</div>
			{/if}
			{@render children()}

			{#if faq && faq.length > 0}
				<div class="mt-8 border-t border-gray-100 pt-6">
					<h2 class="mb-3 text-lg font-semibold text-gray-900">❓ 자주 묻는 질문</h2>
					<div class="space-y-3">
						{#each faq as item}
							<details class="rounded-lg border border-gray-100 bg-gray-50 p-3">
								<summary class="cursor-pointer text-sm font-medium text-gray-800">{item.q}</summary>
								<p class="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
							</details>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</article>
</div>
