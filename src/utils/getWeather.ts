import { DayWeather } from "./types/DayWeather"
import type { Hour } from "./types/Hour"

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

export function getWeather(weatherObject: any, date: Date) {
  let icons = {}
	let weather = new DayWeather()

	weatherObject['list']?.forEach((hour: Hour) => {
		let time = hour.dt * 1000
		let currHour = new Date(time)
		let day = currHour.getDate()

		if (day === date.getDate()) {
			// not filtering out days
			let key = hour.weather['0']['main']
			let code = hour.weather['0']['id']

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