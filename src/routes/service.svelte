<script lang="ts">
	
	import ClearCard from '../components/clear_card.svelte';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">Was wir machen</h1>
			<p class="py-6">All unsere Dienstleistungen im Überblick</p>
			<div class="space-x-4">
				<button href="/kontakt" class="btn ">Kontakt</button>
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

<style>
	.btn {
		@apply rounded-full;
	}
</style>
