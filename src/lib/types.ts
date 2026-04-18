export type Category = 'housing' | 'jobs' | 'education' | 'welfare' | 'startup' | 'finance';

export interface FaqItem {
	q: string;
	a: string;
}

export interface Program {
	id: string;
	title: string;
	description: string;
	category: Category;
	url: string;
	source: string;
	ageRange?: string;
	region?: string;
	deadline: string | null;
	tags: string[];
	content: string;
	dateModified: string;
	applicationMethod?: string;
	applicationPeriod?: string;
	requiredDocuments?: string[];
	faq?: FaqItem[];
}

export interface CategoryInfo {
	id: Category;
	label: string;
	emoji: string;
	color: string;
}
