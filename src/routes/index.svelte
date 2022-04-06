<script lang="ts">
	import Card from '../components/card.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Ihr digitaler Auftritt👋</h1>
			<p class="py-6">Unsere Aufgabe: Ihren digitalen Auftritt zu erstellen</p>
			<div class="space-x-4">
				<button href="/kontakt" class="btn ">Kontakt</button>
				<button href="#" class="btn btn-ghost">Mehr Erfahren</button>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col w-full lg:flex-row">
	<div class="grid flex-grow h-72 card bg-base-300 rounded-box place-items-center">
		<Card
			header="Was wir anbieten"
			text="Wir definieren die Art sich mit Kunden zu verbinden neu."
			icon={null}
		/>
	</div>
	<!--<div class="divider lg:divider-horizontal">OR</div>-->
	<div class="grid flex-grow h-72 card bg-base-300 rounded-box place-items-center">
		<Card
			header="Marketing"
			text="Hochwertige Beiträge und Betreuung. 
		Beratung und Strategien für ihren Werbeauftritt."
			icon={{ off: '📢', on: '💰' }}
		/>
	</div>
	<div class="grid flex-grow h-72 card bg-base-300 rounded-box place-items-center">
		<Card
			header="WebDevelopment"
			text="Websites die nicht nur beeindruckend Aussehen, sondern auch welche ihre Message zur Welt trägt."
			icon={{ on: '🖥', off: '📲' }}
		/>
	</div>
	<div class="grid flex-grow h-72 card bg-base-300 rounded-box place-items-center">
		<Card
			header="Beratung"
			text="Egal ob es nur um Vorschläge der Optimierung oder um Strategien für die Digitalewelt geht, wir stehen ihnen zur Seite."
			icon={{ on: '🤝', off: '🧘' }}
		/>
	</div>
</div>
