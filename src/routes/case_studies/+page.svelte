<script lang="ts">
	export let data
	import { formatDate } from '$lib/utils'
</script>

<!-- 
<svelte:head>
	<title>{config.title}</title>
</svelte:head> 
-->

<!-- <ul class="flex flex-wrap justify-center mt-10">
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
</ul> -->

<section>
	<div class="mt-10 grid grid-cols-3 gap-4">
		{#each data.case_studies as case_study (case_study.slug)}
			<a href={case_study.slug}>
				<a href={case_study.slug}>
					<div class="max-w-sm p-4">
						<div class="card flex h-full flex-col rounded-lg p-8">
							<div class="mb-3 flex items-center">
								<div
									class="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white dark:bg-indigo-500"
								>
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="h-5 w-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<h2 class="text-lg font-medium text-white dark:text-white">{case_study.title}</h2>
							</div>
							<div class="flex flex-grow flex-col justify-between">
								<p class="text-base leading-relaxed text-white dark:text-gray-300">
									{case_study.description}
								</p>
								<p class="text-base leading-relaxed text-white dark:text-gray-300">
									{formatDate(case_study.date)}
								</p>
								<!-- <a href={case_study.slug} class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">{formatDate(case_study.date)}
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a> -->
							</div>
						</div>
					</div>
				</a>
			</a>
		{/each}
	</div>
</section>

<style lang="postcss">
	.grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
	.card {
		background-color: var(--surface-1);
		border: 2px solid var(--border);
		min-width: 200px; 
        min-height: 300px; 
	}
	.card:hover {
		background-color: var(--surface-3);
	}
	p,
	h5,
	h2,
	.pr-3 {
		color: var(--text-2);
	}

	a {
		color: inherit;
		text-decoration: none;
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
