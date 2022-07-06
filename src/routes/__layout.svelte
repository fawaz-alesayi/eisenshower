<slot />

<style lang="scss">
	@use './src/lib/theme.scss';
    @import 'modern-normalize/modern-normalize.css';
	@import 'water.css';

	// overriding water.css
	:root {
		--background-body: #caf0f8;
		--text-main: theme.$dark;
		--focus: theme.$dark;
		--text-bright: theme.$dark;
		--form-text: theme.$dark;
	}

    :global(body) {
        max-width: initial;
    }
</style>
