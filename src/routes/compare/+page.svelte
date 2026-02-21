<script lang="ts">
	import { tick } from 'svelte'
	import MountainBox from '../../components/MountainBox.svelte'
	import ChatBox from '../../components/ChatBox.svelte'
	import Button from '../../components/Button.svelte'

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

	const togglePass = (pass: 'Epic' | 'Ikon') => {
		if (passes.has(pass)) {
			passes.delete(pass)
			passes = passes
		} else {
			passes = passes.add(pass)
		}
	}

	addEmptyBox()

	$: passesLocal = Array.from(passes)
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
			<div
				class="self-center bg-gray-200/80 sm:mt-2 shadow-sm hover:bg-opacity-90 transition duration-200 rounded p-2"
			>
				<div
					class="inline-block"
					tabindex="0"
					role="checkbox"
					aria-checked={passes.has('Epic')}
					on:keyup={({ key }) => {
						if (key === 'Enter') {
							togglePass('Epic')
						}
					}}
					on:click={() => togglePass('Epic')}
				>
					<input
						bind:group={passesLocal}
						id="pass-epic"
						name="pass"
						value="Epic"
						type="checkbox"
						checked
						class="cursor-pointer"
					/>
					<label
						for="pass-epic"
						class="mr-2 cursor-pointer transition transition-font duration-200 hover:text-gray-700"
						on:pointerup={() => togglePass('Epic')}>Epic</label
					>
				</div>

				<div
					class="inline-block"
					tabindex="0"
					role="checkbox"
					aria-checked={passes.has('Ikon')}
					on:keyup={({ key }) => {
						if (key === 'Enter') {
							togglePass('Ikon')
						}
					}}
					on:click={() => togglePass('Ikon')}
				>
					<input
						bind:group={passesLocal}
						id="pass-ikon"
						name="pass"
						value="Ikon"
						type="checkbox"
						class="cursor-pointer"
					/>
					<label
						for="pass-ikon"
						class="cursor-pointer transition transition-font duration-200 hover:text-gray-700"
						on:pointerup={() => togglePass('Ikon')}>Ikon</label
					>
				</div>
			</div>
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
