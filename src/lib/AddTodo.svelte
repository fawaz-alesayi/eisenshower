<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { nanoid } from 'nanoid';
	import { todos, type TodoCategory } from '$lib/stores/todoStore';

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
</script>

<form
	on:submit|preventDefault={() => {
		if (todoContent.trim()) {
			addTodo(todoCategory);
		}
	}}
>
	<input type="text" bind:value={todoContent} placeholder="Start now. Type your first task." />
	<button type="submit" class="add-todo">Add</button>
</form>

<style lang="scss">
	@use './src/lib/theme.scss';

	input {
		height: 30px;
		margin-top: 32px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		font-size: 20px;
		padding: 12px;
		background-color: theme.$light;
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
