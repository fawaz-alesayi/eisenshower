<script lang="ts">
	import '@fontsource/ibm-plex-sans';
	import { nanoid } from 'nanoid';
	import { todos } from '$lib/stores/todoStore';
	let todoContent: string;
</script>

<h1>Eisenshower</h1>

<h2>Do more work by setting your priorities straight.</h2>

<section>
	<q> What is urgent is seldom important and what is important is seldom urgent.</q>
	<span> - Dwight Eisenhower, 34th U.S. President</span>
</section>

<h3>Add your tasks</h3>
<form
	on:submit|preventDefault={() =>
		todos.update((oldValues) => [...oldValues, { content: todoContent, id: nanoid() }])}
>
	<input type="text" bind:value={todoContent} placeholder="Start now. Type your first task." />
	<button type="submit" class="add-todo">Add</button>
</form>

{#each $todos as todo (todo.id)}
	<h5>{todo.content}</h5>
	<button
		on:click={() =>
			todos.update((oldValues) => [...oldValues.filter((element) => element.id != todo.id)])}
		>Remove</button
	>
{/each}

<h3>Order Them</h3>

<style lang="scss">
	$dark: #03045e;
	$light: #caf0f8;

	h1 {
		font-family: 'IBM Plex Mono', monospace;
		color: $dark;
		text-align: center;
	}

	h2 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 42px;
		color: $dark;
	}

	h3 {
		font-family: 'IBM Plex Sans', sans-serif;
		color: $dark;
		font-size: 24px;
	}

	section {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 21px;
	}

	input {
		height: 30px;
		width: 75vw;
		margin-top: 32px;
		display: block;
		margin-left: auto;
		margin-right: auto;
		font-size: 20px;
		padding: 12px;
		background-color: $light;
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
