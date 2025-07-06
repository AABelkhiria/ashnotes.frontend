import { writable } from 'svelte/store';

export const theme = writable('light');

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';
		localStorage.setItem('theme', newTheme);
		return newTheme;
	});
}
