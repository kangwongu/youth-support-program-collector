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
</div>
