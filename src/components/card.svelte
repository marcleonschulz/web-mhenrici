<script>
    export let header = "";
    export let text = "";
    export let icon;
</script>
<div class="card w-96">
    {#if icon}
    <figure class="px-10 pt-10">
        <label class="swap swap-flip text-4xl">
  
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox"/>
            
            <div class="swap-on">{icon.on}</div>
            <div class="swap-off">{icon.off}</div>
          </label>
    </figure>
    {/if}
    <div class="card-body items-center text-center">
      <h2 class="card-title">{header}</h2>
      <p>{text}</p>

    </div>
  </div>