import type { Program } from '$lib/types';

export const housingPrograms: Program[] = [
	{
		id: 'youth-housing-voucher',
		title: '청년 월세 한시 특별지원',
		description: '월세 부담 완화를 위해 월 최대 20만원씩 12개월 지원',
		category: 'housing',
		url: 'https://www.bokjiro.go.kr/ssis-tbu/twataa/wlfareInfo/moveTWAT52011M.do?wlfareInfoId=WLF00004661',
		source: '복지로',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['월세', '집', '임대', '주거비', '월세지원', '월세보조'],
		content:
			'청년 월세 한시 특별지원은 주거비 부담을 줄이기 위해 월세를 지원하는 정책입니다. 독립 거주 중인 무주택 청년 중 소득·자산 기준을 충족하는 경우 월 최대 20만원을 12개월간 지원받을 수 있습니다.\n\n실제 납부하는 월세액 범위 내에서 지원되며, 보증금 월세 환산액을 포함하여 월세가 일정 기준 이하인 경우에 해당합니다. 부모와 별도 거주하는 청년이 대상이며, 1인 가구 기준 중위소득 60% 이하가 소득 요건입니다.',
		applicationMethod: '온라인 신청 (복지로) 또는 주민센터 방문 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['주민등록등본', '소득증빙서류', '임대차계약서', '월세 이체 증빙']
	},
	{
		id: 'youth-jeonse-loan',
		title: '청년전용 버팀목전세자금대출',
		description: '전세보증금 대출 시 저금리 혜택 제공',
		category: 'housing',
		url: 'https://nhuf.molit.go.kr/',
		source: '주택도시기금',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['전세', '대출', '보증금', '집', '전세자금', '저금리'],
		content:
			'청년전용 버팀목전세자금대출은 청년의 주거 안정을 위해 저금리로 전세자금을 대출해주는 제도입니다. 연 1.8~2.7% 수준의 낮은 금리로 최대 2억원까지 대출이 가능합니다.\n\n무주택 세대주(또는 예비 세대주)인 청년이 대상이며, 보증금 3억원 이하 주택에 입주하는 경우 신청할 수 있습니다. 대출 기간은 최초 2년이며 4회 연장하여 최장 10년까지 이용 가능합니다.',
		applicationMethod: '우리은행, 국민은행, 신한은행 등 기금수탁은행 방문 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['주민등록등본', '소득증빙서류', '임대차계약서', '재직증명서']
	},
	{
		id: 'happy-housing',
		title: '행복주택',
		description: '대학생·청년·신혼부부를 위한 공공임대주택',
		category: 'housing',
		url: 'https://www.myhome.go.kr/',
		source: 'LH한국토지주택공사',
		ageRange: '19~39세',
		region: '전국',
		deadline: '상시',
		tags: ['임대', '공공주택', '집', '아파트', '주거', '신혼'],
		content:
			'행복주택은 대학생, 사회초년생, 신혼부부 등 젊은 계층의 주거 안정을 위해 직장·학교 인근에 공급하는 공공임대주택입니다. 시세 대비 60~80% 수준의 저렴한 임대료로 최대 6년(청년 기준)까지 거주할 수 있습니다.\n\n역세권, 대학 인근 등 교통이 편리한 곳에 위치하며, 커뮤니티 시설(카페, 도서관, 헬스장 등)이 함께 조성됩니다. 입주자 모집공고 시 LH 청약센터를 통해 신청 가능합니다.',
		applicationMethod: 'LH 청약센터 온라인 신청',
		applicationPeriod: '모집공고 시',
		requiredDocuments: ['주민등록등본', '소득증빙서류', '재학증명서 또는 재직증명서']
	},
	{
		id: 'seoul-youth-housing',
		title: '서울시 역세권 청년주택',
		description: '역세권에 공급하는 청년 특화 공공·민간임대주택',
		category: 'housing',
		url: 'https://soco.seoul.go.kr/',
		source: '서울주거포털',
		ageRange: '19~39세',
		region: '서울',
		deadline: '모집공고 시',
		tags: ['역세권', '임대', '서울', '원룸', '주택', '청년주택'],
		content:
			'서울시 역세권 청년주택은 지하철역 350m 이내 역세권에 공급되는 청년 특화 임대주택입니다. 공공임대는 시세 대비 30~50%, 민간임대는 시세 대비 85% 이하의 저렴한 임대료로 거주할 수 있습니다.\n\n1인 가구 청년은 물론, 신혼부부도 입주 대상이며 최대 6~10년까지 거주 가능합니다. 공유 라운지, 코워킹 스페이스, 세탁실 등 커뮤니티 시설이 포함되어 있어 편리한 주거환경을 제공합니다.',
		applicationMethod: '서울주거포털 온라인 신청',
		applicationPeriod: '모집공고 시',
		requiredDocuments: ['주민등록등본', '소득증빙서류', '재직증명서 또는 재학증명서']
	},
	{
		id: 'gyeonggi-youth-rental',
		title: '경기도 청년 기숙사',
		description: '직장 인근 저렴한 기숙사형 주거 제공',
		category: 'housing',
		url: 'https://housing.gg.go.kr/',
		source: '경기주택도시공사',
		ageRange: '19~34세',
		region: '경기',
		deadline: '모집공고 시',
		tags: ['기숙사', '경기도', '임대', '직장인', '주거'],
		content:
			'경기도 청년 기숙사는 직장 인근에서 저렴한 비용으로 거주할 수 있는 기숙사형 주택입니다. 월 15~25만원 수준의 저렴한 임대료로 최대 6년까지 거주가 가능합니다.\n\n경기도 소재 직장에 근무하는 청년 또는 경기도 소재 대학에 재학 중인 학생이 대상입니다. 공용 주방, 세탁실, 휴게실 등 공용시설이 제공되며 관리비도 저렴합니다.',
		applicationMethod: '경기주택도시공사 홈페이지 온라인 신청',
		applicationPeriod: '모집공고 시',
		requiredDocuments: ['주민등록등본', '재직증명서 또는 재학증명서', '소득증빙서류']
	},
	{
		id: 'youth-housing-deposit-loan',
		title: '청년 보증금 반환보증 보험료 지원',
		description: '전·월세 보증금 반환보증 보험료를 지원하여 보증금 미반환 걱정 해소',
		category: 'housing',
		url: 'https://www.myhome.go.kr/',
		source: '국토교통부',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['보증금', '보험', '전세', '월세', '보증보험'],
		content:
			'청년 보증금 반환보증 보험료 지원은 전·월세 계약 시 가입하는 보증금 반환보증 보험의 보험료를 지원해주는 제도입니다. 보증금을 돌려받지 못하는 상황을 예방할 수 있습니다.\n\n연소득 5천만원 이하 무주택 청년이 대상이며, 보증금 3억원 이하 주택에 대해 보험료의 최대 80%(연 30만원 한도)를 지원받을 수 있습니다.',
		applicationMethod: 'HUG(주택도시보증공사) 또는 SGI서울보증 가입 후 보험료 지원 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['주민등록등본', '임대차계약서', '소득증빙서류', '보증보험 가입 증빙']
	}
];
