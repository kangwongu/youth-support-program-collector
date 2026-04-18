<script lang="ts">
	import ArticleLayout from '$lib/components/ArticleLayout.svelte';
</script>

<svelte:head>
	<title>사이트 소개 | 청년 지원 정책 모아보기</title>
	<meta
		name="description"
		content="청년 지원 정책 모아보기는 흩어진 청년 지원 정책 정보를 한곳에 모아 제공하는 1인 운영 큐레이션 서비스입니다. 운영자 소개, 편집 원칙, 데이터 출처, 수익 모델을 안내합니다."
	/>
	<meta property="og:title" content="사이트 소개 | 청년 지원 정책 모아보기" />
	<meta
		property="og:description"
		content="청년 지원 정책 모아보기는 흩어진 청년 지원 정책 정보를 한곳에 모아 제공하는 1인 운영 큐레이션 서비스입니다."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<ArticleLayout backHref="/" backLabel="← 홈으로">
	<h1 class="mb-6 text-2xl font-bold text-gray-900">🎯 사이트 소개</h1>

	<div class="space-y-5 leading-relaxed text-gray-600">
		<h2 class="text-lg font-semibold text-gray-900">청년 지원 정책 모아보기란?</h2>
		<p>
			<strong>청년 지원 정책 모아보기</strong>는 정부와 지방자치단체에서 운영하는 다양한 청년 지원
			정책을 한곳에 모아 보여주는 정보 서비스입니다. 주거, 일자리, 교육, 복지, 창업, 금융 등 여러
			분야에 걸쳐 흩어져 있는 청년 정책 정보를 카테고리별로 분류하고, 검색을 통해 쉽게 찾을 수 있도록
			구성했습니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">운영자 소개</h2>
		<p>
			본 사이트는 <strong>1인 운영 사이드 프로젝트</strong>입니다. 운영자는 현직 소프트웨어 개발자로,
			직접 청년 지원 정책을 찾으면서 "정보가 너무 흩어져 있다"는 불편함을 겪은 경험에서 이 사이트를
			시작했습니다. 정부 기관 소속이 아닌 개인이 운영하므로, 정책에 대한 공식 해석이 아닌 <strong
				>접근성 개선을 위한 정보 정리</strong
			>가 목적입니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">편집 원칙</h2>
		<ul class="list-disc space-y-1 pl-5">
			<li>
				<strong>공식 출처 우선</strong> — 모든 정책 정보는 정부24, 온통청년, 복지로 등 공식 정부 포탈을
				1차 출처로 사용합니다. 각 정책 상세 페이지에 원본 사이트 링크를 명시합니다.
			</li>
			<li>
				<strong>정기 검수</strong> — 정책 정보의 정확성과 최신성을 위해 <strong>매월 1회 전체 검수</strong>를
				진행합니다. 각 정책 상세 페이지 상단에 최종 업데이트 날짜를 명시합니다.
			</li>
			<li>
				<strong>제3자 의견 제외</strong> — 정책의 좋고 나쁨, 추천 여부 등 주관적 판단은 사이트에 반영하지
				않습니다. 사용자가 직접 비교하고 판단할 수 있도록 객관적 정보만 정리합니다.
			</li>
			<li>
				<strong>오류 즉시 수정</strong> — 잘못된 정보를 발견하면 사이트 하단의 '정책 제보하기' 또는
				이메일로 알려주세요. 확인 후 24시간 내에 수정합니다.
			</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">데이터 출처</h2>
		<p>본 사이트의 정책 정보는 다음 공식 출처에서 수집합니다.</p>
		<ul class="list-disc space-y-1 pl-5">
			<li>
				<a
					href="https://www.youthcenter.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline">온통청년</a
				> — 국무조정실 청년 정책 통합 포탈
			</li>
			<li>
				<a
					href="https://www.gov.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline">정부24</a
				> — 정부 서비스 통합 포탈
			</li>
			<li>
				<a
					href="https://www.bokjiro.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline">복지로</a
				> — 보건복지부 복지 서비스 포탈
			</li>
			<li>
				<a
					href="https://www.work.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline">워크넷</a
				> — 고용노동부 취업 포탈
			</li>
			<li>
				<a
					href="https://www.k-startup.go.kr/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline">K-Startup</a
				> — 중소벤처기업부 창업 포탈
			</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">수익 모델 공개</h2>
		<p>
			본 사이트는 <strong>Google AdSense 광고 게재</strong>를 통해 운영 비용(도메인, 호스팅 등)을
			충당합니다. 광고 노출은 정책 정보의 우선순위나 노출 순서에 영향을 주지 않으며, 광고와 정책 정보는
			시각적으로 명확히 구분됩니다. 특정 정책이나 기관으로부터 후원을 받지 않으며, 모든 정책은 동일한
			기준으로 큐레이션됩니다.
		</p>

		<h2 class="text-lg font-semibold text-gray-900">연락처</h2>
		<p>
			정책 정보 오류 제보, 사이트 개선 제안, 누락된 정책 추천 등은 다음으로 연락 주세요.
		</p>
		<ul class="list-disc space-y-1 pl-5">
			<li>
				이메일: <a href="mailto:kwg2358@gmail.com" class="text-blue-600 hover:underline"
					>kwg2358@gmail.com</a
				>
			</li>
			<li>
				정책 제보 폼: <a
					href="https://forms.gle/MskkRgRVwivgBpvn7"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-600 hover:underline">정책 제보하기 →</a
				>
			</li>
		</ul>

		<h2 class="text-lg font-semibold text-gray-900">유의사항</h2>
		<p>
			본 사이트에서 제공하는 정보는 각 정책의 공식 발표 내용을 바탕으로 정리한 것이며, 정책의 세부
			조건이나 신청 기간은 변경될 수 있습니다. <strong>정확한 내용은 반드시 각 정책의 원본 사이트에서
				확인</strong
			> 후 신청해 주시기 바랍니다. 본 사이트는 정책 신청을 대행하거나 결과를 보장하지 않습니다.
		</p>
	</div>
</ArticleLayout>
