<script lang="ts">
    import Card from "$lib/card.svelte";
    import "../app.css"
    import { writable } from "svelte/store";
    let days = [
        {"title": "Day 1", "description": "Naughty or Nice", "dayNumber": 1},
        {"title": "Day 2", "description": "Merry Munch-o-Meter", "dayNumber": 2},
        {"title": "Day 3", "description": "Jingle Bell Balancer", "dayNumber": 3},
        {"title": "Day 4", "description": "Heart of Christmas", "dayNumber": 4},
        {"title": "Day 5", "description": "Present Progress", "dayNumber": 5},
        {"title": "Day 6", "description": "Misteltoe Metronome", "dayNumber": 6},
        {"title": "Day 7", "description": "Morse Mischief", "dayNumber": 7},
        {"title": "Day 8", "description": "Santa's Mysterious Deck of Doubles", "dayNumber": 8},
        {"title": "Day 9", "description": "Heart of Christmas", "dayNumber": 9},
        {"title": "Day 10", "description": "Present Progress", "dayNumber": 10},
    ]

    const selectedDay = writable(0);
    function handleSelect(dayNumber: any) {
        selectedDay.set(dayNumber);
    }
</script>

<div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
    {#if $selectedDay == 0}
        {#each days as day}
            <Card 
                title={day.title} 
                description={day.description} 
                dayNumber={day.dayNumber}
                selectedDay={selectedDay}
                parentHandleSelect={handleSelect}
            />
        {/each}
    {:else if $selectedDay == 1}
    <button class="px-2 py-1 m-2 text-xs rounded bg-neutral-100" on:click={() => {
        selectedDay.set(0)
    }}> go back </button>
        <div class="text-xl text-neutral-200"> day 1 </div>
    {/if}
</div>
