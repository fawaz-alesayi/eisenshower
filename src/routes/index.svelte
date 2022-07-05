<script lang="ts">
	import AddTodo from '../lib/AddTodo.svelte';

	import TodoItem from '../lib/TodoItem.svelte';

	import '@fontsource/ibm-plex-sans';
	import { todos } from '$lib/stores/todoStore';
	import EisenhowerMatrix from '$lib/eisenhowerMatrix.svelte';
	import { dndzone } from 'svelte-dnd-action';

	let items = $todos;
</script>

<h1>Eisenshower</h1>

<h2>Do more work by setting your priorities straight.</h2>

<section>
	<q> What is urgent is seldom important and what is important is seldom urgent.</q>
	<span> - Dwight Eisenhower, 34th U.S. President</span>
</section>


<section use:dndzone={{ items }}>
	{#each $todos as todo (todo.id)}
		<TodoItem {todo} />
	{/each}
</section>

<h3>Add your tasks</h3>

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
</style>
