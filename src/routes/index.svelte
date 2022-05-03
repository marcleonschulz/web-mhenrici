<script lang="ts">
	import Card from '../components/card.svelte';
	import ClearCard from '../components/clear_card.svelte';
</script>

<svelte:head>
  <title>MH - Home</title>
  <meta http-equiv="Pragma" content="cache">
  <meta name="robots" content="INDEX,FOLLOW">
  <meta http-equiv="content-Language" content="de">
  <meta name="description" content="Ich erstelle und verbessere den online Auftritt ihres Geschäfts. Als Berater oder Entwickler stehe ich ihnen zur Seite.">
  <meta name="keywords" content="Beratung, Entwicklung, Website, Apps, online, Marketing, erstellen">
  <meta name="revisit-after" content="7 days">
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
			text="Wir definieren die Art, wie Sie sich mit Kunden verbinden, neu."
			icon={null}
		/>
	</div>
	<!--<div class="divider lg:divider-horizontal">OR</div>-->
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="Marketing"
			text="Hochwertige Beiträge und Betreuung. 
		Beratung und Strategien für Ihren Werbeauftritt."
			icon={{ off: '📢', on: '💰' }}
		/>
	</div>
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="WebDevelopment"
			text="Websites, die nicht nur beeindruckend aussehen, sondern auch Ihre Botschaft in die Welt tragen."
			icon={{ on: '🖥', off: '📲' }}
		/>
	</div>
	<div class="grid flex-grow h-72 card place-items-center">
		<Card
			header="Beratung"
			text="Egal, ob es sich um Optimierungsvorschläge oder um Strategien für die digitale Welt handelt, wir
			stehen Ihnen zur Seite."
			icon={{ on: '🤝', off: '🧘' }}
		/>
	</div>
</div>
</div>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content">
		<ClearCard
			text={[
				'Websites sind für uns nicht nur ein einfacher Job, sie sind eine Kunstform. \n Marketing ist, egal in welcher Form und Art, ein Job für den es keine einfache Vorlage gibt.',
				'Ein Webauftritt muss betreut und gemanagt werden. Wir wissen, wie es geht. Marketing, Bilder oder Videos für Social Media, kein Problem. Online wie offline erreichen Sie jeden Kunden. Und wenn Sie noch nicht wissen, wer Ihre Kunden sind, sind wir da, um ihre optimale Zielgruppe zu finden 🎯 .'
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
