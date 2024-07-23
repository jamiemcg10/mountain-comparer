export class DayWeather {
	private hi: number | null
	private lo: number | null
	private ico: string | null
	
	constructor() {
		this.hi = null
		this.lo = null
		this.ico = null
	}

	set high(temp) {
		this.hi = temp
	}

	get high() {
		return this.hi
	}

	set low(temp) {
		this.lo = temp
	}

	get low() {
		return this.lo
	}

	set icon(ico) {
		this.ico = ico
	}

	get icon() {
		return this.ico
	}
}

const iconMap = new Map([
  ['Thunderstorm', '11d'],
  ['Drizzle', '09d'],
  ['Rain', '10d'],
  ['Snow', '13d'],
  ['Atmosphere', '50d'],
  ['Clear', '01d'],
  ['Clouds', '03d']
])

function checkHiAndLo(weather: any, hour: any){
  if (!weather.hi || hour['main']['temp'] > weather.hi) {
    weather.high = hour['main']['temp']
  }
  if (!weather.lo || hour['main']['temp'] < weather.lo) {
    weather.low = hour['main']['temp']
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

  console.log({weatherObject})

	weatherObject['list']?.forEach((hour) => {
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