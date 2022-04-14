<script lang="ts">
	import Card from '../components/card.svelte';
	import ClearCard from '../components/clear_card.svelte';
</script>

<svelte:head>
  <title>MH - Home</title>
</svelte:head>


<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Ihr digitaler Auftritt👋</h1>
			<p class="py-6">Unsere Aufgabe: Ihren digitalen Auftritt zu erstellen</p>
			<div class="space-x-4">
				<a href="/kontakt" class="btn ">Kontakt</a>
				<a href="/service" class="btn btn-ghost">Mehr Erfahren</a>
			</div>
		</div>
	</div>
</div>

<div class="bg-banner bg-opacity-100 w-full" >
<div class="flex flex-col w-9/10 lg:flex-row m-auto">
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="Unser Service"
			text="Wir definieren die Art wie sich sich mit Kunden verbinden neu."
			icon={null}
		/>
	</div>
	<!--<div class="divider lg:divider-horizontal">OR</div>-->
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="Marketing"
			text="Hochwertige Beiträge und Betreuung. 
		Beratung und Strategien für ihren Werbeauftritt."
			icon={{ off: '📢', on: '💰' }}
		/>
	</div>
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="WebDevelopment"
			text="Websites die nicht nur beeindruckend Aussehen, sondern auch welche ihre Message zur Welt trägt."
			icon={{ on: '🖥', off: '📲' }}
		/>
	</div>
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="Beratung"
			text="Egal ob es nur um Vorschläge der Optimierung oder um Strategien für die Digitalewelt geht, wir stehen ihnen zur Seite."
			icon={{ on: '🤝', off: '🧘' }}
		/>
	</div>
</div>
</div>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content">
		<ClearCard
			text={[
				'Websites sind für uns nicht nur ein einfacher Job, sie sind eine Kunstform. \nMarketing ist egal über welche Form und in welcher Art ein Job für den es kein einfaches Template gibt.',
				'Ein Webauftritt muss betreut und gemanged werden. Wir wissen wie es geht. \n Marketing, Bilder oder Videos für Social Media, kein Problem. \n Online wie offline erreichen Sie jeden Kunden. Und wenn Sie noch nicht wissen wer ihre Kunden sind, wir sind da zur findung ihrer optimalen Zielgruppe 🎯.'
			]}
			titel={['Über uns', 'Weil Website und Marketing 🤝 gehen.']}
		/>
	</div>
</div>
<style>
	.btn {
		@apply rounded-full;
	}
</style>
