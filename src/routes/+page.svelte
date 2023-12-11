<script lang="ts">
    import Card from "$lib/card.svelte";
	import DayPage from "$lib/dayPage.svelte";
    import "../app.css"
    import { writable } from "svelte/store";
    let days = [
        {"title": "Day 1", "subtitle": "Naughty or Nice", "dayNumber": 1, "description": "The Elves have been tirelessly creating presents all year round. They’re right on schedule, but today they’ve run into a big problem; the ancient system for tracking who’s been naughty or nice is out of commission. With the hundreds of thousands of letters from children piling up alongside their records of good and bad deeds, the Elves are in dire need of a modern solution. Your mission is to build a system for the elves, enabling them to input names and tally each childs deeds to keep track of whether they’re good or bad. You could even categorise these automatically as “naughty” and “nice.” Fortunately, the elves have been meticulous in their record-keeping and have a backup of all the current data in JSON format. You’ll need to import this data into your newly developed system."},
        {"title": "Day 2", "subtitle": "Merry Munch-o-Meter", "dayNumber": 2},
        {"title": "Day 3", "subtitle": "Jingle Bell Balancer", "dayNumber": 3},
        {"title": "Day 4", "subtitle": "Heart of Christmas", "dayNumber": 4},
        {"title": "Day 5", "subtitle": "Present Progress", "dayNumber": 5},
        {"title": "Day 6", "subtitle": "Misteltoe Metronome", "dayNumber": 6},
        {"title": "Day 7", "subtitle": "Morse Mischief", "dayNumber": 7},
        {"title": "Day 8", "subtitle": "Santa's Mysterious Deck of Doubles", "dayNumber": 8},
        {"title": "Day 9", "subtitle": "Heart of Christmas", "dayNumber": 9},
        {"title": "Day 10", "subtitle": "Present Progress", "dayNumber": 10},
    ]

    const selectedDay = writable(0);
    function handleSelect(dayNumber: any) {
        selectedDay.set(dayNumber);
    }
    $: selectedDayIndex = $selectedDay - 1
</script>

{#if $selectedDay == 0}
    <div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
        {#each days as day}
            <Card 
                title={day.title} 
                description={day.subtitle} 
                dayNumber={day.dayNumber}
                parentHandleSelect={handleSelect}
            />
        {/each}
    </div>
{:else}
    <button class="px-2 py-1 m-2 text-xs rounded bg-neutral-100" on:click={() => {
        selectedDay.set(0)
    }}> go back </button>
    <div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
        <DayPage 
            title={days[selectedDayIndex].title} 
            subtitle={days[selectedDayIndex].subtitle}
            description={days[selectedDayIndex].description}
        />
    </div>
{/if}
