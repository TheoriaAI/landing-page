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
	<div class="relative px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
		<div class="absolute inset-0">
		  <div class="h-1/3 sm:h-2/3"></div>
		</div>
		<div class="relative mx-auto max-w-7xl">
		  <div class="text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blogging blogging</h2>
			<p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
			  Some examples for blogging</p>
		  </div>
		  <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
	  
			{#each data.posts as post}
				<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<div class="flex-shrink-0">
					<img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1679&amp;q=80" alt="">
				</div>
				<div class="flex flex-1 flex-col justify-between card p-6">
					<div class="flex-1">
					<p class="text-sm font-medium text-indigo-600">
						<a href={post.slug} class="hover:underline">Blog</a>
					</p>
					<a href={post.slug} class="mt-2 block">
						<p class="text-xl font-semibold text-gray-900">{post.title}</p>
						<p class="mt-3 text-base text-gray-500">{post.description}</p>
					</a>
					</div>
					<div class="mt-6 flex items-center">
					<!-- Author Photo-->
					<!-- <div class="flex-shrink-0">
						<a href={post.slug}>
						<span class="sr-only">Roel Aufderehar</span>
						<img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="">
						</a>
					</div> -->
					<div class="ml-3">
						<!-- Author Name -->
						<!-- <p class="text-sm font-medium text-gray-900">
							<a href={post.slug} class="hover:underline">Roel Aufderehar</a>
						</p> -->
						<div class="flex space-x-1 text-sm text-gray-500">
						<time>{formatDate(post.date)}</time>
						<!-- <span aria-hidden="true">·</span> -->
						<!-- <span>6 min read</span> -->
						</div>
					</div>
					</div>
				</div>
				</div>
		
			{/each}
		  </div>
		</div>
	  </div>
</section>


<!-- <section>
	<div class="mt-10 flex flex-wrap justify-center">
		{#each data.posts as post}
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
							<a href={post.slug} class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">{formatDate(post.date)}
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section> -->

<style lang="postcss">
	.card {
		background-color: var(--surface-3);
		border: 2px solid var(--border);
	}
	.card:hover {
		background-color: var(--surface-2);
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
