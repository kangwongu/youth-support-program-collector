<script lang="ts">
	import { categoryMap } from '$lib/data/categories';
	import type { Program } from '$lib/types';

	interface Props {
		program: Program;
	}

	let { program }: Props = $props();
	let cat = $derived(categoryMap[program.category]);
</script>

<article
	class="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
>
	<div>
		<div class="mb-3 flex items-center gap-2">
			<span
				class="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
				style="background-color: {cat.color};"
			>
				{cat.emoji} {cat.label}
			</span>
			{#if program.region}
				<span class="text-xs text-gray-400">{program.region}</span>
			{/if}
		</div>
		<h3 class="mb-1 text-lg font-bold text-gray-900">{program.title}</h3>
		<p class="mb-3 text-sm leading-relaxed text-gray-500">{program.description}</p>
		<div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-400">
			{#if program.ageRange}
				<span>🎯 {program.ageRange}</span>
			{/if}
			<span>📌 {program.source}</span>
		</div>
	</div>
	<a
		href={program.url}
		target="_blank"
		rel="noopener noreferrer"
		class="mt-4 inline-flex items-center justify-center rounded-lg bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
	>
		자세히 보기
		<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			/>
		</svg>
	</a>
</article>
