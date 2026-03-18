<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
</script>

<svelte:head>
	<title>나에게 맞는 청년 정책 찾기 체크리스트 | 청년 지원 정책 모아보기</title>
	<meta name="description" content="나이, 소득, 취업 상태, 거주 지역 등 조건별로 나에게 맞는 청년 정책을 찾아보세요." />
	<meta property="og:title" content="나에게 맞는 청년 정책 찾기 체크리스트" />
	<meta property="og:description" content="나이, 소득, 취업 상태, 거주 지역 등 조건별로 나에게 맞는 청년 정책을 찾아보세요." />
	<meta property="og:type" content="article" />
</svelte:head>

<ArticleLayout>
	<h1 class="mb-6 text-2xl font-bold text-gray-900">✅ 나에게 맞는 청년 정책 찾기 체크리스트</h1>

	<div class="space-y-5 leading-relaxed text-gray-600">
		<p>
			청년 정책은 정책마다 자격 요건이 다릅니다. 나이, 소득 수준, 취업 상태, 거주 지역 등 여러 조건을 확인해야
			내가 신청할 수 있는 정책인지 알 수 있습니다. 아래 체크리스트를 통해 나에게 맞는 정책을 찾아보세요.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">1. 나이 확인</h2>
		<p>
			대부분의 청년 정책은 <strong>만 19세~34세</strong>를 대상으로 합니다. 다만 정책에 따라 만 15세부터, 또는 만 39세까지 포함하는 경우도 있습니다.
			특히 군 복무 기간을 연령에서 제외해 주는 정책도 있으니, 본인의 실제 적용 나이를 확인하세요.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li>만 19세~34세: 대부분의 중앙정부 청년 정책</li>
			<li>만 15세~34세: 일부 직업훈련, 인턴십 프로그램</li>
			<li>만 19세~39세: 일부 지방자치단체 정책</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">2. 소득 기준 확인</h2>
		<p>
			많은 정책이 가구 소득 기준을 적용합니다. 보통 <strong>기준 중위소득</strong>의 일정 비율 이하를 조건으로 합니다.
			<a href="/guide/income-criteria-explained" class="text-blue-600 hover:underline">중위소득 기준 가이드</a>를 참고하여 내 가구 소득이 어디에 해당하는지 확인하세요.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li>중위소득 50% 이하: 긴급복지, 생활지원금 등</li>
			<li>중위소득 100% 이하: 주거지원, 취업지원 다수</li>
			<li>중위소득 150% 이하: 전세자금대출, 금융상품 등</li>
			<li>소득 무관: 일부 교육·문화 프로그램</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">3. 취업 상태 확인</h2>
		<p>
			정책에 따라 미취업자만 신청 가능하거나, 반대로 재직자만 대상인 경우가 있습니다.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>미취업·구직자</strong> — 국민취업지원제도, 청년구직활동지원금</li>
			<li><strong>재직자</strong> — 내일채움공제, 소득세 감면</li>
			<li><strong>창업자</strong> — 청년창업사관학교, 창업지원금</li>
			<li><strong>무관</strong> — 주거지원, 금융상품 다수</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">4. 거주 지역 확인</h2>
		<p>
			중앙정부 정책은 전국 어디서나 신청 가능하지만, 지방자치단체 정책은 해당 지역 거주자만 신청할 수 있습니다.
			주민등록상 주소지 기준이므로, 실거주지와 주소지가 다르면 미리 확인이 필요합니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">5. 기타 확인 사항</h2>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>학력 요건</strong> — 일부 정책은 대학 재학·졸업 여부를 확인합니다.</li>
			<li><strong>자산 기준</strong> — 주거 정책은 보유 자산(부동산, 자동차 등)을 확인할 수 있습니다.</li>
			<li><strong>중복 수혜 제한</strong> — 유사한 정책을 이미 받고 있으면 중복 신청이 불가할 수 있습니다.</li>
		</ul>

		<p>
			위 체크리스트를 확인한 후 <a href="/" class="text-blue-600 hover:underline">정책 목록</a>에서 나에게 맞는 정책을 검색해 보세요.
		</p>
	</div>
</ArticleLayout>
