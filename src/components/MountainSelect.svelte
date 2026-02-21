<script lang="ts">
	import clsx from 'clsx'
	import { passMountains } from '../utils/passMountains'
	import type { Pass, Region } from '../utils/types'

	export let id: number
	export let passes: Set<Pass>
	export let region: Region
	export let mountain: string

	function getFilteredMountains(passes: Set<Pass>, region: Region) {
		const filteredMountains = Object.entries(passMountains).filter(
			([_, details]) => {
				return passes.has(details.pass) && details.region === region
			}
		)

		const filteredMountainsObj = Object.fromEntries(filteredMountains)

		mountain = filteredMountainsObj[mountain] ? mountain : ''

		return filteredMountainsObj
	}

	$: mountains = getFilteredMountains(passes, region)
</script>

<div class="mr-8 sm:mr-5 sm:mb-1.5">
	<div class="block xs:hidden">
		<label class="text-blue-primary font-semibold" for={`mountain-${id}`}
			>Mountain</label
		>
	</div>
	<select
		class={clsx(
			'bg-white w-44 rounded-sm cursor-pointer focus:outline-blue',
			!passes.size && 'cursor-not-allowed'
		)}
		aria-label="mountain"
		bind:value={mountain}
		disabled={!passes.size || !region}
	>
		<option value="" selected>Select mountain</option>
		{#each Object.keys(mountains) as mountain}
			<option value={mountain}>{mountain}</option>
		{/each}
	</select>
	<div class:hidden={passes.size} class="absolute text-[red] text-xs">
		Please select a pass to continue
	</div>
</div>
