<script lang="ts">
	import ReportIcon from '../../components/ReportIcon.svelte'
	const directions = [
		'Select a region of the country',
		'Select a mountain',
		"Click 'Go'",
		'Repeat. You can compare up to 5 mountains'
	]
</script>

<div class="center w-4/5 sm:w-full sm:h-full p-[10%] bg-white/80 sm:bg-white/50 rounded-md shadow-sm">
	<div class="text">
		<h3 id="title" class="text-h3 text-blue-primary">How it works</h3>
		<p>
			Compare the weather at different mountains on your pass. First, select the date you want
			to look at and your pass. Then:
		</p>
		<ol class="pl-[20px] my-5">
			{#each directions as direction}
				<li class="py-30 last:italic mb-[5px]">{direction}</li>
			{/each}
		</ol>
		<p class="inline-block">That's it! You can also click the</p>
		<div class="align-bottom inline-block w-5"><ReportIcon classes="text-blue-primary stroke-4 stroke-current" /></div>
		<p class="inline"> icon to open that mountain's snow report for today.</p>
		<p class="w-max inline">Got it?</p><p class="inline-block w-max ml-1.5 blue-link"><a href="../compare/">Try it out!</a></p>
	</div>
</div>

<style>
	li::before {
		content: '❆  ';
		font-weight: bold;
		font-style: normal;
	}
</style>
