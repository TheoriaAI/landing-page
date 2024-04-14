<script>
	import { onMount } from 'svelte'
	import Toggle from './toggle.svelte'

	let isOpen = false
	let isLargeScreen = false

	onMount(() => {
		isLargeScreen = window.innerWidth >= 768
		window.addEventListener('resize', () => {
			isLargeScreen = window.innerWidth >= 768
		})
	})

	import { writable } from 'svelte/store'
	import Modal from 'svelte-simple-modal'
	import Popup from '$lib/components/custom/Popup.svelte'
	const modal = writable(null)
	const showModal = () => modal.set(Popup)
</script>

<header>
	<nav class="navbar container mx-auto rounded-b-3xl px-6 py-3">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between">
			<div class="flex items-center justify-between">
				<div>
					<a
						class="text-2xl font-bold text-gray-800 hover:text-gray-700 lg:text-3xl dark:text-white dark:hover:text-gray-300"
						href="/">Theoria AI</a
					>
				</div>

				<!-- Mobile menu button -->
				<div class="flex md:hidden">
					<button
						type="button"
						class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
						aria-label="toggle menu"
						on:click={() => (isOpen = !isOpen)}
					>
						<svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
							<path
								fill-rule="evenodd"
								d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 6a1 1 0 100 2h14a1 1 0 100-2H5zm1 6a1 1 0 011-1h14a1 1 0 110 2H6a1 1 0 01-1-1z"
							></path>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div class={`${isOpen ? 'block' : 'hidden'} items-center md:flex`}>
				<div class="flex flex-col md:mx-6 md:flex-row">
					<a
						class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
						href="/blog">Blog</a
					>
					<a
						class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
						href="/case_studies">Case Studies</a
					>
					<Modal show={$modal}>
						<a
							class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
							on:click={showModal}
							>Schedule a Call
						</a>
					</Modal>
					<a
						class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
					>
						<Toggle />
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar {
		background-color: var(--surface-2);
		width: 95%;
	}

	.navbar:hover {
		background-color: var(--surface-1); /* Change color on hover */
	}

	a {
		color: inherit;
		text-decoration: none;
		color: var(--text-2);
		transition: color 0.3s ease;
	}
</style>
