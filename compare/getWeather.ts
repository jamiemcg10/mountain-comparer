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

export function getWeather(weatherObject: any, date: Date) {
	let high = null
	let low = null
	let icons = new Map()
	let mainIco = null
	let weather = new DayWeather()

	weatherObject['list'].forEach((hour) => {
		let time = hour['dt'] * 1000
		let currHour = new Date()
		currHour.setTime(time)
		let day = currHour.getDate()

		if (day === date.getDate()) {
			// not filtering out days
			let key = hour['weather']['0']['main']
			let code = hour['weather']['0']['id']

			if ((code >= 701) && (code <= 781)) {
				key = 'Atmosphere'
			}
			if (icons.has(key)) {
				icons.set(key, icons.get(key) + 1)
			} else {
				icons.set(key, 1)
			}
			if ((high == null) && (low == null)) {
				high = hour['main']['temp']
				low = hour['main']['temp']
				weather.high = hour['main']['temp']
				weather.low = hour['main']['temp']
			} else {
				if (hour['main']['temp'] > high) {
					high = hour['main']['temp']
					weather.high = hour['main']['temp']
				}
				if (hour['main']['temp'] < low) {
					low = hour['main']['temp']
					weather.low = hour['main']['temp']
				}
			}
		}
	})

	// iterate through keys to decide which weather icon to use
	let tempCount = 0
	let iconMap = new Map([
		['Thunderstorm', '11d'],
		['Drizzle', '09d'],
		['Rain', '10d'],
		['Snow', '13d'],
		['Atmosphere', '50d'],
		['Clear', '01d'],
		['Clouds', '03d']
	])
	icons.forEach((value, key) => {
		if (mainIco == null) {
			mainIco = key
			tempCount = value
		} else if (value > tempCount) {
			tempCount = value
			mainIco = key
		}
	})

	weather.icon = iconMap.get(mainIco)

	return weather
}
