<script>
	let banner
	import CarrouselIndustries from './Carrousel_Industries.svelte'
</script>

<div
	class="relative isolate overflow-hidden rounded-2xl bg-gray-900 py-24 shadow-2xl sm:py-32"
	bind:this={banner}
>
	<div
		class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
		aria-hidden="true"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div
		class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
		aria-hidden="true"
	>
		<div
			class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0"></div>
		<div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
			<CarrouselIndustries />
		</div>
		<div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
			<div
				class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10"
			>
				<a href="/blog">Blog <span aria-hidden="true">&rarr;</span></a>
				<a href="/case">Case Studies <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Contacts <span aria-hidden="true">&rarr;</span></a>
				<a href="#">Team <span aria-hidden="true">&rarr;</span></a>
			</div>
		</div>
	</div>
</div>

<style>
	.isolate {
		background-color: var(--surface-4);
	}

	a {
		color: var(--text-2);
	}
</style>
