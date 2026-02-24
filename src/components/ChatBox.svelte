<script lang="ts">
	import { clickOutside } from '$utils/clickOutside'
	import { scale } from '$utils/scale'
	import Button from './Button.svelte'
	import clsx from 'clsx'

	function handleChatMessage() {
		console.log({ chatInput })
		messages = [...messages, chatInput]
		fetch('../api/chat', { method: 'POST', body: JSON.stringify(chatInput) })
			.then(async (r) => {
				console.log({ r })
				const t = await r.text()
				console.log({ t })
				messages = [...messages, t]
				messagesEl.scroll(0, messagesEl.clientHeight)
			})
			.catch()

		chatInput = ''
	}

	let messages = []
	let messagesEl: HTMLDivElement
	let showChat = false

	$: chatInput = ''
</script>

<div class="absolute flex flex-row-reverse justify-start right-2 bottom-2">
	<button
		class={clsx(
			'ml-2 transition-all duration-500 bg-blue-primary rounded-full self-end cursor-pointer',
			{
				'w-12 h-12': showChat,
				'w-14 h-14 ': !showChat
			}
		)}
		on:click|stopPropagation={() => {
			showChat = !showChat
		}}
		><img
			src="compass.png"
			alt="mountain logo"
			class="w-2/3 place-self-center invert-80"
		/></button
	>
	{#if showChat}
		<div
			transition:scale={{ duration: 500 }}
			use:clickOutside={showChat}
			on:clickOutside={() => (showChat = false)}
			class={clsx(
				'h-150 w-90 shrink-0 z-10 border-2 border-[gray] p-2 rounded-md flex flex-col justify-between bg-gray-200 bg-opacity-60',
				'max-[480px]:w-80 max-[480px]:h-175',
				'relative right-0'
			)}
		>
			<div
				class="text-[#d5d5d5] h-9 -mx-2 -mt-2 bg-blue-primary text-xl font-semibold tracking-wider text-center place-content-center overflow-hidden line-clamp-1"
			>
				Mountain Guide
			</div>
			<div class="flex flex-col gap-y-2 overflow-y-auto" bind:this={messagesEl}>
				{#each messages as msg}
					<div
						class="w-4/5 odd:bg-[#6e6ef7] even:bg-blue-primary odd:self-end p-2 text-black text-sm rounded-md"
					>
						{msg}
					</div>
				{/each}
			</div>
			<div>
				<textarea
					class="w-full p-1 bg-white resize-none mt-2 rounded-xs"
					bind:value={chatInput}
					placeholder="Chat with the guide"
					on:keyup={(e) => {
						if (e.key === 'Enter') {
							handleChatMessage()
						}
					}}
				/>
				<Button class="block ml-auto" on:click={handleChatMessage}>Send</Button>
			</div>
		</div>
	{/if}
</div>
