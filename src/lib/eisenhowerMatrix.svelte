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
		<h4>Urgent</h4>
		<h4>Important</h4>
		{#each $importantUrgentTodos as todo}
			<TodoItem {todo} />
		{/each}
	</Cell>
	<Cell category="ImportantNotUrgent">
		<h4>Not Urgent</h4>
		<h4>Important</h4>
		{#each $importantNotUrgentTodos as todo}
			<TodoItem {todo} />
		{/each}
	</Cell>
	<Cell category="NotImportantUrgent">
		<h4>Urgent</h4>
		<h4>Not Important</h4>
		{#each $notImportantUrgentTodos as todo}
			<TodoItem {todo} />
		{/each}
	</Cell>
	<Cell category="NotImportantNotUrgent">
		<h4>Not Urgent</h4>
		<h4>Not Important</h4>
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
