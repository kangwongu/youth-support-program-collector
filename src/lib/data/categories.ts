import type { CategoryInfo } from '$lib/types';

export const categories: CategoryInfo[] = [
	{ id: 'housing', label: '주거', emoji: '🏠', color: '#3B82F6' },
	{ id: 'jobs', label: '일자리', emoji: '💼', color: '#10B981' },
	{ id: 'education', label: '교육', emoji: '📚', color: '#8B5CF6' },
	{ id: 'welfare', label: '복지', emoji: '🤝', color: '#F59E0B' },
	{ id: 'startup', label: '창업', emoji: '🚀', color: '#EF4444' },
	{ id: 'finance', label: '금융', emoji: '💰', color: '#06B6D4' }
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
	string,
	CategoryInfo
>;
