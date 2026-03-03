<script lang="ts" context="module">
	import Header from '$components/Header.svelte'
	import '../common.css'
	import { dev } from '$app/environment'
	import { injectAnalytics } from '@vercel/analytics/sveltekit'

	injectAnalytics({ mode: dev ? 'development' : 'production' })
</script>

<Header />

<div class="relative h-[93vh] p-5 overflow-auto">
	<slot />
</div>
