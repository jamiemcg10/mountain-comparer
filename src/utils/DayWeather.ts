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