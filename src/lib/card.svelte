<script lang="ts">
    import { currentDayStore } from "./stores";
    export let title: string
    export let description: string = ""
    export let buttonTitle: string = "View"
    export let dayNumber: number = 0
</script>

<div class="m-2 pt-2 p-3 w-60 rounded-md bg-neutral-600">
    <h1 class="text-xl text-neutral-200">{title}</h1>
    {#if description}
        <p class="text-xs mt-0 mb-2 text-neutral-400">{description}</p>
    {/if}
    <button class="px-2 py-1 text-xs rounded bg-neutral-100" on:submit={
        () => {
            console.log(dayNumber, $currentDayStore)
            $currentDayStore = dayNumber
        }
    }>{buttonTitle}</button>
</div>