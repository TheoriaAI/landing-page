<script>
	import * as config from '$lib/config'
	let elemCarousel: HTMLDivElement
	const unsplashIds = [
		'vjUokUWbFOs',
		'1aJuPtQJX_I',
		'Jp6O3FFRdEI',
		'I3C_eojFVQY',
		's0fXOuyTH1M',
		'z_X0PxmBuIQ'
	]

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth // step left
		elemCarousel.scroll(x, 0)
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth // step right
		elemCarousel.scroll(x, 0)
	}

	let carrousel
</script>

<div class="card grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4" bind:this={carrousel}>
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
		{#each unsplashIds as unsplashId}
			<img
				class="rounded-container-token w-[1024px] snap-center"
				src="https://source.unsplash.com/{unsplashId}/1024x768"
				alt={unsplashId}
				loading="lazy"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
