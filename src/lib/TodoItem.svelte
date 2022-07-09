<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { todos, type TodoItem } from '$lib/stores/todoStore';
	import { fly } from 'svelte/transition';
	import DeleteIcon from './DeleteIcon.svelte';
	import Editor from './Editor.svelte';

	export let todo: TodoItem;

	let editing = false;

	let checked = todo.completed;

	const toggleTodo = (id: string) => {
		todos.update((oldValues) =>
			oldValues.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
		);
	};

	const removeTodo = (id: string) => {
		todos.update((oldValues) => oldValues.filter((todo) => todo.id !== id));
	};
</script>

<section class="todo-container" transition:fly={{ duration: 300 }}>
	<input
		type="checkbox"
		class="checkbox"
		aria-label="Check task"
		on:change={() => {
			toggleTodo(todo.id);
		}}
		bind:checked
	/>

	<span class="inline">
		<!-- {#if editing} -->
		<section class="editor-selected">
			<Editor
				config={{
					task: todo
				}}
				onBlur={() => (editing = false)}
				onFocus={() => (editing = true)}
			/>
		</section>
		<!-- {:else}
			<span
				class:checked
				on:click|stopPropagation={() => {
					editing = true;
				}}>{@html todo.content}</span
			>
		{/if} -->
	</span>
	<div class="btn-group">
		<button
			class="btn"
			on:click|stopPropagation={() => {
				removeTodo(todo.id);
			}}
		>
			<DeleteIcon width={16} height={16} />
		</button>
	</div>
</section>

<style lang="scss">
	.inline {
		display: inline-block;
	}

	.checkbox {
		display: inline-block;
		margin-right: 12px;
	}

	:global(.editor-selected) {
		// take the current background color and make it lighter

		:global(*) {
			padding: 0;
			margin-left: 0;
			width: auto;
		}
	}

	:global(.checked) {
		:global(*) {
			text-decoration: line-through;
		}
	}

	section {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
	}

	.todo-container {
		display: flex;
		flex-direction: row;
		justify-content: start;
		align-items: baseline;
		padding: 8px;
		border-bottom: 1px dashed var(--text-bright);
		width: 100%;
	}

	.todo {
		font-family: 'IVM Plex Mono', monospace;
		font-size: 18px;
		display: inline;
	}

	.btn-group {
		margin-left: auto;
	}

	.btn {
		display: block;
		color: var(--light);
		width: 100px;
		text-align: center;
	}
</style>
