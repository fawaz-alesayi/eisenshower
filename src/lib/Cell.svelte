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
	<strong class="title">{`${title} Tasks`}</strong>
	<AddTodo todoCategory={category} />
	<section class="tasks" aria-label="Tasks">
		<slot />
	</section>
</div>

<style lang="scss">
	@use './src/lib/theme.scss';

	strong {
		margin-top: 8px;
		margin: 12px 12px;
	}

	.tasks {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		margin-top: 12px;
		gap: 12px;
	}

	.cell {
		display: flex;
		flex-direction: column;
		justify-content: start;
		border: 1px dashed black;
		text-align: center;
		width: 100%;
		height: 300px;
		overflow-y: auto;
		overflow-x: auto;

		.title {
			font-family: 'IBM Plex Mono', monospace;
			font-style: normal;
			letter-spacing: 1.5px;
		}
	}
</style>
