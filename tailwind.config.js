module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			first: "#86B9E0",
			second: "#EBF2F6",

			white: "#ffffff",
			black: "#000000",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
