/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			blue: '#7ab9e0',
			yellow: '#fff794',
			white: '#ffffff',
			black: '#222431',
		},
		fontFamily: {
			sans: ['proxima-nova', 'sans-serif'],
			serif: ['tzimmes', 'serif'],
		},
		lineHeight: {
			negative: '0.8',
		},
	},
	plugins: [],
};
