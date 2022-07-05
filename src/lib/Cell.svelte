<script lang="ts">
	import Modal, { bind } from 'svelte-simple-modal';
	import { writable } from 'svelte/store';
	import AddTodo from './AddTodo.svelte';
	import type { TodoCategory } from './stores/todoStore';
	const modal = writable(null);
	export let category: TodoCategory;
	const showModal = () => modal.set(bind(AddTodo, { todoCategory: category }));
</script>

<Modal
	show={$modal}
	styleBg={{
		justifyContent: 'start'
	}}
>
	<div class="bordered" on:click={showModal}>
		<!--Add Slots-->
		<slot />
	</div>
</Modal>

<style lang="scss">
	@use './src/lib/theme.scss';

	.bordered {
		border: 1px solid black;
		text-align: center;

		// :global() is needed because slot
		h4 :global() {
			font-family: 'IBM Plex Sans', sans-serif;
			color: theme.$dark;
			font-size: 14px;
		}
	}
</style>
