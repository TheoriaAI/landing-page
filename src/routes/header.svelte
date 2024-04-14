<script>
    import { onMount } from 'svelte';
    import Toggle from './toggle.svelte'
    
    let isOpen = false;
    let isLargeScreen = false;

    onMount(() => {
        isLargeScreen = window.innerWidth >= 768;
        window.addEventListener('resize', () => {
            isLargeScreen = window.innerWidth >= 768;
        });
    });
</script>

<header>
    <nav class="container mx-auto px-6 py-3 navbar" >
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
            <div class="flex justify-between items-center">
                <div>
                    <a class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">Theoria AI</a>
                </div>

                <!-- Mobile menu button -->
                <div class="flex md:hidden">
                    <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu" on:click={() => isOpen = !isOpen}>
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                            <path fill-rule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 6a1 1 0 100 2h14a1 1 0 100-2H5zm1 6a1 1 0 011-1h14a1 1 0 110 2H6a1 1 0 01-1-1z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div class={`${isOpen ? 'block' : 'hidden'} md:flex items-center`}>
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/blog">Blog</a>
                    <a class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="/case_studies">Case Studies</a>
                    <a class="my-1 text-sm text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"> <Toggle/> </a>
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