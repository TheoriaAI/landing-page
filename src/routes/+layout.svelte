<script lang="ts">
	import '../app.pcss'
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.pcss'

	export let data
</script>

<div class="layout">
	<Header></Header>

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer></Footer>
</div>

<style>
	
	.layout {
		width: 100%;
		/* max-inline-size: 1440px; */
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
		background-color: var(--surface-3);
	}

	main {
		margin-inline: auto;
		padding-block: var(--size-9);
		width: 95%;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}
</style>
