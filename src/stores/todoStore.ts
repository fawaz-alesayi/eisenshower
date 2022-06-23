// src/stores/content.js
import { browser } from '$app/env';
import { derived, writable } from 'svelte/store';

const KEY_NAME = 'eisenshower_todos';

function createTodoStore() {
	// Set the stored value or a sane default.
	const value = localStorage.getItem(KEY_NAME);

	let todos = null;
	if (value) {
	todos = JSON.parse(value);
	}

	const store = writable<string[]>(browser && todos);

	return {
		subscribe: store.subscribe,
		add: (item: string) =>
			store.update((todos) => {
				if (todos) return [...JSON.parse(todos), item];
			})
	};
}

export const todosStore = createTodoStore();
