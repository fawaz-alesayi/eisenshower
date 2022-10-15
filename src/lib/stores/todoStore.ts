// src/stores/content.js
import { browser } from '$app/environment';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';
import { nanoid } from 'nanoid';
import { derived, writable } from 'svelte/store';

const KEY_NAME = 'eisenshower_todos';

export const todos = persist(writable<TodoItem[]>([]), createLocalStorage(), KEY_NAME);

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

export const addTodo = (todoContent: string, category: TodoCategory) => {
	const todo = {
		id: nanoid(),
		content: todoContent,
		completed: false,
		category
	};
	todos.update((oldValues) => [...oldValues, todo]);
};

export const updateTodo = (newTodo: TodoItem) => {
	todos.update((oldValues) => {
		return oldValues.map(todo => todo.id === newTodo.id ? newTodo : todo);
	});
}