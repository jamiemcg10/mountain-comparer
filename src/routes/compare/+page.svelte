<script lang="ts">
	import { tick } from 'svelte'
	import MountainBox from '../../components/MountainBox.svelte'
	import ChatBox from '../../components/ChatBox.svelte'
	import Button from '../../components/Button.svelte'
	import PassSelector from '../../components/PassSelector.svelte'

	let passes: Set<'Epic' | 'Ikon'> = new Set(['Epic'])
	let mountains = []
	let id = 1
	let reportDate: Date

	const addEmptyBox = () => {
		mountains = [...mountains, { id: id }]
		id++
	}

	let dates = [new Date(), new Date(), new Date(), new Date(), new Date()]

	dates.forEach((_date, i) => {
		dates[i].setDate(dates[0].getDate() + i)
	})

	const resetPage = async () => {
		mountains = []
		await tick()
		id = 1
		addEmptyBox()
	}

	addEmptyBox()
</script>

<div class="h-full flex gap-x-4">
	<div class="flex-grow">
		<div class="flex justify-between flex-wrap shadow-sm">
			<label class="text-blue-primary font-semibold">
				Date
				<select
					bind:value={reportDate}
					class="bg-white shadow-sm text-gray-default block rounded cursor-pointer focus:outline-blue"
					on:change={() => {
						resetPage()
					}}
				>
					{#each dates as date}
						<option value={date}>{date.toLocaleDateString()}</option>
					{/each}
				</select>
			</label>
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

		<!-- remove button if 5 boxes on screen -->
		<Button disabled={mountains.length >= 5} on:click={() => addEmptyBox()}>
			+ Add row
		</Button>
	</div>
	<ChatBox />
</div>
