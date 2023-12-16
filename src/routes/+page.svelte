<script lang="ts">
    import "../app.css"
    import { writable } from "svelte/store";

    import Card from "$lib/card.svelte";
	import DayPage from "$lib/dayPage.svelte";
    let currentAdvent = "aos"
    let aosdays = [
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
    let aocdays = [
        {"title": "Day 1", "subtitle": "Trebuchet?!", "dayNumber": 1, "description": "Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems. You've been doing this long enough to know that to restore snow operations, you need to check all fifty stars by December 25th. Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck! You try to ask why they can't just use a weather machine (\"not powerful enough\") and where they're even sending you (\"the sky\") and why your map looks mostly blank (\"you sure ask a lot of questions\") and hang on did you just say the sky (\"of course, where do you think snow comes from\") when you realize that the Elves are already loading you into a trebuchet (\"please hold still, we need to strap you in\"). As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been amended by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document. The newly-improved calibration document consists of lines of text; each line originally contained a specific calibration value that the Elves now need to recover. On each line, the calibration value can be found by combining the first digit and the last digit (in that order) to form a single two-digit number."},
        {"title": "Day 2", "subtitle": "Cube Conundrum", "dayNumber": 2},
        {"title": "Day 3", "subtitle": "Gear Ratios", "dayNumber": 3},
        {"title": "Day 4", "subtitle": "Scratchcards", "dayNumber": 4},
        {"title": "Day 5", "subtitle": "If You Give A Seed A Fertilizer", "dayNumber": 5},
        {"title": "Day 6", "subtitle": "Wait For It", "dayNumber": 6},
        {"title": "Day 7", "subtitle": "Camel Cards", "dayNumber": 7},
        {"title": "Day 8", "subtitle": "Haunted Wasteland", "dayNumber": 8},
        {"title": "Day 9", "subtitle": "Mirage Maintenance", "dayNumber": 9},
        {"title": "Day 10", "subtitle": "Pipe Maze", "dayNumber": 10},
    ]

    const selectedDay = writable(0);
    function handleSelect(dayNumber: any) {
        selectedDay.set(dayNumber);
    }
    $: selectedDayIndex = $selectedDay - 1
</script>

<div class="flex flex-row mt-5 ml-[15%] m-8">
    <h1 class="text-neutral-300 mr-2"> Choose an Advent:</h1>
    <select 
        class=""
        bind:value={currentAdvent} 
        >
        <option value={"aoc"}>Advent of Code</option>
        <option value={"aos"}>Advent of svelte</option>
    </select>
</div>

{#if $selectedDay == 0 && currentAdvent == "aos"}
    <div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
        {#each aosdays as day}
            <Card 
                title={day.title} 
                description={day.subtitle} 
                dayNumber={day.dayNumber}
                parentHandleSelect={handleSelect}
            />
        {/each}
    </div>
{:else if currentAdvent == "aos"}
    <button class="px-2 py-1 m-5 text-xs rounded bg-neutral-100" on:click={() => {
        selectedDay.set(0)
    }}> go back </button>
    <div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
        <DayPage 
            title={aosdays[selectedDayIndex].title} 
            subtitle={aosdays[selectedDayIndex].subtitle}
            description={aosdays[selectedDayIndex].description}
        />
    </div>
{:else if $selectedDay == 0 && currentAdvent == "aoc"}
    <div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
        {#each aocdays as day}
            <Card 
                title={day.title} 
                description={day.subtitle} 
                dayNumber={day.dayNumber}
                parentHandleSelect={handleSelect}
            />
        {/each}
    </div>
{:else if currentAdvent == "aoc"}
    <button class="px-2 py-1 m-5 text-xs rounded bg-neutral-100" on:click={() => {
        selectedDay.set(0)
    }}> go back </button>
    <div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
        <DayPage 
            title={aocdays[selectedDayIndex].title} 
            subtitle={aocdays[selectedDayIndex].subtitle}
            description={aocdays[selectedDayIndex].description}
        />
    </div>
{/if}
