<script lang="ts">
	
	import ClearCard from '../components/clear_card.svelte';
</script>

<svelte:head>
  <title>MH - Service</title>
</svelte:head>


<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Was wir machen</h1>
			<p class="py-6">All unsere Dienstleistungen im Überblick</p>
			<div class="space-x-4">
				<a href="/kontakt" class="btn ">Kontakt</a>
			</div>
		</div>
	</div>
</div>

<div class="w-full overflow-x-hidden">
    <div class="mb-20 relative lg:-left-32 xl:-left-32">
    <ClearCard
    text={[
            'Social Media Marketing | Facebook, Instagram, Pinterest, TikTok, YouTube',
            'Website promotion (SEO) | Google, Bing, Yahoo',
            'E-Mail Marketing | E-Mail listen, Newsletter, Abonoments',
            'Beratung für Strategien'
			]}
			titel={['', 'Marketing']}
		/>
    </div>
    
    <div class="mb-20 relative lg:left-32 xl:left-32">
        <ClearCard
                text={[
                    'Entwickeln von Businessseiten',
                    'Webshop',
                    'Landingpage',
                    'Fotos und Videos'
                ]}
                titel={['', 'Entwicklung']}
            />
    </div>

    <div class="mb-20 relative lg:-left-32 xl:-left-32">
        <ClearCard
                text={[
                    'Logo',
                    'Marketing Materialien',
                    'Websites design',
                ]}
                titel={['', 'Design']}
            />
        </div>

        <div class="mb-20 relative lg:left-32 xl:left-32">
            <ClearCard
                    text={['Sicherheit',
                        'Kundengewinnung',
                        'Kundenbindung'
                    ]}
                    titel={['','Beratung']}
                />
            </div>
</div>

<div class="w-full overflow-x-hidden">
    <div class="text-center mb-40 mt-20 max-w-7xl mx-auto">
        <hr class="border-[3px] border-accent w-4/5 mx-auto">
        <p class="font-semibold text-xl m-10">Erfahren Sie wie wir Ihnen helfen können</p>
        <div class="space-x-4">
            <a href="/kontakt" class="btn ">Kontakt</a>
        </div>
    </div>
</div>



<style>
	.btn {
		@apply rounded-full;
	}
</style>
