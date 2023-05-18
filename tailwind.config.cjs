/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["NunitoVariable", "Nunito", ...defaultTheme.fontFamily.sans],
			  },
		},
	},
	plugins: [],
	corePlugins: {
		preflight:false,
	},
}
