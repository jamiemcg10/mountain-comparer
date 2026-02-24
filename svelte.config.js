import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: vercel(),
		alias: {
			'$utils/*': 'src/utils/*'
		}
	},
	vite: {
		ssr: {
			noExternal: ['@genkit-ai/google-genai']
		},
		optimizeDeps: {
			include: ['@genkit-ai/google-genai']
		}
	}
}

export default config
