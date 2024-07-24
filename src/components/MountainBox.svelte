<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import MountainForm from './MountainForm.svelte'
	import MountainResults from './MountainResults.svelte'
	import CloseButton from '../components/CloseButton.svelte'
	import { getWeather } from '../utils/getWeather'
	import type { DayWeather } from '../utils/DayWeather'
	import { passMountains } from '../utils/passMountains'
	export let pass: Array<'Epic' | 'Ikon'> = ['Epic', 'Ikon']

	export let id: number

	const dispatch = createEventDispatcher<{ close: string }>()

	let dataLoaded = false
	let weather: DayWeather
	let mountainName: string
	let reportLink: string
</script>

<div
	class="relative m-auto shadow-sm my-3 sm:my-2 p-2 w-[85%] sm:w-full min-w-[280px] h-24 bg-gray-200 bg-opacity-70 hover:bg-opacity-90 transition duration-200 rounded-md"
>
	<button
		class="relative z-10 block float-right w-3.5"
		on:click={() => {
			dispatch('close')
		}}
	>
		<CloseButton />
	</button>
	{#if !dataLoaded}
		<MountainForm
			{id}
			bind:pass
			on:formSubmitted={({ detail: mountain }) => {
				mountainName = mountain
				let zipcode = passMountains[mountain]['zipcode']
				reportLink = passMountains[mountain]['reportLink']

				fetch(`../api/${zipcode}.requestWeather`).then(async (res) => {
					if (!res.ok) {
						return
					}

					const response = await res.json()
					weather = getWeather(response.weather, new Date())
					dataLoaded = true
				})
			}}
		/>
	{:else}
		<MountainResults {weather} mountain={mountainName} {reportLink} />
	{/if}
</div>
