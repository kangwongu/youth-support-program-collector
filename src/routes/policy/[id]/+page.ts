import { programs } from '$lib/data/programs';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const prerender = true;

export function entries() {
	return programs.map((p) => ({ id: p.id }));
}

export const load: PageLoad = ({ params }) => {
	const program = programs.find((p) => p.id === params.id);
	if (!program) error(404, '정책을 찾을 수 없습니다');
	return { program };
};
