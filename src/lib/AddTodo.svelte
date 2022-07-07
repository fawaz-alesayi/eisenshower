<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { nanoid } from 'nanoid';
	import { todos, type TodoCategory } from '$lib/stores/todoStore';
	import Editor from './Editor.svelte';

	let todoContent: string = '';

	export let todoCategory: TodoCategory;

	const addTodo = async (todoContent: string, category: TodoCategory) => {
		const todo = {
			id: nanoid(),
			content: todoContent,
			completed: false,
			category
		};
		todos.update((oldValues) => [...oldValues, todo]);
	};

	let focused = false;
</script>

<form
	on:submit|preventDefault={() => {
		if (todoContent.trim()) {
			addTodo(todoContent, todoCategory);
		}
	}}
>
	<!-- <input
		class="input"
		type="text"
		aria-label="Add todo"
		autocomplete="off"
		data-lpignore="true"
		data-form-type="other"
		bind:value={todoContent}
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		placeholder="Start now. Type your first task."
	/> -->
	<Editor
		{todoContent}
		onFocus={() => {
			focused = true;
		}}
		onBlur={() => {
			focused = false;
		}}
	/>

	<hr class="hr" class:focused />
</form>

<style lang="scss">
	$margin-start-input: 12px;
	$padding-input: 16px;

	form {
		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	.hr {
		height: 0.5px;
		width: 80%;
		border: none;
		margin-top: 0px;
		margin-left: $margin-start-input + $padding-input;
		background-color: var(--text-bright);
		transform: scale(0);
		transition: transform 0.2s ease-in-out;
	}

	.focused {
		transform: scale(1);
		transition: transform 0.2s ease-in-out;
	}
</style>
