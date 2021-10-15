<script lang="ts">
import type { DayWeather } from '../../compare/getWeather'

export let weather: DayWeather
export let mountain: string
export let reportLink: string
</script>

<div class="font-bold text-xl">{mountain}</div>
<div class="flex w-full h-10 pl-12">
	<div class="gray-500 text-4xl">{Math.round(weather.high)}&deg;/</div>
	<div class="gray-500 text-2xl">{Math.round(weather.low)}&deg;</div>
    
	<img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather icon" class="w-24 h-24 -mt-9"/>
	<a href="{reportLink}" rel="noreferrer noopener" target="__blank" class="ml-auto mr-24"
		><img class="report-ico transition duration-200 w-8 hover:transform hover:scale-110" alt="report link" src="../assets/report.png" /></a
	>
</div>
