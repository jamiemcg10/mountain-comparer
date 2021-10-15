<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import MountainForm from './MountainForm.svelte'
	import MountainResults from './MountainResults.svelte'
	import { getWeather, DayWeather } from '../../compare/getWeather'
	import { passMountains } from '../../assets/passMountains'
	import { APIKEY } from '../../compare/apk.js'
	export let pass: 'epic' | 'ikon' = 'epic' // this should probably be in a store

	export let id: number

	const dispatch = createEventDispatcher<{close: string}>()

	let dataLoaded = false
	let weather: DayWeather
	let mountainName: string
	let reportLink: string

	function requestWeather(zipcode: string) {
		let requestURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${APIKEY}`
		let request = new XMLHttpRequest()
		request.open('GET', requestURL)
		request.responseType = 'json'
		request.send()

		request.onload = function () {
			dataLoaded = true
			let tWeather = request.response
			weather = getWeather(tWeather, new Date())
		}
	}
</script>

<div
	class="relative m-auto my-3 p-2 w-[85%] h-24 bg-gray-200 bg-opacity-70 hover:bg-opacity-90 transition duration-200 rounded-md"
>
<button
	class="close-button myButton block float-right w-3.5"
	on:click={()=>{
		dispatch('close')
	}}
>
	<svg
		viewBox="0 0 10 10"
		xmlns="http://www.w3.org/2000/svg"
		stroke-linecap="round"
		stroke-width="1"
		class="h-full hover:scale-125 transition-all duration-300 hover:stroke-2"
	>
		<line x1="2" y1="8" x2="8" y2="2" stroke="#666666" />
		<line x1="8" y1="8" x2="2" y2="2" stroke="#666666" />
	</svg>
</button>
	{#if !dataLoaded}
		<MountainForm
			{id}
			bind:pass
			on:formSubmitted={({detail: mountain}) => {
				mountainName = mountain
				let zipcode = passMountains[mountain]['zipcode']
				reportLink = passMountains[mountain]['reportLink']
				requestWeather(zipcode)
			}}
		/>
	{:else}
		<MountainResults {weather} mountain={mountainName} {reportLink}/>
	{/if}
</div>
