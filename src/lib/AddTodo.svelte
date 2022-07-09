<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import Editor from './Editor.svelte';
	import type { TodoCategory } from './stores/todoStore';

	export let todoCategory: TodoCategory;

	let focused = false;
	let hovered = false;
</script>

<form
	on:submit|preventDefault={() => {}}
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
>
	<Editor
		config={{
			category: todoCategory
		}}
		onFocus={() => {
			focused = true;
		}}
		onBlur={() => {
			focused = false;
		}}
	/>

	<hr class="hr" class:hovered class:focused />
</form>

<style lang="scss">
	$margin-start-input: 12px;
	$padding-input: 16px;

	form {
		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	.hr {
		height: 0.5px;
		width: 80%;
		border: none;
		margin-top: 0px;
		margin-left: $margin-start-input + $padding-input;
		background-color: var(--text-bright);
		transform: scale(0);
		transition: transform 0.2s ease-in-out;
	}

	.hovered {
		transform: scale(0.5);
		transition: transform 0.1s ease-in-out;
	}

	.focused {
		transform: scale(1);
		transition: transform 0.2s ease-in-out;
	}
</style>
