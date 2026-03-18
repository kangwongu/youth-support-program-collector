<script lang="ts">
	import SearchBar from '$lib/components/SearchBar.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import ProgramCard from '$lib/components/ProgramCard.svelte';
	import { programs } from '$lib/data/programs';
	import { categoryMap } from '$lib/data/categories';
	import type { Category } from '$lib/types';

	let searchQuery = $state('');
	let selectedCategory = $state<Category | null>(null);

	let filtered = $derived(
		programs.filter((p) => {
			if (selectedCategory && p.category !== selectedCategory) return false;
			if (searchQuery) {
				const q = searchQuery.toLowerCase();
				return (
					p.title.toLowerCase().includes(q) ||
					p.description.toLowerCase().includes(q) ||
					p.source.toLowerCase().includes(q) ||
					p.tags.some((tag) => tag.toLowerCase().includes(q)) ||
					categoryMap[p.category].label.includes(q)
				);
			}
			return true;
		})
	);
</script>

<div class="space-y-6">
	<SearchBar value={searchQuery} oninput={(v) => (searchQuery = v)} />
	<CategoryFilter selected={selectedCategory} onselect={(c) => (selectedCategory = c)} />

	{#if filtered.length === 0}
		<div class="py-16 text-center">
			<p class="text-lg text-gray-400">검색 결과가 없습니다</p>
			<p class="mt-1 text-sm text-gray-300">다른 키워드로 검색해 보세요</p>
		</div>
	{:else}
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as program (program.id)}
				<ProgramCard {program} />
			{/each}
		</div>
		<p class="text-center text-xs text-gray-300">총 {filtered.length}개 정책</p>
	{/if}

	<div class="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-center">
		<h2 class="mb-1 text-lg font-semibold text-blue-900">📖 청년 정책 활용 가이드</h2>
		<p class="mb-4 text-sm text-blue-700">정책 신청 방법, 자격 확인 팁 등 실용 가이드를 확인해 보세요.</p>
		<a
			href="/guide"
			class="inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
		>
			가이드 보기 →
		</a>
	</div>
</div>
