const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

export function isExpired(deadline: string | null): boolean {
	if (!deadline || !DATE_REGEX.test(deadline)) return false;
	const end = new Date(deadline + 'T23:59:59');
	return new Date() > end;
}

export function formatDeadline(deadline: string | null): string | null {
	if (!deadline) return null;
	if (DATE_REGEX.test(deadline)) {
		return '~' + deadline.replace(/-/g, '.');
	}
	return deadline;
}
