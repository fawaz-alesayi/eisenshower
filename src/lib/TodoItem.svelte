<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { todos, type TodoItem } from '$lib/stores/todoStore';
	import { fly } from 'svelte/transition';
	import DeleteIcon from './DeleteIcon.svelte';

	export let todo: TodoItem;

	const removeTodo = async (id: string) => {
		todos.update((oldValues) => oldValues.filter((todo) => todo.id !== id));
	};

	const toggleTodo = async (id: string) => {
		todos.update((oldValues) =>
			oldValues.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	};
</script>

<section class="todo-container" transition:fly={{ duration: 300 }}>
	<div>
		{todo.completed ? '✅' : '❌'}
		<h5
			class="todo"
			on:click|stopPropagation={() => {
				toggleTodo(todo.id);
			}}
		>
			{todo.content}
		</h5>
	</div>
	<div class="btn-group">
		<button class="btn" on:click|stopPropagation={() => toggleTodo(todo.id)}>
			{todo.completed ? 'Undo' : '✔'}
		</button>
		<button
			class="btn"
			on:click|stopPropagation={() => {
				removeTodo(todo.id);
			}}
		>
			<DeleteIcon width={16} height={16} />
		</button>
	</div>
</section>

<style lang="scss">
	section {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
	}

	.todo-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
		padding: 8px;
		border-bottom: 1px solid var(--dark);
		width: 100%;
	}

	.todo {
		font-family: 'IVM Plex Mono', monospace;
		font-size: 18px;
		display: inline;
	}

	.btn {
		color: var(--light);
		width: 100px;
		text-align: center;
	}
</style>
