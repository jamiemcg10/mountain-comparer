<script lang="ts">
	import { tick } from 'svelte'
	import MountainBox from '$components/MountainBox.svelte'
	import ChatBox from '$components/chat/ChatBox.svelte'
	import Button from '$components/Button.svelte'
	import PassSelector from '$components/PassSelector.svelte'
	import DateSelector from '$components/DateSelector.svelte'

	let passes: Set<'Epic' | 'Ikon'> = new Set(['Epic'])
	let mountains = []
	let id = 1
	let reportDate: Date

	const addEmptyBox = () => {
		mountains = [...mountains, { id: id }]
		id++
	}

	const resetPage = async () => {
		mountains = []
		await tick()
		id = 1
		addEmptyBox()
	}

	addEmptyBox()
</script>

<div class="max-[480px]:flex-col w-full h-full flex gap-x-4">
	<div class="grow">
		<div class="flex justify-between flex-wrap shadow-xs">
			<DateSelector bind:reportDate on:change={resetPage} />
			<PassSelector bind:passes />
		</div>

		<div class="mt-5 mb-1">
			{#each mountains as _comp, i (_comp.id)}
				<MountainBox
					id={i}
					bind:passes
					bind:date={reportDate}
					on:close={() => {
						mountains.splice(i, 1)
						mountains = mountains
					}}
				/>
			{/each}
		</div>

		<!-- hide button if 5 boxes on screen -->
		<Button disabled={mountains.length >= 5} on:click={addEmptyBox}>
			+ Add row
		</Button>
	</div>
	<ChatBox />
</div>
