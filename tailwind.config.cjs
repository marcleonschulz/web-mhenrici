const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			background: '#000000',
			accent: '#19B3D4',
			banner: '#1B1B1B',
			grey: '#E5E5E5',
			white: '#F2F2F2',
		},
		extend: {}
	},

	plugins: [require("daisyui")],
};

module.exports = config;
