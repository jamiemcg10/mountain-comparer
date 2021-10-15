<script lang="ts">
	import MountainBox from '../../components/MountainBox.svelte'
	let pass: 'epic' | 'ikon' = 'epic'
	let comps = []

	const addEmptyBox = () => {
		comps = [...comps, 'push something']
	}

	let dates = [new Date(), new Date(), new Date(), new Date(), new Date()]

	dates.forEach((_date, i) => {
		dates[i].setDate(dates[0].getDate() + i)
	})

	const resetPage = () => {
		// reset page - delete all divs
		comps = []
		addEmptyBox()
	}

	addEmptyBox()

	$: console.log(pass)
</script>

<div class="flex justify-between flex-wrap">
	<label class="text-blue-primary font-semibold">
		Date
		<select
			class="text-gray-default block rounded cursor-pointer focus:outline-blue"
			on:change={() => {
				resetPage()
			}}
		>
			{#each dates as date}
				<option value={date}>{date.toLocaleDateString()}</option>
			{/each}
		</select>
	</label>
	<div class="self-center bg-gray-200 bg-opacity-80 hover:bg-opacity-90 transition duration-200 rounded p-2">
		<input name="pass" bind:group={pass} value="epic" type="radio" checked class="cursor-pointer" on:input={() => { 
			console.log('changed')
			resetPage() }}/>
		<label for="pass-epic" class="transition transition-font duration-200 hover:text-gray-700"
			>Epic</label
		>
		<input name="pass" bind:group={pass} value="ikon" type="radio" class="ml-2 cursor-pointer" />
		<label for="pass-ikon" class="transition transition-font duration-200 hover:text-gray-700"
			>Ikon</label
		>
	</div>
</div>

<!-- body -->
<div class="my-5">
	{#each comps as _comp, i}
		<MountainBox id={i} {pass} on:close={()=> {
			// this is not working :(
			console.log('closing')
			console.log(i)
			console.log(comps)
			comps.splice(i, 1)
			comps = comps
			console.log(comps)}
			}/>
	{/each}
</div>

<!-- remove button if 5 boxes on screen -->
<div>
	<button
		type="button"
		class="bg-gray-200 px-2 py-1 rounded-sm w-24 h-8 bg-gray-300 text-blue-primary transition-all duration-300 hover:scale-105 hover:text-gray-50 hover:bg-blue-primary"
		class:hidden={comps.length >= 5}
		on:click={() => addEmptyBox()}>+ Add row</button
	>
</div>
