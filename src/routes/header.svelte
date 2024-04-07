<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>

<!-- make the background color slightly transparent
 -->
<nav class="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver rounded-b-lg shadow-lg">
	<a href="/" class="text-lg font-semibold">{config.title}
	</a>
	<ul class="flex gap-[40px] text-m">
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li>
			<a href="/case_studies">Case Studies</a>
		</li>
	</ul>
	<Toggle />
  </nav>

<style>
	nav {
		background-color: var(--surface-2);
		padding: var(--size-3);
		width: 95%;
		margin-inline: auto;
	} 

	a {
		color: inherit;
		text-decoration: none;
		color: var(--text-2);
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
