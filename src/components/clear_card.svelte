<script>
    export let titel;
    export let text;
</script>

<div class="card m-auto p-5 backdrop-blur-sm rounded-lg w-4/6 border ">
    <div class="card-body items-center text-center">
        {#if typeof titel === "string"}
        <h2 class="card-title">{titel}</h2>
        {:else}
        <h1 class="card-title">{titel[0]}</h1>
        <h2 class="card-title">{titel[1]}</h2>
        {/if}
        {#each text as item}
        <h3>{item}</h3>
        {/each}
    <p></p>
    </div>
    
</div>

<style>
    .card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>