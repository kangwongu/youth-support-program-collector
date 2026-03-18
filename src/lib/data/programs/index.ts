import type { Program } from '$lib/types';
import { housingPrograms } from './housing';
import { jobsPrograms } from './jobs';
import { educationPrograms } from './education';
import { welfarePrograms } from './welfare';
import { startupPrograms } from './startup';
import { financePrograms } from './finance';

export const programs: Program[] = [
	...housingPrograms,
	...jobsPrograms,
	...educationPrograms,
	...welfarePrograms,
	...startupPrograms,
	...financePrograms
];
