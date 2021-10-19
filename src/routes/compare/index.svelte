<script lang="ts">
	import MountainBox from '../../components/MountainBox.svelte'
	let pass: 'epic' | 'ikon' = 'epic'
	let comps = []
	let id=1

	// don't use hover events if touchscreen
	let isTouchscreen: boolean

	try {
		document.createEvent("TouchEvent")
		isTouchscreen = true
	} catch {
		isTouchscreen = false
	}
	const addEmptyBox = () => {
		comps = [...comps, {id: id}]
		id++
	}

	let dates = [new Date(), new Date(), new Date(), new Date(), new Date()]

	dates.forEach((_date, i) => {
		dates[i].setDate(dates[0].getDate() + i)
	})

	const resetPage = () => {
		// reset page - delete all divs
		comps = []
		id=1
		addEmptyBox()
	}

	addEmptyBox()

	$: if (pass) resetPage()
</script>

<div class="flex justify-between flex-wrap shadow-sm">
	<label class="text-blue-primary font-semibold">
		Date
		<select
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
	<div class="self-center bg-gray-200/80 sm:mt-2 shadow-sm hover:bg-opacity-90 transition duration-200 rounded p-2">
		<input name="pass" bind:group={pass} value="epic" type="radio" checked class="cursor-pointer" />
		<label for="pass-epic" class="mr-2 transition transition-font duration-200 hover:text-gray-700"
			>Epic</label
		>
		<div class="inline-block"><input name="pass" bind:group={pass} value="ikon" type="radio" class="cursor-pointer" />
			<label for="pass-ikon" class="transition transition-font duration-200 hover:text-gray-700"
				>Ikon</label
			></div>
		
	</div>
</div>

<!-- body -->
<div class="mt-5 mb-1">
	{#each comps as _comp, i (_comp.id)}
		<MountainBox id={i} {pass} 
		on:close={()=> {
			comps.splice(i, 1)
			comps = comps
			}
		}/>
	{/each}
</div>

<!-- remove button if 5 boxes on screen -->
<div>
	<button
		type="button"
		class="bg-gray-200 px-2 py-1 rounded-sm w-24 h-8 bg-gray-300 text-blue-primary shadow transition-all duration-300 shadow-all transform-gpu active:scale-105"
		class:hover:scale-110={!isTouchscreen}
		class:hover:text-gray-50={!isTouchscreen}
		class:hover:bg-blue-primary={!isTouchscreen}
		class:hidden={comps.length >= 5}
		on:click={() => addEmptyBox()}>+ Add row</button
	>
</div>
