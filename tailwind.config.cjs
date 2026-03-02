const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{svelte,css,html}'],
	theme: {
		screens: {
			xs: { max: '400px' },
			sm: { max: '640px' }
		},
		extend: {
			fontSize: {
				h1: '4em',
				h2: '3.5em',
				h3: '2em',
				h4: '1.5em'
			},
			backgroundColor: {
				'blue-primary': '#366077',
				'blue-secondary': '#1e3a4a'
			},
			dropShadow: {
				'gray-sm': '1px 1px 1px #bbbbbb',
				gray: '2px 2px 3px #999999'
			},
			textColor: {
				'blue-primary': '#366077',
				light: '#d5d5d5'
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
				fontSize: 'font-size',
				font: 'color',
				scale: 'scale'
			},
			strokeWidth: {
				1.5: '1.5',
				4: '4'
			},
			screens: {
				touch: { raw: '(pointer: coarse)' },
				pointer: { raw: '(pointer: fine)' }
			}
		}
	}
}
