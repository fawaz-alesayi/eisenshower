<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { todos, type TodoItem } from '$lib/stores/todoStore';

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

<section>
	<h5
		class="todo"
		on:click={() => {
			toggleTodo(todo.id);
		}}
	>
		{todo.content}
	</h5>
	{todo.completed ? '✅' : '❌'}
	<button class="complete-todo" on:click={() => toggleTodo(todo.id)}>
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
</section>

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
