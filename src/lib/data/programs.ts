import type { Program } from '$lib/types';

export const programs: Program[] = [
	{
		id: 'youth-housing-voucher',
		title: '청년 월세 한시 특별지원',
		description: '월세 부담 완화를 위해 월 최대 20만원씩 12개월 지원',
		category: 'housing',
		url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661',
		source: '복지로',
		ageRange: '19~34세',
		region: '전국'
	},
	{
		id: 'youth-jeonse-loan',
		title: '청년전용 버팀목전세자금대출',
		description: '전세보증금 대출 시 저금리 혜택 제공',
		category: 'housing',
		url: 'https://nhuf.molit.go.kr/',
		source: '주택도시기금',
		ageRange: '19~34세',
		region: '전국'
	},
	{
		id: 'happy-housing',
		title: '행복주택',
		description: '대학생·청년·신혼부부를 위한 공공임대주택',
		category: 'housing',
		url: 'https://www.myhome.go.kr/',
		source: 'LH한국토지주택공사',
		ageRange: '19~39세',
		region: '전국'
	},
	{
		id: 'kwork-youth',
		title: '국민취업지원제도',
		description: '취업 지원 서비스와 구직촉진수당 월 50만원 지급',
		category: 'jobs',
		url: 'https://www.work24.go.kr/ua/z/z/1300/selectEmssRqutIntro.do',
		source: '고용24',
		ageRange: '15~69세',
		region: '전국'
	},
	{
		id: 'youth-internship',
		title: '청년인턴(체험형·채용형)',
		description: '공공기관 및 중소기업 인턴십 기회 제공',
		category: 'jobs',
		url: 'https://yw.work24.go.kr/main.do',
		source: '고용24',
		ageRange: '15~34세',
		region: '전국'
	},
	{
		id: 'youth-digital-academy',
		title: '청년 디지털 아카데미',
		description: 'IT·디지털 직무 교육 및 취업 연계 프로그램',
		category: 'education',
		url: 'https://www.work24.go.kr/hr/a/a/1100/trnnCrsInf2.do?pageId=6',
		source: '고용24',
		ageRange: '18~34세',
		region: '전국'
	},
	{
		id: 'kmooc',
		title: 'K-MOOC (한국형 온라인 공개강좌)',
		description: '대학 수준 온라인 강좌 무료 수강',
		category: 'education',
		url: 'http://www.kmooc.kr/',
		source: '교육부',
		region: '전국'
	},
	{
		id: 'youth-tomorrow-learning-card',
		title: '국민내일배움카드',
		description: '직업 훈련비 최대 500만원 지원',
		category: 'education',
		url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000351&systClId=SC00000004',
		source: '고용24',
		ageRange: '15세 이상',
		region: '전국'
	},
	{
		id: 'youth-savings',
		title: '청년도약계좌',
		description: '매월 최대 70만원 저축 시 정부 기여금 지급',
		category: 'welfare',
		url: 'https://www.kinfa.or.kr/',
		source: '서민금융진흥원',
		ageRange: '19~34세',
		region: '전국'
	},
	{
		id: 'youth-mental-health',
		title: '청년 마음건강 지원',
		description: '전문 심리상담 서비스 최대 8회 무료 제공',
		category: 'welfare',
		url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004671',
		source: '복지로',
		ageRange: '19~34세',
		region: '전국'
	},
	{
		id: 'youth-activity-support',
		title: '청년수당(청년활동지원금)',
		description: '미취업 청년에게 월 50만원씩 최대 6개월 지원',
		category: 'welfare',
		url: 'https://youth.seoul.go.kr/',
		source: '서울시',
		ageRange: '19~34세',
		region: '서울'
	},
	{
		id: 'youth-startup-fund',
		title: '청년창업사관학교',
		description: '유망 창업 아이템 보유 청년에게 사업화 자금·교육 지원',
		category: 'startup',
		url: 'https://start.kosmes.or.kr/',
		source: '중소벤처기업부',
		ageRange: '만 39세 이하',
		region: '전국'
	},
	{
		id: 'tips-program',
		title: 'TIPS (민간투자주도형 기술창업지원)',
		description: '엔젤투자 연계 R&D 자금 최대 5억원 지원',
		category: 'startup',
		url: 'https://www.jointips.or.kr/',
		source: '중소벤처기업부',
		region: '전국'
	},
	{
		id: 'youth-startup-support',
		title: '예비창업패키지',
		description: '예비 창업자 대상 사업화 자금 최대 1억원 지원',
		category: 'startup',
		url: 'https://www.k-startup.go.kr/',
		source: '중소벤처기업부',
		ageRange: '만 39세 이하',
		region: '전국'
	}
];
