<script lang="ts">
	import Header from '../components/Header.svelte'
</script>

<Header />

<div class="relative h-[93vh] p-5 overflow-auto">
	<slot />
</div>
