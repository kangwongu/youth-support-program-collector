export type Category = 'housing' | 'jobs' | 'education' | 'welfare' | 'startup';

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
}

export interface CategoryInfo {
	id: Category;
	label: string;
	emoji: string;
	color: string;
}
