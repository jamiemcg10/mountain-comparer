<svelte:options immutable={true} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { passMountains } from '../utils/passMountains'
	import clsx from 'clsx'

	export let id: number
	export let pass: Array<'Epic' | 'Ikon'> = ['Epic', 'Ikon'] // reset default, maybe
	let dispatch = createEventDispatcher<{ formSubmitted: string; mountain: string }>()
	let region: 'East' | 'Midwest' | 'Rockies' | 'West' = 'East'
	let mountain: string = ''

	function getFilteredMountains() {
		const filteredMountains = Object.entries(passMountains).filter(([_, details]) => {
			return pass.includes(details.pass) && details.region === region
		})

		const filteredMountainsObj = Object.fromEntries(filteredMountains)

		mountain = filteredMountainsObj[mountain] ? mountain : Object.keys(filteredMountainsObj)[0]

		return filteredMountainsObj
	}
</script>

<div class="box-content flex sm:flex-wrap absolute left-0 top-1/2 -translate-y-1/2 ml-8 sm:ml-5">
	<div>
		<div>
			<label class="text-blue-primary font-semibold" for={`region${id}`}>Region</label>
		</div>
		<select
			id={`region${id}`}
			class="bg-white rounded cursor-pointer focus:outline-blue"
			bind:value={region}
		>
			<option value="East">East</option>
			<option value="Midwest">Midwest</option>
			<option value="Rockies">Rockies</option>
			<option value="West">West</option>
		</select>
	</div>
	<div class="mx-8 sm:mx-5">
		<div>
			<label class="text-blue-primary font-semibold" for={`mountain${id}`}>Mountain</label>
		</div>
		{#key [pass, region]}
			<select
				class="bg-white w-44 rounded cursor-pointer focus:outline-blue"
				bind:value={mountain}
			>
				{#each Object.keys(getFilteredMountains()) as mountain}
					<option value={mountain}>{mountain}</option>
				{/each}
			</select>
		{/key}
	</div>
	<button
		class={clsx(
			'self-end sm:mr-5 sm:mt-1.5 bg-gray-300 px-2 py-0.5 w-9 h-7 text-blue-primary shadow-all rounded-sm transition-all duration-200',
			'hover:text-gray-50 hover:w-10 hover:h-8 hover:bg-blue-primary hover:-ml-0.5',
			'active:w-9 active:h-7 active:ml-0'
		)}
		on:click={() => {
			dispatch('formSubmitted', mountain)
		}}
	>
		Go
	</button>
</div>
