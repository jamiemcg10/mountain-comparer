<script lang="ts">
	import type { Region } from '../utils/types'

	export let region: Region
	export let id: number
</script>

<div class="sm:mr-5 mr-8 sm:mb-1.5">
	<div class="block xs:hidden">
		<label class="text-blue-primary font-semibold" for={`region-${id}`}
			>Region</label
		>
	</div>
	<select
		id="mountain-{id}-region"
		aria-label="region"
		class="bg-white rounded-sm cursor-pointer"
		bind:value={region}
	>
		<option value="">Select region</option>
		<option value="East">East</option>
		<option value="Midwest">Midwest</option>
		<option value="Rockies">Rockies</option>
		<option value="West">West</option>
	</select>
</div>
