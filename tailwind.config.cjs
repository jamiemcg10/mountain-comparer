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
			dropShadow: {
				'gray-sm': '1px 1px 1px #666666',
				'gray': '2px 2px 3px #666666',
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
			}, 
			strokeWidth: {
				'1.5': '1.5',
				'4': '4'
			   }
		}
	},
	variants: {
		extend: {
			fontStyle: ['last'],
			dropShadow: ['hover', 'active']
		},
	},
	plugins: []
}
