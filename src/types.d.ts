declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		'on:clickOutside'?: (event: CustomEvent) => void
	}
}
