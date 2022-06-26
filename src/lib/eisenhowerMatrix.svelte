<script lang="ts">
	import type { TodoItem } from './stores/todoStore';
	import { todos } from '$lib/stores/todoStore';

	let urgentNotImportant: TodoItem[] = [];

	let handleDragEnter = (event: DragEvent) => {
		// get the dragged item and put it on top of the list
		const draggedItem = event.dataTransfer.getData('text/plain');
		if (draggedItem) {
			const item = $todos.find((todo) => todo.id === draggedItem);
			if (item) {
				// add the item to the top of the of urgentNotImportant list
				urgentNotImportant = [item, ...urgentNotImportant];
			}
		}
	};
</script>

<!--A 2x2 Grd of divs-->
<div class="container">
	<div class="bordered" on:dragenter|preventDefault|stopPropagation={handleDragEnter}>
		<h4>Urgent</h4>
		<h4>Important</h4>
		{#each urgentNotImportant as item (item.id)}
			<div
				class="todo"
				draggable="true"
				on:dragstart={(event) => {
					event.dataTransfer.setData('text/plain', item.id);
				}}
			>
				<h5>{item.content}</h5>
			</div>
		{/each}
	</div>
	<div class="bordered">
		<h4>Not Urgent</h4>
		<h4>Important</h4>
	</div>
	<div class="bordered">
		<h4>Urgent</h4>
		<h4>Not Important</h4>
	</div>
	<div class="bordered">
		<h4>Not Urgent</h4>
		<h4>Not Important</h4>
	</div>
</div>

<style lang="scss">
	// import scss file from index.svelte
	@use './src/lib/theme.scss';

	// a 2x2 grid of squares
	.container {
		display: grid;
		height: 200px;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
	}

	.bordered {
		border: 1px solid black;
		text-align: center;

		h4 {
			font-family: 'IBM Plex Sans', sans-serif;
			color: theme.$dark;
			font-size: 14px;
		}
	}
</style>
