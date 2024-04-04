<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline, CheckCircleSolid } from 'flowbite-svelte-icons';
	let vCard = false;

		
	let elemCarousel: HTMLDivElement;
	const unsplashIds = ['vjUokUWbFOs', '1aJuPtQJX_I', 'Jp6O3FFRdEI', 'I3C_eojFVQY', 's0fXOuyTH1M', 'z_X0PxmBuIQ'];
						
	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}
						

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
						

				
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- GOOD CITATION -->
<section>
	<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
		<figure class="max-w-screen-md mx-auto">
			<svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
			</svg> 
			<blockquote>
				<p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
			</blockquote>
			<figcaption class="flex items-center justify-center mt-6 space-x-3">
				<img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
				<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
					<div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
					<div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
				</div>
			</figcaption>
		</figure>
	</div>
  </section>


  <div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each unsplashIds as unsplashId}
			<img
				class="snap-center w-[1024px] rounded-container-token"
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







<section>
<ul class="posts">
	{#each data.case_studies as case_study}
		<li>
			<a href={case_study.slug} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
				<img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/favicon.png" alt="">
				<div class="flex flex-col justify-between p-4 leading-normal">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{case_study.title}</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{formatDate(case_study.date)}</p>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{case_study.description}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
</section>

<style lang="postcss">
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
	}

	.post:not(:last-child) {
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-7);
	}

	.title {
		font-size: var(--font-size-fluid-3);
		text-transform: capitalize;
	}

	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: var(--size-3);
	}
</style>