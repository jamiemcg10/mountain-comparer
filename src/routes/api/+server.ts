import 'dotenv/config'
import { json } from '@sveltejs/kit'

export async function GET({ url }) {
	const { searchParams } = url
	const zipcode = searchParams.get('zipcode')

	return json(
		{
			weather: await sendWeatherRequest(zipcode)
		},
		{ status: 201 }
	)
}

async function sendWeatherRequest(zipcode: string) {
	const req = await fetch(
		`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=imperial&appid=${process.env.APIKEY}`
	)

	if (!req.ok) {
		return null
	}

	if (req.ok) {
		const json = req.json()
		return json
	}
}
