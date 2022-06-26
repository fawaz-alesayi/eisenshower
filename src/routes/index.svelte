<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { nanoid } from 'nanoid';
	import { todos } from '$lib/stores/todoStore';
	import EisenhowerMatrix from '$lib/eisenhowerMatrix.svelte';
	let todoContent: string;

	const addTodo = async () => {
		const todo = {
			id: nanoid(),
			content: todoContent,
			completed: false
		};
		todos.update((oldValues) => [...oldValues, todo]);
		todoContent = '';
	};

	const removeTodo = async (id: string) => {
		todos.update((oldValues) => oldValues.filter((todo) => todo.id !== id));
	};

	const toggleTodo = async (id: string) => {
		todos.update((oldValues) =>
			oldValues.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	};
</script>

<h1>Eisenshower</h1>

<h2>Do more work by setting your priorities straight.</h2>

<section>
	<q> What is urgent is seldom important and what is important is seldom urgent.</q>
	<span> - Dwight Eisenhower, 34th U.S. President</span>
</section>

<h3>Add your tasks</h3>
<form
	on:submit|preventDefault={() => {
		if (todoContent.trim()) {
			addTodo();
		}
	}}
>
	<input type="text" bind:value={todoContent} placeholder="Start now. Type your first task." />
	<button type="submit" class="add-todo">Add</button>
</form>

{#each $todos as todo (todo.id)}
	<h5
		class="todo"
		draggable="true"
		on:dragstart={(event) => {
			event.dataTransfer.setData('text/plain', todo.id);
		}}
		on:dragend={(event) => {
			event.dataTransfer.clearData();
		}}
		on:click={() => {
			toggleTodo(todo.id);
		}}
	>
		{todo.content}
	</h5>
	{todo.completed ? '✅' : '❌'}
	<button class="complete-todo">
		{todo.completed ? 'Undo' : 'Complete'}
	</button>
	<button
		class="remove-todo"
		on:click={() => {
			removeTodo(todo.id);
		}}
	>
		✖
	</button>
{/each}

<h3>Order Them</h3>

<EisenhowerMatrix />

<style lang="scss">
	@use './src/lib/theme.scss';

	h1 {
		font-family: 'IBM Plex Mono', monospace;
		color: theme.$dark;
		text-align: center;
	}

	h2 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 42px;
		color: theme.$dark;
	}

	h3 {
		font-family: 'IBM Plex Sans', sans-serif;
		color: theme.$dark;
		font-size: 24px;
	}

	section {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
	}

	.todo {
		font-family: 'IVM Plex Mono', monospace;
		font-size: 18px;
		color: theme.$dark;
		display: inline;
	}

	input {
		height: 30px;
		width: 75vw;
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
