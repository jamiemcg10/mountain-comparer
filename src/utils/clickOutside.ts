const event = 'click'

export function clickOutside(node: HTMLElement) {
	function handleClick(e: PointerEvent) {
		const clickOutsideEvent = new Event('clickOutside')

		if (!node.contains(e.target as HTMLElement)) {
			node.dispatchEvent(clickOutsideEvent)
		}
	}

	document.addEventListener(event, handleClick)

	return {
		destroy: () => document.removeEventListener(event, handleClick)
	}
}
