// src/stores/content.js
import { browser } from '$app/env';
import { persist, localStorage as localStorageStore } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

const KEY_NAME = 'eisenshower_todos';

export const todos = persist(writable<TodoItem[]>([]), localStorageStore(), KEY_NAME);

export type TodoItem = {
	id: string;
	content: string;
	completed: boolean;
};
