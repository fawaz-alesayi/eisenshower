<script lang="ts">
	// @ts-nocheck

	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import TextAlign from '@tiptap/extension-text-align';
	import PlaceHolder from '@tiptap/extension-placeholder';
	import { noEnterExtension } from './tiptap_extensions/noEnter';
	import type { TodoCategory } from './stores/todoStore';
	import { addTodo } from './stores/todoStore';

	let element: Element;
	let editor: Editor;

	export let onFocus: any = null;
	export let onBlur: any = null;
	export let todoCategory: TodoCategory;

	const add = async () => {
		if (editor.getText().trim().length > 0) {
			await addTodo(editor.getHTML(), todoCategory);
		}
	};

	onMount(async () => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				noEnterExtension.configure({
					handleEnter: () => {
						add();
						return true;
					}
				}),
				TextAlign.configure({
					defaultAlignment: 'left'
				}),
				PlaceHolder.configure({
					placeholder: 'Start now. Type your first task.'
				})
			],
			content: ``,
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
			onFocus: () => {
				if (onFocus) {
					onFocus();
				}
			},
			onBlur: () => {
				if (onBlur) {
					onBlur();
				}
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<!-- 
{#if editor}
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
		class:active={editor.isActive('heading', { level: 1 })}
	>
		H1
	</button>
	<button
		on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
		class:active={editor.isActive('heading', { level: 2 })}
	>
		H2
	</button>
	<button
		on:click={() => editor.chain().focus().setParagraph().run()}
		class:active={editor.isActive('paragraph')}
	>
		P
	</button>
{/if} -->

<div bind:this={element} />

<style lang="scss">
	$margin-start-input: 12px;
	$padding-input: 16px;

	:global(.ProseMirror p.is-editor-empty:first-child::before) {
		content: attr(data-placeholder);
		float: left;
		color: #adb5bd;
		pointer-events: none;
		height: 0;
	}

	:global(.ProseMirror) {
		display: block;
		width: 90%;
		margin-left: $margin-start-input;
		margin-right: auto;
		margin-bottom: 0;
		font-size: 1rem;
		padding: $padding-input;
		padding-bottom: 0;
		background-color: var(--light);
		text-align: start;
		border: 0;
		&:focus {
			outline: none;
			box-shadow: none;
		}
	}

	.is-editor-empty {
		color: white;
	}
</style>
