<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
</script>

<svelte:head>
	<title>중위소득 기준 쉽게 이해하기 | 청년 지원 정책 모아보기</title>
	<meta name="description" content="중위소득이란 무엇인지, 2026년 기준표와 내 소득 확인 방법을 쉽게 설명합니다." />
	<meta property="og:title" content="중위소득 기준 쉽게 이해하기" />
	<meta property="og:description" content="중위소득이란 무엇인지, 2026년 기준표와 내 소득 확인 방법을 쉽게 설명합니다." />
	<meta property="og:type" content="article" />
</svelte:head>

<ArticleLayout>
	<h1 class="mb-6 text-2xl font-bold text-gray-900">📊 중위소득 기준 쉽게 이해하기</h1>

	<div class="space-y-5 leading-relaxed text-gray-600">
		<p>
			청년 정책 자격 요건을 보면 "중위소득 100% 이하", "중위소득 150% 이하" 같은 표현이 자주 등장합니다.
			처음 보면 어렵게 느껴지지만, 개념을 알면 내가 해당하는지 쉽게 확인할 수 있습니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">기준 중위소득이란?</h2>
		<p>
			기준 중위소득은 우리나라 전체 가구를 소득 순으로 줄 세웠을 때 <strong>정확히 중간에 있는 가구의 소득</strong>입니다.
			보건복지부가 매년 고시하며, 각종 복지 정책의 수급자 선정 기준으로 사용됩니다.
		</p>
		<p>
			예를 들어 "중위소득 100%"는 중간 가구의 소득 수준과 같다는 뜻이고,
			"중위소득 50%"는 그 절반 수준의 소득을 의미합니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">2026년 기준 중위소득표</h2>
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-gray-200">
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">가구원 수</th>
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">중위 50%</th>
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">중위 100%</th>
						<th class="py-2 text-left font-semibold text-gray-900">중위 150%</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-100">
					<tr><td class="py-2 pr-4 font-medium">1인</td><td class="py-2 pr-4">약 119만 원</td><td class="py-2 pr-4">약 239만 원</td><td class="py-2">약 358만 원</td></tr>
					<tr><td class="py-2 pr-4 font-medium">2인</td><td class="py-2 pr-4">약 196만 원</td><td class="py-2 pr-4">약 393만 원</td><td class="py-2">약 589만 원</td></tr>
					<tr><td class="py-2 pr-4 font-medium">3인</td><td class="py-2 pr-4">약 251만 원</td><td class="py-2 pr-4">약 502만 원</td><td class="py-2">약 754만 원</td></tr>
					<tr><td class="py-2 pr-4 font-medium">4인</td><td class="py-2 pr-4">약 304만 원</td><td class="py-2 pr-4">약 609만 원</td><td class="py-2">약 913만 원</td></tr>
				</tbody>
			</table>
		</div>
		<p class="text-sm text-gray-400">※ 위 금액은 월 소득 기준이며, 실제 고시 금액과 소폭 차이가 있을 수 있습니다.</p>

		<h2 class="text-lg font-semibold text-gray-900">내 소득은 어떻게 확인하나요?</h2>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>건강보험료 납부확인서</strong>로 소득 수준을 간접 확인할 수 있습니다. 국민건강보험공단 홈페이지에서 발급 가능합니다.</li>
			<li><strong>소득금액증명원</strong>은 국세청 홈택스에서 발급할 수 있으며, 연간 총소득을 확인할 수 있습니다.</li>
			<li><strong>복지로 모의계산</strong> 기능을 이용하면 내가 받을 수 있는 복지 혜택을 간편하게 확인할 수 있습니다.</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">자주 헷갈리는 점</h2>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>개인 소득 vs 가구 소득</strong> — 대부분의 정책은 가구 전체 소득을 봅니다. 부모님과 같은 세대라면 합산됩니다.</li>
			<li><strong>세전 vs 세후</strong> — 일반적으로 세전(총급여) 기준입니다.</li>
			<li><strong>근로소득 외 소득</strong> — 이자, 배당, 임대소득 등도 포함될 수 있습니다.</li>
		</ul>

		<p>
			소득 기준을 정확히 파악한 후 <a href="/guide/eligibility-checklist" class="text-blue-600 hover:underline">자격 요건 체크리스트</a>를 활용하면
			나에게 맞는 정책을 효율적으로 찾을 수 있습니다.
		</p>
	</div>
</ArticleLayout>
