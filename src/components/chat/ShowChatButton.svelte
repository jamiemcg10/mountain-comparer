<script lang="ts">
	import clsx from 'clsx'

	export let showChat: boolean
</script>

<button
	class={clsx(
		'ml-2 transition-all duration-500 bg-blue-primary rounded-full self-end cursor-pointer',
		{
			'w-12 h-12': showChat,
			'w-14 h-14 hover:w-12 hover:h-12 active:w-14 active:h-14': !showChat
		}
	)}
	on:click|stopPropagation={() => {
		showChat = !showChat
	}}
	><img
		src="compass.png"
		alt="mountain logo"
		class="w-2/3 place-self-center invert-80"
	/>
</button>
