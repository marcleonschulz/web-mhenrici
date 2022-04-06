<script lang="ts">
	export let text = '';
	export let svgpath = '';
	export let company = '';
	export let year = '';
</script>

<footer class="footer footer-center p-5 bg-white bg-opacity-40 backdrop-blur-md backdrop-brightness-75 text-white">
	<div>
		<img src="{svgpath}" alt="Logo" class="h-10 w-10" />
	  <p class="">
		{company} <br>{text}
	  </p> 
	  <p>Copyright © {year} - All rights reserved</p>
	</div> 
  </footer>

<style>
</style>
