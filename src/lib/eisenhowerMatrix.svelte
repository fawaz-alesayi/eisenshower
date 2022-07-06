<script lang="ts">
	import {
		importantUrgentTodos,
		importantNotUrgentTodos,
		notImportantNotUrgentTodos,
		notImportantUrgentTodos,
		todos
	} from './stores/todoStore';
	import Cell from './Cell.svelte';
	import TodoItem from './TodoItem.svelte';
</script>

<section class="matrix-container">
	<button on:click={() => ($todos = [])} class="delete-tasks">Delete All</button>
	<div class="container">
		<Cell category="ImportantUrgent">
			{#each $importantUrgentTodos as todo}
				<TodoItem {todo} />
			{/each}
		</Cell>
		<Cell category="ImportantNotUrgent">
			{#each $importantNotUrgentTodos as todo}
				<TodoItem {todo} />
			{/each}
		</Cell>
		<Cell category="NotImportantUrgent">
			{#each $notImportantUrgentTodos as todo}
				<TodoItem {todo} />
			{/each}
		</Cell>
		<Cell category="NotImportantNotUrgent">
			{#each $notImportantNotUrgentTodos as todo}
				<TodoItem {todo} />
			{/each}
		</Cell>
	</div>
</section>

<style lang="scss">
	// import scss file from index.svelte
	@use './src/lib/theme.scss';

	.matrix-container {
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		max-width: 1600px;

		.delete-tasks {
			text-align: right;
			font-family: 'IBM Plex Mono', monospace;
			color: #ff0000;
			background-color: theme.$light;
			height: auto;
			margin-right: 0;
			margin-left: auto;
		}
	}

	// a 2x2 grid of squares
	.container {
		margin: auto auto;
		display: grid;
		width: 100%;
		grid-template: repeat(2, 1fr) / repeat(2, 1fr);

		@media (max-width: 767px) {
			grid-template: repeat(1, 1fr) / repeat(1, 1fr);
		}
	}
</style>
