import { DayWeather } from "./types/DayWeather"
import type { Hour } from "./types/Hour"
import type { WeatherResponse } from "./types/WeatherResponse"

const iconMap = new Map([
  ['Thunderstorm', '11d'],
  ['Drizzle', '09d'],
  ['Rain', '10d'],
  ['Snow', '13d'],
  ['Atmosphere', '50d'],
  ['Clear', '01d'],
  ['Clouds', '03d']
])

function checkHiAndLo(weather: DayWeather, hour: Hour){
  if (!weather.hi || hour.main.temp > weather.hi) {
    weather.hi = hour.main.temp
  }
  if (!weather.lo || hour.main.temp < weather.lo) {
    weather.lo = hour.main.temp
  }

  return weather
}

function getIcon(icons: Record<string, number>){
  const maxValue = Math.max(...Object.values(icons))

  const maxIconEntry = Object.entries(icons).find(([_k, v]) => v === maxValue)

  return maxIconEntry[0]
}

export function getWeather(weatherResponse: WeatherResponse, date: Date) {
  const icons = {}
	let weather = new DayWeather()

	weatherResponse['list']?.forEach((hour: Hour) => {
		const time = hour.dt * 1000
		const currHour = new Date(time)
		const day = currHour.getDate()

		if (day === date.getDate()) {
			// not filtering out days
			let key = hour.weather['0']['main']
			const code = hour.weather['0']['id']

			if ((code >= 701) && (code <= 781)) {
				key = 'Atmosphere'
			}

      icons[key] = icons[key] + 1 || 1

      weather = checkHiAndLo(weather, hour)
		}
	})

	// iterate through keys to decide which weather icon to use
  const mainIco = getIcon(icons)	
	weather.icon = iconMap.get(mainIco)

	return weather
}