/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"c-darkCyan": "hsl(185, 75%, 39%)",
				"c-darkDesaturedBlue":"hsl(229, 23%, 23%)",
				"c-grayishBlue": "hsl(227, 10%, 46%)",
				"c-darkGray": "hsl(0, 0%, 59%)"
			},
			fontFamily:{
				"c-kumbh": ['Kumbh Sans', 'sans-serif']
			},
			backgroundImage:{
				"c-cardBg": "url('images/bg-pattern-card.svg')"
			}
			
		},
	},
	plugins: [],
}
