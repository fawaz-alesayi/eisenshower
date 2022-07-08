import adapter from "@sveltejs/adapter-static"; 
import preprocess from 'svelte-preprocess';

// change this to false when building the website
const dev = true

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
		}),
		paths: {
            // needed to tell sveltekit the base of the repo.
            base: dev ? "" : "/eisenshower",
        },
		prerender: {
			default: true
		}
	}
};

export default config;
