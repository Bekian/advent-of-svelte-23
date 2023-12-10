<script lang="ts">
    import Card from "$lib/card.svelte";
import "../app.css"

    let currDay: number = 0
    // the idea is to have a menu with leetcode style cards that display the different days in a menu
    // then you can select the day you want to look at from there
    // day 0 is the menu screen
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
</script>
<nav></nav>
<div class="pt-5 flex flex-row flex-wrap w-3/4 ml-[17.5%]">
    {#if currDay == 0}
        {#each days as day}
            <Card title={day.title} description={day.description} dayNumber={day.dayNumber} />
        {/each}
    {:else if currDay == 1}
        <div> day 1 </div>
    {/if}
</div>
