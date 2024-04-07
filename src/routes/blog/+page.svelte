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
	<div class="flex flex-wrap justify-center mt-10">
		{#each data.posts as post}
		<a href={post.slug}>
		
			<div class="p-4 max-w-sm">
				<div class="card flex rounded-lg h-full p-8 flex-col">
					<div class="flex items-center mb-3">
						<div
							class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
							<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
							</svg>
						</div>
						<h2 class="text-white dark:text-white text-lg font-medium">{post.title}</h2>
					</div>
					<div class="flex flex-col justify-between flex-grow">
						<p class="leading-relaxed text-base text-white dark:text-gray-300">
							{post.description}
						</p>
						<p class="leading-relaxed text-base text-white dark:text-gray-300">
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
	
		{/each}
	</div>
	
	</section>
	
	<style lang="postcss">
		.card {
			background-color: var(--surface-1);
			border: 2px solid var(--border);
		}
		.card:hover {
			background-color: var(--surface-3);
		}
		p , h5, h2, .pr-3{
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