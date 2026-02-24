import { text } from '@sveltejs/kit'
import { chat } from './gemini.js'

export async function POST({ request }) {
	const data = await request.json()

	const t = await chat.send(data)
	const response = t.text

	return text(response)
}
