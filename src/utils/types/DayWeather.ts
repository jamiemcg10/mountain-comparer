export class DayWeather {
	private high: number | null
	private low: number | null
	private ico: string | null

	constructor() {
		this.high = null
		this.low = null
		this.ico = null
	}

	set hi(temp) {
		this.high = temp
	}

	get hi() {
		return this.high
	}

	set lo(temp) {
		this.low = temp
	}

	get lo() {
		return this.low
	}

	set icon(ico) {
		this.ico = ico
	}

	get icon() {
		return this.ico
	}
}
