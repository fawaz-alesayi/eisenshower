<script lang="ts">
	import {
		importantUrgentTodos,
		importantNotUrgentTodos,
		notImportantNotUrgentTodos,
		notImportantUrgentTodos
	} from './stores/todoStore';
	import Cell from './Cell.svelte';
	import TodoItem from './TodoItem.svelte';
</script>

<!--A 2x2 Grd of divs-->
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

<style lang="scss">
	// import scss file from index.svelte
	@use './src/lib/theme.scss';

	// a 2x2 grid of squares
	.container {
		margin: auto auto;
		display: grid;
		height: 200px;
		width: 100%;
		max-width: 800px;
		grid-template: repeat(2, 1fr) / repeat(2, 1fr);

		@media (max-width: 600px) {
			grid-template: repeat(1, 1fr) / repeat(1, 1fr);
		}
	}
</style>
