<script lang="ts">
	import { categoryMap } from '$lib/data/categories';
	import { isExpired, formatDeadline } from '$lib/utils/deadline';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let program = $derived(data.program);
	let cat = $derived(categoryMap[program.category]);
	let expired = $derived(isExpired(program.deadline));
	let deadlineText = $derived(formatDeadline(program.deadline));
</script>

<svelte:head>
	<title>{program.title} | 청년 지원 정책 모아보기</title>
	<meta property="og:title" content={program.title} />
	<meta property="og:description" content={program.description} />
	<meta property="og:url" content="https://youth-support.example.com/policy/{program.id}" />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="mx-auto max-w-2xl">
	<a
		href="/"
		class="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-600"
	>
		← 목록으로
	</a>

	<article class="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
		<div class="p-6">
			<div class="mb-4 flex flex-wrap items-center gap-2">
				<span
					class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
					style="background-color: {cat.color};"
				>
					{cat.emoji} {cat.label}
				</span>
				{#if expired}
					<span class="inline-block rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">마감</span>
				{:else if deadlineText}
					<span class="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500">{deadlineText}</span>
				{/if}
			</div>

			<h1 class="mb-3 text-2xl font-bold text-gray-900">{program.title}</h1>
			<p class="mb-6 leading-relaxed text-gray-500">{program.description}</p>

			<div class="space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
				{#if program.ageRange}
					<div class="flex gap-2">
						<span>🎯</span>
						<span><strong>대상:</strong> {program.ageRange}</span>
					</div>
				{/if}
				{#if program.region}
					<div class="flex gap-2">
						<span>📍</span>
						<span><strong>지역:</strong> {program.region}</span>
					</div>
				{/if}
				<div class="flex gap-2">
					<span>📌</span>
					<span><strong>출처:</strong> {program.source}</span>
				</div>
				{#if program.tags.length > 0}
					<div class="flex gap-2">
						<span>🏷️</span>
						<div class="flex flex-wrap gap-1">
							{#each program.tags as tag}
								<span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">{tag}</span>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>

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
