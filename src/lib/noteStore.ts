import { writable } from 'svelte/store';

export const refreshTrigger = writable(0);

export function triggerRefresh() {
	refreshTrigger.update((n) => n + 1);
}