import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

async function getHostUrl() {
	if (!process.env.GITPOD_WORKSPACE_ID) {
        // local with ngrok
		let data = await fetch('http://127.0.0.1:4040/api/tunnels');
		let json = await data.json();
		return json.tunnels[0].public_url;
	} else {
        // gitpod
		return process.env.HMR_HOST;
	}
}

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		hmr: {
			clientPort: process.env.HMR_HOST ? 443 : 3000,
			host: process.env.HMR_HOST ? (await getHostUrl()).match(/^(https:\/\/)?(.*)$/)[2] : 'localhost'
		}
	},
	resolve: {
		alias: {
			$lib: resolve('./src/lib')
		}
	}
};

export default config;
