/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
	important: true,
	theme: {
		extend: {
			colors: {
				orange: colors.orange,
				blue: colors.blue,
				green: colors.green,
				cyan: colors.cyan,
				violet: colors.violet,
			},
		},
		fontFamily: {
			sans: ['work-sans', 'montserrat', 'sans-serif'],
			serif: ['timberline', 'serif'],
			body: ['work-sans', 'montserrat', 'sans-serif'],
		},
		lineHeight: {
			negative: '0.8',
		},
	},
	plugins: [],
};
