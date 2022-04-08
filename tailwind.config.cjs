const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: [
			{
				mytheme: {
          
					"primary": "#F2F2F2",
          
					"secondary": "#E5E5E5",
							 
					"accent": "#19B3D4",
							 
					"neutral": "#19B3D4",
							 
					"base-100": "#000000",
							 
					"info": "#19B3D4",
							 
					"success": "#24B266",
							 
					"warning": "#D27204",
							 
					"error": "#E95949",

				}
			}
		]
	},
	theme: {
		colors: {
			background: '#000000',
			accent: '#19B3D4',
			banner: '#1B1B1B',
			grey: '#E5E5E5',
			white: '#F2F2F2',
			transparent: '#00',
		},
		extend: {}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
