<script lang="ts">
    import { slide } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Toggle from './toggle.svelte'
    import * as config from '$lib/config'
    let isOpen = false;
    let isLargeScreen = false;

    onMount(() => {
        isLargeScreen = window.innerWidth >= 768;
        window.addEventListener('resize', () => {
            isLargeScreen = window.innerWidth >= 768;
        });
    });
</script>

<nav class="navbar">
    <a href="/" class="text-lg font-semibold">{config.title} </a>
    {#if !isOpen && !isLargeScreen}
        <button on:click={() => isOpen = !isOpen} class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </button>
    {/if}
    {#if isOpen || isLargeScreen}
        <div class="nav-links" transition:slide={{duration: 300}}>
            <ul class="text-m flex flex-col gap-[40px] sm:flex-row">
                {#if isOpen && !isLargeScreen}
                    <li>
                        <button on:click={() => isOpen = !isOpen} class="close-button">X</button>
                    </li>
                {/if}
                <li>
                    <a href="/blog">Blog</a>
                </li>
                <li>
                    <a href="/case_studies">Case Studies</a>
                </li>
                <li>
                    <Toggle />
                </li>
            </ul>
        </div>
    {/if}
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--surface-2);
        padding: var(--size-3);
        width: 95%;
        margin-inline: auto;
        transition: background-color 0.3s ease;
    }

    a {
        color: inherit;
        text-decoration: none;
        color: var(--text-2);
        transition: color 0.3s ease;
    }

    .hamburger, .close-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        box-sizing: border-box;
        margin-left: auto;
        transition: transform 0.3s ease;
    }

    .hamburger div {
        width: 2rem;
        height: 0.25rem;
        background: var(--text-2);
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }

    .close-button {
        color: var(--text-2);
        font-size: 1.5rem;
        transition: color 0.3s ease;
        border: 1px solid var(--text-2); /* Add a border */
        border-radius: 50%; /* Make it circular */
        margin-right: 1rem; /* Add some margin */
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--surface-2);
        padding: var(--size-3);
        width: 95%;
        margin-inline: auto;
        transition: background-color 0.3s ease;
    }

    .navbar:hover {
        background-color: var(--surface-1); /* Change color on hover */
    }

    @media (min-width: 768px) {
        .hamburger {
            display: none;
        }

        .nav-links {
            display: flex;
            gap: var(--size-7);
            margin-block: 0;
        }
    }
</style>