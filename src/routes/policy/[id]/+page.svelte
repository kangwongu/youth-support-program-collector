<script lang="ts">
	import { categoryMap } from '$lib/data/categories';
	import { isExpired, formatDeadline } from '$lib/utils/deadline';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let program = $derived(data.program);
	let cat = $derived(categoryMap[program.category]);
	let expired = $derived(isExpired(program.deadline));
	let deadlineText = $derived(formatDeadline(program.deadline));

	let hasApplicationInfo = $derived(
		program.applicationMethod ||
			program.applicationPeriod ||
			(program.requiredDocuments && program.requiredDocuments.length > 0)
	);

	const SITE_URL = 'https://youth-support-program-collector.vercel.app';
	let canonicalUrl = $derived(`${SITE_URL}/policy/${program.id}`);

	let serviceJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'GovernmentService',
		name: program.title,
		description: program.description,
		url: canonicalUrl,
		serviceType: cat.label,
		provider: {
			'@type': 'GovernmentOrganization',
			name: program.source
		},
		...(program.region ? { areaServed: { '@type': 'AdministrativeArea', name: program.region } } : {}),
		...(program.ageRange
			? { audience: { '@type': 'PeopleAudience', suggestedMinAge: 19, audienceType: `청년 (${program.ageRange})` } }
			: {}),
		dateModified: program.dateModified,
		inLanguage: 'ko'
	});

	let breadcrumbJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{ '@type': 'ListItem', position: 1, name: '홈', item: SITE_URL },
			{
				'@type': 'ListItem',
				position: 2,
				name: cat.label,
				item: `${SITE_URL}/?category=${program.category}`
			},
			{ '@type': 'ListItem', position: 3, name: program.title, item: canonicalUrl }
		]
	});

	let faqJsonLd = $derived(
		program.faq && program.faq.length > 0
			? {
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: program.faq.map((f) => ({
						'@type': 'Question',
						name: f.q,
						acceptedAnswer: { '@type': 'Answer', text: f.a }
					}))
				}
			: null
	);

	function formatUpdatedAt(d: string) {
		const [y, m, day] = d.split('-');
		return `${y}년 ${parseInt(m)}월 ${parseInt(day)}일`;
	}
</script>

<svelte:head>
	<title>{program.title} | 청년 지원 정책 모아보기</title>
	<meta name="description" content={program.description} />
	<meta property="og:title" content={program.title} />
	<meta property="og:description" content={program.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="article" />
	{@html `<script type="application/ld+json">${JSON.stringify(serviceJsonLd)}</script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(breadcrumbJsonLd)}</script>`}
	{#if faqJsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`}
	{/if}
</svelte:head>

<div class="mx-auto max-w-2xl">
	<a
		href="/"
		class="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-600"
	>
		← 목록으로
	</a>

	<article class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
		<!-- 헤더: 카테고리 뱃지 + 마감일 + 제목 + 메타 -->
		<div class="p-6">
			<div class="mb-4 flex flex-wrap items-center gap-2">
				<span
					class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
					style="background-color: {cat.color};"
				>
					{cat.emoji} {cat.label}
				</span>
				{#if expired}
					<span
						class="inline-block rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white"
						>마감</span
					>
				{:else if deadlineText}
					<span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500"
						>{deadlineText}</span
					>
				{/if}
			</div>

			<h1 class="mb-3 text-2xl font-bold text-gray-900">{program.title}</h1>

			<div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
				{#if program.ageRange}
					<span>🎯 {program.ageRange}</span>
				{/if}
				{#if program.region}
					<span>📍 {program.region}</span>
				{/if}
				<span>📌 {program.source}</span>
			</div>

			<p class="mt-3 text-xs text-gray-400">
				최종 업데이트: <time datetime={program.dateModified}>{formatUpdatedAt(program.dateModified)}</time>
			</p>
		</div>

		<!-- 정책 소개 -->
		{#if program.content}
			<div class="border-t border-gray-100 p-6">
				<h2 class="mb-3 text-lg font-semibold text-gray-900">📋 정책 소개</h2>
				<div class="space-y-3 leading-relaxed text-gray-600">
					{#each program.content.split('\n\n') as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>
			</div>
		{/if}

		<!-- 신청 정보 -->
		{#if hasApplicationInfo}
			<div class="border-t border-gray-100 p-6">
				<h2 class="mb-3 text-lg font-semibold text-gray-900">📝 신청 정보</h2>
				<div class="space-y-2 text-sm text-gray-600">
					{#if program.applicationMethod}
						<div class="flex gap-2">
							<span class="shrink-0 font-medium text-gray-700">신청 방법:</span>
							<span>{program.applicationMethod}</span>
						</div>
					{/if}
					{#if program.applicationPeriod}
						<div class="flex gap-2">
							<span class="shrink-0 font-medium text-gray-700">신청 기간:</span>
							<span>{program.applicationPeriod}</span>
						</div>
					{/if}
					{#if program.requiredDocuments && program.requiredDocuments.length > 0}
						<div class="flex gap-2">
							<span class="shrink-0 font-medium text-gray-700">필요 서류:</span>
							<span>{program.requiredDocuments.join(', ')}</span>
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<!-- FAQ (Phase 2에서 데이터 추가 시 노출) -->
		{#if program.faq && program.faq.length > 0}
			<div class="border-t border-gray-100 p-6">
				<h2 class="mb-3 text-lg font-semibold text-gray-900">❓ 자주 묻는 질문</h2>
				<div class="space-y-3">
					{#each program.faq as item}
						<details class="rounded-lg border border-gray-100 bg-gray-50 p-3">
							<summary class="cursor-pointer text-sm font-medium text-gray-800">{item.q}</summary>
							<p class="mt-2 text-sm leading-relaxed text-gray-600">{item.a}</p>
						</details>
					{/each}
				</div>
			</div>
		{/if}

		<!-- 태그 -->
		{#if program.tags.length > 0}
			<div class="border-t border-gray-100 p-6">
				<div class="flex items-center gap-2">
					<span class="text-sm text-gray-500">🏷️</span>
					<div class="flex flex-wrap gap-1">
						{#each program.tags as tag}
							<span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
			</div>
		{/if}

		<!-- 외부 링크 -->
		<div class="border-t border-gray-100 p-6">
			<a
				href={program.url}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
			>
				원본 사이트에서 자세히 보기 →
			</a>
		</div>
	</article>
</div>
