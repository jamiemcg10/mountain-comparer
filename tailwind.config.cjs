module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{svelte,css,html}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				'blue-primary': '#3e6d89',
				'blue-secondary': '#1e3a4a'
			},
			textColor: {
				'blue-primary': '#3e6d89'
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
				fontSize: 'font-size',
				font: 'color',
				scale: 'scale'
			},
			outline: {
				blue: '.125rem solid #3e6d89'
			}
		}
	},
	variants: {
		extend: {
			fontStyle: ['last']
		}
	},
	plugins: []
}
