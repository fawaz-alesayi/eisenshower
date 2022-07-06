<script lang="ts">
	import Modal, { bind } from 'svelte-simple-modal';
	import { writable } from 'svelte/store';
	import AddTodo from './AddTodo.svelte';
	import { categoryNames } from './categoryToName';
	import type { TodoCategory } from './stores/todoStore';
	const modal = writable(null);
	export let category: TodoCategory;
	const title = categoryNames[category];
	const showModal = () => modal.set(bind(AddTodo, { todoCategory: category }));
</script>

<!-- <Modal
	show={$modal}
	styleBg={{
		justifyContent: 'start'
	}}
>
	<div class="cell" on:click={showModal}>
		<p class="title">{title}</p>
        <slot />
	</div>
</Modal> -->

<div class="cell">
	<p class="title">{title}</p>
	<AddTodo todoCategory={category}/>
	<slot />
</div>

<style lang="scss">
	@use './src/lib/theme.scss';

	.cell {
		border: 1px solid black;
		text-align: center;
		width: 100%;
		height: 300px;

		.title {
			font-family: 'IBM Plex Mono', monospace;
			font-style: normal;
			letter-spacing: 1.5px;
		}
	}
</style>
