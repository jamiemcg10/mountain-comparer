<script lang="ts">
	import { tick } from 'svelte'
	import MountainBox from '../../components/MountainBox.svelte'
	import clsx from 'clsx'

	let passes: Set<'Epic' | 'Ikon'> = new Set(['Epic'])
	let comps = []
	let id = 1
	let reportDate: Date

	const addEmptyBox = () => {
		comps = [...comps, { id: id }]
		id++
	}

	let dates = [new Date(), new Date(), new Date(), new Date(), new Date()]

	dates.forEach((_date, i) => {
		dates[i].setDate(dates[0].getDate() + i)
	})

	const resetPage = async () => {
		comps = []
		await tick()
		id = 1
		addEmptyBox()
	}

	addEmptyBox()

	$: passesLocal = Array.from(passes)
</script>

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
			on:click={() => {
				if (passes.has('Epic')) {
					passes.delete('Epic')
					passes = passes
				} else {
					passes = passes.add('Epic')
				}
			}}
		>
			<input
				bind:group={passesLocal}
				name="pass"
				value="Epic"
				type="checkbox"
				checked
				class="cursor-pointer"
			/>
			<label
				for="pass-epic"
				class="mr-2 transition transition-font duration-200 hover:text-gray-700">Epic</label
			>
		</div>

		<div
			class="inline-block"
			on:click={() => {
				if (passes.has('Ikon')) {
					passes.delete('Ikon')
					passes = passes
				} else {
					passes = passes.add('Ikon')
				}
			}}
		>
			<input
				bind:group={passesLocal}
				name="pass"
				value="Ikon"
				type="checkbox"
				class="cursor-pointer"
			/>
			<label for="pass-ikon" class="transition transition-font duration-200 hover:text-gray-700"
				>Ikon</label
			>
		</div>
	</div>
</div>

<div class="mt-5 mb-1">
	{#each comps as _comp, i (_comp.id)}
		<MountainBox
			id={i}
			bind:passes
			bind:date={reportDate}
			on:close={() => {
				comps.splice(i, 1)
				comps = comps
			}}
		/>
	{/each}
</div>

<!-- remove button if 5 boxes on screen -->
<div>
	<button
		type="button"
		class={clsx(
			'px-2 py-1 rounded-sm w-24 mt-2 h-8 bg-gray-300 text-blue-primary shadow transition-all duration-200 shadow-all',
			'active:!h-8 active:!w-24 active:!mt-2 active:!ml-0',
			'pointer:hover:-ml-1 pointer:hover:mt-1 pointer:hover:w-[6.5rem] pointer:hover:h-9 pointer:hover:text-gray-50 pointer:hover:bg-blue-primary'
		)}
		class:hidden={comps.length >= 5}
		on:click={() => addEmptyBox()}>+ Add row</button
	>
</div>
