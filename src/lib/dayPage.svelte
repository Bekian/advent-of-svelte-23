<script lang="ts">
    import DescriptionDropdown from "./descriptionDropdown.svelte";
    export let title: string
    export let subtitle: string = ""
    export let description: string = "";
    
</script>

<div class="flex flex-col">
    <div class="m-2 pt-2 p-3 w-fit pr-10 rounded-md bg-neutral-600">
        <h1 class="text-xl text-neutral-200">{title} - {subtitle}</h1>
    </div>
    <DescriptionDropdown {description} />
</div>