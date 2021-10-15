<script lang="ts">
	const directions = [
		'Select a region of the country',
		'Select a mountain from those in your chosen region',
		"Click 'Go'",
		'Repeat for the other mountains you want to compare. You can compare up to 5 mountains'
	]
</script>

<div class="center w-4/5 p-[10%] bg-white opacity-80 rounded-lg">
	<div class="text">
		<h3 id="title" class="text-h3 text-blue-primary">How it works</h3>
		<p>
			Compare the weather at different mountains on your pass. First, select the date you want
			to look at and your pass. Then:
		</p>
		<ol class="pl-[20px]">
			{#each directions as direction}
				<li class="py-30 last:italic mb-[5px]">{direction}</li>
			{/each}
		</ol>
		<p>
			That's it! You can also click the <img
				class="inline w-4"
				id="report"
				src="../assets/report.png"
				alt="report icon"
			/> icon to open that mountain's snow report for today.
		</p>
		<p>Got it? <a href="../compare/" class="blue-hover">Try it out!</a></p>
	</div>
</div>

<style>
	li::before {
		content: '❆  ';
		font-weight: bold;
		font-style: normal;
	}
</style>
