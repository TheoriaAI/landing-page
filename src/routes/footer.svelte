<script lang="ts">
	import * as config from '$lib/config'
	let footer
</script>

<nav
	class="bg-silver top-0 flex flex-wrap justify-around rounded-t-lg bg-gray-800 py-3 text-white shadow-lg"
>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<p class="quote">Tailored AI solutions for your business</p>
</nav>

<style>
	nav {
		background-color: var(--surface-2);
		padding: var(--size-3);
		width: 95%;
		margin-inline: auto;
	}
	p {
		padding: var(--size-2);
	}
	.quote {
		color: inherit;
		text-decoration: none;
		color: var(--text-2);
		padding: var(--size-2);
	}
</style>
