<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
</script>

<svelte:head>
	<title>청년 주거 지원 정책 비교 가이드 | 청년 지원 정책 모아보기</title>
	<meta name="description" content="전세자금대출, 월세지원, 행복주택 등 청년 주거 지원 정책을 한눈에 비교합니다." />
	<meta property="og:title" content="청년 주거 지원 정책 비교 가이드" />
	<meta property="og:description" content="전세자금대출, 월세지원, 행복주택 등 청년 주거 지원 정책을 한눈에 비교합니다." />
	<meta property="og:type" content="article" />
</svelte:head>

<ArticleLayout>
	<h1 class="mb-6 text-2xl font-bold text-gray-900">🏠 청년 주거 지원 정책 비교 가이드</h1>

	<div class="space-y-5 leading-relaxed text-gray-600">
		<p>
			주거비는 청년들에게 가장 큰 부담 중 하나입니다. 정부와 지자체에서는 다양한 주거 지원 정책을 운영하고 있지만,
			종류가 많아 어떤 것이 나에게 맞는지 파악하기 어렵습니다. 대표적인 청년 주거 지원 정책을 비교해 보겠습니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">청년 전세자금 대출</h2>
		<p>
			전세보증금이 부족한 청년에게 저금리로 자금을 대출해 주는 제도입니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>대상</strong>: 만 19세~34세, 무주택 세대주(예정자 포함)</li>
			<li><strong>한도</strong>: 최대 1억 원 (지역별 상이)</li>
			<li><strong>금리</strong>: 연 1.5%~2.5% (소득에 따라 차등)</li>
			<li><strong>장점</strong>: 시중 대출보다 훨씬 낮은 금리</li>
			<li><strong>유의점</strong>: 소득·자산 기준 충족 필요, 전세 계약서 필요</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">청년 월세 지원</h2>
		<p>
			월세 부담을 줄이기 위해 매월 일정 금액을 지원하는 정책입니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>대상</strong>: 만 19세~34세, 무주택자, 소득 기준 충족</li>
			<li><strong>지원 금액</strong>: 월 최대 20만 원 (최대 12개월)</li>
			<li><strong>장점</strong>: 상환 없이 지원금 수령, 신청이 비교적 간편</li>
			<li><strong>유의점</strong>: 소득 기준이 비교적 엄격 (중위소득 60% 이하 등)</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">행복주택</h2>
		<p>
			대학생, 사회초년생, 신혼부부 등을 위해 시세보다 저렴하게 공급하는 공공임대주택입니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>대상</strong>: 만 19세~39세 무주택자 (대학생, 청년, 신혼부부)</li>
			<li><strong>임대료</strong>: 시세의 60~80% 수준</li>
			<li><strong>거주 기간</strong>: 최대 6년 (청년 기준)</li>
			<li><strong>장점</strong>: 역세권 등 교통 편리한 입지가 많음</li>
			<li><strong>유의점</strong>: 경쟁률이 높아 추첨으로 선정, 공급 물량 한정</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">비교 요약</h2>
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-gray-200">
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">구분</th>
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">전세자금대출</th>
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">월세지원</th>
						<th class="py-2 text-left font-semibold text-gray-900">행복주택</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-100">
					<tr><td class="py-2 pr-4 font-medium">유형</td><td class="py-2 pr-4">대출</td><td class="py-2 pr-4">보조금</td><td class="py-2">임대주택</td></tr>
					<tr><td class="py-2 pr-4 font-medium">상환</td><td class="py-2 pr-4">필요</td><td class="py-2 pr-4">불필요</td><td class="py-2">월 임대료</td></tr>
					<tr><td class="py-2 pr-4 font-medium">소득 기준</td><td class="py-2 pr-4">중위 150%</td><td class="py-2 pr-4">중위 60%</td><td class="py-2">중위 100%</td></tr>
					<tr><td class="py-2 pr-4 font-medium">신청 난이도</td><td class="py-2 pr-4">보통</td><td class="py-2 pr-4">쉬움</td><td class="py-2">추첨</td></tr>
				</tbody>
			</table>
		</div>

		<p>
			각 정책의 세부 조건은 연도와 지역에 따라 달라질 수 있으니, <a href="/" class="text-blue-600 hover:underline">정책 목록</a>에서
			최신 정보를 확인하세요. 소득 기준이 궁금하다면 <a href="/guide/income-criteria-explained" class="text-blue-600 hover:underline">중위소득 가이드</a>를 참고하세요.
		</p>
	</div>
</ArticleLayout>
