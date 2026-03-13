<script lang="ts">
	import { categories } from '$lib/data/categories';
	import type { Category } from '$lib/types';

	interface Props {
		selected: Category | null;
		onselect: (category: Category | null) => void;
	}

	let { selected, onselect }: Props = $props();
</script>

<div class="flex flex-wrap justify-center gap-2">
	<button
		class="rounded-full border px-4 py-2 text-sm font-medium transition-colors {selected === null
			? 'border-gray-800 bg-gray-800 text-white'
			: 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'}"
		onclick={() => onselect(null)}
	>
		전체
	</button>
	{#each categories as cat}
		<button
			class="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
			style={selected === cat.id
				? `background-color: ${cat.color}; color: white; border-color: ${cat.color};`
				: ''}
			class:border-gray-200={selected !== cat.id}
			class:bg-white={selected !== cat.id}
			class:text-gray-600={selected !== cat.id}
			class:hover:bg-gray-50={selected !== cat.id}
			onclick={() => onselect(cat.id)}
		>
			{cat.emoji} {cat.label}
		</button>
	{/each}
</div>
