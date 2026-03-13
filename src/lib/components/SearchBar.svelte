<script lang="ts">
	interface Props {
		value: string;
		oninput: (value: string) => void;
	}

	let { value, oninput }: Props = $props();
</script>

<div class="relative w-full max-w-xl mx-auto">
	<input
		type="text"
		placeholder="정책명 또는 키워드로 검색..."
		{value}
		oninput={(e) => oninput(e.currentTarget.value)}
		class="w-full rounded-xl border border-gray-200 bg-white px-5 py-3 pl-12 text-base shadow-sm transition-shadow focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:outline-none"
	/>
	<svg
		class="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
		/>
	</svg>
</div>
