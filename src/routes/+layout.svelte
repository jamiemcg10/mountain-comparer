<script lang="ts" context="module">
	import Header from '../components/Header.svelte'
	import '../common.css'
</script>

<Header />

<div class="relative h-[93vh] p-5 overflow-auto">
	<slot />
</div>
