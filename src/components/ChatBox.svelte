<script lang="ts">
	import Button from './Button.svelte'

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
	$: chatInput = ''
</script>

<div
	class="h-full w-[250px] shrink-0 border-2 border-[gray] p-2 rounded-md flex flex-col justify-between bg-[lightgray] bg-opacity-60"
>
	<div class="flex flex-col gap-y-2 overflow-y-auto" bind:this={messagesEl}>
		{#each messages as msg}
			<div
				class="w-4/5 odd:bg-[#6e6ef7] even:bg-[#6ecb50] odd:self-end p-2 text-black text-sm rounded-md"
			>
				{msg}
			</div>
		{/each}
	</div>
	<div>
		<textarea
			class="w-full p-1 resize-none mt-2 focus-visible:outline-blue rounded-xs"
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
