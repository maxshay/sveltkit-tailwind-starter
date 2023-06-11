// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-node"
import { vitePreprocess } from '@sveltejs/kit/vite';

// https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-debian-11

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
