import { text } from '@sveltejs/kit'
import { chat } from './gemini.js'

export async function POST({ request }) {
	const data = await request.json()
	console.log({ data })

	const t = await chat.send(data)
	const response = t.text

	console.log({ t, response })

	return text(response)
}
