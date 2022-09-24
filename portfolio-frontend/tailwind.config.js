/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
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
