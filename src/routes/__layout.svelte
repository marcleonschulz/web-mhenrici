<script lang="ts">
	import '../app.scss';
	import Nav  from '../components/nav.svelte';
	import Footer  from '../components/footer.svelte';
	import Glow from "../components/glow.svelte";
	let test = [{
	name: "Home",
	url: "/"
  },
  {
	name: "Service",
	url: "/service"
  },
  {
	name: "Kontakt",
	url: "/kontakt"
  },]
</script>

<Glow />
<Nav menu={test} dropdown={null} dropdownname='' menuname='' svgpath='/Logo.svg'/>
<slot />
<Footer text="TESTER jaksfhjasfhals"/>