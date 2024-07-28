<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { passMountains } from '../utils/passMountains'
	import clsx from 'clsx'

	export let id: number
	export let passes: Set<'Epic' | 'Ikon'>
	export let mountain = ''

	let dispatch = createEventDispatcher<{ formSubmitted: string; mountain: string }>()
	let region: 'East' | 'Midwest' | 'Rockies' | 'West' | '' = ''

	function getFilteredMountains() {
		const filteredMountains = Object.entries(passMountains).filter(([_, details]) => {
			return passes.has(details.pass) && details.region === region
		})

		const filteredMountainsObj = Object.fromEntries(filteredMountains)

		mountain = !region
			? ''
			: filteredMountainsObj[mountain]
			? mountain
			: Object.keys(filteredMountainsObj)[0]

		return filteredMountainsObj
	}

	$: goBtnDisabled = !passes.size || !region || !mountain
</script>

<div class="box-content flex sm:flex-wrap absolute left-0 top-1/2 -translate-y-1/2 ml-8 sm:ml-5">
	<div class="sm:mr-5 mr-8 sm:mb-1.5">
		<div class="block xs:hidden">
			<label class="text-blue-primary font-semibold" for={`region${id}`}>Region</label>
		</div>
		<select
			id={`region${id}`}
			class="bg-white rounded cursor-pointer focus:outline-blue"
			bind:value={region}
		>
			<option value="">Select region</option>
			<option value="East">East</option>
			<option value="Midwest">Midwest</option>
			<option value="Rockies">Rockies</option>
			<option value="West">West</option>
		</select>
	</div>
	<div class="mr-8 sm:mr-5 sm:mb-1.5 ">
		<div class="block xs:hidden">
			<label class="text-blue-primary font-semibold" for={`mountain${id}`}>Mountain</label>
		</div>
		{#key [passes, region]}
			<select
				class={clsx(
					'bg-white w-44 rounded cursor-pointer focus:outline-blue',
					!passes.size && 'cursor-not-allowed'
				)}
				bind:value={mountain}
				disabled={!passes.size || !region}
			>
				<option value="" selected>Select mountain</option>
				{#each Object.keys(getFilteredMountains()) as mountain}
					<option value={mountain}>{mountain}</option>
				{/each}
			</select>
			<div class:hidden={passes.size} class="absolute text-[red] text-xs">
				Please select a pass to continue
			</div>
		{/key}
	</div>
	<button
		class={clsx(
			'self-end sm:mr-5 bg-gray-300 px-2 py-0.5 w-9 h-7 text-blue-primary rounded-sm transition-all duration-200',
			!goBtnDisabled && 'shadow-all',
			!goBtnDisabled &&
				'pointer:hover:text-gray-50 pointer:hover:w-10 pointer:hover:h-8 pointer:hover:bg-blue-primary pointer:hover:-ml-0.5',
			!goBtnDisabled &&
				'active:!w-9 active:!h-7 active:!ml-0 active:bg-blue-primary active:text-gray-50',
			goBtnDisabled && 'cursor-not-allowed bg-gray-200 text-gray-400'
		)}
		disabled={goBtnDisabled}
		on:click={() => {
			dispatch('formSubmitted', mountain)
		}}
	>
		Go
	</button>
</div>
