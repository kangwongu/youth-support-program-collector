import type { Program } from '$lib/types';

export const startupPrograms: Program[] = [
	{
		id: 'youth-startup-fund',
		title: '청년창업사관학교',
		description: '유망 창업 아이템 보유 청년에게 사업화 자금·교육 지원',
		category: 'startup',
		url: 'https://start.kosmes.or.kr/',
		source: '중소벤처기업부',
		ageRange: '만 39세 이하',
		region: '전국',
		deadline: '상시',
		tags: ['창업', '사업', '자금', '스타트업', '사업화', '교육'],
		content:
			'청년창업사관학교는 혁신적인 창업 아이템을 보유한 청년 예비창업자를 선발하여 창업 전 과정을 원스톱으로 지원하는 프로그램입니다. 사업화 자금 최대 1억원, 창업 공간, 전문 멘토링을 제공합니다.\n\n약 10개월간 입교하여 시제품 제작, 마케팅, 투자유치 등 체계적인 창업 교육과 실전 창업 지원을 받을 수 있습니다. 전국 주요 도시에 캠퍼스가 운영되고 있습니다.',
		applicationMethod: '청년창업사관학교 홈페이지에서 온라인 접수',
		applicationPeriod: '연 2회 모집 (상·하반기)',
		requiredDocuments: ['사업계획서', '신분증', '졸업(예정)증명서']
	},
	{
		id: 'tips-program',
		title: 'TIPS (민간투자주도형 기술창업지원)',
		description: '엔젤투자 연계 R&D 자금 최대 5억원 지원',
		category: 'startup',
		url: 'https://www.jointips.or.kr/',
		source: '중소벤처기업부',
		region: '전국',
		deadline: '상시',
		tags: ['투자', 'R&D', '기술', '스타트업', '엔젤', '벤처'],
		content:
			'TIPS는 민간 엔젤투자자(운영사)가 유망 기술 창업팀을 발굴·투자하면 정부가 R&D 자금을 매칭 지원하는 프로그램입니다. R&D 자금 최대 5억원, 창업사업화 자금 1억원 등을 지원받을 수 있습니다.\n\n글로벌 시장을 목표로 하는 혁신 기술 기반 스타트업이 주 대상이며, TIPS 운영사(약 70개)를 통해 투자를 유치한 후 정부 지원을 받는 구조입니다. 후속 투자 연계율도 높아 성장 가능성이 큰 프로그램입니다.',
		applicationMethod: 'TIPS 운영사에 직접 투자 제안 후 추천을 통해 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['사업계획서', '기술설명서', '법인등기부등본']
	},
	{
		id: 'youth-startup-support',
		title: '예비창업패키지',
		description: '예비 창업자 대상 사업화 자금 최대 1억원 지원',
		category: 'startup',
		url: 'https://www.k-startup.go.kr/',
		source: '중소벤처기업부',
		ageRange: '만 39세 이하',
		region: '전국',
		deadline: '상시',
		tags: ['창업', '예비창업', '자금', '사업화', '스타트업'],
		content:
			'예비창업패키지는 혁신적인 기술 아이디어를 보유한 예비 창업자에게 사업화에 필요한 자금과 교육을 지원하는 프로그램입니다. 시제품 제작, 마케팅, 지식재산권 확보 등에 최대 1억원을 지원합니다.\n\n선정 후 약 8~10개월간 전담 멘토링, 사업화 교육, 네트워킹 기회 등을 제공받으며, 특화 분야(소셜벤처, 기술 등)별 트랙도 운영됩니다.',
		applicationMethod: 'K-Startup 홈페이지에서 온라인 접수',
		applicationPeriod: '연 1회 모집 (상반기)',
		requiredDocuments: ['사업계획서', '신분증']
	},
	{
		id: 'seoul-startup-hub',
		title: '서울창업허브 입주 지원',
		description: '서울 소재 스타트업에 사무공간 및 액셀러레이팅 프로그램 제공',
		category: 'startup',
		url: 'https://seoulstartuphub.com/',
		source: '서울산업진흥원',
		region: '서울',
		deadline: '수시 모집',
		tags: ['서울', '사무실', '코워킹', '액셀러레이팅', '입주'],
		content:
			'서울창업허브는 서울시가 운영하는 국내 최대 규모의 창업지원 공간으로, 유망 스타트업에 사무공간과 다양한 창업 지원 프로그램을 제공합니다. 마포구 공덕동에 위치하며 최대 3년간 입주할 수 있습니다.\n\n사무공간 외에도 액셀러레이팅 프로그램, 투자 연계, 글로벌 진출 지원, 네트워킹 행사 등 종합적인 창업 지원을 받을 수 있습니다.',
		applicationMethod: '서울창업허브 홈페이지에서 입주 신청',
		applicationPeriod: '수시 모집',
		requiredDocuments: ['사업계획서', '법인등기부등본', '사업자등록증']
	},
	{
		id: 'gyeonggi-startup-campus',
		title: '경기 스타트업 캠퍼스',
		description: '경기도 소재 초기 창업자 대상 사업화 자금 및 공간 지원',
		category: 'startup',
		url: 'https://www.gyeonggi.go.kr/',
		source: '경기도경제과학진흥원',
		ageRange: '만 39세 이하',
		region: '경기',
		deadline: '연 1회 모집',
		tags: ['경기도', '창업', '사무실', '자금', '교육', '초기창업'],
		content:
			'경기 스타트업 캠퍼스는 경기도에서 창업하려는 청년·예비창업자에게 사업화 공간과 자금을 지원하는 프로그램입니다. 입주 공간, 창업 멘토링, 사업화 자금 최대 5천만원을 지원합니다.\n\n판교, 광교, 시흥 등 경기도 주요 혁신거점에 캠퍼스가 위치해 있으며, 입주 기업 간 네트워킹과 투자 연계 프로그램도 활발하게 운영됩니다.',
		applicationMethod: '경기도경제과학진흥원 홈페이지에서 온라인 접수',
		applicationPeriod: '연 1~2회 모집',
		requiredDocuments: ['사업계획서', '신분증', '사업자등록증(기창업자)']
	}
];
