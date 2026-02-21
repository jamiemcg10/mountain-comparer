<script lang="ts">
	import type { Pass } from 'src/utils/types'

	export let passes: Set<'Epic' | 'Ikon'>

	function togglePass(pass: Pass) {
		if (passes.has(pass)) {
			passes.delete(pass)
			passes = passes
		} else {
			passes = passes.add(pass)
		}
	}

	$: passesLocal = Array.from(passes)
</script>

<div
	class="self-center bg-gray-200/80 sm:mt-2 shadow-xs hover:bg-opacity-90 transition duration-200 rounded-sm p-2"
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
			class="mr-2 cursor-pointer transition-font duration-200 hover:text-gray-700"
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
			class="cursor-pointer transition-font duration-200 hover:text-gray-700"
			on:pointerup={() => togglePass('Ikon')}>Ikon</label
		>
	</div>
</div>
