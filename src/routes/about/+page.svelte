<script lang="ts">
	import MountainIcon from '$components/MountainIcon.svelte'
	import ReportIcon from '$components/ReportIcon.svelte'
	const directions = [
		'Select a region of the country',
		'Select a mountain',
		"Click 'Go'",
		'Repeat. You can compare up to 5 mountains'
	]
</script>

<div class="center w-4/5 sm:w-full h-full p-[10%] bg-white/60 shadow-xs">
	<div class="text">
		<h3 id="title" class="text-h3 text-blue-primary">How it works</h3>
		<p>
			Compare the weather at different mountains on your pass. First, select the
			date you want to look at and your pass. Then:
		</p>
		<ol class="pl-6 my-5">
			{#each directions as direction}
				<li class="py-1 last:italic mb-1.25">{direction}</li>
			{/each}
		</ol>
		<p class="inline-block">That's it! You can also click the</p>
		<div class="align-bottom inline-block w-6 -mx-1 xs:hidden">
			<ReportIcon class="text-blue-primary stroke-4 fill-current" />
		</div>
		<p class="inline xs:hidden">
			icon to open that mountain's snow report or the
		</p>
		<div class="align-text-top inline-block w-5 -mx-0.5">
			<MountainIcon class="text-blue-primary stroke-4 stroke-current" />
		</div>
		<p class="inline">icon to see that mountain's trail status. Got it?</p>
		<p class="inline-block absolute w-max ml-1.5 blue-link">
			<a href="../compare/">Try it out!</a>
		</p>
	</div>
	<div class="absolute bottom-1 text-xs">
		<div>Credits:</div>
		<a
			href="https://www.flaticon.com/free-icons/rocky-mountains"
			title="rocky mountains icons"
			>Rocky mountains icons created by Pop Vectors - Flaticon</a
		>
		<a
			href="https://www.flaticon.com/free-icons/adventure"
			title="adventure icons"
			>Adventure icons created by cah nggunung - Flaticon</a
		>
	</div>
</div>

<style>
	li::before {
		content: '❆  ';
		font-weight: bold;
		font-style: normal;
	}
</style>
