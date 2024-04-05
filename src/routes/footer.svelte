<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<blockquote>
		Tailored AI Solution for your Business
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 95%;
	}
	footer blockquote {
		border: none;
		font-size: var(--size-4);
		max-inline-size: var(--size-content-3);
	}
	footer blockquote span {
		font-size: var(--size-3);
		border: none;
	}

	p {
		color: var(--text-2);
	}
</style>
