<script lang="ts">
	import Card from '../components/card.svelte';
	import ClearCard from '../components/clear_card.svelte';
</script>

<svelte:head>
  <title>MH - Kontakt</title>
</svelte:head>


<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Hier beginnt ihr Webauftritt</h1>
			<p class="py-6">Einfach das Formular ausfüllen, anrufen oder uns eine Mail schreiben.</p>
			<a class="btn btn-primary" href="/service">Service</a>
		</div>
	</div>
</div>

<div class="bg-banner bg-opacity-100 w-full">
	<div class="flex flex-col w-9/10 lg:flex-row m-auto">
		<div class="grid flex-grow h-72 card place-items-center">
			<Card
				header="Wie wir arbeiten"
				text="Mit drei Schritten zu Ihrer online Präsenz."
				icon={null}
			/>
		</div>
		<!--<div class="divider lg:divider-horizontal">OR</div>-->
		<div class="grid flex-grow h-72 card place-items-center">
			<Card
				header="Kontaktieren"
				text="Sprechen Sie uns komplett kostenlos an.

                Wir beißen nicht!"
				icon={{ off: '🗣', on: '🗨' }}
			/>
		</div>
		<div class="grid flex-grow h-72 card place-items-center">
			<Card
				header="Besprechen"
				text="Im ersten kostenlosem Termin werden Wünsche, Ziele und Ideen festgelegt."
				icon={{ on: '🤝', off: '🤝' }}
			/>
		</div>
		<div class="grid flex-grow h-72 card place-items-center">
			<Card
				header="Entwickeln und 
                Veröffentlichen"
				text="Gemeinsam lassen wir Ihre Ideen mit Magie - und mit etwas Programmierung - wahr werden."
				icon={{ on: '💻', off: '🎆' }}
			/>
		</div>
	</div>
</div>
<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col lg:flex-row-reverse">
		<div class="text-center lg:text-left">
			<h1 class="text-5xl font-bold">Let’s meet</h1>
			<p class="py-6">Geben Sie ihre Mail ein, wir verbinden Sie mit der richtigen Person</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
			<form class="card-body" action="https://formsubmit.co/maximilian@mhenrici.de" method="POST">
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">Email</span>
					</label>
					<input type="email" name="email" placeholder="Email" class="input input-bordered" required/>
				</div>
				<div class="form-control">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label">
						<span class="label-text">kleine Einführung</span>
					</label>
					<textarea class="textarea textarea-bordered h-24" name="project-discription" placeholder="Wie können wir Ihnen helfen?" />
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary">Start Projekt</button>
				</div>
				<input type="hidden" name="_next" value="https://mhenrici.de">
				<input type="text" name="_honey" style="display:none">
				<input type="hidden" name="_captcha" value="false">
			</form>
		</div>
	</div>
</div>

<style>
	.btn {
		@apply rounded-full;
	}
</style>
