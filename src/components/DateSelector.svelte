<script lang="ts">
	export let reportDate: Date

	let dates = [new Date(), new Date(), new Date(), new Date(), new Date()]

	dates.forEach((_date, i) => {
		dates[i].setDate(dates[0].getDate() + i)
	})
</script>

<label class="text-blue-primary font-semibold">
	Date
	<select
		bind:value={reportDate}
		class="bg-white shadow-sm text-gray-default block rounded cursor-pointer focus:outline-blue font-normal"
		on:change
	>
		{#each dates as date}
			<option value={date}>{date.toLocaleDateString()}</option>
		{/each}
	</select>
</label>
