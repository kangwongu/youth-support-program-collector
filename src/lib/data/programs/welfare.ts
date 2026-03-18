import type { Program } from '$lib/types';

export const welfarePrograms: Program[] = [
	{
		id: 'youth-mental-health',
		title: '청년 마음건강 지원',
		description: '전문 심리상담 서비스 최대 8회 무료 제공',
		category: 'welfare',
		url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004671',
		source: '복지로',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['상담', '심리', '멘탈', '우울', '마음', '건강'],
		content:
			'청년 마음건강 지원은 심리적 어려움을 겪는 청년에게 전문 심리상담 서비스를 무료로 제공하는 제도입니다. 전문 상담사와의 1:1 상담을 최대 8회까지 무료로 이용할 수 있습니다.\n\n우울, 불안, 대인관계, 진로 고민 등 다양한 심리적 문제에 대해 상담을 받을 수 있으며, 필요 시 정신건강의학과 전문의 진료 연계도 지원합니다. 상담 내용은 철저하게 비밀이 보장됩니다.',
		applicationMethod: '복지로 온라인 신청 또는 정신건강복지센터 방문 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['신분증']
	},
	{
		id: 'youth-activity-support',
		title: '청년수당(청년활동지원금)',
		description: '미취업 청년에게 월 50만원씩 최대 6개월 지원',
		category: 'welfare',
		url: 'https://youth.seoul.go.kr/',
		source: '서울시',
		ageRange: '19~34세',
		region: '서울',
		deadline: '상시',
		tags: ['수당', '지원금', '돈', '활동', '미취업', '생활비'],
		content:
			'청년수당은 서울시에 거주하는 미취업 청년에게 사회활동 참여를 지원하기 위해 월 50만원씩 최대 6개월간 지급하는 제도입니다. 취업 준비, 학습, 봉사활동 등 다양한 사회활동에 활용할 수 있습니다.\n\n신청 시 활동계획서를 제출하고, 매월 활동 내용을 보고하는 방식으로 운영됩니다. 대학 졸업 후 미취업 상태이거나 졸업 예정자 중 구직활동 중인 청년이 주 대상입니다.',
		applicationMethod: '서울청년포털 온라인 신청',
		applicationPeriod: '연 2회 모집',
		requiredDocuments: ['주민등록등본', '소득증빙서류', '활동계획서', '졸업(예정)증명서']
	},
	{
		id: 'youth-health-checkup',
		title: '청년 건강검진 지원',
		description: '만 19~39세 청년 대상 국가건강검진 및 추가 검진 지원',
		category: 'welfare',
		url: 'https://www.nhis.or.kr/',
		source: '국민건강보험공단',
		ageRange: '19~39세',
		region: '전국',
		deadline: '상시',
		tags: ['건강검진', '건강', '병원', '검진', '의료'],
		content:
			'청년 건강검진 지원은 건강관리의 사각지대에 놓인 청년들의 건강을 보호하기 위한 제도입니다. 국가건강검진(일반검진)을 2년마다 무료로 받을 수 있으며, 일부 지자체에서는 추가 검진 항목을 지원합니다.\n\n일반검진은 혈압, 혈당, 콜레스테롤, 간기능 등 기본 검사를 포함하며, 이상 소견 발견 시 추가 정밀검사도 지원됩니다. 직장가입자, 지역가입자, 피부양자 모두 대상입니다.',
		applicationMethod: '국민건강보험공단 홈페이지에서 검진기관 확인 후 방문',
		applicationPeriod: '해당 연도 12월 31일까지',
		requiredDocuments: ['신분증']
	},
	{
		id: 'seoul-youth-allowance-plus',
		title: '서울시 청년 교통비 지원',
		description: '서울시 거주 청년의 대중교통비 연 10만원 지원',
		category: 'welfare',
		url: 'https://youth.seoul.go.kr/',
		source: '서울시',
		ageRange: '19~34세',
		region: '서울',
		deadline: '상시',
		tags: ['교통비', '서울', '대중교통', '지하철', '버스'],
		content:
			'서울시 청년 교통비 지원사업은 서울시에 거주하는 청년의 대중교통비 부담을 줄여주는 제도입니다. 연 최대 10만원의 교통비를 티머니 카드로 지원받을 수 있습니다.\n\n서울시에 주민등록이 되어 있는 만 19~34세 청년이면 소득 수준에 관계없이 신청할 수 있습니다. 분기별로 신청하며, 승인 후 티머니 카드로 충전됩니다.',
		applicationMethod: '서울시 청년포털 또는 티머니 앱에서 온라인 신청',
		applicationPeriod: '분기별 신청',
		requiredDocuments: ['신분증', '티머니 카드 정보']
	},
	{
		id: 'gyeonggi-youth-welfare',
		title: '경기도 청년 면접수당',
		description: '취업 준비 중인 경기도 청년에게 면접 교통비 지원',
		category: 'welfare',
		url: 'https://youth.gg.go.kr/',
		source: '경기도',
		ageRange: '18~34세',
		region: '경기',
		deadline: '상시',
		tags: ['면접', '교통비', '취업준비', '경기도', '수당'],
		content:
			'경기도 청년 면접수당은 취업 준비 중인 경기도 거주 청년에게 면접 시 발생하는 교통비를 지원하는 제도입니다. 면접 1회당 최대 5만원, 연간 최대 5회까지 지원받을 수 있습니다.\n\n경기도에 주민등록이 되어 있고 구직활동 중인 청년이 대상이며, 실제 면접에 참석한 증빙을 제출하면 면접수당이 지급됩니다.',
		applicationMethod: '경기도 청년포털 온라인 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['주민등록등본', '면접확인서', '교통비 영수증']
	}
];
