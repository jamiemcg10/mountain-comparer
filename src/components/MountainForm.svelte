<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { mountains } from '../utils/mountainList'
	export let id: number
	export let pass: 'epic' | 'ikon'
	let dispatch = createEventDispatcher<{formSubmitted: string, mountain: string}>()
	let region: 'east' | 'midwest' | 'rockies' | 'west' = 'east'
	let mountain: string

	$: if (pass){
		mountain = mountains[pass][region][0]
	}
</script>

<div class="box-content flex absolute left-0 top-1/2 -translate-y-1/2 ml-8">
	<div>
		<div>
			<label class="text-blue-primary font-semibold" for={`region${id}`}>Region</label>
		</div>
		<select id={`region${id}`} class="rounded cursor-pointer focus:outline-blue" bind:value={region} 
		on:change={() => { mountain = mountains[pass][region][0] }}>
			<option value="east">East</option>
			<option value="midwest">Midwest</option>
			<option value="rockies">Rockies</option>
			<option value="west">West</option>
		</select>
	</div>
	<div class="ml-8">
		<div>
			<label class="text-blue-primary font-semibold" for={`mountain${id}`}>Mountain</label>
		</div>
		<select class="rounded cursor-pointer focus:outline-blue" bind:value={mountain}>
			{#each mountains[pass][region] as mountain}
				<option value="{mountain}">{mountain}</option>
			{/each}
		</select>
	</div>
	<button class="go-button self-end ml-8 bg-gray-300 px-2 py-0.5 w-9 h-7 text-blue-primary shadow-all rounded-sm transition-all duration-300 hover:text-gray-50 hover:transform hover:scale-110 active:scale-105 hover:bg-blue-primary" 
	on:click={() => { dispatch('formSubmitted', mountain)}} >
		Go
	</button>
</div>
