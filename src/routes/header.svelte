<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
</script>

<!-- make the background color slightly transparent
 -->
<nav
	class="bg-silver top-0 flex flex-wrap justify-around rounded-b-lg bg-gray-800 py-3 text-white shadow-lg"
>
	<a href="/" class="text-lg font-semibold">{config.title} </a>
	<ul class="text-m flex gap-[40px]">
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
