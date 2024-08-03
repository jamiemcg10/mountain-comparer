<script lang="ts">
	import type { DayWeather } from '../utils/types/DayWeather'
	import ReportIcon from '../components/ReportIcon.svelte'
	import clsx from 'clsx'
	import MountainIcon from './MountainIcon.svelte'

	export let weather: DayWeather
	export let mountain: string
	export let reportLink: string
	export let trailLink: string = ''
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
	<div
		class="relative w-24 ml-auto mr-24 sm:mr-8 text-blue-primary flex space-x-4 xs:w-10"
	>
		{#if trailLink}
			<a
				href={trailLink}
				rel="noreferrer noopener"
				target="__blank"
				class={clsx(
					'absolute left-0 w-10 block transition-all duration-200',
					'pointer:hover:w-11 pointer:hover:-mt-0.5',
					'pointer:active:w-10 pointer:active:mt-0'
				)}
			>
				<div>
					<MountainIcon
						class="stroke-4 stroke-current filter hover:drop-shadow-gray-sm"
					/>
				</div>
			</a>
		{/if}
		{#if reportLink}
			<a
				href={reportLink}
				rel="noreferrer noopener"
				target="__blank"
				class={clsx(
					'absolute right-0 mt-0 w-10 block transition-all duration-200 xs:hidden',
					'pointer:hover:w-11 pointer:hover:-mt-1 pointer:hover:-right-1',
					'pointer:active:!w-10 pointer:active:!mt-0 pointer:active:!right-0'
				)}
			>
				<div>
					<ReportIcon class="stroke-4 fill-current hover:drop-shadow-gray-sm" />
				</div>
			</a>
		{/if}
	</div>
</div>
