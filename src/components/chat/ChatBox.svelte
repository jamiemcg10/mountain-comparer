<script lang="ts">
	import { clickOutside } from '$utils/clickOutside'
	import { scale } from '$utils/scale'
	import Button from '$components/Button.svelte'
	import ThinkingMessage from './ThinkingMessage.svelte'
	import ShowChatButton from './ShowChatButton.svelte'
	import clsx from 'clsx'

	function handleChatMessage() {
		messages = [...messages, chatInput]
		setTimeout(() => {
			thinking = true
		}, 300)

		fetch('../api/chat', { method: 'POST', body: JSON.stringify(chatInput) })
			.then(async (r) => {
				console.log({ r })
				const t = await r.text()
				console.log({ t })
				messages = [...messages, t]
				messagesEl.scroll(0, messagesEl.clientHeight)
			})
			.catch()
			.finally(() => (thinking = false))

		chatInput = ''
	}

	let messages = [
		'Hey whats up?',
		'Awesome, an Ikon pass in Vermont gives you some great options! To help me narrow it down, tell me: 1. **Whats your skill level?** (Beginner, intermediate, advanced, expert?) 2. **What kind of skiing or snowboarding do you love to do?** (Cruisy groomers, trees, moguls, park, etc.) 3. **Are you looking to go soon? Any specific dates or just generally "good weather" for Vermont?**',
		'Okay, but what should I do after?',
		'To help me narrow it down, tell me: 1. **Whats your skill level?** (Beginner, intermediate, advanced, expert?) 2. **What kind of skiing or snowboarding do you love to do?** (Cruisy groomers, trees, moguls, park, etc.) 3. **Are you looking to go soon? Any specific dates or just generally "good weather" for Vermont?**'
	] // []
	let messagesEl: HTMLDivElement
	let showChat = false
	let thinking = false

	$: chatInput = ''
</script>

<div class="absolute flex flex-row-reverse justify-start right-2 bottom-2">
	<ShowChatButton bind:showChat />
	{#if showChat}
		<div
			transition:scale={{ duration: 500 }}
			use:clickOutside={showChat}
			on:clickOutside={() => (showChat = false)}
			class={clsx(
				'h-150 w-90 shrink-0 z-10 border-2 border-[gray] p-2 overflow-y-hidden rounded-md flex flex-col justify-between bg-gray-200 bg-opacity-60',
				'max-[480px]:w-80 max-[480px]:h-175',
				'relative right-0'
			)}
		>
			<div
				class="text-light h-9 -mx-2 -mt-2 mb-2 shrink-0 bg-blue-primary text-xl font-semibold tracking-wider text-center place-content-center overflow-hidden line-clamp-1"
			>
				Mountain Guide
			</div>
			<div
				class="flex flex-col grow place-content-end gap-y-2 overflow-y-hidden"
				bind:this={messagesEl}
			>
				<div class="block place-content-end space-y-2 overflow-y-auto pr-2">
					{#each messages as msg}
						<div
							class="w-4/5 odd:bg-blue-secondary even:bg-blue-primary text-light odd:place-self-end p-2 text-sm rounded-md"
						>
							{msg}
						</div>
					{/each}
					{#if thinking}
						<ThinkingMessage />
					{/if}
				</div>
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
