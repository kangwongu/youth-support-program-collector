import type { Program } from '$lib/types';

export const jobsPrograms: Program[] = [
	{
		id: 'kwork-youth',
		title: '국민취업지원제도',
		description: '취업 지원 서비스와 구직촉진수당 월 50만원 지급',
		category: 'jobs',
		url: 'https://www.work24.go.kr/ua/z/z/1300/selectEmssRqutIntro.do',
		source: '고용24',
		ageRange: '15~69세',
		region: '전국',
		deadline: '상시',
		tags: ['취업', '구직', '수당', '돈', '취준', '구직활동'],
		content:
			'국민취업지원제도는 취업을 원하는 국민에게 취업지원서비스와 생활안정 지원을 함께 제공하는 한국형 실업부조입니다. 1유형은 구직촉진수당(월 50만원, 6개월)을, 2유형은 취업활동비용을 지원합니다.\n\n직업상담, 직업훈련, 일경험 프로그램, 취업알선 등 맞춤형 취업지원서비스를 받을 수 있으며, 취업에 성공하면 취업성공수당(최대 150만원)도 추가 지급됩니다.',
		applicationMethod: '온라인 신청 (고용24) 또는 고용센터 방문 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['신분증', '구직신청서', '소득·재산 증빙서류']
	},
	{
		id: 'youth-internship',
		title: '청년인턴(체험형·채용형)',
		description: '공공기관 및 중소기업 인턴십 기회 제공',
		category: 'jobs',
		url: 'https://yw.work24.go.kr/main.do',
		source: '고용24',
		ageRange: '15~34세',
		region: '전국',
		deadline: '2025-12-31',
		tags: ['인턴', '취업', '경력', '직장', '채용', '체험'],
		content:
			'청년인턴제는 미취업 청년에게 공공기관 및 중소·중견기업에서의 인턴 근무 기회를 제공하는 제도입니다. 체험형은 직무 체험 목적으로 운영되며, 채용형은 정규직 전환을 목표로 합니다.\n\n체험형 인턴은 최대 6개월간 근무하며 월 급여를 받을 수 있고, 채용형은 인턴 후 정규직으로 전환 시 기업과 청년 모두에게 추가 지원금이 지급됩니다.',
		applicationMethod: '고용24 청년고용지원 사이트에서 참여기업 확인 후 지원',
		applicationPeriod: '기업별 상이',
		requiredDocuments: ['이력서', '자기소개서', '졸업(예정)증명서']
	},
	{
		id: 'seoul-youth-job',
		title: '서울시 뉴딜일자리',
		description: '서울시 공공·민간 분야 청년 일자리 제공 (최대 11개월)',
		category: 'jobs',
		url: 'https://job.seoul.go.kr/',
		source: '서울일자리포털',
		ageRange: '18~34세',
		region: '서울',
		deadline: '상시',
		tags: ['서울', '공공일자리', '근무', '급여', '경험'],
		content:
			'서울시 뉴딜일자리는 미취업 청년에게 서울시 및 산하기관, 민간기업에서의 일경험 기회를 제공하는 사업입니다. 최대 11개월간 근무하며 월 약 210만원 수준의 급여를 받을 수 있습니다.\n\n행정, IT, 문화·예술, 환경, 복지 등 다양한 분야의 일자리가 제공되며, 근무 중 직무교육과 역량강화 프로그램도 함께 지원됩니다.',
		applicationMethod: '서울일자리포털 온라인 지원',
		applicationPeriod: '채용공고 시',
		requiredDocuments: ['이력서', '주민등록등본', '졸업(예정)증명서']
	},
	{
		id: 'gyeonggi-youth-job-bonus',
		title: '경기도 청년 노동자 통장',
		description: '일하는 청년에게 매월 저축 시 경기도가 매칭 지원금 지급',
		category: 'jobs',
		url: 'https://youth.gg.go.kr/',
		source: '경기도 청년포털',
		ageRange: '18~34세',
		region: '경기',
		deadline: '상시',
		tags: ['경기도', '저축', '지원금', '매칭', '노동자', '근로'],
		content:
			'경기도 청년 노동자 통장은 경기도에 거주하며 일하는 청년이 매월 10만원을 저축하면 경기도가 매월 10만원의 매칭금을 적립해주는 자산형성 프로그램입니다.\n\n3년간 참여 시 본인 저축액 360만원과 매칭금 360만원을 합해 총 720만원을 수령할 수 있습니다. 중위소득 100% 이하 가구의 근로 청년이 대상입니다.',
		applicationMethod: '경기도 청년포털 온라인 신청',
		applicationPeriod: '연 1회 모집 (상반기)',
		requiredDocuments: ['주민등록등본', '소득증빙서류', '재직증명서', '근로계약서']
	},
	{
		id: 'youth-tomorrow-fill',
		title: '청년내일채움공제',
		description: '중소기업 취업 청년의 자산 형성을 위한 3년 만기 공제',
		category: 'jobs',
		url: 'https://www.work.go.kr/youngtomorrow/main.do',
		source: '고용노동부',
		ageRange: '15~34세',
		region: '전국',
		deadline: '상시',
		tags: ['중소기업', '공제', '목돈', '자산', '취업', '적립'],
		content:
			'청년내일채움공제는 중소기업에 정규직으로 취업한 청년의 장기근속과 자산형성을 돕기 위한 공제사업입니다. 청년·기업·정부가 함께 공제금을 적립하여 3년 후 만기 시 약 1,200만원 이상을 수령할 수 있습니다.\n\n청년은 월 12만원, 기업은 월 12만원, 정부는 월 12만원을 적립하며, 만기까지 근속 시 전액 지급됩니다. 중소기업 인력난 해소와 청년 자산형성을 동시에 지원합니다.',
		applicationMethod: '고용24 또는 워크넷에서 온라인 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['근로계약서', '재직증명서', '주민등록등본']
	}
];
