<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- 
<svelte:head>
	<title>{config.title}</title>
</svelte:head> 
-->

<section>
	<div class="mt-10 grid grid-cols-3 gap-4">
		{#each data.posts as post (post.slug)}
		<a href={post.slug}>
				<a href={post.slug}>
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
								<h2 class="text-lg font-medium text-white dark:text-white">{post.title}</h2>
							</div>
							<div class="flex flex-grow flex-col justify-between">
								<p class="text-base leading-relaxed text-white dark:text-gray-300">
									{post.description}
								</p>
								<p class="text-base leading-relaxed text-white dark:text-gray-300">
									{formatDate(post.date)}
								</p>
								<!-- <a href={post.slug} class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">{formatDate(post.date)}
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
		background-color: var(--surface-2);
		border: 2px solid var(--border);
		min-width: 300px; 
        min-height: 300px;
	}x
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
