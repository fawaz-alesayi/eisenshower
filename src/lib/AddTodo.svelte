<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { getContext } from 'svelte';
	import Editor from './Editor.svelte';
	import type { TodoCategory } from './stores/todoStore';
	let todoContent: string = '';

	export let todoCategory: TodoCategory

	let focused = false;
</script>

<form on:submit|preventDefault={() => {}}>
	<!-- <input
		class="input"
		type="text"
		aria-label="Add todo"
		autocomplete="off"
		data-lpignore="true"
		data-form-type="other"
		bind:value={todoContent}
		on:focus={() => (focused = true)}
		on:blur={() => (focused = false)}
		placeholder="Start now. Type your first task."
	/> -->
	<Editor
		{todoCategory}
		onFocus={() => {
			focused = true;
		}}
		onBlur={() => {
			focused = false;
		}}
	/>

	<hr class="hr" class:focused />
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

	.focused {
		transform: scale(1);
		transition: transform 0.2s ease-in-out;
	}
</style>
