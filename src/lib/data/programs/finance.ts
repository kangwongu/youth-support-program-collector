import type { Program } from '$lib/types';

export const financePrograms: Program[] = [
	{
		id: 'youth-savings',
		title: '청년도약계좌',
		description: '매월 최대 70만원 저축 시 정부 기여금 지급',
		category: 'finance',
		url: 'https://www.kinfa.or.kr/',
		source: '서민금융진흥원',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['저축', '적금', '목돈', '재테크', '돈', '금융'],
		content:
			'청년도약계좌는 청년의 중장기 자산형성을 지원하기 위한 정책형 금융상품입니다. 매월 최대 70만원을 납입하면 정부가 소득 수준에 따라 월 최대 2.4만원의 기여금을 지급하고, 이자소득 비과세 혜택도 제공합니다.\n\n5년 만기 상품으로, 만기 시 납입금+기여금+이자를 합산하여 약 5,000만원의 목돈 마련이 가능합니다. 개인소득 7,500만원 이하, 가구소득 중위 180% 이하인 청년이 가입 대상입니다.',
		applicationMethod: '11개 취급 은행 앱에서 비대면 가입',
		applicationPeriod: '상시',
		requiredDocuments: ['신분증', '소득증빙서류']
	},
	{
		id: 'youth-hope-savings',
		title: '청년희망적금',
		description: '매월 최대 50만원 저축 시 저축장려금 지급',
		category: 'finance',
		url: 'https://www.kinfa.or.kr/',
		source: '서민금융진흥원',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['적금', '저축', '장려금', '이자', '비과세', '목돈'],
		content:
			'청년희망적금은 청년의 자산 형성을 돕기 위해 저축장려금과 이자소득 비과세 혜택을 제공하는 정책형 적금상품입니다. 매월 최대 50만원을 2년간 저축하면 1년차 납입액의 2%, 2년차 납입액의 4% 저축장려금을 지급합니다.\n\n총급여 3,600만원 이하(종합소득 2,600만원 이하) 청년이 가입 대상이며, 만기 시 이자소득에 대해 비과세 혜택을 받을 수 있습니다.',
		applicationMethod: '시중 은행 앱에서 비대면 가입',
		applicationPeriod: '상시 (은행별 한도 소진 시 마감)',
		requiredDocuments: ['신분증', '소득증빙서류']
	},
	{
		id: 'youth-sunflower-loan',
		title: '햇살론 유스',
		description: '저소득·저신용 청년 대상 저금리 대출 (연 3.6% 이내)',
		category: 'finance',
		url: 'https://www.kinfa.or.kr/',
		source: '서민금융진흥원',
		ageRange: '만 34세 이하',
		region: '전국',
		deadline: '상시',
		tags: ['대출', '저금리', '저신용', '금융', '생활비', '학자금'],
		content:
			'햇살론 유스는 취업준비생, 사회초년생 등 소득이 적거나 신용이 낮은 청년에게 저금리로 생활안정자금을 대출해주는 제도입니다. 연 3.6% 이내 금리로 최대 1,200만원까지 대출이 가능합니다.\n\n대학(원)생, 미취업자, 중소기업 재직자 등이 대상이며, 대출 후 성실 상환 시 금리 인하(최대 3.0%p)와 서민금융교육 이수 시 추가 우대금리 혜택도 받을 수 있습니다.',
		applicationMethod: '서민금융진흥원 또는 취급 은행·저축은행 방문 신청',
		applicationPeriod: '상시',
		requiredDocuments: ['신분증', '소득증빙서류(해당 시)', '재학증명서 또는 재직증명서']
	},
	{
		id: 'youth-tax-deduction',
		title: '청년 소득세 감면',
		description: '중소기업 취업 청년의 소득세 90% 감면 (5년간)',
		category: 'finance',
		url: 'https://www.nts.go.kr/',
		source: '국세청',
		ageRange: '15~34세',
		region: '전국',
		deadline: '상시',
		tags: ['세금', '소득세', '감면', '절세', '중소기업', '연말정산'],
		content:
			'청년 소득세 감면 제도는 중소기업에 취업한 청년의 근로소득세를 5년간 90%(연 200만원 한도) 감면해주는 제도입니다. 군 복무 기간은 연령 계산에서 차감되므로 실질적으로 더 넓은 연령대가 혜택을 받을 수 있습니다.\n\n중소기업에 정규직·계약직으로 취업한 청년이라면 누구나 회사를 통해 신청할 수 있으며, 연말정산 시 감면된 세액만큼 환급받게 됩니다.',
		applicationMethod: '재직 중인 회사 인사/경리팀에 감면 신청서 제출',
		applicationPeriod: '상시 (입사 후 신청)',
		requiredDocuments: ['중소기업 취업자 소득세 감면 신청서', '주민등록등본', '병적증명서(해당 시)']
	},
	{
		id: 'youth-housing-fund',
		title: '청년 주택드림 청약통장',
		description: '청년 우대 금리가 적용되는 주택청약 전용 통장',
		category: 'finance',
		url: 'https://www.nhuf.molit.go.kr/',
		source: '주택도시기금',
		ageRange: '19~34세',
		region: '전국',
		deadline: '상시',
		tags: ['청약', '주택', '통장', '우대금리', '내집마련', '저축'],
		content:
			'청년 주택드림 청약통장은 무주택 청년에게 우대 금리를 제공하는 주택청약 전용 저축상품입니다. 일반 청약통장 대비 최대 0.7%p 높은 우대 금리가 적용되며, 이자소득 비과세 혜택도 제공됩니다.\n\n연소득 5,000만원 이하 무주택 청년이 가입 대상이며, 주택 구입 시 청약 당첨 우선권과 함께 저금리 대출 혜택도 연계됩니다. 납입 금액은 월 2만원~100만원까지 자유롭게 설정할 수 있습니다.',
		applicationMethod: '주택도시기금 수탁은행(우리·국민·신한·하나·농협) 방문 또는 앱 가입',
		applicationPeriod: '상시',
		requiredDocuments: ['신분증', '주민등록등본', '소득확인증명서']
	}
];
