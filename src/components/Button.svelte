<script lang="ts">
	import clsx from 'clsx'

	export let disabled = false
</script>

<button
	{disabled}
	class={clsx(
		$$props.class,
		'h-fit px-2 py-1 bg-gray-300 text-blue-primary rounded-xs transition-all duration-200',
		'pointer:hover:text-gray-50 pointer:hover:bg-blue-primary',
		'active:bg-blue-primary active:text-gray-50',
		disabled &&
			'pointer-events-none cursor-not-allowed bg-gray-200 text-gray-400',
		!disabled && 'shadow-all cursor-pointer'
	)}
	on:click
>
	<slot />
</button>
