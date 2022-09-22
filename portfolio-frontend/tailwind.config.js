/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			primary: '#7ab9e0',
			secondary: '#fff794',
			tertiary: '#96ea8c',
			black: '#222431',
			white: '#ffffff',
		},
		fontFamily: {
			sans: ['work-sans', 'sans-serif'],
			serif: ['timberline', 'serif'],
		},
		lineHeight: {
			negative: '0.8',
		},
	},
	plugins: [],
};
