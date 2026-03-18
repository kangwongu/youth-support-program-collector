<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
</script>

<svelte:head>
	<title>청년 전용 금융상품 한눈에 보기 | 청년 지원 정책 모아보기</title>
	<meta name="description" content="청년도약계좌, 청년희망적금, 주택드림통장 등 청년 전용 금융상품을 비교합니다." />
	<meta property="og:title" content="청년 전용 금융상품 한눈에 보기" />
	<meta property="og:description" content="청년도약계좌, 청년희망적금, 주택드림통장 등 청년 전용 금융상품을 비교합니다." />
	<meta property="og:type" content="article" />
</svelte:head>

<ArticleLayout>
	<h1 class="mb-6 text-2xl font-bold text-gray-900">💰 청년 전용 금융상품 한눈에 보기</h1>

	<div class="space-y-5 leading-relaxed text-gray-600">
		<p>
			정부와 금융기관에서는 청년의 자산 형성을 돕기 위해 다양한 전용 금융상품을 운영하고 있습니다.
			일반 적금보다 높은 금리, 정부 기여금, 비과세 혜택 등이 제공되므로 꼼꼼히 비교해 보세요.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">1. 청년도약계좌</h2>
		<p>
			5년간 매월 최대 70만 원을 적립하면, 정부 기여금과 이자 비과세 혜택을 받아
			만기 시 약 <strong>5,000만 원</strong>을 모을 수 있는 적금 상품입니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>대상</strong>: 만 19세~34세, 개인소득 7,500만 원 이하</li>
			<li><strong>월 납입</strong>: 최대 70만 원</li>
			<li><strong>기간</strong>: 5년</li>
			<li><strong>혜택</strong>: 정부 기여금 (소득에 따라 월 최대 3.3만 원) + 이자 비과세</li>
			<li><strong>취급 은행</strong>: 시중 은행에서 가입 가능</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">2. 청년희망적금</h2>
		<p>
			2년간 매월 최대 50만 원을 적립하면 저축장려금과 이자 비과세 혜택을 받는 상품입니다.
			모집 기간에만 가입 가능하며, 현재 신규 모집 여부를 확인해야 합니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>대상</strong>: 만 19세~34세, 총급여 3,600만 원 이하</li>
			<li><strong>월 납입</strong>: 최대 50만 원</li>
			<li><strong>기간</strong>: 2년</li>
			<li><strong>혜택</strong>: 저축장려금 (납입액의 최대 6%) + 이자 비과세</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">3. 주택드림통장 (구 청년우대형 주택청약종합저축)</h2>
		<p>
			주택 마련을 위한 청약 통장으로, 일반 주택청약 통장보다 높은 금리와 이자 소득 비과세 혜택을 제공합니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>대상</strong>: 만 19세~34세, 무주택 세대주, 연소득 5,000만 원 이하</li>
			<li><strong>월 납입</strong>: 2만~100만 원</li>
			<li><strong>혜택</strong>: 우대금리 + 이자 비과세 (500만 원 한도) + 소득공제</li>
			<li><strong>추가 장점</strong>: 청약 당첨 시 주택구입자금 대출 우대</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">비교 요약</h2>
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-gray-200">
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">상품</th>
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">기간</th>
						<th class="py-2 pr-4 text-left font-semibold text-gray-900">월 최대 납입</th>
						<th class="py-2 text-left font-semibold text-gray-900">핵심 혜택</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-100">
					<tr><td class="py-2 pr-4 font-medium">청년도약계좌</td><td class="py-2 pr-4">5년</td><td class="py-2 pr-4">70만 원</td><td class="py-2">정부 기여금 + 비과세</td></tr>
					<tr><td class="py-2 pr-4 font-medium">청년희망적금</td><td class="py-2 pr-4">2년</td><td class="py-2 pr-4">50만 원</td><td class="py-2">저축장려금 + 비과세</td></tr>
					<tr><td class="py-2 pr-4 font-medium">주택드림통장</td><td class="py-2 pr-4">자유</td><td class="py-2 pr-4">100만 원</td><td class="py-2">우대금리 + 청약 우대</td></tr>
				</tbody>
			</table>
		</div>

		<h2 class="text-lg font-semibold text-gray-900">가입 시 유의사항</h2>
		<ul class="list-disc space-y-1 pl-5">
			<li>대부분 <strong>중도 해지 시 혜택이 축소</strong>되므로 만기까지 유지할 수 있는 금액으로 가입하세요.</li>
			<li>상품에 따라 <strong>중복 가입이 제한</strong>될 수 있습니다 (예: 청년희망적금 + 청년도약계좌 중복 불가한 경우).</li>
			<li>소득 기준은 가입 시점 기준이며, <a href="/guide/income-criteria-explained" class="text-blue-600 hover:underline">중위소득 가이드</a>를 참고하여 내 소득을 확인하세요.</li>
			<li>각 상품의 세부 조건은 변경될 수 있으니 <a href="/" class="text-blue-600 hover:underline">정책 목록</a>에서 최신 정보를 확인하세요.</li>
		</ul>
	</div>
</ArticleLayout>
