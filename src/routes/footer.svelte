<script lang="ts">
	import * as config from '$lib/config'
</script>

<footer>
	<p>{config.title} &copy {new Date().getFullYear()}</p>
	<blockquote>
		"You miss 100% of the shots you don’t take". - Wayne Gretzky
		<span>Michael Scott</span>
	</blockquote>
</footer>

<style>
	footer {
		padding-block: var(--size-7);
		border-top: 1px solid var(--border);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
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
