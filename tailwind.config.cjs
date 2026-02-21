const plugin = require('tailwindcss/plugin')

module.exports = {
	content: ['./src/**/*.{svelte,css,html}'],
	theme: {
		screens: {
			xs: { max: '400px' },
			sm: { max: '640px' }
		},
		extend: {
			backgroundColor: {
				'blue-primary': '#366077',
				'blue-secondary': '#1e3a4a'
			},
			dropShadow: {
				'gray-sm': '1px 1px 1px #bbbbbb',
				gray: '2px 2px 3px #999999'
			},
			textColor: {
				'blue-primary': '#366077'
			},
			transitionProperty: {
				width: 'width',
				height: 'height',
				fontSize: 'font-size',
				font: 'color',
				scale: 'scale'
			},
			outline: {
				blue: '.125rem solid #366077'
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
