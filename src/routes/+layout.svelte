<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-gray-50 text-gray-900">
	<header class="border-b border-gray-100 bg-white">
		<div class="mx-auto max-w-5xl px-4 py-6">
			<h1 class="text-2xl font-bold tracking-tight">🎯 청년 지원 정책 모아보기</h1>
			<p class="mt-1 text-sm text-gray-500">
				흩어진 청년 지원 정책을 한눈에 확인하세요
			</p>
		</div>
	</header>

	<main class="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
		{@render children()}
	</main>

	<footer class="border-t border-gray-100 bg-white">
		<div class="mx-auto max-w-5xl px-4 py-6">
			<p class="mb-2 text-xs font-medium text-gray-400">관련 사이트</p>
			<div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
				<a
					href="https://www.youthcenter.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-blue-600 hover:underline">온통청년</a
				>
				<a
					href="https://www.gov.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-blue-600 hover:underline">정부24</a
				>
				<a
					href="https://www.work.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-blue-600 hover:underline">워크넷</a
				>
				<a
					href="https://www.k-startup.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:text-blue-600 hover:underline">K-Startup</a
				>
			</div>
			<p class="mt-4 text-xs text-gray-300">
				본 사이트는 정보 제공 목적이며, 각 정책의 상세 내용은 원본 사이트를 확인해 주세요.
			</p>
		</div>
	</footer>
</div>
