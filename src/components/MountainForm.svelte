<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import Button from './Button.svelte'
	import type { Region, Pass } from '$utils/types'
	import RegionSelect from './RegionSelect.svelte'
	import MountainSelect from './MountainSelect.svelte'

	export let id: number
	export let passes: Set<Pass>
	export let mountain = ''

	let dispatch = createEventDispatcher<{
		formSubmitted: string
		mountain: string
	}>()

	let region: Region = ''

	$: goBtnDisabled = !passes.size || !region || !mountain
</script>

<div
	class="box-content flex sm:flex-wrap absolute left-0 top-1/2 -translate-y-1/2 ml-8 sm:ml-5"
>
	<RegionSelect bind:region bind:id />

	<MountainSelect bind:passes bind:region bind:mountain bind:id />

	<Button
		class="self-end"
		disabled={goBtnDisabled}
		on:click={() => {
			dispatch('formSubmitted', mountain)
		}}
	>
		Go
	</Button>
</div>
