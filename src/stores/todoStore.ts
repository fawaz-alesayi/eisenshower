// src/stores/content.js
import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';

const KEY_NAME = 'eisenshower_todos';

function createTodoStore() {
	// Set the stored value or a sane default.
	const value = localStorage.getItem(KEY_NAME);
	const todos = JSON.parse(value);
	const store = writable<string[] | boolean>(browser && todos);

	const { subscribe } = derived(store, ($store) => {
		if ($store) return JSON.parse($store);
		return null;
	});

	return {
		subscribe,
		add: (item: string) =>
			store.update((todos) => {
				if (todos) return [...JSON.parse(todos), item];
			})
	};
}

export const todosStore = createTodoStore();
