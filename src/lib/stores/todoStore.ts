// src/stores/content.js
import { browser } from '$app/env';
import { persist, localStorage as localStorageStore } from '@macfja/svelte-persistent-store';
import { derived, writable } from 'svelte/store';

const KEY_NAME = 'eisenshower_todos';

export const todos = persist(writable<TodoItem[]>([]), localStorageStore(), KEY_NAME);

export type TodoItem = {
	id: string;
	content: string;
	completed: boolean;
	category: TodoCategory;
};

export type TodoCategory = "ImportantUrgent" | "ImportantNotUrgent" | "NotImportantUrgent" | "NotImportantNotUrgent";

export const importantUrgentTodos = derived(todos, $todos => $todos.filter(todo => todo.category === "ImportantUrgent"));
export const importantNotUrgentTodos = derived(todos, $todos => $todos.filter(todo => todo.category === "ImportantNotUrgent"));
export const notImportantUrgentTodos = derived(todos, $todos => $todos.filter(todo => todo.category === "NotImportantUrgent"));
export const notImportantNotUrgentTodos = derived(todos, $todos => $todos.filter(todo => todo.category === "NotImportantNotUrgent"));