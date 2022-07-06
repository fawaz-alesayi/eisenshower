import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path'


/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit()],
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
};

export default config;