<script lang="ts">
	import type { DayWeather } from '../utils/types/DayWeather'
	import ReportIcon from '../components/ReportIcon.svelte'
	import clsx from 'clsx'

	export let weather: DayWeather
	export let mountain: string
	export let reportLink: string
</script>

<div class="font-bold text-xl">{mountain}</div>
<div class="flex w-full h-10 pl-12 sm:pl-0">
	<div class="gray-500 text-4xl">{Math.round(weather.hi)}&deg;/</div>
	<div class="gray-500 text-2xl">{Math.round(weather.lo)}&deg;</div>

	<img
		src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
		alt="weather icon"
		class="w-24 h-24 -mt-6"
	/>
	{#if reportLink}
		<a
			href={reportLink}
			rel="noreferrer noopener"
			target="__blank"
			class={clsx(
				'ml-auto mr-24 sm:mr-8 transition-all duration-200 w-8 text-blue-primary',
				'hover:mr-[5.85rem] sm:hover:mr-[1.875rem] hover:-mt-0.5 hover:w-9',
				'active:w-8 active:mr-24 sm:active:mr-8 active:mt-0'
			)}
		>
			<div>
				<ReportIcon
					classes="stroke-4 stroke-current filter hover:drop-shadow-gray-sm"
				/>
			</div>
		</a>
	{/if}
</div>
