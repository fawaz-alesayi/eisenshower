import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
    

	kit: {
		adapter: adapter(),
        prerender: {
            enabled: false,
        },
		vite: {
			server: {
				hmr: {
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
				}
			},
			resolve: {
				alias: {
					$lib: resolve('./src/lib')
				}
			}
		}
	}
};

export default config;
