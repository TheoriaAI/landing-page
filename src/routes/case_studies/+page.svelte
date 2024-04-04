<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data

	import { Card, Button, Toggle } from 'flowbite-svelte';
	let hCard = false;
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let vCard = false;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>




<section>
	<!-- <div class="space-y-4">
		<Card img="/favicon.png" href="/" horizontal size="md" reverse={hCard}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
		</Card>
		<Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
	</div> -->
	<div  class="space-y-4">
		<Card img="/favicon.png" reverse={vCard}>
		  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
		  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
		  <Button>
			Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
		  </Button>
		</Card>
		<Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle>
	  </div>

<!-- 
	<ul class="posts">
		{#each data.case_studies as case_study}
			<li class="post">
				<a href={case_study.slug} class="title">{case_study.title}</a>
				<p class="date">{formatDate(case_study.date)}</p>
				<p class="description">{case_study.description}</p>
			</li>
		{/each}
	</ul> -->
</section>
<!-- 
<style>
	.posts {
		display: grid;
		gap: var(--size-7);
	}

	.post {
		max-inline-size: var(--size-content-3);
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
</style> -->
