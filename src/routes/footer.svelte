<script lang="ts">
	import * as config from '$lib/config'
	let footer;
</script>

<nav class="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver rounded-t-lg shadow-lg">
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<p class="quote">
		Tailored AI solutions for your business
	</p>
</nav>

<style>
	nav {
		background-color: var(--surface-2);
		padding: var(--size-3);
		width: 95%;
		margin-inline: auto;
	} 
	p{
		padding: var(--size-2);
	}
	.quote {
		color: inherit;
		text-decoration: none;
		color: var(--text-2);
		padding: var(--size-2);
	}
</style>
