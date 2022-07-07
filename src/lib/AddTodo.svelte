<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { nanoid } from 'nanoid';
	import { todos, type TodoCategory } from '$lib/stores/todoStore';
	import { Editor, Viewer } from 'bytemd';

	let todoContent: string;
	export let todoCategory: TodoCategory;

	const addTodo = async (category: TodoCategory) => {
		const todo = {
			id: nanoid(),
			content: todoContent,
			completed: false,
			category
		};
		todos.update((oldValues) => [...oldValues, todo]);
		todoContent = '';
	};

	let focused = false;
</script>

<form
	on:submit|preventDefault={() => {
		if (todoContent.trim()) {
			addTodo(todoCategory);
		}
	}}
>
	<input
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
	/>
		<!-- <template>
			<Editor value={todoContent} mode={"tab"} on:change={(e) => (todoContent = e.detail.value)} />
		</template> -->
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

	.input {
		height: 15px;
		margin-top: 12px;
		display: block;
		width: 90%;
		margin-left: $margin-start-input;
		margin-right: auto;
		font-size: 1rem;
		padding: $padding-input;
		background-color: var(--light);
		border: 0;
		&:focus {
			outline: none;
			box-shadow: none;
		}
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

	.add-todo {
		width: 140px;
		height: 30px;
		font-size: 14px;
		margin-top: 20px;
		display: block;
		margin-right: auto;
		margin-left: auto;
	}
</style>
