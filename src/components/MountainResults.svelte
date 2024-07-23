<script lang="ts">
	import type { DayWeather } from '../utils/DayWeather'
	import ReportIcon from '../components/ReportIcon.svelte'

	export let weather: DayWeather
	export let mountain: string
	export let reportLink: string
</script>

<div class="font-bold text-xl">{mountain}</div>
<div class="flex w-full h-10 pl-12 sm:pl-0">
	<div class="gray-500 text-4xl">{Math.round(weather.high)}&deg;/</div>
	<div class="gray-500 text-2xl">{Math.round(weather.low)}&deg;</div>

	<img
		src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
		alt="weather icon"
		class="w-24 h-24 -mt-6"
	/>
	<a href={reportLink} rel="noreferrer noopener" target="__blank" class="ml-auto mr-24 sm:mr-8">
		<div
			class="w-10 text-blue-primary transition duration-200 w-8 hover:transform hover:scale-110 active:scale-105"
		>
			<ReportIcon classes="stroke-4 stroke-current filter hover:drop-shadow-gray-sm" />
		</div>
	</a>
</div>
