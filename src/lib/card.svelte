<script lang="ts">
    export let title: string
    export let description: string = ""
    export let dayNumber: number;
    export let selectedDay: any;
    export let parentHandleSelect: any;
    
    function handleSelect() {
        parentHandleSelect(dayNumber);
  }
</script>

<div class="m-2 pt-2 p-3 w-60 rounded-md bg-neutral-600">
    <h1 class="text-xl text-neutral-200">{title}</h1>
    <p class="text-xs mt-0 mb-2 text-neutral-400">
        {description}
    </p>
    <button 
        class="px-2 py-1 text-xs rounded bg-neutral-100" 
        on:click={handleSelect}
    >View</button>
</div>
