<script>
    export let top = Boolean("true");
</script>

{#if top === true}
<div class="pointer-events-none w-[210%] h-[230vh] rounded-full fixed top-0 left-0 z-0" style="background-image: radial-gradient(38.72% 38.72% at 50% 50%, rgba(67, 160, 180, 0.9) 0%, rgba(25, 166, 197, 0.7) 17.19%, rgba(27, 27, 27, 0) 100%) ;"></div>
{:else if top === false}
<div class=" pointer-events-none w-[210%] h-[230vh] rounded-full fixed bottom-0 right-0 z-0" style="background-image: radial-gradient(38.72% 38.72% at 50% 50%, rgba(67, 160, 180, 0.9) 0%, rgba(25, 166, 197, 0.7) 17.19%, rgba(27, 27, 27, 0) 100%) ;"></div>
{/if}