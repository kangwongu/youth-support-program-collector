export interface Guide {
	slug: string;
	title: string;
	description: string;
	emoji: string;
}

export const guides: Guide[] = [
	{
		slug: 'how-to-apply',
		title: '청년 지원 정책 신청 방법 총정리',
		description: '온통청년, 정부24, 복지로 등 주요 포탈별 신청 방법과 필요 서류, 처리 기간을 안내합니다.',
		emoji: '📝'
	},
	{
		slug: 'eligibility-checklist',
		title: '나에게 맞는 청년 정책 찾기 체크리스트',
		description: '나이, 소득, 취업 상태, 거주 지역 등 조건별로 나에게 맞는 정책을 찾아보세요.',
		emoji: '✅'
	},
	{
		slug: 'housing-support-comparison',
		title: '청년 주거 지원 정책 비교 가이드',
		description: '전세자금대출, 월세지원, 행복주택 등 주거 지원 정책을 한눈에 비교합니다.',
		emoji: '🏠'
	},
	{
		slug: 'first-job-benefits',
		title: '사회초년생이 꼭 알아야 할 지원 혜택',
		description: '내일채움공제, 소득세 감면, 국민취업지원제도 등 첫 직장인을 위한 필수 혜택 모음.',
		emoji: '💼'
	},
	{
		slug: 'common-mistakes',
		title: '청년 정책 신청 시 자주 하는 실수 5가지',
		description: '마감일 놓치기, 소득 기준 오해, 서류 누락 등 흔한 실수와 방지 팁을 알려드립니다.',
		emoji: '⚠️'
	},
	{
		slug: 'income-criteria-explained',
		title: '중위소득 기준 쉽게 이해하기',
		description: '중위소득이란 무엇인지, 2026년 기준표와 내 소득 확인 방법을 쉽게 설명합니다.',
		emoji: '📊'
	},
	{
		slug: 'financial-products-for-youth',
		title: '청년 전용 금융상품 한눈에 보기',
		description: '청년도약계좌, 청년희망적금, 주택드림통장 등 청년 전용 금융상품을 비교합니다.',
		emoji: '💰'
	}
];
