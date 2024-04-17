<script lang="ts">
	export let data
	import { formatDate } from '$lib/utils'
</script>

<!-- 
<svelte:head>
	<title>{config.title}</title>
</svelte:head> 
-->

<section>
	<div class="relative px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
		<div class="absolute inset-0">
			<div class="h-1/3 sm:h-2/3"></div>
		</div>
		<div class="relative mx-auto max-w-7xl">
			<div class="text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Case studiesssss
				</h2>
				<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
					Some examples for case studies
				</p>
			</div>
			<div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
				{#each data.case_studies as case_study}
					<a href={case_study.slug}>
						<div class="zoom flex flex-col rounded-lg shadow-lg">
							<div class="flex-shrink-0">
								<img class="h-48 w-full object-cover" src={case_study.image} alt="" />
							</div>
							<div class="card flex flex-1 flex-col justify-between p-6">
								<div class="flex-1">
									<p class="text-sm font-medium text-indigo-600">
										<a href={case_study.slug} class="hover:underline">Blog</a>
									</p>
									<a href={case_study.slug} class="mt-2 block">
										<p class="text-xl font-semibold text-gray-900">{case_study.title}</p>
										<p class="mt-3 text-base text-gray-500">{case_study.description}</p>
									</a>
								</div>
								<div class="mt-6 flex items-center">
									<!-- Author Photo-->
									<div class="flex-shrink-0">
										<a href="#">
											<span class="sr-only">Roel Aufderehar</span>
											<img class="h-10 w-10 rounded-full" src={case_study.author_image} alt="" />
										</a>
									</div>
									<div class="ml-3">
										<!-- Author Name -->
										<p class="text-sm font-medium text-gray-900">
											<a href="#" class="hover:underline">{case_study.author}</a>
										</p>
										<div class="flex space-x-1 text-sm text-gray-500">
											<time>{formatDate(case_study.date)}</time>
											<!-- <span aria-hidden="true">·</span> -->
											<!-- <span>6 min read</span> -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.zoom {
		transition: transform 0.3s ease;
	}

	.zoom:hover {
		transform: scale(1.05);
	}

	.card {
		background-color: var(--surface-1);
		border: 2px solid var(--border);
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
