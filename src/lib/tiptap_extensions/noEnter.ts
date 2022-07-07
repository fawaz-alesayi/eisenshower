import { Extension } from '@tiptap/core';
import { Plugin, PluginKey } from 'prosemirror-state';

interface Options {
	handleEnter?: () => any
}

export const noEnterExtension = Extension.create<Options, any>({
	name: 'noEnter',
	addProseMirrorPlugins() {
		return [
			new Plugin({
				key: new PluginKey('noEnter'),
				props: {
					handleKeyDown: (view, event) => {
						if (event.key === 'Enter' && !event.shiftKey) {
							console.log('Enter key pressed without shift key');
							if (this.options.handleEnter) {
								this.options.handleEnter();
							}
							return true;
						}
						return false;
					}
				}
			})
		];
	}
});
