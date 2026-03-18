<script lang="ts">
	import { guides } from '$lib/data/guides';
</script>

<svelte:head>
	<title>청년 정책 활용 가이드 | 청년 지원 정책 모아보기</title>
	<meta name="description" content="청년 정책 신청 방법, 자격 조건 확인, 주거·금융 지원 비교 등 실용적인 가이드를 확인하세요." />
	<meta property="og:title" content="청년 정책 활용 가이드 | 청년 지원 정책 모아보기" />
	<meta property="og:description" content="청년 정책 신청 방법, 자격 조건 확인, 주거·금융 지원 비교 등 실용적인 가이드를 확인하세요." />
	<meta property="og:type" content="website" />
</svelte:head>

<div class="mx-auto max-w-2xl">
	<a
		href="/"
		class="mb-6 inline-flex items-center gap-1 text-sm text-gray-400 transition-colors hover:text-gray-600"
	>
		← 홈으로
	</a>

	<h1 class="mb-2 text-2xl font-bold text-gray-900">📖 청년 정책 활용 가이드</h1>
	<p class="mb-8 text-sm text-gray-500">정책 신청 방법, 자격 확인 팁 등 실용적인 가이드를 모았습니다.</p>

	<div class="grid gap-4 sm:grid-cols-2">
		{#each guides as guide (guide.slug)}
			<a
				href="/guide/{guide.slug}"
				class="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
			>
				<span class="mb-2 block text-2xl">{guide.emoji}</span>
				<h2 class="mb-1 font-semibold text-gray-900 group-hover:text-blue-600">{guide.title}</h2>
				<p class="text-sm text-gray-500">{guide.description}</p>
			</a>
		{/each}
	</div>
</div>
