<script lang="ts">
    export let description: string
    $: hidden = true

    function hideUnhide() {
        hidden = !hidden
    }
</script>

<div>
    <button class="bg-white p-1 m-2" on:click={hideUnhide}> open/close </button>
{#if !hidden}
    <h1 class="text-neutral-400 w-3/4"> {description}</h1>
{/if}
</div>