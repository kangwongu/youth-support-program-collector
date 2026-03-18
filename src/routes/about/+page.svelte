<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
</script>

<svelte:head>
	<title>사이트 소개 | 청년 지원 정책 모아보기</title>
	<meta name="description" content="청년 지원 정책 모아보기는 흩어진 청년 지원 정책 정보를 한곳에 모아 제공하는 서비스입니다." />
	<meta property="og:title" content="사이트 소개 | 청년 지원 정책 모아보기" />
	<meta property="og:description" content="청년 지원 정책 모아보기는 흩어진 청년 지원 정책 정보를 한곳에 모아 제공하는 서비스입니다." />
	<meta property="og:type" content="website" />
</svelte:head>

<ArticleLayout backHref="/" backLabel="← 홈으로">
	<h1 class="mb-6 text-2xl font-bold text-gray-900">🎯 사이트 소개</h1>

	<div class="space-y-5 leading-relaxed text-gray-600">
		<h2 class="text-lg font-semibold text-gray-900">청년 지원 정책 모아보기란?</h2>
		<p>
			<strong>청년 지원 정책 모아보기</strong>는 정부와 지방자치단체에서 운영하는 다양한 청년 지원 정책을 한곳에 모아 보여주는 정보 서비스입니다.
			주거, 일자리, 교육, 복지, 창업, 금융 등 여러 분야에 걸쳐 흩어져 있는 청년 정책 정보를 카테고리별로 분류하고, 검색을 통해 쉽게 찾을 수 있도록 구성했습니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">왜 만들었나요?</h2>
		<p>
			청년을 위한 지원 정책은 매년 수십 개 이상 발표되지만, 정보가 온통청년, 정부24, 각 지자체 홈페이지 등 여러 곳에 분산되어 있어
			원하는 정책을 찾기가 쉽지 않습니다. 신청 기간을 놓치거나, 자신에게 해당하는 정책이 있는지조차 모르는 경우도 많습니다.
		</p>
		<p>
			이 사이트는 그런 불편함을 줄이고자 시작되었습니다. 하나의 페이지에서 정책 목록을 확인하고, 관심 있는 정책의 원본 페이지로 바로 이동할 수 있도록 했습니다.
			별도의 회원가입이나 로그인 없이 누구나 자유롭게 이용할 수 있습니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">주요 기능</h2>
		<ul class="list-disc space-y-1 pl-5">
			<li><strong>카테고리 필터</strong> — 주거, 일자리, 교육, 복지, 창업, 금융 등 분야별로 정책을 분류합니다.</li>
			<li><strong>키워드 검색</strong> — 정책명, 설명, 태그 등을 기반으로 원하는 정책을 빠르게 찾을 수 있습니다.</li>
			<li><strong>외부 링크 연결</strong> — 각 정책의 공식 안내 페이지로 바로 이동할 수 있습니다.</li>
			<li><strong>가이드 콘텐츠</strong> — 정책 신청 방법, 자격 확인 팁 등 실용적인 가이드를 제공합니다.</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">유의사항</h2>
		<p>
			본 사이트에서 제공하는 정보는 각 정책의 공식 발표 내용을 바탕으로 정리한 것이며, 정책의 세부 조건이나 신청 기간은 변경될 수 있습니다.
			정확한 내용은 반드시 각 정책의 원본 사이트에서 확인해 주시기 바랍니다.
		</p>
		<p>
			빠진 정책이나 잘못된 정보를 발견하시면 사이트 하단의 '정책 제보하기'를 통해 알려주세요.
			더 나은 서비스를 위해 지속적으로 업데이트하고 있습니다.
		</p>
	</div>
</ArticleLayout>
