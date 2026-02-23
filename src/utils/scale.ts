import { cubicOut } from 'svelte/easing'

export function scale(
	node: Element,
	{ delay = 0, duration = 400, easing = cubicOut } = {}
) {
	const style = getComputedStyle(node)
	const opacity = +style.opacity

	const secondary_properties = ['top', 'bottom', 'left', 'right']

	const capitalized_secondary_properties = secondary_properties.map(
		(e) => `${e[0].toUpperCase()}${e.slice(1)}`
	)
	const padding_y_start_value = parseFloat(
		style[`padding${capitalized_secondary_properties[0]}`]
	)
	const padding_y_end_value = parseFloat(
		style[`padding${capitalized_secondary_properties[1]}`]
	)
	const padding_x_start_value = parseFloat(
		style[`padding${capitalized_secondary_properties[2]}`]
	)
	const padding_x_end_value = parseFloat(
		style[`padding${capitalized_secondary_properties[3]}`]
	)
	const margin_y_start_value = parseFloat(
		style[`margin${capitalized_secondary_properties[0]}`]
	)
	const margin_y_end_value = parseFloat(
		style[`margin${capitalized_secondary_properties[1]}`]
	)
	const margin_x_start_value = parseFloat(
		style[`margin${capitalized_secondary_properties[2]}`]
	)
	const margin_x_end_value = parseFloat(
		style[`margin${capitalized_secondary_properties[3]}`]
	)
	const border_y_width_start_value = parseFloat(
		style[`border${capitalized_secondary_properties[0]}Width`]
	)
	const border_y_width_end_value = parseFloat(
		style[`border${capitalized_secondary_properties[1]}Width`]
	)
	const border_x_width_start_value = parseFloat(
		style[`border${capitalized_secondary_properties[2]}Width`]
	)
	const border_x_width_end_value = parseFloat(
		style[`border${capitalized_secondary_properties[3]}Width`]
	)

	return {
		delay,
		duration,
		easing,
		css: (t) =>
			'overflow: hidden;' +
			`opacity: ${Math.min(t * 20, 1) * opacity};` +
			`width: ${t * parseFloat(style.width)}px;` +
			`height: ${t * parseFloat(style.height)}px;` +
			`padding-top: ${t * padding_y_start_value}px;` +
			`padding-right: ${t * padding_y_end_value}px;` +
			`padding-bottom: ${t * padding_x_start_value}px;` +
			`padding-left: ${t * padding_x_end_value}px;` +
			`margin-top: ${t * margin_y_start_value}px;` +
			`margin-right: ${t * margin_y_end_value}px;` +
			`margin-bottom: ${t * margin_x_start_value}px;` +
			`margin-left: ${t * margin_x_end_value}px;` +
			`border-top-width: ${t * border_y_width_start_value}px;` +
			`border-bottom-width: ${t * border_y_width_end_value}px;` +
			`border-left-width: ${t * border_x_width_start_value}px;` +
			`border-right-width: ${t * border_x_width_end_value}px;`
	}
}
