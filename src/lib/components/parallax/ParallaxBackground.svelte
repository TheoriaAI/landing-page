<script>
	import { Parallax, ParallaxLayer } from 'svelte-parallax'
	import Banner from './Banner.svelte'
	import CarrouselIndustries from './Banner_with_Carrousel.svelte'

	let parallax

	const url = (name, wrap = false) =>
		`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
</script>

<Parallax sections="2" bind:this={parallax}>
	<ParallaxLayer
		offset="0"
		rate="0"
		span="2"
		style="background-image: {url('stars', true)}; background-size: cover;"
	/>

	<ParallaxLayer offset="0.8" rate="-0.3" style="opacity: 0.3;">
		<img src={url('satellite3')} alt="" style="width: 15%; margin-left: 70%;" />
	</ParallaxLayer>

	<ParallaxLayer offset="0.0" rate="0.2" style="opacity: 0.1;">
		<img src="/parallax/atom.svg" alt="" style="display: block; width: 10%; margin-left: 55%;" />
		
	</ParallaxLayer>
	<ParallaxLayer offset="0.2" rate="0.8" style="opacity: 0.1;">
		<img
			src="/parallax/bar-chart-4.svg"
			alt=""
			style="display: block; width: 10%; margin-left: 15%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="0.75" rate="0.5" style="opacity: 0.1;">
		<img
			src="/parallax/candlestick-chart.svg"
			alt=""
			style="display: block; width: 10%; margin-left: 70%;"
		/>
		<img src="/parallax/boxes.svg" alt="" style="display: block; width: 10%; margin-left: 40%;" />
	</ParallaxLayer>

	<ParallaxLayer offset="0" rate="0.2" style="opacity: 0.2;">
		<img src="/parallax/bot.svg" alt="" style="display: block; width: 10%; margin-left: 10%;" />
		<img src="/parallax/sigma.svg" alt="" style="display: block; width: 10%; margin-left: 75%;" />
	</ParallaxLayer>

	<ParallaxLayer offset="0.6" rate="-0.1" style="opacity: 0.4;">
		<img src="/parallax/braces.svg" alt="" style="display: block; width: 10%; margin-left: 60%;" />
		<img src="/parallax/truck.svg" alt="" style="display: block; width: 10%; margin-left: 30%;" />
		<img
			src="/parallax/ship-wheel.svg"
			alt=""
			style="display: block; width: 10%; margin-left: 80%;"
		/>
	</ParallaxLayer>

	<ParallaxLayer offset="1.4" rate="0.4" style="opacity: 0.6;">
		<img src="/parallax/anchor.svg" alt="" style="display: block; width: 10%; margin-left: 75%;" />
	</ParallaxLayer>

	<ParallaxLayer offset="1.6" rate="0.4" style="opacity: 0.6;">
		<img src="/parallax/bitcoin.svg" alt="" style="display: block; width: 10%; margin-left: 5%;" />
	</ParallaxLayer>

	<ParallaxLayer
		offset="1.5"
		rate="-0.4"
		style="display: flex; align-items: center; justify-content: center;"
	>
		<!-- <iframe src="//www.shipmap.org" style="width: 100%; height: 600px; border: 0" frameborder="0"></iframe> -->
		<img src="/parallax/globe.svg	" alt="" style="width: 60%;" />
	</ParallaxLayer>

	<ParallaxLayer
		offset="0"
		rate="0.1"
		style="display: flex; align-items: center; justify-content: center;"
	>
		<Banner></Banner>
	</ParallaxLayer>
</Parallax>

<style>
	:global(body) {
		padding: 0;
	}
	img:focus {
		outline: 1px dotted gray;
	}
	img:focus:not(:focus-visible) {
		outline: none;
	}
</style>
