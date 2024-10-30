import { writable } from 'svelte/store';

// Define a writable store to hold whether the header should be scrolled.
export const scrolled = writable(false);
