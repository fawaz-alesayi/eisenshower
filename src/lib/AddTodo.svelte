<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { nanoid } from 'nanoid';
	import { todos, type TodoCategory } from '$lib/stores/todoStore';
	import { scale } from 'svelte/transition';

	let todoContent: string;
	export let todoCategory: TodoCategory;

	const addTodo = async (category: TodoCategory) => {
		const todo = {
			id: nanoid(),
			content: todoContent,
			completed: false,
			category
		};
		todos.update((oldValues) => [...oldValues, todo]);
		todoContent = '';
	};

	let focused = false;
</script>

<form
	on:submit|preventDefault={() => {
		if (todoContent.trim()) {
			addTodo(todoCategory);
		}
	}}
>
	<input
		type="text"
		bind:value={todoContent}
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		placeholder="Start now. Type your first task."
	/>

	{#if focused}
		<hr transition:scale />
	{/if}
</form>

<style lang="scss">
	@use './src/lib/theme.scss';

	input {
		height: 15px;
		margin-top: 12px;
		display: block;
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		font-size: 14px;
		padding: 8px;
		background-color: theme.$light;
		border: 0;
	}

	hr {
		height: 0.5px;
		width: 80%;
		border: none;
		background-color: theme.$dark;
	}

	.add-todo {
		width: 140px;
		height: 30px;
		font-size: 14px;
		margin-top: 20px;
		display: block;
		margin-right: auto;
		margin-left: auto;
	}
</style>
