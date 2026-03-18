import type { Program } from '$lib/types';

export const educationPrograms: Program[] = [
	{
		id: 'youth-digital-academy',
		title: '청년 디지털 아카데미',
		description: 'IT·디지털 직무 교육 및 취업 연계 프로그램',
		category: 'education',
		url: 'https://www.work24.go.kr/hr/a/a/1100/trnnCrsInf2.do?pageId=6',
		source: '고용24',
		ageRange: '18~34세',
		region: '전국',
		deadline: '2025-06-30',
		tags: ['IT', '개발', '코딩', '디지털', '프로그래밍', '교육'],
		content:
			'청년 디지털 아카데미는 IT·디지털 분야 전문 인력 양성을 위한 교육 프로그램입니다. 웹 개발, 데이터 분석, AI, 클라우드 등 다양한 디지털 직무 교육과정을 제공하며, 교육 후 취업 연계까지 지원합니다.\n\n교육 기간은 과정에 따라 3~12개월이며, 교육비 전액 지원은 물론 훈련장려금도 별도 지급됩니다. 실무 프로젝트 기반 교육으로 현업 역량을 갖출 수 있습니다.',
		applicationMethod: '고용24 훈련과정 검색 후 온라인 수강 신청',
		applicationPeriod: '과정별 상이',
		requiredDocuments: ['국민내일배움카드', '신분증']
	},
	{
		id: 'kmooc',
		title: 'K-MOOC (한국형 온라인 공개강좌)',
		description: '대학 수준 온라인 강좌 무료 수강',
		category: 'education',
		url: 'http://www.kmooc.kr/',
		source: '교육부',
		region: '전국',
		deadline: '상시',
		tags: ['강의', '온라인', '무료', '대학', '학습', '공부'],
		content:
			'K-MOOC는 교육부가 운영하는 한국형 온라인 공개강좌 플랫폼입니다. 국내 유수 대학의 우수 강좌를 누구나 무료로 수강할 수 있으며, 이수증도 발급받을 수 있습니다.\n\n인문, 사회, 공학, 자연과학, 예술 등 1,000개 이상의 강좌가 개설되어 있습니다. 학점은행제를 통해 학점으로도 인정받을 수 있어 학위 취득에도 활용 가능합니다.',
		applicationMethod: 'K-MOOC 홈페이지에서 회원가입 후 수강 신청',
		applicationPeriod: '상시',
		requiredDocuments: []
	},
	{
		id: 'youth-tomorrow-learning-card',
		title: '국민내일배움카드',
		description: '직업 훈련비 최대 500만원 지원',
		category: 'education',
		url: 'https://www.work24.go.kr/cm/c/f/1100/selecSystInfo.do?systId=SI00000351&systClId=SC00000004',
		source: '고용24',
		ageRange: '15세 이상',
		region: '전국',
		deadline: '상시',
		tags: ['훈련', '자격증', '학원', '교육비', '배움', '직업훈련'],
		content:
			'국민내일배움카드는 국민 스스로 직업능력개발훈련을 실시할 수 있도록 훈련비를 지원하는 제도입니다. 카드 발급 후 5년간 최대 500만원의 훈련비를 지원받을 수 있습니다.\n\n자격증 취득, 직무역량 향상, 전직·이직 준비 등 다양한 목적의 훈련과정을 수강할 수 있습니다. 훈련비의 45~85%를 국비로 지원하며, 140시간 이상 훈련 시 훈련장려금도 지급됩니다.',
		applicationMethod: '고용24에서 온라인 신청 또는 고용센터 방문 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['신분증']
	},
	{
		id: 'seoul-youth-mentoring',
		title: '서울시 청년 멘토링 프로그램',
		description: '현직 전문가와 1:1 멘토링으로 진로·취업 역량 강화',
		category: 'education',
		url: 'https://youth.seoul.go.kr/',
		source: '서울시',
		ageRange: '19~34세',
		region: '서울',
		deadline: '상시',
		tags: ['멘토링', '진로', '상담', '네트워킹', '서울', '커리어'],
		content:
			'서울시 청년 멘토링 프로그램은 각 분야 현직 전문가를 멘토로 매칭하여 진로 탐색, 취업 준비, 직무 역량 강화를 돕는 프로그램입니다. 약 3~6개월간 1:1 또는 소그룹 멘토링이 진행됩니다.\n\nIT, 금융, 마케팅, 디자인, 공공 분야 등 다양한 직군의 멘토가 참여하며, 정기 모임과 네트워킹 행사도 함께 운영됩니다.',
		applicationMethod: '서울청년포털 온라인 신청',
		applicationPeriod: '연 2회 모집 (상·하반기)',
		requiredDocuments: ['신분증', '재학증명서 또는 졸업증명서']
	},
	{
		id: 'youth-global-competency',
		title: '해외취업지원(K-Move 스쿨)',
		description: '해외 취업을 위한 어학·직무 교육 및 취업 알선 지원',
		category: 'education',
		url: 'https://www.worldjob.or.kr/',
		source: '한국산업인력공단',
		ageRange: '만 34세 이하',
		region: '전국',
		deadline: '과정별 상이',
		tags: ['해외취업', '어학', '글로벌', '영어', '연수', '해외'],
		content:
			'K-Move 스쿨은 해외 취업을 희망하는 청년에게 어학, 직무교육, 문화적응 교육을 제공하고 해외 기업에 취업을 알선하는 프로그램입니다. 교육비 전액 무료이며 교육기간 중 훈련수당도 지급됩니다.\n\nIT, 의료, 외식, 항공, 호텔 등 다양한 직종의 해외 취업 과정이 운영되며, 일본, 미국, 캐나다, 호주, 동남아 등 다양한 국가로의 취업을 지원합니다.',
		applicationMethod: '월드잡플러스 홈페이지에서 과정별 온라인 신청',
		applicationPeriod: '과정별 상이',
		requiredDocuments: ['이력서(영문)', '졸업(예정)증명서', '어학성적 증명서']
	}
];
